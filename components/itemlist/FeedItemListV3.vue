
<template>
    <div>
        <div>
            <div v-for="(item, index) in feedItems" :key="index" style="margin-top:20px;margin-bottom:20px;border-bottom:1px solid #eee;padding-bottom:10px;">
                <div v-if="item.thumb_url.length > 0">
                    <ThumbItem :showFeedName=showFeedName @onSetFeedItemState="onSetFeedItemState" @setReadLater="setReadLater" @removeReadLater="removeReadLater" :feedItem='item'></ThumbItem>
                </div>
                <div v-if="item.thumb_url.length == 0">
                    <TextItem :showFeedName=showFeedName @onSetFeedItemState="onSetFeedItemState" @setReadLater="setReadLater" @removeReadLater="removeReadLater"  :feedItem='item'></TextItem>
                </div>
            </div>
        </div>
        <div v-if="loadingMore" style="display: flex;align-items: center;">
            <img style="height:20px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/1494.gif">
            <span>&nbsp;正在加载，请稍候...</span>
        </div>
        <div v-if="loadTooMuch" style="text-align: center;">
            <p>您已经浏览了来自&nbsp;{{ feedsCount }}&nbsp;个订阅源的&nbsp;{{ this.feedItems.length }}&nbsp;篇文章。</p>
            <el-button @click="onSetReadAndNextPage" size="large">&nbsp;&nbsp;&nbsp;&nbsp;<el-icon :size="24" color="#757575"><Check /></el-icon>&nbsp;&nbsp;全部置为已读&nbsp;&nbsp;</el-button>
        </div>
        <div v-if="loadFinish" style="text-align: center;">
            <p>所有文章已加载。</p>
            <el-button @click="onSetReadAndReload" size="large">&nbsp;&nbsp;&nbsp;&nbsp;<el-icon :size="24" color="#757575"><Check /></el-icon>&nbsp;&nbsp;全部置为已读&nbsp;&nbsp;</el-button>
        </div>
        <div style="height:30px"></div>
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

import TextItem from '~/components/itemlist/TextItem.vue';
import ThumbItem from '~/components/itemlist/ThumbItem.vue';


import { Refresh,Check,Select,Share,Reading,More,Link,Paperclip,FullScreen,CollectionTag } from "@element-plus/icons-vue"

