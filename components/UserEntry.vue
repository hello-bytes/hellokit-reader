<template>
    <div>
        <el-popover v-if="userInfo == null" placement="bottom" :width="330" trigger="hover" @show="onShowNotLoginTip">
            <template #reference>
                <img style="width:30px;height:30px;margin:0px 5px 0px 5px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-22/9a463e46367f44e092e6bf9342a2bf25">
            </template>
            <div>
                <div style="display:flex;align-items: center;">
                    <img style="width:30px;height:30px;margin:0px 15px 0px 5px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-22/9a463e46367f44e092e6bf9342a2bf25">
                    <a style="font-size:16px;font-weight: bold;color:#222;text-decoration: none;" href="/user/login">立即登录，获得更多功能</a>
                </div>
                <div style="border-top:1px solid #ccc;margin-top:10px;">
                    <ul class="notlogin_list">
                        <li>
                            <a href="/user/device">当前设备ID：{{ deviceID }}</a>
                        </li>
                        <li>
                            <a href="/user/service">查看我的权益</a>
                        </li>
                        <li>
                            <a href="/about">关于我们</a>
                        </li>
                    </ul>
                    
                    <p v-if="false">数据与上述设备ID关联，过期自动删除。</p>
                    
                </div>
            </div>
        </el-popover>
        <el-popover v-if="userInfo != null" placement="bottom" :width="330" trigger="hover" @show="onShowNotLoginTip">
            <template #reference>
                <img style="width:30px;height:30px;margin:0px 5px 0px 5px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-22/9a463e46367f44e092e6bf9342a2bf25">
            </template>
            <div>
                <div style="display:flex;align-items: center;">
                    <img style="width:30px;height:30px;margin:0px 15px 0px 5px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-22/9a463e46367f44e092e6bf9342a2bf25">
                    <a style="font-size:16px;font-weight: bold;color:#222;text-decoration: none;" href="/user/my/info">{{ userInfo.name }}</a>
                </div>
                <div style="border-top:1px solid #ccc;margin-top:10px;">
                    <ul class="notlogin_list">
                        <li>
                            <a href="/anhao/send/text">我发送的暗号</a>
                        </li>
                        <li>
                            <a href="/anhao/recv/text">我接收的暗号</a>
                        </li>
                        <li style="border-top:1px solid #eee;">
                            <a href="/anhao/recv/text">我打开的文件</a>
                        </li>
                        <li>
                            <a href="/anhao/recv/text">我的备忘录</a>
                        </li>
                        <li style="border-top:1px solid #eee;">
                            <a href="/about">关于我们</a>
                        </li>
                        <li style="border-top:1px solid #eee;">
                            <a href="/user/service">查看我的权益</a>
                        </li>
                        <li>
                            <a href="/user/logout">退出登录</a>
                        </li>
                    </ul>
                    
                    <p v-if="false">数据与上述设备ID关联，过期自动删除。</p>
                    
                </div>
            </div>
        </el-popover>
    </div>
</template>

<script>
import helper from '@/utils/helper';
import loginbiz from '@/utils/loginbiz';
import device from "@/service/device"
export default defineNuxtComponent({
    async asyncData(params) {
        return {
            userInfo : null,
            deviceID : "",
        }
    },

    mounted(){
        this.loadUserInfo();
        this.deviceID = device.getDeviceID();
    },

    methods : {
        onShowNotLoginTip(){

        },
        async loadUserInfo(){
            try{
                let userObjectResponse = await loginbiz.getMyInfoOnline();
                if(!helper.isResultOk(userObjectResponse)){
                    return;
                }

                /*{
                    "uid": "63b2029481964ebebd4aab490de9bc8d",
                    "uid32": 564237604,
                    "email": "",
                    "mobile": "18513582628",
                    "name": "Hello",
                    "wx_open_id": "",
                    "avatar_url": ""
                }*/
                this.userInfo  = userObjectResponse.data;
            }catch(e){
                console.error(e);
            }
        },
    }
})

</script>