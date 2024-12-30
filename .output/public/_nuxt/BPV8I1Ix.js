import{E as S,a as T}from"./Cvk2ZZhH.js";import{g as E,a6 as B,y as N,J as A,C as D,o as l,h,w as a,v as V,a as o,s as r,z as e,G as z,i as _,c as d,A as g,d as p,t as y,F as P,b as n,x as F,$ as G,_ as J,f as L,m as O}from"./C-CnRt1-.js";import{E as C}from"./6YvAUdkK.js";import{b as Z,_ as j,w as q}from"./Dgw27TLR.js";import{k as H}from"./CX7TpRRJ.js";import{T as $,a as K}from"./B0qXuZwe.js";import"./DV5L49Kp.js";import"./CEsXEh1n.js";/* empty css        */import{b as Q}from"./COUvPMHV.js";import{C as R}from"./C5b8Xb7v.js";import{E as w}from"./QlK9m9KZ.js";import"./Bj0pkxMM.js";import"./CzGcHTJI.js";import"./D0VbZ-8h.js";import"./C2nhIFex.js";import"./Bp3YSIOJ.js";const U=["light","dark"],W=Z({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:H($),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:U,default:"light"}}),X={close:i=>i instanceof MouseEvent},Y=E({name:"ElAlert"}),x=E({...Y,props:W,emits:X,setup(i,{emit:v}){const f=i,{Close:k}=K,b=B(),s=N("alert"),c=A(!0),m=D(()=>$[f.type]),u=D(()=>[s.e("icon"),{[s.is("big")]:!!f.description||!!b.default}]),M=D(()=>({"with-description":f.description||b.default})),I=t=>{c.value=!1,v("close",t)};return(t,ue)=>(l(),h(G,{name:e(s).b("fade"),persisted:""},{default:a(()=>[V(o("div",{class:r([e(s).b(),e(s).m(t.type),e(s).is("center",t.center),e(s).is(t.effect)]),role:"alert"},[t.showIcon&&e(m)?(l(),h(e(C),{key:0,class:r(e(u))},{default:a(()=>[(l(),h(z(e(m))))]),_:1},8,["class"])):_("v-if",!0),o("div",{class:r(e(s).e("content"))},[t.title||t.$slots.title?(l(),d("span",{key:0,class:r([e(s).e("title"),e(M)])},[g(t.$slots,"title",{},()=>[p(y(t.title),1)])],2)):_("v-if",!0),t.$slots.default||t.description?(l(),d("p",{key:1,class:r(e(s).e("description"))},[g(t.$slots,"default",{},()=>[p(y(t.description),1)])],2)):_("v-if",!0),t.closable?(l(),d(P,{key:2},[t.closeText?(l(),d("div",{key:0,class:r([e(s).e("close-btn"),e(s).is("customed")]),onClick:I},y(t.closeText),3)):(l(),h(e(C),{key:1,class:r(e(s).e("close-btn")),onClick:I},{default:a(()=>[n(e(k))]),_:1},8,["class"]))],64)):_("v-if",!0)],2)],2),[[F,c.value]])]),_:3},8,["name"]))}});var ee=j(x,[["__file","alert.vue"]]);const te=q(ee),se=L({async asyncData(){return{isMobile:Q.isMobile(),deviceID:""}},mounted(){this.deviceID=O.getDeviceID()},methods:{async copyDeviceID(){const{toClipboard:i}=R();try{await i(this.deviceID),w({message:"已复制到剪贴板。",type:"success"})}catch{w.error("复制失败，可能您的浏览器不支持复制。")}},resetDeviceID(){}}},"$2gZ6cnc9TE"),oe=o("div",{class:"tool_title_wrapper"},[o("h1",null,"设备信息")],-1),ie=o("h3",null,"设备唯一ID",-1),le={style:{display:"flex","align-items":"center","margin-bottom":"20px"}},ne=o("span",null,"  ",-1),ae=o("span",null,"  ",-1),ce=o("div",{style:{height:"20px"}},null,-1),re=o("div",{style:{height:"25px"}},null,-1),pe=o("h3",null,"我的数据",-1),de=o("br",null,null,-1),fe=o("br",null,null,-1);function me(i,v,f,k,b,s){const c=S,m=T,u=te;return l(),d("div",{style:{"background-color":"white"},class:r({pc_tr_container:!i.isMobile,pc_default_inner:!i.isMobile,pc_default_container:!i.isMobile,mobile_tr_container:i.isMobile})},[oe,ie,o("div",le,[o("span",null,y(i.deviceID),1),ne,n(c,{type:"primary",onClick:i.copyDeviceID},{default:a(()=>[p("复制设备ID")]),_:1},8,["onClick"]),ae,n(m,{title:"重置后，与当前设备ID相关的数据，都会丢失，请确认此风险！","confirm-button-text":"确认，需要重置","cancel-button-text":"取消",width:"300"},{reference:a(()=>[n(c,{onClick:i.resetDeviceID},{default:a(()=>[p("重置设备ID")]),_:1},8,["onClick"])]),_:1})]),n(u,{"show-icon":"",title:"关于设备ID",description:"哈喽工具箱为您的设备（浏览器）生成一个维一ID，在此设备上使用哈喽工具箱期间，产生的所有数据（比如您上传的文件），都和此ID关联。",type:"info",closable:!1}),ce,n(u,{title:"建议登录",type:"warning",description:"此设备ID不是稳定的，受限于浏览器本身的机制及用户使用习惯。比如卸载浏览器、清理浏览器缓存等操作可能导致此设备ID丢失。此设备ID丢失后您将无法访问之前的数据。","show-icon":"",closable:!1}),re,pe,n(c,{href:"https://memo.hellokit.com.cn/"},{default:a(()=>[p("备忘录数据")]),_:1}),de,n(c,{href:"https://hellokit.com.cn/anhao/send/text"},{default:a(()=>[p("暗号应用数据")]),_:1}),fe,n(c,{href:"https://hellokit.com.cn/fileview/all"},{default:a(()=>[p("万能文件查看器")]),_:1})],2)}const Ne=J(se,[["render",me]]);export{Ne as default};
