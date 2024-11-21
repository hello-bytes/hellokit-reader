import helper from "@/utils/helper"
import userbiz from "@/service/user.js"


export default {
    async queryFeedList(order,limit, offset){
        let params = {
            state : 1,
            order:parseInt(order),
            limit:parseInt(limit),
            offset:parseInt(offset),
        }
        return helper.postJsonAsync(true, "/api/tbs/rss/v1/feed/fetch", params);
    },

    async queryFeedByIDs(serverSideReq, feedIDs){
        let params = {
            feed_ids:feedIDs,
        }
        return helper.postJsonAsync(serverSideReq, "/api/tbs/rss/v1/feed/get", params);
    },

    async queryFeedStaticsByIDs(serverSideReq,feedIDs){
        let params = {
            feed_ids:feedIDs,
        }
        return helper.postJsonAsync(serverSideReq, "/api/tbs/rss/v1/feed/statics", params);
    },
    
    async queryFeedItemsByFeedID(serverSideRequest, feedID,limit, offset){
        let params = {
            feed_id:feedID,
            state:1,
            order:2,
            limit:parseInt(limit),
            offset:parseInt(offset),
        }
        //console.log(params);
        return helper.postJsonAsync(serverSideRequest, "/api/tbs/rss/v1/feeditem/fetch", params);
    },

    async getFeedItemByID(feedItemID){
        let params = {
            feed_item_id:feedItemID,
        }
        //console.log(params);
        return helper.postJsonAsync(true, "/api/tbs/rss/v1/feeditem/get", params);
    },

    async getFeedItemByIDs(serverSideReq, feedItemIDs){
        let params = {
            feed_item_ids:feedItemIDs,
        }
        return helper.postJsonAsync(serverSideReq, "/api/tbs/rss/v2/feeditem/get", params);
    },

    async queryFeedItemByFolderID(serverSideRequest, deviceID, folderID, order, limit,offset){
        let params = {
            device_id:deviceID,
            folder_id:folderID,
            order:parseInt(order),
            limit:parseInt(limit),
            offset:parseInt(offset),
        }
        return helper.postJsonAsync(serverSideRequest, "/api/tbs/rss/v1/folder/feed-item/fetch", params);
    },
    
    async getFolderIDByFeedID(deviceID,feedID){
        let params = {
            device_id:deviceID,
            feed_id:feedID,
        }

        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/feed/get-user-folder-id", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/feed/get-device-folder-id", params);
        }
    },

    async getTodayFeedItems(deviceID, limit, offset){
        let params = {
            device_id:deviceID,
            limit:parseInt(limit),
            offset:parseInt(offset),
            only_today:true,
            read_state:1,
            hide_state:1,
            folder_id : "0",
            feed_id:"0",
        }
        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/user/feeditem", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/device/feeditem", params);
        }
    },

    // readState == 1 未读列表
    // readState == 2 已读列表
    async getUserFeedItems(deviceID, readState, limit, offset){
        let params = {
            device_id:deviceID,
            limit:parseInt(limit),
            offset:parseInt(offset),
            only_today:false,
            read_state:parseInt(readState),
            hide_state:1,
            folder_id : "0",
            feed_id : "0",
        }
        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/user/feeditem", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/device/feeditem", params);
        }
    },

    async getUserFeedItemsV2(deviceID, folderID, readState, limit, offset){
        let params = {
            device_id:deviceID,
            limit:parseInt(limit),
            offset:parseInt(offset),
            only_today:false,
            read_state:parseInt(readState),
            hide_state:1,
            folder_id : folderID,
            feed_id : "0",
        }
        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/user/feeditem", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/device/feeditem", params);
        }
    },

    async getUserFeedItemsV3(deviceID, folderID, feedID, readState, limit, offset){
        let params = {
            device_id:deviceID,
            limit:parseInt(limit),
            offset:parseInt(offset),
            only_today:false,
            read_state:parseInt(readState),
            hide_state:1,
            folder_id : folderID,
            feed_id : feedID,
        }
        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/user/feeditem", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/device/feeditem", params);
        }
    },

    async getUserFeedCount(deviceID){
        let params = {
            device_id:deviceID
        };
        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/user/feed/count", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/device/feed/count", params);
        }   
    },

    async setFeedItemReadState(deviceID, feedItemID, readState){
        let params = {
            device_id:deviceID,
            feeditem_id:feedItemID,
            read_state : parseInt(readState)
        };
        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/user/feed-item/set-read-state", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v1/device/feed-item/set-read-state", params);
        }   
    },

    async fetchUserFeedItemByIds(deviceID, feedItemID){
        let params = {
            user_type:userbiz.isUserMode() ? 2 : 1,
            device_id:deviceID,
            feed_item_ids:feedItemID,
        };
        return helper.postJsonAsync(false, "/api/tbs/rss/v1/user/feed-item/fetch-by-ids", params);   
    },

    async addViewNumber(){
        let params = {
            articleid:733569166,
        }
        return helper.postJsonAsync(false,"/api/article/v1/update/viewnumber",params);
    },

    
    
}