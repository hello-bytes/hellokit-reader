<template>
    <el-drawer v-model="showDrawer" :with-header="false" :destroy-on-close="true" :size="drawWidth">
        <div class="close_wrapper" @click="onCloseClick">
            <el-icon :size="30">
                <CloseBold />
            </el-icon>
        </div>
        <div style="max-width:700px;margin:0px auto;">
            <div style="display: flex;">
                <div style="flex:1;">
                    <h2 class="feed_name_h2">{{ feed.name }}</h2>
                    <p>{{ feed.desc }}</p>
                    <div>
                        <span class="feed_meta_text">{{ followCount }}位订阅</span>
                        <span>&nbsp;&nbsp;</span>
                        <span class="feed_meta_text">{{ articleCount }}篇文章</span>
                    </div>
                </div>
                <div style="width:200px;padding-top:15px;text-align: right;">
                    <el-button type="primary" size="large">&nbsp;&nbsp;<el-icon :size="20"><FolderAdd /></el-icon>&nbsp;订&nbsp;阅&nbsp;&nbsp;&nbsp;</el-button>
                </div>
            </div>
            <Loading v-if="viewState == 1"></Loading>
            <div style="margin-top:30px;">
                <FeedItemList1 @onPageChange="onPageChange" @feedItemCountChange="onFeedItemCountChange" :pageMode="1" v-show="viewState == 3"  ref="feedItemListComp"></FeedItemList1>
            </div>
            
        </div>
        
    </el-drawer>
</template>

<script>

import rssbiz from '@/service/rss/rss.js'

import helper from '@/utils/helper.js'
import browser from '@/service/browser';
import { CloseBold } from "@element-plus/icons-vue"

import { FolderAdd } from "@element-plus/icons-vue"

import emitter from "@/service/event.js";

import Loading from '~/components/base/Loading.vue';
import FeedItemList1 from "@/components/itemlist/FeedItemList1.vue";

export default defineNuxtComponent({
    components: {
        CloseBold,FolderAdd,FeedItemList1,Loading
    },

    async asyncData() {
        return {
            feed:null,
            drawWidth:"70%",
            showDrawer:false,

            viewState:1,
            
            followCount:0,
            articleCount:0,
        }
    },

    mounted(){
        emitter.on("on_popup_feed", (param) => {
            this.viewState = 1;
            this.feed = param.feed;

            this.show();
            this.loadFeedItems(1);
            this.loadStatics();
        });
    },

    methods:{
        async loadStatics(){
            let feedStaticsResponse = await rssbiz.queryFeedStaticsByIDs(false,[this.feed.feed_id]);
            if (helper.isResultOk(feedStaticsResponse)){
                if(feedStaticsResponse.data.length == 1){
                    this.followCount = feedStaticsResponse.data[0].follow_count;
                    this.articleCount = feedStaticsResponse.data[0].feed_item_count;
                }
            }
        },

        show(){
            this.showDrawer = true;
        },

        onCloseClick(){
            this.showDrawer = false;
        },

        async loadFeedItems(pageNumber){
            let responseData = await rssbiz.queryFeedItemsByFeedID(false,this.feed.feed_id,30,(pageNumber-1)*30);
            if (!helper.isResultOk(responseData)){
                return;
            }

            let list = responseData.data.list;
            let totalCount = responseData.data.total_count;
            await this.$refs.feedItemListComp.setFeedItems(list, pageNumber, totalCount);

            this.viewState = 3;
        },

        onFeedItemCountChange(feedItemCount){
            // 
        },

        async onPageChange(obj){
            await this.loadFeedItems(obj.pageNumber);
            ElMessage.success("已为您加载新的内容。")
        },

        formatTime(time){
            return helper.getHumanTime(time);
        }
    }
})

</script>

<style scoped>
.feed_name_h2{
    margin-top:15px;
    margin-bottom:15px;
    color:rgb(51, 51, 51);
    font-size: 34px;
}
.feed_meta_text{
    margin-top:0px;
    margin-bottom:0px;
    font-size:12px;
    font-weight:400;
    color:rgb(132, 134, 143);
}
</style>
