import{r as p}from"./index.DhYZZe0J.js";var u={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=p,_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,g=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function m(n,e,a){var t,r={},s=null,o=null;a!==void 0&&(s=""+a),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(t in e)y.call(e,t)&&!S.hasOwnProperty(t)&&(r[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)r[t]===void 0&&(r[t]=e[t]);return{$$typeof:_,type:n,key:s,ref:o,props:r,_owner:g.current}}i.Fragment=v;i.jsx=m;i.jsxs=m;u.exports=i;var l=u.exports;const E=()=>{const n=typeof window<"u"?window.location.search:"",e=new URLSearchParams(n),a=Number(e.get("minutos"))??0,t=Number(e.get("segundos"))??0,[r,s]=p.useState(new Date(0,0,0,0,a,t));let o;const d=()=>{s(f=>{const c=new Date(f.getTime()-1e3);return c.getMinutes()==0&&c.getSeconds()==0&&clearInterval(o),c})};return p.useEffect(()=>(o=setInterval(d,1e3),()=>clearInterval(o)),[]),l.jsxs("div",{className:"flex flex-col items-center bg-secondary text-primary w-max m-auto py-3 px-5 rounded",children:[l.jsx("p",{className:"text-xl",children:"Empezamos en"}),l.jsxs("p",{className:"text-3xl",children:[r.getMinutes().toString().padStart(2,"0"),":",r.getSeconds().toString().padStart(2,"0")]})]})};export{E as default};
