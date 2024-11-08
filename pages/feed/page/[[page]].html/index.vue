<template>
    <div style="width:800px;margin:0px auto;padding-top:35px;">
        <h2>搜索您想看的频道</h2>
        <el-input v-model="searchFeedName" size="large" placeholder="" class="input-with-select">
            <template #append>
                <el-button ><el-icon><Search /></el-icon>&nbsp;&nbsp;搜索</el-button>
            </template>
        </el-input>
        <p style="margin-bottom:5px;margin-top:30px;">共&nbsp;{{ totalCount }}&nbsp;个频道</p>
        <div v-for="(item, index) in feeds" :key="index" class="feed_container" >
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
                    <el-button  @click="onSubscribeClick(item)"><el-icon :size="16"><FolderChecked /></el-icon>&nbsp;编辑</el-button>
                </el-tooltip>
            </div>
        </div>
        <Pager :baseURL='"/feed/page"' :activeIndex="pageNumber" :totalCount="totalCount"></Pager>
    </div>
</template>

<script>


import browser from '@/service/browser';
import devicebiz from '@/service/device';
import rssbiz from '@/service/rss/rss.js';
import folder from '@/service/rss/folder.js';

import {Search,FolderAdd,FolderChecked} from "@element-plus/icons-vue"

import Pager from "@/components/base/Pager.vue"

import emitter from "@/service/event.js";

export default defineNuxtComponent({
    components: {
        Search,Pager,FolderAdd,FolderChecked
    },

    async asyncData() {
        const route = useRoute();
        let pageNumber = parseInt(route.params.page);
        if (pageNumber < 1) {
            pageNumber = 1;
        }

        let feeds = [];
        let feedsCount = 0;

        let feedListResponse = await rssbiz.queryFeedList(1,30,(pageNumber-1)*30);
        if(helper.isResultOk(feedListResponse)){
            feeds = feedListResponse.data.list;
            feedsCount = feedListResponse.data.total_count;
        }

        for (let index in feeds){
            feeds[index].folderList = [];
        }

        //feedsCount = 100000;
        return {
            feeds:feeds,
            searchFeedName:"",
            totalCount:feedsCount,
            pageNumber:pageNumber,
            currentSelectFeed:null, // 供选择文件夹组件使用
            isMobile: browser.isMobile()
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

        onFeedClick(feed){
            emitter.emit("on_popup_feed",{feed:feed}); 
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
    display: flex;
}
.feed_container:hover{
    /*border: 1px solid #009a61; */
}
.feed_container > img{
    width:50px;max-height:50px;border-radius: 5px;
}
.feed_container > div > a > h3{
    margin-bottom:8px;
}

.feed_name{
    margin-bottom:0px;
    font-size:18px;
    display: inline-block;
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
</style>