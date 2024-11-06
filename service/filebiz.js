import helper from "@/utils/helper"

const textFileExt = ["txt","md"];
const codeFileExt = ["html","js","css","h","go","java","hpp","cpp","vue","php"];
const imageFileExt = ["png", "jpeg","bmp", "jpg", "webp" ];
const pdfFileExt = ["pdf"];
const videoFileExt = ["mp4","mkv","avi","mov","mpeg","mpg","3gp","wmv","asf"];
const torrentExt = ["torrent"];
export default {

    async getFileSignUrl(deviceID,fileID){
        var apiURL = "/api/tbs/v2/file/download"
        //var apiURL = "http://localhost:9016/api/v2/file/upload"
        var data = { fileID : fileID, deviceID:deviceID};
        return helper.postClientJsonAsync(apiURL,data);
    },

    async getFileDetail(deviceID, fileID){
        var apiURL = "/api/tbs/v1/device-file/fetch";
        //var apiURL = "http://localhost:9016/api/v2/file/upload"
        var data = { file_ids :[fileID+""], device_id:deviceID};
        return helper.postClientJsonAsync(apiURL,data);
    },

    async getFileDownloadUrl(deviceID,fileID){
        var apiURL = "/api/tbs/v3/file/download"
        //var apiURL = "http://localhost:9016/api/v2/file/upload"
        var data = { fileID : fileID+"", deviceID:deviceID};
        return helper.postClientJsonAsync(apiURL,data);
    },

    async getFileList(deviceID, limit, offset){
        var apiURL = "/api/tbs/v1/device-file/query";
        //var apiURL = "http://localhost:9016/api/v2/file/upload"
        var data = { file_type :3, device_id:deviceID,limit:parseInt(limit),offset:parseInt(offset)};
        return helper.postClientJsonAsync(apiURL,data);
    },

    async deleteDeviceFile(deviceID, fileID){
        var apiURL = "/api/tbs/v1/device-file/delete";
        var data = { file_ids :fileID, device_id:deviceID};
        return helper.postClientJsonAsync(apiURL,data);
    },

    async getTorrentFileInfo(deviceID, fileID){
        var apiURL = "/api/tbs/filereader/torrent/info";
        var data = { file_id :fileID, device_id:deviceID};
        return helper.postClientJsonAsync(apiURL,data);
    },
    

    getFileExt(fileName){
        let ext = "";
        let index = fileName.lastIndexOf(".");
        if (index >= 0){
            ext = fileName.substring(index+1);
            ext = ext.toLowerCase();
        }
        return ext;
    },

    isTextFile(ext){
        for(var index in  textFileExt){
            if(textFileExt[index] == ext){
                return true;
            }
        }
        return false;
    },

    isCodeFile(ext){
        for(var index in  codeFileExt){
            if(codeFileExt[index] == ext){
                return true;
            }
        }
        return false;
        
    },

    isImageFile(ext){
        for(var index in  imageFileExt){
            if(imageFileExt[index] == ext){
                return true;
            }
        }
        return false;
    },

    isPdfFile(ext){
        for(var index in  pdfFileExt){
            if(pdfFileExt[index] == ext){
                return true;
            }
        }
        return false;   
    },

    isVideoFile(ext){
        for(var index in  videoFileExt){
            if(videoFileExt[index] == ext){
                return true;
            }
        }
        return false;   
    },

    isTorrentFile(ext){
        for(var index in  torrentExt){
            if(torrentExt[index] == ext){
                return true;
            }
        }
        return false;
    },

    gotoFileViewURL(fileID,fileName){
        let fileExt = this.getFileExt(fileName);
        if (this.isTextFile(fileExt)){
            return "/fileview/text/" + fileID;
        }else if(this.isCodeFile(fileExt)){
            return "/fileview/code/" + fileID;
        }else if(this.isImageFile(fileExt)){
            return  "/fileview/image/" + fileID;
        }else if(this.isPdfFile(fileExt)){
            return  "/fileview/pdf/" + fileID;
        }else if(this.isVideoFile(fileExt)){
            return  "/fileview/video/" + fileID;
        }else if(this.isTorrentFile(fileExt)){
            return  "/fileview/torrent/" + fileID;
        }else{
            return  "/fileview/raw/" + fileID;
        }
    }
}
