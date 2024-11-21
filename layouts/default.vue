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
            <el-popover placement="right" :width="290" trigger="click">
                <template #reference>
                    <div class="rss_icon_bg">
                        <User :width="28" :height="28"></User>
                    </div>
                </template>
                <div class="user_info_popover">
                    <div v-if="isLogined" style="display: flex;padding-top:10px;padding-bottom:10px;border-bottom:1px solid #ccc;">
                        <div>
                            <img style="width:28px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/user.svg">
                        </div>
                        <div style="margin-left:10px;">
                            <p class="user_info_name">{{ userName }}</p>
                            <p class="user_info_desc">{{ userAccount }}</p>
                        </div>
                    </div>
                    <div v-if="!isLogined" style="display: flex;padding-top:10px;padding-bottom:10px;border-bottom:1px solid #ccc;">
                        <a href="/user/login" style="font-size:18px;font-weight: bold;">注册 / 登录</a>
                    </div>
                    <div>
                        <a class="user_info_menu" href="/">
                            <el-icon :width="20"><WelcomeIcon /></el-icon>
                            <span>欢迎您</span>
                        </a>
                        <a class="user_info_menu" href="/contact">
                            <el-icon :width="18"><Service /></el-icon>
                            <span>联系我们</span>
                        </a>
                        <a v-if="false" class="user_info_menu" href="/user/logout">
                            <el-icon :width="18"><Share /></el-icon>
                            <span>分享给朋友</span>
                        </a>
                        <a v-if="false" class="user_info_menu" href="/user/logout">
                            <el-icon :width="18"><SwitchButton /></el-icon>
                            <span>数据隐私协议</span>
                        </a>
                        <a class="user_info_menu" href="/about">
                            <el-icon :width="18"><HelloReadLogo /></el-icon>
                            <span>关于哈喽阅读</span>
                        </a>
                        <a v-if="isLogined" class="user_info_menu" href="/user/logout">
                            <el-icon :width="19"><LogoutIcon /></el-icon>
                            <span>登出</span>
                        </a>
                    </div>
                </div>
            </el-popover>
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
                <div style="flex:1"></div>
                <span class="folder_number">{{ totalUnreadFeedItemCount == -1 ? "-" : totalUnreadFeedItemCount }}</span>
            </a>
            <div v-for="(folderItem, index) in folderList" :key="index" >
                <div :class="{middle_entry_active:folderItem.isActive}" class="middle_entry folder_entry"  @click="onSelectFolder(folderItem)">
                    <el-icon v-if="folderItem.expand == false" @click="onToggleFolder(folderItem)" :size="20" style="vertical-align: center;"><ArrowRight></ArrowRight></el-icon>
                    <el-icon v-if="folderItem.expand == true" @click="onToggleFolder(folderItem)" :size="20" style="vertical-align: center;"><ArrowDown></ArrowDown></el-icon>
                    <span>{{ folderItem.folder_name }}</span>
                    <div style="flex:1"></div>
                    <span class="folder_number">{{ folderItem.unReadFeedItemCount == -1 ? "-" : folderItem.unReadFeedItemCount }}</span>
                </div>
                <div v-if="folderItem.expand" v-for="(feed, feedIndex) in folderItem.feeds" :key="feedIndex">
                    <a :href='"/my/feed/" + feed.feed_id'>
                        <div :class="{feed_entry_active:feed.isActive}"  class="middle_entry" style="padding-left:48px;">
                            <AllSubscribeFeed v-if="false" :width="20" :height="20"></AllSubscribeFeed>
                            <AllSubscribeFeedActive v-if="false" :width="20" :height="20"></AllSubscribeFeedActive>
                            <img class="feed_icon_img" :src='feed.icon_url' >
                            <span>{{ feed.name }}</span>
                            <div style="flex:1"></div>
                            <span class="folder_number">{{ feed.unreadFeedItemCount == -1 ? "-" : feed.unreadFeedItemCount }}</span>
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

import AllPopup from '~/components/popup/AllPopup.vue'

import devicebiz from '@/service/device.js'

import userbiz from '@/service/user.js';

import rssbiz from '@/service/rss/rss.js';
import rssfolder from '@/service/rss/folder.js';

import emitter from "@/service/event.js";

import HelloReadLogo from "@/icons/HelloReadLogo.vue"
import {ArrowRight,ArrowDown,Files,CollectionTag} from "@element-plus/icons-vue"

import { SwitchButton,Service,Share } from "@element-plus/icons-vue"

import LogoutIcon from "@/icons/LogoutIcon.vue"
//import HelloReadLogo from "@/icons/HelloReadLogo.vue"
import WelcomeIcon from "@/icons/WelcomeIcon.vue"


