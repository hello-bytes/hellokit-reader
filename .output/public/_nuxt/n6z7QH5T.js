import{g as O,u as H,_ as U,f as $,c as k,b as s,w as i,a,h as L,i as w,t as f,j as M,k as b,l as m,m as g,r as v,o as l,d as S,p as N,e as V}from"./C-CnRt1-.js";import{c as A,E as G}from"./6YvAUdkK.js";import{E as j}from"./DV5L49Kp.js";import{L as q,R as P,a as X,O as J,_ as K}from"./CsCV2opV.js";import{E as Q}from"./CEsXEh1n.js";import"./Dgw27TLR.js";import"./l0sNRNKZ.js";/* empty css        */import{E as R}from"./QlK9m9KZ.js";import{r as T}from"./BsnG2o04.js";import{f as W,r as y}from"./COMkZ_HI.js";import{C as Y}from"./C5b8Xb7v.js";import"./Bj0pkxMM.js";import"./CzGcHTJI.js";import"./D0VbZ-8h.js";import"./B0qXuZwe.js";import"./CX7TpRRJ.js";import"./Bp3YSIOJ.js";import"./B6AwB7wT.js";import"./C2nhIFex.js";const Z=e=>{const t=Object.create(null);for(const n in e){const o=e[n];o!==void 0&&(t[n]=o)}return t},x=(e,t)=>(n,o)=>(H(()=>e({...Z(n),...o.attrs},o)),()=>{var r,c;return t?(c=(r=o.slots).default)==null?void 0:c.call(r):null}),ee=O({name:"Title",inheritAttrs:!1,setup:x((e,{slots:t})=>{var n,o,r;return{title:((r=(o=(n=t.default)==null?void 0:n.call(t))==null?void 0:o[0])==null?void 0:r.children)||null}})}),te=O({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var n,o;return(o=(n=t.slots).default)==null?void 0:o.call(n)}}),oe=$({components:{CollectionTag:A,LinkIcon:q,ReadLaterIcon:P,ReadLaterFillIcon:X,OutLinkIcon:J},async asyncData(){let e,t;const n=M();let o=null,r=n.params.feed_item_id,c=([e,t]=b(()=>T.getFeedItemByID(r)),e=await e,t(),e);m.isResultOk(c)&&(o=c.data);let p=null;if(o!=null){let _=([e,t]=b(()=>T.queryFeedByIDs(!0,[o.feed_id])),e=await e,t(),e);if(m.isResultOk(_)){let u=_.data.list;u.length==1&&(p=u[0])}}return{feed:p,feedItem:o,isReadLater:!1,title:o.title}},mounted(){this.loadReadLater(),W.increaseFeedItemReadCount(!1,this.feedItem.feed_item_id)},methods:{formatTime(e){return m.getHumanTime(e)},async loadReadLater(){let e=await y.getReadLaterByFeedItems(g.getDeviceID(),[this.feedItem.feed_item_id]);m.isResultOk(e)&&e.data.length==1&&(this.isReadLater=!0)},async setReadLater(){let e=await y.setReadLater(g.getDeviceID(),this.feedItem.feed_id,this.feedItem.feed_item_id);m.isResultOk(e)?this.isReadLater=!0:R.error('设置“稍后阅读"失败，请稍后再试。')},async removeReadLater(){let e=await y.removeReadLater(g.getDeviceID(),this.feedItem.feed_item_id);m.isResultOk(e)?this.isReadLater=!1:R.error('取消“稍后阅读"失败，请稍后再试。')},async copyURL(){const{toClipboard:e}=Y();try{let t="https://reader.hellokit.com.cn/feed-item/"+this.feedItem.feed_item_id+".html";await e(t),R({message:"文章地址已复制到剪贴板。",type:"success"})}catch{R.error("复制失败，可能您的浏览器不支持复制。")}},onGotoSourceURL(){window.location.href=this.feedItem.feed_url},readSource(){this.onGotoSourceURL()}}},"$xaS4HCtq1X"),C=e=>(N("data-v-687dd144"),e=e(),V(),e),ae={style:{"background-color":"white"}},ne={style:{height:"50px","border-bottom":"1px solid #eee"}},se={class:"content_wrapper",style:{"padding-top":"3px",display:"flex"}},ie=C(()=>a("div",{style:{flex:"1"}},null,-1)),re={class:"content_wrapper",style:{"margin-top":"20px"}},de={class:"feed_item_container_title"},le=["href"],ce=C(()=>a("p",{class:"feed_item_container_time"},"  ·  ",-1)),me={class:"feed_item_container_time"},fe=C(()=>a("p",{class:"feed_item_container_time"},"  ·  ",-1)),pe={class:"feed_item_container_time"},_e={class:"article_content_container"},ue=["innerHTML"],he={key:3},Ie={style:{"padding-top":"40px","padding-bottom":"40px","text-align":"center"}};function Le(e,t,n,o,r,c){const p=ee,_=te,u=v("ReadLaterIcon"),h=G,I=j,B=v("ReadLaterFillIcon"),E=v("LinkIcon"),z=v("OutLinkIcon"),D=K,F=Q;return l(),k("div",ae,[s(_,null,{default:i(()=>[s(p,null,{default:i(()=>[S(f(e.title)+" - 深度探索你的兴趣世界 - https://reader.hellokit.cn/",1)]),_:1})]),_:1}),a("div",ne,[a("div",se,[e.isReadLater?w("",!0):(l(),L(I,{key:0,effect:"dark",content:"添加到稍后阅读",placement:"top-start"},{default:i(()=>[a("div",{onClick:t[0]||(t[0]=(...d)=>e.setReadLater&&e.setReadLater(...d)),class:"svg_icon_container"},[s(h,{size:20,color:"#757575"},{default:i(()=>[s(u)]),_:1})])]),_:1})),e.isReadLater?(l(),L(I,{key:1,effect:"dark",content:"取消稍后阅读",placement:"top-start"},{default:i(()=>[a("div",{onClick:t[1]||(t[1]=(...d)=>e.removeReadLater&&e.removeReadLater(...d)),class:"svg_icon_container"},[s(h,{size:20,color:"#009a61"},{default:i(()=>[s(B)]),_:1})])]),_:1})):w("",!0),s(I,{effect:"dark",content:"复制文章链接",placement:"top-start",style:{"margin-left":"5px"}},{default:i(()=>[a("div",{onClick:t[2]||(t[2]=(...d)=>e.copyURL&&e.copyURL(...d)),class:"svg_icon_container"},[s(h,{size:20,color:"#009a61"},{default:i(()=>[s(E)]),_:1})])]),_:1}),ie,s(I,{effect:"dark",content:"阅读原文",placement:"top-start",style:{"margin-left":"5px"}},{default:i(()=>[a("div",{onClick:t[3]||(t[3]=(...d)=>e.readSource&&e.readSource(...d)),class:"svg_icon_container"},[s(h,{size:20,color:"#009a61"},{default:i(()=>[s(z)]),_:1})])]),_:1})])]),a("div",re,[a("div",null,[a("p",de,f(e.feedItem.title),1),a("div",null,[a("a",{href:e.feed!=null?e.feed.url:"",class:"feed_item_container_time"},f(e.feed!=null?e.feed.name:""),9,le),ce,a("p",me,f(e.formatTime(e.feedItem.publish_time)),1),fe,a("p",pe,f(e.feedItem.read_count)+"次阅读",1)])]),a("div",_e,[e.feedItem.content.length>0&&e.feed.content_format==1?(l(),k("div",{key:0,innerHTML:e.feedItem.content,tag:"article"},null,8,ue)):e.feedItem.content.length>0&&e.feed.content_format==2?(l(),L(D,{key:1,value:e.feedItem.content,tag:"div",class:"feed_article_container"},null,8,["value"])):e.feedItem.desc.length>0?(l(),L(D,{key:2,value:e.feedItem.desc,tag:"div",class:"feed_article_container"},null,8,["value"])):(l(),k("div",he))]),a("div",Ie,[s(F,{onClick:e.onGotoSourceURL,size:"large",style:{width:"100%"}},{default:i(()=>[S("访问网页原始链接")]),_:1},8,["onClick"])])])])}const Ne=U(oe,[["render",Le],["__scopeId","data-v-687dd144"]]);export{Ne as default};
