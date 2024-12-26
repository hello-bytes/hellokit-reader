<template>
    <div>
        <div style="height:50px;border-bottom: 1px solid rgba(0, 0, 0, .05);">
            <div class="center_content_wrapper" style="margin-top:13px;text-align: right;">
                <el-button type="primary" @click="onImportRss">导入订阅源</el-button>
            </div>
        </div>
        <div style="width:800px;margin:0px auto;padding-top:30px;">
            <FeedsTab :activeTab="activeTab"></FeedsTab>
            <h2 style="margin-top:38px;">搜索您想看的频道</h2>
            <el-input v-model="searchFeedName" @keyup.enter.native="onInputKeyDown" size="large" placeholder="" class="input-with-select">
                <template #append>
                    <el-button @click="onSearchClick" ><el-icon><Search /></el-icon>&nbsp;&nbsp;搜索</el-button>
                </template>
            </el-input>
            <FeedList :baseURL=baseURL></FeedList>
        </div>
        <div style="height:40px;"></div>
    </div>
</template>

<script>


import browser from '@/service/browser';
import devicebiz from '@/service/device';
import rssbiz from '@/service/rss/rss.js';
import folder from '@/service/rss/folder.js';

import FeedsTab from '@/components/feed/FeedsTab.vue';

import {Search,FolderAdd,FolderChecked} from "@element-plus/icons-vue"

import FeedList from "@/components/feed/FeedList.vue"
import Pager from "@/components/base/Pager.vue"

import emitter from "@/service/event.js";

export default defineNuxtComponent({
    components: {
        Search,Pager,FolderAdd,FolderChecked,FeedsTab,FeedList
    },

    async asyncData(data) {
        const route = useRoute();
        let pageNumber = parseInt(route.params.page);
        if (pageNumber < 1) {
            pageNumber = 1;
        }

        let feedsCount = 0;

        // 获取Feed的统计信息
        let totalFeedItemCount = 0;
        let feedItemCountResponse = await rssbiz.queryFeedStaticsByIDs(true,["0"]);
        if (helper.isResultOk(feedItemCountResponse)){
            if(feedItemCountResponse.data.length == 1){
                totalFeedItemCount = feedItemCountResponse.data[0].feed_item_count;
            }
        }

        let activeTab = "";
        if (data.payload.path.indexOf("/feed/website/") >= 0){
            activeTab = "website";
        }else if (data.payload.path.indexOf("/feed/wechat/") >= 0){
            activeTab = "wechat";
        }

        let baseURL = "";
        if (data.payload.path.indexOf("/feed/website/at") >= 0){
            baseURL = "/feed/website/at";
        }else if (data.payload.path.indexOf("/feed/website/ft") >= 0){
            baseURL = "/feed/website/ft";
        }else if (data.payload.path.indexOf("/feed/wechat/at") >= 0){
            baseURL = "/feed/wechat/at";
        }else if (data.payload.path.indexOf("/feed/wechat/ft") >= 0){
            baseURL = "/feed/wechat/ft";
        }

        return {
            baseURL:baseURL,
            searchFeedName:"",
            totalCount:feedsCount,
            activeTab:activeTab,
            totalFeedItemCount : totalFeedItemCount,
        }
    },

    mounted() {
    },

    methods: {
        onSearchClick(){
            window.location.href = "/feed/search/" + this.searchFeedName;
        },

        onImportRss(){
            window.location.href = "/import";
        },

        onInputKeyDown(event){
            //console.log
            if(this.searchFeedName.length == 0){
            }else{
                window.location.href = "/feed/search/" + this.searchFeedName;
            }
            
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
.order_link{
    font-size:14px;
    cursor: pointer;

}
</style>