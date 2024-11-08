<template>
    <div>
        <div style="max-width:800px;margin:0px auto;margin-top:30px;">
            <FolderBar :folder="folder"></FolderBar>
            <Loading v-if="viewState == 1"></Loading>
            <EmptyFolder v-if="viewState == 2" :folder="folder"></EmptyFolder>
            <FeedItemList v-show="viewState == 3"  ref="feedItemListComp"></FeedItemList>
        </div>
    </div>
</template>

<script>

import devicebiz from '@/service/device';
import rssbiz from '@/service/rss/rss.js';
import rssfolder from '@/service/rss/folder.js';

import Loading from '@/components/rss/Loading.vue';
import FolderBar from '@/components/rss/folder/FolderBar.vue';
import EmptyFolder from '@/components/rss/folder/EmptyFolder.vue';

import FeedItemList from '@/components/rss/FeedItemList.vue';

export default defineNuxtComponent({
    components: {
        Loading, FolderBar, EmptyFolder, FeedItemList
    },

    async asyncData() {
        const route = useRoute();
        let folderID = route.params.folder_id;
        let pageNumber = parseInt(route.params.page);

        return {
            folder : null,
            pageNumber : pageNumber,
            folderID : folderID,
            viewState : 1
        }
    },

    mounted() {
        this.loadFolder(); 
    },

    methods: {
        async loadFolder(){
            let responseData = await rssfolder.getFolderMeta(false, devicebiz.getDeviceID(), this.folderID);
            if (helper.isResultOk(responseData)){
                this.folder = responseData.data;
            }
            this.loadFeedItems();
        },

        async loadFeedItems(){
            if (this.pageNumber < 1) {
                this.pageNumber = 1;
            }
            //let responseData = await  rssbiz.queryFeedItemByFolderID(false,devicebiz.getDeviceID(),this.folderID,1,30, (this.pageNumber-1) * 30);
            let responseData = await rssbiz.getUserFeedItemsV2(devicebiz.getDeviceID(),this.folderID,1,30, (this.pageNumber-1) * 30);
            if (!helper.isResultOk(responseData)){
                ElMessage.error("文章列表加载失败，请检查网络或稍后再试。");
                return;
            }

            let feedItems = responseData.data.list;
            let totalCount = responseData.data.total_count;
            //console.log("get folder's feeditem count : ",totalCount)
            if (totalCount == 0 ){
                this.viewState = 2;
            }else{
                this.viewState = 3;
                this.$refs.feedItemListComp.setFeedItems(feedItems, totalCount);
            }
        }
    }
});


</script>