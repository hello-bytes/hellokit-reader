<template>
    <div style="background-color: white;" :class="{ pc_tr_container: !isMobile,pc_default_inner:!isMobile, pc_default_container:!isMobile, mobile_tr_container: isMobile }">
        <div class="tool_title_wrapper">
            <h1>用户权益</h1>
        </div>
        <el-table :data="serviceList" border>
            <el-table-column prop="app" label="应用" width="220" >
                <template #default="scope">
                    <p style="font-size:18px;font-weight: bold;">{{ scope.row.app }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="desc" label="当前权益" >
                <template #default="scope">
                    <ul>
                        <li v-for="item in scope.row.desc" :key="item">
                            <p style="font-size:16px;">{{ item }}</p>
                        </li>
                    </ul>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import browser from '@/service/browser';

import Clipboard from 'vue-clipboard3';
import { ElMessage } from 'element-plus';

import device from "@/service/device"


//import highlightjs from "@highlightjs/vue-plugin"

export default defineNuxtComponent({
    async asyncData() {
        return {
            isMobile: browser.isMobile(),
            serviceList: [
                { app:"暗号快传", name : "存储空间", desc : ["存储空间：5GB", "传速速度：无限制","文件大小：无限制"] },
                { app:"万能文件查看", name : "存储空间", desc : ["存储空间：5GB"] },
                { app:"马克党笔记", name : "存储空间", desc : ["笔记数量：不受限制","发布笔记：受限分享"] }
            ],
        }
    },
});

</script>