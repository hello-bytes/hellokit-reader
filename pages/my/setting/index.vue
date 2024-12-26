<template>
    <div class="page_root_container">
        <h2 class="page_root_title">设置</h2>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="6" style="padding-right:12px;">
                <div class="setting_entry_block">
                    <p style="margin:0px;color:#333333;">常规设置</p>
                    <el-icon><Setting /></el-icon>
                </div>
            </el-col>
            <el-col :span="6" style="padding-left:12px;padding-right:12px;">
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
</style>