<template>
    <div class="page_root_container">
        <h2 class="page_root_title">导入内容源</h2>
        <el-divider></el-divider>
        <div v-if="viewType == 1">
            <p>上传OPML文件，以导入内容源（RSS订阅源）</p>
            <el-upload
                drag name="elfilename" action="' '"  :http-request="uploadFile" :show-file-list="false"  
                :before-upload="checkUploadFile"  :on-progress="onUploadProgress" :on-success="onUploadSuccess" >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">把文件拖放至此处 或 <em>点击以上传文件</em></div>
                <template #tip><div class="el-upload__tip"></div></template>
            </el-upload>
        </div>
        <div v-if="viewType == 2" style="text-align: center;">
            <div style="height:90px;"></div>
            <img style="height:80px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/loading_v5_black.gif" />
            <p>文件已上传，正在解析...</p>
        </div>
        <div v-if="viewType == 3" >
			<div style="text-align: right;padding-right:15px;">
				<el-button type="primary" @click="importAllFeed()"><el-icon :size="18"><FolderAdd /></el-icon>&nbsp;订阅所有</el-button>
			</div>
			<div v-loading="importAlling" style="border-top:1px solid #ddd;border-left:1px solid #ddd;border-right:1px solid #ddd;border-radius: 3px;margin-top:15px;">
				<div v-for="(item,index) in importedFeeds" :key="index" class="feed_state_container">
					<div style="flex:1;">
						<p style="margin:0px;font-size:16px;font-weight:500;color:rgb(27, 27, 31)">{{ item.name }}</p>
						<a style="font-size:14px;" :href='item.feed_url' target="_blank">{{ item.feed_url }}</a>
					</div>
					<div class="feed_state_container_right">
						<el-button v-if="item.feedState != null && !item.feedState.is_subscribe" @click="importFeed(item)"><el-icon :size="18"><FolderAdd /></el-icon>&nbsp;新增订阅</el-button>
						<el-button v-else-if="item.feedState != null && item.feedState.is_subscribe" @click="importFeed(item)"><el-icon :size="18"><FolderChecked /></el-icon>&nbsp;修改订阅</el-button >
						<span v-else>-</span>
					</div>
				</div>
			</div>	
        </div>
    </div>
</template>

<script>

import rssbiz from '@/service/rss/rss.js';
import importbiz from '@/service/rss/import.js';
import devicebiz  from '@/service/device.js';
import filebiz from '@/service/filebiz.js'

import emitter from "@/service/event.js";

import { UploadFilled,Plus,Select,FolderAdd,FolderChecked } from '@element-plus/icons-vue'

