<template>
    <div class="container">
        <h1>关于哈喽工具箱</h1>
        <p style="font-size: 16px;color:black;">哈喽工具箱（https://www.hellokit.com.cn）是哈喽比特 (北京) 网络工作室下专注于提供在线工具的网站。</p>
        <p style="font-size: 16px;color:black;">目前我们已经开发了100多款在线小工具，同时我们收集了，我们认为做得特别优秀的在线工具，为您提供使用的指南。</p>
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
            serviceList: [
                { app:"暗号快传", name : "存储空间", desc : ["存储空间：5GB", "传速速度：无限制","文件大小：无限制"] },
                { app:"万能文件查看", name : "存储空间", desc : ["存储空间：5GB"] },
                { app:"马克党笔记", name : "存储空间", desc : ["笔记数量：不受限制","发布笔记：受限分享"] }
            ],
        }
    },
});

</script>