<template>
    <div>
        <el-dialog v-model="dialogVisible" title="使用微信登录" width="500" >
            <div>
                <div style="text-align: center;">
                    <div style="height:152px;overflow: hidden;">
                        <div style="z-index:100;border:1px solid #eee;width:150px;height:150px;margin:0px auto;">
                            <img v-show="qrcodeURL != ''" style="width:148px;height:148px;" :src="qrcodeURL" />
                            <div v-if="qrcodeURL == '' && errorText.length == 0" style="z-index:101;width:150px;height:150px;text-align: center;margin-left:auto;margin-right:auto;">
                                <img v-if="qrcodeURL == ''" style="width:50px;height:50px;margin-top: 50px;margin-left:0px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/tools/pdf/loading.gif" />
                            </div>
                            <div @click="onRefreshQR" v-if="errorText.length > 0" style="z-index:101;width:150px;height:150px;text-align: center;margin-left:auto;margin-right:auto;">
                                <div style="height:50px;"></div>
                                <span style="font-size: 60px;"><el-icon><RefreshLeft /></el-icon></span>
                            </div>
                        </div>
                    </div>
                    <p style="color:red;font-size:14px;font-weight:500;margin-right:10px;">{{ errorText }}</p>
                    <p style="font-size:16px;margin-top:3px;margin-bottom:3px;">微信扫码并关注公众号完成登录</p>
                </div>
                <div class="button-container">
                    <div style="height:40px;display:flex;justify-content:center;">
                        <div style="flex:1;"></div>
                        <el-link :underline="false" type="primary" href="/user/login" style="font-size:14px;">使用手机验证码登录</el-link>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <el-link :underline="false" type="primary" href="/user/password/login" style="font-size:14px;">使用账号密码登录</el-link>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>

import emitter from "@/service/event.js";
import { RefreshLeft } from "@element-plus/icons-vue"
import usercenterbiz from "@/service/user.js";

// :before-close="handleClose"

export default defineNuxtComponent({
    components: {
        RefreshLeft
    },

    async asyncData() {
        return {
            dialogVisible:false,
            errorText:"",
            qrcodeURL:"",
        }
    },

    mounted(){
        emitter.on("on_popup_wechatlogin", (param) => {
            this.show();
        });
    },

    methods:{
        show(){
            this.dialogVisible = true;
            this.loadQRCode();
        },

        handleClose(){
            //this.dialogVisible = false;
        },

        async loadQRCode(){
            let responseData = await usercenterbiz.getWxLoginURL();
            if (!helper.isResultOk(responseData) || responseData.data.ticket.length == 0){
                this.errorText = "获取登录二唯码失败。";
                //ElMessage.error("获取登录二唯码失败。")
                return;
            }

            this.ticket = responseData.data.ticket;
            this.url = responseData.data.url;
            this.expireSecond = responseData.data.expire_seconds;

            this.qrcodeURL = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + responseData.data.ticket;

            this.errorText = "";
            this.checkLoginState();
        },

        async checkLoginState(){
            if (this.dialogVisible == false){
                return;
            }

            let responseData = await usercenterbiz.fetchWxLoginState(this.ticket);
            if (helper.isResultOk(responseData)){
                if (responseData.data.state == 1){
                    setTimeout(()=>{
                        this.checkLoginState();
                    },500);
                }else if (responseData.data.state == 2){
                    let token = responseData.data.token;
                    this.refreshUserInfo(token);
                }else if (responseData.data.state > 2){
                    // 失败，提示用户刷新
                    this.qrcodeURL = "";
                    this.errorText = "登录失败，请刷新二唯码以重试。";
                }
            }
        },

        /*async checkLoginStateImpl(){
            
        },*/

        onRefreshQR(){
            this.loadQRCode();
        },

        async refreshUserInfo(token){
            let responseData = await usercenterbiz.getMyUserInfoWithToken(token);
            if (!helper.isResultOk(responseData)){
                //ElMessage.error("获取用户信息失败，请重试。");

                this.qrcodeURL = "";
                this.errorText = "获取用户信息失败，请刷新二唯码以重试。";
                return;
            }

            /* {
                "code": 0,
                "data": {
                    "uid": "7010636bba05410da9edd91e8068d763",
                    "uid32": 3196666287,
                    "email": "",
                    "mobile": "",
                    "name": "微信用户",
                    "wx_open_id": "oQU4-60rYYe7io0tm96j7kIIzL8Q",
                    "avatar_url": ""
                }}*/
            usercenterbiz.saveAuthWithWxCookie(responseData.data.uid,responseData.data.name, responseData.data.mobile, responseData.data.email,responseData.data.wx_open_id, token);
            usercenterbiz.saveLocalUser(responseData.data)

            this.postLoginRedirect();
        },

        postLoginRedirect() {
            helper.saveKV("hellokit.reader.state","inited");
            setTimeout(()=>{
                //let src = this.$route.query.src;
                let src = helper.getK("login_ref_src");
                if (src != null && src != undefined && src.length > 0){
                    window.location.href = src;    
                }else{
                    window.location.href = "/";
                }
            }, 50);
        },
    }
})


</script>

<style scoped>
.title {
    line-height: 2.8rem;
    color: #1b1b1b;
    font-size: 2.4rem;
    font-weight: 600;
    padding: 0;
    margin-top: 16px;
    margin-bottom: 20px;
    font-weight: 600;
    padding: 0px;
}

.button-container {
    margin-top: 30px;
    text-align: right;
}

.input_text {
    height: 36px;
    outline: none;
    font-size: 1.8rem;
    border-color: rgba(0, 0, 0, .6);
    background-color: transparent;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 1px;
    padding-left: 0;
    width: 100%;
}

.input_text:focus {
    border-color: #3472F7;
}
</style>