export default defineNuxtComponent({
    props:{
        readedMode : {
            type : Number,
            default : 0, // 0 全部显示， 1 只显示未读， 3 只显示已读
        },
        showFeedName : {
            type : Boolean,
            default : true, // 是否显示Feed信息
        }
    },

    components: {
        Check,Refresh,Select,Share,Reading,More,Link,Paperclip,FullScreen,CollectionTag,FullScreen,TextItem,ThumbItem
    },

    async asyncData() {
        return {
            totalCount:0,
            loadedCount:0,
            feedItems:[],
            feedsCount:0, // 多少个订阅源

            disabledLoadMore:false,

            //currentPage:1,

            loadingMore:false,
            loadFinish : false, // 
            loadTooMuch : false, // 

            currentFeed:null,
            feedItem:null, // 当前被选中（点击）的 FeedItem

            element:null,
            distance:100,
        }
    },

    mounted() {
        this.$nextTick(()=>{
            //console.log("add scrolling");
            //console.log(window);
            window.addEventListener('scroll', this.listenBottomOut,true);
            // this.element = document.documentElement;
            this.element = document.getElementById("right_content_rootcontainer");
        });
    },

    destroyed() {
        window.removeEventListener('scroll', this.listenBottomOut, false)
    },

    methods:{
        isFeedItemExist(feedItemId){
            for(let i in this.feedItems){
                if(this.feedItems[i].feed_item_id == feedItemId){
                    //console.log("feed item exist : ",this.feedItems[i].feed_item_id," = ",feedItemId, ", title = ", this.feedItems[i].title);
                    return true;
                }
            }
            return false;
        },

        // , totalCount
        async appendFeedItems(feedItems){
            // 如果 feedItems 为空，表示都加载完了，置一下标记位
            if(feedItems.length == 0 ){
                this.loadFinish = true;
                this.loadingMore = false;
                return;
            }

            let filterFeedItems = [];
            // 筛选要更新的FeedItems
            for(let i in feedItems){
                if(!this.isFeedItemExist(feedItems[i].feed_item_id)){
                    filterFeedItems.push(feedItems[i]);
                }
            }

            filterFeedItems.sort(function(a,b){
                return b.publish_time - a.publish_time;
            })

            await this.loadReadedFlag(filterFeedItems);
            await this.loadReadLaterFlag(filterFeedItems);
            await this.loadFeedForFeedItem(filterFeedItems)
            await this.loadAuthorForFeedItem(filterFeedItems);

            this.feedItems.push(...filterFeedItems);
            this.buildFeedCount();

            this.loadingMore = false;

            // 单页大于100条以上，不再加载更多
            if(this.feedItems.length >= 100 ){
                this.loadTooMuch = true;
            }
        },

        clear(){
            this.loadingMore = false;
            this.loadFinish = false;
            this.loadTooMuch = false;
            this.feedItems = [];
        },

        setLoadingMoreState(){
            this.loadingMore = true;
        },

        notifyFeedItemChange(){
            this.$emit('feedItemCountChange', this.feedItems.length);
        },
        
        isFeedIdExist(feedID, feedIds){
            let found = false;
            for(let index in feedIds) {
                if(feedIds[index] == feedID){
                    found = true;
                    break;
                }
            }
            return found;
        },

        buildFeedCount(){
            let feedIds = [];
            for(let i in this.feedItems){
                if(this.isFeedIdExist(this.feedItems[i].feed_id, feedIds)){
                }else{
                    feedIds.push(this.feedItems[i].feed_id);
                }
            }
            this.feedsCount = feedIds.length;
        },

        async loadReadedFlag(feedItems){
            let feedItemIds = [];
            for(let index in feedItems){
                feedItems[index].readState = 1; //  1 表示未读
                if(this.isFeedIdExist(feedItems[index].feed_item_id, feedItemIds)){
                }else{
                    feedItemIds.push(feedItems[index].feed_item_id);
                }
            }

            let responseData = await rssbiz.fetchUserFeedItemByIds(devicebiz.getDeviceID(), feedItemIds);
            if (!helper.isResultOk(responseData)){
                return;
            }

            let userFeedItemList = responseData.data;
            for(let i in feedItems){
                for(let j in userFeedItemList){
                    if (feedItems[i].feed_item_id == userFeedItemList[j].feed_item_id){
                        feedItems[i].readState = userFeedItemList[j].readed;
                        break;
                    }
                }
            }
        },

        async loadReadLaterFlag(feedItems){
            let feedItemIds = [];
            for(let index in feedItems){
                feedItems[index].isReadLater = false;
                if(this.isFeedIdExist(feedItems[index].feed_item_id, feedItemIds)){
                }else{
                    feedItemIds.push(feedItems[index].feed_item_id);
                }
            }

            let responseData = await readLater.getReadLaterByFeedItems(devicebiz.getDeviceID(), feedItemIds);
            if (helper.isResultOk(responseData)){
                for(let index in feedItems){
                    let feedItemID = feedItems[index].feed_item_id;
                    for(let j in responseData.data){
                        if(responseData.data[j].feed_item_id == feedItemID){
                            feedItems[index].isReadLater = true;
                            break
                        }
                    }
                }
            }
        },

        async loadFeedForFeedItem(feedItems){
            let feedIds = [];
            for(let index in feedItems){
                feedItems[index].feed = null;
                if(this.isFeedIdExist(feedItems[index].feed_id, feedIds)){
                }else{
                    feedIds.push(feedItems[index].feed_id);
                }
            }
            
            if(feedIds.length > 0){
                let responseData = await rssbiz.queryFeedByIDs(false,feedIds);
                if (helper.isResultOk(responseData)){
                    let feedList = responseData.data.list;
                    for(let index in feedItems){
                        for(let j in feedList){
                            if (feedList[j].feed_id == feedItems[index].feed_id){
                                feedItems[index].feed = feedList[j];
                            }
                        }
                    }
                }
            }
        },

        async loadAuthorForFeedItem(feedItems){
            let feedItemIds = [];
            for(let index in feedItems){
                feedItems[index].authorList = [];
                if(this.isFeedIdExist(feedItems[index].feed_item_id, feedItemIds)){
                }else{
                    feedItemIds.push(feedItems[index].feed_item_id);
                }
            }

            let responseData = await feedItemBiz.fetchAuthor( false, feedItemIds);
            if (helper.isResultOk(responseData)){
                let authorList = responseData.data;
                for(let i in authorList){
                    for(let j in feedItems){
                        if (authorList[i].feed_item_id == feedItems[j].feed_item_id){
                            feedItems[j].authorList.push(authorList[i]);
                            break;
                        }
                    }
                }
            }
        },

        removeByFeedItemID(feedItemID){
            let i = 0;
            while (i < this.feedItems.length) {
                if (this.feedItems[i].feed_item_id == feedItemID) {
                    this.feedItems.splice(i, 1);
                } else {
                    ++i;
                }
            }
            this.notifyFeedItemChange();
        },

        async onSetFeedItemState(params){
            let {feedItem,readState} = params;

            let oldState = feedItem.readState;

            let readStateInt = parseInt(readState);
            feedItem.readState = readStateInt;

            let responseData = await rssbiz.setFeedItemReadState(devicebiz.getDeviceID(), feedItem.feed_item_id, readStateInt);
            if (helper.isResultOk(responseData)){
                /*if (this.readedMode == 1){
                    if(readStateInt == 2){
                        this.removeByFeedItemID(feedItem.feed_item_id);
                    }
                }else if(this.readedMode == 2) {
                    if(readStateInt == 1){
                        this.removeByFeedItemID(feedItem.feed_item_id);
                    }
                }*/
                feedItem.readState = readStateInt;
            }else{
                feedItem.readState = oldState;
                ElMessage.error("设置为\"" + (readStateInt == 1 ? "未读" : "已读") + "\"失败，请稍后再试。")
            }
        },

        async setReadLater(params){
            let { feedItem } = params;
            let responseData = await readLater.setReadLater(devicebiz.getDeviceID(), feedItem.feed_id, feedItem.feed_item_id);
            if (!helper.isResultOk(responseData)){
                ElMessage.error('设置“稍后阅读"失败，请稍后再试。');
            }else{
                feedItem.isReadLater = true;
            }
        },

        async removeReadLater(params){
            let { feedItem } = params;
            let responseData = await readLater.removeReadLater(devicebiz.getDeviceID(), feedItem.feed_item_id);
            if (!helper.isResultOk(responseData)){
                ElMessage.error('取消“稍后阅读"失败，请稍后再试。');
            }else{
                feedItem.isReadLater = false;
            }
        },

        onShareArticle(){

        },

        async setAllReaded(){
            let feedItemIds  = [];
            for(let index in this.feedItems){
                feedItemIds.push(this.feedItems[index].feed_item_id);
            }
            let responseData = await rssbiz.setFeedItemReadStateV2(devicebiz.getDeviceID(), feedItemIds, 2);
            if(!helper.isResultOk(responseData)){
                ElMessage.error("置为已读失败，请稍后再试。")
                return;   
            }
        },

        async onSetReadAndReload(){
            // 清理本页内容，
            await this.setAllReaded();

            // 重新加载当前页
            this.$emit('onReload', {});
        },

        async onSetReadAndNextPage(){
            // 清理本页内容，
            await this.setAllReaded();

            this.feedItems = [];
            this.loadingMore = true;
            this.loadTooMuch = false;
            this.loadFinish = false;

            this.$emit('onLoadMore', {limit:30, feedItemID:"0"});
        },

        listenBottomOut() {
            if (this.loadingMore || this.loadFinish || this.loadTooMuch) return;
            let scrollTop = this.element.scrollTop || document.body.scrollTop
            let clientHeight = this.element.clientHeight
            let scrollHeight = this.element.scrollHeight
            if (scrollTop + clientHeight >= scrollHeight - this.distance) {
                this.loadMoreFeedItems();
            }
        },

        loadMoreFeedItems(){
            this.loadingMore = true;

            let lastFeedItem = null;
            let total = this.feedItems.length;
            for(let i = total -1 ; i >= 0; i--){
                if (this.feedItems[i].readState == 1){
                    lastFeedItem = this.feedItems[i];
                    break;
                }
            }

            if (lastFeedItem == null){
                this.loadingMore = false;
            }

            if (lastFeedItem != null){
                this.$emit('onLoadMore', {limit:30, feedItemID:lastFeedItem.feed_item_id});
            }else{
                // 没有找到， 提示加载所有
                this.loadingMore = false;
            }
            
        }
    }
})


</script>


<style scoped>
</style>

