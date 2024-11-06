import helper from "@/utils/helper"

export default {
    clearDeviceID(){
        helper.removeK("hellokit.device.info");
    },
    
    getDeviceID(){
        let deviceInfoText = helper.getK("hellokit.device.info");
        if (deviceInfoText == ""){
            return ""
        }

        try{
            let deviceInfo = JSON.parse(deviceInfoText);
            if (deviceInfo != null){
                if (deviceInfo.deviceID != null && deviceInfo.deviceID != undefined && deviceInfo.deviceID.length > 0){
                    return deviceInfo.deviceID;
                }
            }
        }catch(e){
            // return 
            console.error(e);
        }

        return "";
    },

    async registerDevice(){
        let responseData = await helper.postClientJsonAsync("/api/tbs/memo/device/register-by-useragent", {user_agent:navigator.userAgent});
        if (helper.isResultOk(responseData)){
            let deviceID = responseData.data.device_id;
            let userAgent = responseData.data.user_agent;

            let deviceObject  = { deviceID : deviceID, userAgent:userAgent };
            helper.saveKV("hellokit.device.info", JSON.stringify(deviceObject));

            return deviceID;
        }

        return ""
    },

    async isDeviceExist(deviceID){
        let responseData = await helper.postClientJsonAsync("/api/tbs/memo/device/checkdevice", {"device_id":deviceID});
        if (helper.isResultOk(responseData)){
            return true;
        }
        return false;
    },

    async ensureDeivceExist(){
        let deviceID = this.getDeviceID();
        if (deviceID.length > 0) {
            let responseData = await helper.postClientJsonAsync("/api/tbs/memo/device/checkdevice", {"device_id":deviceID});
            if (helper.isResultOk(responseData)){
                return true;
            }else{
                if (responseData.code == 1235){
                    this.clearDeviceID();
                    await this.registerDevice();
                }
            }
        }else{
            await this.registerDevice();
        }
    }

}