import{r,j as a}from"./app-8u4XjYch.js";const d=r.forwardRef(function({type:s="text",className:n="",isFocused:o=!1,...u},f){const t=r.useRef(null);return r.useImperativeHandle(f,()=>({focus:()=>{var e;return(e=t.current)==null?void 0:e.focus()}})),r.useEffect(()=>{var e;o&&((e=t.current)==null||e.focus())},[o]),a.jsx("input",{...u,type:s,className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "+n,ref:t})});export{d as T};
