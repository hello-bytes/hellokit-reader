<template>
    <div>
        <div style="height:30px;"></div>
        <div v-for="(item, index) in feedItems" :key="index" style="margin-bottom:35px;">
            <a class="feed_item_list_container" @click="showFeedItem(item)" >
                <p class="feed_item_list_container_title">{{ item.title }}</p>
                <p class="feed_item_list_container_desc">{{ item.desc }}</p>
            </a> 
            <div style="display: flex;margin-top:5px;">
                <span class="feed_item_list_container_time">{{ formatHumanTime(item.publish_time) }}</span>
                <div style="flex:1"></div>
                <a class="article_link" style="color:#009a61;" @click="showFeedItem(item)">查看内容</a>
                <span style="color:#ccc;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <a class="article_link" :href='"/feed-item/" + item.feed_item_id + ".html"'>全屏阅读</a>
                <span style="color:#ccc;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <a class="article_link" :href='item.feed_url'>原文链接</a>
            </div>
        </div>
        <el-pagination background layout="prev, pager, next" :total="totalCount" style="width:100%;" :page-size="30" />
        <FeedItemPopup :feed="feed" :feedItem="feedItem" ref="feedItemProp"></FeedItemPopup>
        <div style="height:30px"></div>
    </div>
</template>

<script>

// 这个页面做为某一个Feed的FeedItem合集展示，所以没有显示Feed信息
// 如果要做为某一个FeedItem流展示，建议使用...

import helper from '@/utils/helper.js'
import browser from '@/service/browser';

import FeedItemPopup from '@/components/rss/popup/FeedItemPopup.vue';

export default defineNuxtComponent({
    components: {
        FeedItemPopup,
    },

    props:{
        feed:{
            type:Object,
            default:null,
        },

        totalCount : {
            type:Number,
            default:0,
        },

        feedItems:{
            type:Array,
            default:[],
        }
    },

    async asyncData() {
        //console.log(this.feed);
        return {
            feedItem:null, // 当前被先中（点击）的 FeedItem
            isMobile: browser.isMobile(),
        }
    },

    methods:{
        // :href='"/subscript/" + item.feed_id + "/" + item.feed_item_id'
        appendFeedItems(feedItems){
            //this.feedItems.push(feedItems);
        },

        formatHumanTime(time){
            return helper.getHumanTime(time);
            //return "今天";
        },

        showFeedItem(feedItem){
            this.feedItem = feedItem;
            this.$refs.feedItemProp.show();
        }
    }
})


</script>

<style scoped>
.feed_item_list_container{
    display: block;
    cursor: pointer;
}

.feed_item_list_container_top{
    display: flex;
    align-items: flex-start;
}
.feed_item_list_container_feedname{
    display: flex;
}
.feed_item_list_container_feedname > img{
    border-radius: 5px;
}
.feed_item_list_container_feedname > span{
    font-size:12px;
    font-weight:500;
    line-height: 16px;
    max-width: 192px;
    overflow: hidden;
    display: inline-block;
    margin-left:5px;
    color:rgb(27, 27, 31);
}
.feed_item_list_container_time{
    display: inline-block;
    font-size:14px;
    font-weight:400;
    color:rgb(158, 158, 158);
}
.feed_item_list_container_title{
    color:rgb(27, 27, 31);
    font-size:20px;
    font-weight:700;
    line-height:24px;
    margin-top:0px;
    margin-bottom:0px;
}
.feed_item_list_container_desc{
    overflow: hidden;
    font-size:14px;
    font-weight: 400;
    line-height: 20px;
    overflow: hidden;
    word-break: break-word;
    margin-top: 4px;
    margin-bottom:4px;
    letter-spacing:0.25px;
    -webkit-box-orient:vertical;
    -webkit-font-smoothing:antialiased;
    line-clamp:4;
    -webkit-line-clamp:4;
    max-height:80px;
    color:rgb(158, 158, 158);
}
.article_link{
    font-size:14px;
    text-decoration: none;
    color:rgb(27, 27, 31);
    cursor:pointer;
}
.article_link:hover{
    text-decoration: underline;
}
</style>