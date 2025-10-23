(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function b1(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Vf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function A1(){if(r0)return Mo;r0=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:s,key:f,ref:o!==void 0?o:null,props:c}}return Mo.Fragment=t,Mo.jsx=n,Mo.jsxs=n,Mo}var o0;function R1(){return o0||(o0=1,Vf.exports=A1()),Vf.exports}var q=R1(),kf={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function w1(){if(l0)return ue;l0=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function y(N,nt,xt){this.props=N,this.context=nt,this.refs=b,this.updater=xt||M}y.prototype.isReactComponent={},y.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=y.prototype;function z(N,nt,xt){this.props=N,this.context=nt,this.refs=b,this.updater=xt||M}var L=z.prototype=new v;L.constructor=z,T(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function I(N,nt,xt,yt,Ut,Ht){return xt=Ht.ref,{$$typeof:a,type:N,key:nt,ref:xt!==void 0?xt:null,props:Ht}}function W(N,nt){return I(N.type,nt,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function C(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return nt[xt]})}var G=/\/+/g;function K(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):nt.toString(36)}function lt(){}function et(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(lt,lt):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function dt(N,nt,xt,yt,Ut){var Ht=typeof N;(Ht==="undefined"||Ht==="boolean")&&(N=null);var at=!1;if(N===null)at=!0;else switch(Ht){case"bigint":case"string":case"number":at=!0;break;case"object":switch(N.$$typeof){case a:case t:at=!0;break;case g:return at=N._init,dt(at(N._payload),nt,xt,yt,Ut)}}if(at)return Ut=Ut(N),at=yt===""?"."+K(N,0):yt,R(Ut)?(xt="",at!=null&&(xt=at.replace(G,"$&/")+"/"),dt(Ut,nt,xt,"",function(Zt){return Zt})):Ut!=null&&(D(Ut)&&(Ut=W(Ut,xt+(Ut.key==null||N&&N.key===Ut.key?"":(""+Ut.key).replace(G,"$&/")+"/")+at)),nt.push(Ut)),1;at=0;var gt=yt===""?".":yt+":";if(R(N))for(var Mt=0;Mt<N.length;Mt++)yt=N[Mt],Ht=gt+K(yt,Mt),at+=dt(yt,nt,xt,Ht,Ut);else if(Mt=x(N),typeof Mt=="function")for(N=Mt.call(N),Mt=0;!(yt=N.next()).done;)yt=yt.value,Ht=gt+K(yt,Mt++),at+=dt(yt,nt,xt,Ht,Ut);else if(Ht==="object"){if(typeof N.then=="function")return dt(et(N),nt,xt,yt,Ut);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return at}function F(N,nt,xt){if(N==null)return N;var yt=[],Ut=0;return dt(N,yt,"","",function(Ht){return nt.call(xt,Ht,Ut++)}),yt}function J(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function St(){}return ue.Children={map:F,forEach:function(N,nt,xt){F(N,function(){nt.apply(this,arguments)},xt)},count:function(N){var nt=0;return F(N,function(){nt++}),nt},toArray:function(N){return F(N,function(nt){return nt})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ue.Component=y,ue.Fragment=n,ue.Profiler=o,ue.PureComponent=z,ue.StrictMode=s,ue.Suspense=p,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ue.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},ue.cache=function(N){return function(){return N.apply(null,arguments)}},ue.cloneElement=function(N,nt,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var yt=T({},N.props),Ut=N.key,Ht=void 0;if(nt!=null)for(at in nt.ref!==void 0&&(Ht=void 0),nt.key!==void 0&&(Ut=""+nt.key),nt)!P.call(nt,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&nt.ref===void 0||(yt[at]=nt[at]);var at=arguments.length-2;if(at===1)yt.children=xt;else if(1<at){for(var gt=Array(at),Mt=0;Mt<at;Mt++)gt[Mt]=arguments[Mt+2];yt.children=gt}return I(N.type,Ut,void 0,void 0,Ht,yt)},ue.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ue.createElement=function(N,nt,xt){var yt,Ut={},Ht=null;if(nt!=null)for(yt in nt.key!==void 0&&(Ht=""+nt.key),nt)P.call(nt,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Ut[yt]=nt[yt]);var at=arguments.length-2;if(at===1)Ut.children=xt;else if(1<at){for(var gt=Array(at),Mt=0;Mt<at;Mt++)gt[Mt]=arguments[Mt+2];Ut.children=gt}if(N&&N.defaultProps)for(yt in at=N.defaultProps,at)Ut[yt]===void 0&&(Ut[yt]=at[yt]);return I(N,Ht,void 0,void 0,null,Ut)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(N){return{$$typeof:h,render:N}},ue.isValidElement=D,ue.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:J}},ue.memo=function(N,nt){return{$$typeof:m,type:N,compare:nt===void 0?null:nt}},ue.startTransition=function(N){var nt=O.T,xt={};O.T=xt;try{var yt=N(),Ut=O.S;Ut!==null&&Ut(xt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(St,Y)}catch(Ht){Y(Ht)}finally{O.T=nt}},ue.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ue.use=function(N){return O.H.use(N)},ue.useActionState=function(N,nt,xt){return O.H.useActionState(N,nt,xt)},ue.useCallback=function(N,nt){return O.H.useCallback(N,nt)},ue.useContext=function(N){return O.H.useContext(N)},ue.useDebugValue=function(){},ue.useDeferredValue=function(N,nt){return O.H.useDeferredValue(N,nt)},ue.useEffect=function(N,nt,xt){var yt=O.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(N,nt)},ue.useId=function(){return O.H.useId()},ue.useImperativeHandle=function(N,nt,xt){return O.H.useImperativeHandle(N,nt,xt)},ue.useInsertionEffect=function(N,nt){return O.H.useInsertionEffect(N,nt)},ue.useLayoutEffect=function(N,nt){return O.H.useLayoutEffect(N,nt)},ue.useMemo=function(N,nt){return O.H.useMemo(N,nt)},ue.useOptimistic=function(N,nt){return O.H.useOptimistic(N,nt)},ue.useReducer=function(N,nt,xt){return O.H.useReducer(N,nt,xt)},ue.useRef=function(N){return O.H.useRef(N)},ue.useState=function(N){return O.H.useState(N)},ue.useSyncExternalStore=function(N,nt,xt){return O.H.useSyncExternalStore(N,nt,xt)},ue.useTransition=function(){return O.H.useTransition()},ue.version="19.1.1",ue}var c0;function Ed(){return c0||(c0=1,kf.exports=w1()),kf.exports}var On=Ed();const vs=b1(On);var Xf={exports:{}},Eo={},Wf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function C1(){return u0||(u0=1,(function(a){function t(F,J){var Y=F.length;F.push(J);t:for(;0<Y;){var St=Y-1>>>1,N=F[St];if(0<o(N,J))F[St]=J,F[Y]=N,Y=St;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var J=F[0],Y=F.pop();if(Y!==J){F[0]=Y;t:for(var St=0,N=F.length,nt=N>>>1;St<nt;){var xt=2*(St+1)-1,yt=F[xt],Ut=xt+1,Ht=F[Ut];if(0>o(yt,Y))Ut<N&&0>o(Ht,yt)?(F[St]=Ht,F[Ut]=Y,St=Ut):(F[St]=yt,F[xt]=Y,St=xt);else if(Ut<N&&0>o(Ht,Y))F[St]=Ht,F[Ut]=Y,St=Ut;else break t}}return J}function o(F,J){var Y=F.sortIndex-J.sortIndex;return Y!==0?Y:F.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,_=null,x=3,M=!1,T=!1,b=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var J=n(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=F)s(m),J.sortIndex=J.expirationTime,t(p,J);else break;J=n(m)}}function O(F){if(b=!1,R(F),!T)if(n(p)!==null)T=!0,P||(P=!0,K());else{var J=n(m);J!==null&&dt(O,J.startTime-F)}}var P=!1,I=-1,W=5,D=-1;function C(){return y?!0:!(a.unstable_now()-D<W)}function G(){if(y=!1,P){var F=a.unstable_now();D=F;var J=!0;try{t:{T=!1,b&&(b=!1,z(I),I=-1),M=!0;var Y=x;try{e:{for(R(F),_=n(p);_!==null&&!(_.expirationTime>F&&C());){var St=_.callback;if(typeof St=="function"){_.callback=null,x=_.priorityLevel;var N=St(_.expirationTime<=F);if(F=a.unstable_now(),typeof N=="function"){_.callback=N,R(F),J=!0;break e}_===n(p)&&s(p),R(F)}else s(p);_=n(p)}if(_!==null)J=!0;else{var nt=n(m);nt!==null&&dt(O,nt.startTime-F),J=!1}}break t}finally{_=null,x=Y,M=!1}J=void 0}}finally{J?K():P=!1}}}var K;if(typeof L=="function")K=function(){L(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,et=lt.port2;lt.port1.onmessage=G,K=function(){et.postMessage(null)}}else K=function(){v(G,0)};function dt(F,J){I=v(function(){F(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(F){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var Y=x;x=J;try{return F()}finally{x=Y}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(F,J){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Y=x;x=F;try{return J()}finally{x=Y}},a.unstable_scheduleCallback=function(F,J,Y){var St=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?St+Y:St):Y=St,F){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,F={id:g++,callback:J,priorityLevel:F,startTime:Y,expirationTime:N,sortIndex:-1},Y>St?(F.sortIndex=Y,t(m,F),n(p)===null&&F===n(m)&&(b?(z(I),I=-1):b=!0,dt(O,Y-St))):(F.sortIndex=N,t(p,F),T||M||(T=!0,P||(P=!0,K()))),F},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(F){var J=x;return function(){var Y=x;x=J;try{return F.apply(this,arguments)}finally{x=Y}}}})(qf)),qf}var f0;function D1(){return f0||(f0=1,Wf.exports=C1()),Wf.exports}var Yf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function U1(){if(h0)return Rn;h0=1;var a=Ed();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Rn.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},Rn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Rn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Rn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Rn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Rn.requestFormReset=function(p){s.d.r(p)},Rn.unstable_batchedUpdates=function(p,m){return p(m)},Rn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.1.1",Rn}var d0;function L1(){if(d0)return Yf.exports;d0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Yf.exports=U1(),Yf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function N1(){if(p0)return Eo;p0=1;var a=D1(),t=Ed(),n=L1();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var r=e,l=i;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){r=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return h(u),e;if(d===l)return h(u),i;d=d.sibling}throw Error(s(188))}if(r.return!==l.return)r=u,l=d;else{for(var E=!1,A=u.child;A;){if(A===r){E=!0,r=u,l=d;break}if(A===l){E=!0,l=u,r=d;break}A=A.sibling}if(!E){for(A=d.child;A;){if(A===r){E=!0,r=d,l=u;break}if(A===l){E=!0,l=d,r=u;break}A=A.sibling}if(!E)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:i}function m(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=m(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case O:return"Suspense";case P:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case L:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case R:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:et(e.type)||"Memo";case W:i=e._payload,e=e._init;try{return et(e(i))}catch{}}return null}var dt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},St=[],N=-1;function nt(e){return{current:e}}function xt(e){0>N||(e.current=St[N],St[N]=null,N--)}function yt(e,i){N++,St[N]=e.current,e.current=i}var Ut=nt(null),Ht=nt(null),at=nt(null),gt=nt(null);function Mt(e,i){switch(yt(at,i),yt(Ht,e),yt(Ut,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Og(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Og(i),e=Pg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Ut),yt(Ut,e)}function Zt(){xt(Ut),xt(Ht),xt(at)}function qt(e){e.memoizedState!==null&&yt(gt,e);var i=Ut.current,r=Pg(i,e.type);i!==r&&(yt(Ht,e),yt(Ut,r))}function ce(e){Ht.current===e&&(xt(Ut),xt(Ht)),gt.current===e&&(xt(gt),_o._currentValue=Y)}var je=Object.prototype.hasOwnProperty,H=a.unstable_scheduleCallback,Ce=a.unstable_cancelCallback,se=a.unstable_shouldYield,$t=a.unstable_requestPaint,zt=a.unstable_now,ye=a.unstable_getCurrentPriorityLevel,Gt=a.unstable_ImmediatePriority,re=a.unstable_UserBlockingPriority,He=a.unstable_NormalPriority,Ge=a.unstable_LowPriority,U=a.unstable_IdlePriority,S=a.log,V=a.unstable_setDisableYieldValue,$=null,ft=null;function st(e){if(typeof S=="function"&&V(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode($,e)}catch{}}var wt=Math.clz32?Math.clz32:kt,Rt=Math.log,Bt=Math.LN2;function kt(e){return e>>>=0,e===0?32:31-(Rt(e)/Bt|0)|0}var Et=256,Nt=4194304;function Kt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var u=0,d=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~d,l!==0?u=Kt(l):(E&=A,E!==0?u=Kt(E):r||(r=A&~e,r!==0&&(u=Kt(r))))):(A=l&~d,A!==0?u=Kt(A):E!==0?u=Kt(E):r||(r=l&~e,r!==0&&(u=Kt(r)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:u}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function oe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function At(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function Ct(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Ft(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,i,r,l,u,d){var E=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,it=e.hiddenUpdates;for(r=E&~r;0<r;){var pt=31-wt(r),_t=1<<pt;A[pt]=0,B[pt]=-1;var rt=it[pt];if(rt!==null)for(it[pt]=null,pt=0;pt<rt.length;pt++){var ot=rt[pt];ot!==null&&(ot.lane&=-536870913)}r&=~_t}l!==0&&vt(e,l,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(E&~i))}function vt(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-wt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&4194090}function Xt(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-wt(r),u=1<<l;u&i|e[l]&i&&(e[l]|=i),r&=~u}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:t0(e.type))}function fi(e,i){var r=J.p;try{return J.p=e,i()}finally{J.p=r}}var cn=Math.random().toString(36).slice(2),un="__reactFiber$"+cn,Ze="__reactProps$"+cn,Ti="__reactContainer$"+cn,Ms="__reactEvents$"+cn,Vo="__reactListeners$"+cn,Es="__reactHandles$"+cn,wr="__reactResources$"+cn,bi="__reactMarker$"+cn;function Ts(e){delete e[un],delete e[Ze],delete e[Ms],delete e[Vo],delete e[Es]}function Oi(e){var i=e[un];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Ti]||r[un]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Ig(e);e!==null;){if(r=e[un])return r;e=Ig(e)}return i}e=r,r=e.parentNode}return null}function la(e){if(e=e[un]||e[Ti]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Xa(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function ca(e){var i=e[wr];return i||(i=e[wr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function nn(e){e[bi]=!0}var ko=new Set,Xo={};function w(e,i){j(e,i),j(e+"Capture",i)}function j(e,i){for(Xo[e]=i,e=0;e<i.length;e++)ko.add(i[e])}var ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ht={},Q={};function bt(e){return je.call(Q,e)?!0:je.call(ht,e)?!1:ut.test(e)?Q[e]=!0:(ht[e]=!0,!1)}function Lt(e,i,r){if(bt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function It(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Ot(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}var Jt,ee;function Yt(e){if(Jt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Jt=i&&i[1]||"",ee=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+ee}var he=!1;function Te(e,i){if(!e||he)return"";he=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var rt=ot}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ot){rt=ot}e.call(_t.prototype)}}else{try{throw Error()}catch(ot){rt=ot}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&rt&&typeof ot.stack=="string")return[ot.stack,rt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],A=d[1];if(E&&A){var B=E.split(`
`),it=A.split(`
`);for(u=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(l===B.length||u===it.length)for(l=B.length-1,u=it.length-1;1<=l&&0<=u&&B[l]!==it[u];)u--;for(;1<=l&&0<=u;l--,u--)if(B[l]!==it[u]){if(l!==1||u!==1)do if(l--,u--,0>u||B[l]!==it[u]){var pt=`
`+B[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=u);break}}}finally{he=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Yt(r):""}function Xe(e){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Yt("Activity");default:return""}}function Ne(e){try{var i="";do i+=Xe(e),e=e.return;while(e);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ke(e){var i=Qt(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,d=r.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(e,i,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function _e(e){e._valueTracker||(e._valueTracker=ke(e))}function Tn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=Qt(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function mn(e){return e.replace(Dn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Be(e,i,r,l,u,d,E,A){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+de(i)):e.value!==""+de(i)&&(e.value=""+de(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?bn(e,E,de(i)):r!=null?bn(e,E,de(r)):l!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+de(A):e.removeAttribute("name")}function Un(e,i,r,l,u,d,E,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;r=r!=null?""+de(r):"",i=i!=null?""+de(i):r,A||i===e.value||(e.value=i),e.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function bn(e,i,r){i==="number"&&hi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Ke(e,i,r,l){if(e=e.options,i){i={};for(var u=0;u<r.length;u++)i["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=i.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&l&&(e[r].defaultSelected=!0)}else{for(r=""+de(r),i=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Sn(e,i,r){if(i!=null&&(i=""+de(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+de(r):""}function bs(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(s(92));if(dt(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=de(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l)}function Pn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Mv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Od(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||Mv.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Pd(e,i,r){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&r[u]!==l&&Od(e,u,l)}else for(var d in i)i.hasOwnProperty(d)&&Od(e,d,i[d])}function Hc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ev=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(e){return Tv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Gc=null;function Vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Rs=null;function zd(e){var i=la(e);if(i&&(e=i.stateNode)){var r=e[Ze]||null;t:switch(e=i.stateNode,i.type){case"input":if(Be(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+mn(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var u=l[Ze]||null;if(!u)throw Error(s(90));Be(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&Tn(l)}break t;case"textarea":Sn(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&Ke(e,!!r.multiple,i,!1)}}}var kc=!1;function Fd(e,i,r){if(kc)return e(i,r);kc=!0;try{var l=e(i);return l}finally{if(kc=!1,(As!==null||Rs!==null)&&(Dl(),As&&(i=As,e=Rs,Rs=As=null,zd(i),e)))for(i=0;i<e.length;i++)zd(e[i])}}function Cr(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Ze]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,i,typeof r));return r}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(Pi)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Xc=!1}var ua=null,Wc=null,qo=null;function Bd(){if(qo)return qo;var e,i=Wc,r=i.length,l,u="value"in ua?ua.value:ua.textContent,d=u.length;for(e=0;e<r&&i[e]===u[e];e++);var E=r-e;for(l=1;l<=E&&i[r-l]===u[d-l];l++);return qo=u.slice(e,1<l?1-l:void 0)}function Yo(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Id(){return!1}function zn(e){function i(r,l,u,d,E){this._reactName=r,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(r=e[A],this[A]=r?r(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?jo:Id,this.isPropagationStopped=Id,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),i}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=zn(Wa),Ur=g({},Wa,{view:0,detail:0}),bv=zn(Ur),qc,Yc,Lr,Ko=g({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(qc=e.screenX-Lr.screenX,Yc=e.screenY-Lr.screenY):Yc=qc=0,Lr=e),qc)},movementY:function(e){return"movementY"in e?e.movementY:Yc}}),Hd=zn(Ko),Av=g({},Ko,{dataTransfer:0}),Rv=zn(Av),wv=g({},Ur,{relatedTarget:0}),jc=zn(wv),Cv=g({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=zn(Cv),Uv=g({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lv=zn(Uv),Nv=g({},Wa,{data:0}),Gd=zn(Nv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=zv[e])?!!i[e]:!1}function Zc(){return Fv}var Bv=g({},Ur,{key:function(e){if(e.key){var i=Ov[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Iv=zn(Bv),Hv=g({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=zn(Hv),Gv=g({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),Vv=zn(Gv),kv=g({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=zn(kv),Wv=g({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=zn(Wv),Yv=g({},Wa,{newState:0,oldState:0}),jv=zn(Yv),Zv=[9,13,27,32],Kc=Pi&&"CompositionEvent"in window,Nr=null;Pi&&"documentMode"in document&&(Nr=document.documentMode);var Kv=Pi&&"TextEvent"in window&&!Nr,kd=Pi&&(!Kc||Nr&&8<Nr&&11>=Nr),Xd=" ",Wd=!1;function qd(e,i){switch(e){case"keyup":return Zv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ws=!1;function Qv(e,i){switch(e){case"compositionend":return Yd(i);case"keypress":return i.which!==32?null:(Wd=!0,Xd);case"textInput":return e=i.data,e===Xd&&Wd?null:e;default:return null}}function Jv(e,i){if(ws)return e==="compositionend"||!Kc&&qd(e,i)?(e=Bd(),qo=Wc=ua=null,ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return kd&&i.locale!=="ko"?null:i.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!$v[e.type]:i==="textarea"}function Zd(e,i,r,l){As?Rs?Rs.push(l):Rs=[l]:As=l,i=zl(i,"onChange"),0<i.length&&(r=new Zo("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var Or=null,Pr=null;function tx(e){Cg(e,0)}function Qo(e){var i=Xa(e);if(Tn(i))return e}function Kd(e,i){if(e==="change")return i}var Qd=!1;if(Pi){var Qc;if(Pi){var Jc="oninput"in document;if(!Jc){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),Jc=typeof Jd.oninput=="function"}Qc=Jc}else Qc=!1;Qd=Qc&&(!document.documentMode||9<document.documentMode)}function $d(){Or&&(Or.detachEvent("onpropertychange",tp),Pr=Or=null)}function tp(e){if(e.propertyName==="value"&&Qo(Pr)){var i=[];Zd(i,Pr,e,Vc(e)),Fd(tx,i)}}function ex(e,i,r){e==="focusin"?($d(),Or=i,Pr=r,Or.attachEvent("onpropertychange",tp)):e==="focusout"&&$d()}function nx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Pr)}function ix(e,i){if(e==="click")return Qo(i)}function ax(e,i){if(e==="input"||e==="change")return Qo(i)}function sx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Xn=typeof Object.is=="function"?Object.is:sx;function zr(e,i){if(Xn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var u=r[l];if(!je.call(i,u)||!Xn(e[u],i[u]))return!1}return!0}function ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function np(e,i){var r=ep(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=ep(r)}}function ip(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?ip(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=hi(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=hi(e.document)}return i}function $c(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var rx=Pi&&"documentMode"in document&&11>=document.documentMode,Cs=null,tu=null,Fr=null,eu=!1;function sp(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;eu||Cs==null||Cs!==hi(l)||(l=Cs,"selectionStart"in l&&$c(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Fr&&zr(Fr,l)||(Fr=l,l=zl(tu,"onSelect"),0<l.length&&(i=new Zo("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Cs)))}function qa(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Ds={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},nu={},rp={};Pi&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Ya(e){if(nu[e])return nu[e];if(!Ds[e])return e;var i=Ds[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in rp)return nu[e]=i[r];return e}var op=Ya("animationend"),lp=Ya("animationiteration"),cp=Ya("animationstart"),ox=Ya("transitionrun"),lx=Ya("transitionstart"),cx=Ya("transitioncancel"),up=Ya("transitionend"),fp=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function di(e,i){fp.set(e,i),w(i,[e])}var hp=new WeakMap;function ti(e,i){if(typeof e=="object"&&e!==null){var r=hp.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Ne(i)},hp.set(e,i),i)}return{value:e,source:i,stack:Ne(i)}}var ei=[],Us=0,au=0;function Jo(){for(var e=Us,i=au=Us=0;i<e;){var r=ei[i];ei[i++]=null;var l=ei[i];ei[i++]=null;var u=ei[i];ei[i++]=null;var d=ei[i];if(ei[i++]=null,l!==null&&u!==null){var E=l.pending;E===null?u.next=u:(u.next=E.next,E.next=u),l.pending=u}d!==0&&dp(r,u,d)}}function $o(e,i,r,l){ei[Us++]=e,ei[Us++]=i,ei[Us++]=r,ei[Us++]=l,au|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function su(e,i,r,l){return $o(e,i,r,l),tl(e)}function Ls(e,i){return $o(e,null,null,i),tl(e)}function dp(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var u=!1,d=e.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-wt(r),e=d.hiddenUpdates,l=e[u],l===null?e[u]=[i]:l.push(i),i.lane=r|536870912),d):null}function tl(e){if(50<lo)throw lo=0,hf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ns={};function ux(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,i,r,l){return new ux(e,i,r,l)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zi(e,i){var r=e.alternate;return r===null?(r=Wn(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function pp(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function el(e,i,r,l,u,d){var E=0;if(l=e,typeof e=="function")ru(e)&&(E=1);else if(typeof e=="string")E=h1(e,r,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Wn(31,r,i,u),e.elementType=D,e.lanes=d,e;case T:return ja(r.children,u,d,i);case b:E=8,u|=24;break;case y:return e=Wn(12,r,i,u|2),e.elementType=y,e.lanes=d,e;case O:return e=Wn(13,r,i,u),e.elementType=O,e.lanes=d,e;case P:return e=Wn(19,r,i,u),e.elementType=P,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case L:E=10;break t;case z:E=9;break t;case R:E=11;break t;case I:E=14;break t;case W:E=16,l=null;break t}E=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=Wn(E,r,i,u),i.elementType=e,i.type=l,i.lanes=d,i}function ja(e,i,r,l){return e=Wn(7,e,l,i),e.lanes=r,e}function ou(e,i,r){return e=Wn(6,e,null,i),e.lanes=r,e}function lu(e,i,r){return i=Wn(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Os=[],Ps=0,nl=null,il=0,ni=[],ii=0,Za=null,Fi=1,Bi="";function Ka(e,i){Os[Ps++]=il,Os[Ps++]=nl,nl=e,il=i}function mp(e,i,r){ni[ii++]=Fi,ni[ii++]=Bi,ni[ii++]=Za,Za=e;var l=Fi;e=Bi;var u=32-wt(l)-1;l&=~(1<<u),r+=1;var d=32-wt(i)+u;if(30<d){var E=u-u%5;d=(l&(1<<E)-1).toString(32),l>>=E,u-=E,Fi=1<<32-wt(i)+u|r<<u|l,Bi=d+e}else Fi=1<<d|r<<u|l,Bi=e}function cu(e){e.return!==null&&(Ka(e,1),mp(e,1,0))}function uu(e){for(;e===nl;)nl=Os[--Ps],Os[Ps]=null,il=Os[--Ps],Os[Ps]=null;for(;e===Za;)Za=ni[--ii],ni[ii]=null,Bi=ni[--ii],ni[ii]=null,Fi=ni[--ii],ni[ii]=null}var Ln=null,Qe=null,Re=!1,Qa=null,Ai=!1,fu=Error(s(519));function Ja(e){var i=Error(s(418,""));throw Hr(ti(i,e)),fu}function gp(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[un]=e,i[Ze]=l,r){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(r=0;r<uo.length;r++)xe(uo[r],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),Un(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),_e(i);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),bs(i,l.value,l.defaultValue,l.children),_e(i)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||Ng(i.textContent,r)?(l.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),l.onScroll!=null&&xe("scroll",i),l.onScrollEnd!=null&&xe("scrollend",i),l.onClick!=null&&(i.onclick=Fl),i=!0):i=!1,i||Ja(e)}function _p(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Ln=Ln.return}}function Br(e){if(e!==Ln)return!1;if(!Re)return _p(e),Re=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||wf(e.type,e.memoizedProps)),r=!r),r&&Qe&&Ja(e),_p(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(i===0){Qe=mi(e.nextSibling);break t}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++;e=e.nextSibling}Qe=null}}else i===27?(i=Qe,Aa(e.type)?(e=Lf,Lf=null,Qe=e):Qe=i):Qe=Ln?mi(e.stateNode.nextSibling):null;return!0}function Ir(){Qe=Ln=null,Re=!1}function vp(){var e=Qa;return e!==null&&(In===null?In=e:In.push.apply(In,e),Qa=null),e}function Hr(e){Qa===null?Qa=[e]:Qa.push(e)}var hu=nt(null),$a=null,Ii=null;function fa(e,i,r){yt(hu,i._currentValue),i._currentValue=r}function Hi(e){e._currentValue=hu.current,xt(hu)}function du(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function pu(e,i,r,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var E=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var B=0;B<i.length;B++)if(A.context===i[B]){d.lanes|=r,A=d.alternate,A!==null&&(A.lanes|=r),du(d.return,r,e),l||(E=null);break t}d=A.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(s(341));E.lanes|=r,d=E.alternate,d!==null&&(d.lanes|=r),du(E,r,e),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===e){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function Gr(e,i,r,l){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var A=u.type;Xn(u.pendingProps.value,E.value)||(e!==null?e.push(A):e=[A])}}else if(u===gt.current){if(E=u.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(_o):e=[_o])}u=u.return}e!==null&&pu(i,e,r,l),i.flags|=262144}function al(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ts(e){$a=e,Ii=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return xp($a,e)}function sl(e,i){return $a===null&&ts(e),xp(e,i)}function xp(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Ii===null){if(e===null)throw Error(s(308));Ii=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ii=Ii.next=i;return r}var fx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},hx=a.unstable_scheduleCallback,dx=a.unstable_NormalPriority,fn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new fx,data:new Map,refCount:0}}function Vr(e){e.refCount--,e.refCount===0&&hx(dx,function(){e.controller.abort()})}var kr=null,gu=0,zs=0,Fs=null;function px(e,i){if(kr===null){var r=kr=[];gu=0,zs=xf(),Fs={status:"pending",value:void 0,then:function(l){r.push(l)}}}return gu++,i.then(Sp,Sp),i}function Sp(){if(--gu===0&&kr!==null){Fs!==null&&(Fs.status="fulfilled");var e=kr;kr=null,zs=0,Fs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function mx(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<r.length;u++)(0,r[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),l}var yp=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&px(e,i),yp!==null&&yp(e,i)};var es=nt(null);function _u(){var e=es.current;return e!==null?e:Ve.pooledCache}function rl(e,i){i===null?yt(es,es.current):yt(es,i.pool)}function Mp(){var e=_u();return e===null?null:{parent:fn._currentValue,pool:e}}var Xr=Error(s(460)),Ep=Error(s(474)),ol=Error(s(542)),vu={then:function(){}};function Tp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ll(){}function bp(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(ll,ll),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Rp(e),e;default:if(typeof i.status=="string")i.then(ll,ll);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Rp(e),e}throw Wr=i,Xr}}var Wr=null;function Ap(){if(Wr===null)throw Error(s(459));var e=Wr;return Wr=null,e}function Rp(e){if(e===Xr||e===ol)throw Error(s(483))}var ha=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=tl(e),dp(e,null,r),i}return $o(e,l,i,r),tl(e)}function qr(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Xt(e,r)}}function yu(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=E:d=d.next=E,r=r.next}while(r!==null);d===null?u=d=i:d=d.next=i}else u=d=i;r={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Mu=!1;function Yr(){if(Mu){var e=Fs;if(e!==null)throw e}}function jr(e,i,r,l){Mu=!1;var u=e.updateQueue;ha=!1;var d=u.firstBaseUpdate,E=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,it=B.next;B.next=null,E===null?d=it:E.next=it,E=B;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==E&&(A===null?pt.firstBaseUpdate=it:A.next=it,pt.lastBaseUpdate=B))}if(d!==null){var _t=u.baseState;E=0,pt=it=B=null,A=d;do{var rt=A.lane&-536870913,ot=rt!==A.lane;if(ot?(Me&rt)===rt:(l&rt)===rt){rt!==0&&rt===zs&&(Mu=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ie=e,te=A;rt=i;var ze=r;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){_t=ie.call(ze,_t,rt);break t}_t=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,rt=typeof ie=="function"?ie.call(ze,_t,rt):ie,rt==null)break t;_t=g({},_t,rt);break t;case 2:ha=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[rt]:ot.push(rt))}else ot={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(it=pt=ot,B=_t):pt=pt.next=ot,E|=rt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);pt===null&&(B=_t),u.baseState=B,u.firstBaseUpdate=it,u.lastBaseUpdate=pt,d===null&&(u.shared.lanes=0),Ma|=E,e.lanes=E,e.memoizedState=_t}}function wp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Cp(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)wp(r[e],i)}var Bs=nt(null),cl=nt(0);function Dp(e,i){e=Yi,yt(cl,e),yt(Bs,i),Yi=e|i.baseLanes}function Eu(){yt(cl,Yi),yt(Bs,Bs.current)}function Tu(){Yi=cl.current,xt(Bs),xt(cl)}var ma=0,me=null,Oe=null,an=null,ul=!1,Is=!1,ns=!1,fl=0,Zr=0,Hs=null,gx=0;function tn(){throw Error(s(321))}function bu(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!Xn(e[r],i[r]))return!1;return!0}function Au(e,i,r,l,u,d){return ma=d,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?dm:pm,ns=!1,d=r(l,u),ns=!1,Is&&(d=Lp(i,r,l,u)),Up(e),d}function Up(e){F.H=_l;var i=Oe!==null&&Oe.next!==null;if(ma=0,an=Oe=me=null,ul=!1,Zr=0,Hs=null,i)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&al(e)&&(gn=!0))}function Lp(e,i,r,l){me=e;var u=0;do{if(Is&&(Hs=null),Zr=0,Is=!1,25<=u)throw Error(s(301));if(u+=1,an=Oe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=Ex,d=i(r,l)}while(Is);return d}function _x(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Kr(i):i,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(me.flags|=1024),i}function Ru(){var e=fl!==0;return fl=0,e}function wu(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Cu(e){if(ul){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ul=!1}ma=0,an=Oe=me=null,Is=!1,Zr=fl=0,Hs=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?me.memoizedState=an=e:an=an.next=e,an}function sn(){if(Oe===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var i=an===null?me.memoizedState:an.next;if(i!==null)an=i,Oe=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},an===null?me.memoizedState=an=e:an=an.next=e}return an}function Du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kr(e){var i=Zr;return Zr+=1,Hs===null&&(Hs=[]),e=bp(Hs,e,i),i=me,(an===null?i.memoizedState:an.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?dm:pm),e}function hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Kr(e);if(e.$$typeof===L)return An(e)}throw Error(s(438,String(e)))}function Uu(e){var i=null,r=me.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Du(),me.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=C;return i.index++,r}function Gi(e,i){return typeof i=="function"?i(e):i}function dl(e){var i=sn();return Lu(i,Oe,e)}function Lu(e,i,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var u=e.baseQueue,d=l.pending;if(d!==null){if(u!==null){var E=u.next;u.next=d.next,d.next=E}i.baseQueue=u=d,l.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var A=E=null,B=null,it=i,pt=!1;do{var _t=it.lane&-536870913;if(_t!==it.lane?(Me&_t)===_t:(ma&_t)===_t){var rt=it.revertLane;if(rt===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),_t===zs&&(pt=!0);else if((ma&rt)===rt){it=it.next,rt===zs&&(pt=!0);continue}else _t={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},B===null?(A=B=_t,E=d):B=B.next=_t,me.lanes|=rt,Ma|=rt;_t=it.action,ns&&r(d,_t),d=it.hasEagerState?it.eagerState:r(d,_t)}else rt={lane:_t,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},B===null?(A=B=rt,E=d):B=B.next=rt,me.lanes|=_t,Ma|=_t;it=it.next}while(it!==null&&it!==i);if(B===null?E=d:B.next=A,!Xn(d,e.memoizedState)&&(gn=!0,pt&&(r=Fs,r!==null)))throw r;e.memoizedState=d,e.baseState=E,e.baseQueue=B,l.lastRenderedState=d}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Nu(e){var i=sn(),r=i.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,u=r.pending,d=i.memoizedState;if(u!==null){r.pending=null;var E=u=u.next;do d=e(d,E.action),E=E.next;while(E!==u);Xn(d,i.memoizedState)||(gn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,l]}function Np(e,i,r){var l=me,u=sn(),d=Re;if(d){if(r===void 0)throw Error(s(407));r=r()}else r=i();var E=!Xn((Oe||u).memoizedState,r);E&&(u.memoizedState=r,gn=!0),u=u.queue;var A=zp.bind(null,l,u,e);if(Qr(2048,8,A,[e]),u.getSnapshot!==i||E||an!==null&&an.memoizedState.tag&1){if(l.flags|=2048,Gs(9,pl(),Pp.bind(null,l,u,r,i),null),Ve===null)throw Error(s(349));d||(ma&124)!==0||Op(l,i,r)}return r}function Op(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=me.updateQueue,i===null?(i=Du(),me.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function Pp(e,i,r,l){i.value=r,i.getSnapshot=l,Fp(i)&&Bp(e)}function zp(e,i,r){return r(function(){Fp(i)&&Bp(e)})}function Fp(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!Xn(e,r)}catch{return!0}}function Bp(e){var i=Ls(e,2);i!==null&&Kn(i,e,2)}function Ou(e){var i=Fn();if(typeof e=="function"){var r=e;if(e=r(),ns){st(!0);try{r()}finally{st(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},i}function Ip(e,i,r,l){return e.baseState=r,Lu(e,Oe,typeof l=="function"?l:Gi)}function vx(e,i,r,l,u){if(gl(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};F.T!==null?r(!0):d.isTransition=!1,l(d),r=i.pending,r===null?(d.next=i.pending=d,Hp(i,d)):(d.next=r.next,i.pending=r.next=d)}}function Hp(e,i){var r=i.action,l=i.payload,u=e.state;if(i.isTransition){var d=F.T,E={};F.T=E;try{var A=r(u,l),B=F.S;B!==null&&B(E,A),Gp(e,i,A)}catch(it){Pu(e,i,it)}finally{F.T=d}}else try{d=r(u,l),Gp(e,i,d)}catch(it){Pu(e,i,it)}}function Gp(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Vp(e,i,l)},function(l){return Pu(e,i,l)}):Vp(e,i,r)}function Vp(e,i,r){i.status="fulfilled",i.value=r,kp(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,Hp(e,r)))}function Pu(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,kp(i),i=i.next;while(i!==l)}e.action=null}function kp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Xp(e,i){return i}function Wp(e,i){if(Re){var r=Ve.formState;if(r!==null){t:{var l=me;if(Re){if(Qe){e:{for(var u=Qe,d=Ai;u.nodeType!==8;){if(!d){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qe=mi(u.nextSibling),l=u.data==="F!";break t}}Ja(l)}l=!1}l&&(i=r[0])}}return r=Fn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xp,lastRenderedState:i},r.queue=l,r=um.bind(null,me,l),l.dispatch=r,l=Ou(!1),d=Hu.bind(null,me,!1,l.queue),l=Fn(),u={state:i,dispatch:null,action:e,pending:null},l.queue=u,r=vx.bind(null,me,u,d,r),u.dispatch=r,l.memoizedState=e,[i,r,!1]}function qp(e){var i=sn();return Yp(i,Oe,e)}function Yp(e,i,r){if(i=Lu(e,i,Xp)[0],e=dl(Gi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Kr(i)}catch(E){throw E===Xr?ol:E}else l=i;i=sn();var u=i.queue,d=u.dispatch;return r!==i.memoizedState&&(me.flags|=2048,Gs(9,pl(),xx.bind(null,u,r),null)),[l,d,e]}function xx(e,i){e.action=i}function jp(e){var i=sn(),r=Oe;if(r!==null)return Yp(i,r,e);sn(),i=i.memoizedState,r=sn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function Gs(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=me.updateQueue,i===null&&(i=Du(),me.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function pl(){return{destroy:void 0,resource:void 0}}function Zp(){return sn().memoizedState}function ml(e,i,r,l){var u=Fn();l=l===void 0?null:l,me.flags|=e,u.memoizedState=Gs(1|i,pl(),r,l)}function Qr(e,i,r,l){var u=sn();l=l===void 0?null:l;var d=u.memoizedState.inst;Oe!==null&&l!==null&&bu(l,Oe.memoizedState.deps)?u.memoizedState=Gs(i,d,r,l):(me.flags|=e,u.memoizedState=Gs(1|i,d,r,l))}function Kp(e,i){ml(8390656,8,e,i)}function Qp(e,i){Qr(2048,8,e,i)}function Jp(e,i){return Qr(4,2,e,i)}function $p(e,i){return Qr(4,4,e,i)}function tm(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function em(e,i,r){r=r!=null?r.concat([e]):null,Qr(4,4,tm.bind(null,i,e),r)}function zu(){}function nm(e,i){var r=sn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&bu(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function im(e,i){var r=sn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&bu(i,l[1]))return l[0];if(l=e(),ns){st(!0);try{e()}finally{st(!1)}}return r.memoizedState=[l,i],l}function Fu(e,i,r){return r===void 0||(ma&1073741824)!==0?e.memoizedState=i:(e.memoizedState=r,e=rg(),me.lanes|=e,Ma|=e,r)}function am(e,i,r,l){return Xn(r,i)?r:Bs.current!==null?(e=Fu(e,r,l),Xn(e,i)||(gn=!0),e):(ma&42)===0?(gn=!0,e.memoizedState=r):(e=rg(),me.lanes|=e,Ma|=e,i)}function sm(e,i,r,l,u){var d=J.p;J.p=d!==0&&8>d?d:8;var E=F.T,A={};F.T=A,Hu(e,!1,i,r);try{var B=u(),it=F.S;if(it!==null&&it(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=mx(B,l);Jr(e,i,pt,Zn(e))}else Jr(e,i,l,Zn(e))}catch(_t){Jr(e,i,{then:function(){},status:"rejected",reason:_t},Zn())}finally{J.p=d,F.T=E}}function Sx(){}function Bu(e,i,r,l){if(e.tag!==5)throw Error(s(476));var u=rm(e).queue;sm(e,u,i,Y,r===null?Sx:function(){return om(e),r(l)})}function rm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Y},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function om(e){var i=rm(e).next.queue;Jr(e,i,{},Zn())}function Iu(){return An(_o)}function lm(){return sn().memoizedState}function cm(){return sn().memoizedState}function yx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Zn();e=da(r);var l=pa(i,e,r);l!==null&&(Kn(l,i,r),qr(l,i,r)),i={cache:mu()},e.payload=i;return}i=i.return}}function Mx(e,i,r){var l=Zn();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},gl(e)?fm(i,r):(r=su(e,i,r,l),r!==null&&(Kn(r,e,l),hm(r,i,l)))}function um(e,i,r){var l=Zn();Jr(e,i,r,l)}function Jr(e,i,r,l){var u={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(gl(e))fm(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,A=d(E,r);if(u.hasEagerState=!0,u.eagerState=A,Xn(A,E))return $o(e,i,u,0),Ve===null&&Jo(),!1}catch{}finally{}if(r=su(e,i,u,l),r!==null)return Kn(r,e,l),hm(r,i,l),!0}return!1}function Hu(e,i,r,l){if(l={lane:2,revertLane:xf(),action:l,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(i)throw Error(s(479))}else i=su(e,r,l,2),i!==null&&Kn(i,e,2)}function gl(e){var i=e.alternate;return e===me||i!==null&&i===me}function fm(e,i){Is=ul=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function hm(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Xt(e,r)}}var _l={readContext:An,use:hl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},dm={readContext:An,use:hl,useCallback:function(e,i){return Fn().memoizedState=[e,i===void 0?null:i],e},useContext:An,useEffect:Kp,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,ml(4194308,4,tm.bind(null,i,e),r)},useLayoutEffect:function(e,i){return ml(4194308,4,e,i)},useInsertionEffect:function(e,i){ml(4,2,e,i)},useMemo:function(e,i){var r=Fn();i=i===void 0?null:i;var l=e();if(ns){st(!0);try{e()}finally{st(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=Fn();if(r!==void 0){var u=r(i);if(ns){st(!0);try{r(i)}finally{st(!1)}}}else u=i;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=Mx.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var i=Fn();return e={current:e},i.memoizedState=e},useState:function(e){e=Ou(e);var i=e.queue,r=um.bind(null,me,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:zu,useDeferredValue:function(e,i){var r=Fn();return Fu(r,e,i)},useTransition:function(){var e=Ou(!1);return e=sm.bind(null,me,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=me,u=Fn();if(Re){if(r===void 0)throw Error(s(407));r=r()}else{if(r=i(),Ve===null)throw Error(s(349));(Me&124)!==0||Op(l,i,r)}u.memoizedState=r;var d={value:r,getSnapshot:i};return u.queue=d,Kp(zp.bind(null,l,d,e),[e]),l.flags|=2048,Gs(9,pl(),Pp.bind(null,l,d,r,i),null),r},useId:function(){var e=Fn(),i=Ve.identifierPrefix;if(Re){var r=Bi,l=Fi;r=(l&~(1<<32-wt(l)-1)).toString(32)+r,i="«"+i+"R"+r,r=fl++,0<r&&(i+="H"+r.toString(32)),i+="»"}else r=gx++,i="«"+i+"r"+r.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Iu,useFormState:Wp,useActionState:Wp,useOptimistic:function(e){var i=Fn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Hu.bind(null,me,!0,r),r.dispatch=i,[e,i]},useMemoCache:Uu,useCacheRefresh:function(){return Fn().memoizedState=yx.bind(null,me)}},pm={readContext:An,use:hl,useCallback:nm,useContext:An,useEffect:Qp,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:dl,useRef:Zp,useState:function(){return dl(Gi)},useDebugValue:zu,useDeferredValue:function(e,i){var r=sn();return am(r,Oe.memoizedState,e,i)},useTransition:function(){var e=dl(Gi)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:Kr(e),i]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Iu,useFormState:qp,useActionState:qp,useOptimistic:function(e,i){var r=sn();return Ip(r,Oe,e,i)},useMemoCache:Uu,useCacheRefresh:cm},Ex={readContext:An,use:hl,useCallback:nm,useContext:An,useEffect:Qp,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:Nu,useRef:Zp,useState:function(){return Nu(Gi)},useDebugValue:zu,useDeferredValue:function(e,i){var r=sn();return Oe===null?Fu(r,e,i):am(r,Oe.memoizedState,e,i)},useTransition:function(){var e=Nu(Gi)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:Kr(e),i]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Iu,useFormState:jp,useActionState:jp,useOptimistic:function(e,i){var r=sn();return Oe!==null?Ip(r,Oe,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Uu,useCacheRefresh:cm},Vs=null,$r=0;function vl(e){var i=$r;return $r+=1,Vs===null&&(Vs=[]),bp(Vs,e,i)}function to(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function xl(e,i){throw i.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function mm(e){var i=e._init;return i(e._payload)}function gm(e){function i(Z,k){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[k],Z.flags|=16):tt.push(k)}}function r(Z,k){if(!e)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function l(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=zi(Z,k),Z.index=0,Z.sibling=null,Z}function d(Z,k,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<k?(Z.flags|=67108866,k):tt):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function E(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,tt,mt){return k===null||k.tag!==6?(k=ou(tt,Z.mode,mt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function B(Z,k,tt,mt){var Vt=tt.type;return Vt===T?pt(Z,k,tt.props.children,mt,tt.key):k!==null&&(k.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===W&&mm(Vt)===k.type)?(k=u(k,tt.props),to(k,tt),k.return=Z,k):(k=el(tt.type,tt.key,tt.props,null,Z.mode,mt),to(k,tt),k.return=Z,k)}function it(Z,k,tt,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=lu(tt,Z.mode,mt),k.return=Z,k):(k=u(k,tt.children||[]),k.return=Z,k)}function pt(Z,k,tt,mt,Vt){return k===null||k.tag!==7?(k=ja(tt,Z.mode,mt,Vt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function _t(Z,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ou(""+k,Z.mode,tt),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return tt=el(k.type,k.key,k.props,null,Z.mode,tt),to(tt,k),tt.return=Z,tt;case M:return k=lu(k,Z.mode,tt),k.return=Z,k;case W:var mt=k._init;return k=mt(k._payload),_t(Z,k,tt)}if(dt(k)||K(k))return k=ja(k,Z.mode,tt,null),k.return=Z,k;if(typeof k.then=="function")return _t(Z,vl(k),tt);if(k.$$typeof===L)return _t(Z,sl(Z,k),tt);xl(Z,k)}return null}function rt(Z,k,tt,mt){var Vt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Vt!==null?null:A(Z,k,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case x:return tt.key===Vt?B(Z,k,tt,mt):null;case M:return tt.key===Vt?it(Z,k,tt,mt):null;case W:return Vt=tt._init,tt=Vt(tt._payload),rt(Z,k,tt,mt)}if(dt(tt)||K(tt))return Vt!==null?null:pt(Z,k,tt,mt,null);if(typeof tt.then=="function")return rt(Z,k,vl(tt),mt);if(tt.$$typeof===L)return rt(Z,k,sl(Z,tt),mt);xl(Z,tt)}return null}function ot(Z,k,tt,mt,Vt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(tt)||null,A(k,Z,""+mt,Vt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return Z=Z.get(mt.key===null?tt:mt.key)||null,B(k,Z,mt,Vt);case M:return Z=Z.get(mt.key===null?tt:mt.key)||null,it(k,Z,mt,Vt);case W:var ge=mt._init;return mt=ge(mt._payload),ot(Z,k,tt,mt,Vt)}if(dt(mt)||K(mt))return Z=Z.get(tt)||null,pt(k,Z,mt,Vt,null);if(typeof mt.then=="function")return ot(Z,k,tt,vl(mt),Vt);if(mt.$$typeof===L)return ot(Z,k,tt,sl(k,mt),Vt);xl(k,mt)}return null}function ie(Z,k,tt,mt){for(var Vt=null,ge=null,jt=k,ne=k=0,vn=null;jt!==null&&ne<tt.length;ne++){jt.index>ne?(vn=jt,jt=null):vn=jt.sibling;var be=rt(Z,jt,tt[ne],mt);if(be===null){jt===null&&(jt=vn);break}e&&jt&&be.alternate===null&&i(Z,jt),k=d(be,k,ne),ge===null?Vt=be:ge.sibling=be,ge=be,jt=vn}if(ne===tt.length)return r(Z,jt),Re&&Ka(Z,ne),Vt;if(jt===null){for(;ne<tt.length;ne++)jt=_t(Z,tt[ne],mt),jt!==null&&(k=d(jt,k,ne),ge===null?Vt=jt:ge.sibling=jt,ge=jt);return Re&&Ka(Z,ne),Vt}for(jt=l(jt);ne<tt.length;ne++)vn=ot(jt,Z,ne,tt[ne],mt),vn!==null&&(e&&vn.alternate!==null&&jt.delete(vn.key===null?ne:vn.key),k=d(vn,k,ne),ge===null?Vt=vn:ge.sibling=vn,ge=vn);return e&&jt.forEach(function(Ua){return i(Z,Ua)}),Re&&Ka(Z,ne),Vt}function te(Z,k,tt,mt){if(tt==null)throw Error(s(151));for(var Vt=null,ge=null,jt=k,ne=k=0,vn=null,be=tt.next();jt!==null&&!be.done;ne++,be=tt.next()){jt.index>ne?(vn=jt,jt=null):vn=jt.sibling;var Ua=rt(Z,jt,be.value,mt);if(Ua===null){jt===null&&(jt=vn);break}e&&jt&&Ua.alternate===null&&i(Z,jt),k=d(Ua,k,ne),ge===null?Vt=Ua:ge.sibling=Ua,ge=Ua,jt=vn}if(be.done)return r(Z,jt),Re&&Ka(Z,ne),Vt;if(jt===null){for(;!be.done;ne++,be=tt.next())be=_t(Z,be.value,mt),be!==null&&(k=d(be,k,ne),ge===null?Vt=be:ge.sibling=be,ge=be);return Re&&Ka(Z,ne),Vt}for(jt=l(jt);!be.done;ne++,be=tt.next())be=ot(jt,Z,ne,be.value,mt),be!==null&&(e&&be.alternate!==null&&jt.delete(be.key===null?ne:be.key),k=d(be,k,ne),ge===null?Vt=be:ge.sibling=be,ge=be);return e&&jt.forEach(function(T1){return i(Z,T1)}),Re&&Ka(Z,ne),Vt}function ze(Z,k,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case x:t:{for(var Vt=tt.key;k!==null;){if(k.key===Vt){if(Vt=tt.type,Vt===T){if(k.tag===7){r(Z,k.sibling),mt=u(k,tt.props.children),mt.return=Z,Z=mt;break t}}else if(k.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===W&&mm(Vt)===k.type){r(Z,k.sibling),mt=u(k,tt.props),to(mt,tt),mt.return=Z,Z=mt;break t}r(Z,k);break}else i(Z,k);k=k.sibling}tt.type===T?(mt=ja(tt.props.children,Z.mode,mt,tt.key),mt.return=Z,Z=mt):(mt=el(tt.type,tt.key,tt.props,null,Z.mode,mt),to(mt,tt),mt.return=Z,Z=mt)}return E(Z);case M:t:{for(Vt=tt.key;k!==null;){if(k.key===Vt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){r(Z,k.sibling),mt=u(k,tt.children||[]),mt.return=Z,Z=mt;break t}else{r(Z,k);break}else i(Z,k);k=k.sibling}mt=lu(tt,Z.mode,mt),mt.return=Z,Z=mt}return E(Z);case W:return Vt=tt._init,tt=Vt(tt._payload),ze(Z,k,tt,mt)}if(dt(tt))return ie(Z,k,tt,mt);if(K(tt)){if(Vt=K(tt),typeof Vt!="function")throw Error(s(150));return tt=Vt.call(tt),te(Z,k,tt,mt)}if(typeof tt.then=="function")return ze(Z,k,vl(tt),mt);if(tt.$$typeof===L)return ze(Z,k,sl(Z,tt),mt);xl(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(r(Z,k.sibling),mt=u(k,tt),mt.return=Z,Z=mt):(r(Z,k),mt=ou(tt,Z.mode,mt),mt.return=Z,Z=mt),E(Z)):r(Z,k)}return function(Z,k,tt,mt){try{$r=0;var Vt=ze(Z,k,tt,mt);return Vs=null,Vt}catch(jt){if(jt===Xr||jt===ol)throw jt;var ge=Wn(29,jt,null,Z.mode);return ge.lanes=mt,ge.return=Z,ge}finally{}}}var ks=gm(!0),_m=gm(!1),ai=nt(null),Ri=null;function ga(e){var i=e.alternate;yt(hn,hn.current&1),yt(ai,e),Ri===null&&(i===null||Bs.current!==null||i.memoizedState!==null)&&(Ri=e)}function vm(e){if(e.tag===22){if(yt(hn,hn.current),yt(ai,e),Ri===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ri=e)}}else _a()}function _a(){yt(hn,hn.current),yt(ai,ai.current)}function Vi(e){xt(ai),Ri===e&&(Ri=null),xt(hn)}var hn=nt(0);function Sl(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Uf(r)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Gu(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Vu={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=Zn(),u=da(l);u.payload=i,r!=null&&(u.callback=r),i=pa(e,u,l),i!==null&&(Kn(i,e,l),qr(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=Zn(),u=da(l);u.tag=1,u.payload=i,r!=null&&(u.callback=r),i=pa(e,u,l),i!==null&&(Kn(i,e,l),qr(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Zn(),l=da(r);l.tag=2,i!=null&&(l.callback=i),i=pa(e,l,r),i!==null&&(Kn(i,e,r),qr(i,e,r))}};function xm(e,i,r,l,u,d,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!zr(r,l)||!zr(u,d):!0}function Sm(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Vu.enqueueReplaceState(i,i.state,null)}function is(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ym(e){yl(e)}function Mm(e){console.error(e)}function Em(e){yl(e)}function Ml(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Tm(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ku(e,i,r){return r=da(r),r.tag=3,r.payload={element:null},r.callback=function(){Ml(e,i)},r}function bm(e){return e=da(e),e.tag=3,e}function Am(e,i,r,l){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;e.payload=function(){return u(d)},e.callback=function(){Tm(i,r,l)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Tm(i,r,l),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function Tx(e,i,r,l,u){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Gr(i,r,u,!0),r=ai.current,r!==null){switch(r.tag){case 13:return Ri===null?pf():r.alternate===null&&Je===0&&(Je=3),r.flags&=-257,r.flags|=65536,r.lanes=u,l===vu?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),gf(e,l,u)),!1;case 22:return r.flags|=65536,l===vu?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),gf(e,l,u)),!1}throw Error(s(435,r.tag))}return gf(e,l,u),pf(),!1}if(Re)return i=ai.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==fu&&(e=Error(s(422),{cause:l}),Hr(ti(e,r)))):(l!==fu&&(i=Error(s(423),{cause:l}),Hr(ti(i,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=ti(l,r),u=ku(e.stateNode,l,u),yu(e,u),Je!==4&&(Je=2)),!1;var d=Error(s(520),{cause:l});if(d=ti(d,r),oo===null?oo=[d]:oo.push(d),Je!==4&&(Je=2),i===null)return!0;l=ti(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=ku(r.stateNode,l,e),yu(r,e),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ea===null||!Ea.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=bm(u),Am(u,e,r,l),yu(r,u),!1}r=r.return}while(r!==null);return!1}var Rm=Error(s(461)),gn=!1;function yn(e,i,r,l){i.child=e===null?_m(i,null,r,l):ks(i,e.child,r,l)}function wm(e,i,r,l,u){r=r.render;var d=i.ref;if("ref"in l){var E={};for(var A in l)A!=="ref"&&(E[A]=l[A])}else E=l;return ts(i),l=Au(e,i,r,E,d,u),A=Ru(),e!==null&&!gn?(wu(e,i,u),ki(e,i,u)):(Re&&A&&cu(i),i.flags|=1,yn(e,i,l,u),i.child)}function Cm(e,i,r,l,u){if(e===null){var d=r.type;return typeof d=="function"&&!ru(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,Dm(e,i,d,l,u)):(e=el(r.type,null,l,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Qu(e,u)){var E=d.memoizedProps;if(r=r.compare,r=r!==null?r:zr,r(E,l)&&e.ref===i.ref)return ki(e,i,u)}return i.flags|=1,e=zi(d,l),e.ref=i.ref,e.return=i,i.child=e}function Dm(e,i,r,l,u){if(e!==null){var d=e.memoizedProps;if(zr(d,l)&&e.ref===i.ref)if(gn=!1,i.pendingProps=l=d,Qu(e,u))(e.flags&131072)!==0&&(gn=!0);else return i.lanes=e.lanes,ki(e,i,u)}return Xu(e,i,r,l,u)}function Um(e,i,r){var l=i.pendingProps,u=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|r:r,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Lm(e,i,l,r)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(i,d!==null?d.cachePool:null),d!==null?Dp(i,d):Eu(),vm(i);else return i.lanes=i.childLanes=536870912,Lm(e,i,d!==null?d.baseLanes|r:r,r)}else d!==null?(rl(i,d.cachePool),Dp(i,d),_a(),i.memoizedState=null):(e!==null&&rl(i,null),Eu(),_a());return yn(e,i,u,r),i.child}function Lm(e,i,r,l){var u=_u();return u=u===null?null:{parent:fn._currentValue,pool:u},i.memoizedState={baseLanes:r,cachePool:u},e!==null&&rl(i,null),Eu(),vm(i),e!==null&&Gr(e,i,l,!0),null}function El(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Xu(e,i,r,l,u){return ts(i),r=Au(e,i,r,l,void 0,u),l=Ru(),e!==null&&!gn?(wu(e,i,u),ki(e,i,u)):(Re&&l&&cu(i),i.flags|=1,yn(e,i,r,u),i.child)}function Nm(e,i,r,l,u,d){return ts(i),i.updateQueue=null,r=Lp(i,l,r,u),Up(e),l=Ru(),e!==null&&!gn?(wu(e,i,d),ki(e,i,d)):(Re&&l&&cu(i),i.flags|=1,yn(e,i,r,d),i.child)}function Om(e,i,r,l,u){if(ts(i),i.stateNode===null){var d=Ns,E=r.contextType;typeof E=="object"&&E!==null&&(d=An(E)),d=new r(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Vu,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},xu(i),E=r.contextType,d.context=typeof E=="object"&&E!==null?An(E):Ns,d.state=i.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(Gu(i,r,E,l),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&Vu.enqueueReplaceState(d,d.state,null),jr(i,l,d,u),Yr(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var A=i.memoizedProps,B=is(r,A);d.props=B;var it=d.context,pt=r.contextType;E=Ns,typeof pt=="object"&&pt!==null&&(E=An(pt));var _t=r.getDerivedStateFromProps;pt=typeof _t=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,pt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||it!==E)&&Sm(i,d,l,E),ha=!1;var rt=i.memoizedState;d.state=rt,jr(i,l,d,u),Yr(),it=i.memoizedState,A||rt!==it||ha?(typeof _t=="function"&&(Gu(i,r,_t,l),it=i.memoizedState),(B=ha||xm(i,r,B,l,rt,it,E))?(pt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=it),d.props=l,d.state=it,d.context=E,l=B):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Su(e,i),E=i.memoizedProps,pt=is(r,E),d.props=pt,_t=i.pendingProps,rt=d.context,it=r.contextType,B=Ns,typeof it=="object"&&it!==null&&(B=An(it)),A=r.getDerivedStateFromProps,(it=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==_t||rt!==B)&&Sm(i,d,l,B),ha=!1,rt=i.memoizedState,d.state=rt,jr(i,l,d,u),Yr();var ot=i.memoizedState;E!==_t||rt!==ot||ha||e!==null&&e.dependencies!==null&&al(e.dependencies)?(typeof A=="function"&&(Gu(i,r,A,l),ot=i.memoizedState),(pt=ha||xm(i,r,pt,l,rt,ot,B)||e!==null&&e.dependencies!==null&&al(e.dependencies))?(it||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ot,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ot,B)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ot),d.props=l,d.state=ot,d.context=B,l=pt):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,El(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=ks(i,e.child,null,u),i.child=ks(i,null,r,u)):yn(e,i,r,u),i.memoizedState=d.state,e=i.child):e=ki(e,i,u),e}function Pm(e,i,r,l){return Ir(),i.flags|=256,yn(e,i,r,l),i.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(e){return{baseLanes:e,cachePool:Mp()}}function Yu(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=si),e}function zm(e,i,r){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),E&&(u=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Re){if(u?ga(i):_a(),Re){var A=Qe,B;if(B=A){t:{for(B=A,A=Ai;B.nodeType!==8;){if(!A){A=null;break t}if(B=mi(B.nextSibling),B===null){A=null;break t}}A=B}A!==null?(i.memoizedState={dehydrated:A,treeContext:Za!==null?{id:Fi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},B=Wn(18,null,null,0),B.stateNode=A,B.return=i,i.child=B,Ln=i,Qe=null,B=!0):B=!1}B||Ja(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Uf(A)?i.lanes=32:i.lanes=536870912,null;Vi(i)}return A=l.children,l=l.fallback,u?(_a(),u=i.mode,A=Tl({mode:"hidden",children:A},u),l=ja(l,u,r,null),A.return=i,l.return=i,A.sibling=l,i.child=A,u=i.child,u.memoizedState=qu(r),u.childLanes=Yu(e,E,r),i.memoizedState=Wu,l):(ga(i),ju(i,A))}if(B=e.memoizedState,B!==null&&(A=B.dehydrated,A!==null)){if(d)i.flags&256?(ga(i),i.flags&=-257,i=Zu(e,i,r)):i.memoizedState!==null?(_a(),i.child=e.child,i.flags|=128,i=null):(_a(),u=l.fallback,A=i.mode,l=Tl({mode:"visible",children:l.children},A),u=ja(u,A,r,null),u.flags|=2,l.return=i,u.return=i,l.sibling=u,i.child=l,ks(i,e.child,null,r),l=i.child,l.memoizedState=qu(r),l.childLanes=Yu(e,E,r),i.memoizedState=Wu,i=u);else if(ga(i),Uf(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var it=E.dgst;E=it,l=Error(s(419)),l.stack="",l.digest=E,Hr({value:l,source:null,stack:null}),i=Zu(e,i,r)}else if(gn||Gr(e,i,r,!1),E=(r&e.childLanes)!==0,gn||E){if(E=Ve,E!==null&&(l=r&-r,l=(l&42)!==0?1:ae(l),l=(l&(E.suspendedLanes|r))!==0?0:l,l!==0&&l!==B.retryLane))throw B.retryLane=l,Ls(e,l),Kn(E,e,l),Rm;A.data==="$?"||pf(),i=Zu(e,i,r)}else A.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=B.treeContext,Qe=mi(A.nextSibling),Ln=i,Re=!0,Qa=null,Ai=!1,e!==null&&(ni[ii++]=Fi,ni[ii++]=Bi,ni[ii++]=Za,Fi=e.id,Bi=e.overflow,Za=i),i=ju(i,l.children),i.flags|=4096);return i}return u?(_a(),u=l.fallback,A=i.mode,B=e.child,it=B.sibling,l=zi(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&65011712,it!==null?u=zi(it,u):(u=ja(u,A,r,null),u.flags|=2),u.return=i,l.return=i,l.sibling=u,i.child=l,l=u,u=i.child,A=e.child.memoizedState,A===null?A=qu(r):(B=A.cachePool,B!==null?(it=fn._currentValue,B=B.parent!==it?{parent:it,pool:it}:B):B=Mp(),A={baseLanes:A.baseLanes|r,cachePool:B}),u.memoizedState=A,u.childLanes=Yu(e,E,r),i.memoizedState=Wu,l):(ga(i),r=e.child,e=r.sibling,r=zi(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=r,i.memoizedState=null,r)}function ju(e,i){return i=Tl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Tl(e,i){return e=Wn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Zu(e,i,r){return ks(i,e.child,null,r),e=ju(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Fm(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),du(e.return,i,r)}function Ku(e,i,r,l,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=r,d.tailMode=u)}function Bm(e,i,r){var l=i.pendingProps,u=l.revealOrder,d=l.tail;if(yn(e,i,l.children,r),l=hn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fm(e,r,i);else if(e.tag===19)Fm(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(yt(hn,l),u){case"forwards":for(r=i.child,u=null;r!==null;)e=r.alternate,e!==null&&Sl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=i.child,i.child=null):(u=r.sibling,r.sibling=null),Ku(i,!1,u,r,d);break;case"backwards":for(r=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Sl(e)===null){i.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}Ku(i,!0,r,null,d);break;case"together":Ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ki(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),Ma|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Gr(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,r=zi(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=zi(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Qu(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&al(e)))}function bx(e,i,r){switch(i.tag){case 3:Mt(i,i.stateNode.containerInfo),fa(i,fn,e.memoizedState.cache),Ir();break;case 27:case 5:qt(i);break;case 4:Mt(i,i.stateNode.containerInfo);break;case 10:fa(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ga(i),i.flags|=128,null):(r&i.child.childLanes)!==0?zm(e,i,r):(ga(i),e=ki(e,i,r),e!==null?e.sibling:null);ga(i);break;case 19:var u=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Gr(e,i,r,!1),l=(r&i.childLanes)!==0),u){if(l)return Bm(e,i,r);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(hn,hn.current),l)break;return null;case 22:case 23:return i.lanes=0,Um(e,i,r);case 24:fa(i,fn,e.memoizedState.cache)}return ki(e,i,r)}function Im(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)gn=!0;else{if(!Qu(e,r)&&(i.flags&128)===0)return gn=!1,bx(e,i,r);gn=(e.flags&131072)!==0}else gn=!1,Re&&(i.flags&1048576)!==0&&mp(i,il,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,u=l._init;if(l=u(l._payload),i.type=l,typeof l=="function")ru(l)?(e=is(l,e),i.tag=1,i=Om(null,i,l,e,r)):(i.tag=0,i=Xu(null,i,l,e,r));else{if(l!=null){if(u=l.$$typeof,u===R){i.tag=11,i=wm(null,i,l,e,r);break t}else if(u===I){i.tag=14,i=Cm(null,i,l,e,r);break t}}throw i=et(l)||l,Error(s(306,i,""))}}return i;case 0:return Xu(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,u=is(l,i.pendingProps),Om(e,i,l,u,r);case 3:t:{if(Mt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;u=d.element,Su(e,i),jr(i,l,null,r);var E=i.memoizedState;if(l=E.cache,fa(i,fn,l),l!==d.cache&&pu(i,[fn],r,!0),Yr(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Pm(e,i,l,r);break t}else if(l!==u){u=ti(Error(s(424)),i),Hr(u),i=Pm(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=mi(e.firstChild),Ln=i,Re=!0,Qa=null,Ai=!0,r=_m(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ir(),l===u){i=ki(e,i,r);break t}yn(e,i,l,r)}i=i.child}return i;case 26:return El(e,i),e===null?(r=kg(i.type,null,i.pendingProps,null))?i.memoizedState=r:Re||(r=i.type,e=i.pendingProps,l=Bl(at.current).createElement(r),l[un]=i,l[Ze]=e,En(l,r,e),nn(l),i.stateNode=l):i.memoizedState=kg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return qt(i),e===null&&Re&&(l=i.stateNode=Hg(i.type,i.pendingProps,at.current),Ln=i,Ai=!0,u=Qe,Aa(i.type)?(Lf=u,Qe=mi(l.firstChild)):Qe=u),yn(e,i,i.pendingProps.children,r),El(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Re&&((u=l=Qe)&&(l=$x(l,i.type,i.pendingProps,Ai),l!==null?(i.stateNode=l,Ln=i,Qe=mi(l.firstChild),Ai=!1,u=!0):u=!1),u||Ja(i)),qt(i),u=i.type,d=i.pendingProps,E=e!==null?e.memoizedProps:null,l=d.children,wf(u,d)?l=null:E!==null&&wf(u,E)&&(i.flags|=32),i.memoizedState!==null&&(u=Au(e,i,_x,null,null,r),_o._currentValue=u),El(e,i),yn(e,i,l,r),i.child;case 6:return e===null&&Re&&((e=r=Qe)&&(r=t1(r,i.pendingProps,Ai),r!==null?(i.stateNode=r,Ln=i,Qe=null,e=!0):e=!1),e||Ja(i)),null;case 13:return zm(e,i,r);case 4:return Mt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=ks(i,null,l,r):yn(e,i,l,r),i.child;case 11:return wm(e,i,i.type,i.pendingProps,r);case 7:return yn(e,i,i.pendingProps,r),i.child;case 8:return yn(e,i,i.pendingProps.children,r),i.child;case 12:return yn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,fa(i,i.type,l.value),yn(e,i,l.children,r),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,ts(i),u=An(u),l=l(u),i.flags|=1,yn(e,i,l,r),i.child;case 14:return Cm(e,i,i.type,i.pendingProps,r);case 15:return Dm(e,i,i.type,i.pendingProps,r);case 19:return Bm(e,i,r);case 31:return l=i.pendingProps,r=i.mode,l={mode:l.mode,children:l.children},e===null?(r=Tl(l,r),r.ref=i.ref,i.child=r,r.return=i,i=r):(r=zi(e.child,l),r.ref=i.ref,i.child=r,r.return=i,i=r),i;case 22:return Um(e,i,r);case 24:return ts(i),l=An(fn),e===null?(u=_u(),u===null&&(u=Ve,d=mu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),i.memoizedState={parent:l,cache:u},xu(i),fa(i,fn,u)):((e.lanes&r)!==0&&(Su(e,i),jr(i,null,null,r),Yr()),u=e.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),fa(i,fn,l)):(l=d.cache,fa(i,fn,l),l!==u.cache&&pu(i,[fn],r,!0))),yn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Xi(e){e.flags|=4}function Hm(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jg(i)){if(i=ai.current,i!==null&&((Me&4194048)===Me?Ri!==null:(Me&62914560)!==Me&&(Me&536870912)===0||i!==Ri))throw Wr=vu,Ep;e.flags|=8192}}function bl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?At():536870912,e.lanes|=i,Ys|=i)}function eo(e,i){if(!Re)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ye(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function Ax(e,i,r){var l=i.pendingProps;switch(uu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(i),null;case 1:return Ye(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Hi(fn),Zt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(i)?Xi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vp())),Ye(i),null;case 26:return r=i.memoizedState,e===null?(Xi(i),r!==null?(Ye(i),Hm(i,r)):(Ye(i),i.flags&=-16777217)):r?r!==e.memoizedState?(Xi(i),Ye(i),Hm(i,r)):(Ye(i),i.flags&=-16777217):(e.memoizedProps!==l&&Xi(i),Ye(i),i.flags&=-16777217),null;case 27:ce(i),r=at.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Ye(i),null}e=Ut.current,Br(i)?gp(i):(e=Hg(u,l,r),i.stateNode=e,Xi(i))}return Ye(i),null;case 5:if(ce(i),r=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Ye(i),null}if(e=Ut.current,Br(i))gp(i);else{switch(u=Bl(at.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(r,{is:l.is}):u.createElement(r)}}e[un]=i,e[Ze]=l;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(En(e,r,l),r){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Xi(i)}}return Ye(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Xi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=at.current,Br(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,u=Ln,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[un]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Ng(e.nodeValue,r)),e||Ja(i)}else e=Bl(e).createTextNode(l),e[un]=i,i.stateNode=e}return Ye(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Br(i),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=i}else Ir(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),u=!1}else u=vp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Vi(i),i):(Vi(i),null)}if(Vi(i),(i.flags&128)!==0)return i.lanes=r,i;if(r=l!==null,e=e!==null&&e.memoizedState!==null,r){l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)}return r!==e&&r&&(i.child.flags|=8192),bl(i,i.updateQueue),Ye(i),null;case 4:return Zt(),e===null&&Ef(i.stateNode.containerInfo),Ye(i),null;case 10:return Hi(i.type),Ye(i),null;case 19:if(xt(hn),u=i.memoizedState,u===null)return Ye(i),null;if(l=(i.flags&128)!==0,d=u.rendering,d===null)if(l)eo(u,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Sl(e),d!==null){for(i.flags|=128,eo(u,!1),e=d.updateQueue,i.updateQueue=e,bl(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)pp(r,e),r=r.sibling;return yt(hn,hn.current&1|2),i.child}e=e.sibling}u.tail!==null&&zt()>wl&&(i.flags|=128,l=!0,eo(u,!1),i.lanes=4194304)}else{if(!l)if(e=Sl(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,bl(i,e),eo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Re)return Ye(i),null}else 2*zt()-u.renderingStartTime>wl&&r!==536870912&&(i.flags|=128,l=!0,eo(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(e=u.last,e!==null?e.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=zt(),i.sibling=null,e=hn.current,yt(hn,l?e&1|2:e&1),i):(Ye(i),null);case 22:case 23:return Vi(i),Tu(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Ye(i),i.subtreeFlags&6&&(i.flags|=8192)):Ye(i),r=i.updateQueue,r!==null&&bl(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&xt(es),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Hi(fn),Ye(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Rx(e,i){switch(uu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Hi(fn),Zt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ce(i),null;case 13:if(Vi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ir()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return xt(hn),null;case 4:return Zt(),null;case 10:return Hi(i.type),null;case 22:case 23:return Vi(i),Tu(),e!==null&&xt(es),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Hi(fn),null;case 25:return null;default:return null}}function Gm(e,i){switch(uu(i),i.tag){case 3:Hi(fn),Zt();break;case 26:case 27:case 5:ce(i);break;case 4:Zt();break;case 13:Vi(i);break;case 19:xt(hn);break;case 10:Hi(i.type);break;case 22:case 23:Vi(i),Tu(),e!==null&&xt(es);break;case 24:Hi(fn)}}function no(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){l=void 0;var d=r.create,E=r.inst;l=d(),E.destroy=l}r=r.next}while(r!==u)}}catch(A){Ie(i,i.return,A)}}function va(e,i,r){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&e)===e){var E=l.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,u=i;var B=r,it=A;try{it()}catch(pt){Ie(u,B,pt)}}}l=l.next}while(l!==d)}}catch(pt){Ie(i,i.return,pt)}}function Vm(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{Cp(i,r)}catch(l){Ie(e,e.return,l)}}}function km(e,i,r){r.props=is(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ie(e,i,l)}}function io(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(u){Ie(e,i,u)}}function wi(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(u){Ie(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Ie(e,i,u)}else r.current=null}function Xm(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(u){Ie(e,e.return,u)}}function Ju(e,i,r){try{var l=e.stateNode;jx(l,e.type,r,i),l[Ze]=i}catch(u){Ie(e,e.return,u)}}function Wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function $u(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tf(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Fl));else if(l!==4&&(l===27&&Aa(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(tf(e,i,r),e=e.sibling;e!==null;)tf(e,i,r),e=e.sibling}function Al(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&Aa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Al(e,i,r),e=e.sibling;e!==null;)Al(e,i,r),e=e.sibling}function qm(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);En(i,l,r),i[un]=e,i[Ze]=r}catch(d){Ie(e,e.return,d)}}var Wi=!1,en=!1,ef=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,_n=null;function wx(e,i){if(e=e.containerInfo,Af=Xl,e=ap(e),$c(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var E=0,A=-1,B=-1,it=0,pt=0,_t=e,rt=null;e:for(;;){for(var ot;_t!==r||u!==0&&_t.nodeType!==3||(A=E+u),_t!==d||l!==0&&_t.nodeType!==3||(B=E+l),_t.nodeType===3&&(E+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)rt=_t,_t=ot;for(;;){if(_t===e)break e;if(rt===r&&++it===u&&(A=E),rt===d&&++pt===l&&(B=E),(ot=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=ot}r=A===-1||B===-1?null:{start:A,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rf={focusedElem:e,selectionRange:r},Xl=!1,_n=i;_n!==null;)if(i=_n,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,_n=e;else for(;_n!==null;){switch(i=_n,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=i,u=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var ie=is(r.type,u,r.elementType===r.type);e=l.getSnapshotBeforeUpdate(ie,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ie(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)Df(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Df(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,_n=e;break}_n=i.return}}function jm(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:xa(e,r),l&4&&no(5,r);break;case 1:if(xa(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(E){Ie(r,r.return,E)}else{var u=is(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Ie(r,r.return,E)}}l&64&&Vm(r),l&512&&io(r,r.return);break;case 3:if(xa(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Cp(e,i)}catch(E){Ie(r,r.return,E)}}break;case 27:i===null&&l&4&&qm(r);case 26:case 5:xa(e,r),i===null&&l&4&&Xm(r),l&512&&io(r,r.return);break;case 12:xa(e,r);break;case 13:xa(e,r),l&4&&Qm(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Fx.bind(null,r),e1(e,r))));break;case 22:if(l=r.memoizedState!==null||Wi,!l){i=i!==null&&i.memoizedState!==null||en,u=Wi;var d=en;Wi=l,(en=i)&&!d?Sa(e,r,(r.subtreeFlags&8772)!==0):xa(e,r),Wi=u,en=d}break;case 30:break;default:xa(e,r)}}function Zm(e){var i=e.alternate;i!==null&&(e.alternate=null,Zm(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ts(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Bn=!1;function qi(e,i,r){for(r=r.child;r!==null;)Km(e,i,r),r=r.sibling}function Km(e,i,r){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount($,r)}catch{}switch(r.tag){case 26:en||wi(r,i),qi(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:en||wi(r,i);var l=We,u=Bn;Aa(r.type)&&(We=r.stateNode,Bn=!1),qi(e,i,r),ho(r.stateNode),We=l,Bn=u;break;case 5:en||wi(r,i);case 6:if(l=We,u=Bn,We=null,qi(e,i,r),We=l,Bn=u,We!==null)if(Bn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(r.stateNode)}catch(d){Ie(r,i,d)}else try{We.removeChild(r.stateNode)}catch(d){Ie(r,i,d)}break;case 18:We!==null&&(Bn?(e=We,Bg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),yo(e)):Bg(We,r.stateNode));break;case 4:l=We,u=Bn,We=r.stateNode.containerInfo,Bn=!0,qi(e,i,r),We=l,Bn=u;break;case 0:case 11:case 14:case 15:en||va(2,r,i),en||va(4,r,i),qi(e,i,r);break;case 1:en||(wi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&km(r,i,l)),qi(e,i,r);break;case 21:qi(e,i,r);break;case 22:en=(l=en)||r.memoizedState!==null,qi(e,i,r),en=l;break;default:qi(e,i,r)}}function Qm(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yo(e)}catch(r){Ie(i,i.return,r)}}function Cx(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ym),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ym),i;default:throw Error(s(435,e.tag))}}function nf(e,i){var r=Cx(e);i.forEach(function(l){var u=Bx.bind(null,e,l);r.has(l)||(r.add(l),l.then(u,u))})}function qn(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],d=e,E=i,A=E;t:for(;A!==null;){switch(A.tag){case 27:if(Aa(A.type)){We=A.stateNode,Bn=!1;break t}break;case 5:We=A.stateNode,Bn=!1;break t;case 3:case 4:We=A.stateNode.containerInfo,Bn=!0;break t}A=A.return}if(We===null)throw Error(s(160));Km(d,E,u),We=null,Bn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Jm(i,e),i=i.sibling}var pi=null;function Jm(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(i,e),Yn(e),l&4&&(va(3,e,e.return),no(3,e),va(5,e,e.return));break;case 1:qn(i,e),Yn(e),l&512&&(en||r===null||wi(r,r.return)),l&64&&Wi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var u=pi;if(qn(i,e),Yn(e),l&512&&(en||r===null||wi(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[bi]||d[un]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),En(d,l,r),d[un]=e,nn(d),l=d;break t;case"link":var E=qg("link","href",u).get(l+(r.href||""));if(E){for(var A=0;A<E.length;A++)if(d=E[A],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(A,1);break e}}d=u.createElement(l),En(d,l,r),u.head.appendChild(d);break;case"meta":if(E=qg("meta","content",u).get(l+(r.content||""))){for(A=0;A<E.length;A++)if(d=E[A],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(A,1);break e}}d=u.createElement(l),En(d,l,r),u.head.appendChild(d);break;default:throw Error(s(468,l))}d[un]=e,nn(d),l=d}e.stateNode=l}else Yg(u,e.type,e.stateNode);else e.stateNode=Wg(u,l,e.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?Yg(u,e.type,e.stateNode):Wg(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,r.memoizedProps)}break;case 27:qn(i,e),Yn(e),l&512&&(en||r===null||wi(r,r.return)),r!==null&&l&4&&Ju(e,e.memoizedProps,r.memoizedProps);break;case 5:if(qn(i,e),Yn(e),l&512&&(en||r===null||wi(r,r.return)),e.flags&32){u=e.stateNode;try{Pn(u,"")}catch(ot){Ie(e,e.return,ot)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Ju(e,u,r!==null?r.memoizedProps:u)),l&1024&&(ef=!0);break;case 6:if(qn(i,e),Yn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(ot){Ie(e,e.return,ot)}}break;case 3:if(Gl=null,u=pi,pi=Il(i.containerInfo),qn(i,e),pi=u,Yn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{yo(i.containerInfo)}catch(ot){Ie(e,e.return,ot)}ef&&(ef=!1,$m(e));break;case 4:l=pi,pi=Il(e.stateNode.containerInfo),qn(i,e),Yn(e),pi=l;break;case 12:qn(i,e),Yn(e);break;case 13:qn(i,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(cf=zt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,nf(e,l)));break;case 22:u=e.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,it=Wi,pt=en;if(Wi=it||u,en=pt||B,qn(i,e),en=pt,Wi=it,Yn(e),l&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(r===null||B||Wi||en||as(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){B=r=i;try{if(d=B.stateNode,u)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=B.stateNode;var _t=B.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(ot){Ie(B,B.return,ot)}}}else if(i.tag===6){if(r===null){B=i;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ot){Ie(B,B.return,ot)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,nf(e,r))));break;case 19:qn(i,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,nf(e,l)));break;case 30:break;case 21:break;default:qn(i,e),Yn(e)}}function Yn(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(Wm(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,d=$u(e);Al(e,d,u);break;case 5:var E=r.stateNode;r.flags&32&&(Pn(E,""),r.flags&=-33);var A=$u(e);Al(e,A,E);break;case 3:case 4:var B=r.stateNode.containerInfo,it=$u(e);tf(e,it,B);break;default:throw Error(s(161))}}catch(pt){Ie(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function $m(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;$m(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function xa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)jm(e,i.alternate,i),i=i.sibling}function as(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:va(4,i,i.return),as(i);break;case 1:wi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&km(i,i.return,r),as(i);break;case 27:ho(i.stateNode);case 26:case 5:wi(i,i.return),as(i);break;case 22:i.memoizedState===null&&as(i);break;case 30:as(i);break;default:as(i)}e=e.sibling}}function Sa(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=e,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Sa(u,d,r),no(4,d);break;case 1:if(Sa(u,d,r),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Ie(l,l.return,it)}if(l=d,u=l.updateQueue,u!==null){var A=l.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)wp(B[u],A)}catch(it){Ie(l,l.return,it)}}r&&E&64&&Vm(d),io(d,d.return);break;case 27:qm(d);case 26:case 5:Sa(u,d,r),r&&l===null&&E&4&&Xm(d),io(d,d.return);break;case 12:Sa(u,d,r);break;case 13:Sa(u,d,r),r&&E&4&&Qm(u,d);break;case 22:d.memoizedState===null&&Sa(u,d,r),io(d,d.return);break;case 30:break;default:Sa(u,d,r)}i=i.sibling}}function af(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Vr(r))}function sf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Vr(e))}function Ci(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)tg(e,i,r,l),i=i.sibling}function tg(e,i,r,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ci(e,i,r,l),u&2048&&no(9,i);break;case 1:Ci(e,i,r,l);break;case 3:Ci(e,i,r,l),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Vr(e)));break;case 12:if(u&2048){Ci(e,i,r,l),e=i.stateNode;try{var d=i.memoizedProps,E=d.id,A=d.onPostCommit;typeof A=="function"&&A(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ie(i,i.return,B)}}else Ci(e,i,r,l);break;case 13:Ci(e,i,r,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?Ci(e,i,r,l):ao(e,i):d._visibility&2?Ci(e,i,r,l):(d._visibility|=2,Xs(e,i,r,l,(i.subtreeFlags&10256)!==0)),u&2048&&af(E,i);break;case 24:Ci(e,i,r,l),u&2048&&sf(i.alternate,i);break;default:Ci(e,i,r,l)}}function Xs(e,i,r,l,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,E=i,A=r,B=l,it=E.flags;switch(E.tag){case 0:case 11:case 15:Xs(d,E,A,B,u),no(8,E);break;case 23:break;case 22:var pt=E.stateNode;E.memoizedState!==null?pt._visibility&2?Xs(d,E,A,B,u):ao(d,E):(pt._visibility|=2,Xs(d,E,A,B,u)),u&&it&2048&&af(E.alternate,E);break;case 24:Xs(d,E,A,B,u),u&&it&2048&&sf(E.alternate,E);break;default:Xs(d,E,A,B,u)}i=i.sibling}}function ao(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,u=l.flags;switch(l.tag){case 22:ao(r,l),u&2048&&af(l.alternate,l);break;case 24:ao(r,l),u&2048&&sf(l.alternate,l);break;default:ao(r,l)}i=i.sibling}}var so=8192;function Ws(e){if(e.subtreeFlags&so)for(e=e.child;e!==null;)eg(e),e=e.sibling}function eg(e){switch(e.tag){case 26:Ws(e),e.flags&so&&e.memoizedState!==null&&p1(pi,e.memoizedState,e.memoizedProps);break;case 5:Ws(e);break;case 3:case 4:var i=pi;pi=Il(e.stateNode.containerInfo),Ws(e),pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=so,so=16777216,Ws(e),so=i):Ws(e));break;default:Ws(e)}}function ng(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ro(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];_n=l,ag(l,e)}ng(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ig(e),e=e.sibling}function ig(e){switch(e.tag){case 0:case 11:case 15:ro(e),e.flags&2048&&va(9,e,e.return);break;case 3:ro(e);break;case 12:ro(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Rl(e)):ro(e);break;default:ro(e)}}function Rl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];_n=l,ag(l,e)}ng(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:va(8,i,i.return),Rl(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Rl(i));break;default:Rl(i)}e=e.sibling}}function ag(e,i){for(;_n!==null;){var r=_n;switch(r.tag){case 0:case 11:case 15:va(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vr(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,_n=l;else t:for(r=e;_n!==null;){l=_n;var u=l.sibling,d=l.return;if(Zm(l),l===r){_n=null;break t}if(u!==null){u.return=d,_n=u;break t}_n=d}}}var Dx={getCacheForType:function(e){var i=An(fn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r}},Ux=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ve=null,ve=null,Me=0,Le=0,jn=null,ya=!1,qs=!1,rf=!1,Yi=0,Je=0,Ma=0,ss=0,of=0,si=0,Ys=0,oo=null,In=null,lf=!1,cf=0,wl=1/0,Cl=null,Ea=null,Mn=0,Ta=null,js=null,Zs=0,uf=0,ff=null,sg=null,lo=0,hf=null;function Zn(){if((Ue&2)!==0&&Me!==0)return Me&-Me;if(F.T!==null){var e=zs;return e!==0?e:xf()}return Ee()}function rg(){si===0&&(si=(Me&536870912)===0||Re?X():536870912);var e=ai.current;return e!==null&&(e.flags|=32),si}function Kn(e,i,r){(e===Ve&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(Ks(e,0),ba(e,Me,si,!1)),Ft(e,r),((Ue&2)===0||e!==Ve)&&(e===Ve&&((Ue&2)===0&&(ss|=r),Je===4&&ba(e,Me,si,!1)),Di(e))}function og(e,i,r){if((Ue&6)!==0)throw Error(s(327));var l=!r&&(i&124)===0&&(i&e.expiredLanes)===0||Dt(e,i),u=l?Ox(e,i):mf(e,i,!0),d=l;do{if(u===0){qs&&!l&&ba(e,i,0,!1);break}else{if(r=e.current.alternate,d&&!Lx(r)){u=mf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var A=e;u=oo;var B=A.current.memoizedState.isDehydrated;if(B&&(Ks(A,E).flags|=256),E=mf(A,E,!1),E!==2){if(rf&&!B){A.errorRecoveryDisabledLanes|=d,ss|=d,u=4;break t}d=In,In=u,d!==null&&(In===null?In=d:In.push.apply(In,d))}u=E}if(d=!1,u!==2)continue}}if(u===1){Ks(e,0),ba(e,i,0,!0);break}t:{switch(l=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:ba(l,i,si,!ya);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=cf+300-zt(),10<u)){if(ba(l,i,si,!ya),Wt(l,0,!0)!==0)break t;l.timeoutHandle=zg(lg.bind(null,l,r,In,Cl,lf,i,si,ss,Ys,ya,d,2,-0,0),u);break t}lg(l,r,In,Cl,lf,i,si,ss,Ys,ya,d,0,-0,0)}}break}while(!0);Di(e)}function lg(e,i,r,l,u,d,E,A,B,it,pt,_t,rt,ot){if(e.timeoutHandle=-1,_t=i.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(go={stylesheets:null,count:0,unsuspend:d1},eg(i),_t=m1(),_t!==null)){e.cancelPendingCommit=_t(mg.bind(null,e,i,d,r,l,u,E,A,B,pt,1,rt,ot)),ba(e,d,E,!it);return}mg(e,i,d,r,l,u,E,A,B)}function Lx(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var u=r[l],d=u.getSnapshot;u=u.value;try{if(!Xn(d(),u))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ba(e,i,r,l){i&=~of,i&=~ss,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var u=i;0<u;){var d=31-wt(u),E=1<<d;l[d]=-1,u&=~E}r!==0&&vt(e,r,i)}function Dl(){return(Ue&6)===0?(co(0),!1):!0}function df(){if(ve!==null){if(Le===0)var e=ve.return;else e=ve,Ii=$a=null,Cu(e),Vs=null,$r=0,e=ve;for(;e!==null;)Gm(e.alternate,e),e=e.return;ve=null}}function Ks(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Kx(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),df(),Ve=e,ve=r=zi(e.current,null),Me=i,Le=0,jn=null,ya=!1,qs=Dt(e,i),rf=!1,Ys=si=of=ss=Ma=Je=0,In=oo=null,lf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var u=31-wt(l),d=1<<u;i|=e[u],l&=~d}return Yi=i,Jo(),r}function cg(e,i){me=null,F.H=_l,i===Xr||i===ol?(i=Ap(),Le=3):i===Ep?(i=Ap(),Le=4):Le=i===Rm?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,jn=i,ve===null&&(Je=1,Ml(e,ti(i,e.current)))}function ug(){var e=F.H;return F.H=_l,e===null?_l:e}function fg(){var e=F.A;return F.A=Dx,e}function pf(){Je=4,ya||(Me&4194048)!==Me&&ai.current!==null||(qs=!0),(Ma&134217727)===0&&(ss&134217727)===0||Ve===null||ba(Ve,Me,si,!1)}function mf(e,i,r){var l=Ue;Ue|=2;var u=ug(),d=fg();(Ve!==e||Me!==i)&&(Cl=null,Ks(e,i)),i=!1;var E=Je;t:do try{if(Le!==0&&ve!==null){var A=ve,B=jn;switch(Le){case 8:df(),E=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(i=!0);var it=Le;if(Le=0,jn=null,Qs(e,A,B,it),r&&qs){E=0;break t}break;default:it=Le,Le=0,jn=null,Qs(e,A,B,it)}}Nx(),E=Je;break}catch(pt){cg(e,pt)}while(!0);return i&&e.shellSuspendCounter++,Ii=$a=null,Ue=l,F.H=u,F.A=d,ve===null&&(Ve=null,Me=0,Jo()),E}function Nx(){for(;ve!==null;)hg(ve)}function Ox(e,i){var r=Ue;Ue|=2;var l=ug(),u=fg();Ve!==e||Me!==i?(Cl=null,wl=zt()+500,Ks(e,i)):qs=Dt(e,i);t:do try{if(Le!==0&&ve!==null){i=ve;var d=jn;e:switch(Le){case 1:Le=0,jn=null,Qs(e,i,d,1);break;case 2:case 9:if(Tp(d)){Le=0,jn=null,dg(i);break}i=function(){Le!==2&&Le!==9||Ve!==e||(Le=7),Di(e)},d.then(i,i);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:Tp(d)?(Le=0,jn=null,dg(i)):(Le=0,jn=null,Qs(e,i,d,7));break;case 5:var E=null;switch(ve.tag){case 26:E=ve.memoizedState;case 5:case 27:var A=ve;if(!E||jg(E)){Le=0,jn=null;var B=A.sibling;if(B!==null)ve=B;else{var it=A.return;it!==null?(ve=it,Ul(it)):ve=null}break e}}Le=0,jn=null,Qs(e,i,d,5);break;case 6:Le=0,jn=null,Qs(e,i,d,6);break;case 8:df(),Je=6;break t;default:throw Error(s(462))}}Px();break}catch(pt){cg(e,pt)}while(!0);return Ii=$a=null,F.H=l,F.A=u,Ue=r,ve!==null?0:(Ve=null,Me=0,Jo(),Je)}function Px(){for(;ve!==null&&!se();)hg(ve)}function hg(e){var i=Im(e.alternate,e,Yi);e.memoizedProps=e.pendingProps,i===null?Ul(e):ve=i}function dg(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=Nm(r,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=Nm(r,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:Cu(i);default:Gm(r,i),i=ve=pp(i,Yi),i=Im(r,i,Yi)}e.memoizedProps=e.pendingProps,i===null?Ul(e):ve=i}function Qs(e,i,r,l){Ii=$a=null,Cu(i),Vs=null,$r=0;var u=i.return;try{if(Tx(e,u,i,r,Me)){Je=1,Ml(e,ti(r,e.current)),ve=null;return}}catch(d){if(u!==null)throw ve=u,d;Je=1,Ml(e,ti(r,e.current)),ve=null;return}i.flags&32768?(Re||l===1?e=!0:qs||(Me&536870912)!==0?e=!1:(ya=e=!0,(l===2||l===9||l===3||l===6)&&(l=ai.current,l!==null&&l.tag===13&&(l.flags|=16384))),pg(i,e)):Ul(i)}function Ul(e){var i=e;do{if((i.flags&32768)!==0){pg(i,ya);return}e=i.return;var r=Ax(i.alternate,i,Yi);if(r!==null){ve=r;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=e}while(i!==null);Je===0&&(Je=5)}function pg(e,i){do{var r=Rx(e.alternate,e);if(r!==null){r.flags&=32767,ve=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){ve=e;return}ve=e=r}while(e!==null);Je=6,ve=null}function mg(e,i,r,l,u,d,E,A,B){e.cancelPendingCommit=null;do Ll();while(Mn!==0);if((Ue&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=au,Tt(e,r,d,E,A,B),e===Ve&&(ve=Ve=null,Me=0),js=i,Ta=e,Zs=r,uf=d,ff=u,sg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ix(He,function(){return Sg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,u=J.p,J.p=2,E=Ue,Ue|=4;try{wx(e,i,r)}finally{Ue=E,J.p=u,F.T=l}}Mn=1,gg(),_g(),vg()}}function gg(){if(Mn===1){Mn=0;var e=Ta,i=js,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var l=J.p;J.p=2;var u=Ue;Ue|=4;try{Jm(i,e);var d=Rf,E=ap(e.containerInfo),A=d.focusedElem,B=d.selectionRange;if(E!==A&&A&&A.ownerDocument&&ip(A.ownerDocument.documentElement,A)){if(B!==null&&$c(A)){var it=B.start,pt=B.end;if(pt===void 0&&(pt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(pt,A.value.length);else{var _t=A.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var ot=rt.getSelection(),ie=A.textContent.length,te=Math.min(B.start,ie),ze=B.end===void 0?te:Math.min(B.end,ie);!ot.extend&&te>ze&&(E=ze,ze=te,te=E);var Z=np(A,te),k=np(A,ze);if(Z&&k&&(ot.rangeCount!==1||ot.anchorNode!==Z.node||ot.anchorOffset!==Z.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var tt=_t.createRange();tt.setStart(Z.node,Z.offset),ot.removeAllRanges(),te>ze?(ot.addRange(tt),ot.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ot.addRange(tt))}}}}for(_t=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var mt=_t[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Xl=!!Af,Rf=Af=null}finally{Ue=u,J.p=l,F.T=r}}e.current=i,Mn=2}}function _g(){if(Mn===2){Mn=0;var e=Ta,i=js,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var l=J.p;J.p=2;var u=Ue;Ue|=4;try{jm(e,i.alternate,i)}finally{Ue=u,J.p=l,F.T=r}}Mn=3}}function vg(){if(Mn===4||Mn===3){Mn=0,$t();var e=Ta,i=js,r=Zs,l=sg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Mn=5:(Mn=0,js=Ta=null,xg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ea=null),De(r),i=i.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot($,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,u=J.p,J.p=2,F.T=null;try{for(var d=e.onRecoverableError,E=0;E<l.length;E++){var A=l[E];d(A.value,{componentStack:A.stack})}}finally{F.T=i,J.p=u}}(Zs&3)!==0&&Ll(),Di(e),u=e.pendingLanes,(r&4194090)!==0&&(u&42)!==0?e===hf?lo++:(lo=0,hf=e):lo=0,co(0)}}function xg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Vr(i)))}function Ll(e){return gg(),_g(),vg(),Sg()}function Sg(){if(Mn!==5)return!1;var e=Ta,i=uf;uf=0;var r=De(Zs),l=F.T,u=J.p;try{J.p=32>r?32:r,F.T=null,r=ff,ff=null;var d=Ta,E=Zs;if(Mn=0,js=Ta=null,Zs=0,(Ue&6)!==0)throw Error(s(331));var A=Ue;if(Ue|=4,ig(d.current),tg(d,d.current,E,r),Ue=A,co(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot($,d)}catch{}return!0}finally{J.p=u,F.T=l,xg(e,i)}}function yg(e,i,r){i=ti(r,i),i=ku(e.stateNode,i,2),e=pa(e,i,2),e!==null&&(Ft(e,2),Di(e))}function Ie(e,i,r){if(e.tag===3)yg(e,e,r);else for(;i!==null;){if(i.tag===3){yg(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ea===null||!Ea.has(l))){e=ti(r,e),r=bm(2),l=pa(i,r,2),l!==null&&(Am(r,l,i,e),Ft(l,2),Di(l));break}}i=i.return}}function gf(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Ux;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(r)||(rf=!0,u.add(r),e=zx.bind(null,e,i,r),i.then(e,e))}function zx(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ve===e&&(Me&r)===r&&(Je===4||Je===3&&(Me&62914560)===Me&&300>zt()-cf?(Ue&2)===0&&Ks(e,0):of|=r,Ys===Me&&(Ys=0)),Di(e)}function Mg(e,i){i===0&&(i=At()),e=Ls(e,i),e!==null&&(Ft(e,i),Di(e))}function Fx(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),Mg(e,r)}function Bx(e,i){var r=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Mg(e,r)}function Ix(e,i){return H(e,i)}var Nl=null,Js=null,_f=!1,Ol=!1,vf=!1,rs=0;function Di(e){e!==Js&&e.next===null&&(Js===null?Nl=Js=e:Js=Js.next=e),Ol=!0,_f||(_f=!0,Gx())}function co(e,i){if(!vf&&Ol){vf=!0;do for(var r=!1,l=Nl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var E=l.suspendedLanes,A=l.pingedLanes;d=(1<<31-wt(42|e)+1)-1,d&=u&~(E&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Ag(l,d))}else d=Me,d=Wt(l,l===Ve?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Dt(l,d)||(r=!0,Ag(l,d));l=l.next}while(r);vf=!1}}function Hx(){Eg()}function Eg(){Ol=_f=!1;var e=0;rs!==0&&(Zx()&&(e=rs),rs=0);for(var i=zt(),r=null,l=Nl;l!==null;){var u=l.next,d=Tg(l,i);d===0?(l.next=null,r===null?Nl=u:r.next=u,u===null&&(Js=r)):(r=l,(e!==0||(d&3)!==0)&&(Ol=!0)),l=u}co(e)}function Tg(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var E=31-wt(d),A=1<<E,B=u[E];B===-1?((A&r)===0||(A&l)!==0)&&(u[E]=oe(A,i)):B<=i&&(e.expiredLanes|=A),d&=~A}if(i=Ve,r=Me,r=Wt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ce(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Dt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&Ce(l),De(r)){case 2:case 8:r=re;break;case 32:r=He;break;case 268435456:r=U;break;default:r=He}return l=bg.bind(null,e),r=H(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&Ce(l),e.callbackPriority=2,e.callbackNode=null,2}function bg(e,i){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Ll()&&e.callbackNode!==r)return null;var l=Me;return l=Wt(e,e===Ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(og(e,l,i),Tg(e,zt()),e.callbackNode!=null&&e.callbackNode===r?bg.bind(null,e):null)}function Ag(e,i){if(Ll())return null;og(e,i,!0)}function Gx(){Qx(function(){(Ue&6)!==0?H(Gt,Hx):Eg()})}function xf(){return rs===0&&(rs=X()),rs}function Rg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wo(""+e)}function wg(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function Vx(e,i,r,l,u){if(i==="submit"&&r&&r.stateNode===u){var d=Rg((u[Ze]||null).action),E=l.submitter;E&&(i=(i=E[Ze]||null)?Rg(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var A=new Zo("action","action",null,l,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(rs!==0){var B=E?wg(u,E):new FormData(u);Bu(r,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(A.preventDefault(),B=E?wg(u,E):new FormData(u),Bu(r,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Sf=0;Sf<iu.length;Sf++){var yf=iu[Sf],kx=yf.toLowerCase(),Xx=yf[0].toUpperCase()+yf.slice(1);di(kx,"on"+Xx)}di(op,"onAnimationEnd"),di(lp,"onAnimationIteration"),di(cp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(ox,"onTransitionRun"),di(lx,"onTransitionStart"),di(cx,"onTransitionCancel"),di(up,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uo));function Cg(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],u=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var A=l[E],B=A.instance,it=A.currentTarget;if(A=A.listener,B!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=it;try{d(u)}catch(pt){yl(pt)}u.currentTarget=null,d=B}else for(E=0;E<l.length;E++){if(A=l[E],B=A.instance,it=A.currentTarget,A=A.listener,B!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=it;try{d(u)}catch(pt){yl(pt)}u.currentTarget=null,d=B}}}}function xe(e,i){var r=i[Ms];r===void 0&&(r=i[Ms]=new Set);var l=e+"__bubble";r.has(l)||(Dg(i,e,2,!1),r.add(l))}function Mf(e,i,r){var l=0;i&&(l|=4),Dg(r,e,l,i)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Ef(e){if(!e[Pl]){e[Pl]=!0,ko.forEach(function(r){r!=="selectionchange"&&(Wx.has(r)||Mf(r,!1,e),Mf(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Pl]||(i[Pl]=!0,Mf("selectionchange",!1,i))}}function Dg(e,i,r,l){switch(t0(i)){case 2:var u=v1;break;case 8:u=x1;break;default:u=Ff}r=u.bind(null,i,r,e),u=void 0,!Xc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(i,r,{capture:!0,passive:u}):e.addEventListener(i,r,!0):u!==void 0?e.addEventListener(i,r,{passive:u}):e.addEventListener(i,r,!1)}function Tf(e,i,r,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var A=l.stateNode.containerInfo;if(A===u)break;if(E===4)for(E=l.return;E!==null;){var B=E.tag;if((B===3||B===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;A!==null;){if(E=Oi(A),E===null)return;if(B=E.tag,B===5||B===6||B===26||B===27){l=d=E;continue t}A=A.parentNode}}l=l.return}Fd(function(){var it=d,pt=Vc(r),_t=[];t:{var rt=fp.get(e);if(rt!==void 0){var ot=Zo,ie=e;switch(e){case"keypress":if(Yo(r)===0)break t;case"keydown":case"keyup":ot=Iv;break;case"focusin":ie="focus",ot=jc;break;case"focusout":ie="blur",ot=jc;break;case"beforeblur":case"afterblur":ot=jc;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Vv;break;case op:case lp:case cp:ot=Dv;break;case up:ot=Xv;break;case"scroll":case"scrollend":ot=bv;break;case"wheel":ot=qv;break;case"copy":case"cut":case"paste":ot=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Vd;break;case"toggle":case"beforetoggle":ot=jv}var te=(i&4)!==0,ze=!te&&(e==="scroll"||e==="scrollend"),Z=te?rt!==null?rt+"Capture":null:rt;te=[];for(var k=it,tt;k!==null;){var mt=k;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||Z===null||(mt=Cr(k,Z),mt!=null&&te.push(fo(k,mt,tt))),ze)break;k=k.return}0<te.length&&(rt=new ot(rt,ie,null,r,pt),_t.push({event:rt,listeners:te}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",rt&&r!==Gc&&(ie=r.relatedTarget||r.fromElement)&&(Oi(ie)||ie[Ti]))break t;if((ot||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ot?(ie=r.relatedTarget||r.toElement,ot=it,ie=ie?Oi(ie):null,ie!==null&&(ze=c(ie),te=ie.tag,ie!==ze||te!==5&&te!==27&&te!==6)&&(ie=null)):(ot=null,ie=it),ot!==ie)){if(te=Hd,mt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Vd,mt="onPointerLeave",Z="onPointerEnter",k="pointer"),ze=ot==null?rt:Xa(ot),tt=ie==null?rt:Xa(ie),rt=new te(mt,k+"leave",ot,r,pt),rt.target=ze,rt.relatedTarget=tt,mt=null,Oi(pt)===it&&(te=new te(Z,k+"enter",ie,r,pt),te.target=tt,te.relatedTarget=ze,mt=te),ze=mt,ot&&ie)e:{for(te=ot,Z=ie,k=0,tt=te;tt;tt=$s(tt))k++;for(tt=0,mt=Z;mt;mt=$s(mt))tt++;for(;0<k-tt;)te=$s(te),k--;for(;0<tt-k;)Z=$s(Z),tt--;for(;k--;){if(te===Z||Z!==null&&te===Z.alternate)break e;te=$s(te),Z=$s(Z)}te=null}else te=null;ot!==null&&Ug(_t,rt,ot,te,!1),ie!==null&&ze!==null&&Ug(_t,ze,ie,te,!0)}}t:{if(rt=it?Xa(it):window,ot=rt.nodeName&&rt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&rt.type==="file")var Vt=Kd;else if(jd(rt))if(Qd)Vt=ax;else{Vt=nx;var ge=ex}else ot=rt.nodeName,!ot||ot.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&Hc(it.elementType)&&(Vt=Kd):Vt=ix;if(Vt&&(Vt=Vt(e,it))){Zd(_t,Vt,r,pt);break t}ge&&ge(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&bn(rt,"number",rt.value)}switch(ge=it?Xa(it):window,e){case"focusin":(jd(ge)||ge.contentEditable==="true")&&(Cs=ge,tu=it,Fr=null);break;case"focusout":Fr=tu=Cs=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,sp(_t,r,pt);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":sp(_t,r,pt)}var jt;if(Kc)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else ws?qd(e,r)&&(ne="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ne="onCompositionStart");ne&&(kd&&r.locale!=="ko"&&(ws||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&ws&&(jt=Bd()):(ua=pt,Wc="value"in ua?ua.value:ua.textContent,ws=!0)),ge=zl(it,ne),0<ge.length&&(ne=new Gd(ne,e,null,r,pt),_t.push({event:ne,listeners:ge}),jt?ne.data=jt:(jt=Yd(r),jt!==null&&(ne.data=jt)))),(jt=Kv?Qv(e,r):Jv(e,r))&&(ne=zl(it,"onBeforeInput"),0<ne.length&&(ge=new Gd("onBeforeInput","beforeinput",null,r,pt),_t.push({event:ge,listeners:ne}),ge.data=jt)),Vx(_t,e,it,r,pt)}Cg(_t,i)})}function fo(e,i,r){return{instance:e,listener:i,currentTarget:r}}function zl(e,i){for(var r=i+"Capture",l=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Cr(e,r),u!=null&&l.unshift(fo(e,u,d)),u=Cr(e,i),u!=null&&l.push(fo(e,u,d))),e.tag===3)return l;e=e.return}return[]}function $s(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ug(e,i,r,l,u){for(var d=i._reactName,E=[];r!==null&&r!==l;){var A=r,B=A.alternate,it=A.stateNode;if(A=A.tag,B!==null&&B===l)break;A!==5&&A!==26&&A!==27||it===null||(B=it,u?(it=Cr(r,d),it!=null&&E.unshift(fo(r,it,B))):u||(it=Cr(r,d),it!=null&&E.push(fo(r,it,B)))),r=r.return}E.length!==0&&e.push({event:i,listeners:E})}var qx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function Lg(e){return(typeof e=="string"?e:""+e).replace(qx,`
`).replace(Yx,"")}function Ng(e,i){return i=Lg(i),Lg(e)===i}function Fl(){}function Pe(e,i,r,l,u,d){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Pn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Pn(e,""+l);break;case"className":It(e,"class",l);break;case"tabIndex":It(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,r,l);break;case"style":Pd(e,l,d);break;case"data":if(i!=="object"){It(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Wo(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&Pe(e,i,"name",u.name,u,null),Pe(e,i,"formEncType",u.formEncType,u,null),Pe(e,i,"formMethod",u.formMethod,u,null),Pe(e,i,"formTarget",u.formTarget,u,null)):(Pe(e,i,"encType",u.encType,u,null),Pe(e,i,"method",u.method,u,null),Pe(e,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Wo(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Fl);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Wo(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Lt(e,"popover",l);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Lt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Ev.get(r)||r,Lt(e,r,l))}}function bf(e,i,r,l,u,d){switch(r){case"style":Pd(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Pn(e,l):(typeof l=="number"||typeof l=="bigint")&&Pn(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Fl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xo.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),i=r.slice(2,u?r.length-7:void 0),d=e[Ze]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,u);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Lt(e,r,l)}}}function En(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var E=r[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Pe(e,i,d,E,r,null)}}u&&Pe(e,i,"srcSet",r.srcSet,r,null),l&&Pe(e,i,"src",r.src,r,null);return;case"input":xe("invalid",e);var A=d=E=u=null,B=null,it=null;for(l in r)if(r.hasOwnProperty(l)){var pt=r[l];if(pt!=null)switch(l){case"name":u=pt;break;case"type":E=pt;break;case"checked":B=pt;break;case"defaultChecked":it=pt;break;case"value":d=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,i));break;default:Pe(e,i,l,pt,r,null)}}Un(e,d,A,B,it,E,u,!1),_e(e);return;case"select":xe("invalid",e),l=E=d=null;for(u in r)if(r.hasOwnProperty(u)&&(A=r[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":E=A;break;case"multiple":l=A;default:Pe(e,i,u,A,r,null)}i=d,r=E,e.multiple=!!l,i!=null?Ke(e,!!l,i,!1):r!=null&&Ke(e,!!l,r,!0);return;case"textarea":xe("invalid",e),d=u=l=null;for(E in r)if(r.hasOwnProperty(E)&&(A=r[E],A!=null))switch(E){case"value":l=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Pe(e,i,E,A,r,null)}bs(e,l,u,d),_e(e);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(l=r[B],l!=null))switch(B){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Pe(e,i,B,l,r,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<uo.length;l++)xe(uo[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in r)if(r.hasOwnProperty(it)&&(l=r[it],l!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Pe(e,i,it,l,r,null)}return;default:if(Hc(i)){for(pt in r)r.hasOwnProperty(pt)&&(l=r[pt],l!==void 0&&bf(e,i,pt,l,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(l=r[A],l!=null&&Pe(e,i,A,l,r,null))}function jx(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,E=null,A=null,B=null,it=null,pt=null;for(ot in r){var _t=r[ot];if(r.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=_t;default:l.hasOwnProperty(ot)||Pe(e,i,ot,null,l,_t)}}for(var rt in l){var ot=l[rt];if(_t=r[rt],l.hasOwnProperty(rt)&&(ot!=null||_t!=null))switch(rt){case"type":d=ot;break;case"name":u=ot;break;case"checked":it=ot;break;case"defaultChecked":pt=ot;break;case"value":E=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,i));break;default:ot!==_t&&Pe(e,i,rt,ot,l,_t)}}Be(e,E,A,B,it,pt,d,u);return;case"select":ot=E=A=rt=null;for(d in r)if(B=r[d],r.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":ot=B;default:l.hasOwnProperty(d)||Pe(e,i,d,null,l,B)}for(u in l)if(d=l[u],B=r[u],l.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":rt=d;break;case"defaultValue":A=d;break;case"multiple":E=d;default:d!==B&&Pe(e,i,u,d,l,B)}i=A,r=E,l=ot,rt!=null?Ke(e,!!r,rt,!1):!!l!=!!r&&(i!=null?Ke(e,!!r,i,!0):Ke(e,!!r,r?[]:"",!1));return;case"textarea":ot=rt=null;for(A in r)if(u=r[A],r.hasOwnProperty(A)&&u!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Pe(e,i,A,null,l,u)}for(E in l)if(u=l[E],d=r[E],l.hasOwnProperty(E)&&(u!=null||d!=null))switch(E){case"value":rt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Pe(e,i,E,u,l,d)}Sn(e,rt,ot);return;case"option":for(var ie in r)if(rt=r[ie],r.hasOwnProperty(ie)&&rt!=null&&!l.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Pe(e,i,ie,null,l,rt)}for(B in l)if(rt=l[B],ot=r[B],l.hasOwnProperty(B)&&rt!==ot&&(rt!=null||ot!=null))switch(B){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Pe(e,i,B,rt,l,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)rt=r[te],r.hasOwnProperty(te)&&rt!=null&&!l.hasOwnProperty(te)&&Pe(e,i,te,null,l,rt);for(it in l)if(rt=l[it],ot=r[it],l.hasOwnProperty(it)&&rt!==ot&&(rt!=null||ot!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,i));break;default:Pe(e,i,it,rt,l,ot)}return;default:if(Hc(i)){for(var ze in r)rt=r[ze],r.hasOwnProperty(ze)&&rt!==void 0&&!l.hasOwnProperty(ze)&&bf(e,i,ze,void 0,l,rt);for(pt in l)rt=l[pt],ot=r[pt],!l.hasOwnProperty(pt)||rt===ot||rt===void 0&&ot===void 0||bf(e,i,pt,rt,l,ot);return}}for(var Z in r)rt=r[Z],r.hasOwnProperty(Z)&&rt!=null&&!l.hasOwnProperty(Z)&&Pe(e,i,Z,null,l,rt);for(_t in l)rt=l[_t],ot=r[_t],!l.hasOwnProperty(_t)||rt===ot||rt==null&&ot==null||Pe(e,i,_t,rt,l,ot)}var Af=null,Rf=null;function Bl(e){return e.nodeType===9?e:e.ownerDocument}function Og(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function wf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Cf=null;function Zx(){var e=window.event;return e&&e.type==="popstate"?e===Cf?!1:(Cf=e,!0):(Cf=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(e){return Fg.resolve(null).then(e).catch(Jx)}:zg;function Jx(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Bg(e,i){var r=i,l=0,u=0;do{var d=r.nextSibling;if(e.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(0<l&&8>l){r=l;var E=e.ownerDocument;if(r&1&&ho(E.documentElement),r&2&&ho(E.body),r&4)for(r=E.head,ho(r),E=r.firstChild;E;){var A=E.nextSibling,B=E.nodeName;E[bi]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&E.rel.toLowerCase()==="stylesheet"||r.removeChild(E),E=A}}if(u===0){e.removeChild(d),yo(i);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:l=r.charCodeAt(0)-48;else l=0;r=d}while(r);yo(i)}function Df(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Df(r),Ts(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function $x(e,i,r,l){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[bi])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function t1(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=mi(e.nextSibling),e===null))return null;return e}function Uf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function e1(e,i){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function mi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Lf=null;function Ig(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return e;i--}else r==="/$"&&i++}e=e.previousSibling}return null}function Hg(e,i,r){switch(i=Bl(r),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ho(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ts(e)}var ri=new Map,Gg=new Set;function Il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=J.d;J.d={f:n1,r:i1,D:a1,C:s1,L:r1,m:o1,X:c1,S:l1,M:u1};function n1(){var e=ji.f(),i=Dl();return e||i}function i1(e){var i=la(e);i!==null&&i.tag===5&&i.type==="form"?om(i):ji.r(e)}var tr=typeof document>"u"?null:document;function Vg(e,i,r){var l=tr;if(l&&typeof i=="string"&&i){var u=mn(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Gg.has(u)||(Gg.add(u),e={rel:e,crossOrigin:r,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),En(i,"link",e),nn(i),l.head.appendChild(i)))}}function a1(e){ji.D(e),Vg("dns-prefetch",e,null)}function s1(e,i){ji.C(e,i),Vg("preconnect",e,i)}function r1(e,i,r){ji.L(e,i,r);var l=tr;if(l&&e&&i){var u='link[rel="preload"][as="'+mn(i)+'"]';i==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+mn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+mn(r.imageSizes)+'"]')):u+='[href="'+mn(e)+'"]';var d=u;switch(i){case"style":d=er(e);break;case"script":d=nr(e)}ri.has(d)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),ri.set(d,e),l.querySelector(u)!==null||i==="style"&&l.querySelector(po(d))||i==="script"&&l.querySelector(mo(d))||(i=l.createElement("link"),En(i,"link",e),nn(i),l.head.appendChild(i)))}}function o1(e,i){ji.m(e,i);var r=tr;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+mn(l)+'"][href="'+mn(e)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=nr(e)}if(!ri.has(d)&&(e=g({rel:"modulepreload",href:e},i),ri.set(d,e),r.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(mo(d)))return}l=r.createElement("link"),En(l,"link",e),nn(l),r.head.appendChild(l)}}}function l1(e,i,r){ji.S(e,i,r);var l=tr;if(l&&e){var u=ca(l).hoistableStyles,d=er(e);i=i||"default";var E=u.get(d);if(!E){var A={loading:0,preload:null};if(E=l.querySelector(po(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=ri.get(d))&&Nf(e,r);var B=E=l.createElement("link");nn(B),En(B,"link",e),B._p=new Promise(function(it,pt){B.onload=it,B.onerror=pt}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Hl(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:A},u.set(d,E)}}}function c1(e,i){ji.X(e,i);var r=tr;if(r&&e){var l=ca(r).hoistableScripts,u=nr(e),d=l.get(u);d||(d=r.querySelector(mo(u)),d||(e=g({src:e,async:!0},i),(i=ri.get(u))&&Of(e,i),d=r.createElement("script"),nn(d),En(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function u1(e,i){ji.M(e,i);var r=tr;if(r&&e){var l=ca(r).hoistableScripts,u=nr(e),d=l.get(u);d||(d=r.querySelector(mo(u)),d||(e=g({src:e,async:!0,type:"module"},i),(i=ri.get(u))&&Of(e,i),d=r.createElement("script"),nn(d),En(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function kg(e,i,r,l){var u=(u=at.current)?Il(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=er(r.href),r=ca(u).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=er(r.href);var d=ca(u).hoistableStyles,E=d.get(e);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,E),(d=u.querySelector(po(e)))&&!d._p&&(E.instance=d,E.state.loading=5),ri.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ri.set(e,r),d||f1(u,e,r,E.state))),i&&l===null)throw Error(s(528,""));return E}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=nr(r),r=ca(u).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function er(e){return'href="'+mn(e)+'"'}function po(e){return'link[rel="stylesheet"]['+e+"]"}function Xg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function f1(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),En(i,"link",r),nn(i),e.head.appendChild(i))}function nr(e){return'[src="'+mn(e)+'"]'}function mo(e){return"script[async]"+e}function Wg(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+mn(r.href)+'"]');if(l)return i.instance=l,nn(l),l;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),nn(l),En(l,"style",u),Hl(l,r.precedence,e),i.instance=l;case"stylesheet":u=er(r.href);var d=e.querySelector(po(u));if(d)return i.state.loading|=4,i.instance=d,nn(d),d;l=Xg(r),(u=ri.get(u))&&Nf(l,u),d=(e.ownerDocument||e).createElement("link"),nn(d);var E=d;return E._p=new Promise(function(A,B){E.onload=A,E.onerror=B}),En(d,"link",l),i.state.loading|=4,Hl(d,r.precedence,e),i.instance=d;case"script":return d=nr(r.src),(u=e.querySelector(mo(d)))?(i.instance=u,nn(u),u):(l=r,(u=ri.get(d))&&(l=g({},r),Of(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),nn(u),En(u,"link",l),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Hl(l,r.precedence,e));return i.instance}function Hl(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,E=0;E<l.length;E++){var A=l[E];if(A.dataset.precedence===i)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Nf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Of(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Gl=null;function qg(e,i,r){if(Gl===null){var l=new Map,u=Gl=new Map;u.set(r,l)}else u=Gl,l=u.get(r),l||(l=new Map,u.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var d=r[u];if(!(d[bi]||d[un]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=e+E;var A=l.get(E);A?A.push(d):l.set(E,[d])}}return l}function Yg(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function h1(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function jg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var go=null;function d1(){}function p1(e,i,r){if(go===null)throw Error(s(475));var l=go;if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=er(r.href),d=e.querySelector(po(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Vl.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,nn(d);return}d=e.ownerDocument||e,r=Xg(r),(u=ri.get(u))&&Nf(r,u),d=d.createElement("link"),nn(d);var E=d;E._p=new Promise(function(A,B){E.onload=A,E.onerror=B}),En(d,"link",r),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Vl.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function m1(){if(go===null)throw Error(s(475));var e=go;return e.stylesheets&&e.count===0&&Pf(e,e.stylesheets),0<e.count?function(i){var r=setTimeout(function(){if(e.stylesheets&&Pf(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Vl(){if(this.count--,this.count===0){if(this.stylesheets)Pf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kl=null;function Pf(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kl=new Map,i.forEach(g1,e),kl=null,Vl.call(e))}function g1(e,i){if(!(i.state.loading&4)){var r=kl.get(e);if(r)var l=r.get(null);else{r=new Map,kl.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var E=u[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),l=E)}l&&r.set(null,l)}u=i.instance,E=u.getAttribute("data-precedence"),d=r.get(E)||l,d===l&&r.set(null,u),r.set(E,u),this.count++,l=Vl.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var _o={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function _1(e,i,r,l,u,d,E,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Zg(e,i,r,l,u,d,E,A,B,it,pt,_t){return e=new _1(e,i,r,E,A,B,it,_t),i=1,d===!0&&(i|=24),d=Wn(3,null,null,i),e.current=d,d.stateNode=e,i=mu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:i},xu(d),e}function Kg(e){return e?(e=Ns,e):Ns}function Qg(e,i,r,l,u,d){u=Kg(u),l.context===null?l.context=u:l.pendingContext=u,l=da(i),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=pa(e,l,i),r!==null&&(Kn(r,e,i),qr(r,e,i))}function Jg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function zf(e,i){Jg(e,i),(e=e.alternate)&&Jg(e,i)}function $g(e){if(e.tag===13){var i=Ls(e,67108864);i!==null&&Kn(i,e,67108864),zf(e,67108864)}}var Xl=!0;function v1(e,i,r,l){var u=F.T;F.T=null;var d=J.p;try{J.p=2,Ff(e,i,r,l)}finally{J.p=d,F.T=u}}function x1(e,i,r,l){var u=F.T;F.T=null;var d=J.p;try{J.p=8,Ff(e,i,r,l)}finally{J.p=d,F.T=u}}function Ff(e,i,r,l){if(Xl){var u=Bf(l);if(u===null)Tf(e,i,l,Wl,r),e0(e,l);else if(y1(u,e,i,r,l))l.stopPropagation();else if(e0(e,l),i&4&&-1<S1.indexOf(e)){for(;u!==null;){var d=la(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Kt(d.pendingLanes);if(E!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var B=1<<31-wt(E);A.entanglements[1]|=B,E&=~B}Di(d),(Ue&6)===0&&(wl=zt()+500,co(0))}}break;case 13:A=Ls(d,2),A!==null&&Kn(A,d,2),Dl(),zf(d,2)}if(d=Bf(l),d===null&&Tf(e,i,l,Wl,r),d===u)break;u=d}u!==null&&l.stopPropagation()}else Tf(e,i,l,null,r)}}function Bf(e){return e=Vc(e),If(e)}var Wl=null;function If(e){if(Wl=null,e=Oi(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Wl=e,null}function t0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ye()){case Gt:return 2;case re:return 8;case He:case Ge:return 32;case U:return 268435456;default:return 32}default:return 32}}var Hf=!1,Ra=null,wa=null,Ca=null,vo=new Map,xo=new Map,Da=[],S1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e0(e,i){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(i.pointerId)}}function So(e,i,r,l,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=la(i),i!==null&&$g(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function y1(e,i,r,l,u){switch(i){case"focusin":return Ra=So(Ra,e,i,r,l,u),!0;case"dragenter":return wa=So(wa,e,i,r,l,u),!0;case"mouseover":return Ca=So(Ca,e,i,r,l,u),!0;case"pointerover":var d=u.pointerId;return vo.set(d,So(vo.get(d)||null,e,i,r,l,u)),!0;case"gotpointercapture":return d=u.pointerId,xo.set(d,So(xo.get(d)||null,e,i,r,l,u)),!0}return!1}function n0(e){var i=Oi(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=f(r),i!==null){e.blockedOn=i,fi(e.priority,function(){if(r.tag===13){var l=Zn();l=ae(l);var u=Ls(r,l);u!==null&&Kn(u,r,l),zf(r,l)}});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ql(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Bf(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Gc=l,r.target.dispatchEvent(l),Gc=null}else return i=la(r),i!==null&&$g(i),e.blockedOn=r,!1;i.shift()}return!0}function i0(e,i,r){ql(e)&&r.delete(i)}function M1(){Hf=!1,Ra!==null&&ql(Ra)&&(Ra=null),wa!==null&&ql(wa)&&(wa=null),Ca!==null&&ql(Ca)&&(Ca=null),vo.forEach(i0),xo.forEach(i0)}function Yl(e,i){e.blockedOn===i&&(e.blockedOn=null,Hf||(Hf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,M1)))}var jl=null;function a0(e){jl!==e&&(jl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){jl===e&&(jl=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],u=e[i+2];if(typeof l!="function"){if(If(l||r)===null)continue;break}var d=la(r);d!==null&&(e.splice(i,3),i-=3,Bu(d,{pending:!0,data:u,method:r.method,action:l},l,u))}}))}function yo(e){function i(B){return Yl(B,e)}Ra!==null&&Yl(Ra,e),wa!==null&&Yl(wa,e),Ca!==null&&Yl(Ca,e),vo.forEach(i),xo.forEach(i);for(var r=0;r<Da.length;r++){var l=Da[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Da.length&&(r=Da[0],r.blockedOn===null);)n0(r),r.blockedOn===null&&Da.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var u=r[l],d=r[l+1],E=u[Ze]||null;if(typeof d=="function")E||a0(r);else if(E){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,E=d[Ze]||null)A=E.formAction;else if(If(u)!==null)continue}else A=E.action;typeof A=="function"?r[l+1]=A:(r.splice(l,3),l-=3),a0(r)}}}function Gf(e){this._internalRoot=e}Zl.prototype.render=Gf.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var r=i.current,l=Zn();Qg(r,l,e,i,null,null)},Zl.prototype.unmount=Gf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Qg(e.current,2,null,e,null,null),Dl(),i[Ti]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ee();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Da.length&&i!==0&&i<Da[r].priority;r++);Da.splice(r,0,e),r===0&&n0(e)}};var s0=t.version;if(s0!=="19.1.1")throw Error(s(527,s0,"19.1.1"));J.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var E1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{$=Kl.inject(E1),ft=Kl}catch{}}return Eo.createRoot=function(e,i){if(!o(e))throw Error(s(299));var r=!1,l="",u=ym,d=Mm,E=Em,A=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=Zg(e,1,!1,null,null,r,l,u,d,E,A,null),e[Ti]=i.current,Ef(e),new Gf(i)},Eo.hydrateRoot=function(e,i,r){if(!o(e))throw Error(s(299));var l=!1,u="",d=ym,E=Mm,A=Em,B=null,it=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(B=r.unstable_transitionCallbacks),r.formState!==void 0&&(it=r.formState)),i=Zg(e,1,!0,i,r??null,l,u,d,E,A,B,it),i.context=Kg(null),r=i.current,l=Zn(),l=ae(l),u=da(l),u.callback=null,pa(r,u,l),r=l,i.current.lanes=r,Ft(i,r),Di(i),e[Ti]=i.current,Ef(e),new Zl(i)},Eo.version="19.1.1",Eo}var m0;function O1(){if(m0)return Xf.exports;m0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Xf.exports=N1(),Xf.exports}var P1=O1();const z1=()=>{const[a,t]=On.useState(!1);return q.jsxs("nav",{className:"navbar",children:[q.jsx("div",{className:"logo",children:q.jsxs("svg",{width:"120",height:"40",viewBox:"0 0 450 140",xmlns:"http://www.w3.org/2000/svg",children:[q.jsx("rect",{width:"450",height:"140",fill:"transparent"}),q.jsxs("g",{fill:"none",stroke:"#006affff",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[q.jsx("path",{d:"M20,110 L55,20 L90,110"})," ",q.jsx("path",{d:"M110,110 L145,20 L180,110 L145,65 L180,65"})," "]}),q.jsx("text",{x:"200",y:"90",fontFamily:"Poppins, sans-serif",fontSize:"36",fill:"#bfd1ebff",fontWeight:"600",children:"Studio"})]})}),q.jsxs("div",{className:`menu-icon ${a?"active":""}`,onClick:()=>t(!a),children:[q.jsx("span",{}),q.jsx("span",{}),q.jsx("span",{})]}),q.jsxs("ul",{className:`nav-links ${a?"open":""}`,children:[q.jsx("li",{children:q.jsx("a",{href:"#Home",onClick:()=>t(!1),children:"Home"})}),q.jsx("li",{children:q.jsx("a",{href:"#About",onClick:()=>t(!1),children:"About"})}),q.jsx("li",{children:q.jsx("a",{href:"#services",onClick:()=>t(!1),children:"Services"})}),q.jsx("li",{children:q.jsx("a",{href:"#Contact",onClick:()=>t(!1),children:"Contact"})})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Td="180",F1=0,g0=1,B1=2,O_=1,I1=2,ta=3,Va=0,Vn=1,ea=2,Ia=0,vr=1,Uh=2,_0=3,v0=4,H1=5,ms=100,G1=101,V1=102,k1=103,X1=104,W1=200,q1=201,Y1=202,j1=203,Lh=204,Nh=205,Z1=206,K1=207,Q1=208,J1=209,$1=210,tS=211,eS=212,nS=213,iS=214,Oh=0,Ph=1,zh=2,Sr=3,Fh=4,Bh=5,Ih=6,Hh=7,P_=0,aS=1,sS=2,Ha=0,rS=1,oS=2,lS=3,cS=4,uS=5,fS=6,hS=7,z_=300,yr=301,Mr=302,Gh=303,Vh=304,zc=306,kh=1e3,yi=1001,Xh=1002,$n=1003,dS=1004,Ql=1005,Gn=1006,jf=1007,_s=1008,aa=1009,F_=1010,B_=1011,Lo=1012,bd=1013,Ss=1014,Li=1015,br=1016,Ad=1017,Rd=1018,No=1020,I_=35902,H_=35899,G_=1021,V_=1022,ci=1023,Oo=1026,Po=1027,k_=1028,wd=1029,X_=1030,Cd=1031,Dd=1033,Mc=33776,Ec=33777,Tc=33778,bc=33779,Wh=35840,qh=35841,Yh=35842,jh=35843,Zh=36196,Kh=37492,Qh=37496,Jh=37808,$h=37809,td=37810,ed=37811,nd=37812,id=37813,ad=37814,sd=37815,rd=37816,od=37817,ld=37818,cd=37819,ud=37820,fd=37821,hd=36492,dd=36494,pd=36495,md=36283,gd=36284,_d=36285,vd=36286,pS=3200,mS=3201,gS=0,_S=1,Ba="",li="srgb",Er="srgb-linear",wc="linear",Fe="srgb",ir=7680,x0=519,vS=512,xS=513,SS=514,W_=515,yS=516,MS=517,ES=518,TS=519,S0=35044,y0="300 es",Ni=2e3,Cc=2001;class Ar{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,xd=180/Math.PI;function Fo(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[a&255]+wn[a>>8&255]+wn[a>>16&255]+wn[a>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function Se(a,t,n){return Math.max(t,Math.min(n,a))}function bS(a,t){return(a%t+t)%t}function Kf(a,t,n){return(1-n)*a+n*t}function To(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Hn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class le{constructor(t=0,n=0){le.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*o+t.x,this.y=c*o+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bo{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,c,f,h){let p=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];const x=c[f+0],M=c[f+1],T=c[f+2],b=c[f+3];if(h===0){t[n+0]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=x,t[n+1]=M,t[n+2]=T,t[n+3]=b;return}if(_!==b||p!==x||m!==M||g!==T){let y=1-h;const v=p*x+m*M+g*T+_*b,z=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const O=Math.sqrt(L),P=Math.atan2(O,v*z);y=Math.sin(y*P)/O,h=Math.sin(h*P)/O}const R=h*z;if(p=p*y+x*R,m=m*y+M*R,g=g*y+T*R,_=_*y+b*R,y===1-h){const O=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=O,m*=O,g*=O,_*=O}}t[n]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,s,o,c,f){const h=s[o],p=s[o+1],m=s[o+2],g=s[o+3],_=c[f],x=c[f+1],M=c[f+2],T=c[f+3];return t[n]=h*T+g*_+p*M-m*x,t[n+1]=p*T+g*x+m*_-h*M,t[n+2]=m*T+g*M+h*x-p*_,t[n+3]=g*T-h*_-p*x-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(s/2),g=h(o/2),_=h(c/2),x=p(s/2),M=p(o/2),T=p(c/2);switch(f){case"XYZ":this._x=x*g*_+m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_-x*M*T;break;case"YXZ":this._x=x*g*_+m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_+x*M*T;break;case"ZXY":this._x=x*g*_-m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_-x*M*T;break;case"ZYX":this._x=x*g*_-m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_+x*M*T;break;case"YZX":this._x=x*g*_+m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_-x*M*T;break;case"XZY":this._x=x*g*_-m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],c=n[8],f=n[1],h=n[5],p=n[9],m=n[2],g=n[6],_=n[10],x=s+h+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(c-m)*M,this._z=(f-o)*M}else if(s>h&&s>_){const M=2*Math.sqrt(1+s-h-_);this._w=(g-p)/M,this._x=.25*M,this._y=(o+f)/M,this._z=(c+m)/M}else if(h>_){const M=2*Math.sqrt(1+h-s-_);this._w=(c-m)/M,this._x=(o+f)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+_-s-h);this._w=(f-o)/M,this._x=(c+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,c=t._z,f=t._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=s*g+f*h+o*m-c*p,this._y=o*g+f*p+c*h-s*m,this._z=c*g+f*m+s*p-o*h,this._w=f*g-s*h-o*p-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const s=this._x,o=this._y,c=this._z,f=this._w;let h=f*t._w+s*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-n;return this._w=M*f+n*this._w,this._x=M*s+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=f*_+this._w*x,this._x=s*_+this._x*x,this._y=o*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(t=0,n=0,s=0){ct.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(M0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(M0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=t.elements,f=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*f,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*o-h*s),g=2*(h*n-c*o),_=2*(c*s-f*n);return this.x=n+p*m+f*_-h*g,this.y=s+p*g+h*m-c*_,this.z=o+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,c=t.z,f=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*f-s*p,this.z=s*h-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qf.copy(this).projectOnVector(t),this.sub(Qf)}reflect(t){return this.sub(Qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new ct,M0=new Bo;class fe{constructor(t,n,s,o,c,f,h,p,m){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,f,h,p,m)}set(t,n,s,o,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,f=s[0],h=s[3],p=s[6],m=s[1],g=s[4],_=s[7],x=s[2],M=s[5],T=s[8],b=o[0],y=o[3],v=o[6],z=o[1],L=o[4],R=o[7],O=o[2],P=o[5],I=o[8];return c[0]=f*b+h*z+p*O,c[3]=f*y+h*L+p*P,c[6]=f*v+h*R+p*I,c[1]=m*b+g*z+_*O,c[4]=m*y+g*L+_*P,c[7]=m*v+g*R+_*I,c[2]=x*b+M*z+T*O,c[5]=x*y+M*L+T*P,c[8]=x*v+M*R+T*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return n*f*g-n*h*m-s*c*g+s*h*p+o*c*m-o*f*p}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*f-h*m,x=h*p-g*c,M=m*c-f*p,T=n*_+s*x+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=_*b,t[1]=(o*m-g*s)*b,t[2]=(h*s-o*f)*b,t[3]=x*b,t[4]=(g*n-o*p)*b,t[5]=(o*c-h*n)*b,t[6]=M*b,t[7]=(s*p-m*n)*b,t[8]=(f*n-s*c)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*h)+f+t,-o*m,o*p,-o*(-m*f+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Jf.makeScale(t,n)),this}rotate(t){return this.premultiply(Jf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Jf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jf=new fe;function q_(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Dc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function AS(){const a=Dc("canvas");return a.style.display="block",a}const E0={};function zo(a){a in E0||(E0[a]=!0,console.warn(a))}function RS(a,t,n){return new Promise(function(s,o){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const T0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wS(){const a={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Fe&&(o.r=na(o.r),o.g=na(o.g),o.b=na(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(o.r=xr(o.r),o.g=xr(o.g),o.b=xr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ba?wc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return zo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return zo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[Er]:{primaries:t,whitePoint:s,transfer:wc,toXYZ:T0,fromXYZ:b0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:s,transfer:Fe,toXYZ:T0,fromXYZ:b0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),a}const Ae=wS();function na(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function xr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ar;class CS{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ar===void 0&&(ar=Dc("canvas")),ar.width=t.width,ar.height=t.height;const o=ar.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=ar}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Dc("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=na(c[f]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(na(n[s]/255)*255):n[s]=na(n[s]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let DS=0;class Ud{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push($f(o[f].image)):c.push($f(o[f]))}else c=$f(o);s.url=c}return n||(t.images[this.uuid]=s),s}}function $f(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?CS.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let US=0;const th=new ct;let Ei=class Ac extends Ar{constructor(t=Ac.DEFAULT_IMAGE,n=Ac.DEFAULT_MAPPING,s=yi,o=yi,c=Gn,f=_s,h=ci,p=aa,m=Ac.DEFAULT_ANISOTROPY,g=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Fo(),this.name="",this.source=new Ud(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(th).x}get height(){return this.source.getSize(th).y}get depth(){return this.source.getSize(th).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==z_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kh:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Xh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kh:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Xh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ei.DEFAULT_IMAGE=null;Ei.DEFAULT_MAPPING=z_;Ei.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,n=0,s=0,o=1){$e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*s+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,c;const p=t.elements,m=p[0],g=p[4],_=p[8],x=p[1],M=p[5],T=p[9],b=p[2],y=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-b)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+b)<.1&&Math.abs(T+y)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,R=(M+1)/2,O=(v+1)/2,P=(g+x)/4,I=(_+b)/4,W=(T+y)/4;return L>R&&L>O?L<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(L),o=P/s,c=I/s):R>O?R<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),s=P/o,c=W/o):O<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),s=I/c,o=W/c),this.set(s,o,c,n),this}let z=Math.sqrt((y-T)*(y-T)+(_-b)*(_-b)+(x-g)*(x-g));return Math.abs(z)<.001&&(z=1),this.x=(y-T)/z,this.y=(_-b)/z,this.z=(x-g)/z,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this.w=Se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this.w=Se(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LS extends Ar{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new $e(0,0,t,n),this.scissorTest=!1,this.viewport=new $e(0,0,t,n);const o={width:t,height:n,depth:s.depth},c=new Ei(o);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Ud(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ka extends LS{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class Y_ extends Ei{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class NS extends Ei{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(t=new ct(1/0,1/0,1/0),n=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(gi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(gi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=gi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,gi):gi.fromBufferAttribute(c,f),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jl.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Jl.copy(s.boundingBox)),Jl.applyMatrix4(t.matrixWorld),this.union(Jl)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bo),$l.subVectors(this.max,bo),sr.subVectors(t.a,bo),rr.subVectors(t.b,bo),or.subVectors(t.c,bo),La.subVectors(rr,sr),Na.subVectors(or,rr),os.subVectors(sr,or);let n=[0,-La.z,La.y,0,-Na.z,Na.y,0,-os.z,os.y,La.z,0,-La.x,Na.z,0,-Na.x,os.z,0,-os.x,-La.y,La.x,0,-Na.y,Na.x,0,-os.y,os.x,0];return!eh(n,sr,rr,or,$l)||(n=[1,0,0,0,1,0,0,0,1],!eh(n,sr,rr,or,$l))?!1:(tc.crossVectors(La,Na),n=[tc.x,tc.y,tc.z],eh(n,sr,rr,or,$l))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],gi=new ct,Jl=new Io,sr=new ct,rr=new ct,or=new ct,La=new ct,Na=new ct,os=new ct,bo=new ct,$l=new ct,tc=new ct,ls=new ct;function eh(a,t,n,s,o){for(let c=0,f=a.length-3;c<=f;c+=3){ls.fromArray(a,c);const h=o.x*Math.abs(ls.x)+o.y*Math.abs(ls.y)+o.z*Math.abs(ls.z),p=t.dot(ls),m=n.dot(ls),g=s.dot(ls);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const OS=new Io,Ao=new ct,nh=new ct;class Fc{constructor(t=new ct,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):OS.setFromPoints(t).getCenter(s);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(Ao,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(nh)),this.expandByPoint(Ao.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ki=new ct,ih=new ct,ec=new ct,Oa=new ct,ah=new ct,nc=new ct,sh=new ct;class j_{constructor(t=new ct,n=new ct(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ki.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,n),Ki.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){ih.copy(t).add(n).multiplyScalar(.5),ec.copy(n).sub(t).normalize(),Oa.copy(this.origin).sub(ih);const c=t.distanceTo(n)*.5,f=-this.direction.dot(ec),h=Oa.dot(this.direction),p=-Oa.dot(ec),m=Oa.lengthSq(),g=Math.abs(1-f*f);let _,x,M,T;if(g>0)if(_=f*p-h,x=f*h-p,T=c*g,_>=0)if(x>=-T)if(x<=T){const b=1/g;_*=b,x*=b,M=_*(_+f*x+2*h)+x*(f*_+x+2*p)+m}else x=c,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;else x<=-T?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m):x<=T?(_=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+m):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ih).addScaledVector(ec,x),M}intersectSphere(t,n){Ki.subVectors(t.center,this.origin);const s=Ki.dot(this.direction),o=Ki.dot(Ki)-s*s,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(t.min.x-x.x)*m,o=(t.max.x-x.x)*m):(s=(t.max.x-x.x)*m,o=(t.min.x-x.x)*m),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>o||((c>s||isNaN(s))&&(s=c),(f<o||isNaN(o))&&(o=f),_>=0?(h=(t.min.z-x.z)*_,p=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,p=(t.min.z-x.z)*_),s>p||h>o)||((h>s||s!==s)&&(s=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,n,s,o,c){ah.subVectors(n,t),nc.subVectors(s,t),sh.crossVectors(ah,nc);let f=this.direction.dot(sh),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Oa.subVectors(this.origin,t);const p=h*this.direction.dot(nc.crossVectors(Oa,nc));if(p<0)return null;const m=h*this.direction.dot(ah.cross(Oa));if(m<0||p+m>f)return null;const g=-h*Oa.dot(sh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(t,n,s,o,c,f,h,p,m,g,_,x,M,T,b,y){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,f,h,p,m,g,_,x,M,T,b,y)}set(t,n,s,o,c,f,h,p,m,g,_,x,M,T,b,y){const v=this.elements;return v[0]=t,v[4]=n,v[8]=s,v[12]=o,v[1]=c,v[5]=f,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=T,v[11]=b,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,s=t.elements,o=1/lr.setFromMatrixColumn(t,0).length(),c=1/lr.setFromMatrixColumn(t,1).length(),f=1/lr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(o),m=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,M=f*_,T=h*g,b=h*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=M+T*m,n[5]=x-b*m,n[9]=-h*p,n[2]=b-x*m,n[6]=T+M*m,n[10]=f*p}else if(t.order==="YXZ"){const x=p*g,M=p*_,T=m*g,b=m*_;n[0]=x+b*h,n[4]=T*h-M,n[8]=f*m,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=M*h-T,n[6]=b+x*h,n[10]=f*p}else if(t.order==="ZXY"){const x=p*g,M=p*_,T=m*g,b=m*_;n[0]=x-b*h,n[4]=-f*_,n[8]=T+M*h,n[1]=M+T*h,n[5]=f*g,n[9]=b-x*h,n[2]=-f*m,n[6]=h,n[10]=f*p}else if(t.order==="ZYX"){const x=f*g,M=f*_,T=h*g,b=h*_;n[0]=p*g,n[4]=T*m-M,n[8]=x*m+b,n[1]=p*_,n[5]=b*m+x,n[9]=M*m-T,n[2]=-m,n[6]=h*p,n[10]=f*p}else if(t.order==="YZX"){const x=f*p,M=f*m,T=h*p,b=h*m;n[0]=p*g,n[4]=b-x*_,n[8]=T*_+M,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-m*g,n[6]=M*_+T,n[10]=x-b*_}else if(t.order==="XZY"){const x=f*p,M=f*m,T=h*p,b=h*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=x*_+b,n[5]=f*g,n[9]=M*_-T,n[2]=T*_-M,n[6]=h*g,n[10]=b*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PS,t,zS)}lookAt(t,n,s){const o=this.elements;return Qn.subVectors(t,n),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Pa.crossVectors(s,Qn),Pa.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Pa.crossVectors(s,Qn)),Pa.normalize(),ic.crossVectors(Qn,Pa),o[0]=Pa.x,o[4]=ic.x,o[8]=Qn.x,o[1]=Pa.y,o[5]=ic.y,o[9]=Qn.y,o[2]=Pa.z,o[6]=ic.z,o[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,f=s[0],h=s[4],p=s[8],m=s[12],g=s[1],_=s[5],x=s[9],M=s[13],T=s[2],b=s[6],y=s[10],v=s[14],z=s[3],L=s[7],R=s[11],O=s[15],P=o[0],I=o[4],W=o[8],D=o[12],C=o[1],G=o[5],K=o[9],lt=o[13],et=o[2],dt=o[6],F=o[10],J=o[14],Y=o[3],St=o[7],N=o[11],nt=o[15];return c[0]=f*P+h*C+p*et+m*Y,c[4]=f*I+h*G+p*dt+m*St,c[8]=f*W+h*K+p*F+m*N,c[12]=f*D+h*lt+p*J+m*nt,c[1]=g*P+_*C+x*et+M*Y,c[5]=g*I+_*G+x*dt+M*St,c[9]=g*W+_*K+x*F+M*N,c[13]=g*D+_*lt+x*J+M*nt,c[2]=T*P+b*C+y*et+v*Y,c[6]=T*I+b*G+y*dt+v*St,c[10]=T*W+b*K+y*F+v*N,c[14]=T*D+b*lt+y*J+v*nt,c[3]=z*P+L*C+R*et+O*Y,c[7]=z*I+L*G+R*dt+O*St,c[11]=z*W+L*K+R*F+O*N,c[15]=z*D+L*lt+R*J+O*nt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],_=t[6],x=t[10],M=t[14],T=t[3],b=t[7],y=t[11],v=t[15];return T*(+c*p*_-o*m*_-c*h*x+s*m*x+o*h*M-s*p*M)+b*(+n*p*M-n*m*x+c*f*x-o*f*M+o*m*g-c*p*g)+y*(+n*m*_-n*h*M-c*f*_+s*f*M+c*h*g-s*m*g)+v*(-o*h*g-n*p*_+n*h*x+o*f*_-s*f*x+s*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],M=t[11],T=t[12],b=t[13],y=t[14],v=t[15],z=_*y*m-b*x*m+b*p*M-h*y*M-_*p*v+h*x*v,L=T*x*m-g*y*m-T*p*M+f*y*M+g*p*v-f*x*v,R=g*b*m-T*_*m+T*h*M-f*b*M-g*h*v+f*_*v,O=T*_*p-g*b*p-T*h*x+f*b*x+g*h*y-f*_*y,P=n*z+s*L+o*R+c*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return t[0]=z*I,t[1]=(b*x*c-_*y*c-b*o*M+s*y*M+_*o*v-s*x*v)*I,t[2]=(h*y*c-b*p*c+b*o*m-s*y*m-h*o*v+s*p*v)*I,t[3]=(_*p*c-h*x*c-_*o*m+s*x*m+h*o*M-s*p*M)*I,t[4]=L*I,t[5]=(g*y*c-T*x*c+T*o*M-n*y*M-g*o*v+n*x*v)*I,t[6]=(T*p*c-f*y*c-T*o*m+n*y*m+f*o*v-n*p*v)*I,t[7]=(f*x*c-g*p*c+g*o*m-n*x*m-f*o*M+n*p*M)*I,t[8]=R*I,t[9]=(T*_*c-g*b*c-T*s*M+n*b*M+g*s*v-n*_*v)*I,t[10]=(f*b*c-T*h*c+T*s*m-n*b*m-f*s*v+n*h*v)*I,t[11]=(g*h*c-f*_*c-g*s*m+n*_*m+f*s*M-n*h*M)*I,t[12]=O*I,t[13]=(g*b*o-T*_*o+T*s*x-n*b*x-g*s*y+n*_*y)*I,t[14]=(T*h*o-f*b*o-T*s*p+n*b*p+f*s*y-n*h*y)*I,t[15]=(f*_*o-g*h*o+g*s*p-n*_*p-f*s*x+n*h*x)*I,this}scale(t){const n=this.elements,s=t.x,o=t.y,c=t.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+s,m*h-o*p,m*p+o*h,0,m*h+o*p,g*h+s,g*p-o*f,0,m*p-o*h,g*p+o*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,c,f){return this.set(1,s,c,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,c=n._x,f=n._y,h=n._z,p=n._w,m=c+c,g=f+f,_=h+h,x=c*m,M=c*g,T=c*_,b=f*g,y=f*_,v=h*_,z=p*m,L=p*g,R=p*_,O=s.x,P=s.y,I=s.z;return o[0]=(1-(b+v))*O,o[1]=(M+R)*O,o[2]=(T-L)*O,o[3]=0,o[4]=(M-R)*P,o[5]=(1-(x+v))*P,o[6]=(y+z)*P,o[7]=0,o[8]=(T+L)*I,o[9]=(y-z)*I,o[10]=(1-(x+b))*I,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;let c=lr.set(o[0],o[1],o[2]).length();const f=lr.set(o[4],o[5],o[6]).length(),h=lr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],_i.copy(this);const m=1/c,g=1/f,_=1/h;return _i.elements[0]*=m,_i.elements[1]*=m,_i.elements[2]*=m,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,n.setFromRotationMatrix(_i),s.x=c,s.y=f,s.z=h,this}makePerspective(t,n,s,o,c,f,h=Ni,p=!1){const m=this.elements,g=2*c/(n-t),_=2*c/(s-o),x=(n+t)/(n-t),M=(s+o)/(s-o);let T,b;if(p)T=c/(f-c),b=f*c/(f-c);else if(h===Ni)T=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(h===Cc)T=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,s,o,c,f,h=Ni,p=!1){const m=this.elements,g=2/(n-t),_=2/(s-o),x=-(n+t)/(n-t),M=-(s+o)/(s-o);let T,b;if(p)T=1/(f-c),b=f/(f-c);else if(h===Ni)T=-2/(f-c),b=-(f+c)/(f-c);else if(h===Cc)T=-1/(f-c),b=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const lr=new ct,_i=new ln,PS=new ct(0,0,0),zS=new ct(1,1,1),Pa=new ct,ic=new ct,Qn=new ct,A0=new ln,R0=new Bo;let ys=class Z_{constructor(t=0,n=0,s=0,o=Z_.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],p=o[1],m=o[5],g=o[9],_=o[2],x=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return A0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(A0,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return R0.setFromEuler(this),this.setFromQuaternion(R0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ys.DEFAULT_ORDER="XYZ";class K_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let FS=0;const w0=new ct,cr=new Bo,Qi=new ln,ac=new ct,Ro=new ct,BS=new ct,IS=new Bo,C0=new ct(1,0,0),D0=new ct(0,1,0),U0=new ct(0,0,1),L0={type:"added"},HS={type:"removed"},ur={type:"childadded",child:null},rh={type:"childremoved",child:null};class kn extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const t=new ct,n=new ys,s=new Bo,o=new ct(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new fe}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return cr.setFromAxisAngle(t,n),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,n){return cr.setFromAxisAngle(t,n),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(C0,t)}rotateY(t){return this.rotateOnAxis(D0,t)}rotateZ(t){return this.rotateOnAxis(U0,t)}translateOnAxis(t,n){return w0.copy(t).applyQuaternion(this.quaternion),this.position.add(w0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(C0,t)}translateY(t){return this.translateOnAxis(D0,t)}translateZ(t){return this.translateOnAxis(U0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?ac.copy(t):ac.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ro,ac,this.up):Qi.lookAt(ac,Ro,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),cr.setFromRotationMatrix(Qi),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(L0),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(HS),rh.child=t,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(L0),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const f=this.children[s].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,BS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,IS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(t.animations,p))}}if(n){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),M=f(t.animations),T=f(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=o,s;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}kn.DEFAULT_UP=new ct(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new ct,Ji=new ct,oh=new ct,$i=new ct,fr=new ct,hr=new ct,N0=new ct,lh=new ct,ch=new ct,uh=new ct,fh=new $e,hh=new $e,dh=new $e;class Si{constructor(t=new ct,n=new ct,s=new ct){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),vi.subVectors(t,n),o.cross(vi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,s,o,c){vi.subVectors(o,n),Ji.subVectors(s,n),oh.subVectors(t,n);const f=vi.dot(vi),h=vi.dot(Ji),p=vi.dot(oh),m=Ji.dot(Ji),g=Ji.dot(oh),_=f*m-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(m*p-h*g)*x,T=(f*g-h*p)*x;return c.set(1-M-T,T,M)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,n,s,o,c,f,h,p){return this.getBarycoord(t,n,s,o,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,$i.x),p.addScaledVector(f,$i.y),p.addScaledVector(h,$i.z),p)}static getInterpolatedAttribute(t,n,s,o,c,f){return fh.setScalar(0),hh.setScalar(0),dh.setScalar(0),fh.fromBufferAttribute(t,n),hh.fromBufferAttribute(t,s),dh.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(fh,c.x),f.addScaledVector(hh,c.y),f.addScaledVector(dh,c.z),f}static isFrontFacing(t,n,s,o){return vi.subVectors(s,n),Ji.subVectors(t,n),vi.cross(Ji).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),vi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Si.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,c){return Si.getInterpolation(t,this.a,this.b,this.c,n,s,o,c)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,c=this.c;let f,h;fr.subVectors(o,s),hr.subVectors(c,s),lh.subVectors(t,s);const p=fr.dot(lh),m=hr.dot(lh);if(p<=0&&m<=0)return n.copy(s);ch.subVectors(t,o);const g=fr.dot(ch),_=hr.dot(ch);if(g>=0&&_<=g)return n.copy(o);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(s).addScaledVector(fr,f);uh.subVectors(t,c);const M=fr.dot(uh),T=hr.dot(uh);if(T>=0&&M<=T)return n.copy(c);const b=M*m-p*T;if(b<=0&&m>=0&&T<=0)return h=m/(m-T),n.copy(s).addScaledVector(hr,h);const y=g*T-M*_;if(y<=0&&_-g>=0&&M-T>=0)return N0.subVectors(c,o),h=(_-g)/(_-g+(M-T)),n.copy(o).addScaledVector(N0,h);const v=1/(y+b+x);return f=b*v,h=x*v,n.copy(s).addScaledVector(fr,f).addScaledVector(hr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},sc={h:0,s:0,l:0};function ph(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}class we{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=s,Ae.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=Ae.workingColorSpace){if(t=bS(t,1),n=Se(n,0,1),s=Se(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=ph(f,c,t+1/3),this.g=ph(f,c,t),this.b=ph(f,c,t-1/3)}return Ae.colorSpaceToWorking(this,o),this}setStyle(t,n=li){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=li){const s=Q_[t.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=na(t.r),this.g=na(t.g),this.b=na(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Ae.workingToColorSpace(Cn.copy(this),t),Math.round(Se(Cn.r*255,0,255))*65536+Math.round(Se(Cn.g*255,0,255))*256+Math.round(Se(Cn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(Cn.copy(this),n);const s=Cn.r,o=Cn.g,c=Cn.b,f=Math.max(s,o,c),h=Math.min(s,o,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=g<=.5?_/(f+h):_/(2-f-h),f){case s:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-s)/_+2;break;case c:p=(s-o)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(Cn.copy(this),n),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=li){Ae.workingToColorSpace(Cn.copy(this),t);const n=Cn.r,s=Cn.g,o=Cn.b;return t!==li?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(za),this.setHSL(za.h+t,za.s+n,za.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(za),t.getHSL(sc);const s=Kf(za.h,sc.h,n),o=Kf(za.s,sc.s,n),c=Kf(za.l,sc.l,n);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new we;we.NAMES=Q_;let GS=0;class Ho extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=vr,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(s.blending=this.blending),this.side!==Va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Lh&&(s.blendSrc=this.blendSrc),this.blendDst!==Nh&&(s.blendDst=this.blendDst),this.blendEquation!==ms&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(n){const c=o(t.textures),f=o(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class J_ extends Ho{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ys,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new ct,rc=new le;let VS=0;class Mi{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VS++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=S0,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)rc.fromBufferAttribute(this,n),rc.applyMatrix3(t),this.setXY(n,rc.x,rc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=To(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=Hn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),s=Hn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),s=Hn(s,this.array),o=Hn(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,c){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),s=Hn(s,this.array),o=Hn(o,this.array),c=Hn(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==S0&&(t.usage=this.usage),t}}class $_ extends Mi{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class tv extends Mi{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class ia extends Mi{constructor(t,n,s){super(new Float32Array(t),n,s)}}let kS=0;const oi=new ln,mh=new kn,dr=new ct,Jn=new Io,wo=new Io,xn=new ct;class ra extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(q_(t)?tv:$_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,n,s){return oi.makeTranslation(t,n,s),this.applyMatrix4(oi),this}scale(t,n,s){return oi.makeScale(t,n,s),this.applyMatrix4(oi),this}lookAt(t){return mh.lookAt(t),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ia(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(t){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(Jn.min,wo.min),Jn.expandByPoint(xn),xn.addVectors(Jn.max,wo.max),Jn.expandByPoint(xn)):(Jn.expandByPoint(wo.min),Jn.expandByPoint(wo.max))}Jn.getCenter(s);let o=0;for(let c=0,f=t.count;c<f;c++)xn.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(xn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)xn.fromBufferAttribute(h,m),p&&(dr.fromBufferAttribute(t,m),xn.add(dr)),o=Math.max(o,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let W=0;W<s.count;W++)h[W]=new ct,p[W]=new ct;const m=new ct,g=new ct,_=new ct,x=new le,M=new le,T=new le,b=new ct,y=new ct;function v(W,D,C){m.fromBufferAttribute(s,W),g.fromBufferAttribute(s,D),_.fromBufferAttribute(s,C),x.fromBufferAttribute(c,W),M.fromBufferAttribute(c,D),T.fromBufferAttribute(c,C),g.sub(m),_.sub(m),M.sub(x),T.sub(x);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(b.copy(g).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(G),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(G),h[W].add(b),h[D].add(b),h[C].add(b),p[W].add(y),p[D].add(y),p[C].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let W=0,D=z.length;W<D;++W){const C=z[W],G=C.start,K=C.count;for(let lt=G,et=G+K;lt<et;lt+=3)v(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const L=new ct,R=new ct,O=new ct,P=new ct;function I(W){O.fromBufferAttribute(o,W),P.copy(O);const D=h[W];L.copy(D),L.sub(O.multiplyScalar(O.dot(D))).normalize(),R.crossVectors(P,D);const G=R.dot(p[W])<0?-1:1;f.setXYZW(W,L.x,L.y,L.z,G)}for(let W=0,D=z.length;W<D;++W){const C=z[W],G=C.start,K=C.count;for(let lt=G,et=G+K;lt<et;lt+=3)I(t.getX(lt+0)),I(t.getX(lt+1)),I(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const o=new ct,c=new ct,f=new ct,h=new ct,p=new ct,m=new ct,g=new ct,_=new ct;if(t)for(let x=0,M=t.count;x<M;x+=3){const T=t.getX(x+0),b=t.getX(x+1),y=t.getX(x+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,b),f.fromBufferAttribute(n,y),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,y),h.add(g),p.add(g),m.add(g),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)xn.fromBufferAttribute(t,n),xn.normalize(),t.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,_=h.normalized,x=new m.constructor(p.length*g);let M=0,T=0;for(let b=0,y=p.length;b<y;b++){h.isInterleavedBufferAttribute?M=p[b]*h.data.stride+h.offset:M=p[b]*g;for(let v=0;v<g;v++)x[T++]=m[M++]}return new Mi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ra,s=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=t(p,s);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,_=m.length;g<_;g++){const x=m[g],M=t(x,s);p.push(M)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];g.push(M.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O0=new ln,cs=new j_,oc=new Fc,P0=new ct,lc=new ct,cc=new ct,uc=new ct,gh=new ct,fc=new ct,z0=new ct,hc=new ct;let ui=class extends kn{constructor(t=new ra,n=new J_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){fc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],_=c[p];g!==0&&(gh.fromBufferAttribute(_,t),f?fc.addScaledVector(gh,g):fc.addScaledVector(gh.sub(n),g))}n.add(fc)}return n}raycast(t,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(c),cs.copy(t.ray).recast(t.near),!(oc.containsPoint(cs.origin)===!1&&(cs.intersectSphere(oc,P0)===null||cs.origin.distanceToSquared(P0)>(t.far-t.near)**2))&&(O0.copy(c).invert(),cs.copy(t.ray).applyMatrix4(O0),!(s.boundingBox!==null&&cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,cs)))}_computeIntersections(t,n,s){let o;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let T=0,b=x.length;T<b;T++){const y=x[T],v=f[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let R=z,O=L;R<O;R+=3){const P=h.getX(R),I=h.getX(R+1),W=h.getX(R+2);o=dc(this,v,t,s,m,g,_,P,I,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let y=T,v=b;y<v;y+=3){const z=h.getX(y),L=h.getX(y+1),R=h.getX(y+2);o=dc(this,f,t,s,m,g,_,z,L,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,b=x.length;T<b;T++){const y=x[T],v=f[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let R=z,O=L;R<O;R+=3){const P=R,I=R+1,W=R+2;o=dc(this,v,t,s,m,g,_,P,I,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let y=T,v=b;y<v;y+=3){const z=y,L=y+1,R=y+2;o=dc(this,f,t,s,m,g,_,z,L,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}};function XS(a,t,n,s,o,c,f,h){let p;if(t.side===Vn?p=s.intersectTriangle(f,c,o,!0,h):p=s.intersectTriangle(o,c,f,t.side===Va,h),p===null)return null;hc.copy(h),hc.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(hc);return m<n.near||m>n.far?null:{distance:m,point:hc.clone(),object:a}}function dc(a,t,n,s,o,c,f,h,p,m){a.getVertexPosition(h,lc),a.getVertexPosition(p,cc),a.getVertexPosition(m,uc);const g=XS(a,t,n,s,lc,cc,uc,z0);if(g){const _=new ct;Si.getBarycoord(z0,lc,cc,uc,_),o&&(g.uv=Si.getInterpolatedAttribute(o,h,p,m,_,new le)),c&&(g.uv1=Si.getInterpolatedAttribute(c,h,p,m,_,new le)),f&&(g.normal=Si.getInterpolatedAttribute(f,h,p,m,_,new ct),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new ct,materialIndex:0};Si.getNormal(lc,cc,uc,x.normal),g.face=x,g.barycoord=_}return g}class Go extends ra{constructor(t=1,n=1,s=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,s,n,t,f,c,0),T("z","y","x",1,-1,s,n,-t,f,c,1),T("x","z","y",1,1,t,s,n,o,f,2),T("x","z","y",1,-1,t,s,-n,o,f,3),T("x","y","z",1,-1,t,n,s,o,c,4),T("x","y","z",-1,-1,t,n,-s,o,c,5),this.setIndex(p),this.setAttribute("position",new ia(m,3)),this.setAttribute("normal",new ia(g,3)),this.setAttribute("uv",new ia(_,2));function T(b,y,v,z,L,R,O,P,I,W,D){const C=R/I,G=O/W,K=R/2,lt=O/2,et=P/2,dt=I+1,F=W+1;let J=0,Y=0;const St=new ct;for(let N=0;N<F;N++){const nt=N*G-lt;for(let xt=0;xt<dt;xt++){const yt=xt*C-K;St[b]=yt*z,St[y]=nt*L,St[v]=et,m.push(St.x,St.y,St.z),St[b]=0,St[y]=0,St[v]=P>0?1:-1,g.push(St.x,St.y,St.z),_.push(xt/I),_.push(1-N/W),J+=1}}for(let N=0;N<W;N++)for(let nt=0;nt<I;nt++){const xt=x+nt+dt*N,yt=x+nt+dt*(N+1),Ut=x+(nt+1)+dt*(N+1),Ht=x+(nt+1)+dt*N;p.push(xt,yt,Ht),p.push(yt,Ut,Ht),Y+=6}h.addGroup(M,Y,D),M+=Y,x+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Tr(a){const t={};for(const n in a){t[n]={};for(const s in a[n]){const o=a[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function Nn(a){const t={};for(let n=0;n<a.length;n++){const s=Tr(a[n]);for(const o in s)t[o]=s[o]}return t}function WS(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function ev(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const qS={clone:Tr,merge:Nn};var YS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Ho{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YS,this.fragmentShader=jS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=WS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}let Uc=class extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Fa=new ct,F0=new le,B0=new le;class xi extends Uc{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=xd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xd*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,n){return this.getViewBounds(t,F0,B0),n.subVectors(B0,F0)}setViewOffset(t,n,s,o,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Zf*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*o/p,n-=f.offsetY*s/m,o*=f.width/p,s*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const pr=-90,mr=1;class ZS extends kn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new xi(pr,mr,t,n);o.layers=this.layers,this.add(o);const c=new xi(pr,mr,t,n);c.layers=this.layers,this.add(c);const f=new xi(pr,mr,t,n);f.layers=this.layers,this.add(f);const h=new xi(pr,mr,t,n);h.layers=this.layers,this.add(h);const p=new xi(pr,mr,t,n);p.layers=this.layers,this.add(p);const m=new xi(pr,mr,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,c,f,h,p]=n;for(const m of n)this.remove(m);if(t===Ni)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Cc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(n,c),t.setRenderTarget(s,1,o),t.render(n,f),t.setRenderTarget(s,2,o),t.render(n,h),t.setRenderTarget(s,3,o),t.render(n,p),t.setRenderTarget(s,4,o),t.render(n,m),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,o),t.render(n,g),t.setRenderTarget(_,x,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class nv extends Ei{constructor(t=[],n=yr,s,o,c,f,h,p,m,g){super(t,n,s,o,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class KS extends ka{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new nv(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Go(5,5,5),c=new sa({name:"CubemapFromEquirect",uniforms:Tr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Ia});c.uniforms.tEquirect.value=n;const f=new ui(o,c),h=n.minFilter;return n.minFilter===_s&&(n.minFilter=Gn),new ZS(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,s,o);t.setRenderTarget(c)}}class pc extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QS={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const b of t.hand.values()){const y=n.getJointPose(b,s),v=this._getHandJoint(m,b);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,T=.005;m.inputState.pinching&&x>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(QS)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new pc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class I0 extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ys,this.environmentIntensity=1,this.environmentRotation=new ys,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class JS extends Ei{constructor(t=null,n=1,s=1,o,c,f,h,p,m=$n,g=$n,_,x){super(null,f,h,p,m,g,o,c,_,x),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new ct,$S=new ct,ty=new fe;let ds=class{constructor(t=new ct(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=vh.subVectors(s,n).cross($S.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(vh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||ty.getNormalMatrix(t),o=this.coplanarPoint(vh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const us=new Fc,ey=new le(.5,.5),mc=new ct;class iv{constructor(t=new ds,n=new ds,s=new ds,o=new ds,c=new ds,f=new ds){this.planes=[t,n,s,o,c,f]}set(t,n,s,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Ni,s=!1){const o=this.planes,c=t.elements,f=c[0],h=c[1],p=c[2],m=c[3],g=c[4],_=c[5],x=c[6],M=c[7],T=c[8],b=c[9],y=c[10],v=c[11],z=c[12],L=c[13],R=c[14],O=c[15];if(o[0].setComponents(m-f,M-g,v-T,O-z).normalize(),o[1].setComponents(m+f,M+g,v+T,O+z).normalize(),o[2].setComponents(m+h,M+_,v+b,O+L).normalize(),o[3].setComponents(m-h,M-_,v-b,O-L).normalize(),s)o[4].setComponents(p,x,y,R).normalize(),o[5].setComponents(m-p,M-x,v-y,O-R).normalize();else if(o[4].setComponents(m-p,M-x,v-y,O-R).normalize(),n===Ni)o[5].setComponents(m+p,M+x,v+y,O+R).normalize();else if(n===Cc)o[5].setComponents(p,x,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);const n=ey.distanceTo(t.center);return us.radius=.7071067811865476+n,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(mc.x=o.normal.x>0?t.max.x:t.min.x,mc.y=o.normal.y>0?t.max.y:t.min.y,mc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(mc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ny extends Ho{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lc=new ct,Nc=new ct,H0=new ln,Co=new j_,gc=new Fc,xh=new ct,G0=new ct;class iy extends kn{constructor(t=new ra,n=new ny){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[0];for(let o=1,c=n.count;o<c;o++)Lc.fromBufferAttribute(n,o-1),Nc.fromBufferAttribute(n,o),s[o]=s[o-1],s[o]+=Lc.distanceTo(Nc);t.setAttribute("lineDistance",new ia(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const s=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(o),gc.radius+=c,t.ray.intersectsSphere(gc)===!1)return;H0.copy(o).invert(),Co.copy(t.ray).applyMatrix4(H0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let b=M,y=T-1;b<y;b+=m){const v=g.getX(b),z=g.getX(b+1),L=_c(this,t,Co,p,v,z,b);L&&n.push(L)}if(this.isLineLoop){const b=g.getX(T-1),y=g.getX(M),v=_c(this,t,Co,p,b,y,T-1);v&&n.push(v)}}else{const M=Math.max(0,f.start),T=Math.min(x.count,f.start+f.count);for(let b=M,y=T-1;b<y;b+=m){const v=_c(this,t,Co,p,b,b+1,b);v&&n.push(v)}if(this.isLineLoop){const b=_c(this,t,Co,p,T-1,M,T-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function _c(a,t,n,s,o,c,f){const h=a.geometry.attributes.position;if(Lc.fromBufferAttribute(h,o),Nc.fromBufferAttribute(h,c),n.distanceSqToSegment(Lc,Nc,xh,G0)>s)return;xh.applyMatrix4(a.matrixWorld);const m=t.ray.origin.distanceTo(xh);if(!(m<t.near||m>t.far))return{distance:m,point:G0.clone().applyMatrix4(a.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:a}}const V0=new ct,k0=new ct;class ay extends iy{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[];for(let o=0,c=n.count;o<c;o+=2)V0.fromBufferAttribute(n,o),k0.fromBufferAttribute(n,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+V0.distanceTo(k0);t.setAttribute("lineDistance",new ia(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class av extends Ei{constructor(t,n,s=Ss,o,c,f,h=$n,p=$n,m,g=Oo,_=1){if(g!==Oo&&g!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:_};super(x,o,c,f,h,p,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ud(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class sv extends Ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xs extends ra{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const c=t/2,f=n/2,h=Math.floor(s),p=Math.floor(o),m=h+1,g=p+1,_=t/h,x=n/p,M=[],T=[],b=[],y=[];for(let v=0;v<g;v++){const z=v*x-f;for(let L=0;L<m;L++){const R=L*_-c;T.push(R,-z,0),b.push(0,0,1),y.push(L/h),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let z=0;z<h;z++){const L=z+m*v,R=z+m*(v+1),O=z+1+m*(v+1),P=z+1+m*v;M.push(L,R,P),M.push(R,O,P)}this.setIndex(M),this.setAttribute("position",new ia(T,3)),this.setAttribute("normal",new ia(b,3)),this.setAttribute("uv",new ia(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.widthSegments,t.heightSegments)}}class vc extends sa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sy extends Ho{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ry extends Ho{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class oy extends Uc{constructor(t=-1,n=1,s=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ly extends xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class cy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function X0(a,t,n,s){const o=uy(s);switch(n){case G_:return a*t;case k_:return a*t/o.components*o.byteLength;case wd:return a*t/o.components*o.byteLength;case X_:return a*t*2/o.components*o.byteLength;case Cd:return a*t*2/o.components*o.byteLength;case V_:return a*t*3/o.components*o.byteLength;case ci:return a*t*4/o.components*o.byteLength;case Dd:return a*t*4/o.components*o.byteLength;case Mc:case Ec:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Tc:case bc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case qh:case jh:return Math.max(a,16)*Math.max(t,8)/4;case Wh:case Yh:return Math.max(a,8)*Math.max(t,8)/2;case Zh:case Kh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Qh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case td:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case ed:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case nd:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case id:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case ad:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case sd:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case rd:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case od:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case ld:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case cd:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case ud:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case fd:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case hd:case dd:case pd:return Math.ceil(a/4)*Math.ceil(t/4)*16;case md:case gd:return Math.ceil(a/4)*Math.ceil(t/4)*8;case _d:case vd:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uy(a){switch(a){case aa:case F_:return{byteLength:1,components:1};case Lo:case B_:case br:return{byteLength:2,components:1};case Ad:case Rd:return{byteLength:2,components:4};case Ss:case bd:case Li:return{byteLength:4,components:1};case I_:case H_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Td);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rv(){let a=null,t=!1,n=null,s=null;function o(c,f){n(c,f),s=a.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=a.requestAnimationFrame(o),t=!0)},stop:function(){a.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function fy(a){const t=new WeakMap;function n(h,p){const m=h.array,g=h.usage,_=m.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,m,g),h.onUploadCallback();let M;if(m instanceof Float32Array)M=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=a.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=a.SHORT;else if(m instanceof Uint32Array)M=a.UNSIGNED_INT;else if(m instanceof Int32Array)M=a.INT;else if(m instanceof Int8Array)M=a.BYTE;else if(m instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,m){const g=p.array,_=p.updateRanges;if(a.bindBuffer(m,h),_.length===0)a.bufferSubData(m,0,g);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],b=_[M];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++x,_[x]=b)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const b=_[M];a.bufferSubData(m,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(a.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:f}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,my=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,My=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ty=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,by=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Py=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$y=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ME=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:hy,alphahash_pars_fragment:dy,alphamap_fragment:py,alphamap_pars_fragment:my,alphatest_fragment:gy,alphatest_pars_fragment:_y,aomap_fragment:vy,aomap_pars_fragment:xy,batching_pars_vertex:Sy,batching_vertex:yy,begin_vertex:My,beginnormal_vertex:Ey,bsdfs:Ty,iridescence_fragment:by,bumpmap_pars_fragment:Ay,clipping_planes_fragment:Ry,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:Dy,color_fragment:Uy,color_pars_fragment:Ly,color_pars_vertex:Ny,color_vertex:Oy,common:Py,cube_uv_reflection_fragment:zy,defaultnormal_vertex:Fy,displacementmap_pars_vertex:By,displacementmap_vertex:Iy,emissivemap_fragment:Hy,emissivemap_pars_fragment:Gy,colorspace_fragment:Vy,colorspace_pars_fragment:ky,envmap_fragment:Xy,envmap_common_pars_fragment:Wy,envmap_pars_fragment:qy,envmap_pars_vertex:Yy,envmap_physical_pars_fragment:aM,envmap_vertex:jy,fog_vertex:Zy,fog_pars_vertex:Ky,fog_fragment:Qy,fog_pars_fragment:Jy,gradientmap_pars_fragment:$y,lightmap_pars_fragment:tM,lights_lambert_fragment:eM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:sM,lights_toon_pars_fragment:rM,lights_phong_fragment:oM,lights_phong_pars_fragment:lM,lights_physical_fragment:cM,lights_physical_pars_fragment:uM,lights_fragment_begin:fM,lights_fragment_maps:hM,lights_fragment_end:dM,logdepthbuf_fragment:pM,logdepthbuf_pars_fragment:mM,logdepthbuf_pars_vertex:gM,logdepthbuf_vertex:_M,map_fragment:vM,map_pars_fragment:xM,map_particle_fragment:SM,map_particle_pars_fragment:yM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:EM,morphinstance_vertex:TM,morphcolor_vertex:bM,morphnormal_vertex:AM,morphtarget_pars_vertex:RM,morphtarget_vertex:wM,normal_fragment_begin:CM,normal_fragment_maps:DM,normal_pars_fragment:UM,normal_pars_vertex:LM,normal_vertex:NM,normalmap_pars_fragment:OM,clearcoat_normal_fragment_begin:PM,clearcoat_normal_fragment_maps:zM,clearcoat_pars_fragment:FM,iridescence_pars_fragment:BM,opaque_fragment:IM,packing:HM,premultiplied_alpha_fragment:GM,project_vertex:VM,dithering_fragment:kM,dithering_pars_fragment:XM,roughnessmap_fragment:WM,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:jM,shadowmap_vertex:ZM,shadowmask_pars_fragment:KM,skinbase_vertex:QM,skinning_pars_vertex:JM,skinning_vertex:$M,skinnormal_vertex:tE,specularmap_fragment:eE,specularmap_pars_fragment:nE,tonemapping_fragment:iE,tonemapping_pars_fragment:aE,transmission_fragment:sE,transmission_pars_fragment:rE,uv_pars_fragment:oE,uv_pars_vertex:lE,uv_vertex:cE,worldpos_vertex:uE,background_vert:fE,background_frag:hE,backgroundCube_vert:dE,backgroundCube_frag:pE,cube_vert:mE,cube_frag:gE,depth_vert:_E,depth_frag:vE,distanceRGBA_vert:xE,distanceRGBA_frag:SE,equirect_vert:yE,equirect_frag:ME,linedashed_vert:EE,linedashed_frag:TE,meshbasic_vert:bE,meshbasic_frag:AE,meshlambert_vert:RE,meshlambert_frag:wE,meshmatcap_vert:CE,meshmatcap_frag:DE,meshnormal_vert:UE,meshnormal_frag:LE,meshphong_vert:NE,meshphong_frag:OE,meshphysical_vert:PE,meshphysical_frag:zE,meshtoon_vert:FE,meshtoon_frag:BE,points_vert:IE,points_frag:HE,shadow_vert:GE,shadow_frag:VE,sprite_vert:kE,sprite_frag:XE},Pt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ui={basic:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new we(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Nn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Nn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new we(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Nn([Pt.points,Pt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Nn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Nn([Pt.common,Pt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Nn([Pt.sprite,Pt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Nn([Pt.common,Pt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Nn([Pt.lights,Pt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Ui.physical={uniforms:Nn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const xc={r:0,b:0,g:0},fs=new ys,WE=new ln;function qE(a,t,n,s,o,c,f){const h=new we(0);let p=c===!0?0:1,m,g,_=null,x=0,M=null;function T(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?n:t).get(R)),R}function b(L){let R=!1;const O=T(L);O===null?v(h,p):O&&O.isColor&&(v(O,1),R=!0);const P=a.xr.getEnvironmentBlendMode();P==="additive"?s.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(L,R){const O=T(R);O&&(O.isCubeTexture||O.mapping===zc)?(g===void 0&&(g=new ui(new Go(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:Tr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,I,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),fs.copy(R.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(WE.makeRotationFromEuler(fs)),g.material.toneMapped=Ae.getTransfer(O.colorSpace)!==Fe,(_!==O||x!==O.version||M!==a.toneMapping)&&(g.material.needsUpdate=!0,_=O,x=O.version,M=a.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new ui(new xs(2,2),new sa({name:"BackgroundMaterial",uniforms:Tr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Ae.getTransfer(O.colorSpace)!==Fe,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||x!==O.version||M!==a.toneMapping)&&(m.material.needsUpdate=!0,_=O,x=O.version,M=a.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function v(L,R){L.getRGB(xc,ev(a)),s.buffers.color.setClear(xc.r,xc.g,xc.b,R,f)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,R=1){h.set(L),p=R,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,v(h,p)},render:b,addToRenderList:y,dispose:z}}function YE(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},o=x(null);let c=o,f=!1;function h(C,G,K,lt,et){let dt=!1;const F=_(lt,K,G);c!==F&&(c=F,m(c.object)),dt=M(C,lt,K,et),dt&&T(C,lt,K,et),et!==null&&t.update(et,a.ELEMENT_ARRAY_BUFFER),(dt||f)&&(f=!1,R(C,G,K,lt),et!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function p(){return a.createVertexArray()}function m(C){return a.bindVertexArray(C)}function g(C){return a.deleteVertexArray(C)}function _(C,G,K){const lt=K.wireframe===!0;let et=s[C.id];et===void 0&&(et={},s[C.id]=et);let dt=et[G.id];dt===void 0&&(dt={},et[G.id]=dt);let F=dt[lt];return F===void 0&&(F=x(p()),dt[lt]=F),F}function x(C){const G=[],K=[],lt=[];for(let et=0;et<n;et++)G[et]=0,K[et]=0,lt[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:lt,object:C,attributes:{},index:null}}function M(C,G,K,lt){const et=c.attributes,dt=G.attributes;let F=0;const J=K.getAttributes();for(const Y in J)if(J[Y].location>=0){const N=et[Y];let nt=dt[Y];if(nt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor)),N===void 0||N.attribute!==nt||nt&&N.data!==nt.data)return!0;F++}return c.attributesNum!==F||c.index!==lt}function T(C,G,K,lt){const et={},dt=G.attributes;let F=0;const J=K.getAttributes();for(const Y in J)if(J[Y].location>=0){let N=dt[Y];N===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const nt={};nt.attribute=N,N&&N.data&&(nt.data=N.data),et[Y]=nt,F++}c.attributes=et,c.attributesNum=F,c.index=lt}function b(){const C=c.newAttributes;for(let G=0,K=C.length;G<K;G++)C[G]=0}function y(C){v(C,0)}function v(C,G){const K=c.newAttributes,lt=c.enabledAttributes,et=c.attributeDivisors;K[C]=1,lt[C]===0&&(a.enableVertexAttribArray(C),lt[C]=1),et[C]!==G&&(a.vertexAttribDivisor(C,G),et[C]=G)}function z(){const C=c.newAttributes,G=c.enabledAttributes;for(let K=0,lt=G.length;K<lt;K++)G[K]!==C[K]&&(a.disableVertexAttribArray(K),G[K]=0)}function L(C,G,K,lt,et,dt,F){F===!0?a.vertexAttribIPointer(C,G,K,et,dt):a.vertexAttribPointer(C,G,K,lt,et,dt)}function R(C,G,K,lt){b();const et=lt.attributes,dt=K.getAttributes(),F=G.defaultAttributeValues;for(const J in dt){const Y=dt[J];if(Y.location>=0){let St=et[J];if(St===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const N=St.normalized,nt=St.itemSize,xt=t.get(St);if(xt===void 0)continue;const yt=xt.buffer,Ut=xt.type,Ht=xt.bytesPerElement,at=Ut===a.INT||Ut===a.UNSIGNED_INT||St.gpuType===bd;if(St.isInterleavedBufferAttribute){const gt=St.data,Mt=gt.stride,Zt=St.offset;if(gt.isInstancedInterleavedBuffer){for(let qt=0;qt<Y.locationSize;qt++)v(Y.location+qt,gt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let qt=0;qt<Y.locationSize;qt++)y(Y.location+qt);a.bindBuffer(a.ARRAY_BUFFER,yt);for(let qt=0;qt<Y.locationSize;qt++)L(Y.location+qt,nt/Y.locationSize,Ut,N,Mt*Ht,(Zt+nt/Y.locationSize*qt)*Ht,at)}else{if(St.isInstancedBufferAttribute){for(let gt=0;gt<Y.locationSize;gt++)v(Y.location+gt,St.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let gt=0;gt<Y.locationSize;gt++)y(Y.location+gt);a.bindBuffer(a.ARRAY_BUFFER,yt);for(let gt=0;gt<Y.locationSize;gt++)L(Y.location+gt,nt/Y.locationSize,Ut,N,nt*Ht,nt/Y.locationSize*gt*Ht,at)}}else if(F!==void 0){const N=F[J];if(N!==void 0)switch(N.length){case 2:a.vertexAttrib2fv(Y.location,N);break;case 3:a.vertexAttrib3fv(Y.location,N);break;case 4:a.vertexAttrib4fv(Y.location,N);break;default:a.vertexAttrib1fv(Y.location,N)}}}}z()}function O(){W();for(const C in s){const G=s[C];for(const K in G){const lt=G[K];for(const et in lt)g(lt[et].object),delete lt[et];delete G[K]}delete s[C]}}function P(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const K in G){const lt=G[K];for(const et in lt)g(lt[et].object),delete lt[et];delete G[K]}delete s[C.id]}function I(C){for(const G in s){const K=s[G];if(K[C.id]===void 0)continue;const lt=K[C.id];for(const et in lt)g(lt[et].object),delete lt[et];delete K[C.id]}}function W(){D(),f=!0,c!==o&&(c=o,m(c.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:W,resetDefaultState:D,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:y,disableUnusedAttributes:z}}function jE(a,t,n){let s;function o(m){s=m}function c(m,g){a.drawArrays(s,m,g),n.update(g,s,1)}function f(m,g,_){_!==0&&(a.drawArraysInstanced(s,m,g,_),n.update(g,s,_))}function h(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T];n.update(M,s,1)}function p(m,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)f(m[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,_);let T=0;for(let b=0;b<_;b++)T+=g[b]*x[b];n.update(T,s,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function ZE(a,t,n,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");o=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(I){return!(I!==ci&&s.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const W=I===br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==aa&&s.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Li&&!W)}function p(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),z=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=T>0,P=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:O,maxSamples:P}}function KE(a){const t=this;let n=null,s=0,o=!1,c=!1;const f=new ds,h=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||o;return o=x,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,v=a.get(_);if(!o||T===null||T.length===0||c&&!y)c?g(null):m();else{const z=c?0:s,L=z*4;let R=v.clippingState||null;p.value=R,R=g(T,x,L,M);for(let O=0;O!==L;++O)R[O]=n[O];v.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,M,T){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=p.value,T!==!0||y===null){const v=M+b*4,z=x.matrixWorldInverse;h.getNormalMatrix(z),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,R=M;L!==b;++L,R+=4)f.copy(_[L]).applyMatrix4(z,h),f.normal.toArray(y,R),y[R+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function QE(a){let t=new WeakMap;function n(f,h){return h===Gh?f.mapping=yr:h===Vh&&(f.mapping=Mr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Gh||h===Vh)if(t.has(f)){const p=t.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new KS(p.height);return m.fromEquirectangularTexture(a,f),t.set(f,m),f.addEventListener("dispose",o),n(m.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const _r=4,W0=[.125,.215,.35,.446,.526,.582],gs=20,Sh=new oy,q0=new we;let yh=null,Mh=0,Eh=0,Th=!1;const ps=(1+Math.sqrt(5))/2,gr=1/ps,Y0=[new ct(-ps,gr,0),new ct(ps,gr,0),new ct(-gr,0,ps),new ct(gr,0,ps),new ct(0,ps,-gr),new ct(0,ps,gr),new ct(-1,1,-1),new ct(1,1,-1),new ct(-1,1,1),new ct(1,1,1)],JE=new ct;class j0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,s=.1,o=100,c={}){const{size:f=256,position:h=JE}=c;yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yh,Mh,Eh),this._renderer.xr.enabled=Th,t.scissorTest=!1,Sc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===yr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:br,format:ci,colorSpace:Er,depthBuffer:!1},o=Z0(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z0(t,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$E(c)),this._blurMaterial=tT(c,t,n)}return o}_compileMaterial(t){const n=new ui(this._lodPlanes[0],t);this._renderer.compile(n,Sh)}_sceneToCubeUV(t,n,s,o,c){const p=new xi(90,1,n,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(q0),_.toneMapping=Ha,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null));const b=new J_({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),y=new ui(new Go,b);let v=!1;const z=t.background;z?z.isColor&&(b.color.copy(z),t.background=null,v=!0):(b.color.copy(q0),v=!0);for(let L=0;L<6;L++){const R=L%3;R===0?(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[L],c.y,c.z)):R===1?(p.up.set(0,0,m[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[L],c.z)):(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[L]));const O=this._cubeSize;Sc(o,R*O,L>2?O:0,O,O),_.setRenderTarget(o),v&&_.render(y,p),_.render(t,p)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=z}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===yr||t.mapping===Mr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K0());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new ui(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Sc(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(f,Sh)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Y0[(o-c-1)%Y0.length];this._blur(t,c-1,c,f,h)}n.autoClear=s}_blur(t,n,s,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,s,o,"latitudinal",c),this._halfBlur(f,t,s,s,o,"longitudinal",c)}_halfBlur(t,n,s,o,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ui(this._lodPlanes[o],m),x=m.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*gs-1),b=c/T,y=isFinite(c)?1+Math.floor(g*b):gs;y>gs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gs}`);const v=[];let z=0;for(let I=0;I<gs;++I){const W=I/b,D=Math.exp(-W*W/2);v.push(D),I===0?z+=D:I<y&&(z+=2*D)}for(let I=0;I<v.length;I++)v[I]=v[I]/z;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-s;const R=this._sizeLods[o],O=3*R*(o>L-_r?o-L+_r:0),P=4*(this._cubeSize-R);Sc(n,O,P,3*R,2*R),p.setRenderTarget(n),p.render(_,Sh)}}function $E(a){const t=[],n=[],s=[];let o=a;const c=a-_r+1+W0.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);n.push(h);let p=1/h;f>a-_r?p=W0[f-a+_r-1]:f===0&&(p=0),s.push(p);const m=1/(h-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,T=6,b=3,y=2,v=1,z=new Float32Array(b*T*M),L=new Float32Array(y*T*M),R=new Float32Array(v*T*M);for(let P=0;P<M;P++){const I=P%3*2/3-1,W=P>2?0:-1,D=[I,W,0,I+2/3,W,0,I+2/3,W+1,0,I,W,0,I+2/3,W+1,0,I,W+1,0];z.set(D,b*T*P),L.set(x,y*T*P);const C=[P,P,P,P,P,P];R.set(C,v*T*P)}const O=new ra;O.setAttribute("position",new Mi(z,b)),O.setAttribute("uv",new Mi(L,y)),O.setAttribute("faceIndex",new Mi(R,v)),t.push(O),o>_r&&o--}return{lodPlanes:t,sizeLods:n,sigmas:s}}function Z0(a,t,n){const s=new ka(a,t,n);return s.texture.mapping=zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Sc(a,t,n,s,o){a.viewport.set(t,n,s,o),a.scissor.set(t,n,s,o)}function tT(a,t,n){const s=new Float32Array(gs),o=new ct(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function K0(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Q0(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Ld(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eT(a){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===Gh||p===Vh,g=p===yr||p===Mr;if(m||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new j0(a)),_=m?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return m&&M&&M.height>0||g&&M&&o(M)?(n===null&&(n=new j0(a)),_=m?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function o(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function nT(a){const t={};function n(s){if(t[s]!==void 0)return t[s];let o;switch(s){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(s)}return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&zo("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function iT(a,t,n,s){const o={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete o[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(_,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const M in x)t.update(x[M],a.ARRAY_BUFFER)}function m(_){const x=[],M=_.index,T=_.attributes.position;let b=0;if(M!==null){const z=M.array;b=M.version;for(let L=0,R=z.length;L<R;L+=3){const O=z[L+0],P=z[L+1],I=z[L+2];x.push(O,P,P,I,I,O)}}else if(T!==void 0){const z=T.array;b=T.version;for(let L=0,R=z.length/3-1;L<R;L+=3){const O=L+0,P=L+1,I=L+2;x.push(O,P,P,I,I,O)}}else return;const y=new(q_(x)?tv:$_)(x,1);y.version=b;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function aT(a,t,n){let s;function o(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function p(x,M){a.drawElements(s,M,c,x*f),n.update(M,s,1)}function m(x,M,T){T!==0&&(a.drawElementsInstanced(s,M,c,x*f,T),n.update(M,s,T))}function g(x,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,T);let y=0;for(let v=0;v<T;v++)y+=M[v];n.update(y,s,1)}function _(x,M,T,b){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)m(x[v]/f,M[v],b[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,b,0,T);let v=0;for(let z=0;z<T;z++)v+=M[z]*b[z];n.update(v,s,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function sT(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function rT(a,t,n){const s=new WeakMap,o=new $e;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let C=function(){W.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const T=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let R=0;T===!0&&(R=1),b===!0&&(R=2),y===!0&&(R=3);let O=h.attributes.position.count*R,P=1;O>t.maxTextureSize&&(P=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const I=new Float32Array(O*P*4*_),W=new Y_(I,O,P,_);W.type=Li,W.needsUpdate=!0;const D=R*4;for(let G=0;G<_;G++){const K=v[G],lt=z[G],et=L[G],dt=O*P*4*G;for(let F=0;F<K.count;F++){const J=F*D;T===!0&&(o.fromBufferAttribute(K,F),I[dt+J+0]=o.x,I[dt+J+1]=o.y,I[dt+J+2]=o.z,I[dt+J+3]=0),b===!0&&(o.fromBufferAttribute(lt,F),I[dt+J+4]=o.x,I[dt+J+5]=o.y,I[dt+J+6]=o.z,I[dt+J+7]=0),y===!0&&(o.fromBufferAttribute(et,F),I[dt+J+8]=o.x,I[dt+J+9]=o.y,I[dt+J+10]=o.z,I[dt+J+11]=et.itemSize===4?o.w:1)}}x={count:_,texture:W,size:new le(O,P)},s.set(h,x),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const b=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(a,"morphTargetBaseInfluence",b),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function oT(a,t,n,s){let o=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,_=t.get(p,g);if(o.get(_)!==m&&(t.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return _}function f(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}const ov=new Ei,J0=new av(1,1),lv=new Y_,cv=new NS,uv=new nv,$0=[],t_=[],e_=new Float32Array(16),n_=new Float32Array(9),i_=new Float32Array(4);function Rr(a,t,n){const s=a[0];if(s<=0||s>0)return a;const o=t*n;let c=$0[o];if(c===void 0&&(c=new Float32Array(o),$0[o]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,a[f].toArray(c,h)}return c}function dn(a,t){if(a.length!==t.length)return!1;for(let n=0,s=a.length;n<s;n++)if(a[n]!==t[n])return!1;return!0}function pn(a,t){for(let n=0,s=t.length;n<s;n++)a[n]=t[n]}function Bc(a,t){let n=t_[t];n===void 0&&(n=new Int32Array(t),t_[t]=n);for(let s=0;s!==t;++s)n[s]=a.allocateTextureUnit();return n}function lT(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function cT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;a.uniform2fv(this.addr,t),pn(n,t)}}function uT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(dn(n,t))return;a.uniform3fv(this.addr,t),pn(n,t)}}function fT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;a.uniform4fv(this.addr,t),pn(n,t)}}function hT(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(dn(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,s))return;i_.set(s),a.uniformMatrix2fv(this.addr,!1,i_),pn(n,s)}}function dT(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(dn(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,s))return;n_.set(s),a.uniformMatrix3fv(this.addr,!1,n_),pn(n,s)}}function pT(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(dn(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,s))return;e_.set(s),a.uniformMatrix4fv(this.addr,!1,e_),pn(n,s)}}function mT(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function gT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;a.uniform2iv(this.addr,t),pn(n,t)}}function _T(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;a.uniform3iv(this.addr,t),pn(n,t)}}function vT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;a.uniform4iv(this.addr,t),pn(n,t)}}function xT(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function ST(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;a.uniform2uiv(this.addr,t),pn(n,t)}}function yT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;a.uniform3uiv(this.addr,t),pn(n,t)}}function MT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;a.uniform4uiv(this.addr,t),pn(n,t)}}function ET(a,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(J0.compareFunction=W_,c=J0):c=ov,n.setTexture2D(t||c,o)}function TT(a,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||cv,o)}function bT(a,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||uv,o)}function AT(a,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||lv,o)}function RT(a){switch(a){case 5126:return lT;case 35664:return cT;case 35665:return uT;case 35666:return fT;case 35674:return hT;case 35675:return dT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return _T;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return ST;case 36295:return yT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return AT}}function wT(a,t){a.uniform1fv(this.addr,t)}function CT(a,t){const n=Rr(t,this.size,2);a.uniform2fv(this.addr,n)}function DT(a,t){const n=Rr(t,this.size,3);a.uniform3fv(this.addr,n)}function UT(a,t){const n=Rr(t,this.size,4);a.uniform4fv(this.addr,n)}function LT(a,t){const n=Rr(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function NT(a,t){const n=Rr(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function OT(a,t){const n=Rr(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function PT(a,t){a.uniform1iv(this.addr,t)}function zT(a,t){a.uniform2iv(this.addr,t)}function FT(a,t){a.uniform3iv(this.addr,t)}function BT(a,t){a.uniform4iv(this.addr,t)}function IT(a,t){a.uniform1uiv(this.addr,t)}function HT(a,t){a.uniform2uiv(this.addr,t)}function GT(a,t){a.uniform3uiv(this.addr,t)}function VT(a,t){a.uniform4uiv(this.addr,t)}function kT(a,t,n){const s=this.cache,o=t.length,c=Bc(n,o);dn(s,c)||(a.uniform1iv(this.addr,c),pn(s,c));for(let f=0;f!==o;++f)n.setTexture2D(t[f]||ov,c[f])}function XT(a,t,n){const s=this.cache,o=t.length,c=Bc(n,o);dn(s,c)||(a.uniform1iv(this.addr,c),pn(s,c));for(let f=0;f!==o;++f)n.setTexture3D(t[f]||cv,c[f])}function WT(a,t,n){const s=this.cache,o=t.length,c=Bc(n,o);dn(s,c)||(a.uniform1iv(this.addr,c),pn(s,c));for(let f=0;f!==o;++f)n.setTextureCube(t[f]||uv,c[f])}function qT(a,t,n){const s=this.cache,o=t.length,c=Bc(n,o);dn(s,c)||(a.uniform1iv(this.addr,c),pn(s,c));for(let f=0;f!==o;++f)n.setTexture2DArray(t[f]||lv,c[f])}function YT(a){switch(a){case 5126:return wT;case 35664:return CT;case 35665:return DT;case 35666:return UT;case 35674:return LT;case 35675:return NT;case 35676:return OT;case 5124:case 35670:return PT;case 35667:case 35671:return zT;case 35668:case 35672:return FT;case 35669:case 35673:return BT;case 5125:return IT;case 36294:return HT;case 36295:return GT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return qT}}class jT{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=RT(n.type)}}class ZT{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YT(n.type)}}class KT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,n[h.id],s)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function a_(a,t){a.seq.push(t),a.map[t.id]=t}function QT(a,t,n){const s=a.name,o=s.length;for(bh.lastIndex=0;;){const c=bh.exec(s),f=bh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===o){a_(n,m===void 0?new jT(h,a,t):new ZT(h,a,t));break}else{let _=n.map[h];_===void 0&&(_=new KT(h),a_(n,_)),n=_}}}class Rc{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const c=t.getActiveUniform(n,o),f=t.getUniformLocation(n,c.name);QT(c,f,this)}}setValue(t,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let c=0,f=n.length;c!==f;++c){const h=n[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in n&&s.push(f)}return s}}function s_(a,t,n){const s=a.createShader(t);return a.shaderSource(s,n),a.compileShader(s),s}const JT=37297;let $T=0;function tb(a,t){const n=a.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=o;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return s.join(`
`)}const r_=new fe;function eb(a){Ae._getMatrix(r_,Ae.workingColorSpace,a);const t=`mat3( ${r_.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(a)){case wc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function o_(a,t,n){const s=a.getShaderParameter(t,a.COMPILE_STATUS),c=(a.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+tb(a.getShaderSource(t),h)}else return c}function nb(a,t){const n=eb(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ib(a,t){let n;switch(t){case rS:n="Linear";break;case oS:n="Reinhard";break;case lS:n="Cineon";break;case cS:n="ACESFilmic";break;case fS:n="AgX";break;case hS:n="Neutral";break;case uS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yc=new ct;function ab(){Ae.getLuminanceCoefficients(yc);const a=yc.x.toFixed(4),t=yc.y.toFixed(4),n=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function rb(a){const t=[];for(const n in a){const s=a[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function ob(a,t){const n={},s=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=a.getActiveAttrib(t,o),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:a.getAttribLocation(t,f),locationSize:h}}return n}function Do(a){return a!==""}function l_(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function c_(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(a){return a.replace(lb,ub)}const cb=new Map;function ub(a,t){let n=pe[t];if(n===void 0){const s=cb.get(t);if(s!==void 0)n=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Sd(n)}const fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u_(a){return a.replace(fb,hb)}function hb(a,t,n,s){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function f_(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function db(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===O_?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===I1?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function pb(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case yr:case Mr:t="ENVMAP_TYPE_CUBE";break;case zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mb(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function gb(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case P_:t="ENVMAP_BLENDING_MULTIPLY";break;case aS:t="ENVMAP_BLENDING_MIX";break;case sS:t="ENVMAP_BLENDING_ADD";break}return t}function _b(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function vb(a,t,n,s){const o=a.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const p=db(n),m=pb(n),g=mb(n),_=gb(n),x=_b(n),M=sb(n),T=rb(c),b=o.createProgram();let y,v,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Do).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Do).join(`
`),v.length>0&&(v+=`
`)):(y=[f_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),v=[f_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ha?"#define TONE_MAPPING":"",n.toneMapping!==Ha?pe.tonemapping_pars_fragment:"",n.toneMapping!==Ha?ib("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,nb("linearToOutputTexel",n.outputColorSpace),ab(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Do).join(`
`)),f=Sd(f),f=l_(f,n),f=c_(f,n),h=Sd(h),h=l_(h,n),h=c_(h,n),f=u_(f),h=u_(h),n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=z+y+f,R=z+v+h,O=s_(o,o.VERTEX_SHADER,L),P=s_(o,o.FRAGMENT_SHADER,R);o.attachShader(b,O),o.attachShader(b,P),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function I(G){if(a.debug.checkShaderErrors){const K=o.getProgramInfoLog(b)||"",lt=o.getShaderInfoLog(O)||"",et=o.getShaderInfoLog(P)||"",dt=K.trim(),F=lt.trim(),J=et.trim();let Y=!0,St=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,b,O,P);else{const N=o_(o,O,"vertex"),nt=o_(o,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+dt+`
`+N+`
`+nt)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(F===""||J==="")&&(St=!1);St&&(G.diagnostics={runnable:Y,programLog:dt,vertexShader:{log:F,prefix:y},fragmentShader:{log:J,prefix:v}})}o.deleteShader(O),o.deleteShader(P),W=new Rc(o,b),D=ob(o,b)}let W;this.getUniforms=function(){return W===void 0&&I(this),W};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(b,JT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$T++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=O,this.fragmentShader=P,this}let xb=0;class Sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new yb(t),n.set(t,s)),s}}class yb{constructor(t){this.id=xb++,this.code=t,this.usedTimes=0}}function Mb(a,t,n,s,o,c,f){const h=new K_,p=new Sb,m=new Set,g=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return m.add(D),D===0?"uv":`uv${D}`}function y(D,C,G,K,lt){const et=K.fog,dt=lt.geometry,F=D.isMeshStandardMaterial?K.environment:null,J=(D.isMeshStandardMaterial?n:t).get(D.envMap||F),Y=J&&J.mapping===zc?J.image.height:null,St=T[D.type];D.precision!==null&&(M=o.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const N=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,nt=N!==void 0?N.length:0;let xt=0;dt.morphAttributes.position!==void 0&&(xt=1),dt.morphAttributes.normal!==void 0&&(xt=2),dt.morphAttributes.color!==void 0&&(xt=3);let yt,Ut,Ht,at;if(St){const Ee=Ui[St];yt=Ee.vertexShader,Ut=Ee.fragmentShader}else yt=D.vertexShader,Ut=D.fragmentShader,p.update(D),Ht=p.getVertexShaderID(D),at=p.getFragmentShaderID(D);const gt=a.getRenderTarget(),Mt=a.state.buffers.depth.getReversed(),Zt=lt.isInstancedMesh===!0,qt=lt.isBatchedMesh===!0,ce=!!D.map,je=!!D.matcap,H=!!J,Ce=!!D.aoMap,se=!!D.lightMap,$t=!!D.bumpMap,zt=!!D.normalMap,ye=!!D.displacementMap,Gt=!!D.emissiveMap,re=!!D.metalnessMap,He=!!D.roughnessMap,Ge=D.anisotropy>0,U=D.clearcoat>0,S=D.dispersion>0,V=D.iridescence>0,$=D.sheen>0,ft=D.transmission>0,st=Ge&&!!D.anisotropyMap,wt=U&&!!D.clearcoatMap,Rt=U&&!!D.clearcoatNormalMap,Bt=U&&!!D.clearcoatRoughnessMap,kt=V&&!!D.iridescenceMap,Et=V&&!!D.iridescenceThicknessMap,Nt=$&&!!D.sheenColorMap,Kt=$&&!!D.sheenRoughnessMap,Wt=!!D.specularMap,Dt=!!D.specularColorMap,oe=!!D.specularIntensityMap,X=ft&&!!D.transmissionMap,At=ft&&!!D.thicknessMap,Ct=!!D.gradientMap,Ft=!!D.alphaMap,Tt=D.alphaTest>0,vt=!!D.alphaHash,Xt=!!D.extensions;let ae=Ha;D.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ae=a.toneMapping);const De={shaderID:St,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:Ut,defines:D.defines,customVertexShaderID:Ht,customFragmentShaderID:at,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:qt,batchingColor:qt&&lt._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&lt.instanceColor!==null,instancingMorph:Zt&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:gt===null?a.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Er,alphaToCoverage:!!D.alphaToCoverage,map:ce,matcap:je,envMap:H,envMapMode:H&&J.mapping,envMapCubeUVHeight:Y,aoMap:Ce,lightMap:se,bumpMap:$t,normalMap:zt,displacementMap:x&&ye,emissiveMap:Gt,normalMapObjectSpace:zt&&D.normalMapType===_S,normalMapTangentSpace:zt&&D.normalMapType===gS,metalnessMap:re,roughnessMap:He,anisotropy:Ge,anisotropyMap:st,clearcoat:U,clearcoatMap:wt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Bt,dispersion:S,iridescence:V,iridescenceMap:kt,iridescenceThicknessMap:Et,sheen:$,sheenColorMap:Nt,sheenRoughnessMap:Kt,specularMap:Wt,specularColorMap:Dt,specularIntensityMap:oe,transmission:ft,transmissionMap:X,thicknessMap:At,gradientMap:Ct,opaque:D.transparent===!1&&D.blending===vr&&D.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Tt,alphaHash:vt,combine:D.combine,mapUv:ce&&b(D.map.channel),aoMapUv:Ce&&b(D.aoMap.channel),lightMapUv:se&&b(D.lightMap.channel),bumpMapUv:$t&&b(D.bumpMap.channel),normalMapUv:zt&&b(D.normalMap.channel),displacementMapUv:ye&&b(D.displacementMap.channel),emissiveMapUv:Gt&&b(D.emissiveMap.channel),metalnessMapUv:re&&b(D.metalnessMap.channel),roughnessMapUv:He&&b(D.roughnessMap.channel),anisotropyMapUv:st&&b(D.anisotropyMap.channel),clearcoatMapUv:wt&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&b(D.sheenRoughnessMap.channel),specularMapUv:Wt&&b(D.specularMap.channel),specularColorMapUv:Dt&&b(D.specularColorMap.channel),specularIntensityMapUv:oe&&b(D.specularIntensityMap.channel),transmissionMapUv:X&&b(D.transmissionMap.channel),thicknessMapUv:At&&b(D.thicknessMap.channel),alphaMapUv:Ft&&b(D.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(zt||Ge),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!dt.attributes.uv&&(ce||Ft),fog:!!et,useFog:D.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Mt,skinning:lt.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:xt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:a.shadowMap.enabled&&G.length>0,shadowMapType:a.shadowMap.type,toneMapping:ae,decodeVideoTexture:ce&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:Gt&&D.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ea,flipSided:D.side===Vn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Xt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&D.extensions.multiDraw===!0||qt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return De.vertexUv1s=m.has(1),De.vertexUv2s=m.has(2),De.vertexUv3s=m.has(3),m.clear(),De}function v(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(z(C,D),L(C,D),C.push(a.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function z(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function R(D){const C=T[D.type];let G;if(C){const K=Ui[C];G=qS.clone(K.uniforms)}else G=D.uniforms;return G}function O(D,C){let G;for(let K=0,lt=g.length;K<lt;K++){const et=g[K];if(et.cacheKey===C){G=et,++G.usedTimes;break}}return G===void 0&&(G=new vb(a,C,D,c),g.push(G)),G}function P(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function I(D){p.remove(D)}function W(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:O,releaseProgram:P,releaseShaderCache:I,programs:g,dispose:W}}function Eb(){let a=new WeakMap;function t(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function s(f){a.delete(f)}function o(f,h,p){a.get(f)[h]=p}function c(){a=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:c}}function Tb(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function h_(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function d_(){const a=[];let t=0;const n=[],s=[],o=[];function c(){t=0,n.length=0,s.length=0,o.length=0}function f(_,x,M,T,b,y){let v=a[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:T,renderOrder:_.renderOrder,z:b,group:y},a[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=b,v.group=y),t++,v}function h(_,x,M,T,b,y){const v=f(_,x,M,T,b,y);M.transmission>0?s.push(v):M.transparent===!0?o.push(v):n.push(v)}function p(_,x,M,T,b,y){const v=f(_,x,M,T,b,y);M.transmission>0?s.unshift(v):M.transparent===!0?o.unshift(v):n.unshift(v)}function m(_,x){n.length>1&&n.sort(_||Tb),s.length>1&&s.sort(x||h_),o.length>1&&o.sort(x||h_)}function g(){for(let _=t,x=a.length;_<x;_++){const M=a[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:h,unshift:p,finish:g,sort:m}}function bb(){let a=new WeakMap;function t(s,o){const c=a.get(s);let f;return c===void 0?(f=new d_,a.set(s,[f])):o>=c.length?(f=new d_,c.push(f)):f=c[o],f}function n(){a=new WeakMap}return{get:t,dispose:n}}function Ab(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ct,color:new we};break;case"SpotLight":n={position:new ct,direction:new ct,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ct,color:new we,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ct,skyColor:new we,groundColor:new we};break;case"RectAreaLight":n={color:new we,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return a[t.id]=n,n}}}function Rb(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let wb=0;function Cb(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function Db(a){const t=new Ab,n=Rb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ct);const o=new ct,c=new ln,f=new ln;function h(m){let g=0,_=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,T=0,b=0,y=0,v=0,z=0,L=0,R=0,O=0,P=0,I=0;m.sort(Cb);for(let D=0,C=m.length;D<C;D++){const G=m[D],K=G.color,lt=G.intensity,et=G.distance,dt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=K.r*lt,_+=K.g*lt,x+=K.b*lt;else if(G.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(G.sh.coefficients[F],lt);I++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const J=G.shadow,Y=n.get(G);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=dt,s.directionalShadowMatrix[M]=G.shadow.matrix,z++}s.directional[M]=F,M++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(K).multiplyScalar(lt),F.distance=et,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,s.spot[b]=F;const J=G.shadow;if(G.map&&(s.spotLightMap[O]=G.map,O++,J.updateMatrices(G),G.castShadow&&P++),s.spotLightMatrix[b]=J.matrix,G.castShadow){const Y=n.get(G);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,s.spotShadow[b]=Y,s.spotShadowMap[b]=dt,R++}b++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(K).multiplyScalar(lt),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=F,y++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const J=G.shadow,Y=n.get(G);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,Y.shadowCameraNear=J.camera.near,Y.shadowCameraFar=J.camera.far,s.pointShadow[T]=Y,s.pointShadowMap[T]=dt,s.pointShadowMatrix[T]=G.shadow.matrix,L++}s.point[T]=F,T++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(lt),F.groundColor.copy(G.groundColor).multiplyScalar(lt),s.hemi[v]=F,v++}}y>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const W=s.hash;(W.directionalLength!==M||W.pointLength!==T||W.spotLength!==b||W.rectAreaLength!==y||W.hemiLength!==v||W.numDirectionalShadows!==z||W.numPointShadows!==L||W.numSpotShadows!==R||W.numSpotMaps!==O||W.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=y,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=R+O-P,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=I,W.directionalLength=M,W.pointLength=T,W.spotLength=b,W.rectAreaLength=y,W.hemiLength=v,W.numDirectionalShadows=z,W.numPointShadows=L,W.numSpotShadows=R,W.numSpotMaps=O,W.numLightProbes=I,s.version=wb++)}function p(m,g){let _=0,x=0,M=0,T=0,b=0;const y=g.matrixWorldInverse;for(let v=0,z=m.length;v<z;v++){const L=m[v];if(L.isDirectionalLight){const R=s.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(L.isSpotLight){const R=s.spot[M];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const R=s.rectArea[T];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),f.identity(),c.copy(L.matrixWorld),c.premultiply(y),f.extractRotation(c),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const R=s.point[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const R=s.hemi[b];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),b++}}}return{setup:h,setupView:p,state:s}}function p_(a){const t=new Db(a),n=[],s=[];function o(g){m.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function f(g){s.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function Ub(a){let t=new WeakMap;function n(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new p_(a),t.set(o,[h])):c>=f.length?(h=new p_(a),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ob(a,t,n){let s=new iv;const o=new le,c=new le,f=new $e,h=new sy({depthPacking:mS}),p=new ry,m={},g=n.maxTextureSize,_={[Va]:Vn,[Vn]:Va,[ea]:ea},x=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Lb,fragmentShader:Nb}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new ra;T.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ui(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O_;let v=this.type;this.render=function(P,I,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const D=a.getRenderTarget(),C=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),K=a.state;K.setBlending(Ia),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const lt=v!==ta&&this.type===ta,et=v===ta&&this.type!==ta;for(let dt=0,F=P.length;dt<F;dt++){const J=P[dt],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const St=Y.getFrameExtents();if(o.multiply(St),c.copy(Y.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/St.x),o.x=c.x*St.x,Y.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/St.y),o.y=c.y*St.y,Y.mapSize.y=c.y)),Y.map===null||lt===!0||et===!0){const nt=this.type!==ta?{minFilter:$n,magFilter:$n}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ka(o.x,o.y,nt),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const N=Y.getViewportCount();for(let nt=0;nt<N;nt++){const xt=Y.getViewport(nt);f.set(c.x*xt.x,c.y*xt.y,c.x*xt.z,c.y*xt.w),K.viewport(f),Y.updateMatrices(J,nt),s=Y.getFrustum(),R(I,W,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===ta&&z(Y,W),Y.needsUpdate=!1}v=this.type,y.needsUpdate=!1,a.setRenderTarget(D,C,G)};function z(P,I){const W=t.update(b);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ka(o.x,o.y)),x.uniforms.shadow_pass.value=P.map.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,a.setRenderTarget(P.mapPass),a.clear(),a.renderBufferDirect(I,null,W,x,b,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,a.setRenderTarget(P.map),a.clear(),a.renderBufferDirect(I,null,W,M,b,null)}function L(P,I,W,D){let C=null;const G=W.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)C=G;else if(C=W.isPointLight===!0?p:h,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const K=C.uuid,lt=I.uuid;let et=m[K];et===void 0&&(et={},m[K]=et);let dt=et[lt];dt===void 0&&(dt=C.clone(),et[lt]=dt,I.addEventListener("dispose",O)),C=dt}if(C.visible=I.visible,C.wireframe=I.wireframe,D===ta?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:_[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=a.properties.get(C);K.light=W}return C}function R(P,I,W,D,C){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===ta)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld);const lt=t.update(P),et=P.material;if(Array.isArray(et)){const dt=lt.groups;for(let F=0,J=dt.length;F<J;F++){const Y=dt[F],St=et[Y.materialIndex];if(St&&St.visible){const N=L(P,St,D,C);P.onBeforeShadow(a,P,I,W,lt,N,Y),a.renderBufferDirect(W,null,lt,N,P,Y),P.onAfterShadow(a,P,I,W,lt,N,Y)}}}else if(et.visible){const dt=L(P,et,D,C);P.onBeforeShadow(a,P,I,W,lt,dt,null),a.renderBufferDirect(W,null,lt,dt,P,null),P.onAfterShadow(a,P,I,W,lt,dt,null)}}const K=P.children;for(let lt=0,et=K.length;lt<et;lt++)R(K[lt],I,W,D,C)}function O(P){P.target.removeEventListener("dispose",O);for(const W in m){const D=m[W],C=P.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const Pb={[Oh]:Ph,[zh]:Ih,[Fh]:Hh,[Sr]:Bh,[Ph]:Oh,[Ih]:zh,[Hh]:Fh,[Bh]:Sr};function zb(a,t){function n(){let X=!1;const At=new $e;let Ct=null;const Ft=new $e(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!X&&(a.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){X=Tt},setClear:function(Tt,vt,Xt,ae,De){De===!0&&(Tt*=ae,vt*=ae,Xt*=ae),At.set(Tt,vt,Xt,ae),Ft.equals(At)===!1&&(a.clearColor(Tt,vt,Xt,ae),Ft.copy(At))},reset:function(){X=!1,Ct=null,Ft.set(-1,0,0,0)}}}function s(){let X=!1,At=!1,Ct=null,Ft=null,Tt=null;return{setReversed:function(vt){if(At!==vt){const Xt=t.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),At=vt;const ae=Tt;Tt=null,this.setClear(ae)}},getReversed:function(){return At},setTest:function(vt){vt?gt(a.DEPTH_TEST):Mt(a.DEPTH_TEST)},setMask:function(vt){Ct!==vt&&!X&&(a.depthMask(vt),Ct=vt)},setFunc:function(vt){if(At&&(vt=Pb[vt]),Ft!==vt){switch(vt){case Oh:a.depthFunc(a.NEVER);break;case Ph:a.depthFunc(a.ALWAYS);break;case zh:a.depthFunc(a.LESS);break;case Sr:a.depthFunc(a.LEQUAL);break;case Fh:a.depthFunc(a.EQUAL);break;case Bh:a.depthFunc(a.GEQUAL);break;case Ih:a.depthFunc(a.GREATER);break;case Hh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ft=vt}},setLocked:function(vt){X=vt},setClear:function(vt){Tt!==vt&&(At&&(vt=1-vt),a.clearDepth(vt),Tt=vt)},reset:function(){X=!1,Ct=null,Ft=null,Tt=null,At=!1}}}function o(){let X=!1,At=null,Ct=null,Ft=null,Tt=null,vt=null,Xt=null,ae=null,De=null;return{setTest:function(Ee){X||(Ee?gt(a.STENCIL_TEST):Mt(a.STENCIL_TEST))},setMask:function(Ee){At!==Ee&&!X&&(a.stencilMask(Ee),At=Ee)},setFunc:function(Ee,fi,cn){(Ct!==Ee||Ft!==fi||Tt!==cn)&&(a.stencilFunc(Ee,fi,cn),Ct=Ee,Ft=fi,Tt=cn)},setOp:function(Ee,fi,cn){(vt!==Ee||Xt!==fi||ae!==cn)&&(a.stencilOp(Ee,fi,cn),vt=Ee,Xt=fi,ae=cn)},setLocked:function(Ee){X=Ee},setClear:function(Ee){De!==Ee&&(a.clearStencil(Ee),De=Ee)},reset:function(){X=!1,At=null,Ct=null,Ft=null,Tt=null,vt=null,Xt=null,ae=null,De=null}}}const c=new n,f=new s,h=new o,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,M=[],T=null,b=!1,y=null,v=null,z=null,L=null,R=null,O=null,P=null,I=new we(0,0,0),W=0,D=!1,C=null,G=null,K=null,lt=null,et=null;const dt=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,J=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),F=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),F=J>=2);let St=null,N={};const nt=a.getParameter(a.SCISSOR_BOX),xt=a.getParameter(a.VIEWPORT),yt=new $e().fromArray(nt),Ut=new $e().fromArray(xt);function Ht(X,At,Ct,Ft){const Tt=new Uint8Array(4),vt=a.createTexture();a.bindTexture(X,vt),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xt=0;Xt<Ct;Xt++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(At,0,a.RGBA,1,1,Ft,0,a.RGBA,a.UNSIGNED_BYTE,Tt):a.texImage2D(At+Xt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Tt);return vt}const at={};at[a.TEXTURE_2D]=Ht(a.TEXTURE_2D,a.TEXTURE_2D,1),at[a.TEXTURE_CUBE_MAP]=Ht(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[a.TEXTURE_2D_ARRAY]=Ht(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),at[a.TEXTURE_3D]=Ht(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),gt(a.DEPTH_TEST),f.setFunc(Sr),$t(!1),zt(g0),gt(a.CULL_FACE),Ce(Ia);function gt(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function Mt(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function Zt(X,At){return _[X]!==At?(a.bindFramebuffer(X,At),_[X]=At,X===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=At),X===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=At),!0):!1}function qt(X,At){let Ct=M,Ft=!1;if(X){Ct=x.get(At),Ct===void 0&&(Ct=[],x.set(At,Ct));const Tt=X.textures;if(Ct.length!==Tt.length||Ct[0]!==a.COLOR_ATTACHMENT0){for(let vt=0,Xt=Tt.length;vt<Xt;vt++)Ct[vt]=a.COLOR_ATTACHMENT0+vt;Ct.length=Tt.length,Ft=!0}}else Ct[0]!==a.BACK&&(Ct[0]=a.BACK,Ft=!0);Ft&&a.drawBuffers(Ct)}function ce(X){return T!==X?(a.useProgram(X),T=X,!0):!1}const je={[ms]:a.FUNC_ADD,[G1]:a.FUNC_SUBTRACT,[V1]:a.FUNC_REVERSE_SUBTRACT};je[k1]=a.MIN,je[X1]=a.MAX;const H={[W1]:a.ZERO,[q1]:a.ONE,[Y1]:a.SRC_COLOR,[Lh]:a.SRC_ALPHA,[$1]:a.SRC_ALPHA_SATURATE,[Q1]:a.DST_COLOR,[Z1]:a.DST_ALPHA,[j1]:a.ONE_MINUS_SRC_COLOR,[Nh]:a.ONE_MINUS_SRC_ALPHA,[J1]:a.ONE_MINUS_DST_COLOR,[K1]:a.ONE_MINUS_DST_ALPHA,[tS]:a.CONSTANT_COLOR,[eS]:a.ONE_MINUS_CONSTANT_COLOR,[nS]:a.CONSTANT_ALPHA,[iS]:a.ONE_MINUS_CONSTANT_ALPHA};function Ce(X,At,Ct,Ft,Tt,vt,Xt,ae,De,Ee){if(X===Ia){b===!0&&(Mt(a.BLEND),b=!1);return}if(b===!1&&(gt(a.BLEND),b=!0),X!==H1){if(X!==y||Ee!==D){if((v!==ms||R!==ms)&&(a.blendEquation(a.FUNC_ADD),v=ms,R=ms),Ee)switch(X){case vr:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Uh:a.blendFunc(a.ONE,a.ONE);break;case _0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case v0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case vr:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Uh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case _0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}z=null,L=null,O=null,P=null,I.set(0,0,0),W=0,y=X,D=Ee}return}Tt=Tt||At,vt=vt||Ct,Xt=Xt||Ft,(At!==v||Tt!==R)&&(a.blendEquationSeparate(je[At],je[Tt]),v=At,R=Tt),(Ct!==z||Ft!==L||vt!==O||Xt!==P)&&(a.blendFuncSeparate(H[Ct],H[Ft],H[vt],H[Xt]),z=Ct,L=Ft,O=vt,P=Xt),(ae.equals(I)===!1||De!==W)&&(a.blendColor(ae.r,ae.g,ae.b,De),I.copy(ae),W=De),y=X,D=!1}function se(X,At){X.side===ea?Mt(a.CULL_FACE):gt(a.CULL_FACE);let Ct=X.side===Vn;At&&(Ct=!Ct),$t(Ct),X.blending===vr&&X.transparent===!1?Ce(Ia):Ce(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ft=X.stencilWrite;h.setTest(Ft),Ft&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Gt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?gt(a.SAMPLE_ALPHA_TO_COVERAGE):Mt(a.SAMPLE_ALPHA_TO_COVERAGE)}function $t(X){C!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),C=X)}function zt(X){X!==F1?(gt(a.CULL_FACE),X!==G&&(X===g0?a.cullFace(a.BACK):X===B1?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Mt(a.CULL_FACE),G=X}function ye(X){X!==K&&(F&&a.lineWidth(X),K=X)}function Gt(X,At,Ct){X?(gt(a.POLYGON_OFFSET_FILL),(lt!==At||et!==Ct)&&(a.polygonOffset(At,Ct),lt=At,et=Ct)):Mt(a.POLYGON_OFFSET_FILL)}function re(X){X?gt(a.SCISSOR_TEST):Mt(a.SCISSOR_TEST)}function He(X){X===void 0&&(X=a.TEXTURE0+dt-1),St!==X&&(a.activeTexture(X),St=X)}function Ge(X,At,Ct){Ct===void 0&&(St===null?Ct=a.TEXTURE0+dt-1:Ct=St);let Ft=N[Ct];Ft===void 0&&(Ft={type:void 0,texture:void 0},N[Ct]=Ft),(Ft.type!==X||Ft.texture!==At)&&(St!==Ct&&(a.activeTexture(Ct),St=Ct),a.bindTexture(X,At||at[X]),Ft.type=X,Ft.texture=At)}function U(){const X=N[St];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function S(){try{a.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function V(){try{a.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{a.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{a.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function st(){try{a.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{a.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{a.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{a.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{a.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{a.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(X){yt.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),yt.copy(X))}function Kt(X){Ut.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Ut.copy(X))}function Wt(X,At){let Ct=m.get(At);Ct===void 0&&(Ct=new WeakMap,m.set(At,Ct));let Ft=Ct.get(X);Ft===void 0&&(Ft=a.getUniformBlockIndex(At,X.name),Ct.set(X,Ft))}function Dt(X,At){const Ft=m.get(At).get(X);p.get(At)!==Ft&&(a.uniformBlockBinding(At,Ft,X.__bindingPointIndex),p.set(At,Ft))}function oe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},St=null,N={},_={},x=new WeakMap,M=[],T=null,b=!1,y=null,v=null,z=null,L=null,R=null,O=null,P=null,I=new we(0,0,0),W=0,D=!1,C=null,G=null,K=null,lt=null,et=null,yt.set(0,0,a.canvas.width,a.canvas.height),Ut.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:gt,disable:Mt,bindFramebuffer:Zt,drawBuffers:qt,useProgram:ce,setBlending:Ce,setMaterial:se,setFlipSided:$t,setCullFace:zt,setLineWidth:ye,setPolygonOffset:Gt,setScissorTest:re,activeTexture:He,bindTexture:Ge,unbindTexture:U,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:kt,texImage3D:Et,updateUBOMapping:Wt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Bt,texSubImage2D:$,texSubImage3D:ft,compressedTexSubImage2D:st,compressedTexSubImage3D:wt,scissor:Nt,viewport:Kt,reset:oe}}function Fb(a,t,n,s,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new le,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,S){return M?new OffscreenCanvas(U,S):Dc("canvas")}function b(U,S,V){let $=1;const ft=Ge(U);if((ft.width>V||ft.height>V)&&($=V/Math.max(ft.width,ft.height)),$<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const st=Math.floor($*ft.width),wt=Math.floor($*ft.height);_===void 0&&(_=T(st,wt));const Rt=S?T(st,wt):_;return Rt.width=st,Rt.height=wt,Rt.getContext("2d").drawImage(U,0,0,st,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+st+"x"+wt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){a.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function L(U,S,V,$,ft=!1){if(U!==null){if(a[U]!==void 0)return a[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let st=S;if(S===a.RED&&(V===a.FLOAT&&(st=a.R32F),V===a.HALF_FLOAT&&(st=a.R16F),V===a.UNSIGNED_BYTE&&(st=a.R8)),S===a.RED_INTEGER&&(V===a.UNSIGNED_BYTE&&(st=a.R8UI),V===a.UNSIGNED_SHORT&&(st=a.R16UI),V===a.UNSIGNED_INT&&(st=a.R32UI),V===a.BYTE&&(st=a.R8I),V===a.SHORT&&(st=a.R16I),V===a.INT&&(st=a.R32I)),S===a.RG&&(V===a.FLOAT&&(st=a.RG32F),V===a.HALF_FLOAT&&(st=a.RG16F),V===a.UNSIGNED_BYTE&&(st=a.RG8)),S===a.RG_INTEGER&&(V===a.UNSIGNED_BYTE&&(st=a.RG8UI),V===a.UNSIGNED_SHORT&&(st=a.RG16UI),V===a.UNSIGNED_INT&&(st=a.RG32UI),V===a.BYTE&&(st=a.RG8I),V===a.SHORT&&(st=a.RG16I),V===a.INT&&(st=a.RG32I)),S===a.RGB_INTEGER&&(V===a.UNSIGNED_BYTE&&(st=a.RGB8UI),V===a.UNSIGNED_SHORT&&(st=a.RGB16UI),V===a.UNSIGNED_INT&&(st=a.RGB32UI),V===a.BYTE&&(st=a.RGB8I),V===a.SHORT&&(st=a.RGB16I),V===a.INT&&(st=a.RGB32I)),S===a.RGBA_INTEGER&&(V===a.UNSIGNED_BYTE&&(st=a.RGBA8UI),V===a.UNSIGNED_SHORT&&(st=a.RGBA16UI),V===a.UNSIGNED_INT&&(st=a.RGBA32UI),V===a.BYTE&&(st=a.RGBA8I),V===a.SHORT&&(st=a.RGBA16I),V===a.INT&&(st=a.RGBA32I)),S===a.RGB&&(V===a.UNSIGNED_INT_5_9_9_9_REV&&(st=a.RGB9_E5),V===a.UNSIGNED_INT_10F_11F_11F_REV&&(st=a.R11F_G11F_B10F)),S===a.RGBA){const wt=ft?wc:Ae.getTransfer($);V===a.FLOAT&&(st=a.RGBA32F),V===a.HALF_FLOAT&&(st=a.RGBA16F),V===a.UNSIGNED_BYTE&&(st=wt===Fe?a.SRGB8_ALPHA8:a.RGBA8),V===a.UNSIGNED_SHORT_4_4_4_4&&(st=a.RGBA4),V===a.UNSIGNED_SHORT_5_5_5_1&&(st=a.RGB5_A1)}return(st===a.R16F||st===a.R32F||st===a.RG16F||st===a.RG32F||st===a.RGBA16F||st===a.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function R(U,S){let V;return U?S===null||S===Ss||S===No?V=a.DEPTH24_STENCIL8:S===Li?V=a.DEPTH32F_STENCIL8:S===Lo&&(V=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ss||S===No?V=a.DEPTH_COMPONENT24:S===Li?V=a.DEPTH_COMPONENT32F:S===Lo&&(V=a.DEPTH_COMPONENT16),V}function O(U,S){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==$n&&U.minFilter!==Gn?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function P(U){const S=U.target;S.removeEventListener("dispose",P),W(S),S.isVideoTexture&&g.delete(S)}function I(U){const S=U.target;S.removeEventListener("dispose",I),C(S)}function W(U){const S=s.get(U);if(S.__webglInit===void 0)return;const V=U.source,$=x.get(V);if($){const ft=$[S.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&D(U),Object.keys($).length===0&&x.delete(V)}s.remove(U)}function D(U){const S=s.get(U);a.deleteTexture(S.__webglTexture);const V=U.source,$=x.get(V);delete $[S.__cacheKey],f.memory.textures--}function C(U){const S=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ft=0;ft<S.__webglFramebuffer[$].length;ft++)a.deleteFramebuffer(S.__webglFramebuffer[$][ft]);else a.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)a.deleteFramebuffer(S.__webglFramebuffer[$]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=U.textures;for(let $=0,ft=V.length;$<ft;$++){const st=s.get(V[$]);st.__webglTexture&&(a.deleteTexture(st.__webglTexture),f.memory.textures--),s.remove(V[$])}s.remove(U)}let G=0;function K(){G=0}function lt(){const U=G;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),G+=1,U}function et(U){const S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function dt(U,S){const V=s.get(U);if(U.isVideoTexture&&re(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&V.__version!==U.version){const $=U.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(V,U,S);return}}else U.isExternalTexture&&(V.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,V.__webglTexture,a.TEXTURE0+S)}function F(U,S){const V=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){at(V,U,S);return}n.bindTexture(a.TEXTURE_2D_ARRAY,V.__webglTexture,a.TEXTURE0+S)}function J(U,S){const V=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){at(V,U,S);return}n.bindTexture(a.TEXTURE_3D,V.__webglTexture,a.TEXTURE0+S)}function Y(U,S){const V=s.get(U);if(U.version>0&&V.__version!==U.version){gt(V,U,S);return}n.bindTexture(a.TEXTURE_CUBE_MAP,V.__webglTexture,a.TEXTURE0+S)}const St={[kh]:a.REPEAT,[yi]:a.CLAMP_TO_EDGE,[Xh]:a.MIRRORED_REPEAT},N={[$n]:a.NEAREST,[dS]:a.NEAREST_MIPMAP_NEAREST,[Ql]:a.NEAREST_MIPMAP_LINEAR,[Gn]:a.LINEAR,[jf]:a.LINEAR_MIPMAP_NEAREST,[_s]:a.LINEAR_MIPMAP_LINEAR},nt={[vS]:a.NEVER,[TS]:a.ALWAYS,[xS]:a.LESS,[W_]:a.LEQUAL,[SS]:a.EQUAL,[ES]:a.GEQUAL,[yS]:a.GREATER,[MS]:a.NOTEQUAL};function xt(U,S){if(S.type===Li&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Gn||S.magFilter===jf||S.magFilter===Ql||S.magFilter===_s||S.minFilter===Gn||S.minFilter===jf||S.minFilter===Ql||S.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,St[S.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,St[S.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,St[S.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,N[S.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,N[S.minFilter]),S.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,nt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$n||S.minFilter!==Ql&&S.minFilter!==_s||S.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||s.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");a.texParameterf(U,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),s.get(S).__currentAnisotropy=S.anisotropy}}}function yt(U,S){let V=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",P));const $=S.source;let ft=x.get($);ft===void 0&&(ft={},x.set($,ft));const st=et(S);if(st!==U.__cacheKey){ft[st]===void 0&&(ft[st]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,V=!0),ft[st].usedTimes++;const wt=ft[U.__cacheKey];wt!==void 0&&(ft[U.__cacheKey].usedTimes--,wt.usedTimes===0&&D(S)),U.__cacheKey=st,U.__webglTexture=ft[st].texture}return V}function Ut(U,S,V){return Math.floor(Math.floor(U/V)/S)}function Ht(U,S,V,$){const st=U.updateRanges;if(st.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,S.width,S.height,V,$,S.data);else{st.sort((Et,Nt)=>Et.start-Nt.start);let wt=0;for(let Et=1;Et<st.length;Et++){const Nt=st[wt],Kt=st[Et],Wt=Nt.start+Nt.count,Dt=Ut(Kt.start,S.width,4),oe=Ut(Nt.start,S.width,4);Kt.start<=Wt+1&&Dt===oe&&Ut(Kt.start+Kt.count-1,S.width,4)===Dt?Nt.count=Math.max(Nt.count,Kt.start+Kt.count-Nt.start):(++wt,st[wt]=Kt)}st.length=wt+1;const Rt=a.getParameter(a.UNPACK_ROW_LENGTH),Bt=a.getParameter(a.UNPACK_SKIP_PIXELS),kt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,S.width);for(let Et=0,Nt=st.length;Et<Nt;Et++){const Kt=st[Et],Wt=Math.floor(Kt.start/4),Dt=Math.ceil(Kt.count/4),oe=Wt%S.width,X=Math.floor(Wt/S.width),At=Dt,Ct=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,oe),a.pixelStorei(a.UNPACK_SKIP_ROWS,X),n.texSubImage2D(a.TEXTURE_2D,0,oe,X,At,Ct,V,$,S.data)}U.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Rt),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Bt),a.pixelStorei(a.UNPACK_SKIP_ROWS,kt)}}function at(U,S,V){let $=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=a.TEXTURE_3D);const ft=yt(U,S),st=S.source;n.bindTexture($,U.__webglTexture,a.TEXTURE0+V);const wt=s.get(st);if(st.version!==wt.__version||ft===!0){n.activeTexture(a.TEXTURE0+V);const Rt=Ae.getPrimaries(Ae.workingColorSpace),Bt=S.colorSpace===Ba?null:Ae.getPrimaries(S.colorSpace),kt=S.colorSpace===Ba||Rt===Bt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let Et=b(S.image,!1,o.maxTextureSize);Et=He(S,Et);const Nt=c.convert(S.format,S.colorSpace),Kt=c.convert(S.type);let Wt=L(S.internalFormat,Nt,Kt,S.colorSpace,S.isVideoTexture);xt($,S);let Dt;const oe=S.mipmaps,X=S.isVideoTexture!==!0,At=wt.__version===void 0||ft===!0,Ct=st.dataReady,Ft=O(S,Et);if(S.isDepthTexture)Wt=R(S.format===Po,S.type),At&&(X?n.texStorage2D(a.TEXTURE_2D,1,Wt,Et.width,Et.height):n.texImage2D(a.TEXTURE_2D,0,Wt,Et.width,Et.height,0,Nt,Kt,null));else if(S.isDataTexture)if(oe.length>0){X&&At&&n.texStorage2D(a.TEXTURE_2D,Ft,Wt,oe[0].width,oe[0].height);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Dt=oe[Tt],X?Ct&&n.texSubImage2D(a.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Nt,Kt,Dt.data):n.texImage2D(a.TEXTURE_2D,Tt,Wt,Dt.width,Dt.height,0,Nt,Kt,Dt.data);S.generateMipmaps=!1}else X?(At&&n.texStorage2D(a.TEXTURE_2D,Ft,Wt,Et.width,Et.height),Ct&&Ht(S,Et,Nt,Kt)):n.texImage2D(a.TEXTURE_2D,0,Wt,Et.width,Et.height,0,Nt,Kt,Et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){X&&At&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ft,Wt,oe[0].width,oe[0].height,Et.depth);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)if(Dt=oe[Tt],S.format!==ci)if(Nt!==null)if(X){if(Ct)if(S.layerUpdates.size>0){const Xt=X0(Dt.width,Dt.height,S.format,S.type);for(const ae of S.layerUpdates){const De=Dt.data.subarray(ae*Xt/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Xt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Tt,0,0,ae,Dt.width,Dt.height,1,Nt,De)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Nt,Dt.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Tt,Wt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ct&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Nt,Kt,Dt.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Tt,Wt,Dt.width,Dt.height,Et.depth,0,Nt,Kt,Dt.data)}else{X&&At&&n.texStorage2D(a.TEXTURE_2D,Ft,Wt,oe[0].width,oe[0].height);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Dt=oe[Tt],S.format!==ci?Nt!==null?X?Ct&&n.compressedTexSubImage2D(a.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Nt,Dt.data):n.compressedTexImage2D(a.TEXTURE_2D,Tt,Wt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ct&&n.texSubImage2D(a.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Nt,Kt,Dt.data):n.texImage2D(a.TEXTURE_2D,Tt,Wt,Dt.width,Dt.height,0,Nt,Kt,Dt.data)}else if(S.isDataArrayTexture)if(X){if(At&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ft,Wt,Et.width,Et.height,Et.depth),Ct)if(S.layerUpdates.size>0){const Tt=X0(Et.width,Et.height,S.format,S.type);for(const vt of S.layerUpdates){const Xt=Et.data.subarray(vt*Tt/Et.data.BYTES_PER_ELEMENT,(vt+1)*Tt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,vt,Et.width,Et.height,1,Nt,Kt,Xt)}S.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Nt,Kt,Et.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Wt,Et.width,Et.height,Et.depth,0,Nt,Kt,Et.data);else if(S.isData3DTexture)X?(At&&n.texStorage3D(a.TEXTURE_3D,Ft,Wt,Et.width,Et.height,Et.depth),Ct&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Nt,Kt,Et.data)):n.texImage3D(a.TEXTURE_3D,0,Wt,Et.width,Et.height,Et.depth,0,Nt,Kt,Et.data);else if(S.isFramebufferTexture){if(At)if(X)n.texStorage2D(a.TEXTURE_2D,Ft,Wt,Et.width,Et.height);else{let Tt=Et.width,vt=Et.height;for(let Xt=0;Xt<Ft;Xt++)n.texImage2D(a.TEXTURE_2D,Xt,Wt,Tt,vt,0,Nt,Kt,null),Tt>>=1,vt>>=1}}else if(oe.length>0){if(X&&At){const Tt=Ge(oe[0]);n.texStorage2D(a.TEXTURE_2D,Ft,Wt,Tt.width,Tt.height)}for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Dt=oe[Tt],X?Ct&&n.texSubImage2D(a.TEXTURE_2D,Tt,0,0,Nt,Kt,Dt):n.texImage2D(a.TEXTURE_2D,Tt,Wt,Nt,Kt,Dt);S.generateMipmaps=!1}else if(X){if(At){const Tt=Ge(Et);n.texStorage2D(a.TEXTURE_2D,Ft,Wt,Tt.width,Tt.height)}Ct&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Nt,Kt,Et)}else n.texImage2D(a.TEXTURE_2D,0,Wt,Nt,Kt,Et);y(S)&&v($),wt.__version=st.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function gt(U,S,V){if(S.image.length!==6)return;const $=yt(U,S),ft=S.source;n.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+V);const st=s.get(ft);if(ft.version!==st.__version||$===!0){n.activeTexture(a.TEXTURE0+V);const wt=Ae.getPrimaries(Ae.workingColorSpace),Rt=S.colorSpace===Ba?null:Ae.getPrimaries(S.colorSpace),Bt=S.colorSpace===Ba||wt===Rt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const kt=S.isCompressedTexture||S.image[0].isCompressedTexture,Et=S.image[0]&&S.image[0].isDataTexture,Nt=[];for(let vt=0;vt<6;vt++)!kt&&!Et?Nt[vt]=b(S.image[vt],!0,o.maxCubemapSize):Nt[vt]=Et?S.image[vt].image:S.image[vt],Nt[vt]=He(S,Nt[vt]);const Kt=Nt[0],Wt=c.convert(S.format,S.colorSpace),Dt=c.convert(S.type),oe=L(S.internalFormat,Wt,Dt,S.colorSpace),X=S.isVideoTexture!==!0,At=st.__version===void 0||$===!0,Ct=ft.dataReady;let Ft=O(S,Kt);xt(a.TEXTURE_CUBE_MAP,S);let Tt;if(kt){X&&At&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ft,oe,Kt.width,Kt.height);for(let vt=0;vt<6;vt++){Tt=Nt[vt].mipmaps;for(let Xt=0;Xt<Tt.length;Xt++){const ae=Tt[Xt];S.format!==ci?Wt!==null?X?Ct&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,0,0,ae.width,ae.height,Wt,ae.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ct&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,0,0,ae.width,ae.height,Wt,Dt,ae.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,oe,ae.width,ae.height,0,Wt,Dt,ae.data)}}}else{if(Tt=S.mipmaps,X&&At){Tt.length>0&&Ft++;const vt=Ge(Nt[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ft,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Et){X?Ct&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Nt[vt].width,Nt[vt].height,Wt,Dt,Nt[vt].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Nt[vt].width,Nt[vt].height,0,Wt,Dt,Nt[vt].data);for(let Xt=0;Xt<Tt.length;Xt++){const De=Tt[Xt].image[vt].image;X?Ct&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,0,0,De.width,De.height,Wt,Dt,De.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,oe,De.width,De.height,0,Wt,Dt,De.data)}}else{X?Ct&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Wt,Dt,Nt[vt]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Wt,Dt,Nt[vt]);for(let Xt=0;Xt<Tt.length;Xt++){const ae=Tt[Xt];X?Ct&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,0,0,Wt,Dt,ae.image[vt]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,oe,Wt,Dt,ae.image[vt])}}}y(S)&&v(a.TEXTURE_CUBE_MAP),st.__version=ft.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function Mt(U,S,V,$,ft,st){const wt=c.convert(V.format,V.colorSpace),Rt=c.convert(V.type),Bt=L(V.internalFormat,wt,Rt,V.colorSpace),kt=s.get(S),Et=s.get(V);if(Et.__renderTarget=S,!kt.__hasExternalTextures){const Nt=Math.max(1,S.width>>st),Kt=Math.max(1,S.height>>st);ft===a.TEXTURE_3D||ft===a.TEXTURE_2D_ARRAY?n.texImage3D(ft,st,Bt,Nt,Kt,S.depth,0,wt,Rt,null):n.texImage2D(ft,st,Bt,Nt,Kt,0,wt,Rt,null)}n.bindFramebuffer(a.FRAMEBUFFER,U),Gt(S)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,ft,Et.__webglTexture,0,ye(S)):(ft===a.TEXTURE_2D||ft>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,$,ft,Et.__webglTexture,st),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Zt(U,S,V){if(a.bindRenderbuffer(a.RENDERBUFFER,U),S.depthBuffer){const $=S.depthTexture,ft=$&&$.isDepthTexture?$.type:null,st=R(S.stencilBuffer,ft),wt=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Rt=ye(S);Gt(S)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Rt,st,S.width,S.height):V?a.renderbufferStorageMultisample(a.RENDERBUFFER,Rt,st,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,st,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,wt,a.RENDERBUFFER,U)}else{const $=S.textures;for(let ft=0;ft<$.length;ft++){const st=$[ft],wt=c.convert(st.format,st.colorSpace),Rt=c.convert(st.type),Bt=L(st.internalFormat,wt,Rt,st.colorSpace),kt=ye(S);V&&Gt(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,kt,Bt,S.width,S.height):Gt(S)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,kt,Bt,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,Bt,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function qt(U,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=s.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),dt(S.depthTexture,0);const ft=$.__webglTexture,st=ye(S);if(S.depthTexture.format===Oo)Gt(S)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ft,0,st):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ft,0);else if(S.depthTexture.format===Po)Gt(S)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ft,0,st):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function ce(U){const S=s.get(U),V=U.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==U.depthTexture){const $=U.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const ft=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",ft)};$.addEventListener("dispose",ft),S.__depthDisposeCallback=ft}S.__boundDepthTexture=$}if(U.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const $=U.texture.mipmaps;$&&$.length>0?qt(S.__webglFramebuffer[0],U):qt(S.__webglFramebuffer,U)}else if(V){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=a.createRenderbuffer(),Zt(S.__webglDepthbuffer[$],U,!1);else{const ft=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer[$];a.bindRenderbuffer(a.RENDERBUFFER,st),a.framebufferRenderbuffer(a.FRAMEBUFFER,ft,a.RENDERBUFFER,st)}}else{const $=U.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),Zt(S.__webglDepthbuffer,U,!1);else{const ft=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,st),a.framebufferRenderbuffer(a.FRAMEBUFFER,ft,a.RENDERBUFFER,st)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function je(U,S,V){const $=s.get(U);S!==void 0&&Mt($.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),V!==void 0&&ce(U)}function H(U){const S=U.texture,V=s.get(U),$=s.get(S);U.addEventListener("dispose",I);const ft=U.textures,st=U.isWebGLCubeRenderTarget===!0,wt=ft.length>1;if(wt||($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=S.version,f.memory.textures++),st){V.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[Rt]=[];for(let Bt=0;Bt<S.mipmaps.length;Bt++)V.__webglFramebuffer[Rt][Bt]=a.createFramebuffer()}else V.__webglFramebuffer[Rt]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let Rt=0;Rt<S.mipmaps.length;Rt++)V.__webglFramebuffer[Rt]=a.createFramebuffer()}else V.__webglFramebuffer=a.createFramebuffer();if(wt)for(let Rt=0,Bt=ft.length;Rt<Bt;Rt++){const kt=s.get(ft[Rt]);kt.__webglTexture===void 0&&(kt.__webglTexture=a.createTexture(),f.memory.textures++)}if(U.samples>0&&Gt(U)===!1){V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Rt=0;Rt<ft.length;Rt++){const Bt=ft[Rt];V.__webglColorRenderbuffer[Rt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,V.__webglColorRenderbuffer[Rt]);const kt=c.convert(Bt.format,Bt.colorSpace),Et=c.convert(Bt.type),Nt=L(Bt.internalFormat,kt,Et,Bt.colorSpace,U.isXRRenderTarget===!0),Kt=ye(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,Kt,Nt,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Rt,a.RENDERBUFFER,V.__webglColorRenderbuffer[Rt])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),Zt(V.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(st){n.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture),xt(a.TEXTURE_CUBE_MAP,S);for(let Rt=0;Rt<6;Rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Bt=0;Bt<S.mipmaps.length;Bt++)Mt(V.__webglFramebuffer[Rt][Bt],U,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Bt);else Mt(V.__webglFramebuffer[Rt],U,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(S)&&v(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(wt){for(let Rt=0,Bt=ft.length;Rt<Bt;Rt++){const kt=ft[Rt],Et=s.get(kt);let Nt=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Nt=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Nt,Et.__webglTexture),xt(Nt,kt),Mt(V.__webglFramebuffer,U,kt,a.COLOR_ATTACHMENT0+Rt,Nt,0),y(kt)&&v(Nt)}n.unbindTexture()}else{let Rt=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Rt,$.__webglTexture),xt(Rt,S),S.mipmaps&&S.mipmaps.length>0)for(let Bt=0;Bt<S.mipmaps.length;Bt++)Mt(V.__webglFramebuffer[Bt],U,S,a.COLOR_ATTACHMENT0,Rt,Bt);else Mt(V.__webglFramebuffer,U,S,a.COLOR_ATTACHMENT0,Rt,0);y(S)&&v(Rt),n.unbindTexture()}U.depthBuffer&&ce(U)}function Ce(U){const S=U.textures;for(let V=0,$=S.length;V<$;V++){const ft=S[V];if(y(ft)){const st=z(U),wt=s.get(ft).__webglTexture;n.bindTexture(st,wt),v(st),n.unbindTexture()}}}const se=[],$t=[];function zt(U){if(U.samples>0){if(Gt(U)===!1){const S=U.textures,V=U.width,$=U.height;let ft=a.COLOR_BUFFER_BIT;const st=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,wt=s.get(U),Rt=S.length>1;if(Rt)for(let kt=0;kt<S.length;kt++)n.bindFramebuffer(a.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+kt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,wt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+kt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Bt=U.texture.mipmaps;Bt&&Bt.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let kt=0;kt<S.length;kt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ft|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ft|=a.STENCIL_BUFFER_BIT)),Rt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,wt.__webglColorRenderbuffer[kt]);const Et=s.get(S[kt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Et,0)}a.blitFramebuffer(0,0,V,$,0,0,V,$,ft,a.NEAREST),p===!0&&(se.length=0,$t.length=0,se.push(a.COLOR_ATTACHMENT0+kt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(st),$t.push(st),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,$t)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,se))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Rt)for(let kt=0;kt<S.length;kt++){n.bindFramebuffer(a.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+kt,a.RENDERBUFFER,wt.__webglColorRenderbuffer[kt]);const Et=s.get(S[kt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,wt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+kt,a.TEXTURE_2D,Et,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const S=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function ye(U){return Math.min(o.maxSamples,U.samples)}function Gt(U){const S=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function re(U){const S=f.render.frame;g.get(U)!==S&&(g.set(U,S),U.update())}function He(U,S){const V=U.colorSpace,$=U.format,ft=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||V!==Er&&V!==Ba&&(Ae.getTransfer(V)===Fe?($!==ci||ft!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Ge(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=lt,this.resetTextureUnits=K,this.setTexture2D=dt,this.setTexture2DArray=F,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=je,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Gt}function Bb(a,t){function n(s,o=Ba){let c;const f=Ae.getTransfer(o);if(s===aa)return a.UNSIGNED_BYTE;if(s===Ad)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Rd)return a.UNSIGNED_SHORT_5_5_5_1;if(s===I_)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===H_)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===F_)return a.BYTE;if(s===B_)return a.SHORT;if(s===Lo)return a.UNSIGNED_SHORT;if(s===bd)return a.INT;if(s===Ss)return a.UNSIGNED_INT;if(s===Li)return a.FLOAT;if(s===br)return a.HALF_FLOAT;if(s===G_)return a.ALPHA;if(s===V_)return a.RGB;if(s===ci)return a.RGBA;if(s===Oo)return a.DEPTH_COMPONENT;if(s===Po)return a.DEPTH_STENCIL;if(s===k_)return a.RED;if(s===wd)return a.RED_INTEGER;if(s===X_)return a.RG;if(s===Cd)return a.RG_INTEGER;if(s===Dd)return a.RGBA_INTEGER;if(s===Mc||s===Ec||s===Tc||s===bc)if(f===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Mc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Mc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ec)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wh||s===qh||s===Yh||s===jh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zh||s===Kh||s===Qh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Zh||s===Kh)return f===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Qh)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Jh)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$h)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===td)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ed)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===nd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===id)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ad)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===od)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ld)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ud)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hd||s===dd||s===pd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===hd)return f===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===md||s===gd||s===_d||s===vd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===md)return c.COMPRESSED_RED_RGTC1_EXT;if(s===gd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_d)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===No?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:n}}const Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new sv(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new sa({vertexShader:Ib,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ui(new xs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vb extends Ar{constructor(t,n){super();const s=this;let o=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,_=null,x=null,M=null,T=null;const b=typeof XRWebGLBinding<"u",y=new Gb,v={},z=n.getContextAttributes();let L=null,R=null;const O=[],P=[],I=new le;let W=null;const D=new xi;D.viewport=new $e;const C=new xi;C.viewport=new $e;const G=[D,C],K=new ly;let lt=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=O[at];return gt===void 0&&(gt=new _h,O[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=O[at];return gt===void 0&&(gt=new _h,O[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=O[at];return gt===void 0&&(gt=new _h,O[at]=gt),gt.getHandSpace()};function dt(at){const gt=P.indexOf(at.inputSource);if(gt===-1)return;const Mt=O[gt];Mt!==void 0&&(Mt.update(at.inputSource,at.frame,m||f),Mt.dispatchEvent({type:at.type,data:at.inputSource}))}function F(){o.removeEventListener("select",dt),o.removeEventListener("selectstart",dt),o.removeEventListener("selectend",dt),o.removeEventListener("squeeze",dt),o.removeEventListener("squeezestart",dt),o.removeEventListener("squeezeend",dt),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",J);for(let at=0;at<O.length;at++){const gt=P[at];gt!==null&&(P[at]=null,O[at].disconnect(gt))}lt=null,et=null,y.reset();for(const at in v)delete v[at];t.setRenderTarget(L),M=null,x=null,_=null,o=null,R=null,Ht.stop(),s.isPresenting=!1,t.setPixelRatio(W),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){h=at,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(at){m=at},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(at){if(o=at,o!==null){if(L=t.getRenderTarget(),o.addEventListener("select",dt),o.addEventListener("selectstart",dt),o.addEventListener("selectend",dt),o.addEventListener("squeeze",dt),o.addEventListener("squeezestart",dt),o.addEventListener("squeezeend",dt),o.addEventListener("end",F),o.addEventListener("inputsourceschange",J),z.xrCompatible!==!0&&await n.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Zt=null,qt=null;z.depth&&(qt=z.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=z.stencil?Po:Oo,Zt=z.stencil?No:Ss);const ce={colorFormat:n.RGBA8,depthFormat:qt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(ce),o.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),R=new ka(x.textureWidth,x.textureHeight,{format:ci,type:aa,depthTexture:new av(x.textureWidth,x.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,Mt),o.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new ka(M.framebufferWidth,M.framebufferHeight,{format:ci,type:aa,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await o.requestReferenceSpace(h),Ht.setContext(o),Ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(at){for(let gt=0;gt<at.removed.length;gt++){const Mt=at.removed[gt],Zt=P.indexOf(Mt);Zt>=0&&(P[Zt]=null,O[Zt].disconnect(Mt))}for(let gt=0;gt<at.added.length;gt++){const Mt=at.added[gt];let Zt=P.indexOf(Mt);if(Zt===-1){for(let ce=0;ce<O.length;ce++)if(ce>=P.length){P.push(Mt),Zt=ce;break}else if(P[ce]===null){P[ce]=Mt,Zt=ce;break}if(Zt===-1)break}const qt=O[Zt];qt&&qt.connect(Mt)}}const Y=new ct,St=new ct;function N(at,gt,Mt){Y.setFromMatrixPosition(gt.matrixWorld),St.setFromMatrixPosition(Mt.matrixWorld);const Zt=Y.distanceTo(St),qt=gt.projectionMatrix.elements,ce=Mt.projectionMatrix.elements,je=qt[14]/(qt[10]-1),H=qt[14]/(qt[10]+1),Ce=(qt[9]+1)/qt[5],se=(qt[9]-1)/qt[5],$t=(qt[8]-1)/qt[0],zt=(ce[8]+1)/ce[0],ye=je*$t,Gt=je*zt,re=Zt/(-$t+zt),He=re*-$t;if(gt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(He),at.translateZ(re),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),qt[10]===-1)at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Ge=je+re,U=H+re,S=ye-He,V=Gt+(Zt-He),$=Ce*H/U*Ge,ft=se*H/U*Ge;at.projectionMatrix.makePerspective(S,V,$,ft,Ge,U),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function nt(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(o===null)return;let gt=at.near,Mt=at.far;y.texture!==null&&(y.depthNear>0&&(gt=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),K.near=C.near=D.near=gt,K.far=C.far=D.far=Mt,(lt!==K.near||et!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),lt=K.near,et=K.far),K.layers.mask=at.layers.mask|6,D.layers.mask=K.layers.mask&3,C.layers.mask=K.layers.mask&5;const Zt=at.parent,qt=K.cameras;nt(K,Zt);for(let ce=0;ce<qt.length;ce++)nt(qt[ce],Zt);qt.length===2?N(K,D,C):K.projectionMatrix.copy(D.projectionMatrix),xt(at,K,Zt)};function xt(at,gt,Mt){Mt===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(Mt.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=xd*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(at){p=at,x!==null&&(x.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(at){return v[at]};let yt=null;function Ut(at,gt){if(g=gt.getViewerPose(m||f),T=gt,g!==null){const Mt=g.views;M!==null&&(t.setRenderTargetFramebuffer(R,M.framebuffer),t.setRenderTarget(R));let Zt=!1;Mt.length!==K.cameras.length&&(K.cameras.length=0,Zt=!0);for(let H=0;H<Mt.length;H++){const Ce=Mt[H];let se=null;if(M!==null)se=M.getViewport(Ce);else{const zt=_.getViewSubImage(x,Ce);se=zt.viewport,H===0&&(t.setRenderTargetTextures(R,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(R))}let $t=G[H];$t===void 0&&($t=new xi,$t.layers.enable(H),$t.viewport=new $e,G[H]=$t),$t.matrix.fromArray(Ce.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ce.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(se.x,se.y,se.width,se.height),H===0&&(K.matrix.copy($t.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Zt===!0&&K.cameras.push($t)}const qt=o.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){_=s.getBinding();const H=_.getDepthInformation(Mt[0]);H&&H.isValid&&H.texture&&y.init(H,o.renderState)}if(qt&&qt.includes("camera-access")&&b){t.state.unbindTexture(),_=s.getBinding();for(let H=0;H<Mt.length;H++){const Ce=Mt[H].camera;if(Ce){let se=v[Ce];se||(se=new sv,v[Ce]=se);const $t=_.getCameraImage(Ce);se.sourceTexture=$t}}}}for(let Mt=0;Mt<O.length;Mt++){const Zt=P[Mt],qt=O[Mt];Zt!==null&&qt!==void 0&&qt.update(Zt,gt,m||f)}yt&&yt(at,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),T=null}const Ht=new rv;Ht.setAnimationLoop(Ut),this.setAnimationLoop=function(at){yt=at},this.dispose=function(){}}}const hs=new ys,kb=new ln;function Xb(a,t){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,ev(a)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,z,L,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,R)):v.isMeshMatcapMaterial?(c(y,v),T(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),b(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?p(y,v,z,L):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Vn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Vn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const z=t.get(v),L=z.envMap,R=z.envMapRotation;L&&(y.envMap.value=L,hs.copy(R),hs.x*=-1,hs.y*=-1,hs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),y.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(hs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,z,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*z,y.scale.value=L*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,z){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function b(y,v){const z=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function Wb(a,t,n,s){let o={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,L){const R=L.program;s.uniformBlockBinding(z,R)}function m(z,L){let R=o[z.id];R===void 0&&(T(z),R=g(z),o[z.id]=R,z.addEventListener("dispose",y));const O=L.program;s.updateUBOMapping(z,O);const P=t.render.frame;c[z.id]!==P&&(x(z),c[z.id]=P)}function g(z){const L=_();z.__bindingPointIndex=L;const R=a.createBuffer(),O=z.__size,P=z.usage;return a.bindBuffer(a.UNIFORM_BUFFER,R),a.bufferData(a.UNIFORM_BUFFER,O,P),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,R),R}function _(){for(let z=0;z<h;z++)if(f.indexOf(z)===-1)return f.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const L=o[z.id],R=z.uniforms,O=z.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let P=0,I=R.length;P<I;P++){const W=Array.isArray(R[P])?R[P]:[R[P]];for(let D=0,C=W.length;D<C;D++){const G=W[D];if(M(G,P,D,O)===!0){const K=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let et=0;for(let dt=0;dt<lt.length;dt++){const F=lt[dt],J=b(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,a.bufferSubData(a.UNIFORM_BUFFER,K+et,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,et),et+=J.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,K,G.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(z,L,R,O){const P=z.value,I=L+"_"+R;if(O[I]===void 0)return typeof P=="number"||typeof P=="boolean"?O[I]=P:O[I]=P.clone(),!0;{const W=O[I];if(typeof P=="number"||typeof P=="boolean"){if(W!==P)return O[I]=P,!0}else if(W.equals(P)===!1)return W.copy(P),!0}return!1}function T(z){const L=z.uniforms;let R=0;const O=16;for(let I=0,W=L.length;I<W;I++){const D=Array.isArray(L[I])?L[I]:[L[I]];for(let C=0,G=D.length;C<G;C++){const K=D[C],lt=Array.isArray(K.value)?K.value:[K.value];for(let et=0,dt=lt.length;et<dt;et++){const F=lt[et],J=b(F),Y=R%O,St=Y%J.boundary,N=Y+St;R+=St,N!==0&&O-N<J.storage&&(R+=O-N),K.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=R,R+=J.storage}}}const P=R%O;return P>0&&(R+=O-P),z.__size=R,z.__cache={},this}function b(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),L}function y(z){const L=z.target;L.removeEventListener("dispose",y);const R=f.indexOf(L.__bindingPointIndex);f.splice(R,1),a.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function v(){for(const z in o)a.deleteBuffer(o[z]);f=[],o={},c={}}return{bind:p,update:m,dispose:v}}class qb{constructor(t={}){const{canvas:n=AS(),context:s=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const T=new Uint32Array(4),b=new Int32Array(4);let y=null,v=null;const z=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let O=!1;this._outputColorSpace=li;let P=0,I=0,W=null,D=-1,C=null;const G=new $e,K=new $e;let lt=null;const et=new we(0);let dt=0,F=n.width,J=n.height,Y=1,St=null,N=null;const nt=new $e(0,0,F,J),xt=new $e(0,0,F,J);let yt=!1;const Ut=new iv;let Ht=!1,at=!1;const gt=new ln,Mt=new ct,Zt=new $e,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function je(){return W===null?Y:1}let H=s;function Ce(w,j){return n.getContext(w,j)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Td}`),n.addEventListener("webglcontextlost",Ct,!1),n.addEventListener("webglcontextrestored",Ft,!1),n.addEventListener("webglcontextcreationerror",Tt,!1),H===null){const j="webgl2";if(H=Ce(j,w),H===null)throw Ce(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let se,$t,zt,ye,Gt,re,He,Ge,U,S,V,$,ft,st,wt,Rt,Bt,kt,Et,Nt,Kt,Wt,Dt,oe;function X(){se=new nT(H),se.init(),Wt=new Bb(H,se),$t=new ZE(H,se,t,Wt),zt=new zb(H,se),$t.reversedDepthBuffer&&x&&zt.buffers.depth.setReversed(!0),ye=new sT(H),Gt=new Eb,re=new Fb(H,se,zt,Gt,$t,Wt,ye),He=new QE(R),Ge=new eT(R),U=new fy(H),Dt=new YE(H,U),S=new iT(H,U,ye,Dt),V=new oT(H,S,U,ye),Et=new rT(H,$t,re),Rt=new KE(Gt),$=new Mb(R,He,Ge,se,$t,Dt,Rt),ft=new Xb(R,Gt),st=new bb,wt=new Ub(se),kt=new qE(R,He,Ge,zt,V,M,p),Bt=new Ob(R,V,$t),oe=new Wb(H,ye,$t,zt),Nt=new jE(H,se,ye),Kt=new aT(H,se,ye),ye.programs=$.programs,R.capabilities=$t,R.extensions=se,R.properties=Gt,R.renderLists=st,R.shadowMap=Bt,R.state=zt,R.info=ye}X();const At=new Vb(R,H);this.xr=At,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(F,J,!1))},this.getSize=function(w){return w.set(F,J)},this.setSize=function(w,j,ut=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,J=j,n.width=Math.floor(w*Y),n.height=Math.floor(j*Y),ut===!0&&(n.style.width=w+"px",n.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(F*Y,J*Y).floor()},this.setDrawingBufferSize=function(w,j,ut){F=w,J=j,Y=ut,n.width=Math.floor(w*ut),n.height=Math.floor(j*ut),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,j,ut,ht){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,j,ut,ht),zt.viewport(G.copy(nt).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(xt)},this.setScissor=function(w,j,ut,ht){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,j,ut,ht),zt.scissor(K.copy(xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(w){zt.setScissorTest(yt=w)},this.setOpaqueSort=function(w){St=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,ut=!0){let ht=0;if(w){let Q=!1;if(W!==null){const bt=W.texture.format;Q=bt===Dd||bt===Cd||bt===wd}if(Q){const bt=W.texture.type,Lt=bt===aa||bt===Ss||bt===Lo||bt===No||bt===Ad||bt===Rd,It=kt.getClearColor(),Ot=kt.getClearAlpha(),Jt=It.r,ee=It.g,Yt=It.b;Lt?(T[0]=Jt,T[1]=ee,T[2]=Yt,T[3]=Ot,H.clearBufferuiv(H.COLOR,0,T)):(b[0]=Jt,b[1]=ee,b[2]=Yt,b[3]=Ot,H.clearBufferiv(H.COLOR,0,b))}else ht|=H.COLOR_BUFFER_BIT}j&&(ht|=H.DEPTH_BUFFER_BIT),ut&&(ht|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ct,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",Tt,!1),kt.dispose(),st.dispose(),wt.dispose(),Gt.dispose(),He.dispose(),Ge.dispose(),V.dispose(),Dt.dispose(),oe.dispose(),$.dispose(),At.dispose(),At.removeEventListener("sessionstart",cn),At.removeEventListener("sessionend",un),Ze.stop()};function Ct(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const w=ye.autoReset,j=Bt.enabled,ut=Bt.autoUpdate,ht=Bt.needsUpdate,Q=Bt.type;X(),ye.autoReset=w,Bt.enabled=j,Bt.autoUpdate=ut,Bt.needsUpdate=ht,Bt.type=Q}function Tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function vt(w){const j=w.target;j.removeEventListener("dispose",vt),Xt(j)}function Xt(w){ae(w),Gt.remove(w)}function ae(w){const j=Gt.get(w).programs;j!==void 0&&(j.forEach(function(ut){$.releaseProgram(ut)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,ut,ht,Q,bt){j===null&&(j=qt);const Lt=Q.isMesh&&Q.matrixWorld.determinant()<0,It=la(w,j,ut,ht,Q);zt.setMaterial(ht,Lt);let Ot=ut.index,Jt=1;if(ht.wireframe===!0){if(Ot=S.getWireframeAttribute(ut),Ot===void 0)return;Jt=2}const ee=ut.drawRange,Yt=ut.attributes.position;let he=ee.start*Jt,Te=(ee.start+ee.count)*Jt;bt!==null&&(he=Math.max(he,bt.start*Jt),Te=Math.min(Te,(bt.start+bt.count)*Jt)),Ot!==null?(he=Math.max(he,0),Te=Math.min(Te,Ot.count)):Yt!=null&&(he=Math.max(he,0),Te=Math.min(Te,Yt.count));const Xe=Te-he;if(Xe<0||Xe===1/0)return;Dt.setup(Q,ht,It,ut,Ot);let Ne,de=Nt;if(Ot!==null&&(Ne=U.get(Ot),de=Kt,de.setIndex(Ne)),Q.isMesh)ht.wireframe===!0?(zt.setLineWidth(ht.wireframeLinewidth*je()),de.setMode(H.LINES)):de.setMode(H.TRIANGLES);else if(Q.isLine){let Qt=ht.linewidth;Qt===void 0&&(Qt=1),zt.setLineWidth(Qt*je()),Q.isLineSegments?de.setMode(H.LINES):Q.isLineLoop?de.setMode(H.LINE_LOOP):de.setMode(H.LINE_STRIP)}else Q.isPoints?de.setMode(H.POINTS):Q.isSprite&&de.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)zo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))de.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qt=Q._multiDrawStarts,ke=Q._multiDrawCounts,_e=Q._multiDrawCount,Tn=Ot?U.get(Ot).bytesPerElement:1,hi=Gt.get(ht).currentProgram.getUniforms();for(let Dn=0;Dn<_e;Dn++)hi.setValue(H,"_gl_DrawID",Dn),de.render(Qt[Dn]/Tn,ke[Dn])}else if(Q.isInstancedMesh)de.renderInstances(he,Xe,Q.count);else if(ut.isInstancedBufferGeometry){const Qt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,ke=Math.min(ut.instanceCount,Qt);de.renderInstances(he,Xe,ke)}else de.render(he,Xe)};function De(w,j,ut){w.transparent===!0&&w.side===ea&&w.forceSinglePass===!1?(w.side=Vn,w.needsUpdate=!0,bi(w,j,ut),w.side=Va,w.needsUpdate=!0,bi(w,j,ut),w.side=ea):bi(w,j,ut)}this.compile=function(w,j,ut=null){ut===null&&(ut=w),v=wt.get(ut),v.init(j),L.push(v),ut.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),w!==ut&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),v.setupLights();const ht=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const bt=Q.material;if(bt)if(Array.isArray(bt))for(let Lt=0;Lt<bt.length;Lt++){const It=bt[Lt];De(It,ut,Q),ht.add(It)}else De(bt,ut,Q),ht.add(bt)}),v=L.pop(),ht},this.compileAsync=function(w,j,ut=null){const ht=this.compile(w,j,ut);return new Promise(Q=>{function bt(){if(ht.forEach(function(Lt){Gt.get(Lt).currentProgram.isReady()&&ht.delete(Lt)}),ht.size===0){Q(w);return}setTimeout(bt,10)}se.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Ee=null;function fi(w){Ee&&Ee(w)}function cn(){Ze.stop()}function un(){Ze.start()}const Ze=new rv;Ze.setAnimationLoop(fi),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(w){Ee=w,At.setAnimationLoop(w),w===null?Ze.stop():Ze.start()},At.addEventListener("sessionstart",cn),At.addEventListener("sessionend",un),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(j),j=At.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,j,W),v=wt.get(w,L.length),v.init(j),L.push(v),gt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ut.setFromProjectionMatrix(gt,Ni,j.reversedDepth),at=this.localClippingEnabled,Ht=Rt.init(this.clippingPlanes,at),y=st.get(w,z.length),y.init(),z.push(y),At.enabled===!0&&At.isPresenting===!0){const bt=R.xr.getDepthSensingMesh();bt!==null&&Ti(bt,j,-1/0,R.sortObjects)}Ti(w,j,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(St,N),ce=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,ce&&kt.addToRenderList(y,w),this.info.render.frame++,Ht===!0&&Rt.beginShadows();const ut=v.state.shadowsArray;Bt.render(ut,w,j),Ht===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=y.opaque,Q=y.transmissive;if(v.setupLights(),j.isArrayCamera){const bt=j.cameras;if(Q.length>0)for(let Lt=0,It=bt.length;Lt<It;Lt++){const Ot=bt[Lt];Vo(ht,Q,w,Ot)}ce&&kt.render(w);for(let Lt=0,It=bt.length;Lt<It;Lt++){const Ot=bt[Lt];Ms(y,w,Ot,Ot.viewport)}}else Q.length>0&&Vo(ht,Q,w,j),ce&&kt.render(w),Ms(y,w,j);W!==null&&I===0&&(re.updateMultisampleRenderTarget(W),re.updateRenderTargetMipmap(W)),w.isScene===!0&&w.onAfterRender(R,w,j),Dt.resetDefaultState(),D=-1,C=null,L.pop(),L.length>0?(v=L[L.length-1],Ht===!0&&Rt.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,z.pop(),z.length>0?y=z[z.length-1]:y=null};function Ti(w,j,ut,ht){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)ut=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ut.intersectsSprite(w)){ht&&Zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(gt);const Lt=V.update(w),It=w.material;It.visible&&y.push(w,Lt,It,ut,Zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ut.intersectsObject(w))){const Lt=V.update(w),It=w.material;if(ht&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Zt.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Zt.copy(Lt.boundingSphere.center)),Zt.applyMatrix4(w.matrixWorld).applyMatrix4(gt)),Array.isArray(It)){const Ot=Lt.groups;for(let Jt=0,ee=Ot.length;Jt<ee;Jt++){const Yt=Ot[Jt],he=It[Yt.materialIndex];he&&he.visible&&y.push(w,Lt,he,ut,Zt.z,Yt)}}else It.visible&&y.push(w,Lt,It,ut,Zt.z,null)}}const bt=w.children;for(let Lt=0,It=bt.length;Lt<It;Lt++)Ti(bt[Lt],j,ut,ht)}function Ms(w,j,ut,ht){const Q=w.opaque,bt=w.transmissive,Lt=w.transparent;v.setupLightsView(ut),Ht===!0&&Rt.setGlobalState(R.clippingPlanes,ut),ht&&zt.viewport(G.copy(ht)),Q.length>0&&Es(Q,j,ut),bt.length>0&&Es(bt,j,ut),Lt.length>0&&Es(Lt,j,ut),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function Vo(w,j,ut,ht){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ht.id]===void 0&&(v.state.transmissionRenderTarget[ht.id]=new ka(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?br:aa,minFilter:_s,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const bt=v.state.transmissionRenderTarget[ht.id],Lt=ht.viewport||G;bt.setSize(Lt.z*R.transmissionResolutionScale,Lt.w*R.transmissionResolutionScale);const It=R.getRenderTarget(),Ot=R.getActiveCubeFace(),Jt=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(et),dt=R.getClearAlpha(),dt<1&&R.setClearColor(16777215,.5),R.clear(),ce&&kt.render(ut);const ee=R.toneMapping;R.toneMapping=Ha;const Yt=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),v.setupLightsView(ht),Ht===!0&&Rt.setGlobalState(R.clippingPlanes,ht),Es(w,ut,ht),re.updateMultisampleRenderTarget(bt),re.updateRenderTargetMipmap(bt),se.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Te=0,Xe=j.length;Te<Xe;Te++){const Ne=j[Te],de=Ne.object,Qt=Ne.geometry,ke=Ne.material,_e=Ne.group;if(ke.side===ea&&de.layers.test(ht.layers)){const Tn=ke.side;ke.side=Vn,ke.needsUpdate=!0,wr(de,ut,ht,Qt,ke,_e),ke.side=Tn,ke.needsUpdate=!0,he=!0}}he===!0&&(re.updateMultisampleRenderTarget(bt),re.updateRenderTargetMipmap(bt))}R.setRenderTarget(It,Ot,Jt),R.setClearColor(et,dt),Yt!==void 0&&(ht.viewport=Yt),R.toneMapping=ee}function Es(w,j,ut){const ht=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,bt=w.length;Q<bt;Q++){const Lt=w[Q],It=Lt.object,Ot=Lt.geometry,Jt=Lt.group;let ee=Lt.material;ee.allowOverride===!0&&ht!==null&&(ee=ht),It.layers.test(ut.layers)&&wr(It,j,ut,Ot,ee,Jt)}}function wr(w,j,ut,ht,Q,bt){w.onBeforeRender(R,j,ut,ht,Q,bt),w.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(R,j,ut,ht,w,bt),Q.transparent===!0&&Q.side===ea&&Q.forceSinglePass===!1?(Q.side=Vn,Q.needsUpdate=!0,R.renderBufferDirect(ut,j,ht,Q,w,bt),Q.side=Va,Q.needsUpdate=!0,R.renderBufferDirect(ut,j,ht,Q,w,bt),Q.side=ea):R.renderBufferDirect(ut,j,ht,Q,w,bt),w.onAfterRender(R,j,ut,ht,Q,bt)}function bi(w,j,ut){j.isScene!==!0&&(j=qt);const ht=Gt.get(w),Q=v.state.lights,bt=v.state.shadowsArray,Lt=Q.state.version,It=$.getParameters(w,Q.state,bt,j,ut),Ot=$.getProgramCacheKey(It);let Jt=ht.programs;ht.environment=w.isMeshStandardMaterial?j.environment:null,ht.fog=j.fog,ht.envMap=(w.isMeshStandardMaterial?Ge:He).get(w.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,Jt===void 0&&(w.addEventListener("dispose",vt),Jt=new Map,ht.programs=Jt);let ee=Jt.get(Ot);if(ee!==void 0){if(ht.currentProgram===ee&&ht.lightsStateVersion===Lt)return Oi(w,It),ee}else It.uniforms=$.getUniforms(w),w.onBeforeCompile(It,R),ee=$.acquireProgram(It,Ot),Jt.set(Ot,ee),ht.uniforms=It.uniforms;const Yt=ht.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Yt.clippingPlanes=Rt.uniform),Oi(w,It),ht.needsLights=ca(w),ht.lightsStateVersion=Lt,ht.needsLights&&(Yt.ambientLightColor.value=Q.state.ambient,Yt.lightProbe.value=Q.state.probe,Yt.directionalLights.value=Q.state.directional,Yt.directionalLightShadows.value=Q.state.directionalShadow,Yt.spotLights.value=Q.state.spot,Yt.spotLightShadows.value=Q.state.spotShadow,Yt.rectAreaLights.value=Q.state.rectArea,Yt.ltc_1.value=Q.state.rectAreaLTC1,Yt.ltc_2.value=Q.state.rectAreaLTC2,Yt.pointLights.value=Q.state.point,Yt.pointLightShadows.value=Q.state.pointShadow,Yt.hemisphereLights.value=Q.state.hemi,Yt.directionalShadowMap.value=Q.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Yt.spotShadowMap.value=Q.state.spotShadowMap,Yt.spotLightMatrix.value=Q.state.spotLightMatrix,Yt.spotLightMap.value=Q.state.spotLightMap,Yt.pointShadowMap.value=Q.state.pointShadowMap,Yt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ht.currentProgram=ee,ht.uniformsList=null,ee}function Ts(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Rc.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Oi(w,j){const ut=Gt.get(w);ut.outputColorSpace=j.outputColorSpace,ut.batching=j.batching,ut.batchingColor=j.batchingColor,ut.instancing=j.instancing,ut.instancingColor=j.instancingColor,ut.instancingMorph=j.instancingMorph,ut.skinning=j.skinning,ut.morphTargets=j.morphTargets,ut.morphNormals=j.morphNormals,ut.morphColors=j.morphColors,ut.morphTargetsCount=j.morphTargetsCount,ut.numClippingPlanes=j.numClippingPlanes,ut.numIntersection=j.numClipIntersection,ut.vertexAlphas=j.vertexAlphas,ut.vertexTangents=j.vertexTangents,ut.toneMapping=j.toneMapping}function la(w,j,ut,ht,Q){j.isScene!==!0&&(j=qt),re.resetTextureUnits();const bt=j.fog,Lt=ht.isMeshStandardMaterial?j.environment:null,It=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Er,Ot=(ht.isMeshStandardMaterial?Ge:He).get(ht.envMap||Lt),Jt=ht.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ee=!!ut.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Yt=!!ut.morphAttributes.position,he=!!ut.morphAttributes.normal,Te=!!ut.morphAttributes.color;let Xe=Ha;ht.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xe=R.toneMapping);const Ne=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,de=Ne!==void 0?Ne.length:0,Qt=Gt.get(ht),ke=v.state.lights;if(Ht===!0&&(at===!0||w!==C)){const Ke=w===C&&ht.id===D;Rt.setState(ht,w,Ke)}let _e=!1;ht.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==ke.state.version||Qt.outputColorSpace!==It||Q.isBatchedMesh&&Qt.batching===!1||!Q.isBatchedMesh&&Qt.batching===!0||Q.isBatchedMesh&&Qt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qt.instancing===!1||!Q.isInstancedMesh&&Qt.instancing===!0||Q.isSkinnedMesh&&Qt.skinning===!1||!Q.isSkinnedMesh&&Qt.skinning===!0||Q.isInstancedMesh&&Qt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qt.instancingMorph===!1&&Q.morphTexture!==null||Qt.envMap!==Ot||ht.fog===!0&&Qt.fog!==bt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Rt.numPlanes||Qt.numIntersection!==Rt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==ee||Qt.morphTargets!==Yt||Qt.morphNormals!==he||Qt.morphColors!==Te||Qt.toneMapping!==Xe||Qt.morphTargetsCount!==de)&&(_e=!0):(_e=!0,Qt.__version=ht.version);let Tn=Qt.currentProgram;_e===!0&&(Tn=bi(ht,j,Q));let hi=!1,Dn=!1,mn=!1;const Be=Tn.getUniforms(),Un=Qt.uniforms;if(zt.useProgram(Tn.program)&&(hi=!0,Dn=!0,mn=!0),ht.id!==D&&(D=ht.id,Dn=!0),hi||C!==w){zt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Be.setValue(H,"projectionMatrix",w.projectionMatrix),Be.setValue(H,"viewMatrix",w.matrixWorldInverse);const Sn=Be.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,Mt.setFromMatrixPosition(w.matrixWorld)),$t.logarithmicDepthBuffer&&Be.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Be.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Dn=!0,mn=!0)}if(Q.isSkinnedMesh){Be.setOptional(H,Q,"bindMatrix"),Be.setOptional(H,Q,"bindMatrixInverse");const Ke=Q.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Be.setValue(H,"boneTexture",Ke.boneTexture,re))}Q.isBatchedMesh&&(Be.setOptional(H,Q,"batchingTexture"),Be.setValue(H,"batchingTexture",Q._matricesTexture,re),Be.setOptional(H,Q,"batchingIdTexture"),Be.setValue(H,"batchingIdTexture",Q._indirectTexture,re),Be.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Be.setValue(H,"batchingColorTexture",Q._colorsTexture,re));const bn=ut.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Et.update(Q,ut,Tn),(Dn||Qt.receiveShadow!==Q.receiveShadow)&&(Qt.receiveShadow=Q.receiveShadow,Be.setValue(H,"receiveShadow",Q.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Un.envMap.value=Ot,Un.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&j.environment!==null&&(Un.envMapIntensity.value=j.environmentIntensity),Dn&&(Be.setValue(H,"toneMappingExposure",R.toneMappingExposure),Qt.needsLights&&Xa(Un,mn),bt&&ht.fog===!0&&ft.refreshFogUniforms(Un,bt),ft.refreshMaterialUniforms(Un,ht,Y,J,v.state.transmissionRenderTarget[w.id]),Rc.upload(H,Ts(Qt),Un,re)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Rc.upload(H,Ts(Qt),Un,re),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Be.setValue(H,"center",Q.center),Be.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Be.setValue(H,"normalMatrix",Q.normalMatrix),Be.setValue(H,"modelMatrix",Q.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const Ke=ht.uniformsGroups;for(let Sn=0,bs=Ke.length;Sn<bs;Sn++){const Pn=Ke[Sn];oe.update(Pn,Tn),oe.bind(Pn,Tn)}}return Tn}function Xa(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function ca(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,j,ut){const ht=Gt.get(w);ht.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),Gt.get(w.texture).__webglTexture=j,Gt.get(w.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:ut,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const ut=Gt.get(w);ut.__webglFramebuffer=j,ut.__useDefaultFramebuffer=j===void 0};const nn=H.createFramebuffer();this.setRenderTarget=function(w,j=0,ut=0){W=w,P=j,I=ut;let ht=!0,Q=null,bt=!1,Lt=!1;if(w){const Ot=Gt.get(w);if(Ot.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(H.FRAMEBUFFER,null),ht=!1;else if(Ot.__webglFramebuffer===void 0)re.setupRenderTarget(w);else if(Ot.__hasExternalTextures)re.rebindTextures(w,Gt.get(w.texture).__webglTexture,Gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Yt=w.depthTexture;if(Ot.__boundDepthTexture!==Yt){if(Yt!==null&&Gt.has(Yt)&&(w.width!==Yt.image.width||w.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(w)}}const Jt=w.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Lt=!0);const ee=Gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[j])?Q=ee[j][ut]:Q=ee[j],bt=!0):w.samples>0&&re.useMultisampledRTT(w)===!1?Q=Gt.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[ut]:Q=ee,G.copy(w.viewport),K.copy(w.scissor),lt=w.scissorTest}else G.copy(nt).multiplyScalar(Y).floor(),K.copy(xt).multiplyScalar(Y).floor(),lt=yt;if(ut!==0&&(Q=nn),zt.bindFramebuffer(H.FRAMEBUFFER,Q)&&ht&&zt.drawBuffers(w,Q),zt.viewport(G),zt.scissor(K),zt.setScissorTest(lt),bt){const Ot=Gt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ot.__webglTexture,ut)}else if(Lt){const Ot=j;for(let Jt=0;Jt<w.textures.length;Jt++){const ee=Gt.get(w.textures[Jt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Jt,ee.__webglTexture,ut,Ot)}}else if(w!==null&&ut!==0){const Ot=Gt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ot.__webglTexture,ut)}D=-1},this.readRenderTargetPixels=function(w,j,ut,ht,Q,bt,Lt,It=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){zt.bindFramebuffer(H.FRAMEBUFFER,Ot);try{const Jt=w.textures[It],ee=Jt.format,Yt=Jt.type;if(!$t.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-ht&&ut>=0&&ut<=w.height-Q&&(w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It),H.readPixels(j,ut,ht,Q,Wt.convert(ee),Wt.convert(Yt),bt))}finally{const Jt=W!==null?Gt.get(W).__webglFramebuffer:null;zt.bindFramebuffer(H.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(w,j,ut,ht,Q,bt,Lt,It=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(j>=0&&j<=w.width-ht&&ut>=0&&ut<=w.height-Q){zt.bindFramebuffer(H.FRAMEBUFFER,Ot);const Jt=w.textures[It],ee=Jt.format,Yt=Jt.type;if(!$t.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,he),H.bufferData(H.PIXEL_PACK_BUFFER,bt.byteLength,H.STREAM_READ),w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It),H.readPixels(j,ut,ht,Q,Wt.convert(ee),Wt.convert(Yt),0);const Te=W!==null?Gt.get(W).__webglFramebuffer:null;zt.bindFramebuffer(H.FRAMEBUFFER,Te);const Xe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await RS(H,Xe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,he),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,bt),H.deleteBuffer(he),H.deleteSync(Xe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,ut=0){const ht=Math.pow(2,-ut),Q=Math.floor(w.image.width*ht),bt=Math.floor(w.image.height*ht),Lt=j!==null?j.x:0,It=j!==null?j.y:0;re.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,ut,0,0,Lt,It,Q,bt),zt.unbindTexture()};const ko=H.createFramebuffer(),Xo=H.createFramebuffer();this.copyTextureToTexture=function(w,j,ut=null,ht=null,Q=0,bt=null){bt===null&&(Q!==0?(zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Q,Q=0):bt=0);let Lt,It,Ot,Jt,ee,Yt,he,Te,Xe;const Ne=w.isCompressedTexture?w.mipmaps[bt]:w.image;if(ut!==null)Lt=ut.max.x-ut.min.x,It=ut.max.y-ut.min.y,Ot=ut.isBox3?ut.max.z-ut.min.z:1,Jt=ut.min.x,ee=ut.min.y,Yt=ut.isBox3?ut.min.z:0;else{const bn=Math.pow(2,-Q);Lt=Math.floor(Ne.width*bn),It=Math.floor(Ne.height*bn),w.isDataArrayTexture?Ot=Ne.depth:w.isData3DTexture?Ot=Math.floor(Ne.depth*bn):Ot=1,Jt=0,ee=0,Yt=0}ht!==null?(he=ht.x,Te=ht.y,Xe=ht.z):(he=0,Te=0,Xe=0);const de=Wt.convert(j.format),Qt=Wt.convert(j.type);let ke;j.isData3DTexture?(re.setTexture3D(j,0),ke=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(re.setTexture2DArray(j,0),ke=H.TEXTURE_2D_ARRAY):(re.setTexture2D(j,0),ke=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const _e=H.getParameter(H.UNPACK_ROW_LENGTH),Tn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),hi=H.getParameter(H.UNPACK_SKIP_PIXELS),Dn=H.getParameter(H.UNPACK_SKIP_ROWS),mn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ne.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ne.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Jt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt);const Be=w.isDataArrayTexture||w.isData3DTexture,Un=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const bn=Gt.get(w),Ke=Gt.get(j),Sn=Gt.get(bn.__renderTarget),bs=Gt.get(Ke.__renderTarget);zt.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let Pn=0;Pn<Ot;Pn++)Be&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(w).__webglTexture,Q,Yt+Pn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(j).__webglTexture,bt,Xe+Pn)),H.blitFramebuffer(Jt,ee,Lt,It,he,Te,Lt,It,H.DEPTH_BUFFER_BIT,H.NEAREST);zt.bindFramebuffer(H.READ_FRAMEBUFFER,null),zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||Gt.has(w)){const bn=Gt.get(w),Ke=Gt.get(j);zt.bindFramebuffer(H.READ_FRAMEBUFFER,ko),zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xo);for(let Sn=0;Sn<Ot;Sn++)Be?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,Q,Yt+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,Q),Un?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.__webglTexture,bt,Xe+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ke.__webglTexture,bt),Q!==0?H.blitFramebuffer(Jt,ee,Lt,It,he,Te,Lt,It,H.COLOR_BUFFER_BIT,H.NEAREST):Un?H.copyTexSubImage3D(ke,bt,he,Te,Xe+Sn,Jt,ee,Lt,It):H.copyTexSubImage2D(ke,bt,he,Te,Jt,ee,Lt,It);zt.bindFramebuffer(H.READ_FRAMEBUFFER,null),zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Un?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(ke,bt,he,Te,Xe,Lt,It,Ot,de,Qt,Ne.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(ke,bt,he,Te,Xe,Lt,It,Ot,de,Ne.data):H.texSubImage3D(ke,bt,he,Te,Xe,Lt,It,Ot,de,Qt,Ne):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,bt,he,Te,Lt,It,de,Qt,Ne.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,bt,he,Te,Ne.width,Ne.height,de,Ne.data):H.texSubImage2D(H.TEXTURE_2D,bt,he,Te,Lt,It,de,Qt,Ne);H.pixelStorei(H.UNPACK_ROW_LENGTH,_e),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,hi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Dn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,mn),bt===0&&j.generateMipmaps&&H.generateMipmap(ke),zt.unbindTexture()},this.initRenderTarget=function(w){Gt.get(w).__webglFramebuffer===void 0&&re.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?re.setTextureCube(w,0):w.isData3DTexture?re.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?re.setTexture2DArray(w,0):re.setTexture2D(w,0),zt.unbindTexture()},this.resetState=function(){P=0,I=0,W=null,zt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}function Yb({mouseForce:a=20,cursorSize:t=100,isViscous:n=!1,viscous:s=30,iterationsViscous:o=32,iterationsPoisson:c=32,dt:f=.014,BFECC:h=!0,resolution:p=.5,isBounce:m=!1,colors:g=["#5227FF","#FF9FFC","#B19EEF"],style:_={},className:x="",autoDemo:M=!0,autoSpeed:T=.5,autoIntensity:b=2.2,takeoverDuration:y=.25,autoResumeDelay:v=1e3,autoRampDuration:z=.6}){const L=On.useRef(null),R=On.useRef(null),O=On.useRef(null),P=On.useRef(null),I=On.useRef(null),W=On.useRef(!0),D=On.useRef(null);return On.useEffect(()=>{if(!L.current)return;function C(U){let S;Array.isArray(U)&&U.length>0?U.length===1?S=[U[0],U[0]]:S=U:S=["#ffffff","#ffffff"];const V=S.length,$=new Uint8Array(V*4);for(let st=0;st<V;st++){const wt=new we(S[st]);$[st*4+0]=Math.round(wt.r*255),$[st*4+1]=Math.round(wt.g*255),$[st*4+2]=Math.round(wt.b*255),$[st*4+3]=255}const ft=new JS($,V,1,ci);return ft.magFilter=Gn,ft.minFilter=Gn,ft.wrapS=yi,ft.wrapT=yi,ft.generateMipmaps=!1,ft.needsUpdate=!0,ft}const G=C(g),K=new $e(0,0,0,0);class lt{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(S){this.container=S,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new qb({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new we(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new cy,this.clock.start()}resize(){if(!this.container)return;const S=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(S.width)),this.height=Math.max(1,Math.floor(S.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const et=new lt;class dt{constructor(){this.mouseMoved=!1,this.coords=new le,this.coords_old=new le,this.diff=new le,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new le,this.takeoverTo=new le,this.onInteract=null}init(S){this.container=S,S.addEventListener("mousemove",this._onMouseMove,!1),S.addEventListener("touchstart",this._onTouchStart,!1),S.addEventListener("touchmove",this._onTouchMove,!1),S.addEventListener("mouseenter",this._onMouseEnter,!1),S.addEventListener("mouseleave",this._onMouseLeave,!1),S.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(S,V){if(!this.container)return;this.timer&&clearTimeout(this.timer);const $=this.container.getBoundingClientRect(),ft=(S-$.left)/$.width,st=(V-$.top)/$.height;this.coords.set(ft*2-1,-(st*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(S,V){this.coords.set(S,V),this.mouseMoved=!0}onDocumentMouseMove(S){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const V=this.container.getBoundingClientRect(),$=(S.clientX-V.left)/V.width,ft=(S.clientY-V.top)/V.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set($*2-1,-(ft*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(S.clientX,S.clientY),this.hasUserControl=!0}onDocumentTouchStart(S){if(S.touches.length===1){const V=S.touches[0];this.onInteract&&this.onInteract(),this.setCoords(V.pageX,V.pageY),this.hasUserControl=!0}}onDocumentTouchMove(S){if(S.touches.length===1){const V=S.touches[0];this.onInteract&&this.onInteract(),this.setCoords(V.pageX,V.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const S=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(S>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const V=S*S*(3-2*S);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,V)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const F=new dt;class J{constructor(S,V,$){this.mouse=S,this.manager=V,this.enabled=$.enabled,this.speed=$.speed,this.resumeDelay=$.resumeDelay||3e3,this.rampDurationMs=($.rampDuration||0)*1e3,this.active=!1,this.current=new le(0,0),this.target=new le,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new le,this.pickNewTarget()}pickNewTarget(){const S=Math.random;this.target.set((S()*2-1)*(1-this.margin),(S()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const S=performance.now();if(S-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=S,this.activationTime=S),!this.active)return;this.mouse.isAutoActive=!0;let $=(S-this.lastTime)/1e3;this.lastTime=S,$>.2&&($=.016);const ft=this._tmpDir.subVectors(this.target,this.current),st=ft.length();if(st<.01){this.pickNewTarget();return}ft.normalize();let wt=1;if(this.rampDurationMs>0){const kt=Math.min(1,(S-this.activationTime)/this.rampDurationMs);wt=kt*kt*(3-2*kt)}const Rt=this.speed*$*wt,Bt=Math.min(Rt,st);this.current.addScaledVector(ft,Bt),this.mouse.setNormalized(this.current.x,this.current.y)}}const Y=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,St=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,N=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,nt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,xt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,yt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Ut=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ht=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,at=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,gt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Mt{constructor(S){this.props=S||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new I0,this.camera=new Uc,this.uniforms&&(this.material=new vc(this.props.material),this.geometry=new xs(2,2),this.plane=new ui(this.geometry,this.material),this.scene.add(this.plane))}update(){et.renderer.setRenderTarget(this.props.output||null),et.renderer.render(this.scene,this.camera),et.renderer.setRenderTarget(null)}}class Zt extends Mt{constructor(S){super({material:{vertexShader:Y,fragmentShader:nt,uniforms:{boundarySpace:{value:S.cellScale},px:{value:S.cellScale},fboSize:{value:S.fboSize},velocity:{value:S.src.texture},dt:{value:S.dt},isBFECC:{value:!0}}},output:S.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const S=new ra,V=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);S.setAttribute("position",new Mi(V,3));const $=new vc({vertexShader:St,fragmentShader:nt,uniforms:this.uniforms});this.line=new ay(S,$),this.scene.add(this.line)}update({dt:S,isBounce:V,BFECC:$}){this.uniforms.dt.value=S,this.line.visible=V,this.uniforms.isBFECC.value=$,super.update()}}class qt extends Mt{constructor(S){super({output:S.dst}),this.init(S)}init(S){super.init();const V=new xs(1,1),$=new vc({vertexShader:N,fragmentShader:Ut,blending:Uh,depthWrite:!1,uniforms:{px:{value:S.cellScale},force:{value:new le(0,0)},center:{value:new le(0,0)},scale:{value:new le(S.cursor_size,S.cursor_size)}}});this.mouse=new ui(V,$),this.scene.add(this.mouse)}update(S){const V=F.diff.x/2*S.mouse_force,$=F.diff.y/2*S.mouse_force,ft=S.cursor_size*S.cellScale.x,st=S.cursor_size*S.cellScale.y,wt=Math.min(Math.max(F.coords.x,-1+ft+S.cellScale.x*2),1-ft-S.cellScale.x*2),Rt=Math.min(Math.max(F.coords.y,-1+st+S.cellScale.y*2),1-st-S.cellScale.y*2),Bt=this.mouse.material.uniforms;Bt.force.value.set(V,$),Bt.center.value.set(wt,Rt),Bt.scale.value.set(S.cursor_size,S.cursor_size),super.update()}}class ce extends Mt{constructor(S){super({material:{vertexShader:Y,fragmentShader:gt,uniforms:{boundarySpace:{value:S.boundarySpace},velocity:{value:S.src.texture},velocity_new:{value:S.dst_.texture},v:{value:S.viscous},px:{value:S.cellScale},dt:{value:S.dt}}},output:S.dst,output0:S.dst_,output1:S.dst}),this.init()}update({viscous:S,iterations:V,dt:$}){let ft,st;this.uniforms.v.value=S;for(let wt=0;wt<V;wt++)wt%2===0?(ft=this.props.output0,st=this.props.output1):(ft=this.props.output1,st=this.props.output0),this.uniforms.velocity_new.value=ft.texture,this.props.output=st,this.uniforms.dt.value=$,super.update();return st}}class je extends Mt{constructor(S){super({material:{vertexShader:Y,fragmentShader:yt,uniforms:{boundarySpace:{value:S.boundarySpace},velocity:{value:S.src.texture},px:{value:S.cellScale},dt:{value:S.dt}}},output:S.dst}),this.init()}update({vel:S}){this.uniforms.velocity.value=S.texture,super.update()}}class H extends Mt{constructor(S){super({material:{vertexShader:Y,fragmentShader:Ht,uniforms:{boundarySpace:{value:S.boundarySpace},pressure:{value:S.dst_.texture},divergence:{value:S.src.texture},px:{value:S.cellScale}}},output:S.dst,output0:S.dst_,output1:S.dst}),this.init()}update({iterations:S}){let V,$;for(let ft=0;ft<S;ft++)ft%2===0?(V=this.props.output0,$=this.props.output1):(V=this.props.output1,$=this.props.output0),this.uniforms.pressure.value=V.texture,this.props.output=$,super.update();return $}}class Ce extends Mt{constructor(S){super({material:{vertexShader:Y,fragmentShader:at,uniforms:{boundarySpace:{value:S.boundarySpace},pressure:{value:S.src_p.texture},velocity:{value:S.src_v.texture},px:{value:S.cellScale},dt:{value:S.dt}}},output:S.dst}),this.init()}update({vel:S,pressure:V}){this.uniforms.velocity.value=S.texture,this.uniforms.pressure.value=V.texture,super.update()}}class se{constructor(S){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...S},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new le,this.cellScale=new le,this.boundarySpace=new le,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?br:Li}createAllFBO(){const V={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Gn,magFilter:Gn,wrapS:yi,wrapT:yi};for(let $ in this.fbos)this.fbos[$]=new ka(this.fboSize.x,this.fboSize.y,V)}createShaderPass(){this.advection=new Zt({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new qt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ce({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new je({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new H({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Ce({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const S=Math.max(1,Math.round(this.options.resolution*et.width)),V=Math.max(1,Math.round(this.options.resolution*et.height)),$=1/S,ft=1/V;this.cellScale.set($,ft),this.fboSize.set(S,V)}resize(){this.calcSize();for(let S in this.fbos)this.fbos[S].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let S=this.fbos.vel_1;this.options.isViscous&&(S=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:S});const V=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:S,pressure:V})}}class $t{constructor(){this.init()}init(){this.simulation=new se,this.scene=new I0,this.camera=new Uc,this.output=new ui(new xs(2,2),new vc({vertexShader:Y,fragmentShader:xt,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new le},palette:{value:G},bgColor:{value:K}}})),this.scene.add(this.output)}addScene(S){this.scene.add(S)}resize(){this.simulation.resize()}render(){et.renderer.setRenderTarget(null),et.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class zt{constructor(S){this.props=S,et.init(S.$wrapper),F.init(S.$wrapper),F.autoIntensity=S.autoIntensity,F.takeoverDuration=S.takeoverDuration,this.lastUserInteraction=performance.now(),F.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new J(F,this,{enabled:S.autoDemo,speed:S.autoSpeed,resumeDelay:S.autoResumeDelay,rampDuration:S.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():W.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(et.renderer.domElement),this.output=new $t}resize(){et.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),F.update(),et.update(),this.output.update()}loop(){this.running&&(this.render(),P.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,P.current&&(cancelAnimationFrame(P.current),P.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),F.dispose(),et.renderer){const S=et.renderer.domElement;S&&S.parentNode&&S.parentNode.removeChild(S),et.renderer.dispose()}}catch{}}}const ye=L.current;ye.style.position=ye.style.position||"relative",ye.style.overflow=ye.style.overflow||"hidden";const Gt=new zt({$wrapper:ye,autoDemo:M,autoSpeed:T,autoIntensity:b,takeoverDuration:y,autoResumeDelay:v,autoRampDuration:z});R.current=Gt,(()=>{if(!R.current)return;const U=R.current.output?.simulation;if(!U)return;const S=U.options.resolution;Object.assign(U.options,{mouse_force:a,cursor_size:t,isViscous:n,viscous:s,iterations_viscous:o,iterations_poisson:c,dt:f,BFECC:h,resolution:p,isBounce:m}),p!==S&&U.resize()})(),Gt.start();const He=new IntersectionObserver(U=>{const S=U[0],V=S.isIntersecting&&S.intersectionRatio>0;W.current=V,R.current&&(V&&!document.hidden?R.current.start():R.current.pause())},{threshold:[0,.01,.1]});He.observe(ye),I.current=He;const Ge=new ResizeObserver(()=>{R.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{R.current&&R.current.resize()}))});return Ge.observe(ye),O.current=Ge,()=>{if(P.current&&cancelAnimationFrame(P.current),O.current)try{O.current.disconnect()}catch{}if(I.current)try{I.current.disconnect()}catch{}R.current&&R.current.dispose(),R.current=null}},[h,t,f,m,n,c,o,a,p,s,g,M,T,b,y,v,z]),On.useEffect(()=>{const C=R.current;if(!C)return;const G=C.output?.simulation;if(!G)return;const K=G.options.resolution;Object.assign(G.options,{mouse_force:a,cursor_size:t,isViscous:n,viscous:s,iterations_viscous:o,iterations_poisson:c,dt:f,BFECC:h,resolution:p,isBounce:m}),C.autoDriver&&(C.autoDriver.enabled=M,C.autoDriver.speed=T,C.autoDriver.resumeDelay=v,C.autoDriver.rampDurationMs=z*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=b,C.autoDriver.mouse.takeoverDuration=y)),p!==K&&G.resize()},[a,t,n,s,o,c,f,h,p,m,M,T,b,y,v,z]),q.jsx("div",{ref:L,className:`liquid-ether-container ${x||""}`,style:_})}const jb=()=>q.jsx(q.Fragment,{children:q.jsxs("div",{id:"home",style:{position:"relative",overflow:"hidden"},children:[q.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:q.jsx(Yb,{colors:["#1e1b4b","#221f16ff","#292450ff"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),q.jsxs("div",{className:"hero-content",style:{position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[q.jsxs("div",{className:"hero-text",style:{flex:1,paddingRight:"20px"},children:[q.jsx("h1",{children:"Codevnium"}),q.jsx("p",{children:"Codevnium is where creativity meets code. We bring your ideas to life through bold design, smart functionality, and a touch of innovation."}),q.jsx("p",{className:"sub-hero",children:"Let’s craft your online presence together — fast, modern, and built to impress."})]}),q.jsx("div",{className:"hero-logo",style:{flex:1,textAlign:"center"},children:q.jsxs("svg",{width:"400",height:"140",viewBox:"0 0 450 140",xmlns:"http://www.w3.org/2000/svg",className:"codevnium-logo",children:[q.jsx("rect",{width:"450",height:"140",fill:"transparent"}),q.jsxs("g",{fill:"none",stroke:"var(--accent-primary)",strokeWidth:"6",strokeLinecap:"round",children:[q.jsx("circle",{cx:"70",cy:"70",r:"40",opacity:"0.15"}),q.jsx("path",{d:"M90,45 A30,30 0 1,0 90,95",stroke:"var(--accent-secondary)"}),q.jsx("circle",{cx:"70",cy:"70",r:"4",fill:"var(--accent-tertiary)",children:q.jsx("animate",{attributeName:"r",values:"4;6;4",dur:"2s",repeatCount:"indefinite"})})]}),q.jsx("text",{x:"140",y:"80",fontFamily:"Poppins, sans-serif",fontSize:"40",fill:"var(--text-color)",fontWeight:"600",letterSpacing:"2",children:"Codevnium"}),q.jsx("line",{x1:"140",y1:"90",x2:"420",y2:"90",stroke:"var(--accent-primary)",strokeWidth:"4",strokeLinecap:"round"}),q.jsxs("circle",{cx:"140",cy:"90",r:"4",fill:"var(--accent-primary)",children:[q.jsx("animate",{attributeName:"cx",from:"140",to:"420",dur:"3s",repeatCount:"indefinite"}),q.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"3s",repeatCount:"indefinite"})]}),q.jsx("circle",{cx:"70",cy:"70",r:"55",stroke:"var(--accent-secondary)",strokeWidth:"1",opacity:"0.1",children:q.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 70 70",to:"360 70 70",dur:"10s",repeatCount:"indefinite"})})]})})]}),q.jsxs("div",{className:"btn-sec",style:{position:"relative",zIndex:1},children:[q.jsx("button",{children:"Our Services"}),q.jsx("button",{children:"Contact us!"})]})]})});function Uo(a){let t=a[0],n=a[1],s=a[2];return Math.sqrt(t*t+n*n+s*s)}function yd(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a}function Zb(a,t,n,s){return a[0]=t,a[1]=n,a[2]=s,a}function m_(a,t,n){return a[0]=t[0]+n[0],a[1]=t[1]+n[1],a[2]=t[2]+n[2],a}function g_(a,t,n){return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],a}function Kb(a,t,n){return a[0]=t[0]*n[0],a[1]=t[1]*n[1],a[2]=t[2]*n[2],a}function Qb(a,t,n){return a[0]=t[0]/n[0],a[1]=t[1]/n[1],a[2]=t[2]/n[2],a}function Ah(a,t,n){return a[0]=t[0]*n,a[1]=t[1]*n,a[2]=t[2]*n,a}function Jb(a,t){let n=t[0]-a[0],s=t[1]-a[1],o=t[2]-a[2];return Math.sqrt(n*n+s*s+o*o)}function $b(a,t){let n=t[0]-a[0],s=t[1]-a[1],o=t[2]-a[2];return n*n+s*s+o*o}function __(a){let t=a[0],n=a[1],s=a[2];return t*t+n*n+s*s}function t2(a,t){return a[0]=-t[0],a[1]=-t[1],a[2]=-t[2],a}function e2(a,t){return a[0]=1/t[0],a[1]=1/t[1],a[2]=1/t[2],a}function Md(a,t){let n=t[0],s=t[1],o=t[2],c=n*n+s*s+o*o;return c>0&&(c=1/Math.sqrt(c)),a[0]=t[0]*c,a[1]=t[1]*c,a[2]=t[2]*c,a}function fv(a,t){return a[0]*t[0]+a[1]*t[1]+a[2]*t[2]}function v_(a,t,n){let s=t[0],o=t[1],c=t[2],f=n[0],h=n[1],p=n[2];return a[0]=o*p-c*h,a[1]=c*f-s*p,a[2]=s*h-o*f,a}function n2(a,t,n,s){let o=t[0],c=t[1],f=t[2];return a[0]=o+s*(n[0]-o),a[1]=c+s*(n[1]-c),a[2]=f+s*(n[2]-f),a}function i2(a,t,n,s,o){const c=Math.exp(-s*o);let f=t[0],h=t[1],p=t[2];return a[0]=n[0]+(f-n[0])*c,a[1]=n[1]+(h-n[1])*c,a[2]=n[2]+(p-n[2])*c,a}function a2(a,t,n){let s=t[0],o=t[1],c=t[2],f=n[3]*s+n[7]*o+n[11]*c+n[15];return f=f||1,a[0]=(n[0]*s+n[4]*o+n[8]*c+n[12])/f,a[1]=(n[1]*s+n[5]*o+n[9]*c+n[13])/f,a[2]=(n[2]*s+n[6]*o+n[10]*c+n[14])/f,a}function s2(a,t,n){let s=t[0],o=t[1],c=t[2],f=n[3]*s+n[7]*o+n[11]*c+n[15];return f=f||1,a[0]=(n[0]*s+n[4]*o+n[8]*c)/f,a[1]=(n[1]*s+n[5]*o+n[9]*c)/f,a[2]=(n[2]*s+n[6]*o+n[10]*c)/f,a}function r2(a,t,n){let s=t[0],o=t[1],c=t[2];return a[0]=s*n[0]+o*n[3]+c*n[6],a[1]=s*n[1]+o*n[4]+c*n[7],a[2]=s*n[2]+o*n[5]+c*n[8],a}function o2(a,t,n){let s=t[0],o=t[1],c=t[2],f=n[0],h=n[1],p=n[2],m=n[3],g=h*c-p*o,_=p*s-f*c,x=f*o-h*s,M=h*x-p*_,T=p*g-f*x,b=f*_-h*g,y=m*2;return g*=y,_*=y,x*=y,M*=2,T*=2,b*=2,a[0]=s+g+M,a[1]=o+_+T,a[2]=c+x+b,a}const l2=(function(){const a=[0,0,0],t=[0,0,0];return function(n,s){yd(a,n),yd(t,s),Md(a,a),Md(t,t);let o=fv(a,t);return o>1?0:o<-1?Math.PI:Math.acos(o)}})();function c2(a,t){return a[0]===t[0]&&a[1]===t[1]&&a[2]===t[2]}class on extends Array{constructor(t=0,n=t,s=t){return super(t,n,s),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,n=t,s=t){return t.length?this.copy(t):(Zb(this,t,n,s),this)}copy(t){return yd(this,t),this}add(t,n){return n?m_(this,t,n):m_(this,this,t),this}sub(t,n){return n?g_(this,t,n):g_(this,this,t),this}multiply(t){return t.length?Kb(this,this,t):Ah(this,this,t),this}divide(t){return t.length?Qb(this,this,t):Ah(this,this,1/t),this}inverse(t=this){return e2(this,t),this}len(){return Uo(this)}distance(t){return t?Jb(this,t):Uo(this)}squaredLen(){return __(this)}squaredDistance(t){return t?$b(this,t):__(this)}negate(t=this){return t2(this,t),this}cross(t,n){return n?v_(this,t,n):v_(this,this,t),this}scale(t){return Ah(this,this,t),this}normalize(){return Md(this,this),this}dot(t){return fv(this,t)}equals(t){return c2(this,t)}applyMatrix3(t){return r2(this,this,t),this}applyMatrix4(t){return a2(this,this,t),this}scaleRotateMatrix4(t){return s2(this,this,t),this}applyQuaternion(t){return o2(this,this,t),this}angle(t){return l2(this,t)}lerp(t,n){return n2(this,this,t,n),this}smoothLerp(t,n,s){return i2(this,this,t,n,s),this}clone(){return new on(this[0],this[1],this[2])}fromArray(t,n=0){return this[0]=t[n],this[1]=t[n+1],this[2]=t[n+2],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t}transformDirection(t){const n=this[0],s=this[1],o=this[2];return this[0]=t[0]*n+t[4]*s+t[8]*o,this[1]=t[1]*n+t[5]*s+t[9]*o,this[2]=t[2]*n+t[6]*s+t[10]*o,this.normalize()}}const x_=new on;let u2=1,f2=1,S_=!1;class h2{constructor(t,n={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=n,this.id=u2++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let s in n)this.addAttribute(s,n[s])}addAttribute(t,n){if(this.attributes[t]=n,n.id=f2++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else t==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(t){const n=!t.buffer;n&&(t.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),n?this.gl.bufferData(t.target,t.data,t.usage):this.gl.bufferSubData(t.target,0,t.data),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((n,{name:s,type:o})=>{if(!this.attributes[s]){console.warn(`active attribute ${s} not being supplied`);return}const c=this.attributes[s];this.gl.bindBuffer(c.target,c.buffer),this.glState.boundBuffer=c.buffer;let f=1;o===35674&&(f=2),o===35675&&(f=3),o===35676&&(f=4);const h=c.size/f,p=f===1?0:f*f*4,m=f===1?0:f*4;for(let g=0;g<f;g++)this.gl.vertexAttribPointer(n+g,h,c.type,c.normalized,c.stride+p,c.offset+g*m),this.gl.enableVertexAttribArray(n+g),this.gl.renderer.vertexAttribDivisor(n+g,c.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:n=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((o,{name:c})=>{const f=this.attributes[c];f.needsUpdate&&this.updateAttribute(f)});let s=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(s=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const t=this.attributes.position;if(t.data)return t;if(!S_)return console.warn("No position buffer data found to compute bounds"),S_=!0}computeBoundingBox(t){t||(t=this.getPosition());const n=t.data,s=t.size;this.bounds||(this.bounds={min:new on,max:new on,center:new on,scale:new on,radius:1/0});const o=this.bounds.min,c=this.bounds.max,f=this.bounds.center,h=this.bounds.scale;o.set(1/0),c.set(-1/0);for(let p=0,m=n.length;p<m;p+=s){const g=n[p],_=n[p+1],x=n[p+2];o.x=Math.min(g,o.x),o.y=Math.min(_,o.y),o.z=Math.min(x,o.z),c.x=Math.max(g,c.x),c.y=Math.max(_,c.y),c.z=Math.max(x,c.z)}h.sub(c,o),f.add(o,c).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());const n=t.data,s=t.size;this.bounds||this.computeBoundingBox(t);let o=0;for(let c=0,f=n.length;c<f;c+=s)x_.fromArray(n,c),o=Math.max(o,this.bounds.center.squaredDistance(x_));this.bounds.radius=Math.sqrt(o)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}}let d2=1;const y_={};class hv{constructor(t,{vertex:n,fragment:s,uniforms:o={},transparent:c=!1,cullFace:f=t.BACK,frontFace:h=t.CCW,depthTest:p=!0,depthWrite:m=!0,depthFunc:g=t.LEQUAL}={}){t.canvas||console.error("gl not passed as first argument to Program"),this.gl=t,this.uniforms=o,this.id=d2++,n||console.warn("vertex shader not supplied"),s||console.warn("fragment shader not supplied"),this.transparent=c,this.cullFace=f,this.frontFace=h,this.depthTest=p,this.depthWrite=m,this.depthFunc=g,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=t.createShader(t.VERTEX_SHADER),this.fragmentShader=t.createShader(t.FRAGMENT_SHADER),this.program=t.createProgram(),t.attachShader(this.program,this.vertexShader),t.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:s})}setShaders({vertex:t,fragment:n}){if(t&&(this.gl.shaderSource(this.vertexShader,t),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${M_(t)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${M_(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let f=0;f<s;f++){let h=this.gl.getActiveUniform(this.program,f);this.uniformLocations.set(h,this.gl.getUniformLocation(this.program,h.name));const p=h.name.match(/(\w+)/g);h.uniformName=p[0],h.nameComponents=p.slice(1)}this.attributeLocations=new Map;const o=[],c=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let f=0;f<c;f++){const h=this.gl.getActiveAttrib(this.program,f),p=this.gl.getAttribLocation(this.program,h.name);p!==-1&&(o[p]=h.name,this.attributeLocations.set(h,p))}this.attributeOrder=o.join("")}setBlendFunc(t,n,s,o){this.blendFunc.src=t,this.blendFunc.dst=n,this.blendFunc.srcAlpha=s,this.blendFunc.dstAlpha=o,t&&(this.transparent=!0)}setBlendEquation(t,n){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=n}setStencilFunc(t,n,s){this.stencilRef=n,this.stencilFunc.func=t,this.stencilFunc.ref=n,this.stencilFunc.mask=s}setStencilOp(t,n,s){this.stencilOp.stencilFail=t,this.stencilOp.depthFail=n,this.stencilOp.depthPass=s}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:t=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((o,c)=>{let f=this.uniforms[c.uniformName];for(const h of c.nameComponents){if(!f)break;if(h in f)f=f[h];else{if(Array.isArray(f.value))break;f=void 0;break}}if(!f)return E_(`Active uniform ${c.name} has not been supplied`);if(f&&f.value===void 0)return E_(`${c.name} uniform is missing a value parameter`);if(f.value.texture)return n=n+1,f.value.update(n),Rh(this.gl,c.type,o,n);if(f.value.length&&f.value[0].texture){const h=[];return f.value.forEach(p=>{n=n+1,p.update(n),h.push(n)}),Rh(this.gl,c.type,o,h)}Rh(this.gl,c.type,o,f.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Rh(a,t,n,s){s=s.length?p2(s):s;const o=a.renderer.state.uniformLocations.get(n);if(s.length)if(o===void 0||o.length!==s.length)a.renderer.state.uniformLocations.set(n,s.slice(0));else{if(m2(o,s))return;o.set?o.set(s):g2(o,s),a.renderer.state.uniformLocations.set(n,o)}else{if(o===s)return;a.renderer.state.uniformLocations.set(n,s)}switch(t){case 5126:return s.length?a.uniform1fv(n,s):a.uniform1f(n,s);case 35664:return a.uniform2fv(n,s);case 35665:return a.uniform3fv(n,s);case 35666:return a.uniform4fv(n,s);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return s.length?a.uniform1iv(n,s):a.uniform1i(n,s);case 35671:case 35667:return a.uniform2iv(n,s);case 35672:case 35668:return a.uniform3iv(n,s);case 35673:case 35669:return a.uniform4iv(n,s);case 35674:return a.uniformMatrix2fv(n,!1,s);case 35675:return a.uniformMatrix3fv(n,!1,s);case 35676:return a.uniformMatrix4fv(n,!1,s)}}function M_(a){let t=a.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function p2(a){const t=a.length,n=a[0].length;if(n===void 0)return a;const s=t*n;let o=y_[s];o||(y_[s]=o=new Float32Array(s));for(let c=0;c<t;c++)o.set(a[c],c*n);return o}function m2(a,t){if(a.length!==t.length)return!1;for(let n=0,s=a.length;n<s;n++)if(a[n]!==t[n])return!1;return!0}function g2(a,t){for(let n=0,s=a.length;n<s;n++)a[n]=t[n]}let wh=0;function E_(a){wh>100||(console.warn(a),wh++,wh>100&&console.warn("More than 100 program warnings - stopping logs."))}const Ch=new on;let _2=1;class v2{constructor({canvas:t=document.createElement("canvas"),width:n=300,height:s=150,dpr:o=1,alpha:c=!1,depth:f=!0,stencil:h=!1,antialias:p=!1,premultipliedAlpha:m=!1,preserveDrawingBuffer:g=!1,powerPreference:_="default",autoClear:x=!0,webgl:M=2}={}){const T={alpha:c,depth:f,stencil:h,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:_};this.dpr=o,this.alpha=c,this.color=!0,this.depth=f,this.stencil=h,this.premultipliedAlpha=m,this.autoClear=x,this.id=_2++,M===2&&(this.gl=t.getContext("webgl2",T)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",T)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,s),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,n){this.width=t,this.height=n,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:t+"px",height:n+"px"})}setViewport(t,n,s=0,o=0){this.state.viewport.width===t&&this.state.viewport.height===n||(this.state.viewport.width=t,this.state.viewport.height=n,this.state.viewport.x=s,this.state.viewport.y=o,this.gl.viewport(s,o,t,n))}setScissor(t,n,s=0,o=0){this.gl.scissor(s,o,t,n)}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,n,s,o){this.state.blendFunc.src===t&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===s&&this.state.blendFunc.dstAlpha===o||(this.state.blendFunc.src=t,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=s,this.state.blendFunc.dstAlpha=o,s!==void 0?this.gl.blendFuncSeparate(t,n,s,o):this.gl.blendFunc(t,n))}setBlendEquation(t,n){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(t,n):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}setStencilMask(t){this.state.stencilMask!==t&&(this.state.stencilMask=t,this.gl.stencilMask(t))}setStencilFunc(t,n,s){this.state.stencilFunc===t&&this.state.stencilRef===n&&this.state.stencilFuncMask===s||(this.state.stencilFunc=t||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=s||0,this.gl.stencilFunc(t||this.gl.ALWAYS,n||0,s||0))}setStencilOp(t,n,s){this.state.stencilFail===t&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===s||(this.state.stencilFail=t,this.state.stencilDepthFail=n,this.state.stencilDepthPass=s,this.gl.stencilOp(t,n,s))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(t,n))}getExtension(t,n,s){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),n?this.extensions[t]?this.extensions[t][s].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.program.id!==n.program.id?t.program.id-n.program.id:t.zDepth!==n.zDepth?t.zDepth-n.zDepth:n.id-t.id}sortTransparent(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.zDepth!==n.zDepth?n.zDepth-t.zDepth:n.id-t.id}sortUI(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.program.id!==n.program.id?t.program.id-n.program.id:n.id-t.id}getRenderList({scene:t,camera:n,frustumCull:s,sort:o}){let c=[];if(n&&s&&n.updateFrustum(),t.traverse(f=>{if(!f.visible)return!0;f.draw&&(s&&f.frustumCulled&&n&&!n.frustumIntersectsMesh(f)||c.push(f))}),o){const f=[],h=[],p=[];c.forEach(m=>{m.program.transparent?m.program.depthTest?h.push(m):p.push(m):f.push(m),m.zDepth=0,!(m.renderOrder!==0||!m.program.depthTest||!n)&&(m.worldMatrix.getTranslation(Ch),Ch.applyMatrix4(n.projectionViewMatrix),m.zDepth=Ch.z)}),f.sort(this.sortOpaque),h.sort(this.sortTransparent),p.sort(this.sortUI),c=f.concat(h,p)}return c}render({scene:t,camera:n,target:s=null,update:o=!0,sort:c=!0,frustumCull:f=!0,clear:h}){s===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(s),this.setViewport(s.width,s.height)),(h||this.autoClear&&h!==!1)&&(this.depth&&(!s||s.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!s||s.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),o&&t.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:t,camera:n,frustumCull:f,sort:c}).forEach(m=>{m.draw({camera:n})})}}function x2(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a}function S2(a,t,n,s,o){return a[0]=t,a[1]=n,a[2]=s,a[3]=o,a}function y2(a,t){let n=t[0],s=t[1],o=t[2],c=t[3],f=n*n+s*s+o*o+c*c;return f>0&&(f=1/Math.sqrt(f)),a[0]=n*f,a[1]=s*f,a[2]=o*f,a[3]=c*f,a}function M2(a,t){return a[0]*t[0]+a[1]*t[1]+a[2]*t[2]+a[3]*t[3]}function E2(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a}function T2(a,t,n){n=n*.5;let s=Math.sin(n);return a[0]=s*t[0],a[1]=s*t[1],a[2]=s*t[2],a[3]=Math.cos(n),a}function T_(a,t,n){let s=t[0],o=t[1],c=t[2],f=t[3],h=n[0],p=n[1],m=n[2],g=n[3];return a[0]=s*g+f*h+o*m-c*p,a[1]=o*g+f*p+c*h-s*m,a[2]=c*g+f*m+s*p-o*h,a[3]=f*g-s*h-o*p-c*m,a}function b2(a,t,n){n*=.5;let s=t[0],o=t[1],c=t[2],f=t[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p+f*h,a[1]=o*p+c*h,a[2]=c*p-o*h,a[3]=f*p-s*h,a}function A2(a,t,n){n*=.5;let s=t[0],o=t[1],c=t[2],f=t[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p-c*h,a[1]=o*p+f*h,a[2]=c*p+s*h,a[3]=f*p-o*h,a}function R2(a,t,n){n*=.5;let s=t[0],o=t[1],c=t[2],f=t[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p+o*h,a[1]=o*p-s*h,a[2]=c*p+f*h,a[3]=f*p-c*h,a}function w2(a,t,n,s){let o=t[0],c=t[1],f=t[2],h=t[3],p=n[0],m=n[1],g=n[2],_=n[3],x,M,T,b,y;return M=o*p+c*m+f*g+h*_,M<0&&(M=-M,p=-p,m=-m,g=-g,_=-_),1-M>1e-6?(x=Math.acos(M),T=Math.sin(x),b=Math.sin((1-s)*x)/T,y=Math.sin(s*x)/T):(b=1-s,y=s),a[0]=b*o+y*p,a[1]=b*c+y*m,a[2]=b*f+y*g,a[3]=b*h+y*_,a}function C2(a,t){let n=t[0],s=t[1],o=t[2],c=t[3],f=n*n+s*s+o*o+c*c,h=f?1/f:0;return a[0]=-n*h,a[1]=-s*h,a[2]=-o*h,a[3]=c*h,a}function D2(a,t){return a[0]=-t[0],a[1]=-t[1],a[2]=-t[2],a[3]=t[3],a}function U2(a,t){let n=t[0]+t[4]+t[8],s;if(n>0)s=Math.sqrt(n+1),a[3]=.5*s,s=.5/s,a[0]=(t[5]-t[7])*s,a[1]=(t[6]-t[2])*s,a[2]=(t[1]-t[3])*s;else{let o=0;t[4]>t[0]&&(o=1),t[8]>t[o*3+o]&&(o=2);let c=(o+1)%3,f=(o+2)%3;s=Math.sqrt(t[o*3+o]-t[c*3+c]-t[f*3+f]+1),a[o]=.5*s,s=.5/s,a[3]=(t[c*3+f]-t[f*3+c])*s,a[c]=(t[c*3+o]+t[o*3+c])*s,a[f]=(t[f*3+o]+t[o*3+f])*s}return a}function L2(a,t,n="YXZ"){let s=Math.sin(t[0]*.5),o=Math.cos(t[0]*.5),c=Math.sin(t[1]*.5),f=Math.cos(t[1]*.5),h=Math.sin(t[2]*.5),p=Math.cos(t[2]*.5);return n==="XYZ"?(a[0]=s*f*p+o*c*h,a[1]=o*c*p-s*f*h,a[2]=o*f*h+s*c*p,a[3]=o*f*p-s*c*h):n==="YXZ"?(a[0]=s*f*p+o*c*h,a[1]=o*c*p-s*f*h,a[2]=o*f*h-s*c*p,a[3]=o*f*p+s*c*h):n==="ZXY"?(a[0]=s*f*p-o*c*h,a[1]=o*c*p+s*f*h,a[2]=o*f*h+s*c*p,a[3]=o*f*p-s*c*h):n==="ZYX"?(a[0]=s*f*p-o*c*h,a[1]=o*c*p+s*f*h,a[2]=o*f*h-s*c*p,a[3]=o*f*p+s*c*h):n==="YZX"?(a[0]=s*f*p+o*c*h,a[1]=o*c*p+s*f*h,a[2]=o*f*h-s*c*p,a[3]=o*f*p-s*c*h):n==="XZY"&&(a[0]=s*f*p-o*c*h,a[1]=o*c*p-s*f*h,a[2]=o*f*h+s*c*p,a[3]=o*f*p+s*c*h),a}const N2=x2,O2=S2,P2=M2,z2=y2;class F2 extends Array{constructor(t=0,n=0,s=0,o=1){super(t,n,s,o),this.onChange=()=>{},this._target=this;const c=["0","1","2","3"];return new Proxy(this,{set(f,h){const p=Reflect.set(...arguments);return p&&c.includes(h)&&f.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set w(t){this._target[3]=t,this.onChange()}identity(){return E2(this._target),this.onChange(),this}set(t,n,s,o){return t.length?this.copy(t):(O2(this._target,t,n,s,o),this.onChange(),this)}rotateX(t){return b2(this._target,this._target,t),this.onChange(),this}rotateY(t){return A2(this._target,this._target,t),this.onChange(),this}rotateZ(t){return R2(this._target,this._target,t),this.onChange(),this}inverse(t=this._target){return C2(this._target,t),this.onChange(),this}conjugate(t=this._target){return D2(this._target,t),this.onChange(),this}copy(t){return N2(this._target,t),this.onChange(),this}normalize(t=this._target){return z2(this._target,t),this.onChange(),this}multiply(t,n){return n?T_(this._target,t,n):T_(this._target,this._target,t),this.onChange(),this}dot(t){return P2(this._target,t)}fromMatrix3(t){return U2(this._target,t),this.onChange(),this}fromEuler(t,n){return L2(this._target,t,t.order),n||this.onChange(),this}fromAxisAngle(t,n){return T2(this._target,t,n),this.onChange(),this}slerp(t,n){return w2(this._target,this._target,t,n),this.onChange(),this}fromArray(t,n=0){return this._target[0]=t[n],this._target[1]=t[n+1],this._target[2]=t[n+2],this._target[3]=t[n+3],this.onChange(),this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t[n+3]=this[3],t}}const B2=1e-6;function I2(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a}function H2(a,t,n,s,o,c,f,h,p,m,g,_,x,M,T,b,y){return a[0]=t,a[1]=n,a[2]=s,a[3]=o,a[4]=c,a[5]=f,a[6]=h,a[7]=p,a[8]=m,a[9]=g,a[10]=_,a[11]=x,a[12]=M,a[13]=T,a[14]=b,a[15]=y,a}function G2(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function V2(a,t){let n=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],M=t[11],T=t[12],b=t[13],y=t[14],v=t[15],z=n*h-s*f,L=n*p-o*f,R=n*m-c*f,O=s*p-o*h,P=s*m-c*h,I=o*m-c*p,W=g*b-_*T,D=g*y-x*T,C=g*v-M*T,G=_*y-x*b,K=_*v-M*b,lt=x*v-M*y,et=z*lt-L*K+R*G+O*C-P*D+I*W;return et?(et=1/et,a[0]=(h*lt-p*K+m*G)*et,a[1]=(o*K-s*lt-c*G)*et,a[2]=(b*I-y*P+v*O)*et,a[3]=(x*P-_*I-M*O)*et,a[4]=(p*C-f*lt-m*D)*et,a[5]=(n*lt-o*C+c*D)*et,a[6]=(y*R-T*I-v*L)*et,a[7]=(g*I-x*R+M*L)*et,a[8]=(f*K-h*C+m*W)*et,a[9]=(s*C-n*K-c*W)*et,a[10]=(T*P-b*R+v*z)*et,a[11]=(_*R-g*P-M*z)*et,a[12]=(h*D-f*G-p*W)*et,a[13]=(n*G-s*D+o*W)*et,a[14]=(b*L-T*O-y*z)*et,a[15]=(g*O-_*L+x*z)*et,a):null}function dv(a){let t=a[0],n=a[1],s=a[2],o=a[3],c=a[4],f=a[5],h=a[6],p=a[7],m=a[8],g=a[9],_=a[10],x=a[11],M=a[12],T=a[13],b=a[14],y=a[15],v=t*f-n*c,z=t*h-s*c,L=t*p-o*c,R=n*h-s*f,O=n*p-o*f,P=s*p-o*h,I=m*T-g*M,W=m*b-_*M,D=m*y-x*M,C=g*b-_*T,G=g*y-x*T,K=_*y-x*b;return v*K-z*G+L*C+R*D-O*W+P*I}function b_(a,t,n){let s=t[0],o=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=t[9],M=t[10],T=t[11],b=t[12],y=t[13],v=t[14],z=t[15],L=n[0],R=n[1],O=n[2],P=n[3];return a[0]=L*s+R*h+O*_+P*b,a[1]=L*o+R*p+O*x+P*y,a[2]=L*c+R*m+O*M+P*v,a[3]=L*f+R*g+O*T+P*z,L=n[4],R=n[5],O=n[6],P=n[7],a[4]=L*s+R*h+O*_+P*b,a[5]=L*o+R*p+O*x+P*y,a[6]=L*c+R*m+O*M+P*v,a[7]=L*f+R*g+O*T+P*z,L=n[8],R=n[9],O=n[10],P=n[11],a[8]=L*s+R*h+O*_+P*b,a[9]=L*o+R*p+O*x+P*y,a[10]=L*c+R*m+O*M+P*v,a[11]=L*f+R*g+O*T+P*z,L=n[12],R=n[13],O=n[14],P=n[15],a[12]=L*s+R*h+O*_+P*b,a[13]=L*o+R*p+O*x+P*y,a[14]=L*c+R*m+O*M+P*v,a[15]=L*f+R*g+O*T+P*z,a}function k2(a,t,n){let s=n[0],o=n[1],c=n[2],f,h,p,m,g,_,x,M,T,b,y,v;return t===a?(a[12]=t[0]*s+t[4]*o+t[8]*c+t[12],a[13]=t[1]*s+t[5]*o+t[9]*c+t[13],a[14]=t[2]*s+t[6]*o+t[10]*c+t[14],a[15]=t[3]*s+t[7]*o+t[11]*c+t[15]):(f=t[0],h=t[1],p=t[2],m=t[3],g=t[4],_=t[5],x=t[6],M=t[7],T=t[8],b=t[9],y=t[10],v=t[11],a[0]=f,a[1]=h,a[2]=p,a[3]=m,a[4]=g,a[5]=_,a[6]=x,a[7]=M,a[8]=T,a[9]=b,a[10]=y,a[11]=v,a[12]=f*s+g*o+T*c+t[12],a[13]=h*s+_*o+b*c+t[13],a[14]=p*s+x*o+y*c+t[14],a[15]=m*s+M*o+v*c+t[15]),a}function X2(a,t,n){let s=n[0],o=n[1],c=n[2];return a[0]=t[0]*s,a[1]=t[1]*s,a[2]=t[2]*s,a[3]=t[3]*s,a[4]=t[4]*o,a[5]=t[5]*o,a[6]=t[6]*o,a[7]=t[7]*o,a[8]=t[8]*c,a[9]=t[9]*c,a[10]=t[10]*c,a[11]=t[11]*c,a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a}function W2(a,t,n,s){let o=s[0],c=s[1],f=s[2],h=Math.hypot(o,c,f),p,m,g,_,x,M,T,b,y,v,z,L,R,O,P,I,W,D,C,G,K,lt,et,dt;return Math.abs(h)<B2?null:(h=1/h,o*=h,c*=h,f*=h,p=Math.sin(n),m=Math.cos(n),g=1-m,_=t[0],x=t[1],M=t[2],T=t[3],b=t[4],y=t[5],v=t[6],z=t[7],L=t[8],R=t[9],O=t[10],P=t[11],I=o*o*g+m,W=c*o*g+f*p,D=f*o*g-c*p,C=o*c*g-f*p,G=c*c*g+m,K=f*c*g+o*p,lt=o*f*g+c*p,et=c*f*g-o*p,dt=f*f*g+m,a[0]=_*I+b*W+L*D,a[1]=x*I+y*W+R*D,a[2]=M*I+v*W+O*D,a[3]=T*I+z*W+P*D,a[4]=_*C+b*G+L*K,a[5]=x*C+y*G+R*K,a[6]=M*C+v*G+O*K,a[7]=T*C+z*G+P*K,a[8]=_*lt+b*et+L*dt,a[9]=x*lt+y*et+R*dt,a[10]=M*lt+v*et+O*dt,a[11]=T*lt+z*et+P*dt,t!==a&&(a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a)}function q2(a,t){return a[0]=t[12],a[1]=t[13],a[2]=t[14],a}function pv(a,t){let n=t[0],s=t[1],o=t[2],c=t[4],f=t[5],h=t[6],p=t[8],m=t[9],g=t[10];return a[0]=Math.hypot(n,s,o),a[1]=Math.hypot(c,f,h),a[2]=Math.hypot(p,m,g),a}function Y2(a){let t=a[0],n=a[1],s=a[2],o=a[4],c=a[5],f=a[6],h=a[8],p=a[9],m=a[10];const g=t*t+n*n+s*s,_=o*o+c*c+f*f,x=h*h+p*p+m*m;return Math.sqrt(Math.max(g,_,x))}const mv=(function(){const a=[1,1,1];return function(t,n){let s=a;pv(s,n);let o=1/s[0],c=1/s[1],f=1/s[2],h=n[0]*o,p=n[1]*c,m=n[2]*f,g=n[4]*o,_=n[5]*c,x=n[6]*f,M=n[8]*o,T=n[9]*c,b=n[10]*f,y=h+_+b,v=0;return y>0?(v=Math.sqrt(y+1)*2,t[3]=.25*v,t[0]=(x-T)/v,t[1]=(M-m)/v,t[2]=(p-g)/v):h>_&&h>b?(v=Math.sqrt(1+h-_-b)*2,t[3]=(x-T)/v,t[0]=.25*v,t[1]=(p+g)/v,t[2]=(M+m)/v):_>b?(v=Math.sqrt(1+_-h-b)*2,t[3]=(M-m)/v,t[0]=(p+g)/v,t[1]=.25*v,t[2]=(x+T)/v):(v=Math.sqrt(1+b-h-_)*2,t[3]=(p-g)/v,t[0]=(M+m)/v,t[1]=(x+T)/v,t[2]=.25*v),t}})();function j2(a,t,n,s){let o=Uo([a[0],a[1],a[2]]);const c=Uo([a[4],a[5],a[6]]),f=Uo([a[8],a[9],a[10]]);dv(a)<0&&(o=-o),n[0]=a[12],n[1]=a[13],n[2]=a[14];const p=a.slice(),m=1/o,g=1/c,_=1/f;p[0]*=m,p[1]*=m,p[2]*=m,p[4]*=g,p[5]*=g,p[6]*=g,p[8]*=_,p[9]*=_,p[10]*=_,mv(t,p),s[0]=o,s[1]=c,s[2]=f}function Z2(a,t,n,s){const o=a,c=t[0],f=t[1],h=t[2],p=t[3],m=c+c,g=f+f,_=h+h,x=c*m,M=c*g,T=c*_,b=f*g,y=f*_,v=h*_,z=p*m,L=p*g,R=p*_,O=s[0],P=s[1],I=s[2];return o[0]=(1-(b+v))*O,o[1]=(M+R)*O,o[2]=(T-L)*O,o[3]=0,o[4]=(M-R)*P,o[5]=(1-(x+v))*P,o[6]=(y+z)*P,o[7]=0,o[8]=(T+L)*I,o[9]=(y-z)*I,o[10]=(1-(x+b))*I,o[11]=0,o[12]=n[0],o[13]=n[1],o[14]=n[2],o[15]=1,o}function K2(a,t){let n=t[0],s=t[1],o=t[2],c=t[3],f=n+n,h=s+s,p=o+o,m=n*f,g=s*f,_=s*h,x=o*f,M=o*h,T=o*p,b=c*f,y=c*h,v=c*p;return a[0]=1-_-T,a[1]=g+v,a[2]=x-y,a[3]=0,a[4]=g-v,a[5]=1-m-T,a[6]=M+b,a[7]=0,a[8]=x+y,a[9]=M-b,a[10]=1-m-_,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function Q2(a,t,n,s,o){let c=1/Math.tan(t/2),f=1/(s-o);return a[0]=c/n,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=c,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=(o+s)*f,a[11]=-1,a[12]=0,a[13]=0,a[14]=2*o*s*f,a[15]=0,a}function J2(a,t,n,s,o,c,f){let h=1/(t-n),p=1/(s-o),m=1/(c-f);return a[0]=-2*h,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=-2*p,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2*m,a[11]=0,a[12]=(t+n)*h,a[13]=(o+s)*p,a[14]=(f+c)*m,a[15]=1,a}function $2(a,t,n,s){let o=t[0],c=t[1],f=t[2],h=s[0],p=s[1],m=s[2],g=o-n[0],_=c-n[1],x=f-n[2],M=g*g+_*_+x*x;M===0?x=1:(M=1/Math.sqrt(M),g*=M,_*=M,x*=M);let T=p*x-m*_,b=m*g-h*x,y=h*_-p*g;return M=T*T+b*b+y*y,M===0&&(m?h+=1e-6:p?m+=1e-6:p+=1e-6,T=p*x-m*_,b=m*g-h*x,y=h*_-p*g,M=T*T+b*b+y*y),M=1/Math.sqrt(M),T*=M,b*=M,y*=M,a[0]=T,a[1]=b,a[2]=y,a[3]=0,a[4]=_*y-x*b,a[5]=x*T-g*y,a[6]=g*b-_*T,a[7]=0,a[8]=g,a[9]=_,a[10]=x,a[11]=0,a[12]=o,a[13]=c,a[14]=f,a[15]=1,a}function A_(a,t,n){return a[0]=t[0]+n[0],a[1]=t[1]+n[1],a[2]=t[2]+n[2],a[3]=t[3]+n[3],a[4]=t[4]+n[4],a[5]=t[5]+n[5],a[6]=t[6]+n[6],a[7]=t[7]+n[7],a[8]=t[8]+n[8],a[9]=t[9]+n[9],a[10]=t[10]+n[10],a[11]=t[11]+n[11],a[12]=t[12]+n[12],a[13]=t[13]+n[13],a[14]=t[14]+n[14],a[15]=t[15]+n[15],a}function R_(a,t,n){return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],a[3]=t[3]-n[3],a[4]=t[4]-n[4],a[5]=t[5]-n[5],a[6]=t[6]-n[6],a[7]=t[7]-n[7],a[8]=t[8]-n[8],a[9]=t[9]-n[9],a[10]=t[10]-n[10],a[11]=t[11]-n[11],a[12]=t[12]-n[12],a[13]=t[13]-n[13],a[14]=t[14]-n[14],a[15]=t[15]-n[15],a}function tA(a,t,n){return a[0]=t[0]*n,a[1]=t[1]*n,a[2]=t[2]*n,a[3]=t[3]*n,a[4]=t[4]*n,a[5]=t[5]*n,a[6]=t[6]*n,a[7]=t[7]*n,a[8]=t[8]*n,a[9]=t[9]*n,a[10]=t[10]*n,a[11]=t[11]*n,a[12]=t[12]*n,a[13]=t[13]*n,a[14]=t[14]*n,a[15]=t[15]*n,a}class Ga extends Array{constructor(t=1,n=0,s=0,o=0,c=0,f=1,h=0,p=0,m=0,g=0,_=1,x=0,M=0,T=0,b=0,y=1){return super(t,n,s,o,c,f,h,p,m,g,_,x,M,T,b,y),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,n,s,o,c,f,h,p,m,g,_,x,M,T,b,y){return t.length?this.copy(t):(H2(this,t,n,s,o,c,f,h,p,m,g,_,x,M,T,b,y),this)}translate(t,n=this){return k2(this,n,t),this}rotate(t,n,s=this){return W2(this,s,t,n),this}scale(t,n=this){return X2(this,n,typeof t=="number"?[t,t,t]:t),this}add(t,n){return n?A_(this,t,n):A_(this,this,t),this}sub(t,n){return n?R_(this,t,n):R_(this,this,t),this}multiply(t,n){return t.length?n?b_(this,t,n):b_(this,this,t):tA(this,this,t),this}identity(){return G2(this),this}copy(t){return I2(this,t),this}fromPerspective({fov:t,aspect:n,near:s,far:o}={}){return Q2(this,t,n,s,o),this}fromOrthogonal({left:t,right:n,bottom:s,top:o,near:c,far:f}){return J2(this,t,n,s,o,c,f),this}fromQuaternion(t){return K2(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return V2(this,t),this}compose(t,n,s){return Z2(this,t,n,s),this}decompose(t,n,s){return j2(this,t,n,s),this}getRotation(t){return mv(t,this),this}getTranslation(t){return q2(t,this),this}getScaling(t){return pv(t,this),this}getMaxScaleOnAxis(){return Y2(this)}lookAt(t,n,s){return $2(this,t,n,s),this}determinant(){return dv(this)}fromArray(t,n=0){return this[0]=t[n],this[1]=t[n+1],this[2]=t[n+2],this[3]=t[n+3],this[4]=t[n+4],this[5]=t[n+5],this[6]=t[n+6],this[7]=t[n+7],this[8]=t[n+8],this[9]=t[n+9],this[10]=t[n+10],this[11]=t[n+11],this[12]=t[n+12],this[13]=t[n+13],this[14]=t[n+14],this[15]=t[n+15],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t[n+3]=this[3],t[n+4]=this[4],t[n+5]=this[5],t[n+6]=this[6],t[n+7]=this[7],t[n+8]=this[8],t[n+9]=this[9],t[n+10]=this[10],t[n+11]=this[11],t[n+12]=this[12],t[n+13]=this[13],t[n+14]=this[14],t[n+15]=this[15],t}}function eA(a,t,n="YXZ"){return n==="XYZ"?(a[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(a[0]=Math.atan2(-t[9],t[10]),a[2]=Math.atan2(-t[4],t[0])):(a[0]=Math.atan2(t[6],t[5]),a[2]=0)):n==="YXZ"?(a[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(a[1]=Math.atan2(t[8],t[10]),a[2]=Math.atan2(t[1],t[5])):(a[1]=Math.atan2(-t[2],t[0]),a[2]=0)):n==="ZXY"?(a[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(a[1]=Math.atan2(-t[2],t[10]),a[2]=Math.atan2(-t[4],t[5])):(a[1]=0,a[2]=Math.atan2(t[1],t[0]))):n==="ZYX"?(a[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(a[0]=Math.atan2(t[6],t[10]),a[2]=Math.atan2(t[1],t[0])):(a[0]=0,a[2]=Math.atan2(-t[4],t[5]))):n==="YZX"?(a[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(a[0]=Math.atan2(-t[9],t[5]),a[1]=Math.atan2(-t[2],t[0])):(a[0]=0,a[1]=Math.atan2(t[8],t[10]))):n==="XZY"&&(a[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(a[0]=Math.atan2(t[6],t[5]),a[1]=Math.atan2(t[8],t[0])):(a[0]=Math.atan2(-t[9],t[10]),a[1]=0)),a}const w_=new Ga;class nA extends Array{constructor(t=0,n=t,s=t,o="YXZ"){super(t,n,s),this.order=o,this.onChange=()=>{},this._target=this;const c=["0","1","2"];return new Proxy(this,{set(f,h){const p=Reflect.set(...arguments);return p&&c.includes(h)&&f.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set(t,n=t,s=t){return t.length?this.copy(t):(this._target[0]=t,this._target[1]=n,this._target[2]=s,this.onChange(),this)}copy(t){return this._target[0]=t[0],this._target[1]=t[1],this._target[2]=t[2],this.onChange(),this}reorder(t){return this._target.order=t,this.onChange(),this}fromRotationMatrix(t,n=this.order){return eA(this._target,t,n),this.onChange(),this}fromQuaternion(t,n=this.order,s){return w_.fromQuaternion(t),this._target.fromRotationMatrix(w_,n),s||this.onChange(),this}fromArray(t,n=0){return this._target[0]=t[n],this._target[1]=t[n+1],this._target[2]=t[n+2],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t}}class Nd{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ga,this.worldMatrix=new Ga,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new on,this.quaternion=new F2,this.scale=new on(1),this.rotation=new nA,this.up=new on(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(t,n=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,n&&t&&t.addChild(this,!1)}addChild(t,n=!0){~this.children.indexOf(t)||this.children.push(t),n&&t.setParent(this,!1)}removeChild(t,n=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),n&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let n=0,s=this.children.length;n<s;n++)this.children[n].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let n=0,s=this.children.length;n<s;n++)this.children[n].traverse(t)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,n=!1){n?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}const iA=new Ga,aA=new on,sA=new on;class rA extends Nd{constructor(t,{near:n=.1,far:s=100,fov:o=45,aspect:c=1,left:f,right:h,bottom:p,top:m,zoom:g=1}={}){super(),Object.assign(this,{near:n,far:s,fov:o,aspect:c,left:f,right:h,bottom:p,top:m,zoom:g}),this.projectionMatrix=new Ga,this.viewMatrix=new Ga,this.projectionViewMatrix=new Ga,this.worldPosition=new on,this.type=f||h?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:t=this.near,far:n=this.far,fov:s=this.fov,aspect:o=this.aspect}={}){return Object.assign(this,{near:t,far:n,fov:s,aspect:o}),this.projectionMatrix.fromPerspective({fov:s*(Math.PI/180),aspect:o,near:t,far:n}),this.type="perspective",this}orthographic({near:t=this.near,far:n=this.far,left:s=this.left||-1,right:o=this.right||1,bottom:c=this.bottom||-1,top:f=this.top||1,zoom:h=this.zoom}={}){return Object.assign(this,{near:t,far:n,left:s,right:o,bottom:c,top:f,zoom:h}),s/=h,o/=h,c/=h,f/=h,this.projectionMatrix.fromOrthogonal({left:s,right:o,bottom:c,top:f,near:t,far:n}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type==="perspective"?this.perspective():this.orthographic()}lookAt(t){return super.lookAt(t,!0),this}project(t){return t.applyMatrix4(this.viewMatrix),t.applyMatrix4(this.projectionMatrix),this}unproject(t){return t.applyMatrix4(iA.inverse(this.projectionMatrix)),t.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new on,new on,new on,new on,new on,new on]);const t=this.projectionViewMatrix;this.frustum[0].set(t[3]-t[0],t[7]-t[4],t[11]-t[8]).constant=t[15]-t[12],this.frustum[1].set(t[3]+t[0],t[7]+t[4],t[11]+t[8]).constant=t[15]+t[12],this.frustum[2].set(t[3]+t[1],t[7]+t[5],t[11]+t[9]).constant=t[15]+t[13],this.frustum[3].set(t[3]-t[1],t[7]-t[5],t[11]-t[9]).constant=t[15]-t[13],this.frustum[4].set(t[3]-t[2],t[7]-t[6],t[11]-t[10]).constant=t[15]-t[14],this.frustum[5].set(t[3]+t[2],t[7]+t[6],t[11]+t[10]).constant=t[15]+t[14];for(let n=0;n<6;n++){const s=1/this.frustum[n].distance();this.frustum[n].multiply(s),this.frustum[n].constant*=s}}frustumIntersectsMesh(t,n=t.worldMatrix){if(!t.geometry.attributes.position||((!t.geometry.bounds||t.geometry.bounds.radius===1/0)&&t.geometry.computeBoundingSphere(),!t.geometry.bounds))return!0;const s=aA;s.copy(t.geometry.bounds.center),s.applyMatrix4(n);const o=t.geometry.bounds.radius*n.getMaxScaleOnAxis();return this.frustumIntersectsSphere(s,o)}frustumIntersectsSphere(t,n){const s=sA;for(let o=0;o<6;o++){const c=this.frustum[o];if(s.copy(c).dot(t)+c.constant<-n)return!1}return!0}}function oA(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[4],a[4]=t[5],a[5]=t[6],a[6]=t[8],a[7]=t[9],a[8]=t[10],a}function lA(a,t){let n=t[0],s=t[1],o=t[2],c=t[3],f=n+n,h=s+s,p=o+o,m=n*f,g=s*f,_=s*h,x=o*f,M=o*h,T=o*p,b=c*f,y=c*h,v=c*p;return a[0]=1-_-T,a[3]=g-v,a[6]=x+y,a[1]=g+v,a[4]=1-m-T,a[7]=M-b,a[2]=x-y,a[5]=M+b,a[8]=1-m-_,a}function cA(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a}function uA(a,t,n,s,o,c,f,h,p,m){return a[0]=t,a[1]=n,a[2]=s,a[3]=o,a[4]=c,a[5]=f,a[6]=h,a[7]=p,a[8]=m,a}function fA(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a}function hA(a,t){let n=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*f-h*m,x=-g*c+h*p,M=m*c-f*p,T=n*_+s*x+o*M;return T?(T=1/T,a[0]=_*T,a[1]=(-g*s+o*m)*T,a[2]=(h*s-o*f)*T,a[3]=x*T,a[4]=(g*n-o*p)*T,a[5]=(-h*n+o*c)*T,a[6]=M*T,a[7]=(-m*n+s*p)*T,a[8]=(f*n-s*c)*T,a):null}function C_(a,t,n){let s=t[0],o=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=n[0],M=n[1],T=n[2],b=n[3],y=n[4],v=n[5],z=n[6],L=n[7],R=n[8];return a[0]=x*s+M*f+T*m,a[1]=x*o+M*h+T*g,a[2]=x*c+M*p+T*_,a[3]=b*s+y*f+v*m,a[4]=b*o+y*h+v*g,a[5]=b*c+y*p+v*_,a[6]=z*s+L*f+R*m,a[7]=z*o+L*h+R*g,a[8]=z*c+L*p+R*_,a}function dA(a,t,n){let s=t[0],o=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=n[0],M=n[1];return a[0]=s,a[1]=o,a[2]=c,a[3]=f,a[4]=h,a[5]=p,a[6]=x*s+M*f+m,a[7]=x*o+M*h+g,a[8]=x*c+M*p+_,a}function pA(a,t,n){let s=t[0],o=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=Math.sin(n),M=Math.cos(n);return a[0]=M*s+x*f,a[1]=M*o+x*h,a[2]=M*c+x*p,a[3]=M*f-x*s,a[4]=M*h-x*o,a[5]=M*p-x*c,a[6]=m,a[7]=g,a[8]=_,a}function mA(a,t,n){let s=n[0],o=n[1];return a[0]=s*t[0],a[1]=s*t[1],a[2]=s*t[2],a[3]=o*t[3],a[4]=o*t[4],a[5]=o*t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a}function gA(a,t){let n=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],M=t[11],T=t[12],b=t[13],y=t[14],v=t[15],z=n*h-s*f,L=n*p-o*f,R=n*m-c*f,O=s*p-o*h,P=s*m-c*h,I=o*m-c*p,W=g*b-_*T,D=g*y-x*T,C=g*v-M*T,G=_*y-x*b,K=_*v-M*b,lt=x*v-M*y,et=z*lt-L*K+R*G+O*C-P*D+I*W;return et?(et=1/et,a[0]=(h*lt-p*K+m*G)*et,a[1]=(p*C-f*lt-m*D)*et,a[2]=(f*K-h*C+m*W)*et,a[3]=(o*K-s*lt-c*G)*et,a[4]=(n*lt-o*C+c*D)*et,a[5]=(s*C-n*K-c*W)*et,a[6]=(b*I-y*P+v*O)*et,a[7]=(y*R-T*I-v*L)*et,a[8]=(T*P-b*R+v*z)*et,a):null}class _A extends Array{constructor(t=1,n=0,s=0,o=0,c=1,f=0,h=0,p=0,m=1){return super(t,n,s,o,c,f,h,p,m),this}set(t,n,s,o,c,f,h,p,m){return t.length?this.copy(t):(uA(this,t,n,s,o,c,f,h,p,m),this)}translate(t,n=this){return dA(this,n,t),this}rotate(t,n=this){return pA(this,n,t),this}scale(t,n=this){return mA(this,n,t),this}multiply(t,n){return n?C_(this,t,n):C_(this,this,t),this}identity(){return fA(this),this}copy(t){return cA(this,t),this}fromMatrix4(t){return oA(this,t),this}fromQuaternion(t){return lA(this,t),this}fromBasis(t,n,s){return this.set(t[0],t[1],t[2],n[0],n[1],n[2],s[0],s[1],s[2]),this}inverse(t=this){return hA(this,t),this}getNormalMatrix(t){return gA(this,t),this}}let vA=0;class gv extends Nd{constructor(t,{geometry:n,program:s,mode:o=t.TRIANGLES,frustumCulled:c=!0,renderOrder:f=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=vA++,this.geometry=n,this.program=s,this.mode=o,this.frustumCulled=c,this.renderOrder=f,this.modelViewMatrix=new Ga,this.normalMatrix=new _A,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:t}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:t}))}}const D_=new Uint8Array(4);function U_(a){return(a&a-1)===0}let xA=1;class _v{constructor(t,{image:n,target:s=t.TEXTURE_2D,type:o=t.UNSIGNED_BYTE,format:c=t.RGBA,internalFormat:f=c,wrapS:h=t.CLAMP_TO_EDGE,wrapT:p=t.CLAMP_TO_EDGE,wrapR:m=t.CLAMP_TO_EDGE,generateMipmaps:g=s===(t.TEXTURE_2D||t.TEXTURE_CUBE_MAP),minFilter:_=g?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:x=t.LINEAR,premultiplyAlpha:M=!1,unpackAlignment:T=4,flipY:b=s==(t.TEXTURE_2D||t.TEXTURE_3D),anisotropy:y=0,level:v=0,width:z,height:L=z,length:R=1}={}){this.gl=t,this.id=xA++,this.image=n,this.target=s,this.type=o,this.format=c,this.internalFormat=f,this.minFilter=_,this.magFilter=x,this.wrapS=h,this.wrapT=p,this.wrapR=m,this.generateMipmaps=g,this.premultiplyAlpha=M,this.unpackAlignment=T,this.flipY=b,this.anisotropy=Math.min(y,this.gl.renderer.parameters.maxAnisotropy),this.level=v,this.width=z,this.height=L,this.length=R,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(t=0){const n=!(this.image===this.store.image&&!this.needsUpdate);if((n||this.glState.textureUnits[t]!==this.id)&&(this.gl.renderer.activeTexture(t),this.bind()),!!n){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,this.level,this.internalFormat,this.format,this.type,this.image[s]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let s=0;s<this.image.length;s++)this.gl.compressedTexImage2D(this.target,s,this.internalFormat,this.image[s].width,this.image[s].height,0,this.image[s].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!U_(this.image.width)||!U_(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,D_);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,D_);this.store.image=this.image}}}class Ic extends h2{constructor(t,{width:n=1,height:s=1,widthSegments:o=1,heightSegments:c=1,attributes:f={}}={}){const h=o,p=c,m=(h+1)*(p+1),g=h*p*6,_=new Float32Array(m*3),x=new Float32Array(m*3),M=new Float32Array(m*2),T=g>65536?new Uint32Array(g):new Uint16Array(g);Ic.buildPlane(_,x,M,T,n,s,0,h,p),Object.assign(f,{position:{size:3,data:_},normal:{size:3,data:x},uv:{size:2,data:M},index:{data:T}}),super(t,f)}static buildPlane(t,n,s,o,c,f,h,p,m,g=0,_=1,x=2,M=1,T=-1,b=0,y=0){const v=b,z=c/p,L=f/m;for(let R=0;R<=m;R++){let O=R*L-f/2;for(let P=0;P<=p;P++,b++){let I=P*z-c/2;if(t[b*3+g]=I*M,t[b*3+_]=O*T,t[b*3+x]=h/2,n[b*3+g]=0,n[b*3+_]=0,n[b*3+x]=h>=0?1:-1,s[b*2]=P/p,s[b*2+1]=1-R/m,R===m||P===p)continue;let W=v+P+R*(p+1),D=v+P+(R+1)*(p+1),C=v+P+(R+1)*(p+1)+1,G=v+P+R*(p+1)+1;o[y*6]=W,o[y*6+1]=D,o[y*6+2]=G,o[y*6+3]=D,o[y*6+4]=C,o[y*6+5]=G,y++}}}}function SA(a,t){let n;return function(...s){clearTimeout(n),n=setTimeout(()=>a.apply(this,s),t)}}function yA(a,t,n){return a+(t-a)*n}function MA(a){const t=Object.getPrototypeOf(a);Object.getOwnPropertyNames(t).forEach(n=>{n!=="constructor"&&typeof a[n]=="function"&&(a[n]=a[n].bind(a))})}function EA(a,t,n="bold 30px monospace",s="black"){const o=document.createElement("canvas"),c=o.getContext("2d");c.font=n;const f=c.measureText(t),h=Math.ceil(f.width),p=Math.ceil(parseInt(n,10)*1.2);o.width=h+20,o.height=p+20,c.font=n,c.fillStyle=s,c.textBaseline="middle",c.textAlign="center",c.clearRect(0,0,o.width,o.height),c.fillText(t,o.width/2,o.height/2);const m=new _v(a,{generateMipmaps:!1});return m.image=o,{texture:m,width:o.width,height:o.height}}class TA{constructor({gl:t,plane:n,renderer:s,text:o,textColor:c="#545050",font:f="30px sans-serif"}){MA(this),this.gl=t,this.plane=n,this.renderer=s,this.text=o,this.textColor=c,this.font=f,this.createMesh()}createMesh(){const{texture:t,width:n,height:s}=EA(this.gl,this.text,this.font,this.textColor),o=new Ic(this.gl),c=new hv(this.gl,{vertex:`
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragment:`
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,uniforms:{tMap:{value:t}},transparent:!0});this.mesh=new gv(this.gl,{geometry:o,program:c});const f=n/s,h=this.plane.scale.y*.15,p=h*f;this.mesh.scale.set(p,h,1),this.mesh.position.y=-this.plane.scale.y*.5-h*.5-.05,this.mesh.setParent(this.plane)}}class bA{constructor({geometry:t,gl:n,image:s,index:o,length:c,renderer:f,scene:h,screen:p,text:m,viewport:g,bend:_,textColor:x,borderRadius:M=0,font:T}){this.extra=0,this.geometry=t,this.gl=n,this.image=s,this.index=o,this.length=c,this.renderer=f,this.scene=h,this.screen=p,this.text=m,this.viewport=g,this.bend=_,this.textColor=x,this.borderRadius=M,this.font=T,this.createShader(),this.createMesh(),this.createTitle(),this.onResize()}createShader(){const t=new _v(this.gl,{generateMipmaps:!0});this.program=new hv(this.gl,{depthTest:!1,depthWrite:!1,vertex:`
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,fragment:`
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          // Smooth antialiasing for edges
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,uniforms:{tMap:{value:t},uPlaneSizes:{value:[0,0]},uImageSizes:{value:[0,0]},uSpeed:{value:0},uTime:{value:100*Math.random()},uBorderRadius:{value:this.borderRadius}},transparent:!0});const n=new Image;n.crossOrigin="anonymous",n.src=this.image,n.onload=()=>{t.image=n,this.program.uniforms.uImageSizes.value=[n.naturalWidth,n.naturalHeight]}}createMesh(){this.plane=new gv(this.gl,{geometry:this.geometry,program:this.program}),this.plane.setParent(this.scene)}createTitle(){this.title=new TA({gl:this.gl,plane:this.plane,renderer:this.renderer,text:this.text,textColor:this.textColor,fontFamily:this.font})}update(t,n){this.plane.position.x=this.x-t.current-this.extra;const s=this.plane.position.x,o=this.viewport.width/2;if(this.bend===0)this.plane.position.y=0,this.plane.rotation.z=0;else{const h=Math.abs(this.bend),p=(o*o+h*h)/(2*h),m=Math.min(Math.abs(s),o),g=p-Math.sqrt(p*p-m*m);this.bend>0?(this.plane.position.y=-g,this.plane.rotation.z=-Math.sign(s)*Math.asin(m/p)):(this.plane.position.y=g,this.plane.rotation.z=Math.sign(s)*Math.asin(m/p))}this.speed=t.current-t.last,this.program.uniforms.uTime.value+=.04,this.program.uniforms.uSpeed.value=this.speed;const c=this.plane.scale.x/2,f=this.viewport.width/2;this.isBefore=this.plane.position.x+c<-f,this.isAfter=this.plane.position.x-c>f,n==="right"&&this.isBefore&&(this.extra-=this.widthTotal,this.isBefore=this.isAfter=!1),n==="left"&&this.isAfter&&(this.extra+=this.widthTotal,this.isBefore=this.isAfter=!1)}onResize({screen:t,viewport:n}={}){t&&(this.screen=t),n&&(this.viewport=n,this.plane.program.uniforms.uViewportSizes&&(this.plane.program.uniforms.uViewportSizes.value=[this.viewport.width,this.viewport.height])),this.scale=this.screen.height/1500,this.plane.scale.y=this.viewport.height*(900*this.scale)/this.screen.height,this.plane.scale.x=this.viewport.width*(700*this.scale)/this.screen.width,this.plane.program.uniforms.uPlaneSizes.value=[this.plane.scale.x,this.plane.scale.y],this.padding=2,this.width=this.plane.scale.x+this.padding,this.widthTotal=this.width*this.length,this.x=this.width*this.index}}let AA=class{constructor(t,{items:n,bend:s,textColor:o="#ffffff",borderRadius:c=0,font:f="bold 30px Figtree",scrollSpeed:h=2,scrollEase:p=.05}={}){document.documentElement.classList.remove("no-js"),this.container=t,this.scrollSpeed=h,this.scroll={ease:p,current:0,target:0,last:0},this.onCheckDebounce=SA(this.onCheck,200),this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createGeometry(),this.createMedias(n,s,o,c,f),this.update(),this.addEventListeners()}createRenderer(){this.renderer=new v2({alpha:!0,antialias:!0,dpr:Math.min(window.devicePixelRatio||1,2)}),this.gl=this.renderer.gl,this.gl.clearColor(0,0,0,0),this.container.appendChild(this.gl.canvas)}createCamera(){this.camera=new rA(this.gl),this.camera.fov=45,this.camera.position.z=20}createScene(){this.scene=new Nd}createGeometry(){this.planeGeometry=new Ic(this.gl,{heightSegments:50,widthSegments:100})}createMedias(t,n=1,s,o,c){const f=[{image:"https://picsum.photos/seed/1/800/600?grayscale",text:"Bridge"},{image:"https://picsum.photos/seed/2/800/600?grayscale",text:"Desk Setup"},{image:"https://picsum.photos/seed/3/800/600?grayscale",text:"Waterfall"},{image:"https://picsum.photos/seed/4/800/600?grayscale",text:"Strawberries"},{image:"https://picsum.photos/seed/5/800/600?grayscale",text:"Deep Diving"},{image:"https://picsum.photos/seed/16/800/600?grayscale",text:"Train Track"},{image:"https://picsum.photos/seed/17/800/600?grayscale",text:"Santorini"},{image:"https://picsum.photos/seed/8/800/600?grayscale",text:"Blurry Lights"},{image:"https://picsum.photos/seed/9/800/600?grayscale",text:"New York"},{image:"https://picsum.photos/seed/10/800/600?grayscale",text:"Good Boy"},{image:"https://picsum.photos/seed/21/800/600?grayscale",text:"Coastline"},{image:"https://picsum.photos/seed/12/800/600?grayscale",text:"Palm Trees"}],h=t&&t.length?t:f;this.mediasImages=h.concat(h),this.medias=this.mediasImages.map((p,m)=>new bA({geometry:this.planeGeometry,gl:this.gl,image:p.image,index:m,length:this.mediasImages.length,renderer:this.renderer,scene:this.scene,screen:this.screen,text:p.text,viewport:this.viewport,bend:n,textColor:s,borderRadius:o,font:c}))}onTouchDown(t){this.isDown=!0,this.scroll.position=this.scroll.current,this.start=t.touches?t.touches[0].clientX:t.clientX}onTouchMove(t){if(!this.isDown)return;const n=t.touches?t.touches[0].clientX:t.clientX,s=(this.start-n)*(this.scrollSpeed*.025);this.scroll.target=this.scroll.position+s}onTouchUp(){this.isDown=!1,this.onCheck()}onWheel(t){const n=t.deltaY||t.wheelDelta||t.detail;this.scroll.target+=(n>0?this.scrollSpeed:-this.scrollSpeed)*.2,this.onCheckDebounce()}onCheck(){if(!this.medias||!this.medias[0])return;const t=this.medias[0].width,n=Math.round(Math.abs(this.scroll.target)/t),s=t*n;this.scroll.target=this.scroll.target<0?-s:s}onResize(){this.screen={width:this.container.clientWidth,height:this.container.clientHeight},this.renderer.setSize(this.screen.width,this.screen.height),this.camera.perspective({aspect:this.screen.width/this.screen.height});const t=this.camera.fov*Math.PI/180,n=2*Math.tan(t/2)*this.camera.position.z,s=n*this.camera.aspect;this.viewport={width:s,height:n},this.medias&&this.medias.forEach(o=>o.onResize({screen:this.screen,viewport:this.viewport}))}update(){this.scroll.current=yA(this.scroll.current,this.scroll.target,this.scroll.ease);const t=this.scroll.current>this.scroll.last?"right":"left";this.medias&&this.medias.forEach(n=>n.update(this.scroll,t)),this.renderer.render({scene:this.scene,camera:this.camera}),this.scroll.last=this.scroll.current,this.raf=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){this.boundOnResize=this.onResize.bind(this),this.boundOnWheel=this.onWheel.bind(this),this.boundOnTouchDown=this.onTouchDown.bind(this),this.boundOnTouchMove=this.onTouchMove.bind(this),this.boundOnTouchUp=this.onTouchUp.bind(this),window.addEventListener("resize",this.boundOnResize),window.addEventListener("mousewheel",this.boundOnWheel),window.addEventListener("wheel",this.boundOnWheel),window.addEventListener("mousedown",this.boundOnTouchDown),window.addEventListener("mousemove",this.boundOnTouchMove),window.addEventListener("mouseup",this.boundOnTouchUp),window.addEventListener("touchstart",this.boundOnTouchDown),window.addEventListener("touchmove",this.boundOnTouchMove),window.addEventListener("touchend",this.boundOnTouchUp)}destroy(){window.cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.boundOnResize),window.removeEventListener("mousewheel",this.boundOnWheel),window.removeEventListener("wheel",this.boundOnWheel),window.removeEventListener("mousedown",this.boundOnTouchDown),window.removeEventListener("mousemove",this.boundOnTouchMove),window.removeEventListener("mouseup",this.boundOnTouchUp),window.removeEventListener("touchstart",this.boundOnTouchDown),window.removeEventListener("touchmove",this.boundOnTouchMove),window.removeEventListener("touchend",this.boundOnTouchUp),this.renderer&&this.renderer.gl&&this.renderer.gl.canvas.parentNode&&this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas)}};function RA({items:a,bend:t=3,textColor:n="#ffffff",borderRadius:s=.05,font:o="bold 30px Figtree",scrollSpeed:c=5,scrollEase:f=.05}){const h=On.useRef(null);return On.useEffect(()=>{const p=new AA(h.current,{items:a,bend:t,textColor:n,borderRadius:s,font:o,scrollSpeed:c,scrollEase:f});return()=>{p.destroy()}},[a,t,n,s,o,c,f]),q.jsx("div",{className:"circular-gallery",ref:h})}const wA="/wrstudio/assets/blog-BcsjCD6T.jpg",CA="/wrstudio/assets/estore2-UQZTlmPz.jpg",DA="/wrstudio/assets/landingPage-DLcFIzCv.jpg",UA="/wrstudio/assets/saasi-BBOURf4g.jpg",LA=()=>q.jsx(q.Fragment,{children:q.jsxs("div",{id:"services",children:[q.jsxs("div",{className:"our-service",children:[q.jsx("h2",{children:"Our Services"}),q.jsx("p",{children:"We turn your ideas into impactful digital experiences — from sleek designs to robust web solutions, crafted with precision and creativity."})]}),q.jsx("div",{className:"cards-container",children:q.jsx("div",{style:{height:"600px",position:"relative"},children:q.jsx(RA,{bend:3,textColor:"#010f55ff",scrollSpeed:3.5,borderRadius:.08,scrollEase:.25,items:[{image:wA,loading:On.lazy,text:"Personal Blog"},{image:CA,text:"EStore"},{image:DA,text:"Landing Page"},{image:UA,text:"A Special Service"}]})})}),q.jsx("button",{children:"A Specific Project? Contact us"})]})}),Dh=({title:a,descr:t,icon:n})=>q.jsx(q.Fragment,{children:q.jsxs("div",{className:"card-cont",children:[q.jsxs("div",{className:"icon-title",children:[q.jsx("div",{className:"icon",children:n}),q.jsx("h4",{children:a})]}),q.jsx("div",{className:"descr-cont",children:t})]})});var vv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L_=vs.createContext&&vs.createContext(vv),NA=["attr","size","title"];function OA(a,t){if(a==null)return{};var n=PA(a,t),s,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(o=0;o<c.length;o++)s=c[o],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(a,s)&&(n[s]=a[s])}return n}function PA(a,t){if(a==null)return{};var n={};for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){if(t.indexOf(s)>=0)continue;n[s]=a[s]}return n}function Oc(){return Oc=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s])}return a},Oc.apply(this,arguments)}function N_(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),n.push.apply(n,s)}return n}function Pc(a){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N_(Object(n),!0).forEach(function(s){zA(a,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):N_(Object(n)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(n,s))})}return a}function zA(a,t,n){return t=FA(t),t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}function FA(a){var t=BA(a,"string");return typeof t=="symbol"?t:t+""}function BA(a,t){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var s=n.call(a,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function xv(a){return a&&a.map((t,n)=>vs.createElement(t.tag,Pc({key:n},t.attr),xv(t.child)))}function oa(a){return t=>vs.createElement(IA,Oc({attr:Pc({},a.attr)},t),xv(a.child))}function IA(a){var t=n=>{var{attr:s,size:o,title:c}=a,f=OA(a,NA),h=o||n.size||"1em",p;return n.className&&(p=n.className),a.className&&(p=(p?p+" ":"")+a.className),vs.createElement("svg",Oc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,f,{className:p,style:Pc(Pc({color:a.color||n.color},n.style),a.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&vs.createElement("title",null,c),a.children)};return L_!==void 0?vs.createElement(L_.Consumer,null,n=>t(n)):t(vv)}function HA(a){return oa({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(a)}function Sv(a){return oa({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(a)}function GA(a){return oa({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(a)}function VA(a){return oa({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(a)}function yv(a){return oa({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(a)}function kA(a){return oa({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(a)}function XA(a){return oa({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(a)}function WA(a){return oa({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M12 7a5 5 0 1 0 5 5"},child:[]},{tag:"path",attr:{d:"M13 3.055a9 9 0 1 0 7.941 7.945"},child:[]},{tag:"path",attr:{d:"M15 6v3h3l3 -3h-3v-3z"},child:[]},{tag:"path",attr:{d:"M15 9l-3 3"},child:[]}]})(a)}const qA=()=>q.jsxs("div",{id:"About",children:[q.jsx("h2",{className:"about-main-title",children:"About Us"}),q.jsx("p",{className:"about-subtitle",children:"Turning ideas into impactful digital experiences that last."}),q.jsxs("div",{className:"about-tree",children:[q.jsxs("div",{className:"branch",children:[q.jsx(Dh,{title:"Our Mission",descr:"At W&R Studio, our mission is to bring bold ideas to life through innovative digital solutions.",icon:q.jsx(yv,{})}),q.jsxs("div",{className:"mini-branch",children:[q.jsxs("div",{className:"mini-purp",children:[q.jsx("h3",{children:"Innovative Solutions"}),q.jsx("p",{children:"We combine creativity with technology to deliver tailored digital experiences."})]}),q.jsxs("div",{className:"mini-purp",children:[q.jsx("h3",{children:"Client-Centered Approach"}),q.jsx("p",{children:"Every project is crafted with your goals in mind, ensuring communication and measurable results."})]})]})]}),q.jsxs("div",{className:"branch",children:[q.jsx(Dh,{title:"Our Expertise",descr:"We craft scalable, user-focused digital products that blend design precision with advanced development.",icon:q.jsx(kA,{})}),q.jsxs("div",{className:"mini-branch",children:[q.jsxs("div",{className:"mini-purp",children:[q.jsx("h3",{children:"Expert Team"}),q.jsx("p",{children:"Our skilled professionals deliver high-quality design, development, and marketing results."})]}),q.jsxs("div",{className:"mini-purp",children:[q.jsx("h3",{children:"Modern Design"}),q.jsx("p",{children:"We build sleek, intuitive, and brand-elevating digital experiences."})]}),q.jsxs("div",{className:"mini-purp",children:[q.jsx("h3",{children:"Scalable Projects"}),q.jsx("p",{children:"Our work grows with your business, ensuring flexibility and longevity."})]})]})]}),q.jsxs("div",{className:"branch",children:[q.jsx(Dh,{title:"Our Objective",descr:"Our goal is to help your brand stand out online through strategy, innovation, and excellence.",icon:q.jsx(WA,{})}),q.jsxs("div",{className:"mini-branch",children:[q.jsxs("div",{className:"mini-purp",children:[q.jsx("h3",{children:"Performance-Driven"}),q.jsx("p",{children:"We ensure your digital presence is fast, secure, and optimized for success."})]}),q.jsxs("div",{className:"mini-purp",children:[q.jsx("h3",{children:"Continuous Support"}),q.jsx("p",{children:"We stay connected beyond launch — maintaining, updating, and improving your project."})]}),q.jsxs("div",{className:"mini-purp",children:[q.jsx("h3",{children:"Data-Backed Strategies"}),q.jsx("p",{children:"Analytics guide our decisions to enhance engagement and conversions."})]}),q.jsxs("div",{className:"mini-purp",children:[q.jsx("h3",{children:"Sustainable Solutions"}),q.jsx("p",{children:"We create future-proof products designed to evolve with your business."})]})]})]})]}),q.jsx("span",{className:"about-footer",children:"W&R Studio — From Concept to Click."})]});function YA(a){return oa({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Mail"},child:[{tag:"path",attr:{d:"M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"},child:[]}]}]})(a)}const jA=()=>q.jsx(q.Fragment,{children:q.jsxs("div",{id:"Contact",children:[q.jsxs("div",{className:"contact-text",children:[q.jsxs("div",{className:"contact-phone",children:[q.jsx(XA,{}),q.jsx("span",{children:"Phone Number"}),q.jsx("p",{children:"+213 501 234 56 / +90 512 345 67 89 "})]}),q.jsxs("div",{className:"contact-email",children:[q.jsx(YA,{}),q.jsx("span",{children:"Email"}),q.jsx("p",{children:"wrstudio@gmail.com"})]}),q.jsxs("div",{className:"contact-web",children:[q.jsx(yv,{}),q.jsx("span",{children:"WebSite"}),q.jsx("p",{children:"wrstudio.com"})]}),q.jsxs("div",{className:"contact-web",children:[q.jsx(Sv,{}),q.jsx("span",{children:"Instagram"}),q.jsx("p",{children:"@wrstudio"})]})]}),q.jsx("div",{className:"contact-form",children:q.jsxs("form",{children:[q.jsx("input",{type:"text",placeholder:"Your Name",name:"name",required:!0}),q.jsx("input",{type:"email",placeholder:"Your Email",name:"email",required:!0}),q.jsxs("select",{name:"service",required:!0,children:[q.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select a Service"}),q.jsx("option",{value:"web",children:"Web Development"}),q.jsx("option",{value:"uiux",children:"UI/UX Design"}),q.jsx("option",{value:"branding",children:"Branding"}),q.jsx("option",{value:"seo",children:"SEO & Marketing"})]}),q.jsx("textarea",{placeholder:"Your Message",name:"message",rows:"5",required:!0}),q.jsx("button",{type:"submit",children:"Send Message"})]})})]})}),ZA=()=>q.jsxs("footer",{style:qe.footer,children:[q.jsxs("div",{style:qe.container,children:[q.jsxs("div",{style:qe.section,children:[q.jsx("h2",{style:qe.logo,children:"W&R Studio"}),q.jsx("p",{style:qe.text,children:"Transforming visions into lasting digital impact. We create modern, scalable, and user-focused digital products."})]}),q.jsxs("div",{style:qe.section,children:[q.jsx("h3",{style:qe.heading,children:"Quick Links"}),q.jsxs("ul",{style:qe.list,children:[q.jsx("li",{children:q.jsx("a",{href:"#Home",style:qe.link,children:"Home"})}),q.jsx("li",{children:q.jsx("a",{href:"#About",style:qe.link,children:"About"})}),q.jsx("li",{children:q.jsx("a",{href:"#Services",style:qe.link,children:"Services"})}),q.jsx("li",{children:q.jsx("a",{href:"#Contact",style:qe.link,children:"Contact"})})]})]}),q.jsxs("div",{style:qe.section,children:[q.jsx("h3",{style:qe.heading,children:"Contact"}),q.jsx("p",{style:qe.text,children:"Email: contact@wrstudio.com"}),q.jsx("p",{style:qe.text,children:"Phone: +123 456 7890"})]}),q.jsxs("div",{style:qe.section,children:[q.jsx("h3",{style:qe.heading,children:"Follow Us"}),q.jsxs("div",{style:qe.social,children:[q.jsx("a",{href:"#",style:qe.icon,children:q.jsx(HA,{})}),q.jsx("a",{href:"#",style:qe.icon,children:q.jsx(VA,{})}),q.jsx("a",{href:"#",style:qe.icon,children:q.jsx(GA,{})}),q.jsx("a",{href:"#",style:qe.icon,children:q.jsx(Sv,{})})]})]})]}),q.jsxs("div",{style:qe.bottom,children:["© ",new Date().getFullYear()," W&R Studio. All rights reserved."]})]}),qe={footer:{background:"#0f0c29",color:"#ffffff",paddingTop:"60px",paddingBottom:"20px",fontFamily:"'Inter', sans-serif"},container:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:"40px",padding:"0 10%"},section:{flex:"1 1 220px",minWidth:"220px"},logo:{fontSize:"24px",fontWeight:"700",color:"#00bfa6",marginBottom:"15px"},heading:{fontSize:"18px",fontWeight:"600",marginBottom:"12px",color:"#ffffff"},text:{fontSize:"14px",lineHeight:"1.6",color:"#d1d1d1",margin:"5px 0"},list:{listStyle:"none",padding:0},link:{color:"#d1d1d1",textDecoration:"none",display:"block",marginBottom:"8px",transition:"color 0.3s"},social:{display:"flex",gap:"15px",marginTop:"10px"},icon:{color:"#00bfa6",fontSize:"16px",transition:"color 0.3s"},bottom:{textAlign:"center",marginTop:"40px",fontSize:"14px",color:"#a0a0a0"}};function KA(){return q.jsxs(q.Fragment,{children:[q.jsx(z1,{}),q.jsx(jb,{}),q.jsx(qA,{}),q.jsx(LA,{}),q.jsx(jA,{}),q.jsx(ZA,{})]})}P1.createRoot(document.getElementById("root")).render(q.jsx(On.StrictMode,{children:q.jsx(KA,{})}));
