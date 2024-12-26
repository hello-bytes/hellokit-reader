import helper from "@/utils/helper"
import userbiz from "@/service/user.js"

export default {
    async getFolderMeta(serverSideRequest, deviceID, folderID){
        let params = {
            device_id:deviceID,
            folder_id:folderID,
        }
        return helper.postJsonAsync(serverSideRequest,"/api/tbs/rss/v1/folder/get", params);
    },

    async createUserFolder(folderName){
        let params = {
            folder_name:folderName,
            parent_folder_id:"0",
        }
        return helper.postClientJsonAsync("/api/tbs/rss/v1/user/folder/add", params);
    },

    async createDeviceFolder(deviceID, folderName){
        let params = {
            device_id:deviceID,
            folder_name:folderName,
            parent_folder_id:"0",
        }
        return helper.postClientJsonAsync("/api/tbs/rss/v1/device/folder/create", params);
    },

    async deleteFolder(deviceID, folderID){
        let params = {
            device_id:deviceID,
            folder_id:folderID,
        }
        return helper.postClientJsonAsync("/api/tbs/rss/v1/folder/delete", params);
    },

    async queryFolderList(serverSide,deviceID, limit, offset){
        if (userbiz.isUserMode()){
            let params = {
                limit:limit,
                offset:offset,
                folder_id:"0",
            }
            if (serverSide){
                return helper.postJsonAsync(true, "/api/tbs/rss/v1/user/folder/fetch", params);
            }else{
                return helper.postClientJsonAsync("/api/tbs/rss/v1/user/folder/fetch", params);
            }
        }else if (userbiz.isDeviceMode()){
            let params = {
                limit:limit,
                offset:offset,
                folder_id:"0",
                device_id:deviceID,
            }
            if (serverSide){
                return helper.postJsonAsync(true, "/api/tbs/rss/v1/device/folder/fetch", params);
            }else{
                return helper.postClientJsonAsync("/api/tbs/rss/v1/device/folder/fetch", params);
            }
        }
    },

    async setFolderFeed(deviceID, feedID,folderID){
        let params = {
            feed_id:feedID,
            folder_id:folderID,
            device_id:deviceID,
        }
        return helper.postClientJsonAsync("/api/tbs/rss/v1/folder/feed/add", params);
    },

    async removeFolderFeed(deviceID, feedID,folderID){
        let params = {
            feed_id:feedID,
            folder_id:folderID,
            device_id:deviceID,
        }
        return helper.postClientJsonAsync("/api/tbs/rss/v1/folder/feed/delete", params);   
    },
    
    async getFolderCount(serverSide, deviceID, folderIDs){
        let params = {
            user_type : userbiz.isUserMode() ? 2:1,
            device_id:deviceID,
            folder_ids:folderIDs,
        }
        return helper.postJsonAsync(serverSide, "/api/tbs/rss/v1/folder/feed/statics", params);
    },

    async getFolderByFeed(serverSideRequest, deviceID, folderID, order,limit, offset ){
        let params = {
            folder_id:folderID,
            device_id:deviceID,
            order:parseInt(order),
            limit:parseInt(limit),
            offset:parseInt(offset),
        }
        return helper.postJsonAsync(serverSideRequest, "/api/tbs/rss/v1/folder/feed/fetch", params);
        
    },

    async getFolderIDByFeedIDs(deviceID,feedIDs){
        let params = {
            device_id:deviceID,
            feed_ids:feedIDs,
        }

        if (userbiz.isUserMode()){
            return helper.postJsonAsync(false, "/api/tbs/rss/v2/feed/get-user-folder-id", params);
        }else{
            return helper.postJsonAsync(false, "/api/tbs/rss/v2/feed/get-device-folder-id", params);
        }
    },

    async setFolderAllRead(deviceID, folderID, readState ){
        let params = {
            device_id:deviceID,
            folder_id:folderID,
            read_state: readState,
        }
        return helper.postJsonAsync(false, "/api/tbs/rss/v1/folder/set-read-state", params);
    },

    async setFeedAllRead(deviceID, feedID, readState){
        let params = {
            user_type : userbiz.isUserMode() ? 2:1,
            device_id:deviceID,
            feed_id:feedID,
            read_state: readState,
        }
        return helper.postClientJsonAsync("/api/tbs/rss/v1/user/feed/set-read-state", params);
    },

    async getUserAllFolderStatics(deviceID){
        let params = {
            user_type : userbiz.isUserMode() ? 2:1,
            device_id:deviceID,
        }
        return helper.postClientJsonAsync("/api/tbs/rss/v1/folder/all_statics", params);
    },

    async getUserFeedStatics(deviceID, feedIDList){
        let params = {
            user_type : userbiz.isUserMode() ? 2:1,
            device_id:deviceID,
            feed_id_list:feedIDList,
        }
        return helper.postClientJsonAsync("/api/tbs/rss/v1/user/feeditem/statics", params);
    },

    async getUserFeedItemList(deviceID, feedItemID, readState, limit, offset){
        let params = {
            user_type : userbiz.isUserMode() ? 2:1,
            device_id:deviceID,
            folder_id:"0",
            limit:parseInt(limit),
            offset:parseInt(offset),
            read_state:parseInt(readState),
            hide_state:0,
            only_today : false,
            feed_id:"0",
            feed_item_id:feedItemID,
        }
        return helper.postClientJsonAsync("/api/tbs/rss/v2/user/feeditem", params);
    },

    async getUserFeedItemListByFolder(deviceID, folderID , feedItemID, readState, limit, offset){
        let params = {
            user_type : userbiz.isUserMode() ? 2:1,
            device_id:deviceID,
            folder_id:folderID,
            limit:parseInt(limit),
            offset:parseInt(offset),
            read_state:parseInt(readState),
            hide_state:0,
            only_today : false,
            feed_id:"0",
            feed_item_id:feedItemID,
        }
        return helper.postClientJsonAsync("/api/tbs/rss/v2/user/feeditem", params);
    },

    async getUserFeedItemListByFeed(deviceID, feedID, feedItemID,readState, limit, offset ){
        let params = {
            user_type : userbiz.isUserMode() ? 2:1,
            device_id:deviceID,
            folder_id:"0",
            limit:parseInt(limit),
            offset:parseInt(offset),
            read_state:parseInt(readState),
            hide_state:0,
            only_today : false,
            feed_id:feedID,
            feed_item_id:feedItemID,
        };
        // console.log(params);
        return helper.postClientJsonAsync("/api/tbs/rss/v2/user/feeditem", params);
    },

    
}