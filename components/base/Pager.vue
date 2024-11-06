<template>
    <div style="text-align: center;display: flex;align-items: center;">
        <a :href='baseURL + "/1.html"' class="page_a_block"><el-icon :size="16"><ArrowLeft /></el-icon></a>
        <span v-show="pageIndex > activeIndex - 5 && pageIndex < activeIndex + 10"  v-for="pageIndex in (parseInt(totalCount / countPerPage) + (totalCount % countPerPage == 0 ? 0 : 1))">
            <a :class="{page_a_block_active: activeIndex == pageIndex}" :href='baseURL + "/" + pageIndex + ".html"' class="page_a_block">{{ pageIndex }}</a>
        </span>
        <a  :href='baseURL + "/" + (parseInt(totalCount / countPerPage) + (totalCount % countPerPage == 0 ? 0 : 1)) + ".html"' class="page_a_block"><el-icon :size="16"><ArrowRight /></el-icon></a>
    </div>
</template>

<script>
import helper from '@/utils/helper';
import loginbiz from '@/utils/loginbiz';
import device from "@/service/device"

import { DArrowLeft,DArrowRight,ArrowLeft,ArrowRight}  from "@element-plus/icons-vue"
export default defineNuxtComponent({
    components: {
        DArrowLeft,DArrowRight,ArrowLeft,ArrowRight,
    },

    props:{
        // 每一页多少条
        countPerPage : {
            type:Number,
            default:30,
        },

        // 一起有多少条
        totalCount : {
            type:Number,
            default:0,
        },

        activeIndex : {
            type:Number,
            default:0,
        },

        baseURL : {
            type:String,
            default:"",
        },
    },

    async asyncData(params) {
        return {
        }
    },

    mounted(){
        //console.log(this.totalCount);
        //console.log(parseInt(this.totalCount / this.countPerPage));
        //console.log(parseInt(this.totalCount / this.countPerPage) + (this.totalCount % this.countPerPage == 0 ? 0 : 1));
    },

})
</script>

<style scoped>
.page_a_block{
    color:#222222;
    font-size:14px;
    padding:5px 5px;
    height:16px;
    min-width:20px;
    height:20px;
    line-height: 20px;
    background-color: #eee;
    margin-right:10px;
    display: inline-block;
    border-radius: 2px;
    font-weight: 400;
}
.page_a_block:hover{
    color:white;
    background-color: #00ba91;
}
.page_a_block_active{
    color:white;
    background-color: #009a61;
}
.page_a_block > i {
    margin-top:2px;
}
</style>