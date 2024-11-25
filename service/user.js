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

    getNickName(){
        let mstObj = helper.getMst();
        if (mstObj == null){
            return "";
        }

        if (mstObj.n != undefined && mstObj.n.length > 0){
            return mstObj.n;
        }

        return "";
    },
}