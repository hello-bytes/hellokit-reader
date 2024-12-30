<template>
    <div class="page_root_container">
        <h2 class="page_root_title">稍后阅读</h2>
        <el-divider></el-divider>
        
        <Loading v-if="viewState == 1"></Loading>
        <div v-if="viewState == 2" style="width:800px;margin:0px auto;text-align: center;">
            <img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/reader/read-latre.svg">
            <p style="margin-bottom:0px;font-size:30px;">空空如也</p>
            <p style="margin-bottom:0px;font-size:16px;">你设置为“稍后阅读”的文章将会出现这里。</p>
        </div>
        <FeedItemListV3  v-show="viewState == 3" :readLaterMode="true"  @onLoadMore="onLoadMore" @onReload="onReload"   ref="feedItemListComp"></FeedItemListV3>
    </div>
</template>

<script>

import browser from '@/service/browser';

import rssbiz from '@/service/rss/rss.js';
import readLater from '@/service/rss/read_later.js';
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
            viewState : 1,
            totalCount : 0,
        }
    },

    mounted() {
        this.loadFeedItems("0", 30, 0);
    },

    methods: {
        async loadFeedItems(feedItemID, limit, offset){
            let responseData = await readLater.fetchReadLaterV2(devicebiz.getDeviceID(), feedItemID, limit, offset);
            if (!helper.isResultOk(responseData)){
                ElMessage.error("文章列表加载失败，请检查网络或稍后再试。");
                return;
            }

            let readLaterItems = responseData.data.list;
            let totalCount = responseData.data.total_count;
            if (totalCount == 0 ){
                this.viewState = 2;
            }else{
                let feedItemIds = [];
                for(let index in readLaterItems){
                    feedItemIds.push(readLaterItems[index].feed_item_id);
                }
                
                await this.$refs.feedItemListComp.appendFeedItemIDs(feedItemIds);
                this.viewState = 3;
            }
        },

        async onReload(){
            window.location.reload();
        },

        onLoadMore(params){
            this.loadFeedItems(params.feedItemID, params.limit, 0 );
        },

        onSubscribeFeed(){
            window.location.href = "/feed/website/ft/1.html";
        },

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