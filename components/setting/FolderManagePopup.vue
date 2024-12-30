<template>
    <el-drawer v-model="showDrawer" :with-header="false" :destroy-on-close="true" :size="drawWidth">
        <div class="close_wrapper" @click="onCloseClick">
            <el-icon :size="30">
                <CloseBold />
            </el-icon>
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
                    <el-link type="danger" @click="deleteFolder(scope.row)"><el-icon :size="18"><FolderDelete /></el-icon>&nbsp;删除目录</el-link>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-popconfirm title="删除后其目录下的内容源都会被取消订阅，确认要删除此目录吗？" width="260" cancel-button-text="取消删除" @confirm="confirmDeleteFolder(scope.row)" @cancel="cancelDeleteFolder" confirm-button-text="确认删除">
                        <template #reference>
                            <el-link @click="deleteFolderImpl(scope.row)"><el-icon :size="18"><FolderDelete /></el-icon>&nbsp;删除目录</el-link>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
    </el-drawer>
</template>

<script>

import rssfolder from '@/service/rss/folder.js'

import helper from '@/utils/helper.js'
import { CloseBold } from "@element-plus/icons-vue"

import { FolderAdd } from "@element-plus/icons-vue"

import emitter from "@/service/event.js";

import Loading from '~/components/base/Loading.vue';
import FeedItemList1 from "@/components/itemlist/FeedItemList1.vue";

export default defineNuxtComponent({
    components: {
        CloseBold  
    },

    async asyncData() {
        return {
            drawWidth:"70%",
            showDrawer:false,
            folderList:[],
        }
    },

    mounted(){
        emitter.on("on_popup_manage_folder", (param) => {
            this.folderList = [];
            this.show();

            this.loadFolderList();
        });
    },

    methods:{
        show(){
            this.showDrawer = true;
        },

        onCloseClick(){
            this.showDrawer = false;
        },

        deleteFolder(folderItem){

        },

        deleteFolderImpl(folderItem){

        },

        cancelDeleteFolder(){

        },

        async loadFolderList(){
            let responseData = await rssfolder.queryFolderList(false, devicebiz.getDeviceID(),100,0);
            if (helper.isResultOk(responseData)){
                let folderList = responseData.data.page;
                for(let index in folderList){
                    folderList[index].isFeed = false;
                    if (this.feed != null){
                        for (let i in this.feed.folderList){
                            if(this.feed.folderList[i].folder_id == folderList[index].folder_id){
                                folderList[index].isFeed = true;
                            }
                        }
                    }   
                }
                this.folderList = folderList;
            }
        },
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
