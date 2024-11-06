import helper from "@/utils/helper"

export default {
    async getQRText(deviceID,fileID){
        var apiURL = "/api/tbs/v1/qrcode/scan"
        var data = { file_id : fileID, device_id:deviceID};
        return helper.postClientJsonAsync(apiURL,data);
    },
}