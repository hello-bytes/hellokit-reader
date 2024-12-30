<template>
    <el-drawer v-model="showDrawer" :with-header="false" :destroy-on-close="true" :size="drawWidth">
        <div class="close_wrapper" @click="onCloseClick">
            <el-icon :size="30">
                <CloseBold />
            </el-icon>
        </div>
    </el-drawer>
</template>

<script>

import rssbiz from '@/service/rss/rss.js'

import helper from '@/utils/helper.js'
import { CloseBold } from "@element-plus/icons-vue"

import { FolderAdd } from "@element-plus/icons-vue"

import emitter from "@/service/event.js";

import Loading from '~/components/base/Loading.vue';
import FeedItemList1 from "@/components/itemlist/FeedItemList1.vue";

export default defineNuxtComponent({
    components: {
        CloseBold  
    },

    async asyncData() {
        return {
            drawWidth:"70%",
            showDrawer:false,
        }
    },

    mounted(){
        emitter.on("on_popup_general_setting", (param) => {
            // this.feed = param.feed;
            this.show();
        });
    },

    methods:{
        show(){
            this.showDrawer = true;
        },

        onCloseClick(){
            this.showDrawer = false;
        },
    }
})

</script>

<style scoped>

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
