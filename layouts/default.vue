<template>
    <div class="rss_container">
        <div class="rss_left_bar">
            <a href="/my/today">
                <div class="rss_icon_bg">
                    <HelloReadLogo :width="28" :height="28"></HelloReadLogo>
                </div>
            </a>
            <div class="rss_icon_bg" @click="onToggleMiddle">
                <SideBar :width="25" :height="25"></SideBar>
            </div>
            <div style="height:160px;"></div>
            <el-tooltip class="box-item" effect="dark" content="订阅您喜欢的内容源" placement="right-start" >
                <a href="/feed/page/1.html">
                    <div class="rss_icon_bg">
                        <AddRss :width="28" :height="28"></AddRss>
                    </div>
                </a>
            </el-tooltip>
            <div style="flex: 1;"></div>
            <el-tooltip v-if="!isLogined" class="box-item" effect="dark" content="登录即可多设备同步阅读数据" placement="right-start" >
                <div @click="onGotoLogin" class="rss_icon_bg">
                    <User :width="28" :height="28"></User>
                </div>
            </el-tooltip>
            <el-popover v-if="isLogined" placement="right" :width="290" trigger="click">
                <template #reference>
                    <div class="rss_icon_bg">
                        <User :width="28" :height="28"></User>
                    </div>
                </template>
                <div class="user_info_popover">
                    <UserPopover></UserPopover>
                </div>
            </el-popover>
            
            <div style="height:5px;"></div>
        </div>
        <div v-show="showMiddlePanel" class="rss_middle_bar">
            <div style="height:50px;"></div>
            <a :class="{feed_entry_active:isTodayPage}" class="middle_entry" href="/my/today">
                <Today :width="18" :height="18"></Today>
                <span>今日阅读</span>
            </a>
            <div v-if=false class="middle_entry">
                <AllFeedItem :width="19" :height="18"></AllFeedItem>
                <span>所有资讯</span>
            </div>
            <a href="/my/read-later" :class="{feed_entry_active:isReadLater}" class="middle_entry" style="padding-left:22px;">
                <el-icon :size="18"><CollectionTag></CollectionTag></el-icon>
                <span>稍后阅读</span>
            </a>
            <a href="/my/already-read" :class="{feed_entry_active:isReaded}" class="middle_entry" style="padding-left:22px;">
                <ReadedIcon :width="18" :height="18"></ReadedIcon>
                <span>已读文章</span>
            </a>
            <div style="height:50px;"></div>
            <div style="margin-bottom:8px;">
                <span style="display: inline-block;padding-left:16px;">已订阅</span>
            </div>
            <a :class="{feed_entry_active:isMyFeed}" href="/my/all" class="middle_entry">
                <div style="width:2px;"></div>
                <el-icon :size="18"><Files></Files></el-icon>
                <span>所有内容</span>
            </a>
            <div v-for="(folderItem, index) in folderList" :key="index" >
                <div :class="{middle_entry_active:folderItem.isActive}" class="middle_entry folder_entry"  @click="onSelectFolder(folderItem)">
                    <el-icon v-if="folderItem.expand == false" @click="onToggleFolder(folderItem)" :size="20" style="vertical-align: center;"><ArrowRight></ArrowRight></el-icon>
                    <el-icon v-if="folderItem.expand == true" @click="onToggleFolder(folderItem)" :size="20" style="vertical-align: center;"><ArrowDown></ArrowDown></el-icon>
                    <span>{{ folderItem.folder_name }}</span>
                    <div style="flex:1"></div>
                    <span class="folder_number">{{ folderItem.feedCount == -1 ? "-" : folderItem.feedCount }}</span>
                </div>
                <div v-if="folderItem.expand" v-for="(feed, feedIndex) in folderItem.feeds" :key="feedIndex">
                    <a :href='"/my/feed/" + feed.feed_id'>
                        <div :class="{feed_entry_active:feed.isActive}"  class="middle_entry" style="padding-left:48px;">
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
            <a href="/feed-item" :class="{feed_entry_active:isAllFeeds}" class="middle_entry">
                <AllArticleIcon :width="18" :height="18"></AllArticleIcon>
                <span>所有文章</span>
            </a>
        </div>
        <div class="rss_right">
            <slot></slot>
        </div>
        <AllPopup></AllPopup>
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

