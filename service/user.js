import helper from "@/utils/helper"

export default {
    // 用户已经登录
    isUserMode(deviceID,fileID){
        return helper.getUserToken().length > 0;  
    },

    // 用户未登录，使用设备标识操作
    isDeviceMode(deviceID,fileID){
        return helper.getUserToken().length == 0;
    },
}