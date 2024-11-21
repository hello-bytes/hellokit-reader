<template>
    <div class="page_root_container">
        <h2 class="page_root_title">我订阅的所有内容</h2>
        <el-divider></el-divider>
        <Loading v-if="viewState == 1"></Loading>
        <EmptyFolder v-if="viewState == 2"></EmptyFolder>
        <AllDoneFolder @viewAllFeedItem="viewAllFeedItem" v-if="viewState == 3"></AllDoneFolder>
        <FeedItemList @feedItemCountChange="onFeedItemCountChange" @onPageChange="onPageChange" :readedMode="1" :pageMode="1" v-show="viewState == 4"  ref="feedItemListComp"></FeedItemList>
    </div>
</template>

<script>

import browser from '@/service/browser';

import rssbiz from '@/service/rss/rss.js';
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
            showAllFeedItem:false,
            viewState : 1,
            totalCount : 0,
        }
    },

    mounted() {
        this.loadFeedItems(1);
    },

    methods: {
        async loadFeedItems(pageNumber){
            let readState = 1;
            if (this.showAllFeedItem){
                readState = 0;
            }
            let responseData = await rssbiz.getUserFeedItems(devicebiz.getDeviceID(),readState, 30, (pageNumber-1) * 30);
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
                await this.$refs.feedItemListComp.setFeedItems(feedItems,pageNumber, totalCount);
                this.viewState = 4;

                // ElMessage.success("已为您加载新的内容。")
            }
        },

        async onPageChange(obj){
            // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            await this.loadFeedItems(obj.pageNumber);
            ElMessage.success("已为您加载新的内容。")
        },

        onSubscribeFeed(){
            window.location.href = "/feed/page/1.html";
        },

        onFeedItemCountChange(feedItemCount){
            if (feedItemCount == 0){
                this.viewState = 3;
            }
        },

        viewAllFeedItem(){
            this.viewState = 1;
            this.showAllFeedItem = true;
            
            this.loadFeedItems(1);
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