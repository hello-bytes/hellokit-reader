
<template>
    <div>
        <div v-for="(item, index) in feedItems" :key="index" style="margin-top:20px;margin-bottom:20px;border-bottom:1px solid #eee;padding-bottom:10px;">
            <div v-if="item.thumb_url.length > 0">
                <div>
                    <a v-if="item.feed != null" target="_blank" @click="onFeedClick(item.feed)"  class="feed_name_img"><img :src=item.feed.icon_url /> {{ item.feed.name }}{{ item.authorList.length > 0 ? " · " + item.authorList[0].author_name : "" }}</a>
                    <div class="feed_item_list_img_container">
                        <img class="feed_item_img" :src='item.thumb_url' />
                        <div class="feed_item_list_content_container">
                            <a @click="showFeedItem(item)"  class="feed_item_list_container_title" :class="{ feed_item_list_container_title_readed:item.readState != 1 }">{{ item.title }}</a>
                            <p class="feed_item_list_container_desc">{{ item.desc }}</p>
                            <div style="display: flex;margin-top:5px;">
                                <div style="height:30px;line-height:30px;">
                                    <span class="feed_item_list_container_time">{{ formatHumanTime(item.publish_time) }}</span>
                                    <span class="feed_item_list_container_time">&nbsp;·&nbsp;</span>
                                    <span class="feed_item_list_container_time">{{ item.read_count }}次阅读</span>
                                </div> 
                                <div style="flex:1"></div>
                                <el-tooltip effect="dark" content="快速阅读此文章" placement="top-start">
                                    <div @click="showFeedItem(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Reading /></el-icon></div>
                                </el-tooltip>
                                <span>&nbsp;</span>
                                <el-tooltip v-if="item.readState == 1" effect="dark" content="标记为已读" placement="top-start">
                                    <div @click="onSetFeedItemState(item,2)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Check /></el-icon></div>
                                </el-tooltip>
                                <el-tooltip v-if="item.readState != 1" effect="dark" content="标记为未读" placement="top-start">
                                    <div  @click="onSetFeedItemState(item,1)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Check /></el-icon></div>
                                </el-tooltip>
                                <span>&nbsp;</span>
                                <el-tooltip v-if="!item.isReadLater" effect="dark" content="添加到稍后阅读" placement="top-start">
                                    <div @click="setReadLater(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><CollectionTag /></el-icon></div>
                                </el-tooltip>
                                <el-tooltip v-if="item.isReadLater" effect="dark" content="取消稍后阅读" placement="top-start">
                                    <div @click="removeReadLater(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#009a61"><CollectionTag /></el-icon></div>
                                </el-tooltip>
                                <span>&nbsp;</span>
                                <el-dropdown placement="bottom-end">
                                    <div class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><More /></el-icon></div>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <el-dropdown-item><a class="article_link" @click="onShareArticle" target="_blank"><el-icon :size="18"><Share /></el-icon>分享给朋友</a></el-dropdown-item>
                                            <el-dropdown-item><a class="article_link" :href='"/feed-item/" + item.feed_item_id + ".html"' target="_blank"><el-icon :size="18"><FullScreen /></el-icon>在新窗口打开</a></el-dropdown-item>
                                            <el-dropdown-item><a class="article_link" :href='item.feed_url' target="_blank"><el-icon :size="18"><Paperclip /></el-icon>原文链接</a></el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>   
                        </div>
                    </div> 
                </div>
            </div>
            <div v-if="item.thumb_url.length == 0">
                <a v-if="item.feed != null" target="_blank" @click="onFeedClick(item.feed)"  class="feed_name_img"><img :src=item.feed.icon_url /> {{ item.feed.name }}{{ item.authorList.length > 0 ? " · " + item.authorList[0].author_name : "" }}</a>
                <a class="feed_item_list_container">
                    <a @click="showFeedItem(item)" class="feed_item_list_container_title" :class="{ feed_item_list_container_title_readed:item.readState != 1 }">{{ item.title }}</a>
                    <p class="feed_item_list_container_desc">{{ item.desc }}</p>
                </a> 
                <div style="display: flex;margin-top:5px;">
                    <div style="height:30px;line-height:30px;">
                        <span class="feed_item_list_container_time">{{ formatHumanTime(item.publish_time) }}</span>
                        <span class="feed_item_list_container_time">&nbsp;·&nbsp;</span>
                        <span class="feed_item_list_container_time">{{ item.read_count }}次阅读</span>
                    </div> 
                    <div style="flex:1"></div>
                    <el-tooltip effect="dark" content="快速阅读此文章" placement="top-start">
                        <div @click="showFeedItem(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Reading /></el-icon></div>
                    </el-tooltip>
                    <span>&nbsp;</span>
                    <el-tooltip v-if="item.readState == 1" effect="dark" content="标记为已读" placement="top-start">
                        <div  @click="onSetFeedItemState(item,2)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Check /></el-icon></div>
                    </el-tooltip>
                    <el-tooltip v-if="item.readState != 1" effect="dark" content="标记为未读" placement="top-start">
                        <div  @click="onSetFeedItemState(item,1)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Check /></el-icon></div>
                    </el-tooltip>
                    <span>&nbsp;</span>
                    <el-tooltip v-if="!item.isReadLater" effect="dark" content="添加到稍后阅读" placement="top-start">
                        <div @click="setReadLater(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><CollectionTag /></el-icon></div>
                    </el-tooltip>
                    <el-tooltip v-if="item.isReadLater" effect="dark" content="取消稍后阅读" placement="top-start">
                        <div @click="removeReadLater(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#009a61"><CollectionTag /></el-icon></div>
                    </el-tooltip>
                    <span>&nbsp;</span>
                    <el-dropdown placement="bottom-end">
                        <div class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><More /></el-icon></div>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item><a class="article_link" @click="onShareArticle" target="_blank"><el-icon :size="18"><Share /></el-icon>分享给朋友</a></el-dropdown-item>
                                <el-dropdown-item><a class="article_link" :href='"/feed-item/" + item.feed_item_id + ".html"' target="_blank"><el-icon :size="18"><FullScreen /></el-icon>在新窗口打开</a></el-dropdown-item>
                                <el-dropdown-item><a class="article_link" :href='item.feed_url' target="_blank"><el-icon :size="18"><Paperclip /></el-icon>原文链接</a></el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>    
            </div>
        </div>
        <div v-if="showSetReadedButton" style="margin:30px 0px;text-align: center;">
            <el-button @click="onSetReadAndNextPage" size="large" style="width:100%;">&nbsp;&nbsp;&nbsp;&nbsp;<el-icon :size="24" color="#757575"><Check /></el-icon>&nbsp;&nbsp;本页已读，加载下一页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        </div>
        
        <el-pagination v-if="pageMode==1" @current-page="currentPage" @current-change="handlePageChange" background layout="prev, pager, next" :total="totalCount"  :page-size="30" />
        
        <div style="height:30px"></div>
    </div>
