import{E as $}from"./DHo4l0ZX.js";import{a as w,r as z,s as N,b as x,d as B,m as E,l as T,p as M,f as H,c as P,E as O}from"./6YvAUdkK.js";import{E as V}from"./DV5L49Kp.js";import"./Dgw27TLR.js";import"./l0sNRNKZ.js";/* empty css        */import{_ as A,f as Q,l as g,m as y,r as k,o as n,c as h,a as t,b as o,F as U,n as j,d as L,t as i,i as _,w as a,h as m,p as q,e as G}from"./C-CnRt1-.js";import{E as C}from"./QlK9m9KZ.js";import{r as J}from"./BsnG2o04.js";import{r as R}from"./COMkZ_HI.js";import{P as K}from"./DB8_Zr74.js";import{e as W}from"./E5P-NQ8u.js";const X=Q({props:{totalCount:{type:Number,default:0},pageNumber:{type:Number,default:0},onlyShowReadLater:{type:Boolean,default:!1},readedMode:{type:Number,default:0},feedItems:{type:Array,default:[]}},components:{Check:w,Refresh:z,Select:N,Share:x,Reading:B,More:E,Link:T,Paperclip:M,FullScreen:H,CollectionTag:P,Pager:K},async asyncData(){return{}},mounted(){},methods:{notifyFeedItemChange(){this.$emit("feedItemCountChange",this.feedItems.length)},formatHumanTime(s){return g.getHumanTime(s)},showFeedItem(s){W.emit("on_popup_feeditem_content",{feed:s.feed,feedItem:s})},loadMore(){this.pageMode!=1},removeByFeedItemID(s){let d=0;for(;d<this.feedItems.length;)this.feedItems[d].feed_item_id===s?this.feedItems.splice(d,1):++d;this.notifyFeedItemChange()},async onSetFeedItemState(s,d){let p=parseInt(d),I=await J.setFeedItemReadState(y.getDeviceID(),s.feed_item_id,p);g.isResultOk(I)?this.readedMode==1?p==2&&this.removeByFeedItemID(s.feed_item_id):this.readedMode==2&&p==1&&this.removeByFeedItemID(s.feed_item_id):C.error('设置为"'+(p==1?"未读":"已读")+'"失败，请稍后再试。')},async setReadLater(s){let d=await R.setReadLater(y.getDeviceID(),s.feed_id,s.feed_item_id);g.isResultOk(d)?s.isReadLater=!0:C.error('设置“稍后阅读"失败，请稍后再试。')},async removeReadLater(s){let d=await R.removeReadLater(y.getDeviceID(),s.feed_item_id);g.isResultOk(d)?(this.onlyShowReadLater&&this.removeByFeedItemID(s.feed_item_id),s.isReadLater=!1):C.error('取消“稍后阅读"失败，请稍后再试。')},onShareArticle(){}}},"$BcdNQI5kMb"),l=s=>(q("data-v-1b37a448"),s=s(),G(),s),Y={style:{"max-width":"800px",margin:"0px auto"}},Z=l(()=>t("h2",{style:{"font-size":"34px","font-weight":"700","margin-top":"40px","margin-bottom":"10px"}},"所有文章",-1)),ee={key:0},te=["href"],se=["src"],oe={class:"feed_item_list_img_container"},ae=["src"],ne={class:"feed_item_list_content_container"},ie=["href"],_e={class:"feed_item_list_container_extra"},de={class:"feed_item_list_container_time"},le=l(()=>t("span",null," · ",-1)),ce={class:"feed_item_list_container_time"},re={class:"feed_item_list_container_desc"},fe={style:{display:"flex","margin-top":"5px"}},me={style:{height:"30px","line-height":"30px"}},he={class:"feed_item_list_container_time"},pe=l(()=>t("span",{class:"feed_item_list_container_time"}," · ",-1)),ue={class:"feed_item_list_container_time"},ve=l(()=>t("div",{style:{flex:"1"}},null,-1)),ge=["onClick"],ke=l(()=>t("span",null," ",-1)),ye=["onClick"],Ce=["onClick"],Ie=l(()=>t("span",null," ",-1)),Se=["onClick"],Le=["onClick"],Re={key:1},be={class:"feed_item_list_container"},Fe=["href"],De=["src"],$e=["href"],we={class:"feed_item_list_container_desc"},ze={style:{display:"flex","margin-top":"5px"}},Ne={style:{height:"30px","line-height":"30px"}},xe={class:"feed_item_list_container_time"},Be=l(()=>t("span",{class:"feed_item_list_container_time"}," · ",-1)),Ee={class:"feed_item_list_container_time"},Te=l(()=>t("div",{style:{flex:"1"}},null,-1)),Me=["onClick"],He=l(()=>t("span",null," ",-1)),Pe=["onClick"],Oe=["onClick"],Ve=l(()=>t("span",null," ",-1)),Ae=["onClick"],Qe=["onClick"],Ue=l(()=>t("div",{style:{height:"30px"}},null,-1));function je(s,d,p,I,qe,Ge){const b=$,S=k("Reading"),c=O,r=V,u=k("Check"),v=k("CollectionTag"),F=k("Pager");return n(),h("div",null,[t("div",Y,[Z,o(b),(n(!0),h(U,null,j(s.feedItems,(e,D)=>(n(),h("div",{key:D,class:"feed_item_root_container"},[e.thumb_url.length>0?(n(),h("div",ee,[t("div",null,[t("div",null,[e.feed!=null?(n(),h("a",{key:0,target:"_blank",href:e.feed.url,class:"feed_name_img"},[t("img",{src:e.feed.icon_url},null,8,se),L(" "+i(e.feed.name)+i(e.authorList.length>0?" · "+e.authorList[0].author_name:""),1)],8,te)):_("",!0)]),t("div",oe,[t("img",{class:"feed_item_img",src:e.thumb_url},null,8,ae),t("div",ne,[t("a",{href:"/feed-item/"+e.feed_item_id+".html",target:"_blank",class:"feed_item_list_container_title"},i(e.title),9,ie),t("div",_e,[t("span",de,i(s.formatHumanTime(e.publish_time)),1),le,t("span",ce,i(e.read_count)+"次阅读",1)]),t("p",re,i(e.desc),1),t("div",fe,[t("div",me,[t("span",he,i(s.formatHumanTime(e.publish_time)),1),pe,t("span",ue,i(e.read_count)+"次阅读",1)]),ve,o(r,{effect:"dark",content:"快速阅读此文章",placement:"top-start"},{default:a(()=>[t("div",{onClick:f=>s.showFeedItem(e),class:"svg_icon_container_mini"},[o(c,{size:20,color:"#757575"},{default:a(()=>[o(S)]),_:1})],8,ge)]),_:2},1024),ke,e.readState==1?(n(),m(r,{key:0,effect:"dark",content:"标记为已读",placement:"top-start"},{default:a(()=>[t("div",{onClick:f=>s.onSetFeedItemState(e,2),class:"svg_icon_container_mini"},[o(c,{size:20,color:"#757575"},{default:a(()=>[o(u)]),_:1})],8,ye)]),_:2},1024)):_("",!0),e.readState!=1?(n(),m(r,{key:1,effect:"dark",content:"标记为未读",placement:"top-start"},{default:a(()=>[t("div",{onClick:f=>s.onSetFeedItemState(e,1),class:"svg_icon_container_mini"},[o(c,{size:20,color:"#757575"},{default:a(()=>[o(u)]),_:1})],8,Ce)]),_:2},1024)):_("",!0),Ie,e.isReadLater?_("",!0):(n(),m(r,{key:2,effect:"dark",content:"添加到稍后阅读",placement:"top-start"},{default:a(()=>[t("div",{onClick:f=>s.setReadLater(e),class:"svg_icon_container_mini"},[o(c,{size:20,color:"#757575"},{default:a(()=>[o(v)]),_:1})],8,Se)]),_:2},1024)),e.isReadLater?(n(),m(r,{key:3,effect:"dark",content:"取消稍后阅读",placement:"top-start"},{default:a(()=>[t("div",{onClick:f=>s.removeReadLater(e),class:"svg_icon_container_mini"},[o(c,{size:20,color:"#009a61"},{default:a(()=>[o(v)]),_:1})],8,Le)]),_:2},1024)):_("",!0)])])])])])):_("",!0),e.thumb_url.length==0?(n(),h("div",Re,[t("div",be,[e.feed!=null?(n(),h("a",{key:0,target:"_blank",href:e.feed.url,class:"feed_name_img"},[t("img",{src:e.feed.icon_url},null,8,De),L(" "+i(e.feed.name)+i(e.authorList.length>0?" · "+e.authorList[0].author_name:""),1)],8,Fe)):_("",!0),t("a",{href:"/feed-item/"+e.feed_item_id+".html",target:"_blank",class:"feed_item_list_container_title"},i(e.title),9,$e),t("p",we,i(e.desc),1)]),t("div",ze,[t("div",Ne,[t("span",xe,i(s.formatHumanTime(e.publish_time)),1),Be,t("span",Ee,i(e.read_count)+"次阅读",1)]),Te,o(r,{effect:"dark",content:"快速阅读此文章",placement:"top-start"},{default:a(()=>[t("div",{onClick:f=>s.showFeedItem(e),class:"svg_icon_container_mini"},[o(c,{size:20,color:"#757575"},{default:a(()=>[o(S)]),_:1})],8,Me)]),_:2},1024),He,e.readState==1?(n(),m(r,{key:0,effect:"dark",content:"标记为已读",placement:"top-start"},{default:a(()=>[t("div",{onClick:f=>s.onSetFeedItemState(e,2),class:"svg_icon_container_mini"},[o(c,{size:20,color:"#757575"},{default:a(()=>[o(u)]),_:1})],8,Pe)]),_:2},1024)):_("",!0),e.readState!=1?(n(),m(r,{key:1,effect:"dark",content:"标记为未读",placement:"top-start"},{default:a(()=>[t("div",{onClick:f=>s.onSetFeedItemState(e,1),class:"svg_icon_container_mini"},[o(c,{size:20,color:"#757575"},{default:a(()=>[o(u)]),_:1})],8,Oe)]),_:2},1024)):_("",!0),Ve,e.isReadLater?_("",!0):(n(),m(r,{key:2,effect:"dark",content:"添加到稍后阅读",placement:"top-start"},{default:a(()=>[t("div",{onClick:f=>s.setReadLater(e),class:"svg_icon_container_mini"},[o(c,{size:20,color:"#757575"},{default:a(()=>[o(v)]),_:1})],8,Ae)]),_:2},1024)),e.isReadLater?(n(),m(r,{key:3,effect:"dark",content:"取消稍后阅读",placement:"top-start"},{default:a(()=>[t("div",{onClick:f=>s.removeReadLater(e),class:"svg_icon_container_mini"},[o(c,{size:20,color:"#009a61"},{default:a(()=>[o(v)]),_:1})],8,Qe)]),_:2},1024)):_("",!0)])])):_("",!0)]))),128)),o(F,{baseURL:"/feed-item/page",activeIndex:s.pageNumber,totalCount:s.totalCount},null,8,["activeIndex","totalCount"]),Ue])])}const it=A(X,[["render",je],["__scopeId","data-v-1b37a448"]]);export{it as F};
