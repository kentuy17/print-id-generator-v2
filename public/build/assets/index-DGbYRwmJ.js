import{r as t,j as d}from"./app-8u4XjYch.js";import{r as Re}from"./index-YPWYFSg4.js";import{q as Te,a as ot,r as ye,d as z,b,t as nt,u as rt,k as st,w as lt,v as ct,F as at,x as it}from"./index-4YbGl6Zp.js";import{z as be,u as dt,R as ut,I as pt,V as ft,B as mt,F as ht,G as vt}from"./AuthenticatedLayout-DqKmIH14.js";import{u as k,S as gt}from"./button-BtLD4Ebk.js";import{P as M}from"./index-DAa-CRdv.js";function Pe(o,[s,e]){return Math.min(e,Math.max(s,o))}function St(o){const s=t.useRef({value:o,previous:o});return t.useMemo(()=>(s.current.value!==o&&(s.current.previous=s.current.value,s.current.value=o),s.current.previous),[o])}var xt=[" ","Enter","ArrowUp","ArrowDown"],wt=[" ","Enter"],re="Select",[ae,ie,Ct]=pt(re),[ee,Kt]=ot(re,[Ct,be]),de=be(),[yt,q]=ee(re),[It,Tt]=ee(re),Ee=o=>{const{__scopeSelect:s,children:e,open:a,defaultOpen:c,onOpenChange:p,value:r,defaultValue:l,onValueChange:n,dir:f,name:g,autoComplete:w,disabled:P,required:R,form:T}=o,i=de(s),[v,C]=t.useState(null),[u,h]=t.useState(null),[A,O]=t.useState(!1),te=dt(f),[E=!1,j]=Te({prop:a,defaultProp:c,onChange:p}),[U,X]=Te({prop:r,defaultProp:l,onChange:n}),V=t.useRef(null),B=v?T||!!v.closest("form"):!0,[K,H]=t.useState(new Set),F=Array.from(K).map(_=>_.props.value).join(";");return d.jsx(ut,{...i,children:d.jsxs(yt,{required:R,scope:s,trigger:v,onTriggerChange:C,valueNode:u,onValueNodeChange:h,valueNodeHasChildren:A,onValueNodeHasChildrenChange:O,contentId:ye(),value:U,onValueChange:X,open:E,onOpenChange:j,dir:te,triggerPointerDownPosRef:V,disabled:P,children:[d.jsx(ae.Provider,{scope:s,children:d.jsx(It,{scope:o.__scopeSelect,onNativeOptionAdd:t.useCallback(_=>{H(L=>new Set(L).add(_))},[]),onNativeOptionRemove:t.useCallback(_=>{H(L=>{const W=new Set(L);return W.delete(_),W})},[]),children:e})}),B?d.jsxs(Qe,{"aria-hidden":!0,required:R,tabIndex:-1,name:g,autoComplete:w,value:U,onChange:_=>X(_.target.value),disabled:P,form:T,children:[U===void 0?d.jsx("option",{value:""}):null,Array.from(K)]},F):null]})})};Ee.displayName=re;var _e="SelectTrigger",Ne=t.forwardRef((o,s)=>{const{__scopeSelect:e,disabled:a=!1,...c}=o,p=de(e),r=q(_e,e),l=r.disabled||a,n=k(s,r.onTriggerChange),f=ie(e),g=t.useRef("touch"),[w,P,R]=et(i=>{const v=f().filter(h=>!h.disabled),C=v.find(h=>h.value===r.value),u=tt(v,i,C);u!==void 0&&r.onValueChange(u.value)}),T=i=>{l||(r.onOpenChange(!0),R()),i&&(r.triggerPointerDownPosRef.current={x:Math.round(i.pageX),y:Math.round(i.pageY)})};return d.jsx(mt,{asChild:!0,...p,children:d.jsx(M.button,{type:"button",role:"combobox","aria-controls":r.contentId,"aria-expanded":r.open,"aria-required":r.required,"aria-autocomplete":"none",dir:r.dir,"data-state":r.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":Je(r.value)?"":void 0,...c,ref:n,onClick:b(c.onClick,i=>{i.currentTarget.focus(),g.current!=="mouse"&&T(i)}),onPointerDown:b(c.onPointerDown,i=>{g.current=i.pointerType;const v=i.target;v.hasPointerCapture(i.pointerId)&&v.releasePointerCapture(i.pointerId),i.button===0&&i.ctrlKey===!1&&i.pointerType==="mouse"&&(T(i),i.preventDefault())}),onKeyDown:b(c.onKeyDown,i=>{const v=w.current!=="";!(i.ctrlKey||i.altKey||i.metaKey)&&i.key.length===1&&P(i.key),!(v&&i.key===" ")&&xt.includes(i.key)&&(T(),i.preventDefault())})})})});Ne.displayName=_e;var Me="SelectValue",Ae=t.forwardRef((o,s)=>{const{__scopeSelect:e,className:a,style:c,children:p,placeholder:r="",...l}=o,n=q(Me,e),{onValueNodeHasChildrenChange:f}=n,g=p!==void 0,w=k(s,n.onValueNodeChange);return z(()=>{f(g)},[f,g]),d.jsx(M.span,{...l,ref:w,style:{pointerEvents:"none"},children:Je(n.value)?d.jsx(d.Fragment,{children:r}):p})});Ae.displayName=Me;var Pt="SelectIcon",Oe=t.forwardRef((o,s)=>{const{__scopeSelect:e,children:a,...c}=o;return d.jsx(M.span,{"aria-hidden":!0,...c,ref:s,children:a||"▼"})});Oe.displayName=Pt;var Rt="SelectPortal",De=o=>d.jsx(nt,{asChild:!0,...o});De.displayName=Rt;var J="SelectContent",je=t.forwardRef((o,s)=>{const e=q(J,o.__scopeSelect),[a,c]=t.useState();if(z(()=>{c(new DocumentFragment)},[]),!e.open){const p=a;return p?Re.createPortal(d.jsx(Le,{scope:o.__scopeSelect,children:d.jsx(ae.Slot,{scope:o.__scopeSelect,children:d.jsx("div",{children:o.children})})}),p):null}return d.jsx(ke,{...o,ref:s})});je.displayName=J;var D=10,[Le,Y]=ee(J),bt="SelectContentImpl",ke=t.forwardRef((o,s)=>{const{__scopeSelect:e,position:a="item-aligned",onCloseAutoFocus:c,onEscapeKeyDown:p,onPointerDownOutside:r,side:l,sideOffset:n,align:f,alignOffset:g,arrowPadding:w,collisionBoundary:P,collisionPadding:R,sticky:T,hideWhenDetached:i,avoidCollisions:v,...C}=o,u=q(J,e),[h,A]=t.useState(null),[O,te]=t.useState(null),E=k(s,m=>A(m)),[j,U]=t.useState(null),[X,V]=t.useState(null),B=ie(e),[K,H]=t.useState(!1),F=t.useRef(!1);t.useEffect(()=>{if(h)return st(h)},[h]),lt();const _=t.useCallback(m=>{const[I,...N]=B().map(x=>x.ref.current),[y]=N.slice(-1),S=document.activeElement;for(const x of m)if(x===S||(x==null||x.scrollIntoView({block:"nearest"}),x===I&&O&&(O.scrollTop=0),x===y&&O&&(O.scrollTop=O.scrollHeight),x==null||x.focus(),document.activeElement!==S))return},[B,O]),L=t.useCallback(()=>_([j,h]),[_,j,h]);t.useEffect(()=>{K&&L()},[K,L]);const{onOpenChange:W,triggerPointerDownPosRef:G}=u;t.useEffect(()=>{if(h){let m={x:0,y:0};const I=y=>{var S,x;m={x:Math.abs(Math.round(y.pageX)-(((S=G.current)==null?void 0:S.x)??0)),y:Math.abs(Math.round(y.pageY)-(((x=G.current)==null?void 0:x.y)??0))}},N=y=>{m.x<=10&&m.y<=10?y.preventDefault():h.contains(y.target)||W(!1),document.removeEventListener("pointermove",I),G.current=null};return G.current!==null&&(document.addEventListener("pointermove",I),document.addEventListener("pointerup",N,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",N,{capture:!0})}}},[h,W,G]),t.useEffect(()=>{const m=()=>W(!1);return window.addEventListener("blur",m),window.addEventListener("resize",m),()=>{window.removeEventListener("blur",m),window.removeEventListener("resize",m)}},[W]);const[ue,se]=et(m=>{const I=B().filter(S=>!S.disabled),N=I.find(S=>S.ref.current===document.activeElement),y=tt(I,m,N);y&&setTimeout(()=>y.ref.current.focus())}),pe=t.useCallback((m,I,N)=>{const y=!F.current&&!N;(u.value!==void 0&&u.value===I||y)&&(U(m),y&&(F.current=!0))},[u.value]),fe=t.useCallback(()=>h==null?void 0:h.focus(),[h]),Q=t.useCallback((m,I,N)=>{const y=!F.current&&!N;(u.value!==void 0&&u.value===I||y)&&V(m)},[u.value]),le=a==="popper"?ge:Ve,oe=le===ge?{side:l,sideOffset:n,align:f,alignOffset:g,arrowPadding:w,collisionBoundary:P,collisionPadding:R,sticky:T,hideWhenDetached:i,avoidCollisions:v}:{};return d.jsx(Le,{scope:e,content:h,viewport:O,onViewportChange:te,itemRefCallback:pe,selectedItem:j,onItemLeave:fe,itemTextRefCallback:Q,focusSelectedItem:L,selectedItemText:X,position:a,isPositioned:K,searchRef:ue,children:d.jsx(ct,{as:gt,allowPinchZoom:!0,children:d.jsx(at,{asChild:!0,trapped:u.open,onMountAutoFocus:m=>{m.preventDefault()},onUnmountAutoFocus:b(c,m=>{var I;(I=u.trigger)==null||I.focus({preventScroll:!0}),m.preventDefault()}),children:d.jsx(it,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:p,onPointerDownOutside:r,onFocusOutside:m=>m.preventDefault(),onDismiss:()=>u.onOpenChange(!1),children:d.jsx(le,{role:"listbox",id:u.contentId,"data-state":u.open?"open":"closed",dir:u.dir,onContextMenu:m=>m.preventDefault(),...C,...oe,onPlaced:()=>H(!0),ref:E,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:b(C.onKeyDown,m=>{const I=m.ctrlKey||m.altKey||m.metaKey;if(m.key==="Tab"&&m.preventDefault(),!I&&m.key.length===1&&se(m.key),["ArrowUp","ArrowDown","Home","End"].includes(m.key)){let y=B().filter(S=>!S.disabled).map(S=>S.ref.current);if(["ArrowUp","End"].includes(m.key)&&(y=y.slice().reverse()),["ArrowUp","ArrowDown"].includes(m.key)){const S=m.target,x=y.indexOf(S);y=y.slice(x+1)}setTimeout(()=>_(y)),m.preventDefault()}})})})})})})});ke.displayName=bt;var Et="SelectItemAlignedPosition",Ve=t.forwardRef((o,s)=>{const{__scopeSelect:e,onPlaced:a,...c}=o,p=q(J,e),r=Y(J,e),[l,n]=t.useState(null),[f,g]=t.useState(null),w=k(s,E=>g(E)),P=ie(e),R=t.useRef(!1),T=t.useRef(!0),{viewport:i,selectedItem:v,selectedItemText:C,focusSelectedItem:u}=r,h=t.useCallback(()=>{if(p.trigger&&p.valueNode&&l&&f&&i&&v&&C){const E=p.trigger.getBoundingClientRect(),j=f.getBoundingClientRect(),U=p.valueNode.getBoundingClientRect(),X=C.getBoundingClientRect();if(p.dir!=="rtl"){const S=X.left-j.left,x=U.left-S,Z=E.left-x,$=E.width+Z,me=Math.max($,j.width),he=window.innerWidth-D,ve=Pe(x,[D,Math.max(D,he-me)]);l.style.minWidth=$+"px",l.style.left=ve+"px"}else{const S=j.right-X.right,x=window.innerWidth-U.right-S,Z=window.innerWidth-E.right-x,$=E.width+Z,me=Math.max($,j.width),he=window.innerWidth-D,ve=Pe(x,[D,Math.max(D,he-me)]);l.style.minWidth=$+"px",l.style.right=ve+"px"}const V=P(),B=window.innerHeight-D*2,K=i.scrollHeight,H=window.getComputedStyle(f),F=parseInt(H.borderTopWidth,10),_=parseInt(H.paddingTop,10),L=parseInt(H.borderBottomWidth,10),W=parseInt(H.paddingBottom,10),G=F+_+K+W+L,ue=Math.min(v.offsetHeight*5,G),se=window.getComputedStyle(i),pe=parseInt(se.paddingTop,10),fe=parseInt(se.paddingBottom,10),Q=E.top+E.height/2-D,le=B-Q,oe=v.offsetHeight/2,m=v.offsetTop+oe,I=F+_+m,N=G-I;if(I<=Q){const S=V.length>0&&v===V[V.length-1].ref.current;l.style.bottom="0px";const x=f.clientHeight-i.offsetTop-i.offsetHeight,Z=Math.max(le,oe+(S?fe:0)+x+L),$=I+Z;l.style.height=$+"px"}else{const S=V.length>0&&v===V[0].ref.current;l.style.top="0px";const Z=Math.max(Q,F+i.offsetTop+(S?pe:0)+oe)+N;l.style.height=Z+"px",i.scrollTop=I-Q+i.offsetTop}l.style.margin=`${D}px 0`,l.style.minHeight=ue+"px",l.style.maxHeight=B+"px",a==null||a(),requestAnimationFrame(()=>R.current=!0)}},[P,p.trigger,p.valueNode,l,f,i,v,C,p.dir,a]);z(()=>h(),[h]);const[A,O]=t.useState();z(()=>{f&&O(window.getComputedStyle(f).zIndex)},[f]);const te=t.useCallback(E=>{E&&T.current===!0&&(h(),u==null||u(),T.current=!1)},[h,u]);return d.jsx(Nt,{scope:e,contentWrapper:l,shouldExpandOnScrollRef:R,onScrollButtonChange:te,children:d.jsx("div",{ref:n,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:A},children:d.jsx(M.div,{...c,ref:w,style:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});Ve.displayName=Et;var _t="SelectPopperPosition",ge=t.forwardRef((o,s)=>{const{__scopeSelect:e,align:a="start",collisionPadding:c=D,...p}=o,r=de(e);return d.jsx(ht,{...r,...p,ref:s,align:a,collisionPadding:c,style:{boxSizing:"border-box",...p.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});ge.displayName=_t;var[Nt,Ie]=ee(J,{}),Se="SelectViewport",Be=t.forwardRef((o,s)=>{const{__scopeSelect:e,nonce:a,...c}=o,p=Y(Se,e),r=Ie(Se,e),l=k(s,p.onViewportChange),n=t.useRef(0);return d.jsxs(d.Fragment,{children:[d.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),d.jsx(ae.Slot,{scope:e,children:d.jsx(M.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:l,style:{position:"relative",flex:1,overflow:"hidden auto",...c.style},onScroll:b(c.onScroll,f=>{const g=f.currentTarget,{contentWrapper:w,shouldExpandOnScrollRef:P}=r;if(P!=null&&P.current&&w){const R=Math.abs(n.current-g.scrollTop);if(R>0){const T=window.innerHeight-D*2,i=parseFloat(w.style.minHeight),v=parseFloat(w.style.height),C=Math.max(i,v);if(C<T){const u=C+R,h=Math.min(T,u),A=u-h;w.style.height=h+"px",w.style.bottom==="0px"&&(g.scrollTop=A>0?A:0,w.style.justifyContent="flex-end")}}}n.current=g.scrollTop})})})]})});Be.displayName=Se;var He="SelectGroup",[Mt,At]=ee(He),Ot=t.forwardRef((o,s)=>{const{__scopeSelect:e,...a}=o,c=ye();return d.jsx(Mt,{scope:e,id:c,children:d.jsx(M.div,{role:"group","aria-labelledby":c,...a,ref:s})})});Ot.displayName=He;var Fe="SelectLabel",We=t.forwardRef((o,s)=>{const{__scopeSelect:e,...a}=o,c=At(Fe,e);return d.jsx(M.div,{id:c.id,...a,ref:s})});We.displayName=Fe;var ce="SelectItem",[Dt,Ue]=ee(ce),Ke=t.forwardRef((o,s)=>{const{__scopeSelect:e,value:a,disabled:c=!1,textValue:p,...r}=o,l=q(ce,e),n=Y(ce,e),f=l.value===a,[g,w]=t.useState(p??""),[P,R]=t.useState(!1),T=k(s,u=>{var h;return(h=n.itemRefCallback)==null?void 0:h.call(n,u,a,c)}),i=ye(),v=t.useRef("touch"),C=()=>{c||(l.onValueChange(a),l.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return d.jsx(Dt,{scope:e,value:a,disabled:c,textId:i,isSelected:f,onItemTextChange:t.useCallback(u=>{w(h=>h||((u==null?void 0:u.textContent)??"").trim())},[]),children:d.jsx(ae.ItemSlot,{scope:e,value:a,disabled:c,textValue:g,children:d.jsx(M.div,{role:"option","aria-labelledby":i,"data-highlighted":P?"":void 0,"aria-selected":f&&P,"data-state":f?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...r,ref:T,onFocus:b(r.onFocus,()=>R(!0)),onBlur:b(r.onBlur,()=>R(!1)),onClick:b(r.onClick,()=>{v.current!=="mouse"&&C()}),onPointerUp:b(r.onPointerUp,()=>{v.current==="mouse"&&C()}),onPointerDown:b(r.onPointerDown,u=>{v.current=u.pointerType}),onPointerMove:b(r.onPointerMove,u=>{var h;v.current=u.pointerType,c?(h=n.onItemLeave)==null||h.call(n):v.current==="mouse"&&u.currentTarget.focus({preventScroll:!0})}),onPointerLeave:b(r.onPointerLeave,u=>{var h;u.currentTarget===document.activeElement&&((h=n.onItemLeave)==null||h.call(n))}),onKeyDown:b(r.onKeyDown,u=>{var A;((A=n.searchRef)==null?void 0:A.current)!==""&&u.key===" "||(wt.includes(u.key)&&C(),u.key===" "&&u.preventDefault())})})})})});Ke.displayName=ce;var ne="SelectItemText",Ge=t.forwardRef((o,s)=>{const{__scopeSelect:e,className:a,style:c,...p}=o,r=q(ne,e),l=Y(ne,e),n=Ue(ne,e),f=Tt(ne,e),[g,w]=t.useState(null),P=k(s,C=>w(C),n.onItemTextChange,C=>{var u;return(u=l.itemTextRefCallback)==null?void 0:u.call(l,C,n.value,n.disabled)}),R=g==null?void 0:g.textContent,T=t.useMemo(()=>d.jsx("option",{value:n.value,disabled:n.disabled,children:R},n.value),[n.disabled,n.value,R]),{onNativeOptionAdd:i,onNativeOptionRemove:v}=f;return z(()=>(i(T),()=>v(T)),[i,v,T]),d.jsxs(d.Fragment,{children:[d.jsx(M.span,{id:n.textId,...p,ref:P}),n.isSelected&&r.valueNode&&!r.valueNodeHasChildren?Re.createPortal(p.children,r.valueNode):null]})});Ge.displayName=ne;var ze="SelectItemIndicator",qe=t.forwardRef((o,s)=>{const{__scopeSelect:e,...a}=o;return Ue(ze,e).isSelected?d.jsx(M.span,{"aria-hidden":!0,...a,ref:s}):null});qe.displayName=ze;var xe="SelectScrollUpButton",Ye=t.forwardRef((o,s)=>{const e=Y(xe,o.__scopeSelect),a=Ie(xe,o.__scopeSelect),[c,p]=t.useState(!1),r=k(s,a.onScrollButtonChange);return z(()=>{if(e.viewport&&e.isPositioned){let l=function(){const f=n.scrollTop>0;p(f)};const n=e.viewport;return l(),n.addEventListener("scroll",l),()=>n.removeEventListener("scroll",l)}},[e.viewport,e.isPositioned]),c?d.jsx(Ze,{...o,ref:r,onAutoScroll:()=>{const{viewport:l,selectedItem:n}=e;l&&n&&(l.scrollTop=l.scrollTop-n.offsetHeight)}}):null});Ye.displayName=xe;var we="SelectScrollDownButton",Xe=t.forwardRef((o,s)=>{const e=Y(we,o.__scopeSelect),a=Ie(we,o.__scopeSelect),[c,p]=t.useState(!1),r=k(s,a.onScrollButtonChange);return z(()=>{if(e.viewport&&e.isPositioned){let l=function(){const f=n.scrollHeight-n.clientHeight,g=Math.ceil(n.scrollTop)<f;p(g)};const n=e.viewport;return l(),n.addEventListener("scroll",l),()=>n.removeEventListener("scroll",l)}},[e.viewport,e.isPositioned]),c?d.jsx(Ze,{...o,ref:r,onAutoScroll:()=>{const{viewport:l,selectedItem:n}=e;l&&n&&(l.scrollTop=l.scrollTop+n.offsetHeight)}}):null});Xe.displayName=we;var Ze=t.forwardRef((o,s)=>{const{__scopeSelect:e,onAutoScroll:a,...c}=o,p=Y("SelectScrollButton",e),r=t.useRef(null),l=ie(e),n=t.useCallback(()=>{r.current!==null&&(window.clearInterval(r.current),r.current=null)},[]);return t.useEffect(()=>()=>n(),[n]),z(()=>{var g;const f=l().find(w=>w.ref.current===document.activeElement);(g=f==null?void 0:f.ref.current)==null||g.scrollIntoView({block:"nearest"})},[l]),d.jsx(M.div,{"aria-hidden":!0,...c,ref:s,style:{flexShrink:0,...c.style},onPointerDown:b(c.onPointerDown,()=>{r.current===null&&(r.current=window.setInterval(a,50))}),onPointerMove:b(c.onPointerMove,()=>{var f;(f=p.onItemLeave)==null||f.call(p),r.current===null&&(r.current=window.setInterval(a,50))}),onPointerLeave:b(c.onPointerLeave,()=>{n()})})}),jt="SelectSeparator",$e=t.forwardRef((o,s)=>{const{__scopeSelect:e,...a}=o;return d.jsx(M.div,{"aria-hidden":!0,...a,ref:s})});$e.displayName=jt;var Ce="SelectArrow",Lt=t.forwardRef((o,s)=>{const{__scopeSelect:e,...a}=o,c=de(e),p=q(Ce,e),r=Y(Ce,e);return p.open&&r.position==="popper"?d.jsx(vt,{...c,...a,ref:s}):null});Lt.displayName=Ce;function Je(o){return o===""||o===void 0}var Qe=t.forwardRef((o,s)=>{const{value:e,...a}=o,c=t.useRef(null),p=k(s,c),r=St(e);return t.useEffect(()=>{const l=c.current,n=window.HTMLSelectElement.prototype,g=Object.getOwnPropertyDescriptor(n,"value").set;if(r!==e&&g){const w=new Event("change",{bubbles:!0});g.call(l,e),l.dispatchEvent(w)}},[r,e]),d.jsx(ft,{asChild:!0,children:d.jsx("select",{...a,ref:p,defaultValue:e})})});Qe.displayName="BubbleSelect";function et(o){const s=rt(o),e=t.useRef(""),a=t.useRef(0),c=t.useCallback(r=>{const l=e.current+r;s(l),function n(f){e.current=f,window.clearTimeout(a.current),f!==""&&(a.current=window.setTimeout(()=>n(""),1e3))}(l)},[s]),p=t.useCallback(()=>{e.current="",window.clearTimeout(a.current)},[]);return t.useEffect(()=>()=>window.clearTimeout(a.current),[]),[e,c,p]}function tt(o,s,e){const c=s.length>1&&Array.from(s).every(f=>f===s[0])?s[0]:s,p=e?o.indexOf(e):-1;let r=kt(o,Math.max(p,0));c.length===1&&(r=r.filter(f=>f!==e));const n=r.find(f=>f.textValue.toLowerCase().startsWith(c.toLowerCase()));return n!==e?n:void 0}function kt(o,s){return o.map((e,a)=>o[(s+a)%o.length])}var Gt=Ee,zt=Ne,qt=Ae,Yt=Oe,Xt=De,Zt=je,$t=Be,Jt=We,Qt=Ke,eo=Ge,to=qe,oo=Ye,no=Xe,ro=$e;export{Zt as C,Yt as I,Jt as L,Xt as P,Gt as R,ro as S,zt as T,qt as V,$t as a,Qt as b,Pe as c,to as d,eo as e,oo as f,no as g};
