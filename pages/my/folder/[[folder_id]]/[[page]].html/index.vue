<template>
    <div class="page_root_container">
        <FolderBar @onSetAllReaded="onSetAllReaded" @onRefreshItems="onRefreshFeedItems" :folder="folder"></FolderBar>
        <Loading v-if="viewState == 1"></Loading>
        <EmptyFolder v-if="viewState == 2" :folder="folder"></EmptyFolder>
        <FeedItemList v-show="viewState == 3"  @feedItemCountChange="onFeedItemCountChange" @onPageChange="onPageChange":readedMode="1" :pageMode="1"  ref="feedItemListComp"></FeedItemList>
    </div>
</template>

<script>

import devicebiz from '@/service/device';
import rssbiz from '@/service/rss/rss.js';
import rssfolder from '@/service/rss/folder.js';

import Loading from '~/components/base/Loading.vue';
import FolderBar from '@/components/folder/FolderBar.vue';
import EmptyFolder from '@/components/folder/EmptyFolder.vue';

import FeedItemList from '~/components/itemlist/FeedItemList.vue';

export default defineNuxtComponent({
    components: {
        Loading, FolderBar, EmptyFolder, FeedItemList
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
                this.viewState = 2;
            }else{
                this.viewState = 3;
                this.$refs.feedItemListComp.setFeedItems(feedItems, totalCount);
            }
        },

        onRefreshFeedItems(){
            this.loadFeedItems(1);
            ElMessage.success("已为您加载最新内容");
        },

        onSetAllReaded(){

        },

        onFeedItemCountChange(feedItemCount){
            if (feedItemCount == 0){
                this.viewState = 2;
            }
        },

        async onPageChange(obj){
            await this.loadFeedItems(obj.pageNumber);
            ElMessage.success("已为您加载新的内容。");
        },
    }
});


</script>