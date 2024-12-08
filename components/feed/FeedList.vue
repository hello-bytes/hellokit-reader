<template>
    <div>
        <div style="display: flex;margin-top:10px;">
            <p style="flex:1;">共&nbsp;{{ totalCount }}&nbsp;个订阅源。</p>
            <div v-show="totalCount > 0" style="display: flex;align-items: center; justify-content: center;text-align: right;">
                <a class="order_link" :class="{order_link_actived:orderType == 4}" :href='feedTimeURL'>按时间排序</a>
                <span>&nbsp;&nbsp;</span>
                <a class="order_link" :class="{order_link_actived:orderType == 2}" :href='feedItemTimeURL'>按最近更新</a>
            </div>
        </div>
        <div v-for="(item, index) in feeds" :key="index" class="feed_container"  >
            <div class="feed_container_top">
                <img :src='item.icon_url' />
                <div style="flex:1;margin-left:10px;">
                    <a class="feed_name" @click="onFeedClick(item)">{{ item.name }}</a>
                    <br/>
                    <a class="feed_url" :href='item.url'>{{ item.url }}</a>
                    <p class="feed_desc">{{ item.desc }}</p>
                </div>
                <div>
                    <el-tag v-if="false" type="primary"  style="margin-right:10px;">已订阅</el-tag>
                    <el-button v-if="item.folderList.length == 0" @click="onSubscribeClick(item)"><el-icon :size="16"><FolderAdd /></el-icon>&nbsp;订阅</el-button>
                    <el-tooltip v-if="item.folderList.length > 0" effect="dark" content="取消订阅或转移至其它目录" placement="right">
                        <el-button  @click="onSubscribeClick(item)"><el-icon :size="16"><FolderChecked /></el-icon>&nbsp;修改</el-button>
                    </el-tooltip>
                </div>
            </div>
            <div style="display: flex;padding-left:50px;margin-top:15px;">
                <div class="feed_counter">
                    <p>{{ wrapCountDisplay(item.follow_count) }}</p>
                    <p>订阅</p>
                </div>
                <div style="flex: 1;"></div>
                <div class="feed_counter">
                    <p>{{ wrapCountDisplay(item.read_count) }}</p>
                    <p>累计阅读</p>
                </div>
                <div style="flex: 1;"></div>
                <div class="feed_counter" >
                    <p>{{ wrapCountDisplay(item.feed_item_count) }}</p>
                    <p>文章</p>
                </div>
                <div style="flex: 1;"></div>
                <div class="feed_counter">
                    <p>{{ wrapCountDisplay(item.recent_feeditem_count) }}</p>
                    <p>最近更新</p>
                </div>
            </div>
        </div>
        <Pager v-show="totalCount > 0" :baseURL='"/feed/page"' :activeIndex="pageNumber" :totalCount="totalCount"></Pager>
    </div>
</template>

<script>

import browser from '@/service/browser';
import devicebiz from '@/service/device';
import rssbiz from '@/service/rss/rss.js';
import folder from '@/service/rss/folder.js';

import emitter from "@/service/event.js";

import Pager from "@/components/base/Pager.vue"
import {FolderAdd,FolderChecked} from "@element-plus/icons-vue"

