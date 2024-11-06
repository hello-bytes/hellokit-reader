<template>
    <div style="display:flex;">
        <span class="folder_header_title">{{ folder == null ? "-" : folder.folder_name }}</span>
        <div style="flex:1"></div>
        <div style="margin-top:15px;">
            <div class="svg_icon_container"><el-icon :size="28"><Check /></el-icon></div>
            <div class="svg_icon_container"><el-icon :size="28"><Refresh /></el-icon></div>
        </div>
    </div>
</template>

<script>
//<el-icon><Check /></el-icon>
import helper from '@/utils/helper.js'
import { Refresh,Check,Select } from "@element-plus/icons-vue"

export default defineNuxtComponent({
    components: {
        Refresh,Check,Select
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
    }
})


</script>

<style scoped>
.folder_header_title{
    font-size:34px;
    font-weight:700;
    line-height:44px;
    overflow-wrap:break-word;
    text-rendering:optimizelegibility;
}
</style>