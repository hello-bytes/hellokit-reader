<template>
    <div class="rss_container">
        <div class="rss_left_bar">
            <a href="/today">
                <div class="rss_icon_bg">
                    <RssLogo :width="28" :height="28"></RssLogo>
                </div>
            </a>
            <div class="rss_icon_bg" @click="onToggleMiddle">
                <SideBar :width="25" :height="25"></SideBar>
            </div>
            <div style="height:160px;"></div>
            <a href="/feed/page/1.html">
                <div class="rss_icon_bg">
                    <AddRss :width="28" :height="28"></AddRss>
                </div>
            </a>
            <div style="flex: 1;"></div>
            <div class="rss_icon_bg">
                <User :width="28" :height="28"></User>
            </div>
            <div style="height:5px;"></div>
        </div>
        <div v-show="showMiddlePanel" class="rss_middle_bar">
            <div style="height:50px;"></div>
            <a class="middle_entry" href="/toady">
                <Today :width="18" :height="18"></Today>
                <span>今日资讯</span>
            </a>
            <div class="middle_entry">
                <AllFeedItem :width="19" :height="18"></AllFeedItem>
                <span>所有资讯</span>
            </div>
            <div class="middle_entry" style="padding-left:22px;">
                <LaterRead :width="18" :height="18"></LaterRead>
                <span>稍后阅读</span>
            </div>
            <div class="middle_entry" style="padding-left:22px;">
                <AllFeed :width="18" :height="18"></AllFeed>
                <span>全部Feed源</span>
            </div>
            <div style="height:50px;"></div>
            <div style="margin-bottom:8px;">
                <span style="display: inline-block;padding-left:16px;">已订阅</span>
            </div>
            <div class="middle_entry">
                <AllSubscribeFeed :width="20" :height="20"></AllSubscribeFeed>
                <span>所有订阅源</span>
            </div>
            <div v-for="(folderItem, index) in folderList" :key="index" >
                <div :class="{middle_entry_active:folderItem.isActive}" class="middle_entry folder_entry"  @click="onSelectFolder(folderItem)">
                    <el-icon v-if="folderItem.expand == false" @click="onToggleFolder(folderItem)" :size="20" style="vertical-align: center;"><ArrowRight></ArrowRight></el-icon>
                    <el-icon v-if="folderItem.expand == true" @click="onToggleFolder(folderItem)" :size="20" style="vertical-align: center;"><ArrowDown></ArrowDown></el-icon>
                    <span>{{ folderItem.folder_name }}</span>
                    <div style="flex:1"></div>
                    <span class="folder_number">{{ folderItem.feedCount == -1 ? "-" : folderItem.feedCount }}</span>
                </div>
                <div v-if="folderItem.expand" v-for="(feed, feedIndex) in folderItem.feeds" :key="feedIndex">
                    <a :href='"/feed/" + feed.feed_id'>
                        <div :class="{feed_entry_active:feed.isActive}" class="middle_entry" style="padding-left:48px;">
                            <AllSubscribeFeed v-if="false" :width="20" :height="20"></AllSubscribeFeed>
                            <AllSubscribeFeedActive v-if="false" :width="20" :height="20"></AllSubscribeFeedActive>
                            <img class="feed_icon_img" :src='feed.icon_url' >
                            <span>{{ feed.name }}</span>
                        </div>
                    </a>
                </div>
            </div>
            
            <div class="middle_entry" style="padding-left:22px;" @click="createFolderClick">
                <CreateRssFolder :width="18" :height="18"></CreateRssFolder>
                <span>创建文件夹</span>
            </div>
            <div style="height:50px;"></div>
            <div class="middle_entry">
                <Recent :width="18" :height="18"></Recent>
                <span>最近阅读</span>
            </div>
        </div>
        <div class="rss_right">
            <slot></slot>
        </div>
        <CreateFolderPopup ref="createFolderComp"></CreateFolderPopup>
    </div>
</template>

<script>
import helper from '@/utils/helper';
import loginbiz from '@/utils/loginbiz';

import RssLogo from "@/icons/RssLogo.vue"
import RssLogoGray from "@/icons/RssLogoGray.vue"
import SideBar from "@/icons/SideBar.vue"
import AddRss from "@/icons/AddRss.vue"
import User from "@/icons/User.vue"
import CreateRssFolder from "@/icons/CreateRssFolder.vue"
import AllFeed from "@/icons/AllFeed.vue"
import LaterRead from "@/icons/LaterRead.vue"
import Recent from "@/icons/Recent.vue"
import AllSubscribeFeed from "@/icons/AllSubscribeFeed.vue"
import AllSubscribeFeedActive from "@/icons/AllSubscribeFeedActive.vue"

import AllFeedItem from "@/icons/AllFeedItem.vue"
import Today from "@/icons/Today.vue"

import CreateFolderPopup from '~/components/rss/popup/CreateFolderPopup.vue'

import devicebiz from '@/service/device.js'

import userbiz from '@/service/user.js';

import rssbiz from '@/service/rss/rss.js';
import rssfolder from '@/service/rss/folder.js';


import {ArrowRight,ArrowDown} from "@element-plus/icons-vue"


