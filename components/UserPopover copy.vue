<template>
    <div>
        <div style="display: flex;padding-top:10px;padding-bottom:10px;border-bottom:1px solid #ccc;">
            <div>
                <img style="width:28px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/user.svg">
            </div>
            <div style="margin-left:10px;">
                <p class="user_info_name">{{ userName }}</p>
                <p class="user_info_desc">手机号/Email/微信用户</p>
            </div>
        </div>
        <div>
            <a class="user_info_menu" href="/contact">
                <el-icon :width="18"><Service /></el-icon>
                <span>联系我们</span>
            </a>
            <a v-if="false" class="user_info_menu" href="/user/logout">
                <el-icon :width="18"><Share /></el-icon>
                <span>分享给朋友</span>
            </a>
            <a class="user_info_menu" href="/">
                <el-icon :width="20"><WelcomeIcon /></el-icon>
                <span>欢迎页</span>
            </a>
            <a v-if="false" class="user_info_menu" href="/user/logout">
                <el-icon :width="18"><SwitchButton /></el-icon>
                <span>数据隐私协议</span>
            </a>
            <a class="user_info_menu" href="/about">
                <el-icon :width="18"><HelloReadLogo /></el-icon>
                <span>关于哈喽阅读</span>
            </a>
            <a class="user_info_menu" href="/user/logout">
                <el-icon :width="19"><LogoutIcon /></el-icon>
                <span>登出</span>
            </a>
        </div>
    </div>
</template>

<script>

import { SwitchButton,Service,Share } from "@element-plus/icons-vue"

import LogoutIcon from "@/icons/LogoutIcon.vue"
import HelloReadLogo from "@/icons/HelloReadLogo.vue"
import WelcomeIcon from "@/icons/WelcomeIcon.vue"

import userbiz from '@/service/user.js';

export default defineNuxtComponent({

   /* props:{
        userName:{
            type : String,
            default : "", // 总条数
        },
    },*/

    components: {
		HelloReadLogo,SwitchButton,LogoutIcon,Service,Share,WelcomeIcon
	},
    data() {
        return {

        }
    },
    async asyncData() {
        return {
            userName: "a"
            // userTypeDesc : "",
        }
    },

    mounted(){
        console.log(this.userName);
        // /console.log("===",userbiz.getNickName());
        this.userName = userbiz.getNickName();
    }

});

</script>

<style>
.user_info_name{
    max-width: 210px;
    overflow: hidden;
    margin-bottom:0px;
    margin-top:0px;
    text-overflow: ellipsis;
    text-transform: capitalize;
    white-space: nowrap;
    color:rgb(51, 51, 51);
    font-weight: 700;
    font-size:16px;
}

.user_info_desc{
    border-radius: 2px;
    color: rgb(158, 158, 158);
    font-size: 10px;
    margin-right: 10px;
    text-transform: uppercase;
    margin-bottom:0px;
    margin-top:0px;
}

.user_info_menu{
    font-size: 14px;
    padding:8px;
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    color: #333333;
}
.user_info_menu:hover{
    color:#009a61;
    background-color: #eee;
}

.user_info_menu > span{
    padding-left:8px;
}

.user_info_menu > i {
    color: #333333;
    fill:#333333;
}

.user_info_menu > i > svg {
    color: #333333;
    fill:#333333;
}
.user_info_menu > i > svg > path {
    color: #333333;
    fill:#333333;
}

</style>