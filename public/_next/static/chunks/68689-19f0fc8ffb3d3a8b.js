(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68689],{99522:function(e,t,n){"use strict";n.d(t,{Vq:function(){return ev}});var r=n(67294),a=n(93967),o=n.n(a),i=n(87462),c=n(36206),u=n(28771),l=n(25360),s=n(91276),d=n(77342),f=n(46063),p=n(95420),v=n(42651),m=n(29115),g=n(75320),h=n(27552),b=n(97582),y=n(71642),$=n(99495),E=(0,n(87122)._)(),nothing=function(){},w=r.forwardRef(function(e,t){var n=r.useRef(null),a=r.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),o=a[0],i=a[1],c=e.forwardProps,u=e.children,l=e.className,s=e.removeScrollBar,d=e.enabled,f=e.shards,p=e.sideCar,v=e.noIsolation,m=e.inert,g=e.allowPinchZoom,h=e.as,y=void 0===h?"div":h,w=(0,b._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),S=(0,$.q)([n,t]),C=(0,b.pi)((0,b.pi)({},w),o);return r.createElement(r.Fragment,null,d&&r.createElement(p,{sideCar:E,removeScrollBar:s,shards:f,noIsolation:v,inert:m,setCallbacks:i,allowPinchZoom:!!g,lockRef:n}),c?r.cloneElement(r.Children.only(u),(0,b.pi)((0,b.pi)({},C),{ref:S})):r.createElement(y,(0,b.pi)({},C,{className:l,ref:S}),u))});w.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},w.classNames={fullWidth:y.zi,zeroRight:y.pF};var S=n(66781),C=n(37087),R=n(6525),k=!1;if("undefined"!=typeof window)try{var M=Object.defineProperty({},"passive",{get:function(){return k=!0,!0}});window.addEventListener("test",M,M),window.removeEventListener("test",M,M)}catch(e){k=!1}var T=!!k&&{passive:!1},elementCanBeScrolled=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},locationCouldBeScrolled=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),elementCouldBeScrolled(e,n)){var r=getScrollVariables(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},elementCouldBeScrolled=function(e,t){return"v"===e?elementCanBeScrolled(t,"overflowY"):elementCanBeScrolled(t,"overflowX")},getScrollVariables=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},handleScroll=function(e,t,n,r,a){var o,i=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),c=i*r,u=n.target,l=t.contains(u),s=!1,d=c>0,f=0,p=0;do{var v=getScrollVariables(e,u),m=v[0],g=v[1]-v[2]-i*m;(m||g)&&elementCouldBeScrolled(e,u)&&(f+=g,p+=m),u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return d&&(a&&0===f||!a&&c>f)?s=!0:!d&&(a&&0===p||!a&&-c>p)&&(s=!0),s},getTouchXY=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(e){return[e.deltaX,e.deltaY]},extractRef=function(e){return e&&"current"in e?e.current:e},_=0,D=[];function RemoveScrollSideCar(e){var t=r.useRef([]),n=r.useRef([0,0]),a=r.useRef(),o=r.useState(_++)[0],i=r.useState(function(){return(0,R.Ws)()})[0],c=r.useRef(e);r.useEffect(function(){c.current=e},[e]),r.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,b.ev)([e.lockRef.current],(e.shards||[]).map(extractRef),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=r.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var r,o=getTouchXY(e),i=n.current,u="deltaX"in e?e.deltaX:i[0]-o[0],l="deltaY"in e?e.deltaY:i[1]-o[1],s=e.target,d=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=locationCouldBeScrolled(d,s);if(!f)return!0;if(f?r=d:(r="v"===d?"h":"v",f=locationCouldBeScrolled(d,s)),!f)return!1;if(!a.current&&"changedTouches"in e&&(u||l)&&(a.current=r),!r)return!0;var p=a.current||r;return handleScroll(p,t,e,"h"===p?u:l,!0)},[]),l=r.useCallback(function(e){if(D.length&&D[D.length-1]===i){var n="deltaY"in e?getDeltaXY(e):getTouchXY(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var a=(c.current.shards||[]).map(extractRef).filter(Boolean).filter(function(t){return t.contains(e.target)});(a.length>0?u(e,a[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=r.useCallback(function(e,n,r,a){var o={name:e,delta:n,target:r,should:a};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),d=r.useCallback(function(e){n.current=getTouchXY(e),a.current=void 0},[]),f=r.useCallback(function(t){s(t.type,getDeltaXY(t),t.target,u(t,e.lockRef.current))},[]),p=r.useCallback(function(t){s(t.type,getTouchXY(t),t.target,u(t,e.lockRef.current))},[]);r.useEffect(function(){return D.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",l,T),document.addEventListener("touchmove",l,T),document.addEventListener("touchstart",d,T),function(){D=D.filter(function(e){return e!==i}),document.removeEventListener("wheel",l,T),document.removeEventListener("touchmove",l,T),document.removeEventListener("touchstart",d,T)}},[]);var v=e.removeScrollBar,m=e.inert;return r.createElement(r.Fragment,null,m?r.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?r.createElement(C.jp,{gapMode:"margin"}):null)}var x=(0,S.L)(E,RemoveScrollSideCar),A=r.forwardRef(function(e,t){return r.createElement(w,(0,b.pi)({},e,{ref:t,sideCar:x}))});A.classNames=w.classNames;var O=n(23541),F=n(88426);let N="Dialog",[L,I]=(0,l.b)(N),[W,P]=L(N),B=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,o=P("DialogTrigger",n),l=(0,u.e)(t,o.triggerRef);return(0,r.createElement)(g.WV.button,(0,i.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":$5d3850c4d0b4e6c7$var$getState(o.open)},a,{ref:l,onClick:(0,c.M)(e.onClick,o.onOpenToggle)}))}),j="DialogPortal",[z,Z]=L(j,{forceMount:void 0}),X="DialogOverlay",Y=(0,r.forwardRef)((e,t)=>{let n=Z(X,e.__scopeDialog),{forceMount:a=n.forceMount,...o}=e,c=P(X,e.__scopeDialog);return c.modal?(0,r.createElement)(m.z,{present:a||c.open},(0,r.createElement)(H,(0,i.Z)({},o,{ref:t}))):null}),H=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,o=P(X,n);return(0,r.createElement)(A,{as:F.g7,allowPinchZoom:!0,shards:[o.contentRef]},(0,r.createElement)(g.WV.div,(0,i.Z)({"data-state":$5d3850c4d0b4e6c7$var$getState(o.open)},a,{ref:t,style:{pointerEvents:"auto",...a.style}})))}),V="DialogContent",K=(0,r.forwardRef)((e,t)=>{let n=Z(V,e.__scopeDialog),{forceMount:a=n.forceMount,...o}=e,c=P(V,e.__scopeDialog);return(0,r.createElement)(m.z,{present:a||c.open},c.modal?(0,r.createElement)(U,(0,i.Z)({},o,{ref:t})):(0,r.createElement)(q,(0,i.Z)({},o,{ref:t})))}),U=(0,r.forwardRef)((e,t)=>{let n=P(V,e.__scopeDialog),a=(0,r.useRef)(null),o=(0,u.e)(t,n.contentRef,a);return(0,r.useEffect)(()=>{let e=a.current;if(e)return(0,O.Ry)(e)},[]),(0,r.createElement)(G,(0,i.Z)({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,c.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,c.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:(0,c.M)(e.onFocusOutside,e=>e.preventDefault())}))}),q=(0,r.forwardRef)((e,t)=>{let n=P(V,e.__scopeDialog),a=(0,r.useRef)(!1),o=(0,r.useRef)(!1);return(0,r.createElement)(G,(0,i.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),a.current=!1,o.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let c=t.target,u=null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(c);u&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),G=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:a,onOpenAutoFocus:o,onCloseAutoFocus:c,...l}=e,s=P(V,n),d=(0,r.useRef)(null),v=(0,u.e)(t,d);return(0,h.EW)(),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(p.M,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:o,onUnmountAutoFocus:c},(0,r.createElement)(f.XB,(0,i.Z)({role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":$5d3850c4d0b4e6c7$var$getState(s.open)},l,{ref:v,onDismiss:()=>s.onOpenChange(!1)}))),!1)}),Q="DialogTitle",J=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,o=P(Q,n);return(0,r.createElement)(g.WV.h2,(0,i.Z)({id:o.titleId},a,{ref:t}))}),ee=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,o=P("DialogDescription",n);return(0,r.createElement)(g.WV.p,(0,i.Z)({id:o.descriptionId},a,{ref:t}))}),et=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,o=P("DialogClose",n);return(0,r.createElement)(g.WV.button,(0,i.Z)({type:"button"},a,{ref:t,onClick:(0,c.M)(e.onClick,()=>o.onOpenChange(!1))}))});function $5d3850c4d0b4e6c7$var$getState(e){return e?"open":"closed"}let[en,er]=(0,l.k)("DialogTitleWarning",{contentName:V,titleName:Q,docsSlug:"dialog"}),$5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9=e=>{let{__scopeDialog:t,children:n,open:a,defaultOpen:o,onOpenChange:i,modal:c=!0}=e,u=(0,r.useRef)(null),l=(0,r.useRef)(null),[f=!1,p]=(0,d.T)({prop:a,defaultProp:o,onChange:i});return(0,r.createElement)(W,{scope:t,triggerRef:u,contentRef:l,contentId:(0,s.M)(),titleId:(0,s.M)(),descriptionId:(0,s.M)(),open:f,onOpenChange:p,onOpenToggle:(0,r.useCallback)(()=>p(e=>!e),[p]),modal:c},n)},$5d3850c4d0b4e6c7$export$602eac185826482c=e=>{let{__scopeDialog:t,forceMount:n,children:a,container:o}=e,i=P(j,t);return(0,r.createElement)(z,{scope:t,forceMount:n},r.Children.map(a,e=>(0,r.createElement)(m.z,{present:n||i.open},(0,r.createElement)(v.h,{asChild:!0,container:o},e))))},ea={size:{type:"enum",values:["1","2","3","4"],default:"3",responsive:!0}};var eo=n(6776),ei=n(41042),ec=n(6445),eu=n(15722);let DialogRoot=e=>r.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,{...e,modal:!0});DialogRoot.displayName="DialogRoot";let el=r.forwardRef((e,t)=>r.createElement(B,{...e,ref:t,asChild:!0}));el.displayName="DialogTrigger";let es=r.forwardRef((e,t)=>{let{className:n,forceMount:a,container:i,size:c=ea.size.default,...u}=e;return r.createElement($5d3850c4d0b4e6c7$export$602eac185826482c,{container:i,forceMount:a},r.createElement(eu.Q2,{asChild:!0},r.createElement(Y,{className:"rt-DialogOverlay"},r.createElement(K,{...u,ref:t,className:o()("rt-DialogContent",n,(0,eo.g)(c,"rt-r-size"))}))))});es.displayName="DialogContent";let ed=r.forwardRef((e,t)=>r.createElement(J,{asChild:!0},r.createElement(ei.X,{size:"5",mb:"3",trim:"start",...e,ref:t})));ed.displayName="DialogTitle";let ef=r.forwardRef((e,t)=>r.createElement(ee,{asChild:!0},r.createElement(ec.x,{as:"p",size:"3",...e,ref:t})));ef.displayName="DialogDescription";let ep=r.forwardRef((e,t)=>r.createElement(et,{...e,ref:t,asChild:!0}));ep.displayName="DialogClose";let ev=Object.assign({},{Root:DialogRoot,Trigger:el,Content:es,Title:ed,Description:ef,Close:ep})},41042:function(e,t,n){"use strict";n.d(t,{X:function(){return m}});var r=n(67294),a=n(93967),o=n.n(a),i=n(88426),c=n(83416),u=n(40617),l=n(57361),s=n(48291),d=n(86679);c.b.values;let f={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"6",responsive:!0},weight:{...c.b,default:"bold"},align:u.L,trim:l.a,color:s.m,highContrast:d.B};var p=n(23843),v=n(6776);let m=r.forwardRef((e,t)=>{let{rest:n,...a}=(0,p.FY)(e),{children:c,className:u,asChild:l=!1,as:s="h1",size:d=f.size.default,weight:m=f.weight.default,align:g=f.align.default,trim:h=f.trim.default,color:b=f.color.default,highContrast:y=f.highContrast.default,...$}=n;return r.createElement(i.g7,{"data-accent-color":b,...$,ref:t,className:o()("rt-Heading",u,(0,v.g)(d,"rt-r-size"),(0,v.g)(m,"rt-r-weight"),(0,v.g)(g,"rt-r-ta"),(0,v.g)(h,"rt-r-lt"),{"rt-high-contrast":y},(0,p.we)(a))},l?c:r.createElement(s,null,c))});m.displayName="Heading"},6445:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(67294),a=n(93967),o=n.n(a),i=n(88426),c=n(3356),u=n(23843),l=n(6776);let s=r.forwardRef((e,t)=>{let{rest:n,...a}=(0,u.FY)(e),{children:s,className:d,asChild:f=!1,as:p="span",size:v=c.S.size.default,weight:m=c.S.weight.default,align:g=c.S.align.default,trim:h=c.S.trim.default,color:b=c.S.color.default,highContrast:y=c.S.highContrast.default,...$}=n;return r.createElement(i.g7,{"data-accent-color":b,...$,ref:t,className:o()("rt-Text",d,(0,l.g)(v,"rt-r-size"),(0,l.g)(m,"rt-r-weight"),(0,l.g)(g,"rt-r-ta"),(0,l.g)(h,"rt-r-lt"),{"rt-high-contrast":y},(0,u.we)(a))},f?s:r.createElement(p,null,s))});s.displayName="Text"},3356:function(e,t,n){"use strict";n.d(t,{S:function(){return u}});var r=n(83416),a=n(40617),o=n(57361),i=n(48291),c=n(86679);let u={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0},weight:r.b,align:a.L,trim:o.a,color:i.m,highContrast:c.B}},6776:function(e,t,n){"use strict";function withBreakpoints(e,t="",n){var r,a,o,i;let c=[];if("object"==typeof e){for(let o of Object.keys(e))if(o in e){let i=null===(r=e[o])||void 0===r?void 0:r.toString(),u=null==i?void 0:i.startsWith("-"),l=""===t?"":"-",s=u?`-${t}`:t,d=u?null==i?void 0:i.substring(1):i;if(void 0===d)continue;let f=null!==(a=null==n?void 0:n[d])&&void 0!==a?a:d,p="initial"===o?`${s}${l}${f}`:`${o}:${s}${l}${f}`;c.push(p)}}if("string"==typeof e){let r=e.startsWith("-"),a=""===t?"":"-",i=r?`-${t}`:t,u=r?e.substring(1):e,l=null!==(o=null==n?void 0:n[u])&&void 0!==o?o:u;c.push(`${i}${a}${l}`)}if("boolean"==typeof e){let r=""===t?"":"-",a=e.toString(),o=null!==(i=null==n?void 0:n[a])&&void 0!==i?i:a;c.push(`${t}${r}${o}`)}return c.join(" ")}n.d(t,{g:function(){return withBreakpoints}})},48291:function(e,t,n){"use strict";n.d(t,{m:function(){return a}});var r=n(80269);let a={type:"enum",values:r.yT.accentColor.values,default:void 0}},86679:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});let r={type:"boolean",default:void 0}},57361:function(e,t,n){"use strict";n.d(t,{a:function(){return r}});let r={type:"enum",values:["normal","start","end","both"],default:void 0,responsive:!0}},23843:function(e,t,n){"use strict";n.d(t,{FY:function(){return extractMarginProps},we:function(){return withMarginProps}});var r=n(6776);let a=["auto","0","1","2","3","4","5","6","7","8","9","-1","-2","-3","-4","-5","-6","-7","-8","-9"],o={m:{type:"enum",values:a,default:void 0,responsive:!0},mx:{type:"enum",values:a,default:void 0,responsive:!0},my:{type:"enum",values:a,default:void 0,responsive:!0},mt:{type:"enum",values:a,default:void 0,responsive:!0},mr:{type:"enum",values:a,default:void 0,responsive:!0},mb:{type:"enum",values:a,default:void 0,responsive:!0},ml:{type:"enum",values:a,default:void 0,responsive:!0}};function extractMarginProps(e){let{m:t=o.m.default,mx:n=o.mx.default,my:r=o.my.default,mt:a=o.mt.default,mr:i=o.mr.default,mb:c=o.mb.default,ml:u=o.ml.default,...l}=e;return{m:t,mx:n,my:r,mt:a,mr:i,mb:c,ml:u,rest:l}}function withMarginProps(e){return[(0,r.g)(e.m,"rt-r-m"),(0,r.g)(e.mx,"rt-r-mx"),(0,r.g)(e.my,"rt-r-my"),(0,r.g)(e.mt,"rt-r-mt"),(0,r.g)(e.mr,"rt-r-mr"),(0,r.g)(e.mb,"rt-r-mb"),(0,r.g)(e.ml,"rt-r-ml")].filter(Boolean).join(" ")}},40617:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});let r={type:"enum",values:["left","center","right"],default:void 0,responsive:!0}},83416:function(e,t,n){"use strict";n.d(t,{b:function(){return r}});let r={type:"enum",values:["light","regular","medium","bold"],default:void 0,responsive:!0}},23541:function(e,t,n){"use strict";n.d(t,{Ry:function(){return hideOthers}});var r=new WeakMap,a=new WeakMap,o={},i=0,unwrapHost=function(e){return e&&(e.host||unwrapHost(e.parentNode))},applyAttributeToOthers=function(e,t,n,c){var u=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=unwrapHost(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});o[n]||(o[n]=new WeakMap);var l=o[n],s=[],d=new Set,f=new Set(u),keep=function(e){!e||d.has(e)||(d.add(e),keep(e.parentNode))};u.forEach(keep);var deep=function(e){!e||f.has(e)||Array.prototype.forEach.call(e.children,function(e){if(d.has(e))deep(e);else try{var t=e.getAttribute(c),o=null!==t&&"false"!==t,i=(r.get(e)||0)+1,u=(l.get(e)||0)+1;r.set(e,i),l.set(e,u),s.push(e),1===i&&o&&a.set(e,!0),1===u&&e.setAttribute(n,"true"),o||e.setAttribute(c,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return deep(t),d.clear(),i++,function(){s.forEach(function(e){var t=r.get(e)-1,o=l.get(e)-1;r.set(e,t),l.set(e,o),t||(a.has(e)||e.removeAttribute(c),a.delete(e)),o||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,a=new WeakMap,o={})}},hideOthers=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),applyAttributeToOthers(r,a,n,"aria-hidden")):function(){return null}}},45711:function(e,t,n){"use strict";n.d(t,{Z:function(){return createLucideIcon}});var r=n(67294),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),createLucideIcon=(e,t)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:u="",children:l,...s},d)=>(0,r.createElement)("svg",{ref:d,...a,width:o,height:o,stroke:n,strokeWidth:c?24*Number(i)/Number(o):i,className:["lucide",`lucide-${toKebabCase(e)}`,u].join(" "),...s},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n}},15637:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(45711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r.Z)("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]])},9008:function(e,t,n){e.exports=n(79201)},71642:function(e,t,n){"use strict";n.d(t,{Av:function(){return i},pF:function(){return r},xv:function(){return o},zi:function(){return a}});var r="right-scroll-bar-position",a="width-before-scroll-bar",o="with-scroll-bars-hidden",i="--removed-body-scroll-bar-size"},37087:function(e,t,n){"use strict";n.d(t,{jp:function(){return RemoveScrollBar}});var r=n(67294),a=n(6525),o=n(71642),i={left:0,top:0,right:0,gap:0},parse=function(e){return parseInt(e||"",10)||0},getOffset=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],a=t["padding"===e?"paddingRight":"marginRight"];return[parse(n),parse(r),parse(a)]},getGapWidth=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return i;var t=getOffset(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},c=(0,a.Ws)(),u="data-scroll-locked",getStyles=function(e,t,n,r){var a=e.left,i=e.top,c=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat(o.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body[").concat(u,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(a,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(o.pF," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(o.zi," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(o.pF," .").concat(o.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(o.zi," .").concat(o.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(u,"] {\n    ").concat(o.Av,": ").concat(l,"px;\n  }\n")},getCurrentUseCounter=function(){var e=parseInt(document.body.getAttribute(u)||"0",10);return isFinite(e)?e:0},useLockAttribute=function(){r.useEffect(function(){return document.body.setAttribute(u,(getCurrentUseCounter()+1).toString()),function(){var e=getCurrentUseCounter()-1;e<=0?document.body.removeAttribute(u):document.body.setAttribute(u,e.toString())}},[])},RemoveScrollBar=function(e){var t=e.noRelative,n=e.noImportant,a=e.gapMode,o=void 0===a?"margin":a;useLockAttribute();var i=r.useMemo(function(){return getGapWidth(o)},[o]);return r.createElement(c,{styles:getStyles(i,!t,o,n?"":"!important")})}},6525:function(e,t,n){"use strict";n.d(t,{Ws:function(){return styleSingleton}});var r,a=n(67294);function makeStyleTag(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}function injectStyles(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function insertStyleTag(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}var stylesheetSingleton=function(){var e=0,t=null;return{add:function(n){0==e&&(t=makeStyleTag())&&(injectStyles(t,n),insertStyleTag(t)),e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},styleHookSingleton=function(){var e=stylesheetSingleton();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},styleSingleton=function(){var e=styleHookSingleton();return function(t){return e(t.styles,t.dynamic),null}}},99495:function(e,t,n){"use strict";n.d(t,{q:function(){return useMergeRefs}});var r=n(67294);function assignRef(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}function useCallbackRef(e,t){var n=(0,r.useState)(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(value){var r=n.value;r!==value&&(n.value=value,n.callback(value,r))}}}})[0];return n.callback=t,n.facade}var a="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,o=new WeakMap;function useMergeRefs(e,t){var n=useCallbackRef(t||null,function(t){return e.forEach(function(e){return assignRef(e,t)})});return a(function(){var t=o.get(n);if(t){var r=new Set(t),a=new Set(e),i=n.current;r.forEach(function(e){a.has(e)||assignRef(e,null)}),a.forEach(function(e){r.has(e)||assignRef(e,i)})}o.set(n,e)},[e]),n}},66781:function(e,t,n){"use strict";n.d(t,{L:function(){return exportSidecar}});var r=n(97582),a=n(67294),SideCar=function(e){var t=e.sideCar,n=(0,r._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw Error("Sidecar medium not found");return a.createElement(o,(0,r.pi)({},n))};function exportSidecar(e,t){return e.useMedium(t),SideCar}SideCar.isSideCarExport=!0},87122:function(e,t,n){"use strict";n.d(t,{_:function(){return createSidecarMedium}});var r=n(97582);function ItoI(e){return e}function innerCreateMedium(e,t){void 0===t&&(t=ItoI);var n=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var a=t(e,r);return n.push(a),function(){n=n.filter(function(e){return e!==a})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var a=n;n=[],a.forEach(e),t=n}var executeQueue=function(){var n=t;t=[],n.forEach(e)},cycle=function(){return Promise.resolve().then(executeQueue)};cycle(),n={push:function(e){t.push(e),cycle()},filter:function(e){return t=t.filter(e),n}}}}}function createSidecarMedium(e){void 0===e&&(e={});var t=innerCreateMedium(null);return t.options=(0,r.pi)({async:!0,ssr:!1},e),t}},27552:function(e,t,n){"use strict";n.d(t,{EW:function(){return $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c}});var r=n(67294);let a=0;function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:$3db38b7d1fb3fe6a$var$createFocusGuard()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:$3db38b7d1fb3fe6a$var$createFocusGuard()),a++,()=>{1===a&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),a--}},[])}function $3db38b7d1fb3fe6a$var$createFocusGuard(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},95420:function(e,t,n){"use strict";n.d(t,{M:function(){return d}});var r=n(87462),a=n(67294),o=n(28771),i=n(75320),c=n(79698);let u="focusScope.autoFocusOnMount",l="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},d=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:d=!1,onMountAutoFocus:p,onUnmountAutoFocus:v,...m}=e,[g,h]=(0,a.useState)(null),b=(0,c.W)(p),y=(0,c.W)(v),$=(0,a.useRef)(null),E=(0,o.e)(t,e=>h(e)),w=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(d){function handleFocusIn(e){if(w.paused||!g)return;let t=e.target;g.contains(t)?$.current=t:$d3863c46a17e8a28$var$focus($.current,{select:!0})}function handleFocusOut(e){if(w.paused||!g)return;let t=e.relatedTarget;null===t||g.contains(t)||$d3863c46a17e8a28$var$focus($.current,{select:!0})}function handleMutations(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&$d3863c46a17e8a28$var$focus(g)}document.addEventListener("focusin",handleFocusIn),document.addEventListener("focusout",handleFocusOut);let e=new MutationObserver(handleMutations);return g&&e.observe(g,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",handleFocusIn),document.removeEventListener("focusout",handleFocusOut),e.disconnect()}}},[d,g,w.paused]),(0,a.useEffect)(()=>{if(g){f.add(w);let e=document.activeElement,t=g.contains(e);if(!t){let t=new CustomEvent(u,s);g.addEventListener(u,b),g.dispatchEvent(t),t.defaultPrevented||($d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(g)),{select:!0}),document.activeElement===e&&$d3863c46a17e8a28$var$focus(g))}return()=>{g.removeEventListener(u,b),setTimeout(()=>{let t=new CustomEvent(l,s);g.addEventListener(l,y),g.dispatchEvent(t),t.defaultPrevented||$d3863c46a17e8a28$var$focus(null!=e?e:document.body,{select:!0}),g.removeEventListener(l,y),f.remove(w)},0)}}},[g,b,y,w]);let S=(0,a.useCallback)(e=>{if(!n&&!d||w.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[a,o]=$d3863c46a17e8a28$var$getTabbableEdges(t),i=a&&o;i?e.shiftKey||r!==o?e.shiftKey&&r===a&&(e.preventDefault(),n&&$d3863c46a17e8a28$var$focus(o,{select:!0})):(e.preventDefault(),n&&$d3863c46a17e8a28$var$focus(a,{select:!0})):r===t&&e.preventDefault()}},[n,d,w.paused]);return(0,a.createElement)(i.WV.div,(0,r.Z)({tabIndex:-1},m,{ref:E,onKeyDown:S}))});function $d3863c46a17e8a28$var$focusFirst(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if($d3863c46a17e8a28$var$focus(r,{select:t}),document.activeElement!==n)return}function $d3863c46a17e8a28$var$getTabbableEdges(e){let t=$d3863c46a17e8a28$var$getTabbableCandidates(e),n=$d3863c46a17e8a28$var$findVisible(t,e),r=$d3863c46a17e8a28$var$findVisible(t.reverse(),e);return[n,r]}function $d3863c46a17e8a28$var$getTabbableCandidates(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function $d3863c46a17e8a28$var$findVisible(e,t){for(let n of e)if(!$d3863c46a17e8a28$var$isHidden(n,{upTo:t}))return n}function $d3863c46a17e8a28$var$isHidden(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function $d3863c46a17e8a28$var$isSelectableInput(e){return e instanceof HTMLInputElement&&"select"in e}function $d3863c46a17e8a28$var$focus(e,{select:t=!1}={}){if(e&&e.focus){let n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&$d3863c46a17e8a28$var$isSelectableInput(e)&&t&&e.select()}}let f=$d3863c46a17e8a28$var$createFocusScopesStack();function $d3863c46a17e8a28$var$createFocusScopesStack(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=$d3863c46a17e8a28$var$arrayRemove(e,t)).unshift(t)},remove(t){var n;null===(n=(e=$d3863c46a17e8a28$var$arrayRemove(e,t))[0])||void 0===n||n.resume()}}}function $d3863c46a17e8a28$var$arrayRemove(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}function $d3863c46a17e8a28$var$removeLinks(e){return e.filter(e=>"A"!==e.tagName)}},82729:function(e,t,n){"use strict";function _tagged_template_literal(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return _tagged_template_literal}})},97582:function(e,t,n){"use strict";n.d(t,{_T:function(){return __rest},ev:function(){return __spreadArray},pi:function(){return __assign}});var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function __rest(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function __spreadArray(e,t,n){if(n||2==arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError}}]);