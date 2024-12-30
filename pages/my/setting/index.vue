<template>
    <div class="page_root_container">
        <h2 class="page_root_title">设置</h2>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="8" class="col_left_block" style="padding-right:12px;">
                <div class="setting_entry_block" @click="onGeneralSetting()">
                    <p style="margin:0px;color:#333333;">常规设置</p>
                    <el-icon><Setting /></el-icon>
                </div>
            </el-col>
            <el-col :span="8" class="col_block">
                <div class="setting_entry_block">
                    <p style="margin:0px;color:#333333;">文件夹管理</p>
                    <el-icon><User /></el-icon>
                </div>
            </el-col>
            <el-col :span="8" class="col_right_block">
                <div class="setting_entry_block">
                    <p style="margin:0px;color:#333333;">订阅源管理</p>
                    <el-icon><User /></el-icon>
                </div>
            </el-col>
            <el-col :span="8" class="col_left_block not_first_line_block">
                <div class="setting_entry_block">
                    <p style="margin:0px;color:#333333;">个人资料</p>
                    <el-icon><User /></el-icon>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

import User from "@/icons/User.vue"
import { Setting } from "@element-plus/icons-vue"

import emitter from "@/service/event.js";

export default defineNuxtComponent({
    components: {
        Setting,User
    },

    async asyncData() {
        return {
        }
    },

    mounted() {
    },

    methods: {
        onGeneralSetting(){
            // on_popup_general_setting
            emitter.emit("on_popup_general_setting",{});
        }
        
    }

});

</script>

<style scoped>
.setting_entry_block{
    padding:10px;display: flex;flex-direction: column;justify-content: space-between;border:1px solid #ddd;height:100px;
    border-radius: 5px;
}
.setting_entry_block:hover{
    border: 1px solid #9e9e9e;
}
.setting_entry_block > p {
    color:#333333;
}

.not_first_line_block{
    margin-top:20px;
}

.col_left_block{
    padding-right:8px;   
}

.col_block{
    padding-left:4px;
    padding-right:4px;
}

.col_right_block{
    padding-left:8px;
}

</style>