export default defineNuxtComponent({
    components: {
        UploadFilled,Plus,Select,FolderAdd,FolderChecked
    },

    async asyncData() {
        return {
			importAlling:false,

            viewType : 1, //  1 上传文件 2 loading，加载RSS列表  3 显示RSS列表， 4 解析错误页面
			importedFeeds:[],
			//importedFeeds:[{name:"aa",feed_url:"https://test.com",feedState:{is_subscribe:true}},{name:"aa",feed_url:"https://test.com",feedState:{is_subscribe:false}}],

            fileItem:null,
            uploadPercentage:0,
        }
    },

    mounted() {
		emitter.on("on_import_all", (param) => {
			// param.folderObj;
			this.importAllFeedImpl(param.folderObj);
		});
    },

    methods: {
        checkUploadFile(params) {
			this.fileItem = { file_id:"",name: params.name,object_key:"", modifyDate: params.lastModifiedDate, file_size: params.size, 
					lastModified: params.lastModified, fileType: params.type, fileStatus : 1 }
			return true;
		},

        async uploadFile(param) {
			try {
				this.uploadPercentage = 0;
				let responseData = await helper.getUploadFileSignParam(devicebiz.getDeviceID(), param.file.name, param.file.size);
				if (!helper.isResultOk(responseData)){
					//ElMessage.error("上传文件失败。");
					return;
				}

                this.fileItem.file_id = responseData.data.id;
                //console.log("upload file :", responseData.data.id);

				this.uploadFileToAliyun(responseData.data, param);
			} catch (e) {
				param.onError(e)
			}
		},

		uploadFileToAliyun(ossData, param) {
			let aliyunToken = ossData.token;
			try {
				const formData = new FormData()

				let objectKey = "" + aliyunToken.dir + aliyunToken.filename;
				formData.append('key', objectKey);
				formData.append('policy', aliyunToken.policy);
				formData.append('OSSAccessKeyId', aliyunToken.accessid);
				formData.append('success_action_status', "200");
				formData.append('Signature', aliyunToken.signature);
				formData.append('file', param.file);

				const xhr = new XMLHttpRequest();
				xhr.open('post', aliyunToken.host);
				xhr.onreadystatechange = () => {
					if (xhr.readyState === 4 && xhr.status === 200) {
						let result = { code: 0, fileID: ossData.id };
						if (result.code == 0) {
							param.onSuccess(result, param.file, param.fileList)
						} else {
							param.onError(result)
						}
					}
				}

				//获取上传的进度
				xhr.upload.onprogress = function (event) {
					if (event.lengthComputable) {
						var percent = event.loaded / event.total * 100
						param.onProgress(percent)
					}
				}
				//将formdata上传
				xhr.send(formData)
			} catch (e) {
				param.onError(e)
			}
		},

		onUploadProgress(event, file, fileList) {
			event;file;fileList;

			let uploadPercentage = parseInt(event);
			uploadPercentage = uploadPercentage > 100 ? 100 : uploadPercentage;
			uploadPercentage = uploadPercentage <= 0 ? 0 : uploadPercentage;
			this.uploadPercentage = uploadPercentage;
		},

		async onUploadSuccess(responseData, file, fileList) {
			responseData;file;fileList;

            if  (responseData == null) {
                return;
            }
            this.loadRssList();
		},

        async loadRssList(){
            this.viewType = 2;
            await this.loadRssListImpl();
			this.viewType = 3;
        },

		async loadRssListImpl(){
			let responseData = await importbiz.getRssListByFile(this.fileItem.file_id);
            if (!helper.isResultOk(responseData)){
				ElMessage.error("获取文件的Feed失败，请稍后再试。")
                return;
            }
			
			let feedURLs = [];
			let importedFeeds = responseData.data;
			for(let index in importedFeeds){
				feedURLs.push(importedFeeds[index].feed_url);
				importedFeeds[index].feedState = null;
			}
			let checkFeedURLResponse = await importbiz.checkFeedURL(devicebiz.getDeviceID(), feedURLs);
			if (!helper.isResultOk(checkFeedURLResponse)){
				ElMessage.error("获取Feed状态失败，请稍后再试。")
				return;
			}
			let feedURLStates = checkFeedURLResponse.data;
			for (let i in feedURLStates){
				for (let j in importedFeeds){
					if(feedURLStates[i].feed_url == importedFeeds[j].feed_url){
						importedFeeds[j].feedState = feedURLStates[i];
						break;
					}
				}
			}

			this.importedFeeds = importedFeeds;
		},

		importFeed(feedObj){
			//console.log(feedObj);
			let feedState = feedObj.feedState;
			if (feedState == undefined){
				return;
			}

			let cloundFeedObj = feedState.feed;
			if (cloundFeedObj != null){
				cloundFeedObj.folderList = [];
				emitter.emit("on_popup_selectfolder",{ currentFeed:cloundFeedObj, action:1 }) ;
			}else{
				let feed = { feed_id:"0", name : feedObj.name, feed_url:feedObj.feed_url, url : feedObj.url, desc:feedObj.desc,language:feedObj.language  }
				emitter.emit("on_popup_selectfolder",{ currentFeed:feed, action:2 }) ;
			}
		},

		importAllFeed(){
			emitter.emit("on_popup_selectfolder",{ currentFeed:null, action:3 }) ;		
		},

		async importAllFeedImpl(folderObj){
			this.importAlling = true;

			let responseData = await importbiz.importAllFeed(devicebiz.getDeviceID(), this.fileItem.file_id, folderObj.folder_id);
			await this.loadRssListImpl();
			
			if (helper.isResultOk(responseData)){
				ElMessage.success("导入成功。");
			}else{
				ElMessage.success("导入失败，请稍后再试。");
			}

			this.importAlling = false;
		}
    }
});

</script>

<style scoped>
.rss_middle_right{
    height:100vh;
    width:320px;
    background-color: white;
    border-right: solid 1px rgb(235, 235, 235);
}
.feed_state_container{
	display:flex;
	padding:8px 15px 8px 15px;
	border-bottom:1px solid #ddd;
}
.feed_state_container_right{
	display: flex;align-items: center;justify-content: center;
}
</style>