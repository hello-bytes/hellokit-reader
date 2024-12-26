<template>
    <div class="feed_item_conatiner">
        <div style="height:30px;"></div>
        <div style="display: flex;">
            <div>
                <h2 class="feed_name">{{ feed == null ? "" : feed.name }}</h2>
                <div class="feed_info_desc">
                    <span>{{ followCount }}&nbsp;位订阅用户</span>
                    <span>&nbsp;&nbsp;｜&nbsp;&nbsp;</span>
                    <span>{{ feedItemCount }}&nbsp;篇文章</span>
                </div>
            </div>
            <div style="flex:1"></div>
            <div style="padding-top:25px;">
                <div @click="onSetAllReaded" class="svg_icon_container"><el-icon :size="28"><Check /></el-icon></div>
                <div @click="onRefresh" class="svg_icon_container"><el-icon :size="28"><Refresh /></el-icon></div>
            </div>
        </div>
        <div style="height:1px;background-color: #dcdfe6;margin-top:10px;margin-bottom:24px;"></div>
        <Loading v-if="viewState == 1"></Loading>
        <ErrorView ref="errorViewComp" v-if="viewState == 2"></ErrorView>
        <EmptyFeed v-if="viewState == 3"></EmptyFeed>
        <AllDoneFeed @viewAllFeedItem="viewAllFeedItem" v-if="viewState == 4"></AllDoneFeed>
        <FeedItemList3 :showFeedName=false v-show="viewState == 5" @onLoadMore="onLoadMore" @onReload="onReload" ref="feedItemListComp"></FeedItemList3>
    </div>
</template>

<script>

import browser from '@/service/browser';
import rssbiz from '@/service/rss/rss.js';
import rssfolder from '@/service/rss/folder.js';
import devicebiz from '@/service/device';

import Loading from '~/components/base/Loading.vue';
import ErrorView from '@/components/base/ErrorView.vue';
import EmptyFeed from '@/components/feed/EmptyFeed.vue';
import AllDoneFeed from '@/components/feed/AllDoneFeed.vue';
import FeedItemList3 from '@/components/itemlist/FeedItemListV3.vue'


import { Refresh, Check } from "@element-plus/icons-vue"

export default defineNuxtComponent({
    components: {
        Refresh,FeedItemList3,Loading,EmptyFeed,ErrorView,AllDoneFeed,Check
    },
    
    async asyncData() {
        const route = useRoute();
        let feedID = route.params.feed_id;
        
        // get feedObj
        let feedObj = null;
        let feedResponse = await rssbiz.queryFeedByIDs(true,[feedID]);
        if (helper.isResultOk(feedResponse)){
            if (feedResponse.data.list.length == 1){
                feedObj = feedResponse.data.list[0];
            }
        }

        // 获取统计信息
        let followCount = 0;
        let feedItemCount = 0;
        let feedStaticsResponse = await rssbiz.queryFeedStaticsByIDs(true,[feedID]);
        if (helper.isResultOk(feedStaticsResponse)){
            if(feedStaticsResponse.data.length == 1){
                followCount = feedStaticsResponse.data[0].follow_count;
                feedItemCount = feedStaticsResponse.data[0].feed_item_count;
            }
        }
        
        return {
            feed : feedObj,
            feedItems:[],
            followCount:followCount,
            feedItemCount:feedItemCount,
            viewState:1,
            showAllFeedItem:false,
        }
    },

    mounted() {
        this.loadFeedItems("0",30, 0);
    },

    methods: {
        async loadFeedItems(feedItemID, limit, offset){
            if (this.feed == null ){
                return;
            }

            let readState = 1;
            if (this.showAllFeedItem){
                readState = 0;
            }
            
            let responseData = await rssfolder.getUserFeedItemListByFeed(devicebiz.getDeviceID(), this.feed.feed_id, feedItemID, readState, limit, offset);
            if (!helper.isResultOk(responseData)){
                ElMessage.error("文章列表加载失败，请检查网络或稍后再试。");
                return;
            }

            let feedItems = responseData.data.list;
            let totalCount = responseData.data.total_count;
            if (this.feedItemCount == 0 ){
                // 订阅源下没有文章
                this.viewState = 3;
            }else{
                if(totalCount == 0){
                    this.viewState = 4;
                }else{
                    await this.$refs.feedItemListComp.appendFeedItems(feedItems);
                    this.viewState = 5;
                }
            }
        },

        onRefresh(){
            // this.loadFeedItems("0",30,0);
            this.viewState = 1;
            
            this.$refs.feedItemListComp.clear();
            this.$refs.feedItemListComp.setLoadingMoreState();

            this.loadFeedItems("0", 30, 0);
        },

        async onSetAllReaded(){
            let responseData = await rssfolder.setFeedAllRead(devicebiz.getDeviceID(), this.feed.feed_id, 2);
            if (!helper.isResultOk(responseData)){
                ElMessage.error("标记为已读失败，请稍后再试。");
                return;
            }

            this.viewState = 4;
        },

        viewAllFeedItem(){
            //this.viewState = 1;
            //this.showAllFeedItem = true;
            //this.loadFeedItems(1);

            this.viewState = 1;
            this.showAllFeedItem = true;

            this.$refs.feedItemListComp.clear();
            this.$refs.feedItemListComp.setLoadingMoreState();

            this.loadFeedItems("0", 30, 0);
        },

        onLoadMore(params){
            this.loadFeedItems(params.feedItemID, params.limit, 0 );
        },

        async onReload(){
            window.location.reload();
        },
    }

});

</script>

<style scoped>
.feed_item_conatiner{
    height:100vh;
    /*width:350px;*/
    width:800px;
    margin:0px auto;
    background-color: white;
    border-right: solid 0px rgb(235, 235, 235);
}
.feed_name{
    margin-top:10px;
    margin-bottom:5px;
    font-size:34px;
    font-weight: 700;
}
.feed_info_desc{
    font-size:12px;
    font-weight: 400;
    color:rgb(158, 158, 158);
}
.feed_info_desc > span{
    font-size:12px;
    font-weight: 400;
    color:rgb(158, 158, 158);
}
.rss_middle_right{
    height:100vh;
    /*width:350px;*/
    width:800px;
    margin:0px auto;
    background-color: white;
    border-right: solid 0px rgb(235, 235, 235);
}

</style>