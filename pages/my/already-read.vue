<template>
    <div class="page_root_container">
        <h2 class="page_root_title">已读文章</h2>
        <el-divider></el-divider>
        
        <Loading v-if="viewState == 1"></Loading>
        <div v-if="viewState == 2" style="width:800px;margin:0px auto;text-align: center;">
            <img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/reader/read-latre.svg">
            <p style="margin-bottom:0px;font-size:30px;">空空如也</p>
            <p style="margin-bottom:0px;font-size:16px;">你标记为“已读”的文章会出现在这里。</p>
        </div>
        <FeedItemList  @feedItemCountChange="onFeedItemCountChange" @onPageChange="onPageChange" :readedMode="2" :pageMode="1" v-show="viewState == 3"  ref="feedItemListComp"></FeedItemList>
    </div>
</template>

<script>

import browser from '@/service/browser';

import rssbiz from '@/service/rss/rss.js';
import readLater from '@/service/rss/read_later.js';
import devicebiz  from '@/service/device.js';

import Loading from '~/components/base/Loading.vue';


import FeedItemList from '~/components/itemlist/FeedItemList.vue';
import AddRssWhite from "@/icons/AddRssWhite.vue"

import EmptyFolder from "@/components/folder/EmptyFolder.vue"
import AllDoneFolder from "@/components/folder/AllDoneFolder.vue"
import Good from "@/icons/Good.vue"

export default defineNuxtComponent({
    components: {
        Loading,EmptyFolder,FeedItemList,AddRssWhite,Good,AllDoneFolder
    },

    async asyncData() {
        return {
            viewState : 1,
            totalCount : 0,
        }
    },

    mounted() {
        this.loadFeedItems(1);
    },

    methods: {
        async loadFeedItems(pageNumber){
            
            let responseData = await rssbiz.getUserFeedItems(devicebiz.getDeviceID(),2, 30, (pageNumber-1) * 30);
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
                
                await this.$refs.feedItemListComp.setFeedItemIDs(feedItemIds, totalCount);
                this.viewState = 3;
            }
        },

        onSubscribeFeed(){
            window.location.href = "/feed/page/1.html";
        },

        onFeedItemCountChange(feedItemCount){
            if (feedItemCount == 0){
                this.viewState = 2;
            }
        },

        async onPageChange(obj){
            // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            await this.loadFeedItems(obj.pageNumber);
            ElMessage.success("已为您加载新的内容。")
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