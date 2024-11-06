<template>
    <div style="height:50px;background-color: white;box-shadow: rgba(0, 0, 0, 0.08) 0px 0.125rem 0.25rem;">
        <div class="pc_default_container_size" style="display: flex;align-items: center;">
            <img alt="邮政编码查询" style="height:36px;" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/tools/postcode/logo2.png">
            <div style="width:20px;"></div>
            <a href="/app/postcode" v-bind:class="{ 'menu_item_active': tabIndex == 1 }" class="menu_item">邮编查询</a>
            <a href="/app/postcode/province" v-bind:class="{ 'menu_item_active': tabIndex == 2 }" class="menu_item">邮编浏览</a>
            <div style="flex-grow: 1;"></div>
            <UserEntry></UserEntry>
        </div>
    </div>
</template>

<script>

import browser from '@/service/browser';
import UserEntry from "@/components/UserEntry"

export default defineNuxtComponent({
    components: {
		UserEntry
	},

    async asyncData(params) {
        let tabIndex = 1;
        if (process.server) {
            let url = params.ssrContext.url;
            if (url.indexOf("/app/postcode/province") >= 0){
                tabIndex = 2;
            }
        }

        return {
            isMobile: browser.isMobile(),
            tabIndex:tabIndex,
        }
    },

    mounted() {
    },

    methods: {

    }

});

</script>