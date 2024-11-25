<template>
    <el-drawer v-model="showDrawer" :with-header="false" :destroy-on-close="true" :size="drawWidth" :before-close="beforeClose">
        <div class="close_wrapper" @click="onCloseClick">
            <el-icon :size="30">
                <CloseBold />
            </el-icon>
        </div>
        <div style="height:10px;"></div>
        <div style="max-width:650px;margin:0px auto;">
            <p v-if="feed.folderList.length == 0" style="font-size:22px;">将“{{ feed.name }}”加到指定文件夹</p>
            <p v-if="feed.folderList.length > 0" style="font-size:22px;">您已订阅“{{ feed.name }}”</p>
            <div style="text-align: right;margin-bottom:10px;" v-if="feed.folderList.length > 0">
                <el-button type="danger"><el-icon :size="18"><FolderRemove /></el-icon>&nbsp;移除所有</el-button>
            </div>
            <el-table :data="folderList" border style="width: 100%" :stripe="true">
                <el-table-column prop="folder_name" label="文件夹名称" >
                    <template #default="scope">
                        <div style="display: flex;align-items: center;font-size:16px;">
                            <el-icon :size="18"><Folder /></el-icon>&nbsp;{{ scope.row.folder_name }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="folder_name" label="操作" width="260"  >
                    <template #default="scope">
                        <el-link  v-if="!scope.row.isFeed" @click="addToFolder(scope.row)"><el-icon :size="18"><Plus /></el-icon>&nbsp;加入</el-link>
                        <el-link type="danger" v-else @click="removeFromFolder(scope.row)"><el-icon :size="18"><Minus /></el-icon>&nbsp;移除</el-link>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <el-popconfirm title="删除后其目录下的内容源都会被取消订阅，确认要删除此目录吗？" width="260" cancel-button-text="取消删除" @confirm="confirmDeleteFolder(scope.row)" @cancel="cancelDeleteFolder" confirm-button-text="确认删除">
                            <template #reference>
                                <el-link @click="deleteFolder(scope.row)"><el-icon :size="18"><FolderDelete /></el-icon>&nbsp;删除</el-link>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top:20px;text-align: right;">
                <span style="color:rgb(100,100,100);font-size:14px;">没有合适的文件夹？</span>
                <el-button type="primary" @click="onAddFolder"><el-icon :size="18"><FolderAdd /></el-icon>&nbsp;&nbsp;创建文件夹</el-button>
            </div>
            
        </div>
    </el-drawer>
</template>

<script>

import helper from '@/utils/helper.js'
import browser from '@/service/browser';
import { CloseBold,Finished,FolderAdd,Folder,Select,FolderRemove,FolderDelete,Plus, Minus } from "@element-plus/icons-vue"

import Cancel from "@/icons/Cancel.vue"

import { ElMessage } from 'element-plus';

import devicebiz from '@/service/device.js'

import userbiz from '@/service/user.js';
import emitter from "@/service/event.js";

import rssbiz from '@/service/rss/rss.js';
import rssfolder from '@/service/rss/folder.js';
import folder from '@/service/rss/folder.js';

export default defineNuxtComponent({
    /* props:{
        feed : {
            type:Object,
            default:null,
        },
    },*/

    components: {
        CloseBold,Finished,Cancel,FolderAdd,Folder,Select,FolderRemove,FolderDelete,Plus, Minus
    },

    async asyncData() {
        return {
            drawWidth:"500",
            showDrawer:false,
            folderList:[],

            feed:null,
        }
    },

    mounted(){
        emitter.on("on_popup_selectfolder", (param) => {
            this.show();

            this.feed = null;
            if (param != undefined){
                this.feed = param.currentFeed;
            }
        });
    },

    methods:{
        async loadFolderList(){
            let responseData = await rssfolder.queryFolderList(false, devicebiz.getDeviceID(),100,0);
            if (helper.isResultOk(responseData)){
                let folderList = responseData.data.page;
                for(let index in folderList){
                    folderList[index].isFeed = false;
                    for (let i in this.feed.folderList){
                        if(this.feed.folderList[i].folder_id == folderList[index].folder_id){
                            folderList[index].isFeed = true;
                        }
                    }
                }
                this.folderList = folderList;
            }
        },

        show(){
            this.showDrawer = true;
            this.loadFolderList();
        },

        onCloseClick(){
            this.showDrawer = false;
            emitter.emit("on_feed_folder_update", {feed: this.feed});
        },

        beforeClose(){
            emitter.emit("on_feed_folder_update", {feed: this.feed});
            this.showDrawer = false;
            //return true;
        },

        async addToFolder(folderObj){
            let responseData = await rssfolder.setFolderFeed(devicebiz.getDeviceID(),this.feed.feed_id, folderObj.folder_id);
            if (helper.isResultOk(responseData)){
                //this.onCloseClick();
                folderObj.isFeed = true;
                ElMessage.success("订阅成功");
                return;
            }else{
                ElMessage.error("订阅失败，请稍后再试。");
            }
            //this.loadFeedState();
        },

        async removeFromFolder(folderObj){
            let responseData = await rssfolder.removeFolderFeed(devicebiz.getDeviceID(),this.feed.feed_id, folderObj.folder_id);
            if (helper.isResultOk(responseData)){
                // this.onCloseClick();
                ElMessage.success("已取消订阅");
                folderObj.isFeed = false;
                //this.loadFeedState();
            }else{
                ElMessage.error("取消订阅失败，请稍后再试。");
            }
        },

        async loadFeedState(){
            let responseData = await rssfolder.getFolderIDByFeedIDs(devicebiz.getDeviceID(),[this.feed.feed_id]);
            if (helper.isResultOk(responseData)) {
                if (responseData.data.length == 1){
                    this.feed.folderList = responseData.data[0].user_folder_list;
                }
            }
        },

        formatTime(time){
            return helper.getHumanTime(time/1000);
        },

        isThisFolder(folderID){
            for(let index in this.feed.folderList){
                if(this.feed.folderList[index].folder_id == folderID){
                    return true;
                }
            }
            return false;
        },

        onAddFolder(){
            this.onCloseClick();
            emitter.emit("on_popup_createfolder",{});
        },

        deleteFolder(folderObj){
            // 
        },

        cancelDeleteFolder(){
        },

        deleteFolderByFolderID(folderID){
            for(let index in this.folderList){
                if(this.folderList[index].folder_id == folderID){
                    this.folderList.splice(index,1);
                    break;
                } 
            }
        },

        async confirmDeleteFolder(folderObj){
            let responseData = await folder.deleteFolder(devicebiz.getDeviceID(), folderObj.folder_id);
            if (!helper.isResultOk(responseData)){
                ElMessage.error("删除文件夹失败，请稍后再试。");
                return;
            }

            this.deleteFolderByFolderID(folderObj.folder_id); 
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

