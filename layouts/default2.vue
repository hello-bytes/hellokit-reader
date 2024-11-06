<template>
    <div style="">
        <div v-if="!isMobile">
            <div style="display:flex;flex-basis:auto;flex-direction:row;flex-shrink:1;">
                <div class="left-nav" style="z-index:100;border-right:1px solid #ccc;background-color: white;">
                    <a href="https://www.hellokit.com.cn">
                        <img style="vertical-align:middle;width:200px;margin-left:20px;margin-top:20px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/hellokit-brand.png">
                    </a>
                    <div style="height:1px;background-color: #ccc;margin-top:20px;margin-bottom:20px;"></div>
                    <ul class="category-container">
                        <li class="category-entry-wrapper"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isAllTool }" href="/app/pc/all" data-actived="true"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-20/f3728865d90e4a16a55b0c74766348db"><span>全部</span></a></li>
                        <li class="category-entry-wrapper"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isDevTool }" href="/app/dev/all" data-actived="true"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-20/16c1d59654f440e58b0e945a576ca148"><span>开发者工具</span></a></li>
                        <li class="category-entry-wrapper"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isDataTool }" href="/app/data/all" data-actived="true"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-20/7069852923d94224909274d22e79aec3"><span>数据查询</span></a></li>
                        <li class="category-entry-wrapper"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isGameTool }" href="/app/game/all" data-actived="true"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-20/2a126700ba08477e872e0b1f3f6cef5a"><span>在线游戏</span></a></li>
                    </ul>
                    <div style="position: absolute;right:5px;bottom:5px;" @click="onFoldLeftNav"><el-icon><Fold /></el-icon></div>
                </div>
                <div class="left-nav-placeholder"></div>
                <div style="z-index:10;background-color: #f1f5f9;min-height:100vh;flex-grow: 1;display: flex;flex-direction: column;">
                    <div style="min-height:100vh;display: flex;flex-direction: column;width:1140px;margin:0px auto;">
                        <div class="top-content">
                            <div class="search-wrapper">
                                <div class="search-container">
                                    <div class="search-area">
                                        <img class="search-icon" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-18/a635c37656fa4390a05f4fe0d291c870" alt="搜索按钮">
                                        <input class="search-input" type="text" autocomplete="off">
                                    </div>
                                </div>
                            </div>
                            <div class="top-right-wrapper">
                                <a v-if="false" style="margin:0px 5px 0px 5px;" href="/user/login"><el-button type="primary">注册/登录</el-button></a>
                                <el-popover v-if="userInfo == null" placement="bottom" :width="330" trigger="hover" @show="onShowNotLoginTip">
                                    <template #reference>
                                        <img style="width:40px;height:40px;margin:0px 5px 0px 5px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-18/62bb53b925de4dc8a3ba529a86afcd06">
                                    </template>
                                    <div>
                                        <div style="display:flex;align-items: center;">
                                            <img style="width:30px;height:30px;margin:0px 15px 0px 5px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-18/62bb53b925de4dc8a3ba529a86afcd06">
                                            <a style="font-size:16px;font-weight: bold;color:#222;text-decoration: none;" href="/user/login">立即登录，获得更多功能</a>
                                        </div>
                                        <div style="border-top:1px solid #ccc;margin-top:10px;">
                                            <ul class="notlogin_list">
                                                <li>
                                                    <a href="/user/device">当前设备ID：{{ deviceID }}</a>
                                                </li>
                                                <li>
                                                    <a href="/user/service">查看我的权益</a>
                                                </li>
                                                <li>
                                                    <a href="/about">关于我们</a>
                                                </li>
                                            </ul>
                                            
                                            <p v-if="false">数据与上述设备ID关联，过期自动删除。</p>
                                            
                                        </div>
                                    </div>
                                </el-popover>
                                <el-popover v-if="userInfo != null" placement="bottom" :width="330" trigger="hover" @show="onShowNotLoginTip">
                                    <template #reference>
                                        <img style="width:40px;height:40px;margin:0px 5px 0px 5px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-18/62bb53b925de4dc8a3ba529a86afcd06">
                                    </template>
                                    <div>
                                        <div style="display:flex;align-items: center;">
                                            <img style="width:30px;height:30px;margin:0px 15px 0px 5px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-18/62bb53b925de4dc8a3ba529a86afcd06">
                                            <a style="font-size:16px;font-weight: bold;color:#222;text-decoration: none;" href="/user/my/info">{{ userInfo.name }}</a>
                                        </div>
                                        <div style="border-top:1px solid #ccc;margin-top:10px;">
                                            <ul class="notlogin_list">
                                                <li>
                                                    <a href="/anhao/send/text">我发送的暗号</a>
                                                </li>
                                                <li>
                                                    <a href="/anhao/recv/text">我接收的暗号</a>
                                                </li>
                                                <li style="border-top:1px solid #eee;">
                                                    <a href="/anhao/recv/text">我打开的文件</a>
                                                </li>
                                                <li>
                                                    <a href="/anhao/recv/text">我的备忘录</a>
                                                </li>
                                                <li style="border-top:1px solid #eee;">
                                                    <a href="/about">关于我们</a>
                                                </li>
                                                <li style="border-top:1px solid #eee;">
                                                    <a href="/user/service">查看我的权益</a>
                                                </li>
                                                <li>
                                                    <a href="/user/logout">退出登录</a>
                                                </li>
                                            </ul>
                                            
                                            <p v-if="false">数据与上述设备ID关联，过期自动删除。</p>
                                            
                                        </div>
                                    </div>
                                </el-popover>
                            </div>
                        </div>
                        <slot></slot>

                        <div style="flex:1;"></div>
                        <section id="footer" class="footer_white" style="margin-top:50px;">
                            <div class="container wow fadeInDown">
                                <div class="col-sm-12 text-center">
                                    <p style="font-weight: bold;">哈喽工具箱致力于为您提供最好用的全平台软件</p>
                                    <p v-if=false class="text-white">
                                        <span>关于哈喽工具箱 · </span>
                                        <a style="color:white;" href="/updatelog">更新日志</a>
                                    </p>
                                    <p class="text-white">Copyright© 2013-2023  All Rights Reserved <a style="color:black;" href="https://beian.miit.gov.cn">京ICP备2023019179号-7</a>&nbsp;<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502044969" style="color:#fff;"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn1/codingsky/images/ga.jpg" style="width:15px;">京公网安备 11010502044969号</a></p>			
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isMobile">
            <div style="background-color: #eee;">
                <div style="margin-bottom:10px;background-color: white;padding-top:20px;padding-left:20px;">
                    <div style="display:flex;flex-direction:row;align-items: center;padding-bottom:15px;">
                        <el-icon @click="showCategoryClick" :size="30" style="width:30px; height:30px;"><Expand /></el-icon>
                        <img style="margin-left:20px;width:40px;height:40px;" src="https://hellokit.com.cn/favicon.ico">
                        <div style="margin-left:10px;padding-bottom:0px;">
                            <h3 style="margin-top:0px;margin-bottom:0px;">哈喽工具箱</h3>
                            <p style="margin-top:0px;margin-bottom:0px;font-size:14px;">做好用的工具软件</p>
                        </div>
                    </div>
                    
                </div>

                <div style="height:0px;"></div>
                
                <slot></slot>

                <div style="flex:1;"></div>
                <section id="footer" style="background-color: white; margin-top:10px;padding:20px 15px 10px 15px;">
                    <div>
                        <div class="col-sm-12 text-center">
                            <p style="font-weight: bold;margin-bottom:5px;">哈喽工具箱致力于为您提供最好用的全平台软件</p>
                            <p style="margin-top:0px;" class="text-white">Copyright© 2013-2023  All Rights Reserved <a style="color:black;" href="https://beian.miit.gov.cn">京ICP备2023019179号-7</a>&nbsp;<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502044969" style="color:#fff;"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn1/codingsky/images/ga.jpg" style="width:15px;">京公网安备 11010502044969号</a></p>			
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <el-drawer v-model="showAppCategory" size="80%" :with-header="false" direction="ltr">
            <div style="display:flex;flex-direction:row;align-items: center;padding-bottom:15px;">
                <img style="margin-left:0px;width:40px;height:40px;" src="https://hellokit.com.cn/favicon.ico">
                <div style="margin-left:10px;padding-bottom:0px;">
                    <h3 style="margin-top:0px;margin-bottom:0px;">哈喽工具箱</h3>
                    <p style="margin-top:0px;margin-bottom:0px;font-size:14px;">做好用的工具软件</p>
                </div>
            </div>
            <div style="padding-top:10px;">
                <ul class="category-container">
                    <li class="category-entry-wrapper" style="margin:0px;"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isAllTool }" href="/app/pc/all" data-actived="true"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-20/f3728865d90e4a16a55b0c74766348db"><span>全部</span></a></li>
                    <li class="category-entry-wrapper" style="margin:0px;"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isDevTool }" href="/app/dev/all" data-actived="true"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-20/16c1d59654f440e58b0e945a576ca148"><span>开发者工具</span></a></li>
                    <li class="category-entry-wrapper" style="margin:0px;"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isDataTool }" href="/app/data/all" data-actived="true"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-20/7069852923d94224909274d22e79aec3"><span>数据查询</span></a></li>
                    <li class="category-entry-wrapper" style="margin:0px;"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isGameTool }" href="/app/game/all" data-actived="true"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn/img/2024-08-20/2a126700ba08477e872e0b1f3f6cef5a"><span>在线游戏</span></a></li>
                </ul>
            </div>
        </el-drawer>
    </div>
    
