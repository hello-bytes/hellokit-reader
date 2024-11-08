export default {
    getHttpClientBaseUrl(){
        return "https://www.hellokit.com.cn"
    },

    wrapURL(url){
        if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0){
            return url;    
        }

        return this.getHttpClientBaseUrl() + url;
    },

    getRandomInt() {
        let len = 8;//len || 32;
        var $chars = '123456789';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },
    
    getCookie(name){
        var cookies = document.cookie ? document.cookie.split('; ') : []
        let val = "";
        for (var i = 0; i < cookies.length; i++) {
            var parts = cookies[i].split('=')
            var value = parts.slice(1).join('=')
            try {
                var found = decodeURIComponent(parts[0]);
                if (name === found) {
                    val = decodeURIComponent(value);
                    break
                }
            } catch (e) {
                // 
            }
        }
        return val;
    },
    
    getMst(){
        let mstText = this.getCookie("mst");
        if(mstText != "" || mstText != null && mstText != undefined){
            try{
                let mstObj = JSON.parse(mstText);
                return mstObj
            }catch(err){
                // 
            }
        }
        return null;
    },

    getUserToken(){
        let mst = this.getMst();
        if(mst != null && mst != undefined){
            if(mst.t != null && mst.t != undefined && mst.t.length > 0){
                return mst.t;
            }
        }
        return "";
    },

    async getHttpAsync(url){
        return new Promise((resolve, reject) => {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET",url,true);
            xmlHttp.onreadystatechange = function(){
                if (xmlHttp.readyState == 4) {
                    if (xmlHttp.status == 200) {
                        resolve({ errorType : 0, code : 0, data : xmlHttp.responseText });
                        //reject({ errorType : 1, code : result.status.code, data : result.data });
                        //callback(200, xmlHttp.responseText);
                    }else{
                        reject({ errorType : 1, code : xmlHttp.status, data : "" });
                        //callback(xmlHttp.status, null);
                    }
                }
            };
            
            xmlHttp.send();
        });
        
    },

    // ===================== 网络请求 =========================
    async postClientJsonAsync(url, data){
        return new Promise((resolve, reject) => {
            //url = this.wrapURL(url);
            //console.log(url);

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("POST",url,true);

            let token = this.getUserToken();
            xmlHttp.setRequestHeader("hbs-tk",token);

            xmlHttp.onreadystatechange = function(){
                if (xmlHttp.readyState == 4) {
                    if (xmlHttp.status == 200) {
                        let result = JSON.parse(xmlHttp.responseText);
                        if(result != null && result.code == 0){
                            resolve({ errorType : 0, code : 0, data : result.data });
                        }else{
                            resolve({ errorType : 1, code : result.code, data : result.data });
                        }
                    }else{
                        resolve({ errorType : 2, code : xmlHttp.status, data : null });
                    }
                }
            };
            xmlHttp.send(JSON.stringify(data));
        })
    },

    
    async postJsonAsync(serverSideRequest,url, requestData){
        if (!serverSideRequest){
            return this.postClientJsonAsync(url ,requestData);
        }

        console.log(url);
        return new Promise((resolve, reject) => {
            let token = ""
            useFetch(url, {
                method: 'POST',
                server: true,
                body: requestData,
                headers: {
                    'Content-Type': 'application/json',
                    'hbs-tk': token,
                },

                onRequest({ request, options }) {
                },

                onRequestError({ request, options, error }) {
                },

                onResponse({ request, response, options }) {
                    resolve({ errorType : 0, code : 0, data :JSON.parse(response._data).data}); 
                },

                onResponseError({ request, response, options }) {
                    // 处理响应错误
                    resolve({ errorType : 1, code : 500, data :null}); 
                }
            });            
        });
    },

    async searchJsonAsync(url, token, requestData){
        return new Promise((resolve, reject) => {    
            useFetch(url, {
                method: 'POST',
                body: requestData,
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': "Bearer " + token,
                },

                onRequest({ request, options }) {
                },

                onRequestError({ request, options, error }) {
                },

                onResponse({ request, response, options }) {
                    //console.log("onResponse========");
                    //console.log("data : " + response._data);
                    // try{
                    //     // console.log(JSON.parse(response._data)); 
                    // }catch(e){
                    //     console.log(err);
                    //     console.log("----------");
                    // }
                    try{
                        resolve({ errorType : 0, code : 0, data : response._data}); 
                    }catch(e){
                        resolve({ errorType : 1, code : 500, data :null}); 
                    }
                },

                onResponseError({ request, response, options }) {
                    // 处理响应错误
                    //console.log("==aaaaaa======");
                    resolve({ errorType : 1, code : 500, data :null}); 
                }
            });            
        });
    }, 


    isResultOk(result){
        if(result == null || result == undefined){
            return false;
        }

        if(result.errorType == 0 && result.code == 0){
            return true;
        }

        return false;
    },
    // ===================== 网络请求 =========================

    // ===================== 容量单位转换 =========================
    /* 求次幂
        num = 1 代表 1024
        num = 2 代表 1024*1024
        num = 3 代表 1024*1024*1024 依次类推*/
    pow1024(num) {
        return Math.pow(1024, num)
    },

    getByteLen(val) {
        var len = 0;
        for (var i = 0; i < val.length; i++) {
            var a = val.charAt(i);
            if (a.match(/[^\x00-\xff]/ig) != null) {
                len += 2;
            }
            else {
                len += 1;
            }
        }
        return len;
    },
    getByteText(size) {
        if (!size) return '0 B'
        if (size < this.pow1024(1)) return size + ' B'
        if (size < this.pow1024(2)) return (size / this.pow1024(1)).toFixed(2) + ' KB'
        if (size < this.pow1024(3)) return (size / this.pow1024(2)).toFixed(2) + ' MB'
        if (size < this.pow1024(4)) return (size / this.pow1024(3)).toFixed(2) + ' GB'
        return (size / this.pow1024(4)).toFixed(2) + ' TB'
    },
    // ===================== 容量单位转换 =========================

    saveKV(key, val){
        localStorage.setItem(key, val);
    },
    
    getK(key){
        var t = localStorage.getItem(key);
        if (t == undefined){
            return ""
        }
        return t
    },
    
    removeK(key){
        localStorage.removeItem(key);
    },

    isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        return flag;
    },

    async getToolInfo(toolID){
        let responseData = await this.postJsonAsync("/api/article/v2/get",{articleid:parseInt(toolID)});
        //console.log(responseData);
        if(!this.isResultOk(responseData)){
            return null;
        }
        return responseData.data;
    },

    async getUploadFileSignParam(deviceID,fileName,fileSize){
        var apiURL = "/api/tbs/v2/file/upload"
        //var apiURL = "http://localhost:9016/api/v2/file/upload"
        var data = { fileType : 3,fileName : fileName,fileSize :  fileSize,token:deviceID};
        return this.postClientJsonAsync(apiURL,data);
    },

    async getUploadFileSignParamV2(fileType, deviceID,fileName,fileSize){
        var apiURL = "/api/tbs/v2/file/upload"
        //var apiURL = "http://localhost:9016/api/v2/file/upload"
        var data = { fileType : parseInt(fileType),fileName : fileName,fileSize :  fileSize,token:deviceID};
        return this.postClientJsonAsync(apiURL,data);
    },

    dateFormat(fmt, date) {
        var ret = ""
        const opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "m+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "M+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    },
    
    getHumanTime(date){
        var thisDate = new Date(date)
        //thisDate.setHours(thisDate.getHours())
        return this.dateFormat("YYYY-mm-dd HH:MM:SS",thisDate)
    },
    
    getHumanTimeEx(dateObj){
        return this.dateFormat("YYYY-mm-dd HH:MM:SS",dateObj)
    },

    formatFileSize(fileSize){
        if(fileSize > 1024 * 1024 * 1024){
            return (fileSize / (1024 * 1024 * 1024)).toFixed(2) + " GB"
        }
        if(fileSize > 1024 * 1024){
            return (fileSize / (1024 * 1024)).toFixed(2) + " MB"
        }
        if(fileSize > 1024){
            return (fileSize / 1024).toFixed(2) + " KB"
        }
        return fileSize + " B"
    },
}
