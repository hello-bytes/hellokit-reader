import helper from "@/utils/helper"
import deviceType from "@/utils/deviceType"

export default {
    isMobile(){
        let userAgent = "";

        if (process.server){
            const headers = useRequestHeaders();
            userAgent = headers["user-agent"];
        }else{
            userAgent = navigator.userAgent;
        }

        return deviceType.isMobile(userAgent);
    }
}