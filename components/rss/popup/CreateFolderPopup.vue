<template>
    <el-drawer v-model="showDrawer" :with-header="false" :destroy-on-close="true" :size="drawWidth">
        <div class="close_wrapper" @click="onCloseClick">
            <el-icon :size="30">
                <CloseBold />
            </el-icon>
        </div>
        <div style="height:30px;"></div>
        <div style="max-width:650px;margin:0px auto;">
            <h2 style="margin-bottom:0px;font-size:34px;">创建文件夹</h2>
            <p style="margin-top:0px;font-size:18px;color:rgb(117, 117, 117);">根据您的喜好，将特定话题或类型的订阅源放到私有文件夹下</p>
            <p style="margin-bottom:0px;margin-top:30px;font-size:14px;">文件夹名称</p>
            <el-input v-model="folderName" @keyup.enter.native="createFolderClick" size="large" placeholder=""></el-input>
            <div style="margin-top:20px;">
                <el-button size="large" type=primary  @click="createFolderClick"><el-icon :size="20"><Finished  /></el-icon>&nbsp;保存</el-button>
                <el-button size="large" @click="cancelFolderClick">取消</el-button>
            </div>
        </div>
    </el-drawer>
</template>

<script>

import helper from '@/utils/helper.js'
import browser from '@/service/browser';
import { CloseBold,Finished } from "@element-plus/icons-vue"
import Cancel from "@/icons/Cancel.vue"

import { ElMessage } from 'element-plus';

import devicebiz from '@/service/device.js'

import userbiz from '@/service/user.js';
import rssbiz from '@/service/rss/rss.js';
import rssfolder from '@/service/rss/folder.js';
import emitter from "@/service/event.js";

export default defineNuxtComponent({
    components: {
        CloseBold,Finished,Cancel,
    },

    async asyncData() {
        return {
            drawWidth:"600",
            showDrawer:false,
            folderName:"",
        }
    },

    mounted(){
        emitter.on("on_popup_createfolder", (param) => {
            this.show();
        });
    },

    methods:{
        show(){
            this.showDrawer = true;
        },

        onCloseClick(){
            this.showDrawer = false;
        },

        onKeyUp(k){
            // onKeyUp(k)
        },

        async createFolderClick(){
            let responseData = null;
            if (userbiz.isUserMode()){
                responseData = await rssfolder.createUserFolder(this.folderName);
            }else if (userbiz.isDeviceMode()){
                responseData = await rssfolder.createDeviceFolder(devicebiz.getDeviceID(), this.folderName);
            }
            
            if (!helper.isResultOk(responseData)){
                ElMessage.error("创建目录失败，请稍后再试。");
                return;
            }

            ElMessage.success("目录创建成功。");
            emitter.emit("on_feed_folder_create", {});

            this.onCloseClick();
        },

        cancelFolderClick(){
            this.onCloseClick();
        },

        formatTime(time){
            return helper.getHumanTime(time/1000);
        }
    }
})

</script>

<style scoped>

.close_wrapper{
    display: inline-block;
    padding-top:5px;
    padding-left:5px;
    padding-right:5px;
    border-radius: 5px;
}
.close_wrapper:hover{
    background-color: #eee;
}
</style>

