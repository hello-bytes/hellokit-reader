
<template>
    <div >
        <div>
            <a v-if="showFeedName && feedItem.feed != null" target="_blank" @click="onFeedClick(feedItem.feed)"  class="feed_name_img"><img :src=feedItem.feed.icon_url /> {{ feedItem.feed.name }}{{ feedItem.authorList.length > 0 ? " · " + feedItem.authorList[0].author_name : "" }}</a>
            <a class="feed_item_list_container">
                <a @click="showFeedItem(feedItem)" class="feed_item_list_container_title" :class="{ feed_item_list_container_title_readed:feedItem.readState != 1 }">{{ feedItem.title }}</a>
                <p class="feed_item_list_container_desc">{{ feedItem.desc }}</p>
            </a> 
            <div style="display: flex;margin-top:5px;">
                <div style="height:30px;line-height:30px;">
                    <span class="feed_item_list_container_time">{{ formatHumanTime(feedItem.publish_time) }}</span>
                    <span class="feed_item_list_container_time">&nbsp;·&nbsp;</span>
                    <span class="feed_item_list_container_time">{{ feedItem.read_count }}次阅读</span>
                </div> 
                <div style="flex:1"></div>
                <el-tooltip effect="dark" content="快速阅读此文章" placement="top-start">
                    <div @click="showFeedItem(feedItem)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Reading /></el-icon></div>
                </el-tooltip>
                <span>&nbsp;</span>
                <el-tooltip v-if="feedItem.readState == 1" effect="dark" content="标记为已读" placement="top-start">
                    <div  @click="onSetFeedItemState(feedItem,2)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Check /></el-icon></div>
                </el-tooltip>
                <el-tooltip v-if="feedItem.readState != 1" effect="dark" content="标记为未读" placement="top-start">
                    <div  @click="onSetFeedItemState(feedItem,1)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Check /></el-icon></div>
                </el-tooltip>
                <span>&nbsp;</span>
                <el-tooltip v-if="!feedItem.isReadLater" effect="dark" content="添加到稍后阅读" placement="top-start">
                    <div @click="setReadLater(feedItem)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><CollectionTag /></el-icon></div>
                </el-tooltip>
                <el-tooltip v-if="feedItem.isReadLater" effect="dark" content="取消稍后阅读" placement="top-start">
                    <div @click="removeReadLater(feedItem)" class="svg_icon_container_mini"><el-icon :size="20" color="#009a61"><CollectionTag /></el-icon></div>
                </el-tooltip>
                <span>&nbsp;</span>
                <el-dropdown placement="bottom-end">
                    <div class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><More /></el-icon></div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item><a class="article_link" @click="onShareArticle" target="_blank"><el-icon :size="18"><Share /></el-icon>分享给朋友</a></el-dropdown-item>
                            <el-dropdown-item><a class="article_link" :href='"/feed-item/" + feedItem.feed_item_id + ".html"' target="_blank"><el-icon :size="18"><FullScreen /></el-icon>在新窗口打开</a></el-dropdown-item>
                            <el-dropdown-item><a class="article_link" :href='feedItem.feed_url' target="_blank"><el-icon :size="18"><Paperclip /></el-icon>原文链接</a></el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>    
        </div>
    </div>
</template>

<script>


// 这个页面做为某一个Feed的 Feed Item List 合集展示
// 不需要考虑SEO，支持自动加载更多
// https://www.cnblogs.com/skuld-yi/p/15204264.html

import helper from '@/utils/helper.js'
import rssbiz from '@/service/rss/rss.js'
import readLater from '@/service/rss/read_later.js'

import feedItemBiz from '@/service/rss/feedItem.js'

import emitter from "@/service/event.js";

import browser from '@/service/browser';
import devicebiz from '@/service/device';

import { Refresh,Check,Select,Share,Reading,More,Link,Paperclip,FullScreen,CollectionTag } from "@element-plus/icons-vue"

export default defineNuxtComponent({
    props:{
        feedItem : {
            type : Object,
            default : null,
        },
        showFeedName : {
            type : Boolean,
            default : true, // 是否显示Feed信息
        }
    },

    components: {
        Check,Refresh,Select,Share,Reading,More,Link,Paperclip,FullScreen,CollectionTag,FullScreen
    },

    async asyncData() {
        return {
        }
    },

    mounted() {
    },

    destroyed() {
    },

    methods:{
        onFeedClick(feedObj){
            emitter.emit("on_popup_feed",{feed:feedObj});
        },

        async onSetFeedItemState(feedItem,readState){
            this.$emit('onSetFeedItemState', {feedItem,readState});
        },

        async setReadLater(feedItem){
            this.$emit('setReadLater', {feedItem});
        },

        async removeReadLater(feedItem){
            this.$emit('removeReadLater', {feedItem});
        },

        showFeedItem(feedItem){
            emitter.emit("on_popup_feeditem_content",{ feed:feedItem.feed,feedItem:feedItem })
        },

        onShareArticle(){

        },

        formatHumanTime(time){
            return helper.getHumanTime(time);
        },
    }
})


</script>


<style scoped>

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

.feed_item_list_container_extra{
    font-size:14px;
    font-weight:400;
    color:rgb(158, 158, 158);
}

.feed_item_list_container_time{
    display: inline-block;
    font-size:14px;
    font-weight:400;
    color:rgb(158, 158, 158);
}
.feed_item_list_container_feed{
    display: inline-block;
    font-size:14px;
    font-weight:400;
    color:rgb(117, 117, 117);
}
.feed_item_list_container_feed:hover{
    text-decoration: underline;
}
.feed_item_list_container_title{
    color:rgb(27, 27, 31);
    font-size:20px;
    font-weight:700;
    line-height:24px;
    margin-top:0px;
    margin-bottom:2px;
    cursor: pointer;
}
.feed_item_list_container_title_readed{
    color:rgb(136, 136, 136)!important;
}
.feed_item_list_container_desc{
    overflow: hidden;
    font-size:14px;
    font-weight: 400;
    line-height: 20px;
    overflow: hidden;
    word-break: break-word;
    margin-top: 8px;
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
    display: flex;align-items: center;
}
.article_link:hover{
    color:#009a61;
    text-decoration: none;
    /* text-decoration: underline;*/
}

.feed_item_list_img_container{
    display: flex;    
}

.feed_item_list_content_container{
    margin-left:10px;
}

.feed_item_img{
    width:150px;
    max-height: 100px;
}
.feed_name_img{
    cursor:pointer;
    display: flex;
    align-items: center;
    line-height: 12px;
    font-size:14px;
    color: rgb(158, 158, 158);
    margin-bottom:8px;
}

.feed_name_img > img{
    height:14px;
    margin-right:3px;
}
</style>

