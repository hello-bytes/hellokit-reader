<template>
    <div style="max-width:800px;margin:0px auto;">
        <div style="height:30px;"></div>
        <h1 style="color: #009a61;font-size:48px;margin-bottom:0px;">哈喽阅读</h1>
        <p style="margin-top:0px;font-size:24px;">每一次阅读，都成为知识的深度探索之旅。</p>
        <el-divider></el-divider>
        <p class="about_p">哈喽阅读（https://reader.hellokit.com.cn），英文名Hello Reader期望成为您基于订阅的阅读首选工具。</p>
        <p class="about_p">不同于头条，抖音，快手等主流应用的被动“投喂”方式。在哈喽阅读，我们相信精品与精读的力量。</p>
        <p class="about_p">“唯有日日翻卷，方能洞见常新。”，我们期望每一位用户，都能在哈喽阅读洞见常新。</p>
        <el-row>
            <el-col :span="12" class="card_left">
                <el-card>
                    <template #header>
                        <div class="card-header">
                            <span class="about_p_title">内容繁多，订阅随心</span>
                        </div>
                    </template>
                    <div style="height:70px;">
                        <p style="margin-top:0px;">我们计划支持大约500个精品内容源，只需要简单挑选，即可每日获取精品内容。</p>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12" class="card_right">
                <el-card>
                    <template #header>
                        <div class="card-header">
                            <span class="about_p_title">隐姓埋名，畅享软件</span>
                        </div>
                    </template>
                    <div style="height:70px;">
                        <p style="margin-top:0px;">真正的支持开箱即用。我们推荐注册，以确保您的数据不因本地环境的变化而丢失。但也支持匿名使用。</p>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12" class="card_left">
                <el-card>
                    <template #header>
                        <div class="card-header">
                            <span class="about_p_title">每日推送，日日翻卷</span>
                        </div>
                    </template>
                    <div style="height:70px;">
                        <p style="margin-top:0px;">根据您的订阅，整理出每日必读，期望您日日翻卷、洞见常新。</p>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12" class="card_right">
                <el-card>
                    <template #header>
                        <div class="card-header">
                            <span class="about_p_title">稍后阅读、篇篇必读</span>
                        </div>
                    </template>
                    <div style="height:70px;">
                        <p style="margin-top:0px;">我们理解您的忙碌又宝贵的时间。时间不够时，只需加入“稍后阅读”即可来日再会。</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import browser from '@/service/browser';

import Clipboard from 'vue-clipboard3';
import { ElMessage } from 'element-plus';

import device from "@/service/device"

export default defineNuxtComponent({
    async asyncData() {
        return {
            
        }
    },
});

</script>

<style scoped>
.about_p{
    font-size: 16px;color:black;line-height: 28px;
}
.about_p_title{
    font-weight: bold;font-size:20px;
}
.card_left{
    padding-right:8px;margin-top:20px;
}
.card_right{
    padding-left:8px;margin-top:20px;
}
</style>