<template>
    <div class="page_root_container">
        <FolderBar @onSetAllReaded="onSetAllReaded" @onRefreshItems="onRefreshFeedItems" :folder="folder"></FolderBar>
        <Loading v-if="viewState == 1"></Loading>
        <EmptyFolder v-if="viewState == 2" :folder="folder"></EmptyFolder>
        <AllDoneFolder v-if="viewState == 3"></AllDoneFolder>
        <FeedItemList v-show="viewState == 4"  @feedItemCountChange="onFeedItemCountChange" @onPageChange="onPageChange":readedMode="1" :pageMode="1"  ref="feedItemListComp"></FeedItemList>
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
import FeedItemList from '~/components/itemlist/FeedItemList.vue';

export default defineNuxtComponent({
    components: {
        Loading, FolderBar, EmptyFolder, FeedItemList,AllDoneFolder
    },

    async asyncData() {
        const route = useRoute();
        let folderID = route.params.folder_id;
        //let pageNumber = parseInt(route.params.page);

        return {
            folder : null,
            folderID : folderID,
            viewState : 1
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
            this.loadFeedItems(1);
        },

        async loadFeedItems(pageNumber){
            if (pageNumber < 1) {
                pageNumber = 1;
            }

            let responseData = await rssbiz.getUserFeedItemsV2(devicebiz.getDeviceID(),this.folderID,1,30, (pageNumber-1) * 30);
            if (!helper.isResultOk(responseData)){
                ElMessage.error("文章列表加载失败，请检查网络或稍后再试。");
                return;
            }

            let feedItems = responseData.data.list;
            let totalCount = responseData.data.total_count;
            if (totalCount == 0 ){
                // 检查是否有订阅过内容
                this.checkFeedCount();
            }else{
                //this.viewState = 3;
                await this.$refs.feedItemListComp.setFeedItems(feedItems,pageNumber, totalCount);
                this.viewState = 4;
            }
        },

        async checkFeedCount(){
            let responseData = await rssfolder.getFolderCount(false, [this.folderID]);
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
            this.loadFeedItems(1);
            ElMessage.success("已为您加载最新内容");
        },

        async onSetAllReaded(){
            let responseData = await rssfolder.setFolderAllRead(devicebiz.getDeviceID(), this.folderID, 2);
            if (!helper.isResultOk(responseData)){
                ElMessage.error("标记为已读失败，请稍后再试。");
                return;
            }

            this.viewState = 3;
        },

        onFeedItemCountChange(feedItemCount){
            if (feedItemCount == 0){
                this.viewState = 3;
            }
        },

        async onPageChange(obj){
            await this.loadFeedItems(obj.pageNumber);
            ElMessage.success("已为您加载新的内容。");
        },
    }
});


</script>