<template>
    <div style="background-color: white;">
        <div style="height:50px;border-bottom: 1px solid #eee;">
            <div class="content_wrapper" style="padding-top:3px;">
                <el-tooltip v-if="!isReadLater" effect="dark" content="添加到稍后阅读" placement="top-start">
                    <div @click="setReadLater" class="svg_icon_container"><el-icon :size="20" color="#757575"><ReadLaterIcon /></el-icon></div>
                </el-tooltip>
                <el-tooltip v-if="isReadLater" effect="dark" content="取消稍后阅读" placement="top-start">
                    <div @click="removeReadLater" class="svg_icon_container"><el-icon :size="20" color="#009a61"><ReadLaterFillIcon /></el-icon></div>
                </el-tooltip>
                <el-tooltip effect="dark" content="复制文章链接" placement="top-start" style="margin-left:5px;">
                    <div @click="copyURL" class="svg_icon_container"><el-icon :size="20" color="#009a61"><LinkIcon /></el-icon></div>
                </el-tooltip>
                
            </div>
        </div>
        <div class="content_wrapper" style="margin-top:20px;">
            <div>
                <p class="feed_item_container_title">{{ feedItem.title }}</p>
                <div>
                    <a :href='feed != null ? feed.url : "" ' class="feed_item_container_time">{{ feed != null ? feed.name : "" }}</a>
                    <p class="feed_item_container_time">&nbsp;&nbsp;·&nbsp;&nbsp;</p>
                    <p class="feed_item_container_time">{{ formatTime(feedItem.publish_time) }}</p>
                    <p class="feed_item_container_time">&nbsp;&nbsp;·&nbsp;&nbsp;</p>
                    <p class="feed_item_container_time">{{ feedItem.read_count }}次阅读</p>
                </div>
            </div>
            <div class="article_content_container">
                <div v-if="feedItem.content.length > 0" v-html="feedItem.content" tag="article" ></div>
                <MDC v-else :value="feedItem.desc" tag="article" ></MDC>
            </div>
            <div style="padding-top:40px;padding-bottom:40px;text-align: center;">
                <el-button @click="onGotoSourceURL" size="large" style="width:100%;">访问网页原始链接</el-button>
            </div>
        </div>
    </div>
</template>

<script>

import helper from '@/utils/helper.js'
import rssbiz from '@/service/rss/rss.js';
import feedItemBiz from '@/service/rss/feedItem.js'

import Clipboard from 'vue-clipboard3';

import { CollectionTag } from "@element-plus/icons-vue"
import LinkIcon  from '~/icons/LinkIcon.vue';
import ReadLaterIcon from '~/icons/ReadLaterIcon.vue';
import ReadLaterFillIcon from '~/icons/ReadLaterFillIcon.vue';

import readLater from '@/service/rss/read_later.js'
import devicebiz from '@/service/device';

export default defineNuxtComponent({
    components: {
        CollectionTag,LinkIcon,ReadLaterIcon,ReadLaterFillIcon
    },

    async asyncData() {
        const route = useRoute();

        let feedItem = null;
        let feedItemID = route.params.feed_item_id;
        let feedItemResponse = await rssbiz.getFeedItemByID(feedItemID);
        if(helper.isResultOk(feedItemResponse)){
            feedItem = feedItemResponse.data;
        }

        // 获取Feed
        let feed = null;
        if (feedItem != null){
            let responseData = await rssbiz.queryFeedByIDs(true,[feedItem.feed_id]);
            if (helper.isResultOk(responseData)){
                let feedList = responseData.data.list;
                if (feedList.length == 1){
                    feed = feedList[0];
                }
            }
        }

        return {
            feed:feed,
            feedItem:feedItem,
            isReadLater : false,
        }
    },

    mounted() {
        this.loadReadLater();
        feedItemBiz.increaseFeedItemReadCount(false,this.feedItem.feed_item_id);
    },

    methods:{
        formatTime(time){
            return helper.getHumanTime(time);
        },

        async loadReadLater(){
            // 获取文章是否在read later中
            let responseData = await readLater.getReadLaterByFeedItems(devicebiz.getDeviceID(), [this.feedItem.feed_item_id]);
            if (helper.isResultOk(responseData)){
                if (responseData.data.length == 1){
                    this.isReadLater = true;
                }
            }
        },

        async setReadLater(){
            let responseData = await readLater.setReadLater(devicebiz.getDeviceID(), this.feedItem.feed_id, this.feedItem.feed_item_id);
            if (!helper.isResultOk(responseData)){
                ElMessage.error('设置“稍后阅读"失败，请稍后再试。');
            }else{
                this.isReadLater = true;
            }
        },

        async removeReadLater(){
            let responseData = await readLater.removeReadLater(devicebiz.getDeviceID(), this.feedItem.feed_item_id);
            if (!helper.isResultOk(responseData)){
                ElMessage.error('取消“稍后阅读"失败，请稍后再试。');
            }else{
                this.isReadLater = false;
            }
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

        onGotoSourceURL(){
            window.open(this.feedItem.feed_url);
        }
    }
})

definePageMeta({
  layout: 'blank'
})

</script>

<style scoped>

.content_wrapper{
    width:900px;margin:0px auto;
}

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
    font-size:14px;
    font-weight:400;
    display: inline-block;
    color:rgb(132, 134, 143);
}
</style>

<style>
.article_content_container{
    padding:10px;
    
}
.article_content_container p{
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
}

.article_content_container img{
    max-width: 100%;
    height:auto;
}
</style>

<style>
body{
    background-color: white;
}
</style>