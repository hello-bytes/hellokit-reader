<template>
    <div class="page_root_container">
        <h2 class="page_root_title">我订阅的所有内容</h2>
        <el-divider></el-divider>
        <Loading v-if="viewState == 1"></Loading>
        <EmptyFolder v-if="viewState == 2"></EmptyFolder>
        <AllDoneFolder @viewAllFeedItem="viewAllFeedItem" v-if="viewState == 3"></AllDoneFolder>
        <FeedItemListV3 @onLoadMore="onLoadMore" @onReload="onReload" v-show="viewState == 4"  ref="feedItemListComp"></FeedItemListV3>
    </div>
</template>

<script>

import rssbiz from '@/service/rss/rss.js';
import rssfolder from '@/service/rss/folder.js';

import devicebiz  from '@/service/device.js';

import Loading from '~/components/base/Loading.vue';


import FeedItemListV3 from '~/components/itemlist/FeedItemListV3.vue';
import AddRssWhite from "@/icons/AddRssWhite.vue"
import EmptyFolder from "@/components/folder/EmptyFolder.vue"
import AllDoneFolder from "@/components/folder/AllDoneFolder.vue"
import Good from "@/icons/Good.vue"

export default defineNuxtComponent({
    components: {
        Loading,EmptyFolder,FeedItemListV3,AddRssWhite,Good,AllDoneFolder
    },

    async asyncData() {
        return {
            showAllFeedItem:false,
            viewState : 1,
            totalCount : 0,
        }
    },

    mounted() {
        this.loadFeedItems("0", 30, 0);
    },

    methods: {
        async loadFeedItems(feedItemID, limit, offset){
            let readState = 1;
            if (this.showAllFeedItem){
                readState = 0;
            }
            let responseData = await rssfolder.getUserFeedItemList(devicebiz.getDeviceID(), feedItemID, readState, limit, offset);
            if (!helper.isResultOk(responseData)){
                ElMessage.error("文章列表加载失败，请检查网络或稍后再试。");
                return;
            }

            let feedItems = responseData.data.list;
            let totalCount = responseData.data.total_count;
            if (totalCount == 0 ){
                // 根据是否有订阅，来显示不同的内容。 
                // 2 = 没有关注任何订阅源
                // 3 = 有关注源，但今天没有内容
                let responseData = await rssbiz.getUserFeedCount(devicebiz.getDeviceID());
                if (helper.isResultOk(responseData)){
                    if (responseData.data.total_count == 0){
                        this.viewState = 2;
                    }else{
                        this.viewState = 3;
                    }
                }else{
                    this.viewState = 4;
                }
            }else{
                // offset 是本次加载的起点，
                await this.$refs.feedItemListComp.appendFeedItems(feedItems);
                this.viewState = 4;
            }
        },

        onSubscribeFeed(){
            window.location.href = "/feed/website/ft/1.html";
        },

        viewAllFeedItem(){
            this.viewState = 1;
            this.showAllFeedItem = true;

            this.$refs.feedItemListComp.clear();
            this.$refs.feedItemListComp.setLoadingMoreState();
            
            this.loadFeedItems("0", 30, 0);
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

<style scoped>
.rss_middle_right{
    height:100vh;
    width:320px;
    background-color: white;
    border-right: solid 1px rgb(235, 235, 235);
}
</style>