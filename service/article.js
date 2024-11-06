import helper from "@/utils/helper"

export default {
    async queryAllPCToolList(pageNumber,pageSize){
        return this.queryToolWithFullParam([611],[],1,6,pageNumber,pageSize);
    },

    // game : 4216953072
    // baike : 2169346177
    // app : 1327590061
    async queryToolList(toolType,pageNumber,pageSize){
        return this.queryToolWithFullParam([611],[toolType],1,6,pageNumber,pageSize);
    },

    async queryToolWithFullParam(categoryIDs, tagIDs, sortType, artileType,pageNumber, pageSize){
        let params = {
            app:3,categoryids:categoryIDs,tagids:tagIDs,sort_type:sortType,
            state:1,type:artileType,
            pagenumber:pageNumber,pagesize:parseInt(pageSize)
        }
        return helper.postJsonAsync(true,"/api/article/v3/retrive",params);
    },

    async addViewNumber(sourceURL){
        let params = {
            sourceurl:sourceURL,
        }
        return helper.postJsonAsync(true,"/api/article/v2/update/viewnumber",params);
    },

    async batchGetToolMeta(toolIDs){
        let params = {
            articleids:toolIDs,
        }
        return helper.postJsonAsync(true,"/api/article/meta/v1/retrive",params);
    },

    async searchText(text, limit, offset){
        //console.log(1111111);
        
        /*let params = {
            q:text,
            limit:parseInt(limit),
            offset:parseInt(offset),
            attributesToSearchOn:["summary","title"],
        }
        const t = await useFetch('http://search.hellobit.com.cn/indexes/hellokit_webtools/search',{
                method: 'POST',
                body: params,
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': "Bearer " + "searchservicewillmakemelaunch20220817",
                },
                onResponse({ request, response, options }) {
                    console.log(response);
                    //resolve({ errorType : 0, code : 0, data :JSON.parse(response._data).data}); 
                },
        });*/
        //console.log(t);
        //console.log("he");

        let params = {
            q:text,
            limit:parseInt(limit),
            offset:parseInt(offset),
            attributesToSearchOn:["summary","title"],
        }
        return helper.searchJsonAsync("http://search.hellobit.com.cn/indexes/hellokit_webtools/search","searchservicewillmakemelaunch20220817",params);

        //$data = httpapi_post_json_auth_header(ArticleService::searchURL("/indexes/hellokit_webtools/search"), "searchservicewillmakemelaunch20220817" , $json);
    }


}