<template>
    <div style="display:flex;">
        <div style="max-width:800px;margin:0px auto;">
            <div style="text-align: center;margin-top:10px;">
                <img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/all_done.svg" >
                <p style="margin-bottom:0px;font-size:30px;">搞定！</p>
                <p style="margin-top:0px;margin-bottom:20px;">太棒了，您已经读完订阅的所有文章了。</p>
                <el-button @click="viewAllFeedItem" type="primary" size=large><el-icon :size="18" style="color:#fff"><Files></Files></el-icon>&nbsp;浏览所有文章</el-button>
            </div>
        </div>
    </div>
</template>

<script>

import { Refresh,Files } from "@element-plus/icons-vue"
import EmptyFolder from "@/icons/EmptyFolder.vue"
import AddRssWhite from "@/icons/AddRssWhite.vue"


export default defineNuxtComponent({
    components: {
        Refresh,EmptyFolder,AddRssWhite,Files
    },

    props:{
        folder:{
            type:Object,
            default:null,
        },
    },

    async asyncData() {
        return {
        }
    },

    methods:{
        viewAllFeedItem(){
            this.$emit('viewAllFeedItem', {});
        }
    }
})


</script>

<style scoped>

</style>