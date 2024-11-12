<template>
    <div>
        <div style="width:100%;height:100vh;background-color: white;">
            <div class="hello_reader_logo">哈喽阅读</div>
        </div>
        <div v-if="showArticles">
            <div class>Hello, Reader</div>
        </div>
    </div>
</template>

<script>

import helper from "@/utils/helper"

export default defineNuxtComponent({
    async asyncData() {
        return {
            showArticles : true,
        }
    },

    mounted() {
        this.showArticles = false;
        let state = helper.getK("hellokit.reader.state");
        if (state == undefined || state == ""){
            this.showArticles = false;
            window.location.href = "/guide";  
        }else{
            if (state == "inited"){
                window.location.href = "/my/today";
            }
        }
    },

    methods: {

    }

});

definePageMeta({
  layout: 'blank'
})
</script>

<style scoped>
.hello_reader_logo{
    position: absolute;
    top: 50vh;
    left: 0;
    transform: translateX(0) translateY(-50%);
    font-size: 44px;
    color: #d6d6d6;
    font-weight: 700;
    font-family: helvetica, sans-serif;
    letter-spacing: -.04em;
    text-align: center;
    width: 100%;
}
</style>