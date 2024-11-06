import helper from "@/utils/helper"

export default {
    async optimizePDF(deviceID,fileID,userPwd,ownerPwd){
        var apiURL = "/api/tbs/pdf/optimize"
        var data = { file_id : fileID, device_id:deviceID,user_pwd:userPwd,owner_pwd:ownerPwd};
        return helper.postClientJsonAsync(apiURL,data);
    },

    async setPDFPassword(deviceID,fileID,userPwd,ownerPwd,method, bitCount){
        var apiURL = "/api/tbs/pdf/encrypt"
        var data = { file_id : fileID, device_id:deviceID,user_pwd:userPwd,owner_pwd:ownerPwd,
                            encrypt_method:method,encrypt_key_len:parseInt(bitCount)};
        return helper.postClientJsonAsync(apiURL,data);
    },

    
}