import helper from "@/utils/helper"
import userbiz from "@/service/user.js"


export default {
    async getRssListByFile(fileID){
        let params = {
            file_id:fileID,
        }
        return helper.postJsonAsync(false,"/api/tbs/rss/import/opml/get-feeds", params);
    },

    async checkFeedURL(deviceID, feedURLs){
        let params = {
            user_type:userbiz.isUserMode() ? 2 : 1,
            device_id:deviceID,
            urls:feedURLs,    
        }
        return helper.postJsonAsync(false,"/api/tbs/rss/import/opml/check-feeds", params);
    },

    async subscribeFeedURL(deviceID, folderID, title, url, feedUrl, desc, lang){
        let params = {
            user_type:userbiz.isUserMode() ? 2 : 1,
            device_id:deviceID,

            folder_id:folderID,

            title:title,
            desc:desc,
            url:url,
            feed_url:feedUrl,
            language:lang,
        }
        return helper.postJsonAsync(false,"/api/tbs/rss/import/opml/subscribe-feed", params);
    },

    async importAllFeed(deviceID, fileID, folderID ){
        let params = {
            user_type:userbiz.isUserMode() ? 2 : 1,
            device_id:deviceID,

            folder_id:folderID,

            file_id : fileID
        }
        return helper.postJsonAsync(false,"/api/tbs/rss/import/opml/import-all", params);
    }
    
}