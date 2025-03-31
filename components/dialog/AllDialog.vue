<template>
    <div>
        <WechatLoginDialog></WechatLoginDialog>
        <AnonymityWarning></AnonymityWarning>
    </div>
</template>

<script>

import AnonymityWarning from './AnonymityWarning.vue'
import WechatLoginDialog from './WechatLoginDialog.vue'

export default defineNuxtComponent({
    components: {
        WechatLoginDialog,AnonymityWarning
    },

    async asyncData() {
        return {
        }
    },

    methods:{
    }
})

</script>