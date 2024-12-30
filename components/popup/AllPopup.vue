<template>
    <div>
        <CreateFolderPopup></CreateFolderPopup>
        <SelectFolder></SelectFolder>
        <FeedDescriptPopup></FeedDescriptPopup>
        <FeedItemPopup></FeedItemPopup>
        <FeedInfoPopup></FeedInfoPopup>
        <GeneralSettingPopup></GeneralSettingPopup>
    </div>
</template>

<script>

import CreateFolderPopup from '@/components/popup/CreateFolderPopup.vue'
import SelectFolder from '@/components/popup/SelectFolder.vue'
import FeedDescriptPopup from '~/components/popup/FeedDescriptPopup.vue'
import FeedItemPopup from '@/components/popup/FeedItemPopup.vue'
import FeedInfoPopup from '@/components/popup/FeedInfoPopup.vue'

import GeneralSettingPopup from '@/components/setting/GeneralSettingPopup.vue'
import FeedManagePopup from '@/components/setting/FeedManagePopup.vue'
import FolderManagePopup from '@/components/setting/FolderManagePopup.vue'

export default defineNuxtComponent({
    components: {
        CreateFolderPopup,SelectFolder,FeedDescriptPopup,FeedItemPopup,FeedInfoPopup,GeneralSettingPopup,FeedManagePopup,FolderManagePopup
    },

    async asyncData() {
        return {
        }
    },

    methods:{
    }
})

</script>