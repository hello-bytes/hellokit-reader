<template>
    <el-drawer v-model="showDrawer" :with-header="false" :destroy-on-close="true" :size="drawWidth">
        <div class="close_wrapper" @click="onCloseClick">
            <el-icon :size="30">
                <CloseBold />
            </el-icon>
        </div>
        <div style="max-width:700px;margin:0px auto;">
            <Loading v-if="viewState == 1"></Loading>
            <div v-if="viewState == 2" style="display: flex;flex-direction: column;height: 500px;">
                <div style="text-align: center;">
                    <img :src='this.feed.icon_url' style="width:88px;">
                </div>
                <div style="flex:1"></div>
                <p class="feed_info_title">标题</p>
                <p class="feed_info_val">{{ this.feed != null ? this.feed.name : "" }}</p>
                <div style="flex:1"></div>
                <p class="feed_info_title">描述</p>
                <p class="feed_info_val">{{ this.feed != null ? this.feed.desc : "" }}</p>
                <div style="flex:1"></div>
                <p class="feed_info_title">网站</p>
                <a class="feed_info_link" :href='this.feed != null ? this.feed.url : ""'>{{ this.feed != null ? this.feed.url : "" }}</a>
                <div style="flex:1"></div>
                <p class="feed_info_title">RSS</p>
                <a class="feed_info_link" :href='this.feed != null ? this.feed.feed_url : ""'>{{ this.feed != null ? this.feed.feed_url : "" }}</a>
                <div style="height:30px;"></div>
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
            drawWidth:"40%",
            showDrawer:false,

            viewState:1,
        }
    },

    mounted(){
        emitter.on("on_popup_feed_info", (param) => {
            this.viewState = 2;
            this.feed = param.feed;
            this.show();
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

        formatTime(time){
            return helper.getHumanTime(time);
        },

        onFeedDetail(){

        }
    }
})

</script>

<style scoped>
.feed_info_title{
    margin-top:15px;
    margin-bottom:5px;
    color:rgb(51, 51, 51);
    font-size: 14px;
}
.feed_meta_text{
    margin-top:0px;
    margin-bottom:0px;
    font-size:12px;
    font-weight:400;
    color:rgb(132, 134, 143);
}

.feed_info_link{
    text-decoration: underline;
    font-size:18px;
}
.feed_info_val{
    margin-top: 0px;
    font-size:18px;
}

</style>
