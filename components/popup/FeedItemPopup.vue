<template>
    <el-drawer v-model="showDrawer" :with-header="false" :destroy-on-close="true" :size="drawWidth">
        <div style="height:50px;border-bottom: 1px solid #eee;">
            <div class="content_wrapper" style="display: flex;margin-top:-15px;">
                <div @click="onCloseClick" class="svg_icon_container"><el-icon :size="20" color="#757575"><CloseBold /></el-icon></div>
                <el-tooltip v-if="!isReadLater" effect="dark" content="添加到稍后阅读" placement="top-start">
                    <div @click="setReadLater" class="svg_icon_container"><el-icon :size="20" color="#757575"><ReadLaterIcon /></el-icon></div>
                </el-tooltip>
                <el-tooltip v-if="isReadLater" effect="dark" content="取消稍后阅读" placement="top-start">
                    <div @click="removeReadLater" class="svg_icon_container"><el-icon :size="20" color="#009a61"><ReadLaterFillIcon /></el-icon></div>
                </el-tooltip>
                <el-tooltip effect="dark" content="复制文章链接" placement="top-start" style="margin-left:5px;">
                    <div @click="copyURL" class="svg_icon_container"><el-icon :size="20" color="#009a61"><LinkIcon /></el-icon></div>
                </el-tooltip>
                <div style="flex:1"></div>
                <el-tooltip effect="dark" content="全屏阅读" placement="top-start" style="margin-left:5px;">
                    <div @click="readFullScreen" class="svg_icon_container"><el-icon :size="20" ><FullScreen /></el-icon></div>
                </el-tooltip>
                <el-tooltip effect="dark" content="阅读原文" placement="top-start" style="margin-left:5px;">
                    <div @click="readSource" class="svg_icon_container"><el-icon :size="20" color="#009a61"><OutLinkIcon /></el-icon></div>
                </el-tooltip>
            </div>
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
                <div v-if="feedItem.content.length > 0 && feed.content_format == 1" v-html="feedItem.content" class="feed_article_container" ></div>
                <MDC v-else-if="feedItem.content.length > 0 && feed.content_format == 2" :value="feedItem.content" tag="div" class="feed_article_container"></MDC>
                <MDC v-else-if="feedItem.desc.length > 0" :value="feedItem.desc" tag="div" class="feed_article_container" ></MDC>
                <div v-else></div>
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
import { CloseBold, FullScreen } from "@element-plus/icons-vue"

import emitter from "@/service/event.js";
import feedItemBiz from "@/service/rss/feedItem";

import Clipboard from 'vue-clipboard3';

import { CollectionTag } from "@element-plus/icons-vue"
import LinkIcon  from '~/icons/LinkIcon.vue';
import ReadLaterIcon from '~/icons/ReadLaterIcon.vue';
import ReadLaterFillIcon from '~/icons/ReadLaterFillIcon.vue';

import OutLinkIcon from '~/icons/OutLink.vue';

export default defineNuxtComponent({
    components: {
        CloseBold,CollectionTag,LinkIcon,ReadLaterIcon,ReadLaterFillIcon,OutLinkIcon,FullScreen
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
            console.log(param.feed)
            this.showFeedItem(param.feed,param.feedItem);
        });
    },

    methods:{
        showFeedItem(feed, feedItem){
            this.feed = feed;
            this.feedItem = feedItem;

            if(this.feedItem != null){
                feedItemBiz.increaseFeedItemReadCount(false,this.feedItem.feed_item_id);
                this.feedItem.read_count = this.feedItem.read_count + 1;
            }

            this.show();
        },

        show(){
            this.showDrawer = true;
        },

        onCloseClick(){
            this.showDrawer = false;
        },

        async copyURL(){
            const { toClipboard } = Clipboard();
			try {
                let url = "https://reader.hellokit.com.cn/feed-item/" + this.feedItem.feed_item_id + ".html";
				await toClipboard(url);
				ElMessage({
					message: '文章地址已复制到剪贴板。',
					type: 'success',
				})
			} catch (e) {
				ElMessage.error('复制失败，可能您的浏览器不支持复制。');
			}
        },

        formatTime(time){
            return helper.getHumanTime(time);
        },

        onGotoSourceURL(){
            window.open(this.feedItem.feed_url);
        },

        readSource(){
            this.onGotoSourceURL();
        },

        readFullScreen(){
            let url = "https://reader.hellokit.com.cn/feed-item/" + this.feedItem.feed_item_id + ".html";
            window.open(url);
        }
        
    }
})

</script>

<style scoped>

.el-drawer__body{
    padding-top:0px;
}

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

