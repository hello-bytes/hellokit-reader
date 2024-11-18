<template>
    <el-drawer v-model="showDrawer" :with-header="false" :destroy-on-close="true" :size="drawWidth">
        <div class="close_wrapper" @click="onCloseClick">
            <el-icon :size="30">
                <CloseBold />
            </el-icon>
        </div>
        <div style="max-width:800px;margin:0px auto;" v-if="feedItem != null && feed != null">
            <p class="feed_item_title">{{ feedItem.title }}</p>
            <div>
                <a :href='feed.url' class="feed_item_url">{{ feed.name }}</a>
                <span>&nbsp;&nbsp;</span>
                <span class="feed_item_time">{{ formatTime(feedItem.publish_time) }}</span>
                <span>&nbsp;&nbsp;</span>
                <span class="feed_item_time">{{ feedItem.read_count }}次阅读</span>
            </div>
            
            <div class="feed_content_container">
                <div v-if="feedItem.content.length > 0" v-html="feedItem.content" tag="article" ></div>
                <MDC v-else :value="feedItem.desc" tag="article" ></MDC>
            </div>
            <div style="padding-top:10px;padding-bottom:10px;">
                <el-button @click="onGotoSourceURL" style="width:100%;color:#009a61;" size="large">访问网页原始链接</el-button>
            </div>
        </div>
    </el-drawer>
</template>

<script>

import helper from '@/utils/helper.js'
import browser from '@/service/browser';
import { CloseBold } from "@element-plus/icons-vue"

import emitter from "@/service/event.js";
import feedItemBiz from "@/service/rss/feedItem";

export default defineNuxtComponent({
    components: {
        CloseBold,
    },

    async asyncData() {
        return {
            drawWidth:"70%",
            showDrawer:false,
            feed:null,
            feedItem:null,

        }
    },

    mounted(){
        emitter.on("on_popup_feeditem_content", (param) => {
            this.showFeedItem(param.feed,param.feedItem);
        });
    },

    methods:{
        showFeedItem(feed, feedItem){
            this.feed = feed;
            this.feedItem = feedItem;

            if(this.feedItem != null){
                feedItemBiz.increaseFeedItemReadCount(false,this.feedItem.feed_item_id);
            }

            this.show();
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

        onGotoSourceURL(){
            window.open(this.feedItem.feed_url);
        }
        
    }
})

</script>

<style scoped>

.feed_item_title{
    color:rgb(27, 27, 31);
    font-size:28px;
    font-weight:700;
    margin-top:5px;
    margin-bottom:5px;
}
.feed_item_url{
    margin-top:0px;
    margin-bottom:0px;
    font-size:12px;
    font-weight:400;
    color:rgb(132, 134, 143);
}
.feed_item_url:hover{
    text-decoration: underline;
}
.feed_item_time{
    margin-top:0px;
    margin-bottom:0px;
    font-size:12px;
    font-weight:400;
    color:rgb(132, 134, 143);
}
.close_wrapper{
    display: inline-block;
    padding-top:5px;
    padding-left:5px;
    padding-right:5px;
    border-radius: 5px;
}
.close_wrapper:hover{
    background-color: #eee;
}

</style>

<style>
.feed_content_container{
    font-size: 16px;
    padding:10px;
}

.feed_content_container p{
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
}


.feed_content_container img{
    max-width: 100%;
    height:auto;
}

</style>

