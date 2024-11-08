<template>
    <div>
        <FeedItemListSEO :pageNumber="1" :totalCount="totalCount" :feedItems="feedItems"></FeedItemListSEO>
    </div>
</template>

<script>

import browser from '@/service/browser';
import rssbiz from '@/service/rss/rss.js';

import FeedItemListSEO from '~/components/rss/itemlist/FeedItemListSEO.vue';

export default defineNuxtComponent({
    components: {
        FeedItemListSEO,
    },

    async asyncData() {
        let feedItems = [];
        let totalCount = 0;
        let responseData = await rssbiz.queryFeedItemsByFeedID(true, "0", 30, 0);
        if (helper.isResultOk(responseData)){
            feedItems = responseData.data.list;
            totalCount = responseData.data.total_count;

            // load feed
            let feedIds = [];
            for(let index in feedItems){
                feedItems[index].readState = 1; //  1 表示未读
                feedItems[index].isReadLater = false;
                feedItems[index].feed = null;

                feedIds.push(feedItems[index].feed_id);
            }
            
            if(feedIds.length > 0){
                let responseData = await rssbiz.queryFeedByIDs(true,feedIds);
                if (helper.isResultOk(responseData)){
                    let feedList = responseData.data.list;
                    for(let index in feedItems){
                        for(let j in feedList){
                            if (feedList[j].feed_id = feedItems[index].feed_id){
                                feedItems[index].feed = feedList[j];
                            }
                        }
                    }
                }
            }
        }
        return {
            feedItems : feedItems,
            totalCount : totalCount,
        }
    },

    mounted() {
    },

    methods: {
        isFeedIdExist(feedID, feedIds){
            let found = false;
            for(let index in feedIds) {
                if(feedIds[index] == feedID){
                    found = true;
                    break;
                }
            }
            return found;
        },
    }

});

</script>

<style scoped>

</style>