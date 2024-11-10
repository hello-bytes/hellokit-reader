import helper from "@/utils/helper"
import userbiz from "@/service/user.js"

export default {
    async increaseFeedItemReadCount(serverSideRequest, feedItemID){
        let params = {
            feed_item_id:feedItemID,
        }
        return helper.postJsonAsync(serverSideRequest,"/api/tbs/rss/v1/feeditem/inc-read-count", params);
    },
}