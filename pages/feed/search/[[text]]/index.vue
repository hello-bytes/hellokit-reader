<template>
    <div style="width:800px;margin:0px auto;padding-top:35px;">
        <h2>搜索您想看的频道</h2>
        <el-input v-model="text" size="large" placeholder="" class="input-with-select">
            <template #append>
                <el-button @click="onSearchClick"><el-icon><Search /></el-icon>&nbsp;&nbsp;搜索</el-button>
            </template>
        </el-input>
        <p style="margin-bottom:5px;margin-top:30px;">共&nbsp;{{ totalCount }}&nbsp;条结果</p>
        <div v-for="(item, index) in feeds" :key="index" class="feed_container" >
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
        <el-pagination background layout="prev, pager, next" @current-change="handlePageChange" :page-size="30" :total="totalCount" />
    </div>
</template>

<script>

import {Search,FolderAdd,FolderChecked} from "@element-plus/icons-vue"
import emitter from "@/service/event.js";
import rssbiz from '@/service/rss/rss.js';
export default defineNuxtComponent({
    components: {
        Search,FolderAdd,FolderChecked
    },

    async asyncData() {
        const route = useRoute();
        let pageNumber = parseInt(route.params.page);
        if (pageNumber < 1) {
            pageNumber = 1;
        }
        let text = route.params.text;
        if (text == null || text == undefined) {
            text = "";
        }

        let feeds = [];
        let feedIDs = [];
        let feedsCount = 0;
        let feedListResponse = await rssbiz.searchFeed(true, text, 2, 30 , 0);
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

        return {
            feeds:feeds,
            text:text,
            urlText:text,
            totalCount:feedsCount,
            totalFeedItemCount : 0,
            pageNumber:1,
        }
    },

    mounted() {
        this.fetchFeedFolder();

        emitter.on("on_feed_folder_update", (param) => {
			this.onFeedFolderUpdate(param);
        });
    },

    methods: {
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

        onSubscribeClick(feed){
            //this.currentSelectFeed = feed;
            emitter.emit("on_popup_selectfolder",{ currentFeed:feed }) 
            //this.$refs.selectFolderComp.show();
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

        onSearchClick(){
            window.location.href = "/feed/search/" + this.text;
        },

        async loadPage(pageNumber){
            let feeds = [];
            let feedIDs = [];
            let feedsCount = 0;
            let feedListResponse = await rssbiz.searchFeed(true, urlText, 2, 30 , (pageNumber-1) * 30);
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

            this.feeds = feeds;
        },

        handlePageChange(currentPage){
            this.loadPage(parseInt(currentPage));
        }
    }

});

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
</style>