export default defineNuxtComponent({
    components: {
		RssLogo,SideBar,AddRss,User,RssLogoGray,CreateRssFolder,AllFeed,LaterRead,Recent,AllSubscribeFeed,AllFeedItem,Today,CreateFolderPopup,ArrowRight,ArrowDown,AllSubscribeFeedActive
	},

    async asyncData(params) {
        const route = useRoute();
        let currentFeedID = "";
        let currentFolderID = "";
        

        if (process.server) {
            let url = params.ssrContext.url;
            if(url.indexOf("/folder") >= 0){
                currentFolderID = route.params.folder_id;
                if (currentFolderID == undefined){
                    currentFolderID = "";
                }
            }else if(url.indexOf("/feed") >= 0){
                currentFeedID = route.params.feed_id;
                if (currentFeedID == undefined){
                    currentFeedID = "";
                }
            }
        }
        
        
        return {
            showMiddlePanel:true,

            currentExpandTick: 0,

            currentFeedID:currentFeedID,
            currentFolderID:currentFolderID,

            folderList:[],
        }
    },

    mounted(){
        this.loadFolderList();
    },

    methods : {
        async loadFolderList(){
            let responseData = await rssfolder.queryFolderList(false, devicebiz.getDeviceID(),100,0);
            if (helper.isResultOk(responseData)){
                let folderList = responseData.data.page;
                for(let index in folderList){
                    folderList[index].isActive = false;
                    if (this.currentFolderID == folderList[index].folder_id){
                        folderList[index].isActive = true;    
                    }
                    
                    folderList[index].expand = false;
                    folderList[index].feedCount = -1;
                    folderList[index].feeds = [];
                }
                this.folderList = folderList;
            }

            this.loadFolderFeedCount();
            this.checkFeedFolder();
        },

        async loadFolderFeedCount(){
            let folderIDs = [];
            for(let index in this.folderList){
                let folder = this.folderList[index];
                folderIDs.push(folder.folder_id);
            }

            let responseData = await rssfolder.getFolderCount(false, folderIDs);
            if (helper.isResultOk(responseData)){
                let staticsFolderList = responseData.data;
                for (let index in this.folderList){
                    for(let i in staticsFolderList){
                        if (staticsFolderList[i].folder_id == this.folderList[index].folder_id){
                            this.folderList[index].feedCount = staticsFolderList[i].feed_count;
                            break;
                        }
                    }
                }
            }
        },

        async checkFeedFolder(){
            if (this.currentFeedID.length == 0){
                return;
            }

            // 检查此FeedID所属的文件夹，然后此文件夹展开 & 高亮
            let responseData = await rssbiz.getFolderIDByFeedID(devicebiz.getDeviceID(), this.currentFeedID);
            if (helper.isResultOk(responseData)){
                let folderList = responseData.data;
                for(let i in folderList){
                    for(let j in this.folderList){
                        if (this.folderList[j].folder_id == folderList[i].folder_id){
                            this.folderList[j].isActive = true;
                            this.expandFolder(this.folderList[j]);
                            break
                        }
                    }   
                }
            }
        },

        createFolderClick(){
            this.$refs.createFolderComp.show();
        },

        onToggleFolder(folderItem){
            this.currentExpandTick = Date.now();
            folderItem.expand = !folderItem.expand;

            if (folderItem.expand){
                this.loadFolderFeed(folderItem);
            }
        },

        expandFolder(folderItem){
            if (folderItem.expand){
                return;
            }
            this.onToggleFolder(folderItem)
        },

        onToggleMiddle(){
            this.showMiddlePanel = !this.showMiddlePanel;
        },

        async loadFolderFeed(folder){
            let responseData = await rssfolder.getFolderByFeed(false,devicebiz.getDeviceID(), folder.folder_id,1,50,0);
            if (helper.isResultOk(responseData)){
                let feeds = responseData.data.page;
                for (let index in feeds){
                    feeds[index].isActive = false;
                    if(this.currentFeedID == feeds[index].feed_id){
                        feeds[index].isActive = true;
                    }
                }
                folder.feeds = feeds;
            }
        },

        onSelectFolder(folder){
            console.log(Date.now() - this.currentExpandTick );
            if (Date.now() - this.currentExpandTick > 700) {
                window.location.href = "/rss/folder/" + folder.folder_id + "/1" + ".html";    
            }
        }
    }
})

</script>

<style>

.rss_container{
    display:flex;height:100vh;
}

.rss_left_bar{
    width:62px;
    padding:6px;
    display:flex;
    flex-direction: column;
    background-color:white;
}
.rss_middle_bar{
    width:305px;
    background-color:  rgb(246, 247, 248);
    border-right: solid 1px rgb(235, 235, 235);
    height: 100%;
}

.rss_right{
    background-color:white;
    flex: 1;overflow: scroll;
}

.rss_icon_bg{
    padding:11px;
    /*background-color: red; */
    background-color: white; 
    border-radius: 5px;
}
.rss_icon_bg:hover{
    background-color: rgb(244,244,244);
}
.middle_entry{
    font-size: 14px;
    padding-top:5px;
    padding-bottom:5px;
    padding-left:20px;
    cursor: pointer;
    display: flex;
    align-content: center;
}
.middle_entry:hover{
    background-color: #eee;
}
.middle_entry_active{
    color: #009a61;
}
.feed_entry_active{
    color: #009a61;
}
.feed_entry_active > i {
    color:#009a61;
    fill:#009a61;
}
.middle_entry > span {
    margin-top:0px;
    margin-bottom:0px;
    display:inline-block;
    margin-left:8px;
}
.folder_entry{
    display: flex;align-items: center;
}
.folder_entry > i:hover{
    color: #009a61;
}
.folder_number{
    padding:8px;color:rgb(180,180,180);font-size:12px;font-weight:300;
}
.feed_icon_img{
    width:16px;
    height:16px;
    border-radius: 3px;
}

</style>