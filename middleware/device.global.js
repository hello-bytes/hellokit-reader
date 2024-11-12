// @ts-nocheck
//import { deviceType } from "@/utils/deviceType";
import article from "@/service/article"

export default function (context) {
    //console.log(process);
    // @ts-ignore


    let href = context.href;
    if (href.indexOf("/app") === 0){
        // href == source url , 根据source url + view number
        article.addViewNumber(href);
    }
    
}
