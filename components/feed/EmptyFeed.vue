<template>
    <div style="display:flex;">
        <div style="max-width:800px;margin:0px auto;">
            <div style="text-align: center;margin-top:100px;">
                <el-icon :size="100"><EmptyFolder ></EmptyFolder></el-icon>
                <p style="margin-bottom:0px;font-size:30px;">尚无更新</p>
                <p style="margin-top:0px;margin-bottom:20px;">这个内容源还没有发布任何文章，请您静待佳音。</p>
                <el-button @click="addFeedClick()" type="primary" size=large><el-icon :size="18" style="color:#fff"><AddRssWhite></AddRssWhite></el-icon>&nbsp;订阅其它内容源</el-button>
            </div>
        </div>
    </div>
</template>

<script>

import { Refresh } from "@element-plus/icons-vue"
import EmptyFolder from "@/icons/EmptyFolder.vue"
import AddRssWhite from "@/icons/AddRssWhite.vue"

export default defineNuxtComponent({
    components: {
        Refresh,EmptyFolder,AddRssWhite
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
        addFeedClick(){
            window.location.href = "/feed/website/ft/1.html";
        }
    }
})


</script>

<style scoped>

</style>