</template>

<script>
import helper from '@/utils/helper';
import loginbiz from '@/utils/loginbiz';
import device from "@/service/device"
import browser  from '@/service/browser';
import {Fold,Menu,Expand} from "@element-plus/icons-vue"
export default defineNuxtComponent({
    components: {
        Fold,Menu,Expand
    },
    

    async asyncData(params) {
        let isDevTool = false;
        let isDataTool = false;
        let isAllTool = false;
        let isGameTool = false;
        if (process.server) {
            let url = params.ssrContext.url;
            if (url.indexOf("/app/data") >= 0){
                isDataTool = true;
            } else if (url.indexOf("/app/game") >= 0){
                isGameTool = true;
            } else if (url.indexOf("/app/dev") >= 0){
                isDevTool = true;
            }else{
                isAllTool = true;
            }
        }

        return  {
            isDevTool,
            isDataTool,
            isAllTool,
            isGameTool,
            deviceID: "",
            userInfo : null,
            isMobile:browser.isMobile(),
            showAppCategory:false,
        }
    },

    data() {
		return {
		}
	},

    mounted(){
        this.loadUserInfo();
        this.deviceID = device.getDeviceID();
    },

    methods : {
        async loadUserInfo(){
            try{
                let userObjectResponse = await loginbiz.getMyInfoOnline();
                if(!helper.isResultOk(userObjectResponse)){
                    return;
                }

                /*{
                    "uid": "63b2029481964ebebd4aab490de9bc8d",
                    "uid32": 564237604,
                    "email": "",
                    "mobile": "18513582628",
                    "name": "Hello",
                    "wx_open_id": "",
                    "avatar_url": ""
                }*/
                this.userInfo  = userObjectResponse.data;
            }catch(e){
                console.error(e);
            }
        },

        onFoldLeftNav(){

        },

        onShowNotLoginTip(){
            this.deviceID = device.getDeviceID();
        },

        showCategoryClick(){
            this.showAppCategory = true;  
        } 
    }

    
})

</script>