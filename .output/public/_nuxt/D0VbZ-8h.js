import{J as C,at as d,L as x,C as o,y as g,b0 as y,aD as I,b1 as b,z as v,b2 as z,b3 as _,R as K}from"./C-CnRt1-.js";import{u as S,x as N,y as O}from"./Bj0pkxMM.js";import{e as k}from"./B0qXuZwe.js";import{k as f}from"./CX7TpRRJ.js";const p=Symbol(),i=C();function m(l,u=void 0){const a=d()?x(p,i):i;return l?o(()=>{var t,n;return(n=(t=a.value)==null?void 0:t[l])!=null?n:u}):a}function L(l,u){const a=m(),t=g(l,o(()=>{var e;return((e=a.value)==null?void 0:e.namespace)||y})),n=S(o(()=>{var e;return(e=a.value)==null?void 0:e.locale})),r=I(o(()=>{var e;return((e=a.value)==null?void 0:e.zIndex)||b})),s=o(()=>{var e;return v(u)||((e=a.value)==null?void 0:e.size)||""});return E(o(()=>v(a)||{})),{ns:t,locale:n,zIndex:r,size:s}}const E=(l,u,a=!1)=>{var t;const n=!!d(),r=n?m():void 0,s=(t=void 0)!=null?t:n?K:void 0;if(!s)return;const e=o(()=>{const c=v(l);return r!=null&&r.value?G(r.value,c):c});return s(p,e),s(N,o(()=>e.value.locale)),s(z,o(()=>e.value.namespace)),s(_,o(()=>e.value.zIndex)),s(O,{size:o(()=>e.value.size||"")}),s(k,o(()=>({emptyValues:e.value.emptyValues,valueOnClear:e.value.valueOnClear}))),(a||!i.value)&&(i.value=e.value),e},G=(l,u)=>{const a=[...new Set([...f(l),...f(u)])],t={};for(const n of a)t[n]=u[n]!==void 0?u[n]:l[n];return t};export{m as a,L as u};