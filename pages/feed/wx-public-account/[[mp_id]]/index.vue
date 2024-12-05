<template>
    <div>
        <div style="background-color: white;" :class="{ pc_tr_container: !isMobile,pc_default_inner:!isMobile, pc_default_container:!isMobile, mobile_tr_container: isMobile }">
            <div class="tool_title_wrapper">
                <h1 style="margin-bottom:0px;">TIOBE 指数排名</h1>
                <p style="margin-top:0px;">（2024年8月份）</p>
            </div>
        </div>
    </div>
</template>

<script>

import browser from '@/service/browser';

export default defineNuxtComponent({
    async asyncData() {
        return {
            isMobile: browser.isMobile()
        }
    },

    mounted() {
    },

    methods: {

    }

});

</script>