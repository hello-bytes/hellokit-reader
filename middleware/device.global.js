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
    //console.log(context);

    /*
    const headers = useRequestHeaders();

    context.userAgent = process.server ? headers["user-agent"] : navigator.userAgent;
    // 给全局上下文添加一个属性来保存我们返回的匹配信息
    context.deviceType = deviceType(context.userAgent);
    // 这里注入到store,是因为我部分页面需要判断机型请求不同的数据,
    // 你们没有用到的话可以移除
    //context.store.commit("SetDeviceType", context.deviceType);

    // 若是判断UA非移动端的,就在这里做处理了..
    // context.redirect(status,url) 这个可以重定向到外部网站
    // 若是内部访问可以直接用router对象push
    if (context.deviceType.type === "pc") {
        // context.redirect(301,'https://wwww.baidu.com')
    }*/
}
