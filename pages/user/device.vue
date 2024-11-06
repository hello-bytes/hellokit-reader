<template>
    <div style="background-color: white;" :class="{ pc_tr_container: !isMobile,pc_default_inner:!isMobile, pc_default_container:!isMobile, mobile_tr_container: isMobile }">
        <div class="tool_title_wrapper">
            <h1>设备信息</h1>
        </div>
        <h3>设备唯一ID</h3>
        <div style="display: flex;align-items: center;margin-bottom:20px;">
            <span>{{ deviceID }}</span>
            <span>&nbsp;&nbsp;</span>
            <el-link type="primary" @click="copyDeviceID">复制设备ID</el-link>
            <span>&nbsp;&nbsp;</span>
            <el-popconfirm title="重置后，与当前设备ID相关的数据，都会丢失，请确认此风险！" confirm-button-text="确认，需要重置" cancel-button-text="取消" width="300">
                <template #reference>
                    <el-link @click="resetDeviceID">重置设备ID</el-link>
                </template>
            </el-popconfirm>
        </div>
        <el-alert show-icon title="关于设备ID" description="哈喽工具箱为您的设备（浏览器）生成一个维一ID，在此设备上使用哈喽工具箱期间，产生的所有数据（比如您上传的文件），都和此ID关联。" type="info" :closable="false"  />
        <div style="height:20px;"></div>
        <el-alert title="建议登录" type="warning" description="此设备ID不是稳定的，受限于浏览器本身的机制及用户使用习惯。比如卸载浏览器、清理浏览器缓存等操作可能导致此设备ID丢失。此设备ID丢失后您将无法访问之前的数据。" show-icon :closable="false"  />
        <div style="height:25px;"></div>
        <h3>我的数据</h3>
        <el-link  href="https://memo.hellokit.com.cn/">备忘录数据</el-link><br/>
        <el-link  href="https://hellokit.com.cn/anhao/send/text">暗号应用数据</el-link><br/>
        <el-link  href="https://hellokit.com.cn/fileview/all">万能文件查看器</el-link>
        
    </div>
</template>

<script>
import browser from '@/service/browser';

//import * as Clipboard from 'vue-clipboard3';
import Clipboard from 'vue-clipboard3';
import { ElMessage } from 'element-plus';

import device from "@/service/device"

// import browser  from '@/service/browser';
// import highlightjs from "@highlightjs/vue-plugin"

export default defineNuxtComponent({
    async asyncData() {
        return {
            isMobile: browser.isMobile(),
            deviceID: "",
        }
    },

    mounted(){
        this.deviceID = device.getDeviceID();
    },

    methods: {
        async copyDeviceID(){
            const { toClipboard } = Clipboard();
			try {
				await toClipboard(this.deviceID);
				ElMessage({
					message: '已复制到剪贴板。',
					type: 'success',
				})
			} catch (e) {
				ElMessage.error('复制失败，可能您的浏览器不支持复制。');
			}
        },

        resetDeviceID(){

        }
    }

});


</script>
