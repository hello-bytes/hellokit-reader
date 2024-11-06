<template>
    <div style="">
        <div v-if="!isMobile">
            <div style="display:flex;flex-basis:auto;flex-direction:row;flex-shrink:1;">
                <div v-bind:class="{ 'let-nav-narrow': narrowMode }" class="left-nav" style="z-index:100;border-right:1px solid #ccc;background-color: white;">
                    <a href="https://www.hellokit.com.cn" style="display: block;height:47px;">
                        <div style="display: flex;padding-left:10px;margin-top:30px;">
                            <img style="width:36px;height:36px;margin-top:3px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/hellokit-logo.png">
                            <div style="flex-grow: 1;margin-left:10px;">
                                <h1 style="margin:0px;padding:0px;font-size: 22px;font-weight:500;font-family: brandfont;">哈喽工具箱</h1>
                                <h3 style="margin:0px;padding:0px;font-size: 14px;font-weight:400;">简单好用的在线工具</h3>
                            </div>
                        </div>
                    </a>
                    <ul class="category-container" style="margin-top:30px;">
                        <li class="category-entry-wrapper"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isAllTool }" href="/app/pc/all" data-actived="true"><IconApp></IconApp><span>全部</span></a></li>
                        <li class="category-entry-wrapper"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isImageTool }" href="/app/image/all" data-actived="true"><IconImage></IconImage><span>图片处理</span></a></li>
                        <li class="category-entry-wrapper"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isPDFTool }" href="/app/pdf/all" data-actived="true"><IconPdf></IconPdf><span>PDF处理</span></a></li>
                        <li class="category-entry-wrapper"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isDevTool }" href="/app/dev/all" data-actived="true"><IconDev></IconDev><span>开发工具</span></a></li>
                        <li class="category-entry-wrapper"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isDataTool }" href="/app/data/all" data-actived="true"><IconDataConvert></IconDataConvert><span>数据查询与换算</span></a></li>
                        <li class="category-entry-wrapper"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isGameTool }" href="/app/game/all" data-actived="true"><IconGame></IconGame><span>在线游戏</span></a></li>
                    </ul>
                    <div v-show="narrowMode == false" style="position: absolute;right:5px;bottom:5px;" @click="onFoldLeftNav"><el-icon :size="30"><Fold /></el-icon></div>
                </div>
                <div v-bind:class="{ 'left-nav-placeholder': !narrowMode,'left-nav-narrow-placeholder': narrowMode }"></div>
                <div style="z-index:10;background-color: #f1f5f9;min-height:100vh;flex-grow: 1;display: flex;flex-direction: column;">
                    <div style="min-height:100vh;display: flex;flex-direction: column;">
                        <slot></slot>
                        <div style="flex:1;"></div>
                        <section id="footer" class="pc_default_container footer_white" style="margin-top:50px;">
                            <div class="container wow fadeInDown">
                                <div class="col-sm-12 text-center">
                                    <p style="font-weight: bold;">哈喽工具箱致力于为您提供最好用的全平台软件</p>
                                    <p v-if=false class="text-white">
                                        <span>关于哈喽工具箱 · </span>
                                        <a style="color:white;" href="/updatelog">更新日志</a>
                                    </p>
                                    <p class="text-white">Copyright© 2013-2023  All Rights Reserved <a style="color:black;" href="https://beian.miit.gov.cn">京ICP备2023019179号-7</a>&nbsp;<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502044969"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/cdn1/codingsky/images/ga.jpg" style="width:15px;">京公网安备 11010502044969号</a></p>			
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div v-show="narrowMode == true" style="position: fixed;z-index:999;left:15px;bottom:5px;" @click="onFoldLeftNav"><el-icon :size="30"><Expand /></el-icon></div>
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
                    <li class="category-entry-wrapper" style="margin:0px;"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isAllTool }" href="/app/pc/all" data-actived="true"><IconApp></IconApp><span>全部</span></a></li>
                    <li class="category-entry-wrapper" style="margin:0px;"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isDevTool }" href="/app/image/all" data-actived="true"><IconImage></IconImage><span>图片处理</span></a></li>
                    <li class="category-entry-wrapper" style="margin:0px;"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isDataTool }" href="/app/pdf/all" data-actived="true"><IconPdf></IconPdf><span>PDF处理</span></a></li>
                    <li class="category-entry-wrapper" style="margin:0px;"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isDevTool }" href="/app/dev/all" data-actived="true"><IconDev></IconDev><span>开发工具</span></a></li>
                    <li class="category-entry-wrapper" style="margin:0px;"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isDataTool }" href="/app/data/all" data-actived="true"><IconDataConvert></IconDataConvert><span>数据查询与换算</span></a></li>
                    <li class="category-entry-wrapper" style="margin:0px;"><a class="category-entry-item" v-bind:class="{ 'category-entry-item-active': isGameTool }" href="/app/game/all" data-actived="true"><IconGame></IconGame><span>在线游戏</span></a></li>
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
import {Fold,Expand} from "@element-plus/icons-vue"
import IconMenu from "@/icons/Menu"
import IconHome from "@/icons/Home"
import IconImage from "@/icons/Image"
import IconApp from "@/icons/App"
import IconPdf from "@/icons/Pdf"
import IconDev from "@/icons/Dev"
import IconGame from "@/icons/Game"
import IconDataConvert from "@/icons/DataConvert"

//import Fold from "@/icons/Fold.vue"
//import Expand from "@/icons/Expand.vue"


export default defineNuxtComponent({
    components: {
        Fold,Expand,IconMenu,IconHome,IconImage,IconApp,IconPdf,IconDev,IconDataConvert,IconGame,//Fold,Expand,
    },
    

    async asyncData(params) {
        let isDevTool = false;
        let isDataTool = false;
        let isAllTool = false;
        let isGameTool = false;
        let isPDFTool = false;
        let isImageTool = false;

        let narrowMode = false;

        if (process.server) {
            let url = params.ssrContext.url;
            if (url.indexOf("/app/data") >= 0){
                isDataTool = true;
            } else if (url.indexOf("/app/game") >= 0){
                isGameTool = true;
            } else if (url.indexOf("/app/image") >= 0){
                isImageTool = true;
            } else if (url.indexOf("/app/pdf") >= 0){
                isPDFTool = true;
            } else if (url.indexOf("/app/dev") >= 0){
                isDevTool = true;
            }else{
                isAllTool = true;
            }

            if (url.indexOf("/app/postcode") >= 0) {
                narrowMode = true;
            }
        }

        return  {
            isDevTool,
            isDataTool,
            isAllTool,
            isGameTool,
            isPDFTool,
            isImageTool,
            deviceID: "",
            
            userInfo : null,
            isMobile:browser.isMobile(),
            showAppCategory:false,
            narrowMode:narrowMode,
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
            this.narrowMode = !this.narrowMode;
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