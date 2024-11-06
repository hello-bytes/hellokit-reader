<template>
    <el-drawer v-model="showDrawer" :with-header="false" :destroy-on-close="true" :size="drawWidth">
        <div class="close_wrapper" @click="onCloseClick">
            <el-icon :size="30">
                <CloseBold />
            </el-icon>
        </div>
        <div style="max-width:800px;margin:0px auto;">
            <p class="feed_item_title">{{ feedItem.title }}</p>
            <div>
                <a :href='feed.url' class="feed_item_time">{{ feed.name }}</a>
                <span>&nbsp;&nbsp;</span>
                <span class="feed_item_time">{{ formatTime(feedItem.publish_time) }}</span>
                <span>&nbsp;&nbsp;</span>
                <span class="feed_item_time">{{ feed.read_count }}次阅读</span>
            </div>
            
            <div class="feed_content_container">
                <div v-if="feedItem.content.length > 0" v-html="feedItem.content"></div>
                <div v-else v-html="feedItem.desc" ></div>
            </div>
        </div>
    </el-drawer>
</template>

<script>

import helper from '@/utils/helper.js'
import browser from '@/service/browser';
import { CloseBold } from "@element-plus/icons-vue"

export default defineNuxtComponent({
    props:{
        feed : {
            type:Object,
            default:null,
        },

        feedItem : {
            type:Object,
            default:null,
        },
    },

    components: {
        CloseBold,
    },

    async asyncData() {
        return {
            drawWidth:"70%",
            showDrawer:false,
            isMobile: browser.isMobile(),
        }
    },

    methods:{
        show(){
            this.showDrawer = true;
        },

        onCloseClick(){
            this.showDrawer = false;
        },

        formatTime(time){
            return helper.getHumanTime(time);
        }
    }
})

</script>

<style scoped>

.feed_item_title{
    color:rgb(27, 27, 31);
    font-size:28px;
    font-weight:700;
    margin-top:5px;
    margin-bottom:5px;
}
.feed_item_time{
    margin-top:0px;
    margin-bottom:0px;
    font-size:12px;
    font-weight:400;
    color:rgb(132, 134, 143);
}
.close_wrapper{
    display: inline-block;
    padding-top:5px;
    padding-left:5px;
    padding-right:5px;
    border-radius: 5px;
}
.close_wrapper:hover{
    background-color: #eee;
}

</style>

<style>
.feed_content_container{
    font-size: 16px;
    padding:10px;
}
.feed_content_container img{
    max-width: 100%;
    height:auto;
}
</style>

