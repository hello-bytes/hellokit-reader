
<template>
    <div>
        <div style="max-width:800px;margin:0px auto;">
            <h2 style="font-size: 34px;font-weight: 700;margin-top:40px;margin-bottom:10px;">所有文章</h2>
            <el-divider></el-divider>
            <div v-for="(item, index) in feedItems" :key="index" class="feed_item_root_container">
                <div v-if="item.thumb_url.length > 0">
                    <div class="feed_item_list_img_container">
                        <img class="feed_item_img" :src='item.thumb_url' />
                        <div class="feed_item_list_content_container">
                            <a :href='"/feed-item/" + item.feed_item_id + ".html"' target="_blank" class="feed_item_list_container_title">{{ item.title }}</a>
                            <div class="feed_item_list_container_extra">
                                <span class="feed_item_list_container_time">{{ formatHumanTime(item.publish_time) }}</span>
                                <span>&nbsp;·&nbsp;</span>
                                <span class="feed_item_list_container_time">{{ item.read_count }}次阅读</span>
                            </div>
                            <p class="feed_item_list_container_desc">{{ item.desc }}</p>
                            <div style="display: flex;margin-top:5px;">
                                <div style="height:30px;line-height:30px;">
                                    <a target="_blank" :href='item.feed.url' class="feed_item_list_container_feed">{{ item.feed == null ? "" : item.feed.name }}</a>
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
                                
                            </div>   
                        </div>
                    </div> 
                </div>
                <div v-if="item.thumb_url.length == 0">
                    <div class="feed_item_list_container">
                        <a :href='"/feed-item/" + item.feed_item_id + ".html"' target="_blank" class="feed_item_list_container_title">{{ item.title }}</a>
                        <div>
                            <span class="feed_item_list_container_time">{{ formatHumanTime(item.publish_time) }}</span>
                        </div>
                        <p class="feed_item_list_container_desc">{{ item.desc }}</p>
                    </div> 
                    <div style="display: flex;margin-top:5px;">
                        <div style="height:30px;line-height:30px;">
                            <a target="_blank" :href='item.feed.url'  class="feed_item_list_container_feed">{{ item.feed == null ? "" : item.feed.name }}</a>
                        </div> 
                        <div style="flex:1"></div>
                        <el-tooltip effect="dark" content="快速阅读此文章" placement="top-start">
                            <div @click="showFeedItem(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Reading /></el-icon></div>
                        </el-tooltip>
                        <span>&nbsp;</span>
                        <el-tooltip  v-if="item.readState == 1" effect="dark" content="标记为已读" placement="top-start">
                            <div  @click="onSetFeedItemState(item,2)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Check /></el-icon></div>
                        </el-tooltip>
                        <el-tooltip  v-if="item.readState != 1"  effect="dark" content="标记为未读" placement="top-start">
                            <div @click="onSetFeedItemState(item,1)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Check /></el-icon></div>
                        </el-tooltip>
                        <span>&nbsp;</span>
                        <el-tooltip v-if="!item.isReadLater" effect="dark" content="添加到稍后阅读" placement="top-start">
                            <div @click="setReadLater(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><CollectionTag /></el-icon></div>
                        </el-tooltip>
                        <el-tooltip v-if="item.isReadLater" effect="dark" content="取消稍后阅读" placement="top-start">
                            <div @click="removeReadLater(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#009a61"><CollectionTag /></el-icon></div>
                        </el-tooltip>
                    </div>    
                </div>
                
            </div>
            <Pager :baseURL='"/feed-item/page"' :activeIndex="pageNumber" :totalCount="totalCount"></Pager>
            <div style="height:30px;"></div>
        </div>
    </div>
</template>

<script>

// 支持SEO，通过属性传递参数

import helper from '@/utils/helper.js'
import rssbiz from '@/service/rss/rss.js'
import readLater from '@/service/rss/read_later.js'

import browser from '@/service/browser';
import devicebiz from '@/service/device';

import Pager from '@/components/base/Pager.vue'

import { Refresh,Check,Select,Share,Reading,More,Link,Paperclip,FullScreen,CollectionTag } from "@element-plus/icons-vue"

import emitter from "@/service/event.js";

export default defineNuxtComponent({
    props:{
        totalCount:{
            type : Number,
            default : 0, // 总条数
        },
        pageNumber:{
            type : Number,
            default : 0, // 当前页面编号，即当前是第几页
        },
        onlyShowReadLater:{
            type : Boolean,
            default : false, // 是否只显示read later的文章，状态改变后自动删除
        },
        readedMode : {
            type : Number,
            default : 0, // 0 全部显示， 1 只显示未读， 3 只显示已读
        },
        feedItems : {
            type : Array,
            default : [], // 0 全部显示， 1 只显示未读， 3 只显示已读
        },
    },

    components: {
        Check,Refresh,Select,Share,Reading,More,Link,Paperclip,FullScreen,CollectionTag,Pager
    },

    

    async asyncData() {
        return {
        }
    },

    mounted() {
    },

    methods:{
        
        notifyFeedItemChange(){
            this.$emit('feedItemCountChange', this.feedItems.length);
        },
        
        formatHumanTime(time){
            return helper.getHumanTime(time);
        },

        showFeedItem(feedItem){
            emitter.emit("on_popup_feeditem_content",{ feed:feedItem.feed, feedItem : feedItem });
        },

        loadMore(){
            if (this.pageMode == 1){
                return;
            }
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
                if (this.readedMode == 1){
                    if(readStateInt == 2){
                        this.removeByFeedItemID(feedItem.feed_item_id);
                    }
                }else if(this.readedMode == 2) {
                    if(readStateInt == 1){
                        this.removeByFeedItemID(feedItem.feed_item_id);
                    }
                }
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

        }
    }
})


</script>

<style scoped>
.feed_item_root_container{
    margin-top:20px;margin-bottom:20px;border-bottom:1px solid #eee;padding-bottom:10px;
}
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
</style>

