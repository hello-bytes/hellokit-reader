<template>
    <el-drawer v-model="showDrawer" :with-header="false" :destroy-on-close="true" :size="drawWidth">
        <div class="close_wrapper" @click="onCloseClick">
            <el-icon :size="30">
                <CloseBold />
            </el-icon>
        </div>
        <el-table :data="feedList" border style="width: 100%" :stripe="true">
            <el-table-column prop="name" label="订阅源" >
                <template #default="scope">
                    <div style="display: flex;align-items: center;font-size:16px;">
                        <el-icon :size="18"><Folder /></el-icon>&nbsp;{{ scope.row.folder_name }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="操作" width="260"  >
                <template #default="scope">
                </template>
            </el-table-column>
        </el-table>
    </el-drawer>
</template>

<script>

import rssbiz from '@/service/rss/rss.js'

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
            feedList:[],
        }
    },

    mounted(){
        emitter.on("on_popup_manage_feed", (param) => {
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

        deleteFolder(folderItem){

        },

        deleteFolderImpl(folderItem){

        },

        cancelDeleteFolder(){

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
