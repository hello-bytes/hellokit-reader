import{r as x,s as Q}from"./Bj0pkxMM.js";import{g as k,L as q,y as F,J as i,C as L,Q as Z,S as j,o as P,h as A,w as G,v as ee,a as M,s as R,z as y,B as O,x as te,$ as ae,a0 as le,c as I,b as K,F as oe,a5 as C,P as U,a1 as X,R as se,W as re,ba as ne,a9 as ie,bb as ce,A as ue,G as ve,i as fe,a2 as me}from"./C-CnRt1-.js";import{b as W,_ as $,d as de,w as pe}from"./Dgw27TLR.js";import{t as he}from"./Cq9Fpw4b.js";import{u as be}from"./DV5L49Kp.js";import{H as Y}from"./6YvAUdkK.js";const H=4,ye={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Se=({move:S,size:c,bar:r})=>({[r.size]:c,transform:`translate${r.axis}(${S}%)`}),D=Symbol("scrollbarContextKey"),ge=W({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),we="Thumb",ze=k({__name:"thumb",props:ge,setup(S){const c=S,r=q(D),l=F("scrollbar");r||he(we,"can not inject scrollbar context");const n=i(),u=i(),m=i({}),d=i(!1);let f=!1,p=!1,a=le?document.onselectstart:null;const t=L(()=>ye[c.vertical?"vertical":"horizontal"]),o=L(()=>Se({size:c.size,move:c.move,bar:t.value})),v=L(()=>n.value[t.value.offset]**2/r.wrapElement[t.value.scrollSize]/c.ratio/u.value[t.value.offset]),h=s=>{var _;if(s.stopPropagation(),s.ctrlKey||[1,2].includes(s.button))return;(_=window.getSelection())==null||_.removeAllRanges(),w(s);const T=s.currentTarget;T&&(m.value[t.value.axis]=T[t.value.offset]-(s[t.value.client]-T.getBoundingClientRect()[t.value.direction]))},E=s=>{if(!u.value||!n.value||!r.wrapElement)return;const _=Math.abs(s.target.getBoundingClientRect()[t.value.direction]-s[t.value.client]),T=u.value[t.value.offset]/2,N=(_-T)*100*v.value/n.value[t.value.offset];r.wrapElement[t.value.scroll]=N*r.wrapElement[t.value.scrollSize]/100},w=s=>{s.stopImmediatePropagation(),f=!0,document.addEventListener("mousemove",g),document.addEventListener("mouseup",b),a=document.onselectstart,document.onselectstart=()=>!1},g=s=>{if(!n.value||!u.value||f===!1)return;const _=m.value[t.value.axis];if(!_)return;const T=(n.value.getBoundingClientRect()[t.value.direction]-s[t.value.client])*-1,N=u.value[t.value.offset]-_,J=(T-N)*100*v.value/n.value[t.value.offset];r.wrapElement[t.value.scroll]=J*r.wrapElement[t.value.scrollSize]/100},b=()=>{f=!1,m.value[t.value.axis]=0,document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",b),e(),p&&(d.value=!1)},B=()=>{p=!1,d.value=!!c.size},z=()=>{p=!0,d.value=f};Z(()=>{e(),document.removeEventListener("mouseup",b)});const e=()=>{document.onselectstart!==a&&(document.onselectstart=a)};return x(j(r,"scrollbarElement"),"mousemove",B),x(j(r,"scrollbarElement"),"mouseleave",z),(s,_)=>(P(),A(ae,{name:y(l).b("fade"),persisted:""},{default:G(()=>[ee(M("div",{ref_key:"instance",ref:n,class:R([y(l).e("bar"),y(l).is(y(t).key)]),onMousedown:E},[M("div",{ref_key:"thumb",ref:u,class:R(y(l).e("thumb")),style:O(y(o)),onMousedown:h},null,38)],34),[[te,s.always||d.value]])]),_:1},8,["name"]))}});var V=$(ze,[["__file","thumb.vue"]]);const _e=W({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Ee=k({__name:"bar",props:_e,setup(S,{expose:c}){const r=S,l=q(D),n=i(0),u=i(0),m=i(""),d=i(""),f=i(1),p=i(1);return c({handleScroll:o=>{if(o){const v=o.offsetHeight-H,h=o.offsetWidth-H;u.value=o.scrollTop*100/v*f.value,n.value=o.scrollLeft*100/h*p.value}},update:()=>{const o=l==null?void 0:l.wrapElement;if(!o)return;const v=o.offsetHeight-H,h=o.offsetWidth-H,E=v**2/o.scrollHeight,w=h**2/o.scrollWidth,g=Math.max(E,r.minSize),b=Math.max(w,r.minSize);f.value=E/(v-E)/(g/(v-g)),p.value=w/(h-w)/(b/(h-b)),d.value=g+H<v?`${g}px`:"",m.value=b+H<h?`${b}px`:""}}),(o,v)=>(P(),I(oe,null,[K(V,{move:n.value,ratio:p.value,size:m.value,always:o.always},null,8,["move","ratio","size","always"]),K(V,{move:u.value,ratio:f.value,size:d.value,vertical:"",always:o.always},null,8,["move","ratio","size","always"])],64))}});var Te=$(Ee,[["__file","bar.vue"]]);const He=W({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:de([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,...be(["ariaLabel","ariaOrientation"])}),Le={scroll:({scrollTop:S,scrollLeft:c})=>[S,c].every(C)},Ce="ElScrollbar",Pe=k({name:Ce}),Re=k({...Pe,props:He,emits:Le,setup(S,{expose:c,emit:r}){const l=S,n=F("scrollbar");let u,m,d=0,f=0;const p=i(),a=i(),t=i(),o=i(),v=L(()=>{const e={};return l.height&&(e.height=Y(l.height)),l.maxHeight&&(e.maxHeight=Y(l.maxHeight)),[l.wrapStyle,e]}),h=L(()=>[l.wrapClass,n.e("wrap"),{[n.em("wrap","hidden-default")]:!l.native}]),E=L(()=>[n.e("view"),l.viewClass]),w=()=>{var e;a.value&&((e=o.value)==null||e.handleScroll(a.value),d=a.value.scrollTop,f=a.value.scrollLeft,r("scroll",{scrollTop:a.value.scrollTop,scrollLeft:a.value.scrollLeft}))};function g(e,s){me(e)?a.value.scrollTo(e):C(e)&&C(s)&&a.value.scrollTo(e,s)}const b=e=>{C(e)&&(a.value.scrollTop=e)},B=e=>{C(e)&&(a.value.scrollLeft=e)},z=()=>{var e;(e=o.value)==null||e.update()};return U(()=>l.noresize,e=>{e?(u==null||u(),m==null||m()):({stop:u}=Q(t,z),m=x("resize",z))},{immediate:!0}),U(()=>[l.maxHeight,l.height],()=>{l.native||X(()=>{var e;z(),a.value&&((e=o.value)==null||e.handleScroll(a.value))})}),se(D,re({scrollbarElement:p,wrapElement:a})),ne(()=>{a.value.scrollTop=d,a.value.scrollLeft=f}),ie(()=>{l.native||X(()=>{z()})}),ce(()=>z()),c({wrapRef:a,update:z,scrollTo:g,setScrollTop:b,setScrollLeft:B,handleScroll:w}),(e,s)=>(P(),I("div",{ref_key:"scrollbarRef",ref:p,class:R(y(n).b())},[M("div",{ref_key:"wrapRef",ref:a,class:R(y(h)),style:O(y(v)),onScroll:w},[(P(),A(ve(e.tag),{id:e.id,ref_key:"resizeRef",ref:t,class:R(y(E)),style:O(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:G(()=>[ue(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?fe("v-if",!0):(P(),A(Te,{key:0,ref_key:"barRef",ref:o,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});var ke=$(Re,[["__file","scrollbar.vue"]]);const We=pe(ke);export{We as E};