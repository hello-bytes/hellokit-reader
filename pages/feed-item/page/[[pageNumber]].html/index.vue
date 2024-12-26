<template>
    <div>
        <FeedItemListSEO :pageNumber="pageNumber" :totalCount="totalCount" :feedItems="feedItems"></FeedItemListSEO>
    </div>
</template>

<script>

import browser from '@/service/browser';
import rssbiz from '@/service/rss/rss.js';
import feedItemBiz from '@/service/rss/feedItem.js';

import FeedItemListSEO from '~/components/itemlist/FeedItemListSEO.vue';

export default defineNuxtComponent({
    components: {
        FeedItemListSEO,
    },

    async asyncData() {
        const route = useRoute();
        let pageNumber = parseInt(route.params.pageNumber);
        if (pageNumber < 1) {
            pageNumber = 1;
        }

        let feedItems = [];
        let totalCount = 0;
        let responseData = await rssbiz.queryFeedItemsByFeedID(true, "0", 30, (pageNumber-1)*30);
        if (helper.isResultOk(responseData)){
            feedItems = responseData.data.list;
            totalCount = responseData.data.total_count;

            // load feed
            let feedIds = [];
            let feedItemIds = [];
            for(let index in feedItems){
                feedItems[index].readState = 1; //  1 表示未读
                feedItems[index].isReadLater = false;
                feedItems[index].feed = null;
                feedItems[index].authorList = [];

                // 加入FeedItemID合集
                feedItemIds.push(feedItems[index].feed_item_id);

                // 加载FeedIds集合
                let found = false;
                let checkFeedId = feedItems[index].feed_id;
                for(let index in feedIds) {
                    if(feedIds[index] == checkFeedId){
                        found = true;
                        break;
                    }
                }
                if (!found){
                    feedIds.push(feedItems[index].feed_id);
                }

                //feedIds.push(feedItems[index].feed_id);
            }
            
            if(feedIds.length > 0){
                let responseData = await rssbiz.queryFeedByIDs(true,feedIds);
                if (helper.isResultOk(responseData)){
                    let feedList = responseData.data.list;
                    for(let index in feedItems){
                        for(let j in feedList){
                            if (feedList[j].feed_id == feedItems[index].feed_id){
                                feedItems[index].feed = feedList[j];
                            }
                        }
                    }
                }
            }

            let feedItemAuthorResponseData = await feedItemBiz.fetchAuthor( true, feedItemIds);
            if (helper.isResultOk(feedItemAuthorResponseData)){
                let authorList = feedItemAuthorResponseData.data;
                for(let i in authorList){
                    for(let j in feedItems){
                        if (authorList[i].feed_item_id == feedItems[j].feed_item_id){
                            feedItems[j].authorList.push(authorList[i]);
                            break;
                        }
                    }
                }
            }
        }
        return {
            feedItems : feedItems,
            totalCount : totalCount,
            pageNumber:pageNumber,
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