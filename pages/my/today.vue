<template>
    <div class="page_root_container">
        <h2 class="page_root_title">今日阅读</h2>
        <p class="page_root_desc">唯有日日翻卷，方能洞见常新。</p>
        <el-divider></el-divider>
        <Loading v-if="viewState == 1"></Loading>
        <div v-if="viewState == 2" style="max-width:800px;margin:0px auto;text-align: center;">
            <div style="height:45px;"></div>
            <el-icon :size="100"><EmptyFolder ></EmptyFolder></el-icon>
            <p style="font-size:16px;margin-bottom:0px;">您还没有订阅任何内容。</p>
            <p style="margin-top:0px;margin-bottom:20px;">添加您喜欢的订阅源，即刻为您展现您的精彩内容。</p>
            <el-button @click="onSubscribeFeed" type="primary" size=large><el-icon :size="18" style="color:#fff"><AddRssWhite></AddRssWhite></el-icon>&nbsp;去订阅</el-button>
        </div>
        <div v-if="viewState == 3" style="max-width:800px;margin:0px auto;text-align: center;">
            <div style="height:45px;"></div>
            <el-icon :size="100"><Good ></Good></el-icon>
            <p style="margin-top:16px;margin-bottom:20px;">今日所有内容已读完。</p>
        </div>
        <div v-if="viewState == 4" style="max-width:800px;margin:0px auto;text-align: center;">
            <div style="height:45px;"></div>
            <el-icon :size="100"><NetworkError ></NetworkError></el-icon>
            <p style="margin-top:16px;margin-bottom:20px;">遇到未知错误，请稍后再试。</p>
        </div>
        
        <FeedItemList  @feedItemCountChange="onFeedItemCountChange" @onPageChange="onPageChange" :readedMode="1" :pageMode="1" v-show="viewState == 5"  ref="feedItemListComp"></FeedItemList>
    </div>
</template>

<script>

import rssbiz from '@/service/rss/rss.js';
import devicebiz  from '@/service/device.js';

import Loading from '~/components/base/Loading.vue';


import FeedItemList from '~/components/itemlist/FeedItemList.vue';
import AddRssWhite from "@/icons/AddRssWhite.vue"
import EmptyFolder from "@/icons/EmptyFolder.vue"
import Good from "@/icons/Good.vue"
import NetworkError from "@/icons/NetworkError.vue"

export default defineNuxtComponent({
    components: {
        Loading,EmptyFolder,FeedItemList,AddRssWhite,Good,NetworkError
    },

    async asyncData() {
        return {
            viewState : 1,
            pageNumber: 1,
            totalCount : 0,
        }
    },

    mounted() {
        this.loadFeedItems(1);
    },

    methods: {
        async loadFeedItems(pageNumber){
            let responseData = await  rssbiz.getTodayFeedItems(devicebiz.getDeviceID(), 30, (pageNumber-1) * 30);
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
                this.viewState = 5;
            }
        },

        onSubscribeFeed(){
            window.location.href = "/feed/website/ft/1.html";
        },

        onFeedItemCountChange(feedItemCount){
            if (feedItemCount == 0){
                this.viewState = 3;
            }
        },

        async onPageChange(obj){
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