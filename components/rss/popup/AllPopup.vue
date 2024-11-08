<template>
    <div>
        <CreateFolderPopup></CreateFolderPopup>
        <SelectFolder></SelectFolder>
        <FeedDescriptPopup></FeedDescriptPopup>
        <FeedItemPopup></FeedItemPopup>
    </div>
</template>

<script>

import CreateFolderPopup from '@/components/rss/popup/CreateFolderPopup.vue'
import SelectFolder from '@/components/rss/popup/SelectFolder.vue'
import FeedDescriptPopup from '~/components/rss/popup/FeedDescriptPopup.vue'
import FeedItemPopup from '@/components/rss/popup/FeedItemPopup.vue'

export default defineNuxtComponent({
    components: {
        CreateFolderPopup,SelectFolder,FeedDescriptPopup,FeedItemPopup
    },

    async asyncData() {
        return {
        }
    },

    methods:{
    }
})

</script>