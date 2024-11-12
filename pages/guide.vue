<template>
    <div>
        <div style="height:80px;"></div>
        <div style="text-align: center;">
            <h1 class="brand_title">哈喽·阅读</h1>
            <p style="font-weight: 500;font-size: 36px;text-align: center;margin-top:0px;">每一次阅读，都成为知识的深度探索之旅。</p>
            <div>
                <a @click="onGotoReader" class="button_link button_link_active">无需登录，直接使用</a>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <a class="button_link" href="/feed-item">先逛一下</a>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <a class="button_link" href="/user/login?src=https://reader.hellokit.com/my/today">登录账号，开启阅读</a>
            </div>
            <span style="margin-top:15px;display:inline-block;">哈喽阅读基于浏览器指纹自动生成您的专属账号，不用登陆即可使用绝大部分功能。</span>
        </div>
        <div style="height: 35px;"></div>
        <el-divider></el-divider>
        <div style="background-color: white;">
            <div style="padding:35px 0px 60px 0px;text-align: center;">
                <img style="width:1024px" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/hellokit.reader.ui.2.png" >
            </div>
        </div>
        <div style="background-color: #eeeeee;">
            <div style="padding:60px 0px;max-width:1024px;margin:0px auto;">
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
        </div>
        <div style="background-color: white;">
            <div style="padding:30px 0px 30px 0px;text-align: center;">
                <span>Copyright© 2013-2023 All Rights Reserved 京ICP备2023019179号-7 京公网安备 11010502044969号</span>
            </div>
        </div>
    </div>
</template>

<script>

import helper from "@/utils/helper"

export default defineNuxtComponent({
    async asyncData() {
        return {
        }
    },

    mounted() {
    },

    methods: {
        onGotoReader(){
            helper.saveKV("hellokit.reader.state","inited");
            setTimeout(()=>{
                window.location.href = "/my/today";
            },200);
        }
    }

});

definePageMeta({
  layout: 'blank'
})
</script>

<style scoped>
.brand_title{
    text-align: center;
    color: #009a61;
    font-size:80px;
    margin-bottom:0px;
}

.button_link{
    display: inline-block;
    text-align: center;
    padding:15px 25px;
    font-size: 20px;
    border:1px solid #009a61;
    border-radius: 5px;
}
.button_link_active{
    background-color:#009a61;
    color:white;
}

.card_left{
    padding-right:8px;margin-top:20px;
}
.card_right{
    padding-left:8px;margin-top:20px;
}
</style>