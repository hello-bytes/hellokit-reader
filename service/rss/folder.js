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
    
    async getFolderCount(serverSide,folderIDs){
        let params = {
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
    }    
}