<template>
    <div :class="{ pc_default_container_size: !isMobile, mobile_tr_container_alone: isMobile }" style="margin-top:20px;">
            <el-card>
                <template #header>相关工具</template>
                <p v-if="false">PDF文件加密工具用于对未设置密码的PDF文件进行加密，如果您需要修改密码或是其它操作，可以使用以下在线工具。</p>
                <el-row>
                <el-col :span="6" v-for="(item, index) in toolList" :key="index" style="padding:8px;">
                    <div>
                        <a :href="getToolURL(item)" >
                            <div class="appitem">
                                <img class="appicon" :src=item.thumbnail_url>
                                <div class="appname">{{ item.title }}</div>
                                <div class="appdesc">{{ item.summary }}</div>
                            </div>
                        </a>
                    </div>
                </el-col>
            </el-row>
            </el-card>
        </div>
</template>

<script>

import helper from '@/utils/helper.js'
import browser from '@/service/browser';

export default defineNuxtComponent({
    props:{
        toolList:{
            type:Array,
            default:[],
        }
    },

    async asyncData() {
        return {
            //toolList:[ {sourceurl:"/app/pdf/update-pwd",title:"修改PDF打开密码",summary:"无",thumbnail_url:""},{sourceurl:"/app/pdf/update-pwd",title:"修改PDF所有者密码",summary:"无",thumbnail_url:""} ],
            isMobile: browser.isMobile(),
        }
    },

    methods:{
        getToolURL(item){
            if (item.sourceurl.length == 0){
                return "/" + item.urlpath;
            } 
            return item.sourceurl;
        },
    }
})


</script>

