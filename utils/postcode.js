import helper from "./helper"
const povinceList = ["湖北省","湖南省","河北省","山西省","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","广东省","海南省","四川省","贵州省","云南省","陕西省","甘肃省","青海省","台湾省","内蒙古自治区","广西壮族自治区","西藏自治区","宁夏回族自治区","新疆维吾尔自治区"];
export default {
    allProvince(){
        return povinceList;
    },

    async queryPostCode(province, city,zone,text, limit, offset){
        let t = {province:province,city:city,zone:zone,area:text,limit:parseInt(limit),offset:parseInt(offset)}
        return helper.postClientJsonAsync("/api/tbs/postcode/query", t);
    },

    async queryDistantPostCode(province,city,zone,text, limit, offset){
        return helper.postClientJsonAsync("/api/tbs/distant_postcode/query", {province:province,city:city,zone:zone,area:text,limit:parseInt(limit),offset:parseInt(offset)});
    },

    async queryAreaByPostCode(postCode, limit, offset){
        return helper.postClientJsonAsync("/api/tbs/postcode/area/query", {postcode:postCode,limit:parseInt(limit),offset:parseInt(offset)});
    },

    async serverQueryAreaByPostCode(postCode, limit, offset){
        return helper.postJsonAsync(true,"/api/tbs/postcode/area/query", {postcode:postCode,limit:parseInt(limit),offset:parseInt(offset)});
    },

    async serverQueryCityByProvince(province){
        return helper.postJsonAsync(true,"/api/tbs/postcode/province/postcode", {province:province});
    }

    
    
};