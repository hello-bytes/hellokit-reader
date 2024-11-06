<template>
    <div style="margin:15px;padding:20px;background-color: white;border-radius: 8px;">
        <div>
            <div class="feed_item_container_feedname" style="display:flex" v-if="feed != null">
                <img :src='feed.icon_url' >
                <span>{{ feed.name }}</span>
            </div>
            <p class="feed_item_container_title">{{ feedItem.title }}</p>
            <p class="feed_item_container_time">{{ formatTime(feedItem.publish_time) }}</p>
        </div>
        <div style="padding:10px;">
            <div v-html="feedItem.desc"></div>
        </div>
    </div>
</template>

<script>

import helper from '@/utils/helper.js'
import browser from '@/service/browser';

export default defineNuxtComponent({
    props:{
        feed:{
            type:Object,
            default:[],
        },
        feedItem:{
            type:Object,
            default:[],
        }
    },

    async asyncData() {
        return {
            isMobile: browser.isMobile(),
        }
    },

    methods:{
        formatTime(time){
            return helper.getHumanTime(time/1000);
        }
    }
})


</script>

<style scoped>
.feed_item_container_feedname{

}
.feed_item_container_title{
    color:rgb(27, 27, 31);
    font-size:28px;
    font-weight:700;
    margin-top:5px;
    margin-bottom:5px;
}
.feed_item_container_time{
    margin-top:0px;
    margin-bottom:0px;
    font-size:12px;
    font-weight:400;
    color:rgb(132, 134, 143);
}
</style>