export default defineNuxtComponent({
    components: {
        Pager,FolderAdd,FolderChecked
    },

    /*props:{
        catetoryType:{
            type:Number,
            default:1,
        },
    },*/

    async asyncData(data) {
        //console.log("==============================")
        //console.log(data.payload.path);
        const route = useRoute();
        let pageNumber = parseInt(route.params.page);
        if (pageNumber < 1) {
            pageNumber = 1;
        }

        // console.log(route)

        let feeds = [];
        let feedIDs = [];
        let feedsCount = 0;

        let orderType = 2;
        let categoryType = 0;
        let feedTimeURL = "";
        let feedItemTimeURL = "";
        if (data.payload.path.indexOf("/feed/website/") >= 0){
            categoryType = 1;
            feedTimeURL = "/feed/website/ft/1.html";
            feedItemTimeURL = "/feed/website/at/1.html";
            if (data.payload.path.indexOf("/feed/website/ft/") >= 0){
                orderType = 4
            }
        }else if (data.payload.path.indexOf("/feed/wechat/") >= 0){
            categoryType = 3;
            feedTimeURL = "/feed/wechat/ft/1.html";
            feedItemTimeURL = "/feed/wechat/at/1.html";
            if (data.payload.path.indexOf("/feed/wechat/ft/") >= 0){
                orderType = 4
            }
        }

        let feedListResponse = await rssbiz.queryFeedList(categoryType, 2, 30, (pageNumber-1) * 30);
        if(helper.isResultOk(feedListResponse)){
            feeds = feedListResponse.data.list;
            feedsCount = feedListResponse.data.total_count;
        }

        for (let index in feeds){
            feeds[index].folderList = [];

            feeds[index].feed_item_count = 0;
            feeds[index].recent_feeditem_count = 0;
            feeds[index].read_count = 0;
            feeds[index].follow_count = 0;

            feedIDs.push(feeds[index].feed_id);
        }

        // 获取Feed的统计信息
        let feedStaticsResponse = await rssbiz.queryFeedStaticsByIDs(true,feedIDs);
        if (helper.isResultOk(feedStaticsResponse)){
            let feedStatcisList = feedStaticsResponse.data;
            for (let index in feedStatcisList){
                for (let j in feeds){
                    if(feeds[j].feed_id == feedStatcisList[index].feed_id){
                        feeds[j].feed_item_count = feedStatcisList[index].feed_item_count;
                        feeds[j].recent_feeditem_count = feedStatcisList[index].recent_feeditem_count;
                        feeds[j].read_count = feedStatcisList[index].read_count;
                        feeds[j].follow_count = feedStatcisList[index].follow_count;
                        break;
                    }
                }
            }
        }

        let totalFeedItemCount = 0;
        let feedItemCountResponse = await rssbiz.queryFeedStaticsByIDs(true,["0"]);
        if (helper.isResultOk(feedItemCountResponse)){
            if(feedItemCountResponse.data.length == 1){
                totalFeedItemCount = feedItemCountResponse.data[0].feed_item_count;
            }
        }

        //console.log("===========");
        //console.log(feeds);

        return {
            feeds:feeds,
            categoryType:1,
            feedTimeURL : feedTimeURL,
            feedItemTimeURL : feedItemTimeURL,
            orderType:orderType,
            // searchFeedName:"",
            totalCount:feedsCount,
            totalFeedItemCount : totalFeedItemCount,
            pageNumber:pageNumber,
            currentSelectFeed:null, // 供选择文件夹组件使用
        }
    },

    mounted() {
        this.fetchFeedFolder();

        emitter.on("on_feed_folder_update", (param) => {
			this.onFeedFolderUpdate(param);
        });
    },

    methods:{
        async fetchFeedFolder(){
            if (this.feeds == null ){
                return;
            }

            let feedIDs = [];
            for (let index in this.feeds){
                feedIDs.push(this.feeds[index].feed_id) 
            } 
            let responseData = await folder.getFolderIDByFeedIDs(devicebiz.getDeviceID(),feedIDs);
            if(helper.isResultOk(responseData)){
                let folders = responseData.data;
                for(let i in folders){
                    for (var j in this.feeds){
                        if (this.feeds[j].feed_id == folders[i].feed_id){
                            this.feeds[j].folderList = folders[i].user_folder_list;
                        }
                    }
                }
            }
        },

        async onFeedFolderUpdate(params){
            let feedID = params.feed.feed_id;
            let responseData = await folder.getFolderIDByFeedIDs(devicebiz.getDeviceID(),[feedID]);
            if(helper.isResultOk(responseData)){
                for (var i in this.feeds){
                    if (this.feeds[i].feed_id == feedID){
                        if(responseData.data.length == 1){
                            this.feeds[i].folderList = responseData.data[0].user_folder_list;
                        }else{
                            this.feeds[i].folderList = [];
                        }
                    }
                }
            }
        },

        onSubscribeClick(feed){
            emitter.emit("on_popup_selectfolder",{ currentFeed:feed, action:1 }) 
        },

        onFeedClick(feed){
            emitter.emit("on_popup_feed",{feed:feed});
        },

        wrapCountDisplay(count){
            if (count < 1000){
                return count
            }else if (count < 1000 * 1000){
                return (count / 1000).toFixed(2) + "K"
            }else if (count < 1000 * 1000 * 1000){
                return (count / (1000 * 1000)).toFixed(2) + "M"
            }else if (count < 1000 * 1000 * 1000 * 1000){
                return (count / (1000 * 1000 * 1000)).toFixed(2) + "B"
            }
            return "Infinity";
        },
    }
})


</script>

<style scoped>
.feed_container{
    border-radius: 5px;
    border: 1px solid #eee;
    margin-bottom:15px;
    padding:20px 20px;
}

.feed_container:hover{
    /*border: 1px solid #009a61; */
}


.feed_container_top{
    display: flex;   
}
.feed_container_top > img{
    width:50px;max-height:50px;border-radius: 5px;
}
.feed_container_top > div > a > h3{
    margin-bottom:8px;
}


.feed_name{
    margin-bottom:0px;
    font-size:18px;
    display: inline-block;
    cursor: pointer;
}
.feed_url{
    color:rgb(158, 158, 158);
    display: inline-block;
    font-size: 14px;
}
.feed_url:hover{
    text-decoration: underline;
}
.feed_desc{
    color:rgb(158, 158, 158);
    font-size:14px;
    margin-top:10px;
}
.feed_counter{

}
.feed_counter > p{
    margin-top:0px;
    margin-bottom:0px;
    font-size: 14px;
    color:gray;
    text-align: center;
}
.order_link{
    font-size:14px;
    cursor: pointer;
}
.order_link_actived{
    color:#2bb24c;
    font-weight: bold;
}
</style>