<template>
    <div>
        <CreateFolderPopup></CreateFolderPopup>
        <SelectFolder></SelectFolder>
        <FeedDescriptPopup></FeedDescriptPopup>
        <FeedItemPopup></FeedItemPopup>
        <FeedInfoPopup></FeedInfoPopup>
    </div>
</template>

<script>

import CreateFolderPopup from '@/components/popup/CreateFolderPopup.vue'
import SelectFolder from '@/components/popup/SelectFolder.vue'
import FeedDescriptPopup from '~/components/popup/FeedDescriptPopup.vue'
import FeedItemPopup from '@/components/popup/FeedItemPopup.vue'
import FeedInfoPopup from '@/components/popup/FeedInfoPopup.vue'

export default defineNuxtComponent({
    components: {
        CreateFolderPopup,SelectFolder,FeedDescriptPopup,FeedItemPopup,FeedInfoPopup
    },

    async asyncData() {
        return {
        }
    },

    methods:{
    }
})

</script>