import ReadedIcon from "@/icons/Readed.vue"
import AllFeedItem from "@/icons/AllFeedItem.vue"
import Today from "@/icons/Today.vue"
import AllArticleIcon from "@/icons/AllArticleIcon.vue"

import AllPopup from '~/components/rss/popup/AllPopup.vue'

import UserPopover from '~/components/UserPopover.vue'

//import CreateFolderPopup from '~/components/rss/popup/CreateFolderPopup.vue'

import devicebiz from '@/service/device.js'

import userbiz from '@/service/user.js';

import rssbiz from '@/service/rss/rss.js';
import rssfolder from '@/service/rss/folder.js';

import emitter from "@/service/event.js";

import HelloReadLogo from "@/icons/HelloReadLogo.vue"
import {ArrowRight,ArrowDown,Files,CollectionTag} from "@element-plus/icons-vue"


export default defineNuxtComponent({
    components: {
		RssLogo,SideBar,AddRss,User,RssLogoGray,CreateRssFolder,AllFeed,LaterRead,Recent,AllSubscribeFeed,AllFeedItem,Today,AllPopup,ArrowRight,ArrowDown,AllSubscribeFeedActive,Files,CollectionTag,ReadedIcon,AllArticleIcon,UserPopover,HelloReadLogo
	},

    async asyncData(params) {
        const route = useRoute();
        let currentFeedID = "";
        let currentFolderID = "";
        

        let isReaded = false;
        let isMyFeed = false;
        let isReadLater = false;
        let isTodayPage = false;
        let isAllFeeds = false;
        if (process.server) {
            let url = params.ssrContext.url;
            if(url.indexOf("/my/folder") >= 0){
                currentFolderID = route.params.folder_id;
                if (currentFolderID == undefined){
                    currentFolderID = "";
                }
            }else if(url.indexOf("/my/feed") >= 0){
                currentFeedID = route.params.feed_id;
                if (currentFeedID == undefined){
                    currentFeedID = "";
                }
            }else if(url.indexOf("/my/today") >= 0){
                isTodayPage = true;
            }else if(url.indexOf("/my/all") >= 0){
                isMyFeed = true;
            }else if(url.indexOf("/my/read-later") >= 0){
                isReadLater = true;
            }else if(url.indexOf("/my/already-read") >= 0){
                isReaded = true;
            }else if(url.indexOf("/feed-item") >= 0){
                isAllFeeds = true;
            }
        }
        
        return {
            isMyFeed:isMyFeed,
            isTodayPage:isTodayPage,
            showMiddlePanel:true,

            isReaded:isReaded,
            isReadLater:isReadLater,

            isAllFeeds:isAllFeeds,

            currentExpandTick: 0,

            currentFeedID:currentFeedID,
            currentFolderID:currentFolderID,

            isLogined : false,

            folderList:[],
        }
    },

    mounted(){
        this.isLogined = userbiz.isUserMode();

        this.loadFolderList();

        emitter.on("on_feed_folder_create", (param) => {
			this.onFeedFolderCreate(param);
        });

        emitter.on("on_feed_folder_update", (param) => {
			this.loadFolderList();
        });
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
            emitter.emit("on_popup_createfolder",{});
            //this.$refs.createFolderComp.show();
        },

        onFeedFolderCreate(){
            this.loadFolderList();
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
                    if(feeds[index].icon_url.length == 0){
                        feeds[index].icon_url = "https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/reader/default-rss-icon.svg";
                    }
                    if(this.currentFeedID == feeds[index].feed_id){
                        feeds[index].isActive = true;
                    }
                }
                folder.feeds = feeds;
            }
        },

        onSelectFolder(folder){
            if (Date.now() - this.currentExpandTick > 700) {
                window.location.href = "/my/folder/" + folder.folder_id + "/1" + ".html";    
            }
        },

        onGotoLogin(){
            window.location.href = "/user/login";
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
    border-right: 1px solid #f2f2f2;
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
    /* height:32px;*/
    align-content: center;
    align-items: center;
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
.feed_entry_active > svg {
    color:#009a61;
    fill:#009a61;
}
.feed_entry_active > svg > path {
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
    padding:0px 8px;color:rgb(180,180,180);font-size:12px;font-weight:300;
}
.feed_icon_img{
    width:16px;
    height:16px;
    border-radius: 3px;
}

.user_info_popover{
    width:275px;
}
</style>