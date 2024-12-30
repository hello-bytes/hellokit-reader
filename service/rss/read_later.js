import helper from "@/utils/helper"
import userbiz from "@/service/user.js"

export default {
    async setReadLater(deviceID, feedID, feedItemID){
        let params = {
            device_id: deviceID,
            feed_id: feedID,
            feed_item_id: feedItemID
        };
        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/user/feed-item/set-read-later", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/device/feed-item/set-read-later", params);
        }
    },

    async removeReadLater(deviceID, feedItemID){
        let params = {
            device_id: deviceID,
            feed_item_id: feedItemID
        };
        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/user/feed-item/remove-read-later", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/device/feed-item/remove-read-later", params);
        }
    },

    async fetchReadLater(deviceID, limit, offset){
        let params = {
            device_id: deviceID,
            limit: parseInt(limit),
            offset: parseInt(offset)
        };
        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/user/feed-item/fetch-read-later", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/device/feed-item/fetch-read-later", params);
        }
    },

    async fetchReadLaterV2(deviceID, feedItemID, limit, offset){
        let params = {
            user_type : userbiz.isUserMode() ? 2:1,
            feed_item_id:feedItemID,
            device_id: deviceID,
            limit: parseInt(limit),
            offset: parseInt(offset)
        };
        
        return helper.postJsonAsync(false, "/api/tbs/rss/v2/user/feed-item/fetch-read-later", params);
    },

    async getReadLaterByFeedItems(deviceID, feedItemIds){
        let params = {
            device_id: deviceID,
            feed_item_ids:feedItemIds
        };
        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/user/feed-item/read-later", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/device/feed-item/read-later", params);
        }
    }
}