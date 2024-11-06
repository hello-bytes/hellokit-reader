import helper from "@/utils/helper"

export default {
    async getMacInfo(deviceID,macAddr){
        var apiURL = "/api/tbs/v1/mac_query/get"
        var data = { mac : macAddr, device_id:deviceID};
        return helper.postClientJsonAsync(apiURL,data);
    },
}