export default {
    retouch(deviceID, fileID, retouch,whitening){
        // /api/tbs/ali/face/retouch-skin
        var apiURL = "/api/tbs/ali/face/retouch-skin";
        var data = { file_id :fileID, device_id:deviceID};
        return helper.postClientJsonAsync(apiURL,data);
    },

    removeWatermark(deviceID, fileID){
        var apiURL = "/api/tbs/ali/gen-image/remove-water";
        var data = { file_id :fileID, device_id:deviceID};
        return helper.postClientJsonAsync(apiURL,data);
    }


}