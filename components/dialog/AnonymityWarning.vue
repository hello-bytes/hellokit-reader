<template>
    <div>
        <el-dialog v-model="dialogVisible" title="您即将匿名使用哈喽阅读" width="500" >
            <div style="padding:0px 0px 10px 0px;">
                <p class="normal">匿名使用时，您的标识信息存储在浏览器本地。</p>
                <p class="danger">重装浏览器或者使用第三方软件清理浏览器Cookie、缓存等有可能导致账号信息丢失。</p>
                <div style="text-align: right;">
                    <el-button type="primary" size="large" @click="gotoMainPage">我知道了</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>

import emitter from "@/service/event.js";
import { RefreshLeft } from "@element-plus/icons-vue"
import usercenterbiz from "@/service/user.js";


export default defineNuxtComponent({
    components: {
        RefreshLeft
    },

    async asyncData() {
        return {
            dialogVisible:false,
        }
    },

    mounted(){
        emitter.on("on_popup_anonymity_warning", (param) => {
            this.show();
        });
    },

    methods:{
        show(){
            this.dialogVisible = true;
            
        },

        gotoMainPage(){
            helper.saveKV("hellokit.reader.state","inited");
            setTimeout(()=>{
                window.location.href = "/my/today";
            },200);
        }
    }
})


</script>

<style scoped>
.normal{
    color: #000;
    font-weight: bold;
    font-size: 18px;
}
.danger{
    color: #F56C6C;
    font-weight: bold;
    font-size: 18px;
}
</style>