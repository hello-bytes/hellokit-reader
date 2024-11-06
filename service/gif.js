import helper from "@/utils/helper"

export default {
    async getGIFInfo(deviceID,fileID){
        var apiURL = "/api/tbs/image/gif/info"
        var data = { file_id : fileID, device_id:deviceID};
        return helper.postClientJsonAsync(apiURL,data);
    },

    async downloadAllImage(deviceID,gifFileID,fileIDs){
        var apiURL = "/api/tbs/image/gif/download/images"
        var data = { gif_file_id:gifFileID, file_ids : fileIDs, device_id:deviceID,format:1};
        return helper.postClientJsonAsync(apiURL,data);
    },
}