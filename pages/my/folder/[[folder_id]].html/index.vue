<template>
    <div class="page_root_container">
        <FolderBar @onSetAllReaded="onSetAllReaded" @onRefreshItems="onRefreshFeedItems" :folder="folder"></FolderBar>
        <Loading v-if="viewState == 1"></Loading>
        <EmptyFolder v-if="viewState == 2" :folder="folder"></EmptyFolder>
        <AllDoneFolder @viewAllFeedItem="viewAllFeedItem" v-if="viewState == 3"></AllDoneFolder>
        <FeedItemListV3 v-show="viewState == 4" @onLoadMore="onLoadMore" @onReload="onReload"  ref="feedItemListComp"></FeedItemListV3>
    </div>
</template>

<script>

import devicebiz from '@/service/device';
import rssbiz from '@/service/rss/rss.js';
import rssfolder from '@/service/rss/folder.js';

import Loading from '~/components/base/Loading.vue';
import FolderBar from '@/components/folder/FolderBar.vue';
import EmptyFolder from '@/components/folder/EmptyFolder.vue';
import AllDoneFolder from "@/components/folder/AllDoneFolder.vue"
//import FeedItemList from '~/components/itemlist/FeedItemList.vue';
import FeedItemListV3 from '~/components/itemlist/FeedItemListV3.vue';

export default defineNuxtComponent({
    components: {
        Loading, FolderBar, EmptyFolder, FeedItemListV3,AllDoneFolder
    },

    async asyncData() {
        const route = useRoute();
        let folderID = route.params.folder_id;
        
        return {
            folder : null,
            folderID : folderID,
            viewState : 1,
            showAllFeedItem : false,
        }
    },

    mounted() {
        this.loadFolder(); 
    },

    methods: {
        async loadFolder(){
            let responseData = await rssfolder.getFolderMeta(false, devicebiz.getDeviceID(), this.folderID);
            if (helper.isResultOk(responseData)){
                this.folder = responseData.data;
            }
            this.loadFeedItems("0",30,0);
        },

        async loadFeedItems(feedItemID, limit, offset){
            let readState = 1;
            if (this.showAllFeedItem){
                readState = 0;
            }

            let responseData = await rssfolder.getUserFeedItemListByFolder(devicebiz.getDeviceID(), this.folderID, feedItemID, readState, limit, offset);
            if (!helper.isResultOk(responseData)){
                ElMessage.error("文章列表加载失败，请检查网络或稍后再试。");
                return;
            }

            /*let responseData = await rssbiz.getUserFeedItemsV2(devicebiz.getDeviceID(),this.folderID,readState,30, (pageNumber-1) * 30);
            if (!helper.isResultOk(responseData)){
                ElMessage.error("文章列表加载失败，请检查网络或稍后再试。");
                return;
            }*/

            let startFeedItem = parseInt(feedItemID);
            let feedItems = responseData.data.list;
            let totalCount = responseData.data.total_count;
            if (totalCount == 0 && startFeedItem == 0 ){
                // 检查是否有订阅过内容
                this.checkFeedCount();
            }else{
                //this.viewState = 3;
                await this.$refs.feedItemListComp.appendFeedItems(feedItems);
                this.viewState = 4;
            }
        },

        async checkFeedCount(){
            let responseData = await rssfolder.getFolderCount(false, devicebiz.getDeviceID(),[this.folderID]);
            if (helper.isResultOk(responseData)){
                let staticsFolderList = responseData.data;
                if(staticsFolderList.length == 1){
                    let feedCount = staticsFolderList[0].feed_count;
                    this.viewState = feedCount == 0 ? 2 : 3;
                    return;
                }
            }
            this.viewState =  2;
        },

        onRefreshFeedItems(){
            this.viewState = 1;
            window.location.reload();
            //ElMessage.success("已为您加载最新内容");
        },

        async onSetAllReaded(){
            let responseData = await rssfolder.setFolderAllRead(devicebiz.getDeviceID(), this.folderID, 2);
            if (!helper.isResultOk(responseData)){
                ElMessage.error("标记为已读失败，请稍后再试。");
                return;
            }

            this.viewState = 3;
        },

        viewAllFeedItem(){
            this.viewState = 1;
            this.showAllFeedItem = true;
            
            this.loadFeedItems(1);
        },

        async onReload(){
            window.location.reload();
        },

        onLoadMore(params){
            this.loadFeedItems(params.feedItemID, params.limit, 0 );
        }
    }
});


</script>