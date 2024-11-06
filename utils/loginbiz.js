import helper from "./helper"

export default {
    async getMyInfoOnline(){
        return helper.postClientJsonAsync( "/api/user/v1/token/info", {});
    }

};