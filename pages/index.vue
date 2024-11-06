<template>
    <div>
        <div style="background-color: white;" :class="{ pc_tr_container: !isMobile,pc_default_inner:!isMobile, pc_default_container:!isMobile, mobile_tr_container: isMobile }">
            sfla
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