export default defineNuxtComponent({
    components: {
		RssLogo,SideBar,AddRss,User,RssLogoGray,CreateRssFolder,AllFeed,LaterRead,Recent,AllSubscribeFeed,AllFeedItem,Today,AllPopup,ArrowRight,ArrowDown,AllSubscribeFeedActive,Files,CollectionTag,ReadedIcon,AllArticleIcon,HelloReadLogo,
        LogoutIcon,WelcomeIcon,SwitchButton,Service,Share
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

            userName:"",
            userAccount:"",

            totalUnreadFeedItemCount:-1,

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

        // 用户信息
        this.userName = userbiz.getNickName();
        let mstObj = helper.getMst();
        if (mstObj != null){
            if (mstObj.p != undefined && mstObj.p.length > 0){
                this.userAccount = mstObj.p;
            }else if (mstObj.e != undefined && mstObj.e.length > 0){
                this.userAccount = mstObj.e;
            }else{
                this.userAccount = "微信用户";
            }
        }

        // 添加阅读次数
        rssbiz.addViewNumber();
    },

    methods : {
        async loadFolderList(){
            let expandIndex = -1;
            let responseData = await rssfolder.queryFolderList(false, devicebiz.getDeviceID(),100,0);
            if (helper.isResultOk(responseData)){
                let folderList = responseData.data.page;
                for(let index in folderList){
                    folderList[index].expand = false;
                    folderList[index].isActive = false;
                    if (this.currentFolderID == folderList[index].folder_id){
                        folderList[index].isActive = true;
                        expandIndex = index;
                    }
                    
                    folderList[index].feedCount = -1;
                    folderList[index].unReadFeedItemCount = -1;
                    folderList[index].feeds = [];
                }
                this.folderList = folderList;
            }
            
            await this.loadFolderFeedCount();
            await this.loadAllFolderStatics();
            await this.checkFeedFolder();

            if (expandIndex >= 0){
                this.expandFolder(this.folderList[expandIndex]);
            }
        },

        async loadFolderFeedCount(){
            let folderIDs = [];
            for(let index in this.folderList){
                let folder = this.folderList[index];
                folderIDs.push(folder.folder_id);
            }

            let responseData = await rssfolder.getFolderCount(false, devicebiz.getDeviceID(), folderIDs);
            if (helper.isResultOk(responseData)){
                let staticsFolderList = responseData.data;
                for (let index in this.folderList){
                    for(let i in staticsFolderList){
                        if (staticsFolderList[i].folder_id == this.folderList[index].folder_id){
                            this.folderList[index].feedCount = staticsFolderList[i].feed_count;
                            this.folderList[index].unReadFeedItemCount = staticsFolderList[i].unread_feed_item_count;
                            break;
                        }
                    }
                }
            }
        },

        async loadAllFolderStatics(){
            let responseData = await rssfolder.getUserAllFolderStatics(devicebiz.getDeviceID());
            if (helper.isResultOk(responseData)){
                this.totalUnreadFeedItemCount = responseData.data.unread_feed_item_count;
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
                    feeds[index].unreadFeedItemCount = -1;
                    if(feeds[index].icon_url.length == 0){
                        feeds[index].icon_url = "https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/reader/default-rss-icon.svg";
                    }
                    if(this.currentFeedID == feeds[index].feed_id){
                        feeds[index].isActive = true;
                    }
                }
                folder.feeds = feeds;
            }
            this.loadUnreadCountByFeedIds(folder);
        },

        async loadUnreadCountByFeedIds(folder){
            let feedIDs = [];
            for (let index in folder.feeds){
                feedIDs.push(folder.feeds[index].feed_id);
            }

            let responseData = await rssfolder.getUserFeedStatics(devicebiz.getDeviceID(),feedIDs)
            if(helper.isResultOk(responseData)){
                for(let i in responseData.data){
                    for(let j in folder.feeds){
                        if(folder.feeds[j].feed_id == responseData.data[i].feed_id){
                            folder.feeds[j].unreadFeedItemCount = responseData.data[i].unread_feed_item_count;
                            break;
                        }
                    }
                }
            }
        },

        onSelectFolder(folder){
            if (Date.now() - this.currentExpandTick > 700) {
                window.location.href = "/my/folder/" + folder.folder_id + ".html";    
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

/* user info css */
.user_info_popover{
    width:275px;
}
.user_info_menu{
    font-size: 14px;
    padding:8px;
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    color: #333333;
}
.user_info_menu:hover{
    color:#009a61;
    background-color: #eee;
}
.user_info_menu > span{
    padding-left:8px;
}
.user_info_menu > i {
    color: #333333;
    fill:#333333;
}
.user_info_menu > i > svg {
    color: #333333;
    fill:#333333;
}
.user_info_menu > i > svg > path {
    color: #333333;
    fill:#333333;
}
.user_info_name{
    max-width: 210px;
    overflow: hidden;
    margin-bottom:0px;
    margin-top:0px;
    text-overflow: ellipsis;
    text-transform: capitalize;
    white-space: nowrap;
    color:rgb(51, 51, 51);
    font-weight: 700;
    font-size:16px;
}
.user_info_desc{
    border-radius: 2px;
    color: rgb(158, 158, 158);
    font-size: 14px;
    margin-right: 10px;
    text-transform: uppercase;
    margin-bottom:0px;
    margin-top:0px;
}
</style>