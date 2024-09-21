import{r as i}from"./index.DhYZZe0J.js";var c={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=i,f=Symbol.for("react.element"),x=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,_=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function m(r,e,n){var t,s={},o=null,p=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(p=e.ref);for(t in e)d.call(e,t)&&!v.hasOwnProperty(t)&&(s[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)s[t]===void 0&&(s[t]=e[t]);return{$$typeof:f,type:r,key:o,ref:p,props:s,_owner:_.current}}a.Fragment=x;a.jsx=m;a.jsxs=m;c.exports=a;var l=c.exports;const S=()=>{const[r,e]=i.useState(new Date(0,0,0,0,0,5));let n;const t=()=>{e(s=>{const o=new Date(s.getTime()-1e3);return o.getMinutes()==0&&o.getSeconds()==0&&clearInterval(n),o})};return i.useEffect(()=>(n=setInterval(t,1e3),()=>clearInterval(n)),[]),l.jsxs("div",{className:"flex flex-col items-center bg-secondary text-primary w-max m-auto py-3 px-5 rounded",children:[l.jsx("p",{className:"text-xl",children:"Empezamos en:"}),l.jsxs("p",{className:"text-3xl",children:[r.getMinutes().toString().padStart(2,"0"),":",r.getSeconds().toString().padStart(2,"0")]})]})};export{S as default};
