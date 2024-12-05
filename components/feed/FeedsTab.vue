<template>
    <div class="feeds_tab_container">
        <a href="/feed/website/ft/1.html"><div  :class="{ feeds_tab_item: activeTab != 'website',feeds_tab_item_active:activeTab == 'website'}"><el-icon :width="18"><Website /></el-icon><span>网站</span></div></a>
        <a href="/feed/wechat/ft/1.html"><div  :class="{ feeds_tab_item: activeTab != 'wechat',feeds_tab_item_active:activeTab == 'wechat'}"><el-icon :width="18"><WechatPublicAccount /></el-icon><span>微信公众号</span></div></a>
    </div>
</template>

<script>

import { Refresh } from "@element-plus/icons-vue"
import EmptyFolder from "@/icons/EmptyFolder.vue"
import AddRssWhite from "@/icons/AddRssWhite.vue"

import Website from "@/icons/Website.vue"
import WechatPublicAccount from "@/icons/WechatPublicAccount.vue"

export default defineNuxtComponent({
    components: {
        Refresh,EmptyFolder,AddRssWhite,Website,WechatPublicAccount
    },

    props:{
        activeTab:{
            type:String,
            default:"website",
        },
    },

    async asyncData() {
        return {
        }
    },

    methods:{
        addFeedClick(){
            window.location.href = "/feed/page/1.html";
        }
    }
})


</script>

<style scoped>
.feeds_tab_container{
    border-bottom:1px solid #eee;
    display: flex;
    /* padding-bottom:10px;   */
}

.feeds_tab_item{
    text-align: center;
    display: flex;
    align-items: center;
    font-size:16px;
    font-weight: 500;
    margin-right:40px;
    cursor:pointer;
    line-height: 40px;
    color:#9e9e9e;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
}

.feeds_tab_item:hover{
    /* padding-bottom: 0; */
    color:#646464;
    /*border-bottom: 2px solid rgba(0, 0, 0, 1);*/
    border-bottom: 2px solid #646464;
}

.feeds_tab_item > span{
    margin-left:10px;
}

.feeds_tab_item_active > i > svg > path {
    color: #9e9e9e;
    fill: #9e9e9e!important;
}

.feeds_tab_item_active{
    color:#2bb24c;
}

.feeds_tab_item_active{
    text-align: center;
    display: flex;
    align-items: center;
    font-size:16px;
    font-weight: 500;
    margin-right:40px;
    cursor:pointer;
    line-height: 40px;
    color:#2bb24c;
    border-bottom: 2px solid #2bb24c;
}

.feeds_tab_item_active > span{
    margin-left:10px;
}

.feeds_tab_item_active > i {
    color: #2bb24c;
    fill:#2bb24c;
}
.feeds_tab_item_active > i > svg {
    color: #2bb24c;
    fill:#2bb24c;
}
.feeds_tab_item_active > i > svg > path {
    color: #2bb24c;
    fill: #2bb24c!important;
}
</style>