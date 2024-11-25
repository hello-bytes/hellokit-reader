<template>
    <div class="feed_item_conatiner">
        <div style="height:30px;"></div>
        <div style="display: flex;">
            <div>
                <h2 class="feed_name">{{ feed.name }}</h2>
                <div class="feed_info_desc">
                    <span>3位订阅用户</span>
                    <span>&nbsp;&nbsp;｜&nbsp;&nbsp;</span>
                    <span>30篇文章</span>
                </div>
            </div>
            <div style="flex:1"></div>
            <div style="margin-top:15px;">
                <a class="svg_icon_container"><el-icon :size="30"><Refresh /></el-icon></a>
            </div>
        </div>
        <div style="height:20px;"></div>
        <FeedDetail ref="feedItemsComp" :feed="feed" :feedItems="feedItems" :totalCount="0" ></FeedDetail>
    </div>
</template>

<script>

import browser from '@/service/browser';
import rssbiz from '@/service/rss/rss.js';

import FeedDetail from '~/components/rss/FeedDetail.vue'
import FeedItemDesc from '@/components/rss/FeedItemDesc.vue'


import {Refresh} from "@element-plus/icons-vue"


export default defineNuxtComponent({
    components: {
        FeedDetail,FeedItemDesc,Refresh,
    },
    
    async asyncData() {
        const route = useRoute();
        let feedID = route.params.feed_id;
        let feedItemID = route.params.feed_item_id;

        // get feedObj
        let feedObj = null;
        let feedResponse = await rssbiz.queryFeedByIDs(true,[feedID]);
        if (helper.isResultOk(feedResponse)){
            if (feedResponse.data.list.length == 1){
                feedObj = feedResponse.data.list[0];
            }
        }
        
        let feedName = "";
        let iconURL = "";
        if (feedObj != null){
            iconURL = feedObj.icon_url;// "//nettools1.oxyry.com/favicon?domain=decohack.com&size=16"
            feedName = feedObj.name;
        }

        // get feed items
        let feedItems = [];
        let feedItemsResponse = await rssbiz.queryFeedItemsByFeedID(true,feedID,30,0)
        if (helper.isResultOk(feedItemsResponse)){
            feedItems = feedItemsResponse.data.list;
        }

        for (var index in feedItems){
            feedItems[index].feed_icon = iconURL;
            feedItems[index].feed_name = feedName;
        }

        // get current feed item
        let currentFeedItem = feedItems[0];
        
        

        return {
            feed : feedObj,
            feedItems:feedItems,
            currentFeedItem:currentFeedItem,
            isMobile: browser.isMobile()
        }
    },

    mounted() {
    },

    methods: {

    }

});

definePageMeta({
  layout: 'rss'
})
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
.svg_icon_container{
    display: inline-block;
    padding:3px;
    border-radius: 4px;
}
.svg_icon_container:hover{
    background-color: #eee;
}
</style>