</template>

<script>

// 这个页面做为【我的所有】【我的文件夹】【我的Feed】的Feed Item List合集展示
// 不需要考虑SEO

// :href='"/feed-item/" + item.feed_item_id + ".html"' target="_blank"

import helper from '@/utils/helper.js'
import rssbiz from '@/service/rss/rss.js'
import feedItem from '@/service/rss/feedItem.js'
import readLater from '@/service/rss/read_later.js'

import browser from '@/service/browser';
import devicebiz from '@/service/device';

import emitter from "@/service/event.js";

import { Refresh,Check,Select,Share,Reading,More,Link,Paperclip,FullScreen,CollectionTag } from "@element-plus/icons-vue"

export default defineNuxtComponent({
    props:{
        pageMode:{
            type:Number,
            default:1, //  1 分页， 2 自动加载更多
        },
        onlyShowReadLater:{
            type : Boolean,
            default : false, // 是否只显示read later的文章，状态改变后自动删除
        },
        readedMode : {
            type : Number,
            default : 0, // 0 全部显示， 1 只显示未读， 3 只显示已读
        },

        showSetReadedButton : {
            type : Boolean,
            default : false, // 0 全部显示， 1 只显示未读， 3 只显示已读
        },
        
    },

    components: {
        Check,Refresh,Select,Share,Reading,More,Link,Paperclip,FullScreen,CollectionTag
    },

    

    async asyncData() {
        return {
            totalCount:0,
            feedItems:[],

            currentPage:1,

            readLaterList:[], // 里面有加入read later的时间，用来排序

            currentFeed:null,
            feedItem:null // 当前被选中（点击）的 FeedItem
        }
    },

    mounted() {
    },

    methods:{
        async setFeedItemIDs(feedItemIDs, totalCount){
            let feedItems = [];
            let responseData = await rssbiz.getFeedItemByIDs(false,feedItemIDs);
            if (helper.isResultOk(responseData)){
                feedItems = responseData.data;
                await this.loadReadedFlag(feedItems);
                await this.loadReadLaterFlag(feedItems);
                await this.loadFeedForFeedItem(feedItems);
                await this.loadAuthorForFeedItem(feedItems);

                let sortFeedItems = [];
                for(let i in feedItemIDs){
                    for(let j in feedItems){
                        if(feedItems[j].feed_item_id == feedItemIDs[i]){
                            sortFeedItems.push(feedItems[j]);
                            break
                        }
                    }
                }

                this.feedItems = sortFeedItems;
                this.totalCount = totalCount;

                // window.scrollTo(0, 0);
            }
        },

        async setFeedItems(feedItems, pageNumber, totalCount){
            await this.loadReadedFlag(feedItems);
            await this.loadReadLaterFlag(feedItems);
            await this.loadFeedForFeedItem(feedItems)
            await this.loadAuthorForFeedItem(feedItems);

            this.currentPage = pageNumber;
            this.feedItems = feedItems;
            this.totalCount = totalCount;
        },

        setReadLaterIDList(readLaterIDs){
            this.readLaterList = readLaterIDs;
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
            for(let index in feedItems){
                for(let j in userFeedItemList){
                    if (userFeedItemList[j].feed_item_id == feedItems[index].feed_item_id){
                        feedItems[index].readState = userFeedItemList[j].readed;
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

            let responseData = await feedItem.fetchAuthor( false,feedItemIds);
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

        formatHumanTime(time){
            return helper.getHumanTime(time);
        },

        showFeedItem(feedItem){
            //this.currentFeed = feedItem.feed;
            //this.feedItem = feedItem;
            //this.$refs.feedItemProp.show();
            emitter.emit("on_popup_feeditem_content", { feed:feedItem.feed, feedItem:feedItem });
        },

        loadMore(){
            if (this.pageMode == 1){
                return;
            }
        },

        handlePageChange(pageNumber){
            this.$emit('onPageChange', {pageNumber:parseInt(pageNumber)});
        },

        onSetReadAndNextPage(){
            this.$emit('setReadedAndNextPage', { feedItems : this.feedItems, currentPage:this.currentPage });
        },

        removeByFeedItemID(feedItemID){
            let i = 0;
            while (i < this.feedItems.length) {
                if (this.feedItems[i].feed_item_id === feedItemID) {
                    this.feedItems.splice(i, 1);
                } else {
                    ++i;
                }
            }
            this.notifyFeedItemChange();
        },

        async onSetFeedItemState(feedItem,readState){
            let readStateInt = parseInt(readState);
            let responseData = await rssbiz.setFeedItemReadState(devicebiz.getDeviceID(), feedItem.feed_item_id, readStateInt);
            if (helper.isResultOk(responseData)){
                feedItem.readState = readStateInt;
                //console.log("===")

                /*if (this.readedMode == 1){
                    if(readStateInt == 2){
                        this.readState = 2;
                        //this.removeByFeedItemID(feedItem.feed_item_id);
                    }
                }else if(this.readedMode == 2) {
                    if(readStateInt == 1){
                        this.readState = 1;
                        //this.removeByFeedItemID(feedItem.feed_item_id);
                    }
                }*/
            }else{
                ElMessage.error("设置为\"" + (readStateInt == 1 ? "未读" : "已读") + "\"失败，请稍后再试。")
            }
        },

        async setReadLater(feedItem){
            let responseData = await readLater.setReadLater(devicebiz.getDeviceID(), feedItem.feed_id, feedItem.feed_item_id);
            if (!helper.isResultOk(responseData)){
                ElMessage.error('设置“稍后阅读"失败，请稍后再试。');
            }else{
                feedItem.isReadLater = true;
            }
        },

        async removeReadLater(feedItem){
            let responseData = await readLater.removeReadLater(devicebiz.getDeviceID(), feedItem.feed_item_id);
            if (!helper.isResultOk(responseData)){
                ElMessage.error('取消“稍后阅读"失败，请稍后再试。');
            }else{
                if (this.onlyShowReadLater){
                    // 移除
                    this.removeByFeedItemID(feedItem.feed_item_id);
                }
                feedItem.isReadLater = false;
            }
        },

        onShareArticle(){

        },

        setPageIndex(currentPage){
            this.currentPage = currentPage;
        },

        onFeedClick(feedObj){
            emitter.emit("on_popup_feed",{feed:feedObj});
        },

        loadMoreFeedItem(){
            // emitter.emit("on_popup_feed",{feed:feedObj});
        }
    }
})


</script>

<style scoped>
.feed_item_list_container{
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

