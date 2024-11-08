<template>
    <div>
        <div style="height:80px;"></div>
        <div style="text-align: center;">
            <h1 class="brand_title">Hello Reader</h1>
            <p style="font-weight: 500;font-size: 36px;text-align: center;margin-top:0px;">每一次阅读，都成为知识的深度探索之旅。</p>
            <div>
                <a class="button_link" href="/feed-item">先逛一下</a>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <a class="button_link" href="/feed-item">先逛一下</a>
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

definePageMeta({
  layout: 'blank'
})
</script>

<style scoped>
.brand_title{
    text-align: center;
    color: #009a61;
    font-size:80px;
    margin-bottom:0px;
}

.button_link{
    display: inline-block;
    text-align: center;
    padding:15px 25px;
    font-size: 20px;
    border:1px solid #009a61;
    border-radius: 5px;
}

</style>