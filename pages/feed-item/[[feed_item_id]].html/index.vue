<template>
    <div style="width:900px;margin:0px auto;margin-top:30px;">
        <div>
            <p class="feed_item_container_title">{{ feedItem.title }}</p>
            <p class="feed_item_container_time">{{ formatTime(feedItem.publish_time) }}</p>
        </div>
        <div style="padding:10px;">
            <MDC v-if="feedItem.content.length > 0" :value="feedItem.content" tag="article" />
            <div v-else v-html="feedItem.desc" ></div>            
        </div>
        <div style="padding-top:30px;padding-bottom:30px;text-align: center;">
            <el-button size="large" style="width:100%;">访问网页原始链接</el-button>
        </div>
    </div>
</template>

<script>

import helper from '@/utils/helper.js'
import browser from '@/service/browser';

import rssbiz from '@/service/rss/rss.js';

export default defineNuxtComponent({
    async asyncData() {
        const route = useRoute();

        let feedItem = null;

        let feedItemID = route.params.feed_item_id;
        let feedItemResponse = await rssbiz.getFeedItemByID(feedItemID);
        //console.log(feedItemResponse);
        if(helper.isResultOk(feedItemResponse)){
            feedItem = feedItemResponse.data;
        }
        return {
            feedItem:feedItem,
            isMobile: browser.isMobile(),
        }
    },

    mounted() {
    },

    methods:{
        formatTime(time){
            return helper.getHumanTime(time/1000);
        }
    }
})

definePageMeta({
  layout: 'blank'
})

</script>

<style scoped>
.feed_item_container_feedname{

}
.feed_item_container_title{
    color:rgb(27, 27, 31);
    font-size:28px;
    font-weight:700;
    margin-top:5px;
    margin-bottom:5px;
}
.feed_item_container_time{
    margin-top:0px;
    margin-bottom:0px;
    font-size:12px;
    font-weight:400;
    color:rgb(132, 134, 143);
}
</style>