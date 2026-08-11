(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ny(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Vf={exports:{}},ae={};var s_;function iy(){if(s_)return ae;s_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function _(O,it,Et){this.props=O,this.context=it,this.refs=M,this.updater=Et||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,it){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,it,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=_.prototype;function U(O,it,Et){this.props=O,this.context=it,this.refs=M,this.updater=Et||E}var C=U.prototype=new L;C.constructor=U,R(C,_.prototype),C.isPureReactComponent=!0;var H=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function D(O,it,Et){var Rt=Et.ref;return{$$typeof:o,type:O,key:it,ref:Rt!==void 0?Rt:null,props:Et}}function w(O,it){return D(O.type,it,O.props)}function I(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function ot(O){var it={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Et){return it[Et]})}var lt=/\/+/g;function ht(O,it){return typeof O=="object"&&O!==null&&O.key!=null?ot(""+O.key):it.toString(36)}function mt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(it){O.status==="pending"&&(O.status="fulfilled",O.value=it)},function(it){O.status==="pending"&&(O.status="rejected",O.reason=it)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,it,Et,Rt,K){var vt=typeof O;(vt==="undefined"||vt==="boolean")&&(O=null);var _t=!1;if(O===null)_t=!0;else switch(vt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(O.$$typeof){case o:case e:_t=!0;break;case y:return _t=O._init,P(_t(O._payload),it,Et,Rt,K)}}if(_t)return K=K(O),_t=Rt===""?"."+ht(O,0):Rt,H(K)?(Et="",_t!=null&&(Et=_t.replace(lt,"$&/")+"/"),P(K,it,Et,"",function(ee){return ee})):K!=null&&(I(K)&&(K=w(K,Et+(K.key==null||O&&O.key===K.key?"":(""+K.key).replace(lt,"$&/")+"/")+_t)),it.push(K)),1;_t=0;var Ht=Rt===""?".":Rt+":";if(H(O))for(var zt=0;zt<O.length;zt++)Rt=O[zt],vt=Ht+ht(Rt,zt),_t+=P(Rt,it,Et,vt,K);else if(zt=x(O),typeof zt=="function")for(O=zt.call(O),zt=0;!(Rt=O.next()).done;)Rt=Rt.value,vt=Ht+ht(Rt,zt++),_t+=P(Rt,it,Et,vt,K);else if(vt==="object"){if(typeof O.then=="function")return P(mt(O),it,Et,Rt,K);throw it=String(O),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return _t}function j(O,it,Et){if(O==null)return O;var Rt=[],K=0;return P(O,Rt,"","",function(vt){return it.call(Et,vt,K++)}),Rt}function Z(O){if(O._status===-1){var it=O._result;it=it(),it.then(function(Et){(O._status===0||O._status===-1)&&(O._status=1,O._result=Et)},function(Et){(O._status===0||O._status===-1)&&(O._status=2,O._result=Et)}),O._status===-1&&(O._status=0,O._result=it)}if(O._status===1)return O._result.default;throw O._result}var yt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Tt={map:j,forEach:function(O,it,Et){j(O,function(){it.apply(this,arguments)},Et)},count:function(O){var it=0;return j(O,function(){it++}),it},toArray:function(O){return j(O,function(it){return it})||[]},only:function(O){if(!I(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ae.Activity=g,ae.Children=Tt,ae.Component=_,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=U,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ae.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},ae.cache=function(O){return function(){return O.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(O,it,Et){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Rt=R({},O.props),K=O.key;if(it!=null)for(vt in it.key!==void 0&&(K=""+it.key),it)!k.call(it,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&it.ref===void 0||(Rt[vt]=it[vt]);var vt=arguments.length-2;if(vt===1)Rt.children=Et;else if(1<vt){for(var _t=Array(vt),Ht=0;Ht<vt;Ht++)_t[Ht]=arguments[Ht+2];Rt.children=_t}return D(O.type,K,Rt)},ae.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ae.createElement=function(O,it,Et){var Rt,K={},vt=null;if(it!=null)for(Rt in it.key!==void 0&&(vt=""+it.key),it)k.call(it,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(K[Rt]=it[Rt]);var _t=arguments.length-2;if(_t===1)K.children=Et;else if(1<_t){for(var Ht=Array(_t),zt=0;zt<_t;zt++)Ht[zt]=arguments[zt+2];K.children=Ht}if(O&&O.defaultProps)for(Rt in _t=O.defaultProps,_t)K[Rt]===void 0&&(K[Rt]=_t[Rt]);return D(O,vt,K)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(O){return{$$typeof:d,render:O}},ae.isValidElement=I,ae.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:Z}},ae.memo=function(O,it){return{$$typeof:p,type:O,compare:it===void 0?null:it}},ae.startTransition=function(O){var it=z.T,Et={};z.T=Et;try{var Rt=O(),K=z.S;K!==null&&K(Et,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(F,yt)}catch(vt){yt(vt)}finally{it!==null&&Et.types!==null&&(it.types=Et.types),z.T=it}},ae.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ae.use=function(O){return z.H.use(O)},ae.useActionState=function(O,it,Et){return z.H.useActionState(O,it,Et)},ae.useCallback=function(O,it){return z.H.useCallback(O,it)},ae.useContext=function(O){return z.H.useContext(O)},ae.useDebugValue=function(){},ae.useDeferredValue=function(O,it){return z.H.useDeferredValue(O,it)},ae.useEffect=function(O,it){return z.H.useEffect(O,it)},ae.useEffectEvent=function(O){return z.H.useEffectEvent(O)},ae.useId=function(){return z.H.useId()},ae.useImperativeHandle=function(O,it,Et){return z.H.useImperativeHandle(O,it,Et)},ae.useInsertionEffect=function(O,it){return z.H.useInsertionEffect(O,it)},ae.useLayoutEffect=function(O,it){return z.H.useLayoutEffect(O,it)},ae.useMemo=function(O,it){return z.H.useMemo(O,it)},ae.useOptimistic=function(O,it){return z.H.useOptimistic(O,it)},ae.useReducer=function(O,it,Et){return z.H.useReducer(O,it,Et)},ae.useRef=function(O){return z.H.useRef(O)},ae.useState=function(O){return z.H.useState(O)},ae.useSyncExternalStore=function(O,it,Et){return z.H.useSyncExternalStore(O,it,Et)},ae.useTransition=function(){return z.H.useTransition()},ae.version="19.2.8",ae}var r_;function dd(){return r_||(r_=1,Vf.exports=iy()),Vf.exports}var Jn=dd();const J=ny(Jn);var kf={exports:{}},To={},Xf={exports:{}},Wf={};var o_;function ay(){return o_||(o_=1,(function(o){function e(P,j){var Z=P.length;P.push(j);t:for(;0<Z;){var yt=Z-1>>>1,Tt=P[yt];if(0<l(Tt,j))P[yt]=j,P[Z]=Tt,Z=yt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var j=P[0],Z=P.pop();if(Z!==j){P[0]=Z;t:for(var yt=0,Tt=P.length,O=Tt>>>1;yt<O;){var it=2*(yt+1)-1,Et=P[it],Rt=it+1,K=P[Rt];if(0>l(Et,Z))Rt<Tt&&0>l(K,Et)?(P[yt]=K,P[Rt]=Z,yt=Rt):(P[yt]=Et,P[it]=Z,yt=it);else if(Rt<Tt&&0>l(K,Z))P[yt]=K,P[Rt]=Z,yt=Rt;else break t}}return j}function l(P,j){var Z=P.sortIndex-j.sortIndex;return Z!==0?Z:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],y=1,g=null,S=3,x=!1,E=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=P)s(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function H(P){if(R=!1,C(P),!E)if(i(m)!==null)E=!0,F||(F=!0,ot());else{var j=i(p);j!==null&&mt(H,j.startTime-P)}}var F=!1,z=-1,k=5,D=-1;function w(){return M?!0:!(o.unstable_now()-D<k)}function I(){if(M=!1,F){var P=o.unstable_now();D=P;var j=!0;try{t:{E=!1,R&&(R=!1,L(z),z=-1),x=!0;var Z=S;try{e:{for(C(P),g=i(m);g!==null&&!(g.expirationTime>P&&w());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,S=g.priorityLevel;var Tt=yt(g.expirationTime<=P);if(P=o.unstable_now(),typeof Tt=="function"){g.callback=Tt,C(P),j=!0;break e}g===i(m)&&s(m),C(P)}else s(m);g=i(m)}if(g!==null)j=!0;else{var O=i(p);O!==null&&mt(H,O.startTime-P),j=!1}}break t}finally{g=null,S=Z,x=!1}j=void 0}}finally{j?ot():F=!1}}}var ot;if(typeof U=="function")ot=function(){U(I)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ht=lt.port2;lt.port1.onmessage=I,ot=function(){ht.postMessage(null)}}else ot=function(){_(I,0)};function mt(P,j){z=_(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var Z=S;S=j;try{return P()}finally{S=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=S;S=P;try{return j()}finally{S=Z}},o.unstable_scheduleCallback=function(P,j,Z){var yt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?yt+Z:yt):Z=yt,P){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Z+Tt,P={id:y++,callback:j,priorityLevel:P,startTime:Z,expirationTime:Tt,sortIndex:-1},Z>yt?(P.sortIndex=Z,e(p,P),i(m)===null&&P===i(p)&&(R?(L(z),z=-1):R=!0,mt(H,Z-yt))):(P.sortIndex=Tt,e(m,P),E||x||(E=!0,F||(F=!0,ot()))),P},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(P){var j=S;return function(){var Z=S;S=j;try{return P.apply(this,arguments)}finally{S=Z}}}})(Wf)),Wf}var l_;function sy(){return l_||(l_=1,Xf.exports=ay()),Xf.exports}var qf={exports:{}},Tn={};var c_;function ry(){if(c_)return Tn;c_=1;var o=dd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:y}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,y)},Tn.flushSync=function(m){var p=h.T,y=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=y,s.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,g=d(y,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:x}):y==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,g=d(y,p.crossOrigin);s.d.L(m,y,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Tn.requestFormReset=function(m){s.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,y){return h.H.useFormState(m,p,y)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.8",Tn}var u_;function oy(){if(u_)return qf.exports;u_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=ry(),qf.exports}var f_;function ly(){if(f_)return To;f_=1;var o=sy(),e=dd(),i=oy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,b=u.child;b;){if(b===a){v=!0,a=u,r=f;break}if(b===r){v=!0,r=u,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,r=u;break}if(b===r){v=!0,r=f,a=u;break}b=b.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ht(t.type)||"Memo";case k:n=t._payload,t=t._init;try{return ht(t(n))}catch{}}return null}var mt=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},yt=[],Tt=-1;function O(t){return{current:t}}function it(t){0>Tt||(t.current=yt[Tt],yt[Tt]=null,Tt--)}function Et(t,n){Tt++,yt[Tt]=t.current,t.current=n}var Rt=O(null),K=O(null),vt=O(null),_t=O(null);function Ht(t,n){switch(Et(vt,n),Et(K,t),Et(Rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Cg(n),t=wg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(Rt),Et(Rt,t)}function zt(){it(Rt),it(K),it(vt)}function ee(t){t.memoizedState!==null&&Et(_t,t);var n=Rt.current,a=wg(n,t.type);n!==a&&(Et(K,t),Et(Rt,a))}function ke(t){K.current===t&&(it(Rt),it(K)),_t.current===t&&(it(_t),yo._currentValue=Z)}var he,G;function Ee(t){if(he===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);he=n&&n[1]||"",G=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+he+t+G}var Jt=!1;function ye(t,n){if(!t||Jt)return"";Jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(rt){var nt=rt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(rt){nt=rt}t.call(pt.prototype)}}else{try{throw Error()}catch(rt){nt=rt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(rt){if(rt&&nt&&typeof rt.stack=="string")return[rt.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var B=v.split(`
`),$=b.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===$.length)for(r=B.length-1,u=$.length-1;1<=r&&0<=u&&B[r]!==$[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==$[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==$[u]){var ut=`
`+B[r].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=r&&0<=u);break}}}finally{Jt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ee(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return ye(t.type,!1);case 11:return ye(t.type.render,!1);case 1:return ye(t.type,!0);case 31:return Ee("Activity");default:return""}}function He(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Bt=Object.prototype.hasOwnProperty,se=o.unstable_scheduleCallback,je=o.unstable_cancelCallback,Ze=o.unstable_shouldYield,N=o.unstable_requestPaint,T=o.unstable_now,tt=o.unstable_getCurrentPriorityLevel,ft=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,Yt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Wt=o.log,qt=o.unstable_setDisableYieldValue,bt=null,wt=null;function Zt(t){if(typeof Wt=="function"&&qt(t),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(bt,t)}catch{}}var Pt=Math.clz32?Math.clz32:X,Ut=Math.log,re=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Ut(t)/re|0)|0}var At=256,Dt=262144,It=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?u=Mt(r):(v&=b,v!==0?u=Mt(v):a||(a=b&~t,a!==0&&(u=Mt(a))))):(b=r&~f,b!==0?u=Mt(b):v!==0?u=Mt(v):a||(a=r&~t,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ft(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var t=It;return It<<=1,(It&62914560)===0&&(It=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Rn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ti(t,n,a,r,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=v&~a;0<a;){var ut=31-Pt(a),pt=1<<ut;b[ut]=0,B[ut]=-1;var nt=$[ut];if(nt!==null)for($[ut]=null,ut=0;ut<nt.length;ut++){var rt=nt[ut];rt!==null&&(rt.lane&=-536870913)}a&=~pt}r!==0&&Nr(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Nr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Pt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ti(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Pt(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function bs(t,n){var a=n&-n;return a=(a&42)!==0?1:As(a),(a&(t.suspendedLanes|n))!==0?0:a}function As(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Rs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Wa(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:Jg(t.type))}function Or(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var Gn=Math.random().toString(36).slice(2),nn="__reactFiber$"+Gn,_n="__reactProps$"+Gn,la="__reactContainer$"+Gn,zr="__reactEvents$"+Gn,zc="__reactListeners$"+Gn,Pc="__reactHandles$"+Gn,Go="__reactResources$"+Gn,qa="__reactMarker$"+Gn;function A(t){delete t[nn],delete t[_n],delete t[zr],delete t[zc],delete t[Pc]}function W(t){var n=t[nn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[la]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Pg(t);t!==null;){if(a=t[nn])return a;t=Pg(t)}return n}t=a,a=t.parentNode}return null}function at(t){if(t=t[nn]||t[la]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function st(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function q(t){var n=t[Go];return n||(n=t[Go]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(t){t[qa]=!0}var Lt=new Set,Vt={};function Ot(t,n){Kt(t,n),Kt(t+"Capture",n)}function Kt(t,n){for(Vt[t]=n,t=0;t<n.length;t++)Lt.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},fe={};function Ue(t){return Bt.call(fe,t)?!0:Bt.call(Qt,t)?!1:ne.test(t)?fe[t]=!0:(Qt[t]=!0,!1)}function Ge(t,n,a){if(Ue(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Le(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function de(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function kt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function be(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function vn(t){if(!t._valueTracker){var n=Xe(t)?"checked":"value";t._valueTracker=be(t,n,""+t[n])}}function Oi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Xe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function pn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ya=/[\n"\\]/g;function ge(t){return t.replace(Ya,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(t,n,a,r,u,f,v,b){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+kt(n)):t.value!==""+kt(n)&&(t.value=""+kt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?un(t,v,kt(n)):a!=null?un(t,v,kt(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+kt(b):t.removeAttribute("name")}function Cn(t,n,a,r,u,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){vn(t);return}a=a!=null?""+kt(a):"",n=n!=null?""+kt(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),vn(t)}function un(t,n,a){n==="number"&&pn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Je(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+kt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Cs(t,n,a){if(n!=null&&(n=""+kt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+kt(a):""}function bi(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(mt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=kt(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),vn(t)}function ws(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Qv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bd(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Qv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ad(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&bd(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&bd(t,f,n[f])}function Ic(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(t){return $v.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Bc=null;function Fc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ds=null,Us=null;function Rd(t){var n=at(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(En(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[_n]||null;if(!u)throw Error(s(90));En(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Oi(r)}break t;case"textarea":Cs(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Je(t,!!a.multiple,n,!1)}}}var Hc=!1;function Cd(t,n,a){if(Hc)return t(n,a);Hc=!0;try{var r=t(n);return r}finally{if(Hc=!1,(Ds!==null||Us!==null)&&(wl(),Ds&&(n=Ds,t=Us,Us=Ds=null,Rd(n),t)))for(n=0;n<t.length;n++)Rd(t[n])}}function Pr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[_n]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=!1;if(Pi)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Gc=!1}var ca=null,Vc=null,ko=null;function wd(){if(ko)return ko;var t,n=Vc,a=n.length,r,u="value"in ca?ca.value:ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return ko=u.slice(t,1<r?1-r:void 0)}function Xo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Dd(){return!1}function Un(t){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Dd,this.isPropagationStopped=Dd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=Un(Za),Br=g({},Za,{view:0,detail:0}),t0=Un(Br),kc,Xc,Fr,Yo=g({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fr&&(Fr&&t.type==="mousemove"?(kc=t.screenX-Fr.screenX,Xc=t.screenY-Fr.screenY):Xc=kc=0,Fr=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),Ud=Un(Yo),e0=g({},Yo,{dataTransfer:0}),n0=Un(e0),i0=g({},Br,{relatedTarget:0}),Wc=Un(i0),a0=g({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=Un(a0),r0=g({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o0=Un(r0),l0=g({},Za,{data:0}),Ld=Un(l0),c0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=f0[t])?!!n[t]:!1}function qc(){return h0}var d0=g({},Br,{key:function(t){if(t.key){var n=c0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?u0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p0=Un(d0),m0=g({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Un(m0),g0=g({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),_0=Un(g0),v0=g({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),S0=Un(v0),y0=g({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x0=Un(y0),M0=g({},Za,{newState:0,oldState:0}),E0=Un(M0),T0=[9,13,27,32],Yc=Pi&&"CompositionEvent"in window,Hr=null;Pi&&"documentMode"in document&&(Hr=document.documentMode);var b0=Pi&&"TextEvent"in window&&!Hr,Od=Pi&&(!Yc||Hr&&8<Hr&&11>=Hr),zd=" ",Pd=!1;function Id(t,n){switch(t){case"keyup":return T0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function A0(t,n){switch(t){case"compositionend":return Bd(n);case"keypress":return n.which!==32?null:(Pd=!0,zd);case"textInput":return t=n.data,t===zd&&Pd?null:t;default:return null}}function R0(t,n){if(Ls)return t==="compositionend"||!Yc&&Id(t,n)?(t=wd(),ko=Vc=ca=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Od&&n.locale!=="ko"?null:n.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!C0[t.type]:n==="textarea"}function Hd(t,n,a,r){Ds?Us?Us.push(r):Us=[r]:Ds=r,n=Pl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Gr=null,Vr=null;function w0(t){Mg(t,0)}function Zo(t){var n=st(t);if(Oi(n))return t}function Gd(t,n){if(t==="change")return n}var Vd=!1;if(Pi){var Zc;if(Pi){var jc="oninput"in document;if(!jc){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),jc=typeof kd.oninput=="function"}Zc=jc}else Zc=!1;Vd=Zc&&(!document.documentMode||9<document.documentMode)}function Xd(){Gr&&(Gr.detachEvent("onpropertychange",Wd),Vr=Gr=null)}function Wd(t){if(t.propertyName==="value"&&Zo(Vr)){var n=[];Hd(n,Vr,t,Fc(t)),Cd(w0,n)}}function D0(t,n,a){t==="focusin"?(Xd(),Gr=n,Vr=a,Gr.attachEvent("onpropertychange",Wd)):t==="focusout"&&Xd()}function U0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(Vr)}function L0(t,n){if(t==="click")return Zo(n)}function N0(t,n){if(t==="input"||t==="change")return Zo(n)}function O0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:O0;function kr(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Bt.call(n,u)||!Vn(t[u],n[u]))return!1}return!0}function qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yd(t,n){var a=qd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qd(a)}}function Zd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Zd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function jd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=pn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pn(t.document)}return n}function Kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var z0=Pi&&"documentMode"in document&&11>=document.documentMode,Ns=null,Qc=null,Xr=null,Jc=!1;function Kd(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Ns==null||Ns!==pn(r)||(r=Ns,"selectionStart"in r&&Kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&kr(Xr,r)||(Xr=r,r=Pl(Qc,"onSelect"),0<r.length&&(n=new qo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ns)))}function ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Os={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},$c={},Qd={};Pi&&(Qd=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Ka(t){if($c[t])return $c[t];if(!Os[t])return t;var n=Os[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qd)return $c[t]=n[a];return t}var Jd=Ka("animationend"),$d=Ka("animationiteration"),tp=Ka("animationstart"),P0=Ka("transitionrun"),I0=Ka("transitionstart"),B0=Ka("transitioncancel"),ep=Ka("transitionend"),np=new Map,tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tu.push("scrollEnd");function di(t,n){np.set(t,n),Ot(n,[t])}var jo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],zs=0,eu=0;function Ko(){for(var t=zs,n=eu=zs=0;n<t;){var a=ei[n];ei[n++]=null;var r=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&ip(a,u,f)}}function Qo(t,n,a,r){ei[zs++]=t,ei[zs++]=n,ei[zs++]=a,ei[zs++]=r,eu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function nu(t,n,a,r){return Qo(t,n,a,r),Jo(t)}function Qa(t,n){return Qo(t,null,null,n),Jo(t)}function ip(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pt(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function Jo(t){if(50<ho)throw ho=0,hf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ps={};function F0(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,r){return new F0(t,n,a,r)}function iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ap(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $o(t,n,a,r,u,f){var v=0;if(r=t,typeof t=="function")iu(t)&&(v=1);else if(typeof t=="string")v=XS(t,a,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=kn(31,a,n,u),t.elementType=D,t.lanes=f,t;case R:return Ja(a.children,u,f,n);case M:v=8,u|=24;break;case _:return t=kn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case H:return t=kn(13,a,n,u),t.elementType=H,t.lanes=f,t;case F:return t=kn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:v=10;break t;case L:v=9;break t;case C:v=11;break t;case z:v=14;break t;case k:v=16,r=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=kn(v,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function Ja(t,n,a,r){return t=kn(7,t,r,n),t.lanes=a,t}function au(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function sp(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function su(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var rp=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=rp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:He(n)},rp.set(t,n),n)}return{value:t,source:n,stack:He(n)}}var Is=[],Bs=0,tl=null,Wr=0,ii=[],ai=0,ua=null,Ai=1,Ri="";function Bi(t,n){Is[Bs++]=Wr,Is[Bs++]=tl,tl=t,Wr=n}function op(t,n,a){ii[ai++]=Ai,ii[ai++]=Ri,ii[ai++]=ua,ua=t;var r=Ai;t=Ri;var u=32-Pt(r)-1;r&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Ai=1<<32-Pt(n)+u|a<<u|r,Ri=f+t}else Ai=1<<f|a<<u|r,Ri=t}function ru(t){t.return!==null&&(Bi(t,1),op(t,1,0))}function ou(t){for(;t===tl;)tl=Is[--Bs],Is[Bs]=null,Wr=Is[--Bs],Is[Bs]=null;for(;t===ua;)ua=ii[--ai],ii[ai]=null,Ri=ii[--ai],ii[ai]=null,Ai=ii[--ai],ii[ai]=null}function lp(t,n){ii[ai++]=Ai,ii[ai++]=Ri,ii[ai++]=ua,Ai=n.id,Ri=n.overflow,ua=t}var Sn=null,We=null,xe=!1,fa=null,si=!1,lu=Error(s(519));function ha(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qr(ni(n,t)),lu}function cp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[nn]=t,n[_n]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)me(mo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Cn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),bi(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Ag(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||ha(t,!0)}function up(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:Sn=Sn.return}}function Fs(t){if(t!==Sn)return!1;if(!xe)return up(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Rf(t.type,t.memoizedProps)),a=!a),a&&We&&ha(t),up(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=zg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=zg(t)}else n===27?(n=We,Aa(t.type)?(t=Lf,Lf=null,We=t):We=n):We=Sn?oi(t.stateNode.nextSibling):null;return!0}function $a(){We=Sn=null,xe=!1}function cu(){var t=fa;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),fa=null),t}function qr(t){fa===null?fa=[t]:fa.push(t)}var uu=O(null),ts=null,Fi=null;function da(t,n,a){Et(uu,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=uu.current,it(uu)}function fu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function hu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),fu(f.return,a,t),r||(v=null);break t}f=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),fu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Hs(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var b=u.type;Vn(u.pendingProps.value,v.value)||(t!==null?t.push(b):t=[b])}}else if(u===_t.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(yo):t=[yo])}u=u.return}t!==null&&hu(n,t,a,r),n.flags|=262144}function el(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function es(t){ts=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yn(t){return fp(ts,t)}function nl(t,n){return ts===null&&es(t),fp(t,n)}function fp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(s(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var H0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},G0=o.unstable_scheduleCallback,V0=o.unstable_NormalPriority,an={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function du(){return{controller:new H0,data:new Map,refCount:0}}function Yr(t){t.refCount--,t.refCount===0&&G0(V0,function(){t.controller.abort()})}var Zr=null,pu=0,Gs=0,Vs=null;function k0(t,n){if(Zr===null){var a=Zr=[];pu=0,Gs=vf(),Vs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return pu++,n.then(hp,hp),n}function hp(){if(--pu===0&&Zr!==null){Vs!==null&&(Vs.status="fulfilled");var t=Zr;Zr=null,Gs=0,Vs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function X0(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var dp=P.S;P.S=function(t,n){Km=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&k0(t,n),dp!==null&&dp(t,n)};var ns=O(null);function mu(){var t=ns.current;return t!==null?t:Ve.pooledCache}function il(t,n){n===null?Et(ns,ns.current):Et(ns,n.pool)}function pp(){var t=mu();return t===null?null:{parent:an._currentValue,pool:t}}var ks=Error(s(460)),gu=Error(s(474)),al=Error(s(542)),sl={then:function(){}};function mp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vp(t),t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vp(t),t}throw as=n,ks}}function is(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(as=a,ks):a}}var as=null;function _p(){if(as===null)throw Error(s(459));var t=as;return as=null,t}function vp(t){if(t===ks||t===al)throw Error(s(483))}var Xs=null,jr=0;function rl(t){var n=jr;return jr+=1,Xs===null&&(Xs=[]),gp(Xs,t,n)}function Kr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ol(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sp(t){function n(Y,V){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function r(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Ii(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function v(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,V,Q,dt){return V===null||V.tag!==6?(V=au(Q,Y.mode,dt),V.return=Y,V):(V=u(V,Q),V.return=Y,V)}function B(Y,V,Q,dt){var $t=Q.type;return $t===R?ut(Y,V,Q.props.children,dt,Q.key):V!==null&&(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===k&&is($t)===V.type)?(V=u(V,Q.props),Kr(V,Q),V.return=Y,V):(V=$o(Q.type,Q.key,Q.props,null,Y.mode,dt),Kr(V,Q),V.return=Y,V)}function $(Y,V,Q,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=su(Q,Y.mode,dt),V.return=Y,V):(V=u(V,Q.children||[]),V.return=Y,V)}function ut(Y,V,Q,dt,$t){return V===null||V.tag!==7?(V=Ja(Q,Y.mode,dt,$t),V.return=Y,V):(V=u(V,Q),V.return=Y,V)}function pt(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=au(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return Q=$o(V.type,V.key,V.props,null,Y.mode,Q),Kr(Q,V),Q.return=Y,Q;case E:return V=su(V,Y.mode,Q),V.return=Y,V;case k:return V=is(V),pt(Y,V,Q)}if(mt(V)||ot(V))return V=Ja(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return pt(Y,rl(V),Q);if(V.$$typeof===U)return pt(Y,nl(Y,V),Q);ol(Y,V)}return null}function nt(Y,V,Q,dt){var $t=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return $t!==null?null:b(Y,V,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===$t?B(Y,V,Q,dt):null;case E:return Q.key===$t?$(Y,V,Q,dt):null;case k:return Q=is(Q),nt(Y,V,Q,dt)}if(mt(Q)||ot(Q))return $t!==null?null:ut(Y,V,Q,dt,null);if(typeof Q.then=="function")return nt(Y,V,rl(Q),dt);if(Q.$$typeof===U)return nt(Y,V,nl(Y,Q),dt);ol(Y,Q)}return null}function rt(Y,V,Q,dt,$t){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get(Q)||null,b(V,Y,""+dt,$t);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case x:return Y=Y.get(dt.key===null?Q:dt.key)||null,B(V,Y,dt,$t);case E:return Y=Y.get(dt.key===null?Q:dt.key)||null,$(V,Y,dt,$t);case k:return dt=is(dt),rt(Y,V,Q,dt,$t)}if(mt(dt)||ot(dt))return Y=Y.get(Q)||null,ut(V,Y,dt,$t,null);if(typeof dt.then=="function")return rt(Y,V,Q,rl(dt),$t);if(dt.$$typeof===U)return rt(Y,V,Q,nl(V,dt),$t);ol(V,dt)}return null}function Gt(Y,V,Q,dt){for(var $t=null,Re=null,Xt=V,le=V=0,ve=null;Xt!==null&&le<Q.length;le++){Xt.index>le?(ve=Xt,Xt=null):ve=Xt.sibling;var Ce=nt(Y,Xt,Q[le],dt);if(Ce===null){Xt===null&&(Xt=ve);break}t&&Xt&&Ce.alternate===null&&n(Y,Xt),V=f(Ce,V,le),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce,Xt=ve}if(le===Q.length)return a(Y,Xt),xe&&Bi(Y,le),$t;if(Xt===null){for(;le<Q.length;le++)Xt=pt(Y,Q[le],dt),Xt!==null&&(V=f(Xt,V,le),Re===null?$t=Xt:Re.sibling=Xt,Re=Xt);return xe&&Bi(Y,le),$t}for(Xt=r(Xt);le<Q.length;le++)ve=rt(Xt,Y,le,Q[le],dt),ve!==null&&(t&&ve.alternate!==null&&Xt.delete(ve.key===null?le:ve.key),V=f(ve,V,le),Re===null?$t=ve:Re.sibling=ve,Re=ve);return t&&Xt.forEach(function(Ua){return n(Y,Ua)}),xe&&Bi(Y,le),$t}function te(Y,V,Q,dt){if(Q==null)throw Error(s(151));for(var $t=null,Re=null,Xt=V,le=V=0,ve=null,Ce=Q.next();Xt!==null&&!Ce.done;le++,Ce=Q.next()){Xt.index>le?(ve=Xt,Xt=null):ve=Xt.sibling;var Ua=nt(Y,Xt,Ce.value,dt);if(Ua===null){Xt===null&&(Xt=ve);break}t&&Xt&&Ua.alternate===null&&n(Y,Xt),V=f(Ua,V,le),Re===null?$t=Ua:Re.sibling=Ua,Re=Ua,Xt=ve}if(Ce.done)return a(Y,Xt),xe&&Bi(Y,le),$t;if(Xt===null){for(;!Ce.done;le++,Ce=Q.next())Ce=pt(Y,Ce.value,dt),Ce!==null&&(V=f(Ce,V,le),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return xe&&Bi(Y,le),$t}for(Xt=r(Xt);!Ce.done;le++,Ce=Q.next())Ce=rt(Xt,Y,le,Ce.value,dt),Ce!==null&&(t&&Ce.alternate!==null&&Xt.delete(Ce.key===null?le:Ce.key),V=f(Ce,V,le),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return t&&Xt.forEach(function(ey){return n(Y,ey)}),xe&&Bi(Y,le),$t}function Be(Y,V,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===R&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var $t=Q.key;V!==null;){if(V.key===$t){if($t=Q.type,$t===R){if(V.tag===7){a(Y,V.sibling),dt=u(V,Q.props.children),dt.return=Y,Y=dt;break t}}else if(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===k&&is($t)===V.type){a(Y,V.sibling),dt=u(V,Q.props),Kr(dt,Q),dt.return=Y,Y=dt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}Q.type===R?(dt=Ja(Q.props.children,Y.mode,dt,Q.key),dt.return=Y,Y=dt):(dt=$o(Q.type,Q.key,Q.props,null,Y.mode,dt),Kr(dt,Q),dt.return=Y,Y=dt)}return v(Y);case E:t:{for($t=Q.key;V!==null;){if(V.key===$t)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(Y,V.sibling),dt=u(V,Q.children||[]),dt.return=Y,Y=dt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}dt=su(Q,Y.mode,dt),dt.return=Y,Y=dt}return v(Y);case k:return Q=is(Q),Be(Y,V,Q,dt)}if(mt(Q))return Gt(Y,V,Q,dt);if(ot(Q)){if($t=ot(Q),typeof $t!="function")throw Error(s(150));return Q=$t.call(Q),te(Y,V,Q,dt)}if(typeof Q.then=="function")return Be(Y,V,rl(Q),dt);if(Q.$$typeof===U)return Be(Y,V,nl(Y,Q),dt);ol(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(Y,V.sibling),dt=u(V,Q),dt.return=Y,Y=dt):(a(Y,V),dt=au(Q,Y.mode,dt),dt.return=Y,Y=dt),v(Y)):a(Y,V)}return function(Y,V,Q,dt){try{jr=0;var $t=Be(Y,V,Q,dt);return Xs=null,$t}catch(Xt){if(Xt===ks||Xt===al)throw Xt;var Re=kn(29,Xt,null,Y.mode);return Re.lanes=dt,Re.return=Y,Re}}}var ss=Sp(!0),yp=Sp(!1),pa=!1;function _u(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ga(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Jo(t),ip(t,null,a),n}return Qo(t,r,n,a),Jo(t)}function Qr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ti(t,a)}}function Su(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var yu=!1;function Jr(){if(yu){var t=Vs;if(t!==null)throw t}}function $r(t,n,a,r){yu=!1;var u=t.updateQueue;pa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var B=b,$=B.next;B.next=null,v===null?f=$:v.next=$,v=B;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,b=ut.lastBaseUpdate,b!==v&&(b===null?ut.firstBaseUpdate=$:b.next=$,ut.lastBaseUpdate=B))}if(f!==null){var pt=u.baseState;v=0,ut=$=B=null,b=f;do{var nt=b.lane&-536870913,rt=nt!==b.lane;if(rt?(_e&nt)===nt:(r&nt)===nt){nt!==0&&nt===Gs&&(yu=!0),ut!==null&&(ut=ut.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Gt=t,te=b;nt=n;var Be=a;switch(te.tag){case 1:if(Gt=te.payload,typeof Gt=="function"){pt=Gt.call(Be,pt,nt);break t}pt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=te.payload,nt=typeof Gt=="function"?Gt.call(Be,pt,nt):Gt,nt==null)break t;pt=g({},pt,nt);break t;case 2:pa=!0}}nt=b.callback,nt!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[nt]:rt.push(nt))}else rt={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ut===null?($=ut=rt,B=pt):ut=ut.next=rt,v|=nt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;rt=b,b=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ut===null&&(B=pt),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),xa|=v,t.lanes=v,t.memoizedState=pt}}function xp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Mp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xp(a[t],n)}var Ws=O(null),ll=O(0);function Ep(t,n){t=ji,Et(ll,t),Et(Ws,n),ji=t|n.baseLanes}function xu(){Et(ll,ji),Et(Ws,Ws.current)}function Mu(){ji=ll.current,it(Ws),it(ll)}var Xn=O(null),ri=null;function _a(t){var n=t.alternate;Et($e,$e.current&1),Et(Xn,t),ri===null&&(n===null||Ws.current!==null||n.memoizedState!==null)&&(ri=t)}function Eu(t){Et($e,$e.current),Et(Xn,t),ri===null&&(ri=t)}function Tp(t){t.tag===22?(Et($e,$e.current),Et(Xn,t),ri===null&&(ri=t)):va()}function va(){Et($e,$e.current),Et(Xn,Xn.current)}function Wn(t){it(Xn),ri===t&&(ri=null),it($e)}var $e=O(0);function cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Df(a)||Uf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,oe=null,Pe=null,sn=null,ul=!1,qs=!1,rs=!1,fl=0,to=0,Ys=null,W0=0;function Ke(){throw Error(s(321))}function Tu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function bu(t,n,a,r,u,f){return Gi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?om:Hu,rs=!1,f=a(r,u),rs=!1,qs&&(f=Ap(n,a,r,u)),bp(t),f}function bp(t){P.H=io;var n=Pe!==null&&Pe.next!==null;if(Gi=0,sn=Pe=oe=null,ul=!1,to=0,Ys=null,n)throw Error(s(300));t===null||rn||(t=t.dependencies,t!==null&&el(t)&&(rn=!0))}function Ap(t,n,a,r){oe=t;var u=0;do{if(qs&&(Ys=null),to=0,qs=!1,25<=u)throw Error(s(301));if(u+=1,sn=Pe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=lm,f=n(a,r)}while(qs);return f}function q0(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(oe.flags|=1024),n}function Au(){var t=fl!==0;return fl=0,t}function Ru(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Cu(t){if(ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ul=!1}Gi=0,sn=Pe=oe=null,qs=!1,to=fl=0,Ys=null}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?oe.memoizedState=sn=t:sn=sn.next=t,sn}function tn(){if(Pe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=sn===null?oe.memoizedState:sn.next;if(n!==null)sn=n,Pe=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},sn===null?oe.memoizedState=sn=t:sn=sn.next=t}return sn}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(t){var n=to;return to+=1,Ys===null&&(Ys=[]),t=gp(Ys,t,n),n=oe,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?om:Hu),t}function dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===U)return yn(t)}throw Error(s(438,String(t)))}function wu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=w;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function pl(t){var n=tn();return Du(n,Pe,t)}function Du(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var b=v=null,B=null,$=n,ut=!1;do{var pt=$.lane&-536870913;if(pt!==$.lane?(_e&pt)===pt:(Gi&pt)===pt){var nt=$.revertLane;if(nt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),pt===Gs&&(ut=!0);else if((Gi&nt)===nt){$=$.next,nt===Gs&&(ut=!0);continue}else pt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=pt,v=f):B=B.next=pt,oe.lanes|=nt,xa|=nt;pt=$.action,rs&&a(f,pt),f=$.hasEagerState?$.eagerState:a(f,pt)}else nt={lane:pt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=nt,v=f):B=B.next=nt,oe.lanes|=pt,xa|=pt;$=$.next}while($!==null&&$!==n);if(B===null?v=f:B.next=b,!Vn(f,t.memoizedState)&&(rn=!0,ut&&(a=Vs,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Uu(t){var n=tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);Vn(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Rp(t,n,a){var r=oe,u=tn(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Vn((Pe||u).memoizedState,a);if(v&&(u.memoizedState=a,rn=!0),u=u.queue,Ou(Dp.bind(null,r,u,t),[t]),u.getSnapshot!==n||v||sn!==null&&sn.memoizedState.tag&1){if(r.flags|=2048,Zs(9,{destroy:void 0},wp.bind(null,r,u,a,n),null),Ve===null)throw Error(s(349));f||(Gi&127)!==0||Cp(r,n,a)}return a}function Cp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=hl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wp(t,n,a,r){n.value=a,n.getSnapshot=r,Up(n)&&Lp(t)}function Dp(t,n,a){return a(function(){Up(n)&&Lp(t)})}function Up(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function Lp(t){var n=Qa(t,2);n!==null&&Pn(n,t,2)}function Lu(t){var n=wn();if(typeof t=="function"){var a=t;if(t=a(),rs){Zt(!0);try{a()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function Np(t,n,a,r){return t.baseState=a,Du(t,Pe,typeof r=="function"?r:Vi)}function Y0(t,n,a,r,u){if(_l(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Op(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Op(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var b=a(u,r),B=P.S;B!==null&&B(v,b),zp(t,n,b)}catch($){Nu(t,n,$)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,r),zp(t,n,f)}catch($){Nu(t,n,$)}}function zp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Pp(t,n,r)},function(r){return Nu(t,n,r)}):Pp(t,n,a)}function Pp(t,n,a){n.status="fulfilled",n.value=a,Ip(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Op(t,a)))}function Nu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Ip(n),n=n.next;while(n!==r)}t.action=null}function Ip(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Bp(t,n){return n}function Fp(t,n){if(xe){var a=Ve.formState;if(a!==null){t:{var r=oe;if(xe){if(We){e:{for(var u=We,f=si;u.nodeType!==8;){if(!f){u=null;break e}if(u=oi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=oi(u.nextSibling),r=u.data==="F!";break t}}ha(r)}r=!1}r&&(n=a[0])}}return a=wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bp,lastRenderedState:n},a.queue=r,a=am.bind(null,oe,r),r.dispatch=a,r=Lu(!1),f=Fu.bind(null,oe,!1,r.queue),r=wn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Y0.bind(null,oe,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function Hp(t){var n=tn();return Gp(n,Pe,t)}function Gp(t,n,a){if(n=Du(t,n,Bp)[0],t=pl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=eo(n)}catch(v){throw v===ks?al:v}else r=n;n=tn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Zs(9,{destroy:void 0},Z0.bind(null,u,a),null)),[r,f,t]}function Z0(t,n){t.action=n}function Vp(t){var n=tn(),a=Pe;if(a!==null)return Gp(n,a,t);tn(),n=n.memoizedState,a=tn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Zs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=hl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function kp(){return tn().memoizedState}function ml(t,n,a,r){var u=wn();oe.flags|=t,u.memoizedState=Zs(1|n,{destroy:void 0},a,r===void 0?null:r)}function gl(t,n,a,r){var u=tn();r=r===void 0?null:r;var f=u.memoizedState.inst;Pe!==null&&r!==null&&Tu(r,Pe.memoizedState.deps)?u.memoizedState=Zs(n,f,a,r):(oe.flags|=t,u.memoizedState=Zs(1|n,f,a,r))}function Xp(t,n){ml(8390656,8,t,n)}function Ou(t,n){gl(2048,8,t,n)}function j0(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=hl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Wp(t){var n=tn().memoizedState;return j0({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qp(t,n){return gl(4,2,t,n)}function Yp(t,n){return gl(4,4,t,n)}function Zp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function jp(t,n,a){a=a!=null?a.concat([t]):null,gl(4,4,Zp.bind(null,n,t),a)}function zu(){}function Kp(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Tu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Qp(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Tu(n,r[1]))return r[0];if(r=t(),rs){Zt(!0);try{t()}finally{Zt(!1)}}return a.memoizedState=[r,n],r}function Pu(t,n,a){return a===void 0||(Gi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Jm(),oe.lanes|=t,xa|=t,a)}function Jp(t,n,a,r){return Vn(a,n)?a:Ws.current!==null?(t=Pu(t,a,r),Vn(t,n)||(rn=!0),t):(Gi&42)===0||(Gi&1073741824)!==0&&(_e&261930)===0?(rn=!0,t.memoizedState=a):(t=Jm(),oe.lanes|=t,xa|=t,n)}function $p(t,n,a,r,u){var f=j.p;j.p=f!==0&&8>f?f:8;var v=P.T,b={};P.T=b,Fu(t,!1,n,a);try{var B=u(),$=P.S;if($!==null&&$(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ut=X0(B,r);no(t,n,ut,Zn(t))}else no(t,n,r,Zn(t))}catch(pt){no(t,n,{then:function(){},status:"rejected",reason:pt},Zn())}finally{j.p=f,v!==null&&b.types!==null&&(v.types=b.types),P.T=v}}function K0(){}function Iu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=tm(t).queue;$p(t,u,n,Z,a===null?K0:function(){return em(t),a(r)})}function tm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function em(t){var n=tm(t);n.next===null&&(n=t.alternate.memoizedState),no(t,n.next.queue,{},Zn())}function Bu(){return yn(yo)}function nm(){return tn().memoizedState}function im(){return tn().memoizedState}function Q0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=ma(a);var r=ga(n,t,a);r!==null&&(Pn(r,n,a),Qr(r,n,a)),n={cache:du()},t.payload=n;return}n=n.return}}function J0(t,n,a){var r=Zn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_l(t)?sm(n,a):(a=nu(t,n,a,r),a!==null&&(Pn(a,t,r),rm(a,n,r)))}function am(t,n,a){var r=Zn();no(t,n,a,r)}function no(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(t))sm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(u.hasEagerState=!0,u.eagerState=b,Vn(b,v))return Qo(t,n,u,0),Ve===null&&Ko(),!1}catch{}if(a=nu(t,n,u,r),a!==null)return Pn(a,t,r),rm(a,n,r),!0}return!1}function Fu(t,n,a,r){if(r={lane:2,revertLane:vf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},_l(t)){if(n)throw Error(s(479))}else n=nu(t,a,r,2),n!==null&&Pn(n,t,2)}function _l(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function sm(t,n){qs=ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function rm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ti(t,a)}}var io={readContext:yn,use:dl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};io.useEffectEvent=Ke;var om={readContext:yn,use:dl,useCallback:function(t,n){return wn().memoizedState=[t,n===void 0?null:n],t},useContext:yn,useEffect:Xp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ml(4194308,4,Zp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ml(4194308,4,t,n)},useInsertionEffect:function(t,n){ml(4,2,t,n)},useMemo:function(t,n){var a=wn();n=n===void 0?null:n;var r=t();if(rs){Zt(!0);try{t()}finally{Zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=wn();if(a!==void 0){var u=a(n);if(rs){Zt(!0);try{a(n)}finally{Zt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=J0.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=wn();return t={current:t},n.memoizedState=t},useState:function(t){t=Lu(t);var n=t.queue,a=am.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(t,n){var a=wn();return Pu(a,t,n)},useTransition:function(){var t=Lu(!1);return t=$p.bind(null,oe,t.queue,!0,!1),wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,u=wn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(_e&127)!==0||Cp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Xp(Dp.bind(null,r,f,t),[t]),r.flags|=2048,Zs(9,{destroy:void 0},wp.bind(null,r,f,a,n),null),a},useId:function(){var t=wn(),n=Ve.identifierPrefix;if(xe){var a=Ri,r=Ai;a=(r&~(1<<32-Pt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=W0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Bu,useFormState:Fp,useActionState:Fp,useOptimistic:function(t){var n=wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Fu.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:wu,useCacheRefresh:function(){return wn().memoizedState=Q0.bind(null,oe)},useEffectEvent:function(t){var n=wn(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Hu={readContext:yn,use:dl,useCallback:Kp,useContext:yn,useEffect:Ou,useImperativeHandle:jp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:pl,useRef:kp,useState:function(){return pl(Vi)},useDebugValue:zu,useDeferredValue:function(t,n){var a=tn();return Jp(a,Pe.memoizedState,t,n)},useTransition:function(){var t=pl(Vi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:Bu,useFormState:Hp,useActionState:Hp,useOptimistic:function(t,n){var a=tn();return Np(a,Pe,t,n)},useMemoCache:wu,useCacheRefresh:im};Hu.useEffectEvent=Wp;var lm={readContext:yn,use:dl,useCallback:Kp,useContext:yn,useEffect:Ou,useImperativeHandle:jp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:Uu,useRef:kp,useState:function(){return Uu(Vi)},useDebugValue:zu,useDeferredValue:function(t,n){var a=tn();return Pe===null?Pu(a,t,n):Jp(a,Pe.memoizedState,t,n)},useTransition:function(){var t=Uu(Vi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:Bu,useFormState:Vp,useActionState:Vp,useOptimistic:function(t,n){var a=tn();return Pe!==null?Np(a,Pe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:wu,useCacheRefresh:im};lm.useEffectEvent=Wp;function Gu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Vu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Zn(),u=ma(r);u.payload=n,a!=null&&(u.callback=a),n=ga(t,u,r),n!==null&&(Pn(n,t,r),Qr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Zn(),u=ma(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ga(t,u,r),n!==null&&(Pn(n,t,r),Qr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),r=ma(a);r.tag=2,n!=null&&(r.callback=n),n=ga(t,r,a),n!==null&&(Pn(n,t,a),Qr(n,t,a))}};function cm(t,n,a,r,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!kr(a,r)||!kr(u,f):!0}function um(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Vu.enqueueReplaceState(n,n.state,null)}function os(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function fm(t){jo(t)}function hm(t){console.error(t)}function dm(t){jo(t)}function vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function pm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ku(t,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(t,n)},a}function mm(t){return t=ma(t),t.tag=3,t}function gm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){pm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){pm(n,a,r),typeof u!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function $0(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Hs(n,a,u,!0),a=Xn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?Dl():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),mf(t,r,u)),!1;case 22:return a.flags|=65536,r===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),mf(t,r,u)),!1}throw Error(s(435,a.tag))}return mf(t,r,u),Dl(),!1}if(xe)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==lu&&(t=Error(s(422),{cause:r}),qr(ni(t,a)))):(r!==lu&&(n=Error(s(423),{cause:r}),qr(ni(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=ni(r,a),u=ku(t.stateNode,r,u),Su(t,u),Qe!==4&&(Qe=2)),!1;var f=Error(s(520),{cause:r});if(f=ni(f,a),fo===null?fo=[f]:fo.push(f),Qe!==4&&(Qe=2),n===null)return!0;r=ni(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ku(a.stateNode,r,t),Su(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=mm(u),gm(u,t,a,r),Su(a,u),!1}a=a.return}while(a!==null);return!1}var Xu=Error(s(461)),rn=!1;function xn(t,n,a,r){n.child=t===null?yp(n,null,a,r):ss(n,t.child,a,r)}function _m(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var b in r)b!=="ref"&&(v[b]=r[b])}else v=r;return es(n),r=bu(t,n,a,v,f,u),b=Au(),t!==null&&!rn?(Ru(t,n,u),ki(t,n,u)):(xe&&b&&ru(n),n.flags|=1,xn(t,n,r,u),n.child)}function vm(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Sm(t,n,f,r,u)):(t=$o(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Ju(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:kr,a(v,r)&&t.ref===n.ref)return ki(t,n,u)}return n.flags|=1,t=Ii(f,r),t.ref=n.ref,t.return=n,n.child=t}function Sm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(kr(f,r)&&t.ref===n.ref)if(rn=!1,n.pendingProps=r=f,Ju(t,u))(t.flags&131072)!==0&&(rn=!0);else return n.lanes=t.lanes,ki(t,n,u)}return Wu(t,n,a,r,u)}function ym(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return xm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(n,f!==null?f.cachePool:null),f!==null?Ep(n,f):xu(),Tp(n);else return r=n.lanes=536870912,xm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(il(n,f.cachePool),Ep(n,f),va(),n.memoizedState=null):(t!==null&&il(n,null),xu(),va());return xn(t,n,u,a),n.child}function ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xm(t,n,a,r,u){var f=mu();return f=f===null?null:{parent:an._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&il(n,null),xu(),Tp(n),t!==null&&Hs(t,n,r,!0),n.childLanes=u,null}function Sl(t,n){return n=xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Mm(t,n,a){return ss(n,t.child,null,a),t=Sl(n,n.pendingProps),t.flags|=2,Wn(n),n.memoizedState=null,t}function tS(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=Sl(n,r),n.lanes=536870912,ao(null,t);if(Eu(n),(t=We)?(t=Og(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=sp(t),a.return=n,n.child=a,Sn=n,We=null)):t=null,t===null)throw ha(n);return n.lanes=536870912,null}return Sl(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Eu(n),u)if(n.flags&256)n.flags&=-257,n=Mm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(rn||Hs(t,n,a,!1),u=(a&t.childLanes)!==0,rn||u){if(r=Ve,r!==null&&(v=bs(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Qa(t,v),Pn(r,t,v),Xu;Dl(),n=Mm(t,n,a)}else t=f.treeContext,We=oi(v.nextSibling),Sn=n,xe=!0,fa=null,si=!1,t!==null&&lp(n,t),n=Sl(n,r),n.flags|=4096;return n}return t=Ii(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Wu(t,n,a,r,u){return es(n),a=bu(t,n,a,r,void 0,u),r=Au(),t!==null&&!rn?(Ru(t,n,u),ki(t,n,u)):(xe&&r&&ru(n),n.flags|=1,xn(t,n,a,u),n.child)}function Em(t,n,a,r,u,f){return es(n),n.updateQueue=null,a=Ap(n,r,a,u),bp(t),r=Au(),t!==null&&!rn?(Ru(t,n,f),ki(t,n,f)):(xe&&r&&ru(n),n.flags|=1,xn(t,n,a,f),n.child)}function Tm(t,n,a,r,u){if(es(n),n.stateNode===null){var f=Ps,v=a.contextType;typeof v=="object"&&v!==null&&(f=yn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Vu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},_u(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?yn(v):Ps,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Gu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Vu.enqueueReplaceState(f,f.state,null),$r(n,r,f,u),Jr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,B=os(a,b);f.props=B;var $=f.context,ut=a.contextType;v=Ps,typeof ut=="object"&&ut!==null&&(v=yn(ut));var pt=a.getDerivedStateFromProps;ut=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==v)&&um(n,f,r,v),pa=!1;var nt=n.memoizedState;f.state=nt,$r(n,r,f,u),Jr(),$=n.memoizedState,b||nt!==$||pa?(typeof pt=="function"&&(Gu(n,a,pt,r),$=n.memoizedState),(B=pa||cm(n,a,B,r,nt,$,v))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=v,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,vu(t,n),v=n.memoizedProps,ut=os(a,v),f.props=ut,pt=n.pendingProps,nt=f.context,$=a.contextType,B=Ps,typeof $=="object"&&$!==null&&(B=yn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==pt||nt!==B)&&um(n,f,r,B),pa=!1,nt=n.memoizedState,f.state=nt,$r(n,r,f,u),Jr();var rt=n.memoizedState;v!==pt||nt!==rt||pa||t!==null&&t.dependencies!==null&&el(t.dependencies)?(typeof b=="function"&&(Gu(n,a,b,r),rt=n.memoizedState),(ut=pa||cm(n,a,ut,r,nt,rt,B)||t!==null&&t.dependencies!==null&&el(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=B,r=ut):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,yl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ss(n,t.child,null,u),n.child=ss(n,null,a,u)):xn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ki(t,n,u),t}function bm(t,n,a,r){return $a(),n.flags|=256,xn(t,n,a,r),n.child}var qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yu(t){return{baseLanes:t,cachePool:pp()}}function Zu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Yn),t}function Am(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:($e.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(u?_a(n):va(),(t=We)?(t=Og(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=sp(t),a.return=n,n.child=a,Sn=n,We=null)):t=null,t===null)throw ha(n);return Uf(t)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,u?(va(),u=n.mode,b=xl({mode:"hidden",children:b},u),r=Ja(r,u,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=Yu(a),r.childLanes=Zu(t,v,a),n.memoizedState=qu,ao(null,r)):(_a(n),ju(n,b))}var B=t.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=Ku(t,n,a)):n.memoizedState!==null?(va(),n.child=t.child,n.flags|=128,n=null):(va(),b=r.fallback,u=n.mode,r=xl({mode:"visible",children:r.children},u),b=Ja(b,u,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,ss(n,t.child,null,a),r=n.child,r.memoizedState=Yu(a),r.childLanes=Zu(t,v,a),n.memoizedState=qu,n=ao(null,r));else if(_a(n),Uf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var $=v.dgst;v=$,r=Error(s(419)),r.stack="",r.digest=v,qr({value:r,source:null,stack:null}),n=Ku(t,n,a)}else if(rn||Hs(t,n,a,!1),v=(a&t.childLanes)!==0,rn||v){if(v=Ve,v!==null&&(r=bs(v,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,Qa(t,r),Pn(v,t,r),Xu;Df(b)||Dl(),n=Ku(t,n,a)}else Df(b)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,We=oi(b.nextSibling),Sn=n,xe=!0,fa=null,si=!1,t!==null&&lp(n,t),n=ju(n,r.children),n.flags|=4096);return n}return u?(va(),b=r.fallback,u=n.mode,B=t.child,$=B.sibling,r=Ii(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,$!==null?b=Ii($,b):(b=Ja(b,u,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,ao(null,r),r=n.child,b=t.child.memoizedState,b===null?b=Yu(a):(u=b.cachePool,u!==null?(B=an._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=pp(),b={baseLanes:b.baseLanes|a,cachePool:u}),r.memoizedState=b,r.childLanes=Zu(t,v,a),n.memoizedState=qu,ao(t.child,r)):(_a(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function ju(t,n){return n=xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xl(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function Ku(t,n,a){return ss(n,t.child,null,a),t=ju(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Rm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),fu(t.return,n,a)}function Qu(t,n,a,r,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Cm(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=$e.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,Et($e,v),xn(t,n,r,a),r=xe?Wr:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,a,n);else if(t.tag===19)Rm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Qu(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Qu(n,!0,a,null,f,r);break;case"together":Qu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Hs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ju(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&el(t)))}function eS(t,n,a){switch(n.tag){case 3:Ht(n,n.stateNode.containerInfo),da(n,an,t.memoizedState.cache),$a();break;case 27:case 5:ee(n);break;case 4:Ht(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Eu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Am(t,n,a):(_a(n),t=ki(t,n,a),t!==null?t.sibling:null);_a(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Hs(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Cm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Et($e,$e.current),r)break;return null;case 22:return n.lanes=0,ym(t,n,a,n.pendingProps);case 24:da(n,an,t.memoizedState.cache)}return ki(t,n,a)}function wm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)rn=!0;else{if(!Ju(t,a)&&(n.flags&128)===0)return rn=!1,eS(t,n,a);rn=(t.flags&131072)!==0}else rn=!1,xe&&(n.flags&1048576)!==0&&op(n,Wr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=is(n.elementType),n.type=t,typeof t=="function")iu(t)?(r=os(t,r),n.tag=1,n=Tm(null,n,t,r,a)):(n.tag=0,n=Wu(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=_m(null,n,t,r,a);break t}else if(u===z){n.tag=14,n=vm(null,n,t,r,a);break t}}throw n=ht(t)||t,Error(s(306,n,""))}}return n;case 0:return Wu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=os(r,n.pendingProps),Tm(t,n,r,u,a);case 3:t:{if(Ht(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,vu(t,n),$r(n,r,null,a);var v=n.memoizedState;if(r=v.cache,da(n,an,r),r!==f.cache&&hu(n,[an],a,!0),Jr(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bm(t,n,r,a);break t}else if(r!==u){u=ni(Error(s(424)),n),qr(u),n=bm(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,We=oi(t.firstChild),Sn=n,xe=!0,fa=null,si=!0,a=yp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($a(),r===u){n=ki(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return yl(t,n),t===null?(a=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,r=Il(vt.current).createElement(a),r[nn]=n,r[_n]=t,Mn(r,a,t),St(r),n.stateNode=r):n.memoizedState=Hg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ee(n),t===null&&xe&&(r=n.stateNode=Ig(n.type,n.pendingProps,vt.current),Sn=n,si=!0,u=We,Aa(n.type)?(Lf=u,We=oi(r.firstChild)):We=u),xn(t,n,n.pendingProps.children,a),yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((u=r=We)&&(r=US(r,n.type,n.pendingProps,si),r!==null?(n.stateNode=r,Sn=n,We=oi(r.firstChild),si=!1,u=!0):u=!1),u||ha(n)),ee(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,Rf(u,f)?r=null:v!==null&&Rf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=bu(t,n,q0,null,null,a),yo._currentValue=u),yl(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=We)&&(a=LS(a,n.pendingProps,si),a!==null?(n.stateNode=a,Sn=n,We=null,t=!0):t=!1),t||ha(n)),null;case 13:return Am(t,n,a);case 4:return Ht(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ss(n,null,r,a):xn(t,n,r,a),n.child;case 11:return _m(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,da(n,n.type,r.value),xn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,es(n),u=yn(u),r=r(u),n.flags|=1,xn(t,n,r,a),n.child;case 14:return vm(t,n,n.type,n.pendingProps,a);case 15:return Sm(t,n,n.type,n.pendingProps,a);case 19:return Cm(t,n,a);case 31:return tS(t,n,a);case 22:return ym(t,n,a,n.pendingProps);case 24:return es(n),r=yn(an),t===null?(u=mu(),u===null&&(u=Ve,f=du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},_u(n),da(n,an,u)):((t.lanes&a)!==0&&(vu(t,n),$r(n,null,null,a),Jr()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),da(n,an,r)):(r=f.cache,da(n,an,r),r!==u.cache&&hu(n,[an],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xi(t){t.flags|=4}function $u(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(ng())t.flags|=8192;else throw as=sl,gu}else t.flags&=-16777217}function Dm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Wg(n))if(ng())t.flags|=8192;else throw as=sl,gu}function Ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,Js|=n)}function so(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function nS(t,n,a){var r=n.pendingProps;switch(ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Hi(an),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fs(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cu())),qe(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Xi(n),f!==null?(qe(n),Dm(n,f)):(qe(n),$u(n,u,null,r,a))):f?f!==t.memoizedState?(Xi(n),qe(n),Dm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Xi(n),qe(n),$u(n,u,t,r,a)),null;case 27:if(ke(n),a=vt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}t=Rt.current,Fs(n)?cp(n):(t=Ig(u,r,a),n.stateNode=t,Xi(n))}return qe(n),null;case 5:if(ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(f=Rt.current,Fs(n))cp(n);else{var v=Il(vt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[nn]=n,f[_n]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Mn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Xi(n)}}return qe(n),$u(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=vt.current,Fs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[nn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Ag(t.nodeValue,a)),t||ha(n,!0)}else t=Il(t).createTextNode(r),t[nn]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Fs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[nn]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Fs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[nn]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),qe(n),null);case 4:return zt(),t===null&&Mf(n.stateNode.containerInfo),qe(n),null;case 10:return Hi(n.type),qe(n),null;case 19:if(it($e),r=n.memoizedState,r===null)return qe(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)so(r,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=cl(t),f!==null){for(n.flags|=128,so(r,!1),t=f.updateQueue,n.updateQueue=t,Ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ap(a,t),a=a.sibling;return Et($e,$e.current&1|2),xe&&Bi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&T()>Rl&&(n.flags|=128,u=!0,so(r,!1),n.lanes=4194304)}else{if(!u)if(t=cl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ml(n,t),so(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return qe(n),null}else 2*T()-r.renderingStartTime>Rl&&a!==536870912&&(n.flags|=128,u=!0,so(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=T(),t.sibling=null,a=$e.current,Et($e,u?a&1|2:a&1),xe&&Bi(n,r.treeForkCount),t):(qe(n),null);case 22:case 23:return Wn(n),Mu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&it(ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(an),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function iS(t,n){switch(ou(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(an),zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ke(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(s(340));$a()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Wn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));$a()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it($e),null;case 4:return zt(),null;case 10:return Hi(n.type),null;case 22:case 23:return Wn(n),Mu(),t!==null&&it(ns),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(an),null;case 25:return null;default:return null}}function Um(t,n){switch(ou(n),n.tag){case 3:Hi(an),zt();break;case 26:case 27:case 5:ke(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:it($e);break;case 10:Hi(n.type);break;case 22:case 23:Wn(n),Mu(),t!==null&&it(ns);break;case 24:Hi(an)}}function ro(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(b){ze(n,n.return,b)}}function Sa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var v=r.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=n;var B=a,$=b;try{$()}catch(ut){ze(u,B,ut)}}}r=r.next}while(r!==f)}}catch(ut){ze(n,n.return,ut)}}function Lm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mp(n,a)}catch(r){ze(t,t.return,r)}}}function Nm(t,n,a){a.props=os(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ze(t,n,r)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){ze(t,n,u)}}function Ci(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){ze(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(t,n,u)}else a.current=null}function Om(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){ze(t,t.return,u)}}function tf(t,n,a){try{var r=t.stateNode;bS(r,t.type,a,n),r[_n]=n}catch(u){ze(t,t.return,u)}}function zm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function ef(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||zm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(r!==4&&(r===27&&Aa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(nf(t,n,a),t=t.sibling;t!==null;)nf(t,n,a),t=t.sibling}function El(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function Pm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,r,a),n[nn]=t,n[_n]=a}catch(f){ze(t,t.return,f)}}var Wi=!1,on=!1,af=!1,Im=typeof WeakSet=="function"?WeakSet:Set,mn=null;function aS(t,n){if(t=t.containerInfo,bf=Xl,t=jd(t),Kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,B=-1,$=0,ut=0,pt=t,nt=null;e:for(;;){for(var rt;pt!==a||u!==0&&pt.nodeType!==3||(b=v+u),pt!==f||r!==0&&pt.nodeType!==3||(B=v+r),pt.nodeType===3&&(v+=pt.nodeValue.length),(rt=pt.firstChild)!==null;)nt=pt,pt=rt;for(;;){if(pt===t)break e;if(nt===a&&++$===u&&(b=v),nt===f&&++ut===r&&(B=v),(rt=pt.nextSibling)!==null)break;pt=nt,nt=pt.parentNode}pt=rt}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Af={focusedElem:t,selectionRange:a},Xl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Gt=os(a.type,u);t=r.getSnapshotBeforeUpdate(Gt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){ze(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)wf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Bm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),r&4&&ro(5,a);break;case 1:if(Yi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){ze(a,a.return,v)}else{var u=os(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){ze(a,a.return,v)}}r&64&&Lm(a),r&512&&oo(a,a.return);break;case 3:if(Yi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mp(t,n)}catch(v){ze(a,a.return,v)}}break;case 27:n===null&&r&4&&Pm(a);case 26:case 5:Yi(t,a),n===null&&r&4&&Om(a),r&512&&oo(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),r&4&&Gm(t,a);break;case 13:Yi(t,a),r&4&&Vm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dS.bind(null,a),NS(t,a))));break;case 22:if(r=a.memoizedState!==null||Wi,!r){n=n!==null&&n.memoizedState!==null||on,u=Wi;var f=on;Wi=r,(on=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):Yi(t,a),Wi=u,on=f}break;case 30:break;default:Yi(t,a)}}function Fm(t){var n=t.alternate;n!==null&&(t.alternate=null,Fm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&A(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Ln=!1;function qi(t,n,a){for(a=a.child;a!==null;)Hm(t,n,a),a=a.sibling}function Hm(t,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:on||Ci(a,n),qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Ci(a,n);var r=Ye,u=Ln;Aa(a.type)&&(Ye=a.stateNode,Ln=!1),qi(t,n,a),_o(a.stateNode),Ye=r,Ln=u;break;case 5:on||Ci(a,n);case 6:if(r=Ye,u=Ln,Ye=null,qi(t,n,a),Ye=r,Ln=u,Ye!==null)if(Ln)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Ye!==null&&(Ln?(t=Ye,Lg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),rr(t)):Lg(Ye,a.stateNode));break;case 4:r=Ye,u=Ln,Ye=a.stateNode.containerInfo,Ln=!0,qi(t,n,a),Ye=r,Ln=u;break;case 0:case 11:case 14:case 15:Sa(2,a,n),on||Sa(4,a,n),qi(t,n,a);break;case 1:on||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Nm(a,n,r)),qi(t,n,a);break;case 21:qi(t,n,a);break;case 22:on=(r=on)||a.memoizedState!==null,qi(t,n,a),on=r;break;default:qi(t,n,a)}}function Gm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{rr(t)}catch(a){ze(n,n.return,a)}}}function Vm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{rr(t)}catch(a){ze(n,n.return,a)}}function sS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Im),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Im),n;default:throw Error(s(435,t.tag))}}function Tl(t,n){var a=sS(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=pS.bind(null,t,r);r.then(u,u)}})}function Nn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(Aa(b.type)){Ye=b.stateNode,Ln=!1;break t}break;case 5:Ye=b.stateNode,Ln=!1;break t;case 3:case 4:Ye=b.stateNode.containerInfo,Ln=!0;break t}b=b.return}if(Ye===null)throw Error(s(160));Hm(f,v,u),Ye=null,Ln=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)km(n,t),n=n.sibling}var pi=null;function km(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nn(n,t),On(t),r&4&&(Sa(3,t,t.return),ro(3,t),Sa(5,t,t.return));break;case 1:Nn(n,t),On(t),r&512&&(on||a===null||Ci(a,a.return)),r&64&&Wi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=pi;if(Nn(n,t),On(t),r&512&&(on||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[qa]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Mn(f,r,a),f[nn]=t,St(f),r=f;break t;case"link":var v=kg("link","href",u).get(r+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=u.createElement(r),Mn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=kg("meta","content",u).get(r+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=u.createElement(r),Mn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[nn]=t,St(f),r=f}t.stateNode=r}else Xg(u,t.type,t.stateNode);else t.stateNode=Vg(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Xg(u,t.type,t.stateNode):Vg(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&tf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,t),On(t),r&512&&(on||a===null||Ci(a,a.return)),a!==null&&r&4&&tf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,t),On(t),r&512&&(on||a===null||Ci(a,a.return)),t.flags&32){u=t.stateNode;try{ws(u,"")}catch(Gt){ze(t,t.return,Gt)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,tf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(af=!0);break;case 6:if(Nn(n,t),On(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Gt){ze(t,t.return,Gt)}}break;case 3:if(Hl=null,u=pi,pi=Bl(n.containerInfo),Nn(n,t),pi=u,On(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{rr(n.containerInfo)}catch(Gt){ze(t,t.return,Gt)}af&&(af=!1,Xm(t));break;case 4:r=pi,pi=Bl(t.stateNode.containerInfo),Nn(n,t),On(t),pi=r;break;case 12:Nn(n,t),On(t);break;case 31:Nn(n,t),On(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tl(t,r)));break;case 13:Nn(n,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Al=T()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tl(t,r)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=Wi,ut=on;if(Wi=$||u,on=ut||B,Nn(n,t),on=ut,Wi=$,On(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Wi||on||ls(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=B.stateNode;var pt=B.memoizedProps.style,nt=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Gt){ze(B,B.return,Gt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Gt){ze(B,B.return,Gt)}}}else if(n.tag===18){if(a===null){B=n;try{var rt=B.stateNode;u?Ng(rt,!0):Ng(B.stateNode,!1)}catch(Gt){ze(B,B.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Tl(t,a))));break;case 19:Nn(n,t),On(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tl(t,r)));break;case 30:break;case 21:break;default:Nn(n,t),On(t)}}function On(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(zm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=ef(t);El(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(ws(v,""),a.flags&=-33);var b=ef(t);El(t,b,v);break;case 3:case 4:var B=a.stateNode.containerInfo,$=ef(t);nf(t,$,B);break;default:throw Error(s(161))}}catch(ut){ze(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Xm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Xm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Bm(t,n.alternate,n),n=n.sibling}function ls(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),ls(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Nm(n,n.return,a),ls(n);break;case 27:_o(n.stateNode);case 26:case 5:Ci(n,n.return),ls(n);break;case 22:n.memoizedState===null&&ls(n);break;case 30:ls(n);break;default:ls(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(u,f,a),ro(4,f);break;case 1:if(Zi(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){ze(r,r.return,$)}if(r=f,u=r.updateQueue,u!==null){var b=r.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)xp(B[u],b)}catch($){ze(r,r.return,$)}}a&&v&64&&Lm(f),oo(f,f.return);break;case 27:Pm(f);case 26:case 5:Zi(u,f,a),a&&r===null&&v&4&&Om(f),oo(f,f.return);break;case 12:Zi(u,f,a);break;case 31:Zi(u,f,a),a&&v&4&&Gm(u,f);break;case 13:Zi(u,f,a),a&&v&4&&Vm(u,f);break;case 22:f.memoizedState===null&&Zi(u,f,a),oo(f,f.return);break;case 30:break;default:Zi(u,f,a)}n=n.sibling}}function sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Yr(a))}function rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Yr(t))}function mi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wm(t,n,a,r),n=n.sibling}function Wm(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:mi(t,n,a,r),u&2048&&ro(9,n);break;case 1:mi(t,n,a,r);break;case 3:mi(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Yr(t)));break;case 12:if(u&2048){mi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){ze(n,n.return,B)}}else mi(t,n,a,r);break;case 31:mi(t,n,a,r);break;case 13:mi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?mi(t,n,a,r):lo(t,n):f._visibility&2?mi(t,n,a,r):(f._visibility|=2,js(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&sf(v,n);break;case 24:mi(t,n,a,r),u&2048&&rf(n.alternate,n);break;default:mi(t,n,a,r)}}function js(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,b=a,B=r,$=v.flags;switch(v.tag){case 0:case 11:case 15:js(f,v,b,B,u),ro(8,v);break;case 23:break;case 22:var ut=v.stateNode;v.memoizedState!==null?ut._visibility&2?js(f,v,b,B,u):lo(f,v):(ut._visibility|=2,js(f,v,b,B,u)),u&&$&2048&&sf(v.alternate,v);break;case 24:js(f,v,b,B,u),u&&$&2048&&rf(v.alternate,v);break;default:js(f,v,b,B,u)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:lo(a,r),u&2048&&sf(r.alternate,r);break;case 24:lo(a,r),u&2048&&rf(r.alternate,r);break;default:lo(a,r)}n=n.sibling}}var co=8192;function Ks(t,n,a){if(t.subtreeFlags&co)for(t=t.child;t!==null;)qm(t,n,a),t=t.sibling}function qm(t,n,a){switch(t.tag){case 26:Ks(t,n,a),t.flags&co&&t.memoizedState!==null&&WS(a,pi,t.memoizedState,t.memoizedProps);break;case 5:Ks(t,n,a);break;case 3:case 4:var r=pi;pi=Bl(t.stateNode.containerInfo),Ks(t,n,a),pi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=co,co=16777216,Ks(t,n,a),co=r):Ks(t,n,a));break;default:Ks(t,n,a)}}function Ym(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,jm(r,t)}Ym(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zm(t),t=t.sibling}function Zm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bl(t)):uo(t);break;default:uo(t)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,jm(r,t)}Ym(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}t=t.sibling}}function jm(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Yr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,mn=r;else t:for(a=t;mn!==null;){r=mn;var u=r.sibling,f=r.return;if(Fm(r),r===a){mn=null;break t}if(u!==null){u.return=f,mn=u;break t}mn=f}}}var rS={getCacheForType:function(t){var n=yn(an),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return yn(an).controller.signal}},oS=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,pe=null,_e=0,Oe=0,qn=null,ya=!1,Qs=!1,of=!1,ji=0,Qe=0,xa=0,cs=0,lf=0,Yn=0,Js=0,fo=null,zn=null,cf=!1,Al=0,Km=0,Rl=1/0,Cl=null,Ma=null,fn=0,Ea=null,$s=null,Ki=0,uf=0,ff=null,Qm=null,ho=0,hf=null;function Zn(){return(De&2)!==0&&_e!==0?_e&-_e:P.T!==null?vf():Wa()}function Jm(){if(Yn===0)if((_e&536870912)===0||xe){var t=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),Yn=t}else Yn=536870912;return t=Xn.current,t!==null&&(t.flags|=32),Yn}function Pn(t,n,a){(t===Ve&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(tr(t,0),Ta(t,_e,Yn,!1)),Rn(t,a),((De&2)===0||t!==Ve)&&(t===Ve&&((De&2)===0&&(cs|=a),Qe===4&&Ta(t,_e,Yn,!1)),wi(t))}function $m(t,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ft(t,n),u=r?uS(t,n):pf(t,n,!0),f=r;do{if(u===0){Qs&&!r&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!lS(a)){u=pf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=t;u=fo;var B=b.current.memoizedState.isDehydrated;if(B&&(tr(b,v).flags|=256),v=pf(b,v,!1),v!==2){if(of&&!B){b.errorRecoveryDisabledLanes|=f,cs|=f,u=4;break t}f=zn,zn=u,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){tr(t,0),Ta(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ta(r,n,Yn,!ya);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Al+300-T(),10<u)){if(Ta(r,n,Yn,!ya),gt(r,0,!0)!==0)break t;Ki=n,r.timeoutHandle=Dg(tg.bind(null,r,a,zn,Cl,cf,n,Yn,cs,Js,ya,f,"Throttled",-0,0),u);break t}tg(r,a,zn,Cl,cf,n,Yn,cs,Js,ya,f,null,-0,0)}}break}while(!0);wi(t)}function tg(t,n,a,r,u,f,v,b,B,$,ut,pt,nt,rt){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},qm(n,f,pt);var Gt=(f&62914560)===f?Al-T():(f&4194048)===f?Km-T():0;if(Gt=qS(pt,Gt),Gt!==null){Ki=f,t.cancelPendingCommit=Gt(lg.bind(null,t,n,f,a,r,u,v,b,B,ut,pt,null,nt,rt)),Ta(t,f,v,!$);return}}lg(t,n,f,a,r,u,v,b,B)}function lS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Vn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,r){n&=~lf,n&=~cs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Nr(t,a,n)}function wl(){return(De&6)===0?(po(0),!1):!0}function df(){if(pe!==null){if(Oe===0)var t=pe.return;else t=pe,Fi=ts=null,Cu(t),Xs=null,jr=0,t=pe;for(;t!==null;)Um(t.alternate,t),t=t.return;pe=null}}function tr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,CS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ki=0,df(),Ve=t,pe=a=Ii(t.current,null),_e=n,Oe=0,qn=null,ya=!1,Qs=Ft(t,n),of=!1,Js=Yn=lf=cs=xa=Qe=0,zn=fo=null,cf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Pt(r),f=1<<u;n|=t[u],r&=~f}return ji=n,Ko(),a}function eg(t,n){oe=null,P.H=io,n===ks||n===al?(n=_p(),Oe=3):n===gu?(n=_p(),Oe=4):Oe=n===Xu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,pe===null&&(Qe=1,vl(t,ni(n,t.current)))}function ng(){var t=Xn.current;return t===null?!0:(_e&4194048)===_e?ri===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ri:!1}function ig(){var t=P.H;return P.H=io,t===null?io:t}function ag(){var t=P.A;return P.A=rS,t}function Dl(){Qe=4,ya||(_e&4194048)!==_e&&Xn.current!==null||(Qs=!0),(xa&134217727)===0&&(cs&134217727)===0||Ve===null||Ta(Ve,_e,Yn,!1)}function pf(t,n,a){var r=De;De|=2;var u=ig(),f=ag();(Ve!==t||_e!==n)&&(Cl=null,tr(t,n)),n=!1;var v=Qe;t:do try{if(Oe!==0&&pe!==null){var b=pe,B=qn;switch(Oe){case 8:df(),v=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var $=Oe;if(Oe=0,qn=null,er(t,b,B,$),a&&Qs){v=0;break t}break;default:$=Oe,Oe=0,qn=null,er(t,b,B,$)}}cS(),v=Qe;break}catch(ut){eg(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Fi=ts=null,De=r,P.H=u,P.A=f,pe===null&&(Ve=null,_e=0,Ko()),v}function cS(){for(;pe!==null;)sg(pe)}function uS(t,n){var a=De;De|=2;var r=ig(),u=ag();Ve!==t||_e!==n?(Cl=null,Rl=T()+500,tr(t,n)):Qs=Ft(t,n);t:do try{if(Oe!==0&&pe!==null){n=pe;var f=qn;e:switch(Oe){case 1:Oe=0,qn=null,er(t,n,f,1);break;case 2:case 9:if(mp(f)){Oe=0,qn=null,rg(n);break}n=function(){Oe!==2&&Oe!==9||Ve!==t||(Oe=7),wi(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:mp(f)?(Oe=0,qn=null,rg(n)):(Oe=0,qn=null,er(t,n,f,7));break;case 5:var v=null;switch(pe.tag){case 26:v=pe.memoizedState;case 5:case 27:var b=pe;if(v?Wg(v):b.stateNode.complete){Oe=0,qn=null;var B=b.sibling;if(B!==null)pe=B;else{var $=b.return;$!==null?(pe=$,Ul($)):pe=null}break e}}Oe=0,qn=null,er(t,n,f,5);break;case 6:Oe=0,qn=null,er(t,n,f,6);break;case 8:df(),Qe=6;break t;default:throw Error(s(462))}}fS();break}catch(ut){eg(t,ut)}while(!0);return Fi=ts=null,P.H=r,P.A=u,De=a,pe!==null?0:(Ve=null,_e=0,Ko(),Qe)}function fS(){for(;pe!==null&&!Ze();)sg(pe)}function sg(t){var n=wm(t.alternate,t,ji);t.memoizedProps=t.pendingProps,n===null?Ul(t):pe=n}function rg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Em(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Em(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Cu(n);default:Um(a,n),n=pe=ap(n,ji),n=wm(a,n,ji)}t.memoizedProps=t.pendingProps,n===null?Ul(t):pe=n}function er(t,n,a,r){Fi=ts=null,Cu(n),Xs=null,jr=0;var u=n.return;try{if($0(t,u,n,a,_e)){Qe=1,vl(t,ni(a,t.current)),pe=null;return}}catch(f){if(u!==null)throw pe=u,f;Qe=1,vl(t,ni(a,t.current)),pe=null;return}n.flags&32768?(xe||r===1?t=!0:Qs||(_e&536870912)!==0?t=!1:(ya=t=!0,(r===2||r===9||r===3||r===6)&&(r=Xn.current,r!==null&&r.tag===13&&(r.flags|=16384))),og(n,t)):Ul(n)}function Ul(t){var n=t;do{if((n.flags&32768)!==0){og(n,ya);return}t=n.return;var a=nS(n.alternate,n,ji);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);Qe===0&&(Qe=5)}function og(t,n){do{var a=iS(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);Qe=6,pe=null}function lg(t,n,a,r,u,f,v,b,B){t.cancelPendingCommit=null;do Ll();while(fn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=eu,ti(t,a,f,v,b,B),t===Ve&&(pe=Ve=null,_e=0),$s=n,Ea=t,Ki=a,uf=f,ff=u,Qm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,mS(ct,function(){return dg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,u=j.p,j.p=2,v=De,De|=4;try{aS(t,n,a)}finally{De=v,j.p=u,P.T=r}}fn=1,cg(),ug(),fg()}}function cg(){if(fn===1){fn=0;var t=Ea,n=$s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=j.p;j.p=2;var u=De;De|=4;try{km(n,t);var f=Af,v=jd(t.containerInfo),b=f.focusedElem,B=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&Zd(b.ownerDocument.documentElement,b)){if(B!==null&&Kc(b)){var $=B.start,ut=B.end;if(ut===void 0&&(ut=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ut,b.value.length);else{var pt=b.ownerDocument||document,nt=pt&&pt.defaultView||window;if(nt.getSelection){var rt=nt.getSelection(),Gt=b.textContent.length,te=Math.min(B.start,Gt),Be=B.end===void 0?te:Math.min(B.end,Gt);!rt.extend&&te>Be&&(v=Be,Be=te,te=v);var Y=Yd(b,te),V=Yd(b,Be);if(Y&&V&&(rt.rangeCount!==1||rt.anchorNode!==Y.node||rt.anchorOffset!==Y.offset||rt.focusNode!==V.node||rt.focusOffset!==V.offset)){var Q=pt.createRange();Q.setStart(Y.node,Y.offset),rt.removeAllRanges(),te>Be?(rt.addRange(Q),rt.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),rt.addRange(Q))}}}}for(pt=[],rt=b;rt=rt.parentNode;)rt.nodeType===1&&pt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<pt.length;b++){var dt=pt[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Xl=!!bf,Af=bf=null}finally{De=u,j.p=r,P.T=a}}t.current=n,fn=2}}function ug(){if(fn===2){fn=0;var t=Ea,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=j.p;j.p=2;var u=De;De|=4;try{Bm(t,n.alternate,n)}finally{De=u,j.p=r,P.T=a}}fn=3}}function fg(){if(fn===4||fn===3){fn=0,N();var t=Ea,n=$s,a=Ki,r=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,$s=Ea=null,hg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ma=null),Rs(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,u=j.p,j.p=2,P.T=null;try{for(var f=t.onRecoverableError,v=0;v<r.length;v++){var b=r[v];f(b.value,{componentStack:b.stack})}}finally{P.T=n,j.p=u}}(Ki&3)!==0&&Ll(),wi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===hf?ho++:(ho=0,hf=t):ho=0,po(0)}}function hg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Yr(n)))}function Ll(){return cg(),ug(),fg(),dg()}function dg(){if(fn!==5)return!1;var t=Ea,n=uf;uf=0;var a=Rs(Ki),r=P.T,u=j.p;try{j.p=32>a?32:a,P.T=null,a=ff,ff=null;var f=Ea,v=Ki;if(fn=0,$s=Ea=null,Ki=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,Zm(f.current),Wm(f,f.current,v,a),De=b,po(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{j.p=u,P.T=r,hg(t,n)}}function pg(t,n,a){n=ni(a,n),n=ku(t.stateNode,n,2),t=ga(t,n,2),t!==null&&(Rn(t,2),wi(t))}function ze(t,n,a){if(t.tag===3)pg(t,t,a);else for(;n!==null;){if(n.tag===3){pg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ma===null||!Ma.has(r))){t=ni(a,t),a=mm(2),r=ga(n,a,2),r!==null&&(gm(a,r,n,t),Rn(r,2),wi(r));break}}n=n.return}}function mf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new oS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(of=!0,u.add(a),t=hS.bind(null,t,n,a),n.then(t,t))}function hS(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(_e&a)===a&&(Qe===4||Qe===3&&(_e&62914560)===_e&&300>T()-Al?(De&2)===0&&tr(t,0):lf|=a,Js===_e&&(Js=0)),wi(t)}function mg(t,n){n===0&&(n=Ne()),t=Qa(t,n),t!==null&&(Rn(t,n),wi(t))}function dS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),mg(t,a)}function pS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),mg(t,a)}function mS(t,n){return se(t,n)}var Nl=null,nr=null,gf=!1,Ol=!1,_f=!1,ba=0;function wi(t){t!==nr&&t.next===null&&(nr===null?Nl=nr=t:nr=nr.next=t),Ol=!0,gf||(gf=!0,_S())}function po(t,n){if(!_f&&Ol){_f=!0;do for(var a=!1,r=Nl;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=u&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Sg(r,f))}else f=_e,f=gt(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ft(r,f)||(a=!0,Sg(r,f));r=r.next}while(a);_f=!1}}function gS(){gg()}function gg(){Ol=gf=!1;var t=0;ba!==0&&RS()&&(t=ba);for(var n=T(),a=null,r=Nl;r!==null;){var u=r.next,f=_g(r,n);f===0?(r.next=null,a===null?Nl=u:a.next=u,u===null&&(nr=a)):(a=r,(t!==0||(f&3)!==0)&&(Ol=!0)),r=u}fn!==0&&fn!==5||po(t),ba!==0&&(ba=0)}function _g(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Pt(f),b=1<<v,B=u[v];B===-1?((b&a)===0||(b&r)!==0)&&(u[v]=ie(b,n)):B<=n&&(t.expiredLanes|=b),f&=~b}if(n=Ve,a=_e,a=gt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ft(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&je(r),Rs(a)){case 2:case 8:a=xt;break;case 32:a=ct;break;case 268435456:a=Ct;break;default:a=ct}return r=vg.bind(null,t),a=se(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&je(r),t.callbackPriority=2,t.callbackNode=null,2}function vg(t,n){if(fn!==0&&fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ll()&&t.callbackNode!==a)return null;var r=_e;return r=gt(t,t===Ve?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:($m(t,r,n),_g(t,T()),t.callbackNode!=null&&t.callbackNode===a?vg.bind(null,t):null)}function Sg(t,n){if(Ll())return null;$m(t,n,!0)}function _S(){wS(function(){(De&6)!==0?se(ft,gS):gg()})}function vf(){if(ba===0){var t=Gs;t===0&&(t=At,At<<=1,(At&261888)===0&&(At=256)),ba=t}return ba}function yg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vo(""+t)}function xg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function vS(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=yg((u[_n]||null).action),v=r.submitter;v&&(n=(n=v[_n]||null)?yg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new qo("action","action",null,r,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ba!==0){var B=v?xg(u,v):new FormData(u);Iu(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=v?xg(u,v):new FormData(u),Iu(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Sf=0;Sf<tu.length;Sf++){var yf=tu[Sf],SS=yf.toLowerCase(),yS=yf[0].toUpperCase()+yf.slice(1);di(SS,"on"+yS)}di(Jd,"onAnimationEnd"),di($d,"onAnimationIteration"),di(tp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(P0,"onTransitionRun"),di(I0,"onTransitionStart"),di(B0,"onTransitionCancel"),di(ep,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Mg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var b=r[v],B=b.instance,$=b.currentTarget;if(b=b.listener,B!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=$;try{f(u)}catch(ut){jo(ut)}u.currentTarget=null,f=B}else for(v=0;v<r.length;v++){if(b=r[v],B=b.instance,$=b.currentTarget,b=b.listener,B!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=$;try{f(u)}catch(ut){jo(ut)}u.currentTarget=null,f=B}}}}function me(t,n){var a=n[zr];a===void 0&&(a=n[zr]=new Set);var r=t+"__bubble";a.has(r)||(Eg(n,t,2,!1),a.add(r))}function xf(t,n,a){var r=0;n&&(r|=4),Eg(a,t,r,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Mf(t){if(!t[zl]){t[zl]=!0,Lt.forEach(function(a){a!=="selectionchange"&&(xS.has(a)||xf(a,!1,t),xf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zl]||(n[zl]=!0,xf("selectionchange",!1,n))}}function Eg(t,n,a,r){switch(Jg(n)){case 2:var u=jS;break;case 8:u=KS;break;default:u=If}a=u.bind(null,n,a,t),u=void 0,!Gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Ef(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var b=r.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=r.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=W(b),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){r=f=v;continue t}b=b.parentNode}}r=r.return}Cd(function(){var $=f,ut=Fc(a),pt=[];t:{var nt=np.get(t);if(nt!==void 0){var rt=qo,Gt=t;switch(t){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":rt=p0;break;case"focusin":Gt="focus",rt=Wc;break;case"focusout":Gt="blur",rt=Wc;break;case"beforeblur":case"afterblur":rt=Wc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=_0;break;case Jd:case $d:case tp:rt=s0;break;case ep:rt=S0;break;case"scroll":case"scrollend":rt=t0;break;case"wheel":rt=x0;break;case"copy":case"cut":case"paste":rt=o0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Nd;break;case"toggle":case"beforetoggle":rt=E0}var te=(n&4)!==0,Be=!te&&(t==="scroll"||t==="scrollend"),Y=te?nt!==null?nt+"Capture":null:nt;te=[];for(var V=$,Q;V!==null;){var dt=V;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||Y===null||(dt=Pr(V,Y),dt!=null&&te.push(go(V,dt,Q))),Be)break;V=V.return}0<te.length&&(nt=new rt(nt,Gt,null,a,ut),pt.push({event:nt,listeners:te}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",nt&&a!==Bc&&(Gt=a.relatedTarget||a.fromElement)&&(W(Gt)||Gt[la]))break t;if((rt||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,rt?(Gt=a.relatedTarget||a.toElement,rt=$,Gt=Gt?W(Gt):null,Gt!==null&&(Be=c(Gt),te=Gt.tag,Gt!==Be||te!==5&&te!==27&&te!==6)&&(Gt=null)):(rt=null,Gt=$),rt!==Gt)){if(te=Ud,dt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(te=Nd,dt="onPointerLeave",Y="onPointerEnter",V="pointer"),Be=rt==null?nt:st(rt),Q=Gt==null?nt:st(Gt),nt=new te(dt,V+"leave",rt,a,ut),nt.target=Be,nt.relatedTarget=Q,dt=null,W(ut)===$&&(te=new te(Y,V+"enter",Gt,a,ut),te.target=Q,te.relatedTarget=Be,dt=te),Be=dt,rt&&Gt)e:{for(te=MS,Y=rt,V=Gt,Q=0,dt=Y;dt;dt=te(dt))Q++;dt=0;for(var $t=V;$t;$t=te($t))dt++;for(;0<Q-dt;)Y=te(Y),Q--;for(;0<dt-Q;)V=te(V),dt--;for(;Q--;){if(Y===V||V!==null&&Y===V.alternate){te=Y;break e}Y=te(Y),V=te(V)}te=null}else te=null;rt!==null&&Tg(pt,nt,rt,te,!1),Gt!==null&&Be!==null&&Tg(pt,Be,Gt,te,!0)}}t:{if(nt=$?st($):window,rt=nt.nodeName&&nt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&nt.type==="file")var Re=Gd;else if(Fd(nt))if(Vd)Re=N0;else{Re=U0;var Xt=D0}else rt=nt.nodeName,!rt||rt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Ic($.elementType)&&(Re=Gd):Re=L0;if(Re&&(Re=Re(t,$))){Hd(pt,Re,a,ut);break t}Xt&&Xt(t,nt,$),t==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&un(nt,"number",nt.value)}switch(Xt=$?st($):window,t){case"focusin":(Fd(Xt)||Xt.contentEditable==="true")&&(Ns=Xt,Qc=$,Xr=null);break;case"focusout":Xr=Qc=Ns=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Kd(pt,a,ut);break;case"selectionchange":if(z0)break;case"keydown":case"keyup":Kd(pt,a,ut)}var le;if(Yc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Ls?Id(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Od&&a.locale!=="ko"&&(Ls||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ls&&(le=wd()):(ca=ut,Vc="value"in ca?ca.value:ca.textContent,Ls=!0)),Xt=Pl($,ve),0<Xt.length&&(ve=new Ld(ve,t,null,a,ut),pt.push({event:ve,listeners:Xt}),le?ve.data=le:(le=Bd(a),le!==null&&(ve.data=le)))),(le=b0?A0(t,a):R0(t,a))&&(ve=Pl($,"onBeforeInput"),0<ve.length&&(Xt=new Ld("onBeforeInput","beforeinput",null,a,ut),pt.push({event:Xt,listeners:ve}),Xt.data=le)),vS(pt,t,$,a,ut)}Mg(pt,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Pl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Pr(t,a),u!=null&&r.unshift(go(t,u,f)),u=Pr(t,n),u!=null&&r.push(go(t,u,f))),t.tag===3)return r;t=t.return}return[]}function MS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tg(t,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var b=a,B=b.alternate,$=b.stateNode;if(b=b.tag,B!==null&&B===r)break;b!==5&&b!==26&&b!==27||$===null||(B=$,u?($=Pr(a,f),$!=null&&v.unshift(go(a,$,B))):u||($=Pr(a,f),$!=null&&v.push(go(a,$,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var ES=/\r\n?/g,TS=/\u0000|\uFFFD/g;function bg(t){return(typeof t=="string"?t:""+t).replace(ES,`
`).replace(TS,"")}function Ag(t,n){return n=bg(n),bg(t)===n}function Ie(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ws(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ws(t,""+r);break;case"className":Le(t,"class",r);break;case"tabIndex":Le(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(t,a,r);break;case"style":Ad(t,r,f);break;case"data":if(n!=="object"){Le(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Vo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",u.name,u,null),Ie(t,n,"formEncType",u.formEncType,u,null),Ie(t,n,"formMethod",u.formMethod,u,null),Ie(t,n,"formTarget",u.formTarget,u,null)):(Ie(t,n,"encType",u.encType,u,null),Ie(t,n,"method",u.method,u,null),Ie(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Vo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=zi);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Vo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":me("beforetoggle",t),me("toggle",t),Ge(t,"popover",r);break;case"xlinkActuate":de(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":de(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":de(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":de(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":de(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":de(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":de(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":de(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":de(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ge(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Jv.get(a)||a,Ge(t,a,r))}}function Tf(t,n,a,r,u,f){switch(a){case"style":Ad(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?ws(t,r):(typeof r=="number"||typeof r=="bigint")&&ws(t,""+r);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"onClick":r!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ge(t,a,r)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,f,v,a,null)}}u&&Ie(t,n,"srcSet",a.srcSet,a,null),r&&Ie(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var b=f=v=u=null,B=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":u=ut;break;case"type":v=ut;break;case"checked":B=ut;break;case"defaultChecked":$=ut;break;case"value":f=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Ie(t,n,r,ut,a,null)}}Cn(t,f,b,B,$,v,u,!1);return;case"select":me("invalid",t),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":r=b;default:Ie(t,n,u,b,a,null)}n=f,a=v,t.multiple=!!r,n!=null?Je(t,!!r,n,!1):a!=null&&Je(t,!!r,a,!0);return;case"textarea":me("invalid",t),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":r=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ie(t,n,v,b,a,null)}bi(t,r,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ie(t,n,B,r,a,null));return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(r=0;r<mo.length;r++)me(mo[r],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,$,r,a,null)}return;default:if(Ic(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&Tf(t,n,ut,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Ie(t,n,b,r,a,null))}function bS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,b=null,B=null,$=null,ut=null;for(rt in a){var pt=a[rt];if(a.hasOwnProperty(rt)&&pt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":B=pt;default:r.hasOwnProperty(rt)||Ie(t,n,rt,null,r,pt)}}for(var nt in r){var rt=r[nt];if(pt=a[nt],r.hasOwnProperty(nt)&&(rt!=null||pt!=null))switch(nt){case"type":f=rt;break;case"name":u=rt;break;case"checked":$=rt;break;case"defaultChecked":ut=rt;break;case"value":v=rt;break;case"defaultValue":b=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==pt&&Ie(t,n,nt,rt,r,pt)}}En(t,v,b,B,$,ut,f,u);return;case"select":rt=v=b=nt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":rt=B;default:r.hasOwnProperty(f)||Ie(t,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==B&&Ie(t,n,u,f,r,B)}n=b,a=v,r=rt,nt!=null?Je(t,!!a,nt,!1):!!r!=!!a&&(n!=null?Je(t,!!a,n,!0):Je(t,!!a,a?[]:"",!1));return;case"textarea":rt=nt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(t,n,b,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":nt=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ie(t,n,v,u,r,f)}Cs(t,nt,rt);return;case"option":for(var Gt in a)nt=a[Gt],a.hasOwnProperty(Gt)&&nt!=null&&!r.hasOwnProperty(Gt)&&(Gt==="selected"?t.selected=!1:Ie(t,n,Gt,null,r,nt));for(B in r)nt=r[B],rt=a[B],r.hasOwnProperty(B)&&nt!==rt&&(nt!=null||rt!=null)&&(B==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":Ie(t,n,B,nt,r,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!r.hasOwnProperty(te)&&Ie(t,n,te,null,r,nt);for($ in r)if(nt=r[$],rt=a[$],r.hasOwnProperty($)&&nt!==rt&&(nt!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Ie(t,n,$,nt,r,rt)}return;default:if(Ic(n)){for(var Be in a)nt=a[Be],a.hasOwnProperty(Be)&&nt!==void 0&&!r.hasOwnProperty(Be)&&Tf(t,n,Be,void 0,r,nt);for(ut in r)nt=r[ut],rt=a[ut],!r.hasOwnProperty(ut)||nt===rt||nt===void 0&&rt===void 0||Tf(t,n,ut,nt,r,rt);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!r.hasOwnProperty(Y)&&Ie(t,n,Y,null,r,nt);for(pt in r)nt=r[pt],rt=a[pt],!r.hasOwnProperty(pt)||nt===rt||nt==null&&rt==null||Ie(t,n,pt,nt,r,rt)}function Rg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function AS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,b=u.duration;if(f&&b&&Rg(v)){for(v=0,b=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],$=B.startTime;if($>b)break;var ut=B.transferSize,pt=B.initiatorType;ut&&Rg(pt)&&(B=B.responseEnd,v+=ut*(B<b?1:(b-$)/(B-$)))}if(--r,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var bf=null,Af=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function Cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Rf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cf=null;function RS(){var t=window.event;return t&&t.type==="popstate"?t===Cf?!1:(Cf=t,!0):(Cf=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,CS=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,wS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(t){return Ug.resolve(null).then(t).catch(DS)}:Dg;function DS(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function Lg(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),rr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")_o(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,_o(a);for(var f=a.firstChild;f;){var v=f.nextSibling,b=f.nodeName;f[qa]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&_o(t.ownerDocument.body);a=u}while(a);rr(n)}function Ng(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function wf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wf(a),A(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function US(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[qa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function LS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function Og(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function Df(t){return t.data==="$?"||t.data==="$~"}function Uf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function NS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Lf=null;function zg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Pg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Ig(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function _o(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);A(t)}var li=new Map,Bg=new Set;function Bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=j.d;j.d={f:OS,r:zS,D:PS,C:IS,L:BS,m:FS,X:GS,S:HS,M:VS};function OS(){var t=Qi.f(),n=wl();return t||n}function zS(t){var n=at(t);n!==null&&n.tag===5&&n.type==="form"?em(n):Qi.r(t)}var ir=typeof document>"u"?null:document;function Fg(t,n,a){var r=ir;if(r&&typeof n=="string"&&n){var u=ge(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Bg.has(u)||(Bg.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Mn(n,"link",t),St(n),r.head.appendChild(n)))}}function PS(t){Qi.D(t),Fg("dns-prefetch",t,null)}function IS(t,n){Qi.C(t,n),Fg("preconnect",t,n)}function BS(t,n,a){Qi.L(t,n,a);var r=ir;if(r&&t&&n){var u='link[rel="preload"][as="'+ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ge(a.imageSizes)+'"]')):u+='[href="'+ge(t)+'"]';var f=u;switch(n){case"style":f=ar(t);break;case"script":f=sr(t)}li.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(vo(f))||n==="script"&&r.querySelector(So(f))||(n=r.createElement("link"),Mn(n,"link",t),St(n),r.head.appendChild(n)))}}function FS(t,n){Qi.m(t,n);var a=ir;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ge(r)+'"][href="'+ge(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(t)}if(!li.has(f)&&(t=g({rel:"modulepreload",href:t},n),li.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}r=a.createElement("link"),Mn(r,"link",t),St(r),a.head.appendChild(r)}}}function HS(t,n,a){Qi.S(t,n,a);var r=ir;if(r&&t){var u=q(r).hoistableStyles,f=ar(t);n=n||"default";var v=u.get(f);if(!v){var b={loading:0,preload:null};if(v=r.querySelector(vo(f)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(f))&&Nf(t,a);var B=v=r.createElement("link");St(B),Mn(B,"link",t),B._p=new Promise(function($,ut){B.onload=$,B.onerror=ut}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Fl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(f,v)}}}function GS(t,n){Qi.X(t,n);var a=ir;if(a&&t){var r=q(a).hoistableScripts,u=sr(t),f=r.get(u);f||(f=a.querySelector(So(u)),f||(t=g({src:t,async:!0},n),(n=li.get(u))&&Of(t,n),f=a.createElement("script"),St(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function VS(t,n){Qi.M(t,n);var a=ir;if(a&&t){var r=q(a).hoistableScripts,u=sr(t),f=r.get(u);f||(f=a.querySelector(So(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=li.get(u))&&Of(t,n),f=a.createElement("script"),St(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Hg(t,n,a,r){var u=(u=vt.current)?Bl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=q(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ar(a.href);var f=q(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(vo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),f||kS(u,t,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=q(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ar(t){return'href="'+ge(t)+'"'}function vo(t){return'link[rel="stylesheet"]['+t+"]"}function Gg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function kS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Mn(n,"link",a),St(n),t.head.appendChild(n))}function sr(t){return'[src="'+ge(t)+'"]'}function So(t){return"script[async]"+t}function Vg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ge(a.href)+'"]');if(r)return n.instance=r,St(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),St(r),Mn(r,"style",u),Fl(r,a.precedence,t),n.instance=r;case"stylesheet":u=ar(a.href);var f=t.querySelector(vo(u));if(f)return n.state.loading|=4,n.instance=f,St(f),f;r=Gg(a),(u=li.get(u))&&Nf(r,u),f=(t.ownerDocument||t).createElement("link"),St(f);var v=f;return v._p=new Promise(function(b,B){v.onload=b,v.onerror=B}),Mn(f,"link",r),n.state.loading|=4,Fl(f,a.precedence,t),n.instance=f;case"script":return f=sr(a.src),(u=t.querySelector(So(f)))?(n.instance=u,St(u),u):(r=a,(u=li.get(f))&&(r=g({},a),Of(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),St(u),Mn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Fl(r,a.precedence,t));return n.instance}function Fl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var b=r[v];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Nf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Hl=null;function kg(t,n,a){if(Hl===null){var r=new Map,u=Hl=new Map;u.set(a,r)}else u=Hl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[qa]||f[nn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var b=r.get(v);b?b.push(f):r.set(v,[f])}}return r}function Xg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function XS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function WS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ar(r.href),f=n.querySelector(vo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Gl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,St(f);return}f=n.ownerDocument||n,r=Gg(r),(u=li.get(u))&&Nf(r,u),f=f.createElement("link"),St(f);var v=f;v._p=new Promise(function(b,B){v.onload=b,v.onerror=B}),Mn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Gl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var zf=0;function qS(t,n){return t.stylesheets&&t.count===0&&kl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&zf===0&&(zf=62500*AS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Gl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vl=null;function kl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vl=new Map,n.forEach(YS,t),Vl=null,Gl.call(t))}function YS(t,n){if(!(n.state.loading&4)){var a=Vl.get(t);if(a)var r=a.get(null);else{a=new Map,Vl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=Gl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var yo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function ZS(t,n,a,r,u,f,v,b,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function qg(t,n,a,r,u,f,v,b,B,$,ut,pt){return t=new ZS(t,n,a,v,B,$,ut,pt,b),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=du(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},_u(f),t}function Yg(t){return t?(t=Ps,t):Ps}function Zg(t,n,a,r,u,f){u=Yg(u),r.context===null?r.context=u:r.pendingContext=u,r=ma(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ga(t,r,n),a!==null&&(Pn(a,t,n),Qr(a,t,n))}function jg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Pf(t,n){jg(t,n),(t=t.alternate)&&jg(t,n)}function Kg(t){if(t.tag===13||t.tag===31){var n=Qa(t,67108864);n!==null&&Pn(n,t,67108864),Pf(t,67108864)}}function Qg(t){if(t.tag===13||t.tag===31){var n=Zn();n=As(n);var a=Qa(t,n);a!==null&&Pn(a,t,n),Pf(t,n)}}var Xl=!0;function jS(t,n,a,r){var u=P.T;P.T=null;var f=j.p;try{j.p=2,If(t,n,a,r)}finally{j.p=f,P.T=u}}function KS(t,n,a,r){var u=P.T;P.T=null;var f=j.p;try{j.p=8,If(t,n,a,r)}finally{j.p=f,P.T=u}}function If(t,n,a,r){if(Xl){var u=Bf(r);if(u===null)Ef(t,n,r,Wl,a),$g(t,r);else if(JS(u,t,n,a,r))r.stopPropagation();else if($g(t,r),n&4&&-1<QS.indexOf(t)){for(;u!==null;){var f=at(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Mt(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var B=1<<31-Pt(v);b.entanglements[1]|=B,v&=~B}wi(f),(De&6)===0&&(Rl=T()+500,po(0))}}break;case 31:case 13:b=Qa(f,2),b!==null&&Pn(b,f,2),wl(),Pf(f,2)}if(f=Bf(r),f===null&&Ef(t,n,r,Wl,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Ef(t,n,r,null,a)}}function Bf(t){return t=Fc(t),Ff(t)}var Wl=null;function Ff(t){if(Wl=null,t=W(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wl=t,null}function Jg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case ft:return 2;case xt:return 8;case ct:case Yt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Hf=!1,Ra=null,Ca=null,wa=null,xo=new Map,Mo=new Map,Da=[],QS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(t,n){switch(t){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=at(n),n!==null&&Kg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function JS(t,n,a,r,u){switch(n){case"focusin":return Ra=Eo(Ra,t,n,a,r,u),!0;case"dragenter":return Ca=Eo(Ca,t,n,a,r,u),!0;case"mouseover":return wa=Eo(wa,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return xo.set(f,Eo(xo.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Mo.set(f,Eo(Mo.get(f)||null,t,n,a,r,u)),!0}return!1}function t_(t){var n=W(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Or(t.priority,function(){Qg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Or(t.priority,function(){Qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Bf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Bc=r,a.target.dispatchEvent(r),Bc=null}else return n=at(a),n!==null&&Kg(n),t.blockedOn=a,!1;n.shift()}return!0}function e_(t,n,a){ql(t)&&a.delete(n)}function $S(){Hf=!1,Ra!==null&&ql(Ra)&&(Ra=null),Ca!==null&&ql(Ca)&&(Ca=null),wa!==null&&ql(wa)&&(wa=null),xo.forEach(e_),Mo.forEach(e_)}function Yl(t,n){t.blockedOn===n&&(t.blockedOn=null,Hf||(Hf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$S)))}var Zl=null;function n_(t){Zl!==t&&(Zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(Ff(r||a)===null)continue;break}var f=at(a);f!==null&&(t.splice(n,3),n-=3,Iu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function rr(t){function n(B){return Yl(B,t)}Ra!==null&&Yl(Ra,t),Ca!==null&&Yl(Ca,t),wa!==null&&Yl(wa,t),xo.forEach(n),Mo.forEach(n);for(var a=0;a<Da.length;a++){var r=Da[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[_n]||null;if(typeof f=="function")v||n_(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[_n]||null)b=v.formAction;else if(Ff(u)!==null)continue}else b=v.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),n_(a)}}}function i_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Gf(t){this._internalRoot=t}jl.prototype.render=Gf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Zn();Zg(a,r,t,n,null,null)},jl.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Zg(t.current,2,null,t,null,null),wl(),n[la]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Wa();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&t_(t)}};var a_=e.version;if(a_!=="19.2.8")throw Error(s(527,a_,"19.2.8"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var ty={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{bt=Kl.inject(ty),wt=Kl}catch{}}return To.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=fm,f=hm,v=dm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=qg(t,1,!1,null,null,a,r,null,u,f,v,i_),t[la]=n.current,Mf(t),new Gf(n)},To.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=fm,v=hm,b=dm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=qg(t,1,!0,n,a??null,r,u,B,f,v,b,i_),n.context=Yg(null),a=n.current,r=Zn(),r=As(r),u=ma(r),u.callback=null,ga(a,u,r),a=r,n.current.lanes=a,Rn(n,a),wi(n),t[la]=n.current,Mf(t),new jl(n)},To.version="19.2.8",To}var h_;function cy(){if(h_)return kf.exports;h_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),kf.exports=ly(),kf.exports}var uy=cy();const pd="179",fy=0,d_=1,hy=2,gv=1,dy=2,ia=3,Va=0,Bn=1,aa=2,Ha=0,Mr=1,p_=2,m_=3,g_=4,py=5,Ss=100,my=101,gy=102,_y=103,vy=104,Sy=200,yy=201,xy=202,My=203,bh=204,Ah=205,Ey=206,Ty=207,by=208,Ay=209,Ry=210,Cy=211,wy=212,Dy=213,Uy=214,Rh=0,Ch=1,wh=2,br=3,Dh=4,Uh=5,Lh=6,Nh=7,_v=0,Ly=1,Ny=2,Ga=0,Oy=1,zy=2,Py=3,Iy=4,By=5,Fy=6,Hy=7,vv=300,Ar=301,Rr=302,Oh=303,zh=304,Uc=306,Ph=1e3,xs=1001,Ih=1002,Mi=1003,Gy=1004,Ql=1005,Ui=1006,Yf=1007,Ms=1008,oa=1009,Sv=1010,yv=1011,Lo=1012,md=1013,Es=1014,sa=1015,Po=1016,gd=1017,_d=1018,No=1020,xv=35902,Mv=1021,Ev=1022,xi=1023,Oo=1026,zo=1027,Tv=1028,vd=1029,bv=1030,Sd=1031,yd=1033,yc=33776,xc=33777,Mc=33778,Ec=33779,Bh=35840,Fh=35841,Hh=35842,Gh=35843,Vh=36196,kh=37492,Xh=37496,Wh=37808,qh=37809,Yh=37810,Zh=37811,jh=37812,Kh=37813,Qh=37814,Jh=37815,$h=37816,td=37817,ed=37818,nd=37819,id=37820,ad=37821,Tc=36492,sd=36494,rd=36495,Av=36283,od=36284,ld=36285,cd=36286,Vy=3200,ky=3201,Rv=0,Xy=1,Fa="",Qn="srgb",Cr="srgb-linear",Ac="linear",Fe="srgb",or=7680,__=519,Wy=512,qy=513,Yy=514,Cv=515,Zy=516,jy=517,Ky=518,Qy=519,v_=35044,S_="300 es",Li=2e3,Rc=2001;class Dr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,ud=180/Math.PI;function Io(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function Jy(o,e){return(o%e+e)%e}function jf(o,e,i){return(1-i)*o+i*e}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,i=0){Ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],y=s[l+2],g=s[l+3];const S=c[h+0],x=c[h+1],E=c[h+2],R=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=y,e[i+3]=g;return}if(d===1){e[i+0]=S,e[i+1]=x,e[i+2]=E,e[i+3]=R;return}if(g!==R||m!==S||p!==x||y!==E){let M=1-d;const _=m*S+p*x+y*E+g*R,L=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const H=Math.sqrt(U),F=Math.atan2(H,_*L);M=Math.sin(M*F)/H,d=Math.sin(d*F)/H}const C=d*L;if(m=m*M+S*C,p=p*M+x*C,y=y*M+E*C,g=g*M+R*C,M===1-d){const H=1/Math.sqrt(m*m+p*p+y*y+g*g);m*=H,p*=H,y*=H,g*=H}}e[i]=m,e[i+1]=p,e[i+2]=y,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],y=s[l+3],g=c[h],S=c[h+1],x=c[h+2],E=c[h+3];return e[i]=d*E+y*g+m*x-p*S,e[i+1]=m*E+y*S+p*g-d*x,e[i+2]=p*E+y*x+d*S-m*g,e[i+3]=y*E-d*g-m*S-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),y=d(l/2),g=d(c/2),S=m(s/2),x=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=S*y*g+p*x*E,this._y=p*x*g-S*y*E,this._z=p*y*E+S*x*g,this._w=p*y*g-S*x*E;break;case"YXZ":this._x=S*y*g+p*x*E,this._y=p*x*g-S*y*E,this._z=p*y*E-S*x*g,this._w=p*y*g+S*x*E;break;case"ZXY":this._x=S*y*g-p*x*E,this._y=p*x*g+S*y*E,this._z=p*y*E+S*x*g,this._w=p*y*g-S*x*E;break;case"ZYX":this._x=S*y*g-p*x*E,this._y=p*x*g+S*y*E,this._z=p*y*E-S*x*g,this._w=p*y*g+S*x*E;break;case"YZX":this._x=S*y*g+p*x*E,this._y=p*x*g+S*y*E,this._z=p*y*E-S*x*g,this._w=p*y*g-S*x*E;break;case"XZY":this._x=S*y*g-p*x*E,this._y=p*x*g-S*y*E,this._z=p*y*E+S*x*g,this._w=p*y*g+S*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],y=i[6],g=i[10],S=s+d+g;if(S>0){const x=.5/Math.sqrt(S+1);this._w=.25/x,this._x=(y-m)*x,this._y=(c-p)*x,this._z=(h-l)*x}else if(s>d&&s>g){const x=2*Math.sqrt(1+s-d-g);this._w=(y-m)/x,this._x=.25*x,this._y=(l+h)/x,this._z=(c+p)/x}else if(d>g){const x=2*Math.sqrt(1+d-s-g);this._w=(c-p)/x,this._x=(l+h)/x,this._y=.25*x,this._z=(m+y)/x}else{const x=2*Math.sqrt(1+g-s-d);this._w=(h-l)/x,this._x=(c+p)/x,this._y=(m+y)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,y=i._w;return this._x=s*y+h*d+l*p-c*m,this._y=l*y+h*m+c*d-s*p,this._z=c*y+h*p+s*m-l*d,this._w=h*y-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const x=1-i;return this._w=x*h+i*this._w,this._x=x*s+i*this._x,this._y=x*l+i*this._y,this._z=x*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),y=Math.atan2(p,d),g=Math.sin((1-i)*y)/p,S=Math.sin(i*y)/p;return this._w=h*g+this._w*S,this._x=s*g+this._x*S,this._y=l*g+this._y*S,this._z=c*g+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(e=0,i=0,s=0){et.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(y_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(y_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),y=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*y,this.y=s+m*y+d*p-c*g,this.z=l+m*g+c*y-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Kf.copy(this).projectOnVector(e),this.sub(Kf)}reflect(e){return this.sub(Kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new et,y_=new Bo;class ce{constructor(e,i,s,l,c,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p)}set(e,i,s,l,c,h,d,m,p){const y=this.elements;return y[0]=e,y[1]=l,y[2]=d,y[3]=i,y[4]=c,y[5]=m,y[6]=s,y[7]=h,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],y=s[4],g=s[7],S=s[2],x=s[5],E=s[8],R=l[0],M=l[3],_=l[6],L=l[1],U=l[4],C=l[7],H=l[2],F=l[5],z=l[8];return c[0]=h*R+d*L+m*H,c[3]=h*M+d*U+m*F,c[6]=h*_+d*C+m*z,c[1]=p*R+y*L+g*H,c[4]=p*M+y*U+g*F,c[7]=p*_+y*C+g*z,c[2]=S*R+x*L+E*H,c[5]=S*M+x*U+E*F,c[8]=S*_+x*C+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],y=e[8];return i*h*y-i*d*p-s*c*y+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],y=e[8],g=y*h-d*p,S=d*m-y*c,x=p*c-h*m,E=i*g+s*S+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=g*R,e[1]=(l*p-y*s)*R,e[2]=(d*s-l*h)*R,e[3]=S*R,e[4]=(y*i-l*m)*R,e[5]=(l*c-d*i)*R,e[6]=x*R,e[7]=(s*m-p*i)*R,e[8]=(h*i-s*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Qf.makeScale(e,i)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new ce;function wv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $y(){const o=Cc("canvas");return o.style.display="block",o}const x_={};function Er(o){o in x_||(x_[o]=!0,console.warn(o))}function tx(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const M_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ex(){const o={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Fe&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Tr(l.r),l.g=Tr(l.g),l.b=Tr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Ac:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Cr]:{primaries:e,whitePoint:s,transfer:Ac,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:s,transfer:Fe,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),o}const we=ex();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Tr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let lr;class nx{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{lr===void 0&&(lr=Cc("canvas")),lr.width=e.width,lr.height=e.height;const l=lr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=lr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Cc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ra(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ra(i[s]/255)*255):i[s]=ra(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ix=0;class xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Jf(l[h].image)):c.push(Jf(l[h]))}else c=Jf(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?nx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ax=0;const $f=new et;class Fn extends Dr{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=xs,l=xs,c=Ui,h=Ms,d=xi,m=oa,p=Fn.DEFAULT_ANISOTROPY,y=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Io(),this.name="",this.source=new xd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ph:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ph:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=vv;Fn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],y=m[4],g=m[8],S=m[1],x=m[5],E=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(y-S)<.01&&Math.abs(g-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(y+S)<.1&&Math.abs(g+R)<.1&&Math.abs(E+M)<.1&&Math.abs(p+x+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,C=(x+1)/2,H=(_+1)/2,F=(y+S)/4,z=(g+R)/4,k=(E+M)/4;return U>C&&U>H?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=F/s,c=z/s):C>H?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=F/l,c=k/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=z/c,l=k/c),this.set(s,l,c,i),this}let L=Math.sqrt((M-E)*(M-E)+(g-R)*(g-R)+(S-y)*(S-y));return Math.abs(L)<.001&&(L=1),this.x=(M-E)/L,this.y=(g-R)/L,this.z=(S-y)/L,this.w=Math.acos((p+x+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sx extends Dr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Fn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new xd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends sx{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Dv extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rx extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,gi):gi.fromBufferAttribute(c,h),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Jl.copy(s.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),$l.subVectors(this.max,Ao),cr.subVectors(e.a,Ao),ur.subVectors(e.b,Ao),fr.subVectors(e.c,Ao),La.subVectors(ur,cr),Na.subVectors(fr,ur),us.subVectors(cr,fr);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-us.z,us.y,La.z,0,-La.x,Na.z,0,-Na.x,us.z,0,-us.x,-La.y,La.x,0,-Na.y,Na.x,0,-us.y,us.x,0];return!th(i,cr,ur,fr,$l)||(i=[1,0,0,0,1,0,0,0,1],!th(i,cr,ur,fr,$l))?!1:(tc.crossVectors(La,Na),i=[tc.x,tc.y,tc.z],th(i,cr,ur,fr,$l))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new et,new et,new et,new et,new et,new et,new et,new et],gi=new et,Jl=new Fo,cr=new et,ur=new et,fr=new et,La=new et,Na=new et,us=new et,Ao=new et,$l=new et,tc=new et,fs=new et;function th(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){fs.fromArray(o,c);const d=l.x*Math.abs(fs.x)+l.y*Math.abs(fs.y)+l.z*Math.abs(fs.z),m=e.dot(fs),p=i.dot(fs),y=s.dot(fs);if(Math.max(-Math.max(m,p,y),Math.min(m,p,y))>d)return!1}return!0}const ox=new Fo,Ro=new et,eh=new et;class Lc{constructor(e=new et,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):ox.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ro,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(eh)),this.expandByPoint(Ro.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $i=new et,nh=new et,ec=new et,Oa=new et,ih=new et,nc=new et,ah=new et;class Uv{constructor(e=new et,i=new et(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){nh.copy(e).add(i).multiplyScalar(.5),ec.copy(i).sub(e).normalize(),Oa.copy(this.origin).sub(nh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(ec),d=Oa.dot(this.direction),m=-Oa.dot(ec),p=Oa.lengthSq(),y=Math.abs(1-h*h);let g,S,x,E;if(y>0)if(g=h*m-d,S=h*d-m,E=c*y,g>=0)if(S>=-E)if(S<=E){const R=1/y;g*=R,S*=R,x=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=c,g=Math.max(0,-(h*S+d)),x=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(h*S+d)),x=-g*g+S*(S+2*m)+p;else S<=-E?(g=Math.max(0,-(-h*c+d)),S=g>0?-c:Math.min(Math.max(-c,-m),c),x=-g*g+S*(S+2*m)+p):S<=E?(g=0,S=Math.min(Math.max(-c,-m),c),x=S*(S+2*m)+p):(g=Math.max(0,-(h*c+d)),S=g>0?c:Math.min(Math.max(-c,-m),c),x=-g*g+S*(S+2*m)+p);else S=h>0?-c:c,g=Math.max(0,-(h*S+d)),x=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(nh).addScaledVector(ec,S),x}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,m;const p=1/this.direction.x,y=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),y>=0?(c=(e.min.y-S.y)*y,h=(e.max.y-S.y)*y):(c=(e.max.y-S.y)*y,h=(e.min.y-S.y)*y),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(d=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,s,l,c){ih.subVectors(i,e),nc.subVectors(s,e),ah.crossVectors(ih,nc);let h=this.direction.dot(ah),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Oa.subVectors(this.origin,e);const m=d*this.direction.dot(nc.crossVectors(Oa,nc));if(m<0)return null;const p=d*this.direction.dot(ih.cross(Oa));if(p<0||m+p>h)return null;const y=-d*Oa.dot(ah);return y<0?null:this.at(y/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,i,s,l,c,h,d,m,p,y,g,S,x,E,R,M){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p,y,g,S,x,E,R,M)}set(e,i,s,l,c,h,d,m,p,y,g,S,x,E,R,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=y,_[10]=g,_[14]=S,_[3]=x,_[7]=E,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/hr.setFromMatrixColumn(e,0).length(),c=1/hr.setFromMatrixColumn(e,1).length(),h=1/hr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),y=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const S=h*y,x=h*g,E=d*y,R=d*g;i[0]=m*y,i[4]=-m*g,i[8]=p,i[1]=x+E*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=E+x*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*y,x=m*g,E=p*y,R=p*g;i[0]=S+R*d,i[4]=E*d-x,i[8]=h*p,i[1]=h*g,i[5]=h*y,i[9]=-d,i[2]=x*d-E,i[6]=R+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*y,x=m*g,E=p*y,R=p*g;i[0]=S-R*d,i[4]=-h*g,i[8]=E+x*d,i[1]=x+E*d,i[5]=h*y,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*y,x=h*g,E=d*y,R=d*g;i[0]=m*y,i[4]=E*p-x,i[8]=S*p+R,i[1]=m*g,i[5]=R*p+S,i[9]=x*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,x=h*p,E=d*m,R=d*p;i[0]=m*y,i[4]=R-S*g,i[8]=E*g+x,i[1]=g,i[5]=h*y,i[9]=-d*y,i[2]=-p*y,i[6]=x*g+E,i[10]=S-R*g}else if(e.order==="XZY"){const S=h*m,x=h*p,E=d*m,R=d*p;i[0]=m*y,i[4]=-g,i[8]=p*y,i[1]=S*g+R,i[5]=h*y,i[9]=x*g-E,i[2]=E*g-x,i[6]=d*y,i[10]=R*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lx,e,cx)}lookAt(e,i,s){const l=this.elements;return jn.subVectors(e,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),za.crossVectors(s,jn),za.lengthSq()===0&&(Math.abs(s.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),za.crossVectors(s,jn)),za.normalize(),ic.crossVectors(jn,za),l[0]=za.x,l[4]=ic.x,l[8]=jn.x,l[1]=za.y,l[5]=ic.y,l[9]=jn.y,l[2]=za.z,l[6]=ic.z,l[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],y=s[1],g=s[5],S=s[9],x=s[13],E=s[2],R=s[6],M=s[10],_=s[14],L=s[3],U=s[7],C=s[11],H=s[15],F=l[0],z=l[4],k=l[8],D=l[12],w=l[1],I=l[5],ot=l[9],lt=l[13],ht=l[2],mt=l[6],P=l[10],j=l[14],Z=l[3],yt=l[7],Tt=l[11],O=l[15];return c[0]=h*F+d*w+m*ht+p*Z,c[4]=h*z+d*I+m*mt+p*yt,c[8]=h*k+d*ot+m*P+p*Tt,c[12]=h*D+d*lt+m*j+p*O,c[1]=y*F+g*w+S*ht+x*Z,c[5]=y*z+g*I+S*mt+x*yt,c[9]=y*k+g*ot+S*P+x*Tt,c[13]=y*D+g*lt+S*j+x*O,c[2]=E*F+R*w+M*ht+_*Z,c[6]=E*z+R*I+M*mt+_*yt,c[10]=E*k+R*ot+M*P+_*Tt,c[14]=E*D+R*lt+M*j+_*O,c[3]=L*F+U*w+C*ht+H*Z,c[7]=L*z+U*I+C*mt+H*yt,c[11]=L*k+U*ot+C*P+H*Tt,c[15]=L*D+U*lt+C*j+H*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],y=e[2],g=e[6],S=e[10],x=e[14],E=e[3],R=e[7],M=e[11],_=e[15];return E*(+c*m*g-l*p*g-c*d*S+s*p*S+l*d*x-s*m*x)+R*(+i*m*x-i*p*S+c*h*S-l*h*x+l*p*y-c*m*y)+M*(+i*p*g-i*d*x-c*h*g+s*h*x+c*d*y-s*p*y)+_*(-l*d*y-i*m*g+i*d*S+l*h*g-s*h*S+s*m*y)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],y=e[8],g=e[9],S=e[10],x=e[11],E=e[12],R=e[13],M=e[14],_=e[15],L=g*M*p-R*S*p+R*m*x-d*M*x-g*m*_+d*S*_,U=E*S*p-y*M*p-E*m*x+h*M*x+y*m*_-h*S*_,C=y*R*p-E*g*p+E*d*x-h*R*x-y*d*_+h*g*_,H=E*g*m-y*R*m-E*d*S+h*R*S+y*d*M-h*g*M,F=i*L+s*U+l*C+c*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=L*z,e[1]=(R*S*c-g*M*c-R*l*x+s*M*x+g*l*_-s*S*_)*z,e[2]=(d*M*c-R*m*c+R*l*p-s*M*p-d*l*_+s*m*_)*z,e[3]=(g*m*c-d*S*c-g*l*p+s*S*p+d*l*x-s*m*x)*z,e[4]=U*z,e[5]=(y*M*c-E*S*c+E*l*x-i*M*x-y*l*_+i*S*_)*z,e[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*_-i*m*_)*z,e[7]=(h*S*c-y*m*c+y*l*p-i*S*p-h*l*x+i*m*x)*z,e[8]=C*z,e[9]=(E*g*c-y*R*c-E*s*x+i*R*x+y*s*_-i*g*_)*z,e[10]=(h*R*c-E*d*c+E*s*p-i*R*p-h*s*_+i*d*_)*z,e[11]=(y*d*c-h*g*c-y*s*p+i*g*p+h*s*x-i*d*x)*z,e[12]=H*z,e[13]=(y*R*l-E*g*l+E*s*S-i*R*S-y*s*M+i*g*M)*z,e[14]=(E*d*l-h*R*l-E*s*m+i*R*m+h*s*M-i*d*M)*z,e[15]=(h*g*l-y*d*l+y*s*m-i*g*m-h*s*S+i*d*S)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,y=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,y*d+s,y*m-l*h,0,p*m-l*d,y*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,y=h+h,g=d+d,S=c*p,x=c*y,E=c*g,R=h*y,M=h*g,_=d*g,L=m*p,U=m*y,C=m*g,H=s.x,F=s.y,z=s.z;return l[0]=(1-(R+_))*H,l[1]=(x+C)*H,l[2]=(E-U)*H,l[3]=0,l[4]=(x-C)*F,l[5]=(1-(S+_))*F,l[6]=(M+L)*F,l[7]=0,l[8]=(E+U)*z,l[9]=(M-L)*z,l[10]=(1-(S+R))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=hr.set(l[0],l[1],l[2]).length();const h=hr.set(l[4],l[5],l[6]).length(),d=hr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/c,y=1/h,g=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=y,_i.elements[5]*=y,_i.elements[6]*=y,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,i.setFromRotationMatrix(_i),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=Li,m=!1){const p=this.elements,y=2*c/(i-e),g=2*c/(s-l),S=(i+e)/(i-e),x=(s+l)/(s-l);let E,R;if(m)E=c/(h-c),R=h*c/(h-c);else if(d===Li)E=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Rc)E=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=y,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=Li,m=!1){const p=this.elements,y=2/(i-e),g=2/(s-l),S=-(i+e)/(i-e),x=-(s+l)/(s-l);let E,R;if(m)E=1/(h-c),R=h/(h-c);else if(d===Li)E=-2/(h-c),R=-(h+c)/(h-c);else if(d===Rc)E=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=y,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const hr=new et,_i=new cn,lx=new et(0,0,0),cx=new et(1,1,1),za=new et,ic=new et,jn=new et,T_=new cn,b_=new Bo;class Ni{constructor(e=0,i=0,s=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],y=l[9],g=l[2],S=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-y,x),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-y,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return T_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(T_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return b_.setFromEuler(this),this.setFromQuaternion(b_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Lv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ux=0;const A_=new et,dr=new Bo,ta=new cn,ac=new et,Co=new et,fx=new et,hx=new Bo,R_=new et(1,0,0),C_=new et(0,1,0),w_=new et(0,0,1),D_={type:"added"},dx={type:"removed"},pr={type:"childadded",child:null},sh={type:"childremoved",child:null};class Hn extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new et,i=new Ni,s=new Bo,l=new et(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new ce}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return dr.setFromAxisAngle(e,i),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,i){return dr.setFromAxisAngle(e,i),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(R_,e)}rotateY(e){return this.rotateOnAxis(C_,e)}rotateZ(e){return this.rotateOnAxis(w_,e)}translateOnAxis(e,i){return A_.copy(e).applyQuaternion(this.quaternion),this.position.add(A_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(R_,e)}translateY(e){return this.translateOnAxis(C_,e)}translateZ(e){return this.translateOnAxis(w_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ac.copy(e):ac.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Co,ac,this.up):ta.lookAt(ac,Co,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(ta),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(D_),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(dx),sh.child=e,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(D_),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,y=m.length;p<y;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),y=h(e.images),g=h(e.shapes),S=h(e.skeletons),x=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),y.length>0&&(s.images=y),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const y=d[p];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new et(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new et,ea=new et,rh=new et,na=new et,mr=new et,gr=new et,U_=new et,oh=new et,lh=new et,ch=new et,uh=new en,fh=new en,hh=new en;class yi{constructor(e=new et,i=new et,s=new et){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),vi.subVectors(e,i),l.cross(vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){vi.subVectors(l,i),ea.subVectors(s,i),rh.subVectors(e,i);const h=vi.dot(vi),d=vi.dot(ea),m=vi.dot(rh),p=ea.dot(ea),y=ea.dot(rh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const S=1/g,x=(p*m-d*y)*S,E=(h*y-d*m)*S;return c.set(1-x-E,E,x)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,s,l,c,h,d,m){return this.getBarycoord(e,i,s,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return uh.setScalar(0),fh.setScalar(0),hh.setScalar(0),uh.fromBufferAttribute(e,i),fh.fromBufferAttribute(e,s),hh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(uh,c.x),h.addScaledVector(fh,c.y),h.addScaledVector(hh,c.z),h}static isFrontFacing(e,i,s,l){return vi.subVectors(s,i),ea.subVectors(e,i),vi.cross(ea).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),vi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;mr.subVectors(l,s),gr.subVectors(c,s),oh.subVectors(e,s);const m=mr.dot(oh),p=gr.dot(oh);if(m<=0&&p<=0)return i.copy(s);lh.subVectors(e,l);const y=mr.dot(lh),g=gr.dot(lh);if(y>=0&&g<=y)return i.copy(l);const S=m*g-y*p;if(S<=0&&m>=0&&y<=0)return h=m/(m-y),i.copy(s).addScaledVector(mr,h);ch.subVectors(e,c);const x=mr.dot(ch),E=gr.dot(ch);if(E>=0&&x<=E)return i.copy(c);const R=x*p-m*E;if(R<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(gr,d);const M=y*E-x*g;if(M<=0&&g-y>=0&&x-E>=0)return U_.subVectors(c,l),d=(g-y)/(g-y+(x-E)),i.copy(l).addScaledVector(U_,d);const _=1/(M+R+S);return h=R*_,d=S*_,i.copy(s).addScaledVector(mr,h).addScaledVector(gr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},sc={h:0,s:0,l:0};function dh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Me{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=we.workingColorSpace){return this.r=e,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=we.workingColorSpace){if(e=Jy(e,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=dh(h,c,e+1/3),this.g=dh(h,c,e),this.b=dh(h,c,e-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(e,i=Qn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Qn){const s=Nv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return we.workingToColorSpace(An.copy(this),e),Math.round(Se(An.r*255,0,255))*65536+Math.round(Se(An.g*255,0,255))*256+Math.round(Se(An.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=we.workingColorSpace){we.workingToColorSpace(An.copy(this),i);const s=An.r,l=An.g,c=An.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const y=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=y<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=y,e}getRGB(e,i=we.workingColorSpace){return we.workingToColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Qn){we.workingToColorSpace(An.copy(this),e);const i=An.r,s=An.g,l=An.b;return e!==Qn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(sc);const s=jf(Pa.h,sc.h,i),l=jf(Pa.s,sc.s,i),c=jf(Pa.l,sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Me;Me.NAMES=Nv;let px=0;class Ur extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=Mr,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Ah,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=__,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(s.blending=this.blending),this.side!==Va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==bh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ah&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==__&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wc extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=_v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new et,rc=new Ae;let mx=0;class hi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mx++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=v_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)rc.fromBufferAttribute(this,i),rc.applyMatrix3(e),this.setXY(i,rc.x,rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=bo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=In(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==v_&&(e.usage=this.usage),e}}class Ov extends hi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class zv extends hi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class $n extends hi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let gx=0;const ci=new cn,ph=new Hn,_r=new et,Kn=new Fo,wo=new Fo,gn=new et;class Ei extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wv(e)?zv:Ov)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ce().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,s){return ci.makeTranslation(e,i,s),this.applyMatrix4(ci),this}scale(e,i,s){return ci.makeScale(e,i,s),this.applyMatrix4(ci),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new $n(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Kn.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(e){const s=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];wo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Kn.min,wo.min),Kn.expandByPoint(gn),gn.addVectors(Kn.max,wo.max),Kn.expandByPoint(gn)):(Kn.expandByPoint(wo.min),Kn.expandByPoint(wo.max))}Kn.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)gn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(gn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,y=d.count;p<y;p++)gn.fromBufferAttribute(d,p),m&&(_r.fromBufferAttribute(e,p),gn.add(_r)),l=Math.max(l,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<s.count;k++)d[k]=new et,m[k]=new et;const p=new et,y=new et,g=new et,S=new Ae,x=new Ae,E=new Ae,R=new et,M=new et;function _(k,D,w){p.fromBufferAttribute(s,k),y.fromBufferAttribute(s,D),g.fromBufferAttribute(s,w),S.fromBufferAttribute(c,k),x.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),y.sub(p),g.sub(p),x.sub(S),E.sub(S);const I=1/(x.x*E.y-E.x*x.y);isFinite(I)&&(R.copy(y).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(I),M.copy(g).multiplyScalar(x.x).addScaledVector(y,-E.x).multiplyScalar(I),d[k].add(R),d[D].add(R),d[w].add(R),m[k].add(M),m[D].add(M),m[w].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let k=0,D=L.length;k<D;++k){const w=L[k],I=w.start,ot=w.count;for(let lt=I,ht=I+ot;lt<ht;lt+=3)_(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const U=new et,C=new et,H=new et,F=new et;function z(k){H.fromBufferAttribute(l,k),F.copy(H);const D=d[k];U.copy(D),U.sub(H.multiplyScalar(H.dot(D))).normalize(),C.crossVectors(F,D);const I=C.dot(m[k])<0?-1:1;h.setXYZW(k,U.x,U.y,U.z,I)}for(let k=0,D=L.length;k<D;++k){const w=L[k],I=w.start,ot=w.count;for(let lt=I,ht=I+ot;lt<ht;lt+=3)z(e.getX(lt+0)),z(e.getX(lt+1)),z(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new hi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,x=s.count;S<x;S++)s.setXYZ(S,0,0,0);const l=new et,c=new et,h=new et,d=new et,m=new et,p=new et,y=new et,g=new et;if(e)for(let S=0,x=e.count;S<x;S+=3){const E=e.getX(S+0),R=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),y.subVectors(h,c),g.subVectors(l,c),y.cross(g),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),d.add(y),m.add(y),p.add(y),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,x=i.count;S<x;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),y.subVectors(h,c),g.subVectors(l,c),y.cross(g),s.setXYZ(S+0,y.x,y.y,y.z),s.setXYZ(S+1,y.x,y.y,y.z),s.setXYZ(S+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,y=d.itemSize,g=d.normalized,S=new p.constructor(m.length*y);let x=0,E=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?x=m[R]*d.data.stride+d.offset:x=m[R]*y;for(let _=0;_<y;_++)S[E++]=p[x++]}return new hi(S,y,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ei,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let y=0,g=p.length;y<g;y++){const S=p[y],x=e(S,s);m.push(x)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],y=[];for(let g=0,S=p.length;g<S;g++){const x=p[g];y.push(x.toJSON(e.data))}y.length>0&&(l[m]=y,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const y=l[p];this.setAttribute(p,y.clone(i))}const c=e.morphAttributes;for(const p in c){const y=[],g=c[p];for(let S=0,x=g.length;S<x;S++)y.push(g[S].clone(i));this.morphAttributes[p]=y}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,y=h.length;p<y;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L_=new cn,hs=new Uv,oc=new Lc,N_=new et,lc=new et,cc=new et,uc=new et,mh=new et,fc=new et,O_=new et,hc=new et;class fi extends Hn{constructor(e=new Ei,i=new wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){fc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const y=d[m],g=c[m];y!==0&&(mh.fromBufferAttribute(g,e),h?fc.addScaledVector(mh,y):fc.addScaledVector(mh.sub(i),y))}i.add(fc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(c),hs.copy(e.ray).recast(e.near),!(oc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(oc,N_)===null||hs.origin.distanceToSquared(N_)>(e.far-e.near)**2))&&(L_.copy(c).invert(),hs.copy(e.ray).applyMatrix4(L_),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,hs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,y=c.attributes.uv1,g=c.attributes.normal,S=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=S.length;E<R;E++){const M=S[E],_=h[M.materialIndex],L=Math.max(M.start,x.start),U=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let C=L,H=U;C<H;C+=3){const F=d.getX(C),z=d.getX(C+1),k=d.getX(C+2);l=dc(this,_,e,s,p,y,g,F,z,k),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),R=Math.min(d.count,x.start+x.count);for(let M=E,_=R;M<_;M+=3){const L=d.getX(M),U=d.getX(M+1),C=d.getX(M+2);l=dc(this,h,e,s,p,y,g,L,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,R=S.length;E<R;E++){const M=S[E],_=h[M.materialIndex],L=Math.max(M.start,x.start),U=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let C=L,H=U;C<H;C+=3){const F=C,z=C+1,k=C+2;l=dc(this,_,e,s,p,y,g,F,z,k),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),R=Math.min(m.count,x.start+x.count);for(let M=E,_=R;M<_;M+=3){const L=M,U=M+1,C=M+2;l=dc(this,h,e,s,p,y,g,L,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function _x(o,e,i,s,l,c,h,d){let m;if(e.side===Bn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===Va,d),m===null)return null;hc.copy(d),hc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(hc);return p<i.near||p>i.far?null:{distance:p,point:hc.clone(),object:o}}function dc(o,e,i,s,l,c,h,d,m,p){o.getVertexPosition(d,lc),o.getVertexPosition(m,cc),o.getVertexPosition(p,uc);const y=_x(o,e,i,s,lc,cc,uc,O_);if(y){const g=new et;yi.getBarycoord(O_,lc,cc,uc,g),l&&(y.uv=yi.getInterpolatedAttribute(l,d,m,p,g,new Ae)),c&&(y.uv1=yi.getInterpolatedAttribute(c,d,m,p,g,new Ae)),h&&(y.normal=yi.getInterpolatedAttribute(h,d,m,p,g,new et),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new et,materialIndex:0};yi.getNormal(lc,cc,uc,S.normal),y.face=S,y.barycoord=g}return y}class Ho extends Ei{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],y=[],g=[];let S=0,x=0;E("z","y","x",-1,-1,s,i,e,h,c,0),E("z","y","x",1,-1,s,i,-e,h,c,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new $n(p,3)),this.setAttribute("normal",new $n(y,3)),this.setAttribute("uv",new $n(g,2));function E(R,M,_,L,U,C,H,F,z,k,D){const w=C/z,I=H/k,ot=C/2,lt=H/2,ht=F/2,mt=z+1,P=k+1;let j=0,Z=0;const yt=new et;for(let Tt=0;Tt<P;Tt++){const O=Tt*I-lt;for(let it=0;it<mt;it++){const Et=it*w-ot;yt[R]=Et*L,yt[M]=O*U,yt[_]=ht,p.push(yt.x,yt.y,yt.z),yt[R]=0,yt[M]=0,yt[_]=F>0?1:-1,y.push(yt.x,yt.y,yt.z),g.push(it/z),g.push(1-Tt/k),j+=1}}for(let Tt=0;Tt<k;Tt++)for(let O=0;O<z;O++){const it=S+O+mt*Tt,Et=S+O+mt*(Tt+1),Rt=S+(O+1)+mt*(Tt+1),K=S+(O+1)+mt*Tt;m.push(it,Et,K),m.push(Et,Rt,K),Z+=6}d.addGroup(x,Z,D),x+=Z,S+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const s=wr(o[i]);for(const l in s)e[l]=s[l]}return e}function vx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Pv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:we.workingColorSpace}const Sx={clone:wr,merge:Dn};var yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Iv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new et,z_=new Ae,P_=new Ae;class ui extends Iv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ud*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ud*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,i){return this.getViewBounds(e,z_,P_),i.subVectors(P_,z_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Zf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vr=-90,Sr=1;class Mx extends Hn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(vr,Sr,e,i);l.layers=this.layers,this.add(l);const c=new ui(vr,Sr,e,i);c.layers=this.layers,this.add(c);const h=new ui(vr,Sr,e,i);h.layers=this.layers,this.add(h);const d=new ui(vr,Sr,e,i);d.layers=this.layers,this.add(d);const m=new ui(vr,Sr,e,i);m.layers=this.layers,this.add(m);const p=new ui(vr,Sr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Li)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Rc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,y]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,y),e.setRenderTarget(g,S,x),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Bv extends Fn{constructor(e=[],i=Ar,s,l,c,h,d,m,p,y){super(e,i,s,l,c,h,d,m,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ex extends Ts{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Bv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ho(5,5,5),c=new ka({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Bn,blending:Ha});c.uniforms.tEquirect.value=i;const h=new fi(l,c),d=i.minFilter;return i.minFilter===Ms&&(i.minFilter=Ui),new Mx(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Do extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tx={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,s),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const y=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=y.position.distanceTo(g.position),x=.02,E=.005;p.inputState.pinching&&S>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Do;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}let bx=class extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};const _h=new et,Ax=new et,Rx=new ce;class _s{constructor(e=new et(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=_h.subVectors(s,i).cross(Ax.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(_h),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Rx.getNormalMatrix(e),l=this.coplanarPoint(_h).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Lc,Cx=new Ae(.5,.5),pc=new et;class Fv{constructor(e=new _s,i=new _s,s=new _s,l=new _s,c=new _s,h=new _s){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Li,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],y=c[4],g=c[5],S=c[6],x=c[7],E=c[8],R=c[9],M=c[10],_=c[11],L=c[12],U=c[13],C=c[14],H=c[15];if(l[0].setComponents(p-h,x-y,_-E,H-L).normalize(),l[1].setComponents(p+h,x+y,_+E,H+L).normalize(),l[2].setComponents(p+d,x+g,_+R,H+U).normalize(),l[3].setComponents(p-d,x-g,_-R,H-U).normalize(),s)l[4].setComponents(m,S,M,C).normalize(),l[5].setComponents(p-m,x-S,_-M,H-C).normalize();else if(l[4].setComponents(p-m,x-S,_-M,H-C).normalize(),i===Li)l[5].setComponents(p+m,x+S,_+M,H+C).normalize();else if(i===Rc)l[5].setComponents(m,S,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const i=Cx.distanceTo(e.center);return ds.radius=.7071067811865476+i,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(pc.x=l.normal.x>0?e.max.x:e.min.x,pc.y=l.normal.y>0?e.max.y:e.min.y,pc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hv extends Ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const I_=new cn,fd=new Uv,mc=new Lc,gc=new et;class wx extends Hn{constructor(e=new Ei,i=new Hv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(l),mc.radius+=c,e.ray.intersectsSphere(mc)===!1)return;I_.copy(l).invert(),fd.copy(e.ray).applyMatrix4(I_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),x=Math.min(p.count,h.start+h.count);for(let E=S,R=x;E<R;E++){const M=p.getX(E);gc.fromBufferAttribute(g,M),B_(gc,M,m,l,e,i,this)}}else{const S=Math.max(0,h.start),x=Math.min(g.count,h.start+h.count);for(let E=S,R=x;E<R;E++)gc.fromBufferAttribute(g,E),B_(gc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function B_(o,e,i,s,l,c,h){const d=fd.distanceSqToPoint(o);if(d<i){const m=new et;fd.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Gv extends Fn{constructor(e,i,s=Es,l,c,h,d=Mi,m=Mi,p,y=Oo,g=1){if(y!==Oo&&y!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,c,h,d,m,y,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Md extends Ei{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),y(),this.setAttribute("position",new $n(c,3)),this.setAttribute("normal",new $n(c.slice(),3)),this.setAttribute("uv",new $n(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const U=new et,C=new et,H=new et;for(let F=0;F<i.length;F+=3)x(i[F+0],U),x(i[F+1],C),x(i[F+2],H),m(U,C,H,L)}function m(L,U,C,H){const F=H+1,z=[];for(let k=0;k<=F;k++){z[k]=[];const D=L.clone().lerp(C,k/F),w=U.clone().lerp(C,k/F),I=F-k;for(let ot=0;ot<=I;ot++)ot===0&&k===F?z[k][ot]=D:z[k][ot]=D.clone().lerp(w,ot/I)}for(let k=0;k<F;k++)for(let D=0;D<2*(F-k)-1;D++){const w=Math.floor(D/2);D%2===0?(S(z[k][w+1]),S(z[k+1][w]),S(z[k][w])):(S(z[k][w+1]),S(z[k+1][w+1]),S(z[k+1][w]))}}function p(L){const U=new et;for(let C=0;C<c.length;C+=3)U.x=c[C+0],U.y=c[C+1],U.z=c[C+2],U.normalize().multiplyScalar(L),c[C+0]=U.x,c[C+1]=U.y,c[C+2]=U.z}function y(){const L=new et;for(let U=0;U<c.length;U+=3){L.x=c[U+0],L.y=c[U+1],L.z=c[U+2];const C=M(L)/2/Math.PI+.5,H=_(L)/Math.PI+.5;h.push(C,1-H)}E(),g()}function g(){for(let L=0;L<h.length;L+=6){const U=h[L+0],C=h[L+2],H=h[L+4],F=Math.max(U,C,H),z=Math.min(U,C,H);F>.9&&z<.1&&(U<.2&&(h[L+0]+=1),C<.2&&(h[L+2]+=1),H<.2&&(h[L+4]+=1))}}function S(L){c.push(L.x,L.y,L.z)}function x(L,U){const C=L*3;U.x=e[C+0],U.y=e[C+1],U.z=e[C+2]}function E(){const L=new et,U=new et,C=new et,H=new et,F=new Ae,z=new Ae,k=new Ae;for(let D=0,w=0;D<c.length;D+=9,w+=6){L.set(c[D+0],c[D+1],c[D+2]),U.set(c[D+3],c[D+4],c[D+5]),C.set(c[D+6],c[D+7],c[D+8]),F.set(h[w+0],h[w+1]),z.set(h[w+2],h[w+3]),k.set(h[w+4],h[w+5]),H.copy(L).add(U).add(C).divideScalar(3);const I=M(H);R(F,w+0,L,I),R(z,w+2,U,I),R(k,w+4,C,I)}}function R(L,U,C,H){H<0&&L.x===1&&(h[U]=L.x-1),C.x===0&&C.z===0&&(h[U]=H/2/Math.PI+.5)}function M(L){return Math.atan2(L.z,-L.x)}function _(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.vertices,e.indices,e.radius,e.details)}}class Dc extends Md{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Dc(e.radius,e.detail)}}class Nc extends Ei{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,y=m+1,g=e/d,S=i/m,x=[],E=[],R=[],M=[];for(let _=0;_<y;_++){const L=_*S-h;for(let U=0;U<p;U++){const C=U*g-c;E.push(C,-L,0),R.push(0,0,1),M.push(U/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const U=L+p*_,C=L+p*(_+1),H=L+1+p*(_+1),F=L+1+p*_;x.push(U,C,F),x.push(C,H,F)}this.setIndex(x),this.setAttribute("position",new $n(E,3)),this.setAttribute("normal",new $n(R,3)),this.setAttribute("uv",new $n(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ed extends Ei{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],y=new et,g=new et,S=new et;for(let x=0;x<=s;x++)for(let E=0;E<=l;E++){const R=E/l*c,M=x/s*Math.PI*2;g.x=(e+i*Math.cos(M))*Math.cos(R),g.y=(e+i*Math.cos(M))*Math.sin(R),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),y.x=e*Math.cos(R),y.y=e*Math.sin(R),S.subVectors(g,y).normalize(),m.push(S.x,S.y,S.z),p.push(E/l),p.push(x/s)}for(let x=1;x<=s;x++)for(let E=1;E<=l;E++){const R=(l+1)*x+E-1,M=(l+1)*(x-1)+E-1,_=(l+1)*(x-1)+E,L=(l+1)*x+E;h.push(R,M,L),h.push(M,_,L)}this.setIndex(h),this.setAttribute("position",new $n(d,3)),this.setAttribute("normal",new $n(m,3)),this.setAttribute("uv",new $n(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ed(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Dx extends Ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rv,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ux extends Dx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Lx extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nx extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ox extends Iv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=y*this.view.offsetY,m=d-y*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zx extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Px{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function F_(o,e,i,s){const l=Ix(s);switch(i){case Mv:return o*e;case Tv:return o*e/l.components*l.byteLength;case vd:return o*e/l.components*l.byteLength;case bv:return o*e*2/l.components*l.byteLength;case Sd:return o*e*2/l.components*l.byteLength;case Ev:return o*e*3/l.components*l.byteLength;case xi:return o*e*4/l.components*l.byteLength;case yd:return o*e*4/l.components*l.byteLength;case yc:case xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fh:case Gh:return Math.max(o,16)*Math.max(e,8)/4;case Bh:case Hh:return Math.max(o,8)*Math.max(e,8)/2;case Vh:case kh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Xh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case jh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case td:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ed:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case nd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case id:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ad:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Tc:case sd:case rd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Av:case od:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ld:case cd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ix(o){switch(o){case oa:case Sv:return{byteLength:1,components:1};case Lo:case yv:case Po:return{byteLength:2,components:1};case gd:case _d:return{byteLength:2,components:4};case Es:case md:case sa:return{byteLength:4,components:1};case xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);function Vv(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Bx(o){const e=new WeakMap;function i(d,m){const p=d.array,y=d.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,y),d.onUploadCallback();let x;if(p instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=o.SHORT;else if(p instanceof Uint32Array)x=o.UNSIGNED_INT;else if(p instanceof Int32Array)x=o.INT;else if(p instanceof Int8Array)x=o.BYTE;else if(p instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const y=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,y);else{g.sort((x,E)=>x.start-E.start);let S=0;for(let x=1;x<g.length;x++){const E=g[S],R=g[x];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++S,g[S]=R)}g.length=S+1;for(let x=0,E=g.length;x<E;x++){const R=g[x];o.bufferSubData(p,R.start*y.BYTES_PER_ELEMENT,y,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const y=e.get(d);(!y||y.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var Fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
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
#endif`,Gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wx=`#ifdef USE_AOMAP
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
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yx=`#ifdef USE_BATCHING
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
#endif`,Zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jx=`#ifdef USE_IRIDESCENCE
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
#endif`,$x=`#ifdef USE_BUMPMAP
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lM=`#define PI 3.141592653589793
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
} // validated`,cM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mM="gl_FragColor = linearToOutputTexel( gl_FragColor );",gM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DM=`uniform bool receiveShadow;
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
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PM=`PhysicalMaterial material;
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
#endif`,IM=`struct PhysicalMaterial {
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
}`,BM=`
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZM=`#if defined( USE_POINTS_UV )
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
#endif`,jM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
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
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
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
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EE=`float getShadowMask() {
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
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,AE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,CE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
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
}`,WE=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,qE=`#define DISTANCE
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
}`,YE=`#define DISTANCE
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`uniform float scale;
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
}`,QE=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,$E=`uniform vec3 diffuse;
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
}`,tT=`#define LAMBERT
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
}`,eT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,sT=`#define NORMAL
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
}`,rT=`#define PHONG
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
}`,oT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,cT=`#define STANDARD
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
}`,uT=`#define TOON
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
}`,fT=`#define TOON
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
}`,hT=`uniform float size;
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Fx,alphahash_pars_fragment:Hx,alphamap_fragment:Gx,alphamap_pars_fragment:Vx,alphatest_fragment:kx,alphatest_pars_fragment:Xx,aomap_fragment:Wx,aomap_pars_fragment:qx,batching_pars_vertex:Yx,batching_vertex:Zx,begin_vertex:jx,beginnormal_vertex:Kx,bsdfs:Qx,iridescence_fragment:Jx,bumpmap_pars_fragment:$x,clipping_planes_fragment:tM,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:aM,color_pars_fragment:sM,color_pars_vertex:rM,color_vertex:oM,common:lM,cube_uv_reflection_fragment:cM,defaultnormal_vertex:uM,displacementmap_pars_vertex:fM,displacementmap_vertex:hM,emissivemap_fragment:dM,emissivemap_pars_fragment:pM,colorspace_fragment:mM,colorspace_pars_fragment:gM,envmap_fragment:_M,envmap_common_pars_fragment:vM,envmap_pars_fragment:SM,envmap_pars_vertex:yM,envmap_physical_pars_fragment:UM,envmap_vertex:xM,fog_vertex:MM,fog_pars_vertex:EM,fog_fragment:TM,fog_pars_fragment:bM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:RM,lights_lambert_fragment:CM,lights_lambert_pars_fragment:wM,lights_pars_begin:DM,lights_toon_fragment:LM,lights_toon_pars_fragment:NM,lights_phong_fragment:OM,lights_phong_pars_fragment:zM,lights_physical_fragment:PM,lights_physical_pars_fragment:IM,lights_fragment_begin:BM,lights_fragment_maps:FM,lights_fragment_end:HM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:XM,map_fragment:WM,map_pars_fragment:qM,map_particle_fragment:YM,map_particle_pars_fragment:ZM,metalnessmap_fragment:jM,metalnessmap_pars_fragment:KM,morphinstance_vertex:QM,morphcolor_vertex:JM,morphnormal_vertex:$M,morphtarget_pars_vertex:tE,morphtarget_vertex:eE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:aE,normal_pars_vertex:sE,normal_vertex:rE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:cE,clearcoat_pars_fragment:uE,iridescence_pars_fragment:fE,opaque_fragment:hE,packing:dE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:gE,dithering_pars_fragment:_E,roughnessmap_fragment:vE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:yE,shadowmap_pars_vertex:xE,shadowmap_vertex:ME,shadowmask_pars_fragment:EE,skinbase_vertex:TE,skinning_pars_vertex:bE,skinning_vertex:AE,skinnormal_vertex:RE,specularmap_fragment:CE,specularmap_pars_fragment:wE,tonemapping_fragment:DE,tonemapping_pars_fragment:UE,transmission_fragment:LE,transmission_pars_fragment:NE,uv_pars_fragment:OE,uv_pars_vertex:zE,uv_vertex:PE,worldpos_vertex:IE,background_vert:BE,background_frag:FE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:VE,cube_frag:kE,depth_vert:XE,depth_frag:WE,distanceRGBA_vert:qE,distanceRGBA_frag:YE,equirect_vert:ZE,equirect_frag:jE,linedashed_vert:KE,linedashed_frag:QE,meshbasic_vert:JE,meshbasic_frag:$E,meshlambert_vert:tT,meshlambert_frag:eT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:aT,meshnormal_frag:sT,meshphong_vert:rT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:fT,points_vert:hT,points_frag:dT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},Nt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Di={basic:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Dn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Dn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Dn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Dn([Nt.points,Nt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Dn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Dn([Nt.common,Nt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Dn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Dn([Nt.sprite,Nt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Dn([Nt.common,Nt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Dn([Nt.lights,Nt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Di.physical={uniforms:Dn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const _c={r:0,b:0,g:0},ps=new Ni,vT=new cn;function ST(o,e,i,s,l,c,h){const d=new Me(0);let m=c===!0?0:1,p,y,g=null,S=0,x=null;function E(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:e).get(C)),C}function R(U){let C=!1;const H=E(U);H===null?_(d,m):H&&H.isColor&&(_(H,1),C=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,C){const H=E(C);H&&(H.isCubeTexture||H.mapping===Uc)?(y===void 0&&(y=new fi(new Ho(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:wr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(F,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(y)),ps.copy(C.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),y.material.uniforms.envMap.value=H,y.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(ps)),y.material.toneMapped=we.getTransfer(H.colorSpace)!==Fe,(g!==H||S!==H.version||x!==o.toneMapping)&&(y.material.needsUpdate=!0,g=H,S=H.version,x=o.toneMapping),y.layers.enableAll(),U.unshift(y,y.geometry,y.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new fi(new Nc(2,2),new ka({name:"BackgroundMaterial",uniforms:wr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=we.getTransfer(H.colorSpace)!==Fe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||S!==H.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,g=H,S=H.version,x=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,C){U.getRGB(_c,Pv(o)),s.buffers.color.setClear(_c.r,_c.g,_c.b,C,h)}function L(){y!==void 0&&(y.geometry.dispose(),y.material.dispose(),y=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,C=1){d.set(U),m=C,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(d,m)},render:R,addToRenderList:M,dispose:L}}function yT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(w,I,ot,lt,ht){let mt=!1;const P=g(lt,ot,I);c!==P&&(c=P,p(c.object)),mt=x(w,lt,ot,ht),mt&&E(w,lt,ot,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,C(w,I,ot,lt),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function y(w){return o.deleteVertexArray(w)}function g(w,I,ot){const lt=ot.wireframe===!0;let ht=s[w.id];ht===void 0&&(ht={},s[w.id]=ht);let mt=ht[I.id];mt===void 0&&(mt={},ht[I.id]=mt);let P=mt[lt];return P===void 0&&(P=S(m()),mt[lt]=P),P}function S(w){const I=[],ot=[],lt=[];for(let ht=0;ht<i;ht++)I[ht]=0,ot[ht]=0,lt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:ot,attributeDivisors:lt,object:w,attributes:{},index:null}}function x(w,I,ot,lt){const ht=c.attributes,mt=I.attributes;let P=0;const j=ot.getAttributes();for(const Z in j)if(j[Z].location>=0){const Tt=ht[Z];let O=mt[Z];if(O===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),Tt===void 0||Tt.attribute!==O||O&&Tt.data!==O.data)return!0;P++}return c.attributesNum!==P||c.index!==lt}function E(w,I,ot,lt){const ht={},mt=I.attributes;let P=0;const j=ot.getAttributes();for(const Z in j)if(j[Z].location>=0){let Tt=mt[Z];Tt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor));const O={};O.attribute=Tt,Tt&&Tt.data&&(O.data=Tt.data),ht[Z]=O,P++}c.attributes=ht,c.attributesNum=P,c.index=lt}function R(){const w=c.newAttributes;for(let I=0,ot=w.length;I<ot;I++)w[I]=0}function M(w){_(w,0)}function _(w,I){const ot=c.newAttributes,lt=c.enabledAttributes,ht=c.attributeDivisors;ot[w]=1,lt[w]===0&&(o.enableVertexAttribArray(w),lt[w]=1),ht[w]!==I&&(o.vertexAttribDivisor(w,I),ht[w]=I)}function L(){const w=c.newAttributes,I=c.enabledAttributes;for(let ot=0,lt=I.length;ot<lt;ot++)I[ot]!==w[ot]&&(o.disableVertexAttribArray(ot),I[ot]=0)}function U(w,I,ot,lt,ht,mt,P){P===!0?o.vertexAttribIPointer(w,I,ot,ht,mt):o.vertexAttribPointer(w,I,ot,lt,ht,mt)}function C(w,I,ot,lt){R();const ht=lt.attributes,mt=ot.getAttributes(),P=I.defaultAttributeValues;for(const j in mt){const Z=mt[j];if(Z.location>=0){let yt=ht[j];if(yt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const Tt=yt.normalized,O=yt.itemSize,it=e.get(yt);if(it===void 0)continue;const Et=it.buffer,Rt=it.type,K=it.bytesPerElement,vt=Rt===o.INT||Rt===o.UNSIGNED_INT||yt.gpuType===md;if(yt.isInterleavedBufferAttribute){const _t=yt.data,Ht=_t.stride,zt=yt.offset;if(_t.isInstancedInterleavedBuffer){for(let ee=0;ee<Z.locationSize;ee++)_(Z.location+ee,_t.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ee=0;ee<Z.locationSize;ee++)M(Z.location+ee);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let ee=0;ee<Z.locationSize;ee++)U(Z.location+ee,O/Z.locationSize,Rt,Tt,Ht*K,(zt+O/Z.locationSize*ee)*K,vt)}else{if(yt.isInstancedBufferAttribute){for(let _t=0;_t<Z.locationSize;_t++)_(Z.location+_t,yt.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let _t=0;_t<Z.locationSize;_t++)M(Z.location+_t);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let _t=0;_t<Z.locationSize;_t++)U(Z.location+_t,O/Z.locationSize,Rt,Tt,O*K,O/Z.locationSize*_t*K,vt)}}else if(P!==void 0){const Tt=P[j];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(Z.location,Tt);break;case 3:o.vertexAttrib3fv(Z.location,Tt);break;case 4:o.vertexAttrib4fv(Z.location,Tt);break;default:o.vertexAttrib1fv(Z.location,Tt)}}}}L()}function H(){k();for(const w in s){const I=s[w];for(const ot in I){const lt=I[ot];for(const ht in lt)y(lt[ht].object),delete lt[ht];delete I[ot]}delete s[w]}}function F(w){if(s[w.id]===void 0)return;const I=s[w.id];for(const ot in I){const lt=I[ot];for(const ht in lt)y(lt[ht].object),delete lt[ht];delete I[ot]}delete s[w.id]}function z(w){for(const I in s){const ot=s[I];if(ot[w.id]===void 0)continue;const lt=ot[w.id];for(const ht in lt)y(lt[ht].object),delete lt[ht];delete ot[w.id]}}function k(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:M,disableUnusedAttributes:L}}function xT(o,e,i){let s;function l(p){s=p}function c(p,y){o.drawArrays(s,p,y),i.update(y,s,1)}function h(p,y,g){g!==0&&(o.drawArraysInstanced(s,p,y,g),i.update(y,s,g))}function d(p,y,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,y,0,g);let x=0;for(let E=0;E<g;E++)x+=y[E];i.update(x,s,1)}function m(p,y,g,S){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)h(p[E],y[E],S[E]);else{x.multiDrawArraysInstancedWEBGL(s,p,0,y,0,S,0,g);let E=0;for(let R=0;R<g;R++)E+=y[R]*S[R];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function MT(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==xi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const k=z===Po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==oa&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==sa&&!k)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const y=m(p);y!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:x,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:H,maxSamples:F}}function ET(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new _s,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const x=g.length!==0||S||s!==0||l;return l=S,s=g.length,x},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=y(g,S,0)},this.setState=function(g,S,x){const E=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?y(null):p();else{const L=c?0:s,U=L*4;let C=_.clippingState||null;m.value=C,C=y(E,S,U,x);for(let H=0;H!==U;++H)C[H]=i[H];_.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function y(g,S,x,E){const R=g!==null?g.length:0;let M=null;if(R!==0){if(M=m.value,E!==!0||M===null){const _=x+R*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(M===null||M.length<_)&&(M=new Float32Array(_));for(let U=0,C=x;U!==R;++U,C+=4)h.copy(g[U]).applyMatrix4(L,d),h.normal.toArray(M,C),M[C+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function TT(o){let e=new WeakMap;function i(h,d){return d===Oh?h.mapping=Ar:d===zh&&(h.mapping=Rr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Oh||d===zh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ex(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const xr=4,H_=[.125,.215,.35,.446,.526,.582],ys=20,vh=new Ox,G_=new Me;let Sh=null,yh=0,xh=0,Mh=!1;const vs=(1+Math.sqrt(5))/2,yr=1/vs,V_=[new et(-vs,yr,0),new et(vs,yr,0),new et(-yr,0,vs),new et(yr,0,vs),new et(0,vs,-yr),new et(0,vs,yr),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],bT=new et;class k_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=bT}=c;Sh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,yh,xh),this._renderer.xr.enabled=Mh,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ar||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Po,format:xi,colorSpace:Cr,depthBuffer:!1},l=X_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X_(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(c)),this._blurMaterial=RT(c,e,i)}return l}_compileMaterial(e){const i=new fi(this._lodPlanes[0],e);this._renderer.compile(i,vh)}_sceneToCubeUV(e,i,s,l,c){const m=new ui(90,1,i,s),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,x=g.toneMapping;g.getClearColor(G_),g.toneMapping=Ga,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const R=new wc({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new fi(new Ho,R);let _=!1;const L=e.background;L?L.isColor&&(R.color.copy(L),e.background=null,_=!0):(R.color.copy(G_),_=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+y[U],c.y,c.z)):C===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+y[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+y[U]));const H=this._cubeSize;vc(l,C*H,U>2?H:0,H,H),g.setRenderTarget(l),_&&g.render(M,m),g.render(e,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=S,e.background=L}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ar||e.mapping===Rr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new fi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;vc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,vh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=V_[(l-c-1)%V_.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,g=new fi(this._lodPlanes[l],p),S=p.uniforms,x=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*ys-1),R=c/E,M=isFinite(c)?1+Math.floor(y*R):ys;M>ys&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ys}`);const _=[];let L=0;for(let z=0;z<ys;++z){const k=z/R,D=Math.exp(-k*k/2);_.push(D),z===0?L+=D:z<M&&(L+=2*D)}for(let z=0;z<_.length;z++)_[z]=_[z]/L;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=E,S.mipInt.value=U-s;const C=this._sizeLods[l],H=3*C*(l>U-xr?l-U+xr:0),F=4*(this._cubeSize-C);vc(i,H,F,3*C,2*C),m.setRenderTarget(i),m.render(g,vh)}}function AT(o){const e=[],i=[],s=[];let l=o;const c=o-xr+1+H_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-xr?m=H_[h-o+xr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),y=-p,g=1+p,S=[y,y,g,y,g,g,y,y,g,g,y,g],x=6,E=6,R=3,M=2,_=1,L=new Float32Array(R*E*x),U=new Float32Array(M*E*x),C=new Float32Array(_*E*x);for(let F=0;F<x;F++){const z=F%3*2/3-1,k=F>2?0:-1,D=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];L.set(D,R*E*F),U.set(S,M*E*F);const w=[F,F,F,F,F,F];C.set(w,_*E*F)}const H=new Ei;H.setAttribute("position",new hi(L,R)),H.setAttribute("uv",new hi(U,M)),H.setAttribute("faceIndex",new hi(C,_)),e.push(H),l>xr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function X_(o,e,i){const s=new Ts(o,e,i);return s.texture.mapping=Uc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function vc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function RT(o,e,i){const s=new Float32Array(ys),l=new et(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function W_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function q_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Td(){return`

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
	`}function CT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Oh||m===zh,y=m===Ar||m===Rr;if(p||y){let g=e.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new k_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return p&&x&&x.height>0||y&&x&&l(x)?(i===null&&(i=new k_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let y=0;y<p;y++)d[y]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function wT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Er("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function DT(o,e,i,s){const l={},c=new WeakMap;function h(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",h),delete l[S.id];const x=c.get(S);x&&(e.remove(x),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const x in S)e.update(S[x],o.ARRAY_BUFFER)}function p(g){const S=[],x=g.index,E=g.attributes.position;let R=0;if(x!==null){const L=x.array;R=x.version;for(let U=0,C=L.length;U<C;U+=3){const H=L[U+0],F=L[U+1],z=L[U+2];S.push(H,F,F,z,z,H)}}else if(E!==void 0){const L=E.array;R=E.version;for(let U=0,C=L.length/3-1;U<C;U+=3){const H=U+0,F=U+1,z=U+2;S.push(H,F,F,z,z,H)}}else return;const M=new(wv(S)?zv:Ov)(S,1);M.version=R;const _=c.get(g);_&&e.remove(_),c.set(g,M)}function y(g){const S=c.get(g);if(S){const x=g.index;x!==null&&S.version<x.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:y}}function UT(o,e,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,x){o.drawElements(s,x,c,S*h),i.update(x,s,1)}function p(S,x,E){E!==0&&(o.drawElementsInstanced(s,x,c,S*h,E),i.update(x,s,E))}function y(S,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,S,0,E);let M=0;for(let _=0;_<E;_++)M+=x[_];i.update(M,s,1)}function g(S,x,E,R){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/h,x[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(s,x,0,c,S,0,R,0,E);let _=0;for(let L=0;L<E;L++)_+=x[L]*R[L];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=y,this.renderMultiDrawInstances=g}function LT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function NT(o,e,i){const s=new WeakMap,l=new en;function c(h,d,m){const p=h.morphTargetInfluences,y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=y!==void 0?y.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let w=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var x=w;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),R===!0&&(C=2),M===!0&&(C=3);let H=d.attributes.position.count*C,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*F*4*g),k=new Dv(z,H,F,g);k.type=sa,k.needsUpdate=!0;const D=C*4;for(let I=0;I<g;I++){const ot=_[I],lt=L[I],ht=U[I],mt=H*F*4*I;for(let P=0;P<ot.count;P++){const j=P*D;E===!0&&(l.fromBufferAttribute(ot,P),z[mt+j+0]=l.x,z[mt+j+1]=l.y,z[mt+j+2]=l.z,z[mt+j+3]=0),R===!0&&(l.fromBufferAttribute(lt,P),z[mt+j+4]=l.x,z[mt+j+5]=l.y,z[mt+j+6]=l.z,z[mt+j+7]=0),M===!0&&(l.fromBufferAttribute(ht,P),z[mt+j+8]=l.x,z[mt+j+9]=l.y,z[mt+j+10]=l.z,z[mt+j+11]=ht.itemSize===4?l.w:1)}}S={count:g,texture:k,size:new Ae(H,F)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function OT(o,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,y=m.geometry,g=e.get(m,y);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const kv=new Fn,Y_=new Gv(1,1),Xv=new Dv,Wv=new rx,qv=new Bv,Z_=[],j_=[],K_=new Float32Array(16),Q_=new Float32Array(9),J_=new Float32Array(4);function Lr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=Z_[l];if(c===void 0&&(c=new Float32Array(l),Z_[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function dn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Oc(o,e){let i=j_[e];i===void 0&&(i=new Int32Array(e),j_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function zT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),dn(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),dn(i,e)}}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),dn(i,e)}}function FT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;J_.set(s),o.uniformMatrix2fv(this.addr,!1,J_),dn(i,s)}}function HT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;Q_.set(s),o.uniformMatrix3fv(this.addr,!1,Q_),dn(i,s)}}function GT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;K_.set(s),o.uniformMatrix4fv(this.addr,!1,K_),dn(i,s)}}function VT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),dn(i,e)}}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),dn(i,e)}}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),dn(i,e)}}function qT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),dn(i,e)}}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),dn(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),dn(i,e)}}function KT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Y_.compareFunction=Cv,c=Y_):c=kv,i.setTexture2D(e||c,l)}function QT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Wv,l)}function JT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||qv,l)}function $T(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Xv,l)}function tb(o){switch(o){case 5126:return zT;case 35664:return PT;case 35665:return IT;case 35666:return BT;case 35674:return FT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return VT;case 35667:case 35671:return kT;case 35668:case 35672:return XT;case 35669:case 35673:return WT;case 5125:return qT;case 36294:return YT;case 36295:return ZT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return $T}}function eb(o,e){o.uniform1fv(this.addr,e)}function nb(o,e){const i=Lr(e,this.size,2);o.uniform2fv(this.addr,i)}function ib(o,e){const i=Lr(e,this.size,3);o.uniform3fv(this.addr,i)}function ab(o,e){const i=Lr(e,this.size,4);o.uniform4fv(this.addr,i)}function sb(o,e){const i=Lr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function rb(o,e){const i=Lr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ob(o,e){const i=Lr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function lb(o,e){o.uniform1iv(this.addr,e)}function cb(o,e){o.uniform2iv(this.addr,e)}function ub(o,e){o.uniform3iv(this.addr,e)}function fb(o,e){o.uniform4iv(this.addr,e)}function hb(o,e){o.uniform1uiv(this.addr,e)}function db(o,e){o.uniform2uiv(this.addr,e)}function pb(o,e){o.uniform3uiv(this.addr,e)}function mb(o,e){o.uniform4uiv(this.addr,e)}function gb(o,e,i){const s=this.cache,l=e.length,c=Oc(i,l);hn(s,c)||(o.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||kv,c[h])}function _b(o,e,i){const s=this.cache,l=e.length,c=Oc(i,l);hn(s,c)||(o.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Wv,c[h])}function vb(o,e,i){const s=this.cache,l=e.length,c=Oc(i,l);hn(s,c)||(o.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||qv,c[h])}function Sb(o,e,i){const s=this.cache,l=e.length,c=Oc(i,l);hn(s,c)||(o.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Xv,c[h])}function yb(o){switch(o){case 5126:return eb;case 35664:return nb;case 35665:return ib;case 35666:return ab;case 35674:return sb;case 35675:return rb;case 35676:return ob;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return ub;case 35669:case 35673:return fb;case 5125:return hb;case 36294:return db;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return Sb}}class xb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=tb(i.type)}}class Mb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yb(i.type)}}class Eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function $_(o,e){o.seq.push(e),o.map[e.id]=e}function Tb(o,e,i){const s=o.name,l=s.length;for(Eh.lastIndex=0;;){const c=Eh.exec(s),h=Eh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){$_(i,p===void 0?new xb(d,o,e):new Mb(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new Eb(d),$_(i,g)),i=g}}}class bc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);Tb(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function tv(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const bb=37297;let Ab=0;function Rb(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const ev=new ce;function Cb(o){we._getMatrix(ev,we.workingColorSpace,o);const e=`mat3( ${ev.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Ac:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function nv(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Rb(o.getShaderSource(e),d)}else return c}function wb(o,e){const i=Cb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Db(o,e){let i;switch(e){case Oy:i="Linear";break;case zy:i="Reinhard";break;case Py:i="Cineon";break;case Iy:i="ACESFilmic";break;case Fy:i="AgX";break;case Hy:i="Neutral";break;case By:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new et;function Ub(){we.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),e=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function Nb(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Ob(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Uo(o){return o!==""}function iv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function av(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(o){return o.replace(zb,Ib)}const Pb=new Map;function Ib(o,e){let i=ue[e];if(i===void 0){const s=Pb.get(e);if(s!==void 0)i=ue[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return hd(i)}const Bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sv(o){return o.replace(Bb,Fb)}function Fb(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function rv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===gv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===dy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function Gb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ar:case Rr:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vb(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Rr&&(e="ENVMAP_MODE_REFRACTION"),e}function kb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case _v:e="ENVMAP_BLENDING_MULTIPLY";break;case Ly:e="ENVMAP_BLENDING_MIX";break;case Ny:e="ENVMAP_BLENDING_ADD";break}return e}function Xb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Wb(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Hb(i),p=Gb(i),y=Vb(i),g=kb(i),S=Xb(i),x=Lb(i),E=Nb(c),R=l.createProgram();let M,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Uo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Uo).join(`
`),_.length>0&&(_+=`
`)):(M=[rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),_=[rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+y:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ue.tonemapping_pars_fragment:"",i.toneMapping!==Ga?Db("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,wb("linearToOutputTexel",i.outputColorSpace),Ub(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),h=hd(h),h=iv(h,i),h=av(h,i),d=hd(d),d=iv(d,i),d=av(d,i),h=sv(h),d=sv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===S_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===S_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=L+M+h,C=L+_+d,H=tv(l,l.VERTEX_SHADER,U),F=tv(l,l.FRAGMENT_SHADER,C);l.attachShader(R,H),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(I){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(R)||"",lt=l.getShaderInfoLog(H)||"",ht=l.getShaderInfoLog(F)||"",mt=ot.trim(),P=lt.trim(),j=ht.trim();let Z=!0,yt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,H,F);else{const Tt=nv(l,H,"vertex"),O=nv(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+mt+`
`+Tt+`
`+O)}else mt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",mt):(P===""||j==="")&&(yt=!1);yt&&(I.diagnostics={runnable:Z,programLog:mt,vertexShader:{log:P,prefix:M},fragmentShader:{log:j,prefix:_}})}l.deleteShader(H),l.deleteShader(F),k=new bc(l,R),D=Ob(l,R)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,bb)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Ab++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=F,this}let qb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Zb(e),i.set(e,s)),s}}class Zb{constructor(e){this.id=qb++,this.code=e,this.usedTimes=0}}function jb(o,e,i,s,l,c,h){const d=new Lv,m=new Yb,p=new Set,y=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,w,I,ot,lt){const ht=ot.fog,mt=lt.geometry,P=D.isMeshStandardMaterial?ot.environment:null,j=(D.isMeshStandardMaterial?i:e).get(D.envMap||P),Z=j&&j.mapping===Uc?j.image.height:null,yt=E[D.type];D.precision!==null&&(x=l.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const Tt=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,O=Tt!==void 0?Tt.length:0;let it=0;mt.morphAttributes.position!==void 0&&(it=1),mt.morphAttributes.normal!==void 0&&(it=2),mt.morphAttributes.color!==void 0&&(it=3);let Et,Rt,K,vt;if(yt){const Te=Di[yt];Et=Te.vertexShader,Rt=Te.fragmentShader}else Et=D.vertexShader,Rt=D.fragmentShader,m.update(D),K=m.getVertexShaderID(D),vt=m.getFragmentShaderID(D);const _t=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),zt=lt.isInstancedMesh===!0,ee=lt.isBatchedMesh===!0,ke=!!D.map,he=!!D.matcap,G=!!j,Ee=!!D.aoMap,Jt=!!D.lightMap,ye=!!D.bumpMap,jt=!!D.normalMap,He=!!D.displacementMap,Bt=!!D.emissiveMap,se=!!D.metalnessMap,je=!!D.roughnessMap,Ze=D.anisotropy>0,N=D.clearcoat>0,T=D.dispersion>0,tt=D.iridescence>0,ft=D.sheen>0,xt=D.transmission>0,ct=Ze&&!!D.anisotropyMap,Yt=N&&!!D.clearcoatMap,Ct=N&&!!D.clearcoatNormalMap,Wt=N&&!!D.clearcoatRoughnessMap,qt=tt&&!!D.iridescenceMap,bt=tt&&!!D.iridescenceThicknessMap,wt=ft&&!!D.sheenColorMap,Zt=ft&&!!D.sheenRoughnessMap,Pt=!!D.specularMap,Ut=!!D.specularColorMap,re=!!D.specularIntensityMap,X=xt&&!!D.transmissionMap,At=xt&&!!D.thicknessMap,Dt=!!D.gradientMap,It=!!D.alphaMap,Mt=D.alphaTest>0,gt=!!D.alphaHash,Ft=!!D.extensions;let ie=Ga;D.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ne={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:Et,fragmentShader:Rt,defines:D.defines,customVertexShaderID:K,customFragmentShaderID:vt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:ee,batchingColor:ee&&lt._colorsTexture!==null,instancing:zt,instancingColor:zt&&lt.instanceColor!==null,instancingMorph:zt&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:_t===null?o.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Cr,alphaToCoverage:!!D.alphaToCoverage,map:ke,matcap:he,envMap:G,envMapMode:G&&j.mapping,envMapCubeUVHeight:Z,aoMap:Ee,lightMap:Jt,bumpMap:ye,normalMap:jt,displacementMap:S&&He,emissiveMap:Bt,normalMapObjectSpace:jt&&D.normalMapType===Xy,normalMapTangentSpace:jt&&D.normalMapType===Rv,metalnessMap:se,roughnessMap:je,anisotropy:Ze,anisotropyMap:ct,clearcoat:N,clearcoatMap:Yt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:bt,sheen:ft,sheenColorMap:wt,sheenRoughnessMap:Zt,specularMap:Pt,specularColorMap:Ut,specularIntensityMap:re,transmission:xt,transmissionMap:X,thicknessMap:At,gradientMap:Dt,opaque:D.transparent===!1&&D.blending===Mr&&D.alphaToCoverage===!1,alphaMap:It,alphaTest:Mt,alphaHash:gt,combine:D.combine,mapUv:ke&&R(D.map.channel),aoMapUv:Ee&&R(D.aoMap.channel),lightMapUv:Jt&&R(D.lightMap.channel),bumpMapUv:ye&&R(D.bumpMap.channel),normalMapUv:jt&&R(D.normalMap.channel),displacementMapUv:He&&R(D.displacementMap.channel),emissiveMapUv:Bt&&R(D.emissiveMap.channel),metalnessMapUv:se&&R(D.metalnessMap.channel),roughnessMapUv:je&&R(D.roughnessMap.channel),anisotropyMapUv:ct&&R(D.anisotropyMap.channel),clearcoatMapUv:Yt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(D.sheenRoughnessMap.channel),specularMapUv:Pt&&R(D.specularMap.channel),specularColorMapUv:Ut&&R(D.specularColorMap.channel),specularIntensityMapUv:re&&R(D.specularIntensityMap.channel),transmissionMapUv:X&&R(D.transmissionMap.channel),thicknessMapUv:At&&R(D.thicknessMap.channel),alphaMapUv:It&&R(D.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(jt||Ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!mt.attributes.uv&&(ke||It),fog:!!ht,useFog:D.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ht,skinning:lt.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:ke&&D.map.isVideoTexture===!0&&we.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:Bt&&D.emissiveMap.isVideoTexture===!0&&we.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===aa,flipSided:D.side===Bn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||ee)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const I in D.defines)w.push(I),w.push(D.defines[I]);return D.isRawShaderMaterial===!1&&(L(w,D),U(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function L(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function U(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const w=E[D.type];let I;if(w){const ot=Di[w];I=Sx.clone(ot.uniforms)}else I=D.uniforms;return I}function H(D,w){let I;for(let ot=0,lt=y.length;ot<lt;ot++){const ht=y[ot];if(ht.cacheKey===w){I=ht,++I.usedTimes;break}}return I===void 0&&(I=new Wb(o,w,D,c),y.push(I)),I}function F(D){if(--D.usedTimes===0){const w=y.indexOf(D);y[w]=y[y.length-1],y.pop(),D.destroy()}}function z(D){m.remove(D)}function k(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:C,acquireProgram:H,releaseProgram:F,releaseShaderCache:z,programs:y,dispose:k}}function Kb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function Qb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ov(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function lv(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g,S,x,E,R,M){let _=o[e];return _===void 0?(_={id:g.id,object:g,geometry:S,material:x,groupOrder:E,renderOrder:g.renderOrder,z:R,group:M},o[e]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=x,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=R,_.group=M),e++,_}function d(g,S,x,E,R,M){const _=h(g,S,x,E,R,M);x.transmission>0?s.push(_):x.transparent===!0?l.push(_):i.push(_)}function m(g,S,x,E,R,M){const _=h(g,S,x,E,R,M);x.transmission>0?s.unshift(_):x.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||Qb),s.length>1&&s.sort(S||ov),l.length>1&&l.sort(S||ov)}function y(){for(let g=e,S=o.length;g<S;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:y,sort:p}}function Jb(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new lv,o.set(s,[h])):l>=c.length?(h=new lv,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function $b(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new et,color:new Me};break;case"SpotLight":i={position:new et,direction:new et,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new et,halfWidth:new et,halfHeight:new et};break}return o[e.id]=i,i}}}function tA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let eA=0;function nA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function iA(o){const e=new $b,i=tA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new et);const l=new et,c=new cn,h=new cn;function d(p){let y=0,g=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let x=0,E=0,R=0,M=0,_=0,L=0,U=0,C=0,H=0,F=0,z=0;p.sort(nA);for(let D=0,w=p.length;D<w;D++){const I=p[D],ot=I.color,lt=I.intensity,ht=I.distance,mt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)y+=ot.r*lt,g+=ot.g*lt,S+=ot.b*lt;else if(I.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(I.sh.coefficients[P],lt);z++}else if(I.isDirectionalLight){const P=e.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,Z=i.get(I);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,s.directionalShadow[x]=Z,s.directionalShadowMap[x]=mt,s.directionalShadowMatrix[x]=I.shadow.matrix,L++}s.directional[x]=P,x++}else if(I.isSpotLight){const P=e.get(I);P.position.setFromMatrixPosition(I.matrixWorld),P.color.copy(ot).multiplyScalar(lt),P.distance=ht,P.coneCos=Math.cos(I.angle),P.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),P.decay=I.decay,s.spot[R]=P;const j=I.shadow;if(I.map&&(s.spotLightMap[H]=I.map,H++,j.updateMatrices(I),I.castShadow&&F++),s.spotLightMatrix[R]=j.matrix,I.castShadow){const Z=i.get(I);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,s.spotShadow[R]=Z,s.spotShadowMap[R]=mt,C++}R++}else if(I.isRectAreaLight){const P=e.get(I);P.color.copy(ot).multiplyScalar(lt),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=P,M++}else if(I.isPointLight){const P=e.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),P.distance=I.distance,P.decay=I.decay,I.castShadow){const j=I.shadow,Z=i.get(I);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,s.pointShadow[E]=Z,s.pointShadowMap[E]=mt,s.pointShadowMatrix[E]=I.shadow.matrix,U++}s.point[E]=P,E++}else if(I.isHemisphereLight){const P=e.get(I);P.skyColor.copy(I.color).multiplyScalar(lt),P.groundColor.copy(I.groundColor).multiplyScalar(lt),s.hemi[_]=P,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=g,s.ambient[2]=S;const k=s.hash;(k.directionalLength!==x||k.pointLength!==E||k.spotLength!==R||k.rectAreaLength!==M||k.hemiLength!==_||k.numDirectionalShadows!==L||k.numPointShadows!==U||k.numSpotShadows!==C||k.numSpotMaps!==H||k.numLightProbes!==z)&&(s.directional.length=x,s.spot.length=R,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=C+H-F,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,k.directionalLength=x,k.pointLength=E,k.spotLength=R,k.rectAreaLength=M,k.hemiLength=_,k.numDirectionalShadows=L,k.numPointShadows=U,k.numSpotShadows=C,k.numSpotMaps=H,k.numLightProbes=z,s.version=eA++)}function m(p,y){let g=0,S=0,x=0,E=0,R=0;const M=y.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const U=p[_];if(U.isDirectionalLight){const C=s.directional[g];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),g++}else if(U.isSpotLight){const C=s.spot[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),x++}else if(U.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),h.identity(),c.copy(U.matrixWorld),c.premultiply(M),h.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const C=s.point[S];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),S++}else if(U.isHemisphereLight){const C=s.hemi[R];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:s}}function cv(o){const e=new iA(o),i=[],s=[];function l(y){p.camera=y,i.length=0,s.length=0}function c(y){i.push(y)}function h(y){s.push(y)}function d(){e.setup(i)}function m(y){e.setupView(i,y)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function aA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new cv(o),e.set(l,[d])):c>=h.length?(d=new cv(o),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const sA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rA=`uniform sampler2D shadow_pass;
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
}`;function oA(o,e,i){let s=new Fv;const l=new Ae,c=new Ae,h=new en,d=new Lx({depthPacking:ky}),m=new Nx,p={},y=i.maxTextureSize,g={[Va]:Bn,[Bn]:Va,[aa]:aa},S=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:sA,fragmentShader:rA}),x=S.clone();x.defines.HORIZONTAL_PASS=1;const E=new Ei;E.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new fi(E,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gv;let _=this.type;this.render=function(F,z,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(Ha),ot.buffers.depth.getReversed()?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const lt=_!==ia&&this.type===ia,ht=_===ia&&this.type!==ia;for(let mt=0,P=F.length;mt<P;mt++){const j=F[mt],Z=j.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const yt=Z.getFrameExtents();if(l.multiply(yt),c.copy(Z.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/yt.x),l.x=c.x*yt.x,Z.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/yt.y),l.y=c.y*yt.y,Z.mapSize.y=c.y)),Z.map===null||lt===!0||ht===!0){const O=this.type!==ia?{minFilter:Mi,magFilter:Mi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ts(l.x,l.y,O),Z.map.texture.name=j.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const Tt=Z.getViewportCount();for(let O=0;O<Tt;O++){const it=Z.getViewport(O);h.set(c.x*it.x,c.y*it.y,c.x*it.z,c.y*it.w),ot.viewport(h),Z.updateMatrices(j,O),s=Z.getFrustum(),C(z,k,Z.camera,j,this.type)}Z.isPointLightShadow!==!0&&this.type===ia&&L(Z,k),Z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(D,w,I)};function L(F,z){const k=e.update(R);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ts(l.x,l.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,k,S,R,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,k,x,R,null)}function U(F,z,k,D){let w=null;const I=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(I!==void 0)w=I;else if(w=k.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ot=w.uuid,lt=z.uuid;let ht=p[ot];ht===void 0&&(ht={},p[ot]=ht);let mt=ht[lt];mt===void 0&&(mt=w.clone(),ht[lt]=mt,z.addEventListener("dispose",H)),w=mt}if(w.visible=z.visible,w.wireframe=z.wireframe,D===ia?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:g[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ot=o.properties.get(w);ot.light=k}return w}function C(F,z,k,D,w){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===ia)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const lt=e.update(F),ht=F.material;if(Array.isArray(ht)){const mt=lt.groups;for(let P=0,j=mt.length;P<j;P++){const Z=mt[P],yt=ht[Z.materialIndex];if(yt&&yt.visible){const Tt=U(F,yt,D,w);F.onBeforeShadow(o,F,z,k,lt,Tt,Z),o.renderBufferDirect(k,null,lt,Tt,F,Z),F.onAfterShadow(o,F,z,k,lt,Tt,Z)}}}else if(ht.visible){const mt=U(F,ht,D,w);F.onBeforeShadow(o,F,z,k,lt,mt,null),o.renderBufferDirect(k,null,lt,mt,F,null),F.onAfterShadow(o,F,z,k,lt,mt,null)}}const ot=F.children;for(let lt=0,ht=ot.length;lt<ht;lt++)C(ot[lt],z,k,D,w)}function H(F){F.target.removeEventListener("dispose",H);for(const k in p){const D=p[k],w=F.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const lA={[Rh]:Ch,[wh]:Lh,[Dh]:Nh,[br]:Uh,[Ch]:Rh,[Lh]:wh,[Nh]:Dh,[Uh]:br};function cA(o,e){function i(){let X=!1;const At=new en;let Dt=null;const It=new en(0,0,0,0);return{setMask:function(Mt){Dt!==Mt&&!X&&(o.colorMask(Mt,Mt,Mt,Mt),Dt=Mt)},setLocked:function(Mt){X=Mt},setClear:function(Mt,gt,Ft,ie,Ne){Ne===!0&&(Mt*=ie,gt*=ie,Ft*=ie),At.set(Mt,gt,Ft,ie),It.equals(At)===!1&&(o.clearColor(Mt,gt,Ft,ie),It.copy(At))},reset:function(){X=!1,Dt=null,It.set(-1,0,0,0)}}}function s(){let X=!1,At=!1,Dt=null,It=null,Mt=null;return{setReversed:function(gt){if(At!==gt){const Ft=e.get("EXT_clip_control");gt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),At=gt;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return At},setTest:function(gt){gt?_t(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(gt){Dt!==gt&&!X&&(o.depthMask(gt),Dt=gt)},setFunc:function(gt){if(At&&(gt=lA[gt]),It!==gt){switch(gt){case Rh:o.depthFunc(o.NEVER);break;case Ch:o.depthFunc(o.ALWAYS);break;case wh:o.depthFunc(o.LESS);break;case br:o.depthFunc(o.LEQUAL);break;case Dh:o.depthFunc(o.EQUAL);break;case Uh:o.depthFunc(o.GEQUAL);break;case Lh:o.depthFunc(o.GREATER);break;case Nh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=gt}},setLocked:function(gt){X=gt},setClear:function(gt){Mt!==gt&&(At&&(gt=1-gt),o.clearDepth(gt),Mt=gt)},reset:function(){X=!1,Dt=null,It=null,Mt=null,At=!1}}}function l(){let X=!1,At=null,Dt=null,It=null,Mt=null,gt=null,Ft=null,ie=null,Ne=null;return{setTest:function(Te){X||(Te?_t(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Te){At!==Te&&!X&&(o.stencilMask(Te),At=Te)},setFunc:function(Te,Rn,ti){(Dt!==Te||It!==Rn||Mt!==ti)&&(o.stencilFunc(Te,Rn,ti),Dt=Te,It=Rn,Mt=ti)},setOp:function(Te,Rn,ti){(gt!==Te||Ft!==Rn||ie!==ti)&&(o.stencilOp(Te,Rn,ti),gt=Te,Ft=Rn,ie=ti)},setLocked:function(Te){X=Te},setClear:function(Te){Ne!==Te&&(o.clearStencil(Te),Ne=Te)},reset:function(){X=!1,At=null,Dt=null,It=null,Mt=null,gt=null,Ft=null,ie=null,Ne=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let y={},g={},S=new WeakMap,x=[],E=null,R=!1,M=null,_=null,L=null,U=null,C=null,H=null,F=null,z=new Me(0,0,0),k=0,D=!1,w=null,I=null,ot=null,lt=null,ht=null;const mt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=j>=2);let yt=null,Tt={};const O=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),Et=new en().fromArray(O),Rt=new en().fromArray(it);function K(X,At,Dt,It){const Mt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(X,gt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Dt;Ft++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(At+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return gt}const vt={};vt[o.TEXTURE_2D]=K(o.TEXTURE_2D,o.TEXTURE_2D,1),vt[o.TEXTURE_CUBE_MAP]=K(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[o.TEXTURE_2D_ARRAY]=K(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),vt[o.TEXTURE_3D]=K(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),_t(o.DEPTH_TEST),h.setFunc(br),ye(!1),jt(d_),_t(o.CULL_FACE),Ee(Ha);function _t(X){y[X]!==!0&&(o.enable(X),y[X]=!0)}function Ht(X){y[X]!==!1&&(o.disable(X),y[X]=!1)}function zt(X,At){return g[X]!==At?(o.bindFramebuffer(X,At),g[X]=At,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=At),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=At),!0):!1}function ee(X,At){let Dt=x,It=!1;if(X){Dt=S.get(At),Dt===void 0&&(Dt=[],S.set(At,Dt));const Mt=X.textures;if(Dt.length!==Mt.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Ft=Mt.length;gt<Ft;gt++)Dt[gt]=o.COLOR_ATTACHMENT0+gt;Dt.length=Mt.length,It=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,It=!0);It&&o.drawBuffers(Dt)}function ke(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const he={[Ss]:o.FUNC_ADD,[my]:o.FUNC_SUBTRACT,[gy]:o.FUNC_REVERSE_SUBTRACT};he[_y]=o.MIN,he[vy]=o.MAX;const G={[Sy]:o.ZERO,[yy]:o.ONE,[xy]:o.SRC_COLOR,[bh]:o.SRC_ALPHA,[Ry]:o.SRC_ALPHA_SATURATE,[by]:o.DST_COLOR,[Ey]:o.DST_ALPHA,[My]:o.ONE_MINUS_SRC_COLOR,[Ah]:o.ONE_MINUS_SRC_ALPHA,[Ay]:o.ONE_MINUS_DST_COLOR,[Ty]:o.ONE_MINUS_DST_ALPHA,[Cy]:o.CONSTANT_COLOR,[wy]:o.ONE_MINUS_CONSTANT_COLOR,[Dy]:o.CONSTANT_ALPHA,[Uy]:o.ONE_MINUS_CONSTANT_ALPHA};function Ee(X,At,Dt,It,Mt,gt,Ft,ie,Ne,Te){if(X===Ha){R===!0&&(Ht(o.BLEND),R=!1);return}if(R===!1&&(_t(o.BLEND),R=!0),X!==py){if(X!==M||Te!==D){if((_!==Ss||C!==Ss)&&(o.blendEquation(o.FUNC_ADD),_=Ss,C=Ss),Te)switch(X){case Mr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case p_:o.blendFunc(o.ONE,o.ONE);break;case m_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case g_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Mr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case p_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case m_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,U=null,H=null,F=null,z.set(0,0,0),k=0,M=X,D=Te}return}Mt=Mt||At,gt=gt||Dt,Ft=Ft||It,(At!==_||Mt!==C)&&(o.blendEquationSeparate(he[At],he[Mt]),_=At,C=Mt),(Dt!==L||It!==U||gt!==H||Ft!==F)&&(o.blendFuncSeparate(G[Dt],G[It],G[gt],G[Ft]),L=Dt,U=It,H=gt,F=Ft),(ie.equals(z)===!1||Ne!==k)&&(o.blendColor(ie.r,ie.g,ie.b,Ne),z.copy(ie),k=Ne),M=X,D=!1}function Jt(X,At){X.side===aa?Ht(o.CULL_FACE):_t(o.CULL_FACE);let Dt=X.side===Bn;At&&(Dt=!Dt),ye(Dt),X.blending===Mr&&X.transparent===!1?Ee(Ha):Ee(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const It=X.stencilWrite;d.setTest(It),It&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Bt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_t(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function ye(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function jt(X){X!==fy?(_t(o.CULL_FACE),X!==I&&(X===d_?o.cullFace(o.BACK):X===hy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),I=X}function He(X){X!==ot&&(P&&o.lineWidth(X),ot=X)}function Bt(X,At,Dt){X?(_t(o.POLYGON_OFFSET_FILL),(lt!==At||ht!==Dt)&&(o.polygonOffset(At,Dt),lt=At,ht=Dt)):Ht(o.POLYGON_OFFSET_FILL)}function se(X){X?_t(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function je(X){X===void 0&&(X=o.TEXTURE0+mt-1),yt!==X&&(o.activeTexture(X),yt=X)}function Ze(X,At,Dt){Dt===void 0&&(yt===null?Dt=o.TEXTURE0+mt-1:Dt=yt);let It=Tt[Dt];It===void 0&&(It={type:void 0,texture:void 0},Tt[Dt]=It),(It.type!==X||It.texture!==At)&&(yt!==Dt&&(o.activeTexture(Dt),yt=Dt),o.bindTexture(X,At||vt[X]),It.type=X,It.texture=At)}function N(){const X=Tt[yt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(X){Et.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Et.copy(X))}function Zt(X){Rt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Rt.copy(X))}function Pt(X,At){let Dt=p.get(At);Dt===void 0&&(Dt=new WeakMap,p.set(At,Dt));let It=Dt.get(X);It===void 0&&(It=o.getUniformBlockIndex(At,X.name),Dt.set(X,It))}function Ut(X,At){const It=p.get(At).get(X);m.get(At)!==It&&(o.uniformBlockBinding(At,It,X.__bindingPointIndex),m.set(At,It))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},yt=null,Tt={},g={},S=new WeakMap,x=[],E=null,R=!1,M=null,_=null,L=null,U=null,C=null,H=null,F=null,z=new Me(0,0,0),k=0,D=!1,w=null,I=null,ot=null,lt=null,ht=null,Et.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:_t,disable:Ht,bindFramebuffer:zt,drawBuffers:ee,useProgram:ke,setBlending:Ee,setMaterial:Jt,setFlipSided:ye,setCullFace:jt,setLineWidth:He,setPolygonOffset:Bt,setScissorTest:se,activeTexture:je,bindTexture:Ze,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:qt,texImage3D:bt,updateUBOMapping:Pt,uniformBlockBinding:Ut,texStorage2D:Ct,texStorage3D:Wt,texSubImage2D:ft,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Yt,scissor:wt,viewport:Zt,reset:re}}function uA(o,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,y=new WeakMap;let g;const S=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return x?new OffscreenCanvas(N,T):Cc("canvas")}function R(N,T,tt){let ft=1;const xt=Ze(N);if((xt.width>tt||xt.height>tt)&&(ft=tt/Math.max(xt.width,xt.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ct=Math.floor(ft*xt.width),Yt=Math.floor(ft*xt.height);g===void 0&&(g=E(ct,Yt));const Ct=T?E(ct,Yt):g;return Ct.width=ct,Ct.height=Yt,Ct.getContext("2d").drawImage(N,0,0,ct,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ct+"x"+Yt+")."),Ct}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),N;return N}function M(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(N,T,tt,ft,xt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct=T;if(T===o.RED&&(tt===o.FLOAT&&(ct=o.R32F),tt===o.HALF_FLOAT&&(ct=o.R16F),tt===o.UNSIGNED_BYTE&&(ct=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.R8UI),tt===o.UNSIGNED_SHORT&&(ct=o.R16UI),tt===o.UNSIGNED_INT&&(ct=o.R32UI),tt===o.BYTE&&(ct=o.R8I),tt===o.SHORT&&(ct=o.R16I),tt===o.INT&&(ct=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(ct=o.RG32F),tt===o.HALF_FLOAT&&(ct=o.RG16F),tt===o.UNSIGNED_BYTE&&(ct=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),tt===o.UNSIGNED_INT&&(ct=o.RG32UI),tt===o.BYTE&&(ct=o.RG8I),tt===o.SHORT&&(ct=o.RG16I),tt===o.INT&&(ct=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),tt===o.UNSIGNED_INT&&(ct=o.RGB32UI),tt===o.BYTE&&(ct=o.RGB8I),tt===o.SHORT&&(ct=o.RGB16I),tt===o.INT&&(ct=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),tt===o.BYTE&&(ct=o.RGBA8I),tt===o.SHORT&&(ct=o.RGBA16I),tt===o.INT&&(ct=o.RGBA32I)),T===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),T===o.RGBA){const Yt=xt?Ac:we.getTransfer(ft);tt===o.FLOAT&&(ct=o.RGBA32F),tt===o.HALF_FLOAT&&(ct=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ct=Yt===Fe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function C(N,T){let tt;return N?T===null||T===Es||T===No?tt=o.DEPTH24_STENCIL8:T===sa?tt=o.DEPTH32F_STENCIL8:T===Lo&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Es||T===No?tt=o.DEPTH_COMPONENT24:T===sa?tt=o.DEPTH_COMPONENT32F:T===Lo&&(tt=o.DEPTH_COMPONENT16),tt}function H(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Mi&&N.minFilter!==Ui?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function F(N){const T=N.target;T.removeEventListener("dispose",F),k(T),T.isVideoTexture&&y.delete(T)}function z(N){const T=N.target;T.removeEventListener("dispose",z),w(T)}function k(N){const T=s.get(N);if(T.__webglInit===void 0)return;const tt=N.source,ft=S.get(tt);if(ft){const xt=ft[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(N),Object.keys(ft).length===0&&S.delete(tt)}s.remove(N)}function D(N){const T=s.get(N);o.deleteTexture(T.__webglTexture);const tt=N.source,ft=S.get(tt);delete ft[T.__cacheKey],h.memory.textures--}function w(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let xt=0;xt<T.__webglFramebuffer[ft].length;xt++)o.deleteFramebuffer(T.__webglFramebuffer[ft][xt]);else o.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)o.deleteFramebuffer(T.__webglFramebuffer[ft]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=N.textures;for(let ft=0,xt=tt.length;ft<xt;ft++){const ct=s.get(tt[ft]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(tt[ft])}s.remove(N)}let I=0;function ot(){I=0}function lt(){const N=I;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),I+=1,N}function ht(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function mt(N,T){const tt=s.get(N);if(N.isVideoTexture&&se(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(tt,N,T);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function P(N,T){const tt=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){vt(tt,N,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function j(N,T){const tt=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){vt(tt,N,T);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function Z(N,T){const tt=s.get(N);if(N.version>0&&tt.__version!==N.version){_t(tt,N,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const yt={[Ph]:o.REPEAT,[xs]:o.CLAMP_TO_EDGE,[Ih]:o.MIRRORED_REPEAT},Tt={[Mi]:o.NEAREST,[Gy]:o.NEAREST_MIPMAP_NEAREST,[Ql]:o.NEAREST_MIPMAP_LINEAR,[Ui]:o.LINEAR,[Yf]:o.LINEAR_MIPMAP_NEAREST,[Ms]:o.LINEAR_MIPMAP_LINEAR},O={[Wy]:o.NEVER,[Qy]:o.ALWAYS,[qy]:o.LESS,[Cv]:o.LEQUAL,[Yy]:o.EQUAL,[Ky]:o.GEQUAL,[Zy]:o.GREATER,[jy]:o.NOTEQUAL};function it(N,T){if(T.type===sa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ui||T.magFilter===Yf||T.magFilter===Ql||T.magFilter===Ms||T.minFilter===Ui||T.minFilter===Yf||T.minFilter===Ql||T.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,yt[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,yt[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,yt[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,Tt[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,Tt[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Mi||T.minFilter!==Ql&&T.minFilter!==Ms||T.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Et(N,T){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",F));const ft=T.source;let xt=S.get(ft);xt===void 0&&(xt={},S.set(ft,xt));const ct=ht(T);if(ct!==N.__cacheKey){xt[ct]===void 0&&(xt[ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),xt[ct].usedTimes++;const Yt=xt[N.__cacheKey];Yt!==void 0&&(xt[N.__cacheKey].usedTimes--,Yt.usedTimes===0&&D(T)),N.__cacheKey=ct,N.__webglTexture=xt[ct].texture}return tt}function Rt(N,T,tt){return Math.floor(Math.floor(N/tt)/T)}function K(N,T,tt,ft){const ct=N.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,tt,ft,T.data);else{ct.sort((bt,wt)=>bt.start-wt.start);let Yt=0;for(let bt=1;bt<ct.length;bt++){const wt=ct[Yt],Zt=ct[bt],Pt=wt.start+wt.count,Ut=Rt(Zt.start,T.width,4),re=Rt(wt.start,T.width,4);Zt.start<=Pt+1&&Ut===re&&Rt(Zt.start+Zt.count-1,T.width,4)===Ut?wt.count=Math.max(wt.count,Zt.start+Zt.count-wt.start):(++Yt,ct[Yt]=Zt)}ct.length=Yt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let bt=0,wt=ct.length;bt<wt;bt++){const Zt=ct[bt],Pt=Math.floor(Zt.start/4),Ut=Math.ceil(Zt.count/4),re=Pt%T.width,X=Math.floor(Pt/T.width),At=Ut,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,re,X,At,Dt,tt,ft,T.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function vt(N,T,tt){let ft=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=o.TEXTURE_3D);const xt=Et(N,T),ct=T.source;i.bindTexture(ft,N.__webglTexture,o.TEXTURE0+tt);const Yt=s.get(ct);if(ct.version!==Yt.__version||xt===!0){i.activeTexture(o.TEXTURE0+tt);const Ct=we.getPrimaries(we.workingColorSpace),Wt=T.colorSpace===Fa?null:we.getPrimaries(T.colorSpace),qt=T.colorSpace===Fa||Ct===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let bt=R(T.image,!1,l.maxTextureSize);bt=je(T,bt);const wt=c.convert(T.format,T.colorSpace),Zt=c.convert(T.type);let Pt=U(T.internalFormat,wt,Zt,T.colorSpace,T.isVideoTexture);it(ft,T);let Ut;const re=T.mipmaps,X=T.isVideoTexture!==!0,At=Yt.__version===void 0||xt===!0,Dt=ct.dataReady,It=H(T,bt);if(T.isDepthTexture)Pt=C(T.format===zo,T.type),At&&(X?i.texStorage2D(o.TEXTURE_2D,1,Pt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,bt.width,bt.height,0,wt,Zt,null));else if(T.isDataTexture)if(re.length>0){X&&At&&i.texStorage2D(o.TEXTURE_2D,It,Pt,re[0].width,re[0].height);for(let Mt=0,gt=re.length;Mt<gt;Mt++)Ut=re[Mt],X?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Zt,Ut.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,wt,Zt,Ut.data);T.generateMipmaps=!1}else X?(At&&i.texStorage2D(o.TEXTURE_2D,It,Pt,bt.width,bt.height),Dt&&K(T,bt,wt,Zt)):i.texImage2D(o.TEXTURE_2D,0,Pt,bt.width,bt.height,0,wt,Zt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Pt,re[0].width,re[0].height,bt.depth);for(let Mt=0,gt=re.length;Mt<gt;Mt++)if(Ut=re[Mt],T.format!==xi)if(wt!==null)if(X){if(Dt)if(T.layerUpdates.size>0){const Ft=F_(Ut.width,Ut.height,T.format,T.type);for(const ie of T.layerUpdates){const Ne=Ut.data.subarray(ie*Ft/Ut.data.BYTES_PER_ELEMENT,(ie+1)*Ft/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ie,Ut.width,Ut.height,1,wt,Ne)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,bt.depth,wt,Ut.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,bt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,bt.depth,wt,Zt,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,bt.depth,0,wt,Zt,Ut.data)}else{X&&At&&i.texStorage2D(o.TEXTURE_2D,It,Pt,re[0].width,re[0].height);for(let Mt=0,gt=re.length;Mt<gt;Mt++)Ut=re[Mt],T.format!==xi?wt!==null?X?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Zt,Ut.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,wt,Zt,Ut.data)}else if(T.isDataArrayTexture)if(X){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Pt,bt.width,bt.height,bt.depth),Dt)if(T.layerUpdates.size>0){const Mt=F_(bt.width,bt.height,T.format,T.type);for(const gt of T.layerUpdates){const Ft=bt.data.subarray(gt*Mt/bt.data.BYTES_PER_ELEMENT,(gt+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,wt,Zt,Ft)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,wt,Zt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,bt.width,bt.height,bt.depth,0,wt,Zt,bt.data);else if(T.isData3DTexture)X?(At&&i.texStorage3D(o.TEXTURE_3D,It,Pt,bt.width,bt.height,bt.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,wt,Zt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,bt.width,bt.height,bt.depth,0,wt,Zt,bt.data);else if(T.isFramebufferTexture){if(At)if(X)i.texStorage2D(o.TEXTURE_2D,It,Pt,bt.width,bt.height);else{let Mt=bt.width,gt=bt.height;for(let Ft=0;Ft<It;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Pt,Mt,gt,0,wt,Zt,null),Mt>>=1,gt>>=1}}else if(re.length>0){if(X&&At){const Mt=Ze(re[0]);i.texStorage2D(o.TEXTURE_2D,It,Pt,Mt.width,Mt.height)}for(let Mt=0,gt=re.length;Mt<gt;Mt++)Ut=re[Mt],X?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,wt,Zt,Ut):i.texImage2D(o.TEXTURE_2D,Mt,Pt,wt,Zt,Ut);T.generateMipmaps=!1}else if(X){if(At){const Mt=Ze(bt);i.texStorage2D(o.TEXTURE_2D,It,Pt,Mt.width,Mt.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,Zt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,wt,Zt,bt);M(T)&&_(ft),Yt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function _t(N,T,tt){if(T.image.length!==6)return;const ft=Et(N,T),xt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+tt);const ct=s.get(xt);if(xt.version!==ct.__version||ft===!0){i.activeTexture(o.TEXTURE0+tt);const Yt=we.getPrimaries(we.workingColorSpace),Ct=T.colorSpace===Fa?null:we.getPrimaries(T.colorSpace),Wt=T.colorSpace===Fa||Yt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const qt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,wt=[];for(let gt=0;gt<6;gt++)!qt&&!bt?wt[gt]=R(T.image[gt],!0,l.maxCubemapSize):wt[gt]=bt?T.image[gt].image:T.image[gt],wt[gt]=je(T,wt[gt]);const Zt=wt[0],Pt=c.convert(T.format,T.colorSpace),Ut=c.convert(T.type),re=U(T.internalFormat,Pt,Ut,T.colorSpace),X=T.isVideoTexture!==!0,At=ct.__version===void 0||ft===!0,Dt=xt.dataReady;let It=H(T,Zt);it(o.TEXTURE_CUBE_MAP,T);let Mt;if(qt){X&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,re,Zt.width,Zt.height);for(let gt=0;gt<6;gt++){Mt=wt[gt].mipmaps;for(let Ft=0;Ft<Mt.length;Ft++){const ie=Mt[Ft];T.format!==xi?Pt!==null?X?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ie.width,ie.height,Pt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ie.width,ie.height,Pt,Ut,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,re,ie.width,ie.height,0,Pt,Ut,ie.data)}}}else{if(Mt=T.mipmaps,X&&At){Mt.length>0&&It++;const gt=Ze(wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,It,re,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,wt[gt].width,wt[gt].height,Pt,Ut,wt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,wt[gt].width,wt[gt].height,0,Pt,Ut,wt[gt].data);for(let Ft=0;Ft<Mt.length;Ft++){const Ne=Mt[Ft].image[gt].image;X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Ne.width,Ne.height,Pt,Ut,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,re,Ne.width,Ne.height,0,Pt,Ut,Ne.data)}}else{X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Pt,Ut,wt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Pt,Ut,wt[gt]);for(let Ft=0;Ft<Mt.length;Ft++){const ie=Mt[Ft];X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Pt,Ut,ie.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,re,Pt,Ut,ie.image[gt])}}}M(T)&&_(o.TEXTURE_CUBE_MAP),ct.__version=xt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ht(N,T,tt,ft,xt,ct){const Yt=c.convert(tt.format,tt.colorSpace),Ct=c.convert(tt.type),Wt=U(tt.internalFormat,Yt,Ct,tt.colorSpace),qt=s.get(T),bt=s.get(tt);if(bt.__renderTarget=T,!qt.__hasExternalTextures){const wt=Math.max(1,T.width>>ct),Zt=Math.max(1,T.height>>ct);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ct,Wt,wt,Zt,T.depth,0,Yt,Ct,null):i.texImage2D(xt,ct,Wt,wt,Zt,0,Yt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Bt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,xt,bt.__webglTexture,0,He(T)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,xt,bt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(N,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const ft=T.depthTexture,xt=ft&&ft.isDepthTexture?ft.type:null,ct=C(T.stencilBuffer,xt),Yt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=He(T);Bt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ct,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ct,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ct,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,N)}else{const ft=T.textures;for(let xt=0;xt<ft.length;xt++){const ct=ft[xt],Yt=c.convert(ct.format,ct.colorSpace),Ct=c.convert(ct.type),Wt=U(ct.internalFormat,Yt,Ct,ct.colorSpace),qt=He(T);tt&&Bt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Wt,T.width,T.height):Bt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Wt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ee(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),mt(T.depthTexture,0);const xt=ft.__webglTexture,ct=He(T);if(T.depthTexture.format===Oo)Bt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(T.depthTexture.format===zo)Bt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function ke(N){const T=s.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",xt)};ft.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=ft}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ft=N.texture.mipmaps;ft&&ft.length>0?ee(T.__webglFramebuffer[0],N):ee(T.__webglFramebuffer,N)}else if(tt){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=o.createRenderbuffer(),zt(T.__webglDepthbuffer[ft],N,!1);else{const xt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),zt(T.__webglDepthbuffer,N,!1);else{const xt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function he(N,T,tt){const ft=s.get(N);T!==void 0&&Ht(ft.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&ke(N)}function G(N){const T=N.texture,tt=s.get(N),ft=s.get(T);N.addEventListener("dispose",z);const xt=N.textures,ct=N.isWebGLCubeRenderTarget===!0,Yt=xt.length>1;if(Yt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=T.version,h.memory.textures++),ct){tt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Ct]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)tt.__webglFramebuffer[Ct][Wt]=o.createFramebuffer()}else tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let Ct=0,Wt=xt.length;Ct<Wt;Ct++){const qt=s.get(xt[Ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Bt(N)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Wt=xt[Ct];tt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct]);const qt=c.convert(Wt.format,Wt.colorSpace),bt=c.convert(Wt.type),wt=U(Wt.internalFormat,qt,bt,Wt.colorSpace,N.isXRRenderTarget===!0),Zt=He(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,wt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),it(o.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Ht(tt.__webglFramebuffer[Ct][Wt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Wt);else Ht(tt.__webglFramebuffer[Ct],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Ct=0,Wt=xt.length;Ct<Wt;Ct++){const qt=xt[Ct],bt=s.get(qt);let wt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,bt.__webglTexture),it(wt,qt),Ht(tt.__webglFramebuffer,N,qt,o.COLOR_ATTACHMENT0+Ct,wt,0),M(qt)&&_(wt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ft.__webglTexture),it(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Ht(tt.__webglFramebuffer[Wt],N,T,o.COLOR_ATTACHMENT0,Ct,Wt);else Ht(tt.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,Ct,0);M(T)&&_(Ct),i.unbindTexture()}N.depthBuffer&&ke(N)}function Ee(N){const T=N.textures;for(let tt=0,ft=T.length;tt<ft;tt++){const xt=T[tt];if(M(xt)){const ct=L(N),Yt=s.get(xt).__webglTexture;i.bindTexture(ct,Yt),_(ct),i.unbindTexture()}}}const Jt=[],ye=[];function jt(N){if(N.samples>0){if(Bt(N)===!1){const T=N.textures,tt=N.width,ft=N.height;let xt=o.COLOR_BUFFER_BIT;const ct=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=s.get(N),Ct=T.length>1;if(Ct)for(let qt=0;qt<T.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Wt=N.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let qt=0;qt<T.length;qt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const bt=s.get(T[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,tt,ft,0,0,tt,ft,xt,o.NEAREST),m===!0&&(Jt.length=0,ye.length=0,Jt.push(o.COLOR_ATTACHMENT0+qt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Jt.push(ct),ye.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ye)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let qt=0;qt<T.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const bt=s.get(T[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function He(N){return Math.min(l.maxSamples,N.samples)}function Bt(N){const T=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(N){const T=h.render.frame;y.get(N)!==T&&(y.set(N,T),N.update())}function je(N,T){const tt=N.colorSpace,ft=N.format,xt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Cr&&tt!==Fa&&(we.getTransfer(tt)===Fe?(ft!==xi||xt!==oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Ze(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=ot,this.setTexture2D=mt,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=he,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=Bt}function fA(o,e){function i(s,l=Fa){let c;const h=we.getTransfer(l);if(s===oa)return o.UNSIGNED_BYTE;if(s===gd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===_d)return o.UNSIGNED_SHORT_5_5_5_1;if(s===xv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Sv)return o.BYTE;if(s===yv)return o.SHORT;if(s===Lo)return o.UNSIGNED_SHORT;if(s===md)return o.INT;if(s===Es)return o.UNSIGNED_INT;if(s===sa)return o.FLOAT;if(s===Po)return o.HALF_FLOAT;if(s===Mv)return o.ALPHA;if(s===Ev)return o.RGB;if(s===xi)return o.RGBA;if(s===Oo)return o.DEPTH_COMPONENT;if(s===zo)return o.DEPTH_STENCIL;if(s===Tv)return o.RED;if(s===vd)return o.RED_INTEGER;if(s===bv)return o.RG;if(s===Sd)return o.RG_INTEGER;if(s===yd)return o.RGBA_INTEGER;if(s===yc||s===xc||s===Mc||s===Ec)if(h===Fe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bh||s===Fh||s===Hh||s===Gh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Bh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vh||s===kh||s===Xh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Vh||s===kh)return h===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Xh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wh||s===qh||s===Yh||s===Zh||s===jh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Wh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$h)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===td)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ed)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===id)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ad)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tc||s===sd||s===rd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Tc)return h===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Av||s===od||s===ld||s===cd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Tc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===od)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ld)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===No?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class Yv extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const hA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dA=`
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

}`;class pA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Yv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ka({vertexShader:hA,fragmentShader:dA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fi(new Nc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mA extends Dr{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,y=null,g=null,S=null,x=null,E=null;const R=new pA,M={},_=i.getContextAttributes();let L=null,U=null;const C=[],H=[],F=new Ae;let z=null;const k=new ui;k.viewport=new en;const D=new ui;D.viewport=new en;const w=[k,D],I=new zx;let ot=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let vt=C[K];return vt===void 0&&(vt=new gh,C[K]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(K){let vt=C[K];return vt===void 0&&(vt=new gh,C[K]=vt),vt.getGripSpace()},this.getHand=function(K){let vt=C[K];return vt===void 0&&(vt=new gh,C[K]=vt),vt.getHandSpace()};function ht(K){const vt=H.indexOf(K.inputSource);if(vt===-1)return;const _t=C[vt];_t!==void 0&&(_t.update(K.inputSource,K.frame,p||h),_t.dispatchEvent({type:K.type,data:K.inputSource}))}function mt(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",P);for(let K=0;K<C.length;K++){const vt=H[K];vt!==null&&(H[K]=null,C[K].disconnect(vt))}ot=null,lt=null,R.reset();for(const K in M)delete M[K];e.setRenderTarget(L),x=null,S=null,g=null,l=null,U=null,Rt.stop(),s.isPresenting=!1,e.setPixelRatio(z),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return S!==null?S:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await i.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(l,i)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ht=null,zt=null;_.depth&&(zt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=_.stencil?zo:Oo,Ht=_.stencil?No:Es);const ee={colorFormat:i.RGBA8,depthFormat:zt,scaleFactor:c};S=g.createProjectionLayer(ee),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new Ts(S.textureWidth,S.textureHeight,{format:xi,type:oa,depthTexture:new Gv(S.textureWidth,S.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const _t={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),U=new Ts(x.framebufferWidth,x.framebufferHeight,{format:xi,type:oa,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function P(K){for(let vt=0;vt<K.removed.length;vt++){const _t=K.removed[vt],Ht=H.indexOf(_t);Ht>=0&&(H[Ht]=null,C[Ht].disconnect(_t))}for(let vt=0;vt<K.added.length;vt++){const _t=K.added[vt];let Ht=H.indexOf(_t);if(Ht===-1){for(let ee=0;ee<C.length;ee++)if(ee>=H.length){H.push(_t),Ht=ee;break}else if(H[ee]===null){H[ee]=_t,Ht=ee;break}if(Ht===-1)break}const zt=C[Ht];zt&&zt.connect(_t)}}const j=new et,Z=new et;function yt(K,vt,_t){j.setFromMatrixPosition(vt.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);const Ht=j.distanceTo(Z),zt=vt.projectionMatrix.elements,ee=_t.projectionMatrix.elements,ke=zt[14]/(zt[10]-1),he=zt[14]/(zt[10]+1),G=(zt[9]+1)/zt[5],Ee=(zt[9]-1)/zt[5],Jt=(zt[8]-1)/zt[0],ye=(ee[8]+1)/ee[0],jt=ke*Jt,He=ke*ye,Bt=Ht/(-Jt+ye),se=Bt*-Jt;if(vt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(se),K.translateZ(Bt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),zt[10]===-1)K.projectionMatrix.copy(vt.projectionMatrix),K.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const je=ke+Bt,Ze=he+Bt,N=jt-se,T=He+(Ht-se),tt=G*he/Ze*je,ft=Ee*he/Ze*je;K.projectionMatrix.makePerspective(N,T,tt,ft,je,Ze),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Tt(K,vt){vt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(vt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let vt=K.near,_t=K.far;R.texture!==null&&(R.depthNear>0&&(vt=R.depthNear),R.depthFar>0&&(_t=R.depthFar)),I.near=D.near=k.near=vt,I.far=D.far=k.far=_t,(ot!==I.near||lt!==I.far)&&(l.updateRenderState({depthNear:I.near,depthFar:I.far}),ot=I.near,lt=I.far),I.layers.mask=K.layers.mask|6,k.layers.mask=I.layers.mask&3,D.layers.mask=I.layers.mask&5;const Ht=K.parent,zt=I.cameras;Tt(I,Ht);for(let ee=0;ee<zt.length;ee++)Tt(zt[ee],Ht);zt.length===2?yt(I,k,D):I.projectionMatrix.copy(k.projectionMatrix),O(K,I,Ht)};function O(K,vt,_t){_t===null?K.matrix.copy(vt.matrixWorld):(K.matrix.copy(_t.matrixWorld),K.matrix.invert(),K.matrix.multiply(vt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(vt.projectionMatrix),K.projectionMatrixInverse.copy(vt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ud*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(S===null&&x===null))return m},this.setFoveation=function(K){m=K,S!==null&&(S.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(I)},this.getCameraTexture=function(K){return M[K]};let it=null;function Et(K,vt){if(y=vt.getViewerPose(p||h),E=vt,y!==null){const _t=y.views;x!==null&&(e.setRenderTargetFramebuffer(U,x.framebuffer),e.setRenderTarget(U));let Ht=!1;_t.length!==I.cameras.length&&(I.cameras.length=0,Ht=!0);for(let he=0;he<_t.length;he++){const G=_t[he];let Ee=null;if(x!==null)Ee=x.getViewport(G);else{const ye=g.getViewSubImage(S,G);Ee=ye.viewport,he===0&&(e.setRenderTargetTextures(U,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(U))}let Jt=w[he];Jt===void 0&&(Jt=new ui,Jt.layers.enable(he),Jt.viewport=new en,w[he]=Jt),Jt.matrix.fromArray(G.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(G.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),he===0&&(I.matrix.copy(Jt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ht===!0&&I.cameras.push(Jt)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const he=g.getDepthInformation(_t[0]);he&&he.isValid&&he.texture&&R.init(he,l.renderState)}if(zt&&zt.includes("camera-access")&&(e.state.unbindTexture(),g))for(let he=0;he<_t.length;he++){const G=_t[he].camera;if(G){let Ee=M[G];Ee||(Ee=new Yv,M[G]=Ee);const Jt=g.getCameraImage(G);Ee.sourceTexture=Jt}}}for(let _t=0;_t<C.length;_t++){const Ht=H[_t],zt=C[_t];Ht!==null&&zt!==void 0&&zt.update(Ht,vt,p||h)}it&&it(K,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),E=null}const Rt=new Vv;Rt.setAnimationLoop(Et),this.setAnimationLoop=function(K){it=K},this.dispose=function(){}}}const ms=new Ni,gA=new cn;function _A(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,Pv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,L,U,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),y(M,_)):_.isMeshStandardMaterial?(c(M,_),S(M,_),_.isMeshPhysicalMaterial&&x(M,_,C)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),R(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,L,U):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Bn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Bn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const L=e.get(_),U=L.envMap,C=L.envMapRotation;U&&(M.envMap.value=U,ms.copy(C),ms.x*=-1,ms.y*=-1,ms.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),M.envMapRotation.value.setFromMatrix4(gA.makeRotationFromEuler(ms)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,L,U){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*L,M.scale.value=U*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function y(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function x(M,_,L){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const L=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function vA(o,e,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const C=U.program;s.uniformBlockBinding(L,C)}function p(L,U){let C=l[L.id];C===void 0&&(E(L),C=y(L),l[L.id]=C,L.addEventListener("dispose",M));const H=U.program;s.updateUBOMapping(L,H);const F=e.render.frame;c[L.id]!==F&&(S(L),c[L.id]=F)}function y(L){const U=g();L.__bindingPointIndex=U;const C=o.createBuffer(),H=L.__size,F=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,C),C}function g(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const U=l[L.id],C=L.uniforms,H=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,z=C.length;F<z;F++){const k=Array.isArray(C[F])?C[F]:[C[F]];for(let D=0,w=k.length;D<w;D++){const I=k[D];if(x(I,F,D,H)===!0){const ot=I.__offset,lt=Array.isArray(I.value)?I.value:[I.value];let ht=0;for(let mt=0;mt<lt.length;mt++){const P=lt[mt],j=R(P);typeof P=="number"||typeof P=="boolean"?(I.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ot+ht,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=0,I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=0,I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=0):(P.toArray(I.__data,ht),ht+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(L,U,C,H){const F=L.value,z=U+"_"+C;if(H[z]===void 0)return typeof F=="number"||typeof F=="boolean"?H[z]=F:H[z]=F.clone(),!0;{const k=H[z];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return H[z]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function E(L){const U=L.uniforms;let C=0;const H=16;for(let z=0,k=U.length;z<k;z++){const D=Array.isArray(U[z])?U[z]:[U[z]];for(let w=0,I=D.length;w<I;w++){const ot=D[w],lt=Array.isArray(ot.value)?ot.value:[ot.value];for(let ht=0,mt=lt.length;ht<mt;ht++){const P=lt[ht],j=R(P),Z=C%H,yt=Z%j.boundary,Tt=Z+yt;C+=yt,Tt!==0&&H-Tt<j.storage&&(C+=H-Tt),ot.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=C,C+=j.storage}}}const F=C%H;return F>0&&(C+=H-F),L.__size=C,L.__cache={},this}function R(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function M(L){const U=L.target;U.removeEventListener("dispose",M);const C=h.indexOf(U.__bindingPointIndex);h.splice(C,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class SA{constructor(e={}){const{canvas:i=$y(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=h;const E=new Uint32Array(4),R=new Int32Array(4);let M=null,_=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let H=!1;this._outputColorSpace=Qn;let F=0,z=0,k=null,D=-1,w=null;const I=new en,ot=new en;let lt=null;const ht=new Me(0);let mt=0,P=i.width,j=i.height,Z=1,yt=null,Tt=null;const O=new en(0,0,P,j),it=new en(0,0,P,j);let Et=!1;const Rt=new Fv;let K=!1,vt=!1;const _t=new cn,Ht=new et,zt=new en,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function he(){return k===null?Z:1}let G=s;function Ee(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pd}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),G===null){const W="webgl2";if(G=Ee(W,A),G===null)throw Ee(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Jt,ye,jt,He,Bt,se,je,Ze,N,T,tt,ft,xt,ct,Yt,Ct,Wt,qt,bt,wt,Zt,Pt,Ut,re;function X(){Jt=new wT(G),Jt.init(),Pt=new fA(G,Jt),ye=new MT(G,Jt,e,Pt),jt=new cA(G,Jt),ye.reversedDepthBuffer&&S&&jt.buffers.depth.setReversed(!0),He=new LT(G),Bt=new Kb,se=new uA(G,Jt,jt,Bt,ye,Pt,He),je=new TT(C),Ze=new CT(C),N=new Bx(G),Ut=new yT(G,N),T=new DT(G,N,He,Ut),tt=new OT(G,T,N,He),bt=new NT(G,ye,se),Ct=new ET(Bt),ft=new jb(C,je,Ze,Jt,ye,Ut,Ct),xt=new _A(C,Bt),ct=new Jb,Yt=new aA(Jt),qt=new ST(C,je,Ze,jt,tt,x,m),Wt=new oA(C,tt,ye),re=new vA(G,He,ye,jt),wt=new xT(G,Jt,He),Zt=new UT(G,Jt,He),He.programs=ft.programs,C.capabilities=ye,C.extensions=Jt,C.properties=Bt,C.renderLists=ct,C.shadowMap=Wt,C.state=jt,C.info=He}X();const At=new mA(C,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Jt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Jt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(P,j,!1))},this.getSize=function(A){return A.set(P,j)},this.setSize=function(A,W,at=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,j=W,i.width=Math.floor(A*Z),i.height=Math.floor(W*Z),at===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(P*Z,j*Z).floor()},this.setDrawingBufferSize=function(A,W,at){P=A,j=W,Z=at,i.width=Math.floor(A*at),i.height=Math.floor(W*at),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,W,at,st){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,W,at,st),jt.viewport(I.copy(O).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(it)},this.setScissor=function(A,W,at,st){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,W,at,st),jt.scissor(ot.copy(it).multiplyScalar(Z).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){jt.setScissorTest(Et=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){Tt=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,at=!0){let st=0;if(A){let q=!1;if(k!==null){const St=k.texture.format;q=St===yd||St===Sd||St===vd}if(q){const St=k.texture.type,Lt=St===oa||St===Es||St===Lo||St===No||St===gd||St===_d,Vt=qt.getClearColor(),Ot=qt.getClearAlpha(),Kt=Vt.r,ne=Vt.g,Qt=Vt.b;Lt?(E[0]=Kt,E[1]=ne,E[2]=Qt,E[3]=Ot,G.clearBufferuiv(G.COLOR,0,E)):(R[0]=Kt,R[1]=ne,R[2]=Qt,R[3]=Ot,G.clearBufferiv(G.COLOR,0,R))}else st|=G.COLOR_BUFFER_BIT}W&&(st|=G.DEPTH_BUFFER_BIT),at&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),qt.dispose(),ct.dispose(),Yt.dispose(),Bt.dispose(),je.dispose(),Ze.dispose(),tt.dispose(),Ut.dispose(),re.dispose(),ft.dispose(),At.dispose(),At.removeEventListener("sessionstart",ti),At.removeEventListener("sessionend",Nr),Ti.stop()};function Dt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=He.autoReset,W=Wt.enabled,at=Wt.autoUpdate,st=Wt.needsUpdate,q=Wt.type;X(),He.autoReset=A,Wt.enabled=W,Wt.autoUpdate=at,Wt.needsUpdate=st,Wt.type=q}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const W=A.target;W.removeEventListener("dispose",gt),Ft(W)}function Ft(A){ie(A),Bt.remove(A)}function ie(A){const W=Bt.get(A).programs;W!==void 0&&(W.forEach(function(at){ft.releaseProgram(at)}),A.isShaderMaterial&&ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,at,st,q,St){W===null&&(W=ee);const Lt=q.isMesh&&q.matrixWorld.determinant()<0,Vt=la(A,W,at,st,q);jt.setMaterial(st,Lt);let Ot=at.index,Kt=1;if(st.wireframe===!0){if(Ot=T.getWireframeAttribute(at),Ot===void 0)return;Kt=2}const ne=at.drawRange,Qt=at.attributes.position;let fe=ne.start*Kt,Ue=(ne.start+ne.count)*Kt;St!==null&&(fe=Math.max(fe,St.start*Kt),Ue=Math.min(Ue,(St.start+St.count)*Kt)),Ot!==null?(fe=Math.max(fe,0),Ue=Math.min(Ue,Ot.count)):Qt!=null&&(fe=Math.max(fe,0),Ue=Math.min(Ue,Qt.count));const Ge=Ue-fe;if(Ge<0||Ge===1/0)return;Ut.setup(q,st,Vt,at,Ot);let Le,de=wt;if(Ot!==null&&(Le=N.get(Ot),de=Zt,de.setIndex(Le)),q.isMesh)st.wireframe===!0?(jt.setLineWidth(st.wireframeLinewidth*he()),de.setMode(G.LINES)):de.setMode(G.TRIANGLES);else if(q.isLine){let kt=st.linewidth;kt===void 0&&(kt=1),jt.setLineWidth(kt*he()),q.isLineSegments?de.setMode(G.LINES):q.isLineLoop?de.setMode(G.LINE_LOOP):de.setMode(G.LINE_STRIP)}else q.isPoints?de.setMode(G.POINTS):q.isSprite&&de.setMode(G.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))de.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const kt=q._multiDrawStarts,Xe=q._multiDrawCounts,be=q._multiDrawCount,vn=Ot?N.get(Ot).bytesPerElement:1,Oi=Bt.get(st).currentProgram.getUniforms();for(let pn=0;pn<be;pn++)Oi.setValue(G,"_gl_DrawID",pn),de.render(kt[pn]/vn,Xe[pn])}else if(q.isInstancedMesh)de.renderInstances(fe,Ge,q.count);else if(at.isInstancedBufferGeometry){const kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Xe=Math.min(at.instanceCount,kt);de.renderInstances(fe,Ge,Xe)}else de.render(fe,Ge)};function Ne(A,W,at){A.transparent===!0&&A.side===aa&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,Gn(A,W,at),A.side=Va,A.needsUpdate=!0,Gn(A,W,at),A.side=aa):Gn(A,W,at)}this.compile=function(A,W,at=null){at===null&&(at=A),_=Yt.get(at),_.init(W),U.push(_),at.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),A!==at&&A.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const st=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const St=q.material;if(St)if(Array.isArray(St))for(let Lt=0;Lt<St.length;Lt++){const Vt=St[Lt];Ne(Vt,at,q),st.add(Vt)}else Ne(St,at,q),st.add(St)}),_=U.pop(),st},this.compileAsync=function(A,W,at=null){const st=this.compile(A,W,at);return new Promise(q=>{function St(){if(st.forEach(function(Lt){Bt.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){q(A);return}setTimeout(St,10)}Jt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Te=null;function Rn(A){Te&&Te(A)}function ti(){Ti.stop()}function Nr(){Ti.start()}const Ti=new Vv;Ti.setAnimationLoop(Rn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){Te=A,At.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},At.addEventListener("sessionstart",ti),At.addEventListener("sessionend",Nr),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(W),W=At.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,k),_=Yt.get(A,U.length),_.init(W),U.push(_),_t.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Rt.setFromProjectionMatrix(_t,Li,W.reversedDepth),vt=this.localClippingEnabled,K=Ct.init(this.clippingPlanes,vt),M=ct.get(A,L.length),M.init(),L.push(M),At.enabled===!0&&At.isPresenting===!0){const St=C.xr.getDepthSensingMesh();St!==null&&bs(St,W,-1/0,C.sortObjects)}bs(A,W,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(yt,Tt),ke=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,ke&&qt.addToRenderList(M,A),this.info.render.frame++,K===!0&&Ct.beginShadows();const at=_.state.shadowsArray;Wt.render(at,A,W),K===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,q=M.transmissive;if(_.setupLights(),W.isArrayCamera){const St=W.cameras;if(q.length>0)for(let Lt=0,Vt=St.length;Lt<Vt;Lt++){const Ot=St[Lt];Rs(st,q,A,Ot)}ke&&qt.render(A);for(let Lt=0,Vt=St.length;Lt<Vt;Lt++){const Ot=St[Lt];As(M,A,Ot,Ot.viewport)}}else q.length>0&&Rs(st,q,A,W),ke&&qt.render(A),As(M,A,W);k!==null&&z===0&&(se.updateMultisampleRenderTarget(k),se.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(C,A,W),Ut.resetDefaultState(),D=-1,w=null,U.pop(),U.length>0?(_=U[U.length-1],K===!0&&Ct.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?M=L[L.length-1]:M=null};function bs(A,W,at,st){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Rt.intersectsSprite(A)){st&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_t);const Lt=tt.update(A),Vt=A.material;Vt.visible&&M.push(A,Lt,Vt,at,zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Rt.intersectsObject(A))){const Lt=tt.update(A),Vt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),zt.copy(Lt.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(_t)),Array.isArray(Vt)){const Ot=Lt.groups;for(let Kt=0,ne=Ot.length;Kt<ne;Kt++){const Qt=Ot[Kt],fe=Vt[Qt.materialIndex];fe&&fe.visible&&M.push(A,Lt,fe,at,zt.z,Qt)}}else Vt.visible&&M.push(A,Lt,Vt,at,zt.z,null)}}const St=A.children;for(let Lt=0,Vt=St.length;Lt<Vt;Lt++)bs(St[Lt],W,at,st)}function As(A,W,at,st){const q=A.opaque,St=A.transmissive,Lt=A.transparent;_.setupLightsView(at),K===!0&&Ct.setGlobalState(C.clippingPlanes,at),st&&jt.viewport(I.copy(st)),q.length>0&&Wa(q,W,at),St.length>0&&Wa(St,W,at),Lt.length>0&&Wa(Lt,W,at),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Rs(A,W,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new Ts(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Po:oa,minFilter:Ms,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const St=_.state.transmissionRenderTarget[st.id],Lt=st.viewport||I;St.setSize(Lt.z*C.transmissionResolutionScale,Lt.w*C.transmissionResolutionScale);const Vt=C.getRenderTarget(),Ot=C.getActiveCubeFace(),Kt=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(ht),mt=C.getClearAlpha(),mt<1&&C.setClearColor(16777215,.5),C.clear(),ke&&qt.render(at);const ne=C.toneMapping;C.toneMapping=Ga;const Qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),K===!0&&Ct.setGlobalState(C.clippingPlanes,st),Wa(A,at,st),se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ue=0,Ge=W.length;Ue<Ge;Ue++){const Le=W[Ue],de=Le.object,kt=Le.geometry,Xe=Le.material,be=Le.group;if(Xe.side===aa&&de.layers.test(st.layers)){const vn=Xe.side;Xe.side=Bn,Xe.needsUpdate=!0,Or(de,at,st,kt,Xe,be),Xe.side=vn,Xe.needsUpdate=!0,fe=!0}}fe===!0&&(se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St))}C.setRenderTarget(Vt,Ot,Kt),C.setClearColor(ht,mt),Qt!==void 0&&(st.viewport=Qt),C.toneMapping=ne}function Wa(A,W,at){const st=W.isScene===!0?W.overrideMaterial:null;for(let q=0,St=A.length;q<St;q++){const Lt=A[q],Vt=Lt.object,Ot=Lt.geometry,Kt=Lt.group;let ne=Lt.material;ne.allowOverride===!0&&st!==null&&(ne=st),Vt.layers.test(at.layers)&&Or(Vt,W,at,Ot,ne,Kt)}}function Or(A,W,at,st,q,St){A.onBeforeRender(C,W,at,st,q,St),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,W,at,st,A,St),q.transparent===!0&&q.side===aa&&q.forceSinglePass===!1?(q.side=Bn,q.needsUpdate=!0,C.renderBufferDirect(at,W,st,q,A,St),q.side=Va,q.needsUpdate=!0,C.renderBufferDirect(at,W,st,q,A,St),q.side=aa):C.renderBufferDirect(at,W,st,q,A,St),A.onAfterRender(C,W,at,st,q,St)}function Gn(A,W,at){W.isScene!==!0&&(W=ee);const st=Bt.get(A),q=_.state.lights,St=_.state.shadowsArray,Lt=q.state.version,Vt=ft.getParameters(A,q.state,St,W,at),Ot=ft.getProgramCacheKey(Vt);let Kt=st.programs;st.environment=A.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(A.isMeshStandardMaterial?Ze:je).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",gt),Kt=new Map,st.programs=Kt);let ne=Kt.get(Ot);if(ne!==void 0){if(st.currentProgram===ne&&st.lightsStateVersion===Lt)return _n(A,Vt),ne}else Vt.uniforms=ft.getUniforms(A),A.onBeforeCompile(Vt,C),ne=ft.acquireProgram(Vt,Ot),Kt.set(Ot,ne),st.uniforms=Vt.uniforms;const Qt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qt.clippingPlanes=Ct.uniform),_n(A,Vt),st.needsLights=zc(A),st.lightsStateVersion=Lt,st.needsLights&&(Qt.ambientLightColor.value=q.state.ambient,Qt.lightProbe.value=q.state.probe,Qt.directionalLights.value=q.state.directional,Qt.directionalLightShadows.value=q.state.directionalShadow,Qt.spotLights.value=q.state.spot,Qt.spotLightShadows.value=q.state.spotShadow,Qt.rectAreaLights.value=q.state.rectArea,Qt.ltc_1.value=q.state.rectAreaLTC1,Qt.ltc_2.value=q.state.rectAreaLTC2,Qt.pointLights.value=q.state.point,Qt.pointLightShadows.value=q.state.pointShadow,Qt.hemisphereLights.value=q.state.hemi,Qt.directionalShadowMap.value=q.state.directionalShadowMap,Qt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Qt.spotShadowMap.value=q.state.spotShadowMap,Qt.spotLightMatrix.value=q.state.spotLightMatrix,Qt.spotLightMap.value=q.state.spotLightMap,Qt.pointShadowMap.value=q.state.pointShadowMap,Qt.pointShadowMatrix.value=q.state.pointShadowMatrix),st.currentProgram=ne,st.uniformsList=null,ne}function nn(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=bc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function _n(A,W){const at=Bt.get(A);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function la(A,W,at,st,q){W.isScene!==!0&&(W=ee),se.resetTextureUnits();const St=W.fog,Lt=st.isMeshStandardMaterial?W.environment:null,Vt=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Cr,Ot=(st.isMeshStandardMaterial?Ze:je).get(st.envMap||Lt),Kt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ne=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Qt=!!at.morphAttributes.position,fe=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let Ge=Ga;st.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ge=C.toneMapping);const Le=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,de=Le!==void 0?Le.length:0,kt=Bt.get(st),Xe=_.state.lights;if(K===!0&&(vt===!0||A!==w)){const un=A===w&&st.id===D;Ct.setState(st,A,un)}let be=!1;st.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Xe.state.version||kt.outputColorSpace!==Vt||q.isBatchedMesh&&kt.batching===!1||!q.isBatchedMesh&&kt.batching===!0||q.isBatchedMesh&&kt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&kt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&kt.instancing===!1||!q.isInstancedMesh&&kt.instancing===!0||q.isSkinnedMesh&&kt.skinning===!1||!q.isSkinnedMesh&&kt.skinning===!0||q.isInstancedMesh&&kt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&kt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&kt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&kt.instancingMorph===!1&&q.morphTexture!==null||kt.envMap!==Ot||st.fog===!0&&kt.fog!==St||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ct.numPlanes||kt.numIntersection!==Ct.numIntersection)||kt.vertexAlphas!==Kt||kt.vertexTangents!==ne||kt.morphTargets!==Qt||kt.morphNormals!==fe||kt.morphColors!==Ue||kt.toneMapping!==Ge||kt.morphTargetsCount!==de)&&(be=!0):(be=!0,kt.__version=st.version);let vn=kt.currentProgram;be===!0&&(vn=Gn(st,W,q));let Oi=!1,pn=!1,Ya=!1;const ge=vn.getUniforms(),En=kt.uniforms;if(jt.useProgram(vn.program)&&(Oi=!0,pn=!0,Ya=!0),st.id!==D&&(D=st.id,pn=!0),Oi||w!==A){jt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ge.setValue(G,"projectionMatrix",A.projectionMatrix),ge.setValue(G,"viewMatrix",A.matrixWorldInverse);const Je=ge.map.cameraPosition;Je!==void 0&&Je.setValue(G,Ht.setFromMatrixPosition(A.matrixWorld)),ye.logarithmicDepthBuffer&&ge.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ge.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,pn=!0,Ya=!0)}if(q.isSkinnedMesh){ge.setOptional(G,q,"bindMatrix"),ge.setOptional(G,q,"bindMatrixInverse");const un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),ge.setValue(G,"boneTexture",un.boneTexture,se))}q.isBatchedMesh&&(ge.setOptional(G,q,"batchingTexture"),ge.setValue(G,"batchingTexture",q._matricesTexture,se),ge.setOptional(G,q,"batchingIdTexture"),ge.setValue(G,"batchingIdTexture",q._indirectTexture,se),ge.setOptional(G,q,"batchingColorTexture"),q._colorsTexture!==null&&ge.setValue(G,"batchingColorTexture",q._colorsTexture,se));const Cn=at.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&bt.update(q,at,vn),(pn||kt.receiveShadow!==q.receiveShadow)&&(kt.receiveShadow=q.receiveShadow,ge.setValue(G,"receiveShadow",q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(En.envMap.value=Ot,En.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(En.envMapIntensity.value=W.environmentIntensity),pn&&(ge.setValue(G,"toneMappingExposure",C.toneMappingExposure),kt.needsLights&&zr(En,Ya),St&&st.fog===!0&&xt.refreshFogUniforms(En,St),xt.refreshMaterialUniforms(En,st,Z,j,_.state.transmissionRenderTarget[A.id]),bc.upload(G,nn(kt),En,se)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(bc.upload(G,nn(kt),En,se),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ge.setValue(G,"center",q.center),ge.setValue(G,"modelViewMatrix",q.modelViewMatrix),ge.setValue(G,"normalMatrix",q.normalMatrix),ge.setValue(G,"modelMatrix",q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const un=st.uniformsGroups;for(let Je=0,Cs=un.length;Je<Cs;Je++){const bi=un[Je];re.update(bi,vn),re.bind(bi,vn)}}return vn}function zr(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function zc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,W,at){const st=Bt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Bt.get(A.texture).__webglTexture=W,Bt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const at=Bt.get(A);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const Pc=G.createFramebuffer();this.setRenderTarget=function(A,W=0,at=0){k=A,F=W,z=at;let st=!0,q=null,St=!1,Lt=!1;if(A){const Ot=Bt.get(A);if(Ot.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(G.FRAMEBUFFER,null),st=!1;else if(Ot.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(Ot.__hasExternalTextures)se.rebindTextures(A,Bt.get(A.texture).__webglTexture,Bt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qt=A.depthTexture;if(Ot.__boundDepthTexture!==Qt){if(Qt!==null&&Bt.has(Qt)&&(A.width!==Qt.image.width||A.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Lt=!0);const ne=Bt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?q=ne[W][at]:q=ne[W],St=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?q=Bt.get(A).__webglMultisampledFramebuffer:Array.isArray(ne)?q=ne[at]:q=ne,I.copy(A.viewport),ot.copy(A.scissor),lt=A.scissorTest}else I.copy(O).multiplyScalar(Z).floor(),ot.copy(it).multiplyScalar(Z).floor(),lt=Et;if(at!==0&&(q=Pc),jt.bindFramebuffer(G.FRAMEBUFFER,q)&&st&&jt.drawBuffers(A,q),jt.viewport(I),jt.scissor(ot),jt.setScissorTest(lt),St){const Ot=Bt.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,at)}else if(Lt){const Ot=W;for(let Kt=0;Kt<A.textures.length;Kt++){const ne=Bt.get(A.textures[Kt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Kt,ne.__webglTexture,at,Ot)}}else if(A!==null&&at!==0){const Ot=Bt.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(A,W,at,st,q,St,Lt,Vt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){jt.bindFramebuffer(G.FRAMEBUFFER,Ot);try{const Kt=A.textures[Vt],ne=Kt.format,Qt=Kt.type;if(!ye.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-st&&at>=0&&at<=A.height-q&&(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Vt),G.readPixels(W,at,st,q,Pt.convert(ne),Pt.convert(Qt),St))}finally{const Kt=k!==null?Bt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(G.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(A,W,at,st,q,St,Lt,Vt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(W>=0&&W<=A.width-st&&at>=0&&at<=A.height-q){jt.bindFramebuffer(G.FRAMEBUFFER,Ot);const Kt=A.textures[Vt],ne=Kt.format,Qt=Kt.type;if(!ye.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,fe),G.bufferData(G.PIXEL_PACK_BUFFER,St.byteLength,G.STREAM_READ),A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Vt),G.readPixels(W,at,st,q,Pt.convert(ne),Pt.convert(Qt),0);const Ue=k!==null?Bt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(G.FRAMEBUFFER,Ue);const Ge=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await tx(G,Ge,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,fe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,St),G.deleteBuffer(fe),G.deleteSync(Ge),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,at=0){const st=Math.pow(2,-at),q=Math.floor(A.image.width*st),St=Math.floor(A.image.height*st),Lt=W!==null?W.x:0,Vt=W!==null?W.y:0;se.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,at,0,0,Lt,Vt,q,St),jt.unbindTexture()};const Go=G.createFramebuffer(),qa=G.createFramebuffer();this.copyTextureToTexture=function(A,W,at=null,st=null,q=0,St=null){St===null&&(q!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=q,q=0):St=0);let Lt,Vt,Ot,Kt,ne,Qt,fe,Ue,Ge;const Le=A.isCompressedTexture?A.mipmaps[St]:A.image;if(at!==null)Lt=at.max.x-at.min.x,Vt=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,Kt=at.min.x,ne=at.min.y,Qt=at.isBox3?at.min.z:0;else{const Cn=Math.pow(2,-q);Lt=Math.floor(Le.width*Cn),Vt=Math.floor(Le.height*Cn),A.isDataArrayTexture?Ot=Le.depth:A.isData3DTexture?Ot=Math.floor(Le.depth*Cn):Ot=1,Kt=0,ne=0,Qt=0}st!==null?(fe=st.x,Ue=st.y,Ge=st.z):(fe=0,Ue=0,Ge=0);const de=Pt.convert(W.format),kt=Pt.convert(W.type);let Xe;W.isData3DTexture?(se.setTexture3D(W,0),Xe=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),Xe=G.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),Xe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const be=G.getParameter(G.UNPACK_ROW_LENGTH),vn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Oi=G.getParameter(G.UNPACK_SKIP_PIXELS),pn=G.getParameter(G.UNPACK_SKIP_ROWS),Ya=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Le.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ne),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Qt);const ge=A.isDataArrayTexture||A.isData3DTexture,En=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Cn=Bt.get(A),un=Bt.get(W),Je=Bt.get(Cn.__renderTarget),Cs=Bt.get(un.__renderTarget);jt.bindFramebuffer(G.READ_FRAMEBUFFER,Je.__webglFramebuffer),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let bi=0;bi<Ot;bi++)ge&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.get(A).__webglTexture,q,Qt+bi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.get(W).__webglTexture,St,Ge+bi)),G.blitFramebuffer(Kt,ne,Lt,Vt,fe,Ue,Lt,Vt,G.DEPTH_BUFFER_BIT,G.NEAREST);jt.bindFramebuffer(G.READ_FRAMEBUFFER,null),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Bt.has(A)){const Cn=Bt.get(A),un=Bt.get(W);jt.bindFramebuffer(G.READ_FRAMEBUFFER,Go),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,qa);for(let Je=0;Je<Ot;Je++)ge?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Cn.__webglTexture,q,Qt+Je):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Cn.__webglTexture,q),En?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,un.__webglTexture,St,Ge+Je):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,un.__webglTexture,St),q!==0?G.blitFramebuffer(Kt,ne,Lt,Vt,fe,Ue,Lt,Vt,G.COLOR_BUFFER_BIT,G.NEAREST):En?G.copyTexSubImage3D(Xe,St,fe,Ue,Ge+Je,Kt,ne,Lt,Vt):G.copyTexSubImage2D(Xe,St,fe,Ue,Kt,ne,Lt,Vt);jt.bindFramebuffer(G.READ_FRAMEBUFFER,null),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else En?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Xe,St,fe,Ue,Ge,Lt,Vt,Ot,de,kt,Le.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Xe,St,fe,Ue,Ge,Lt,Vt,Ot,de,Le.data):G.texSubImage3D(Xe,St,fe,Ue,Ge,Lt,Vt,Ot,de,kt,Le):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,St,fe,Ue,Lt,Vt,de,kt,Le.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,St,fe,Ue,Le.width,Le.height,de,Le.data):G.texSubImage2D(G.TEXTURE_2D,St,fe,Ue,Lt,Vt,de,kt,Le);G.pixelStorei(G.UNPACK_ROW_LENGTH,be),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Oi),G.pixelStorei(G.UNPACK_SKIP_ROWS,pn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ya),St===0&&W.generateMipmaps&&G.generateMipmap(Xe),jt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,at=null,st=null,q=0){return Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,at,st,q)},this.initRenderTarget=function(A){Bt.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),jt.unbindTexture()},this.resetState=function(){F=0,z=0,k=null,jt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(e),i.unpackColorSpace=we._getUnpackColorSpace()}}var uv="1.3.26";function Zv(o,e,i){return Math.max(o,Math.min(e,i))}function yA(o,e,i){return(1-i)*o+i*e}function xA(o,e,i,s){return yA(o,e,1-Math.exp(-i*s))}function MA(o,e){return(o%e+e)%e}var EA=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(o){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=o;const i=Zv(0,this.currentTime/this.duration,1);e=i>=1;const s=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=xA(this.value,this.to,this.lerp*60,o),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(o,e,{lerp:i,duration:s,easing:l,onStart:c,onUpdate:h}){this.from=this.value=o,this.to=e,this.lerp=i,this.duration=s,this.easing=l,this.currentTime=0,this.isRunning=!0,c?.(),this.onUpdate=h}};function TA(o,e){let i;return function(...s){clearTimeout(i),i=setTimeout(()=>{i=void 0,o.apply(this,s)},e)}}var bA=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(o,e,{autoResize:i=!0,debounce:s=250}={}){this.wrapper=o,this.content=e,i&&(this.debouncedResize=TA(this.resize,s),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},jv=class{events={};emit(o,...e){const i=this.events[o]||[];for(let s=0,l=i.length;s<l;s++)i[s]?.(...e)}on(o,e){return this.events[o]?this.events[o].push(e):this.events[o]=[e],()=>{this.events[o]=this.events[o]?.filter(i=>e!==i)}}off(o,e){this.events[o]=this.events[o]?.filter(i=>e!==i)}destroy(){this.events={}}};const AA=100/6,Ba={passive:!1};function fv(o,e){return o===1?AA:o===2?e:1}var RA=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new jv;constructor(o,e={wheelMultiplier:1,touchMultiplier:1}){this.element=o,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ba),this.element.addEventListener("touchstart",this.onTouchStart,Ba),this.element.addEventListener("touchmove",this.onTouchMove,Ba),this.element.addEventListener("touchend",this.onTouchEnd,Ba)}on(o,e){return this.emitter.on(o,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ba),this.element.removeEventListener("touchstart",this.onTouchStart,Ba),this.element.removeEventListener("touchmove",this.onTouchMove,Ba),this.element.removeEventListener("touchend",this.onTouchEnd,Ba)}onTouchStart=o=>{const{clientX:e,clientY:i}=o.targetTouches?o.targetTouches[0]:o;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:o})};onTouchMove=o=>{const{clientX:e,clientY:i}=o.targetTouches?o.targetTouches[0]:o,s=-(e-this.touchStart.x)*this.options.touchMultiplier,l=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:l},this.emitter.emit("scroll",{deltaX:s,deltaY:l,event:o})};onTouchEnd=o=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:o})};onWheel=o=>{let{deltaX:e,deltaY:i,deltaMode:s}=o;const l=fv(s,this.window.width),c=fv(s,this.window.height);e*=l,i*=c,e*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:o})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const hv=o=>Math.min(1,1.001-2**(-10*o));var CA=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new EA;emitter=new jv;dimensions;virtualScroll;constructor({wrapper:o=window,content:e=document.documentElement,eventsTarget:i=o,smoothWheel:s=!0,syncTouch:l=!1,syncTouchLerp:c=.075,touchInertiaExponent:h=1.7,duration:d,easing:m,lerp:p=.1,infinite:y=!1,orientation:g="vertical",gestureOrientation:S=g==="horizontal"?"both":"vertical",touchMultiplier:x=1,wheelMultiplier:E=1,autoResize:R=!0,prevent:M,virtualScroll:_,overscroll:L=!0,autoRaf:U=!1,anchors:C=!1,autoToggle:H=!1,allowNestedScroll:F=!1,__experimental__naiveDimensions:z=!1,naiveDimensions:k=z,stopInertiaOnNavigate:D=!1,respectReducedMotion:w=!0}={}){window.lenisVersion=uv,window.lenis||(window.lenis={}),window.lenis.version=uv,g==="horizontal"&&(window.lenis.horizontal=!0),l===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!o||o===document.documentElement)&&(o=window),typeof d=="number"&&typeof m!="function"?m=hv:typeof m=="function"&&typeof d!="number"&&(d=1),this.options={wrapper:o,content:e,eventsTarget:i,smoothWheel:s,syncTouch:l,syncTouchLerp:c,touchInertiaExponent:h,duration:d,easing:m,lerp:p,infinite:y,gestureOrientation:S,orientation:g,touchMultiplier:x,wheelMultiplier:E,autoResize:R,prevent:M,virtualScroll:_,overscroll:L,autoRaf:U,anchors:C,autoToggle:H,allowNestedScroll:F,naiveDimensions:k,stopInertiaOnNavigate:D,respectReducedMotion:w},this.dimensions=new bA(o,e,{autoResize:R}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new RA(i,{touchMultiplier:x,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(o,e){return this.emitter.on(o,e)}off(o,e){return this.emitter.off(o,e)}onScrollEnd=o=>{o instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&o.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const o=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[o]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=o=>{o.propertyName?.includes("overflow")&&o.target===this.rootElement&&this.checkOverflow()};setScroll(o){this.isHorizontal?this.options.wrapper.scrollTo({left:o,behavior:"instant"}):this.options.wrapper.scrollTo({top:o,behavior:"instant"})}onClick=o=>{const e=o.composedPath().filter(s=>s instanceof HTMLAnchorElement&&s.href).map(s=>new URL(s.href)),i=new URL(window.location.href);if(this.options.anchors){const s=e.find(l=>i.host===l.host&&i.pathname===l.pathname&&l.hash);if(s){const l=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,c=decodeURIComponent(s.hash);this.scrollTo(c,l);return}}if(this.options.stopInertiaOnNavigate&&e.some(s=>i.host===s.host&&i.pathname!==s.pathname)){this.reset();return}};onPointerDown=o=>{o.button===1&&this.reset()};isTouchOnSelectionHandle(o){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const i=o.targetTouches[0]??o.changedTouches[0];if(!i)return!1;const s=e.getRangeAt(0).getClientRects();if(s.length===0)return!1;const l=s[0],c=s[s.length-1],h=40,d=Math.hypot(i.clientX-l.left,i.clientY-l.top)<=h,m=Math.hypot(i.clientX-c.right,i.clientY-c.bottom)<=h;return d||m}onVirtualScroll=o=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(o)===!1)return;const{deltaX:e,deltaY:i,event:s}=o;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:i,event:s}),s.ctrlKey||s.lenisStopPropagation)return;const l=s.type.includes("touch"),c=s.type.includes("wheel");if(l&&this.isIos&&(s.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(s)),this._isDraggingSelection)){s.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=s.type==="touchstart"||s.type==="touchmove";const h=e===0&&i===0;if(this.options.syncTouch&&l&&s.type==="touchstart"&&h&&!this.isStopped&&!this.isLocked){this.reset();return}const d=this.options.gestureOrientation==="vertical"&&i===0||this.options.gestureOrientation==="horizontal"&&e===0;if(h||d)return;let m=s.composedPath();m=m.slice(0,m.indexOf(this.rootElement));const p=this.options.prevent,y=Math.abs(e)>=Math.abs(i)?"horizontal":"vertical";if(m.find(E=>E instanceof HTMLElement&&(typeof p=="function"&&p?.(E)||E.hasAttribute?.("data-lenis-prevent")||y==="vertical"&&E.hasAttribute?.("data-lenis-prevent-vertical")||y==="horizontal"&&E.hasAttribute?.("data-lenis-prevent-horizontal")||l&&E.hasAttribute?.("data-lenis-prevent-touch")||c&&E.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(E,{deltaX:e,deltaY:i}))))return;if(this.isStopped||this.isLocked){s.cancelable&&s.preventDefault();return}if(!(this.options.syncTouch&&l||this.options.smoothWheel&&c)){this.isScrolling="native",this.animate.stop(),s.lenisStopPropagation=!0;return}let g=i;this.options.gestureOrientation==="both"?g=Math.abs(i)>Math.abs(e)?i:e:this.options.gestureOrientation==="horizontal"&&(g=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&i>0||this.animatedScroll===this.limit&&i<0))&&(s.lenisStopPropagation=!0),s.cancelable&&s.preventDefault();const S=l&&this.options.syncTouch,x=l&&s.type==="touchend";x&&(g=Math.sign(g)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+g,{programmatic:!1,...S?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const o=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-o,this.direction=Math.sign(this.animatedScroll-o),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=o=>{const e=o-(this.time||o);this.time=o,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(o,{offset:e=0,immediate:i=!1,lock:s=!1,programmatic:l=!0,lerp:c=l?this.options.lerp:void 0,duration:h=l?this.options.duration:void 0,easing:d=l?this.options.easing:void 0,onStart:m,onComplete:p,force:y=!1,userData:g}={}){if(this.prefersReducedMotion&&(l?i=!0:(c=1,h=void 0,d=void 0)),(this.isStopped||this.isLocked)&&!y)return;let S=o,x=e;if(typeof S=="string"&&["top","left","start","#"].includes(S))S=0;else if(typeof S=="string"&&["bottom","right","end"].includes(S))S=this.limit;else{let E=null;if(typeof S=="string"?(E=S.startsWith("#")?document.getElementById(S.slice(1)):document.querySelector(S),E||(S==="#top"?S=0:console.warn("Lenis: Target not found",S))):S instanceof HTMLElement&&S?.nodeType&&(E=S),E){if(this.options.wrapper!==window){const C=this.rootElement.getBoundingClientRect();x-=this.isHorizontal?C.left:C.top}const R=E.getBoundingClientRect(),M=getComputedStyle(E),_=this.isHorizontal?Number.parseFloat(M.scrollMarginLeft):Number.parseFloat(M.scrollMarginTop),L=getComputedStyle(this.rootElement),U=this.isHorizontal?Number.parseFloat(L.scrollPaddingLeft):Number.parseFloat(L.scrollPaddingTop);S=(this.isHorizontal?R.left:R.top)+this.animatedScroll-(Number.isNaN(_)?0:_)-(Number.isNaN(U)?0:U)}}if(typeof S=="number"){if(S+=x,this.options.infinite){if(l){this.targetScroll=this.animatedScroll=this.scroll;const E=S-this.animatedScroll;E>this.limit/2?S-=this.limit:E<-this.limit/2&&(S+=this.limit)}}else S=Zv(0,S,this.limit);if(S===this.targetScroll){m?.(this),p?.(this);return}if(this.userData=g??{},i){this.animatedScroll=this.targetScroll=S,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),p?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}l||(this.targetScroll=S),typeof h=="number"&&typeof d!="function"?d=hv:typeof d=="function"&&typeof h!="number"&&(h=1),this.animate.fromTo(this.animatedScroll,S,{duration:h,easing:d,lerp:c,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",m?.(this)},onUpdate:(E,R)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=E-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=E,this.setScroll(this.scroll),l&&(this.targetScroll=E),R||this.emit(),R&&(this.reset(),this.emit(),p?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(o,{deltaX:e,deltaY:i}){const s=Date.now();o._lenis||(o._lenis={});const l=o._lenis;let c,h,d,m,p,y,g,S,x,E;if(s-(l.time??0)>2e3){l.time=Date.now();const F=window.getComputedStyle(o);if(l.computedStyle=F,c=["auto","overlay","scroll"].includes(F.overflowX),h=["auto","overlay","scroll"].includes(F.overflowY),p=["auto"].includes(F.overscrollBehaviorX),y=["auto"].includes(F.overscrollBehaviorY),l.hasOverflowX=c,l.hasOverflowY=h,!(c||h))return!1;g=o.scrollWidth,S=o.scrollHeight,x=o.clientWidth,E=o.clientHeight,d=g>x,m=S>E,l.isScrollableX=d,l.isScrollableY=m,l.scrollWidth=g,l.scrollHeight=S,l.clientWidth=x,l.clientHeight=E,l.hasOverscrollBehaviorX=p,l.hasOverscrollBehaviorY=y}else d=l.isScrollableX,m=l.isScrollableY,c=l.hasOverflowX,h=l.hasOverflowY,g=l.scrollWidth,S=l.scrollHeight,x=l.clientWidth,E=l.clientHeight,p=l.hasOverscrollBehaviorX,y=l.hasOverscrollBehaviorY;if(!(c&&d||h&&m))return!1;const R=Math.abs(e)>=Math.abs(i)?"horizontal":"vertical";let M,_,L,U,C,H;if(R==="horizontal")M=Math.round(o.scrollLeft),_=g-x,L=e,U=c,C=d,H=p;else if(R==="vertical")M=Math.round(o.scrollTop),_=S-E,L=i,U=h,C=m,H=y;else return!1;return!H&&(M>=_||M<=0)?!0:(L>0?M<_:M>0)&&U&&C}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const o=this.options.wrapper;return this.isHorizontal?o.scrollX??o.scrollLeft:o.scrollY??o.scrollTop}get scroll(){return this.options.infinite?MA(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(o){this._isScrolling!==o&&(this._isScrolling=o,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(o){this._isStopped!==o&&(this._isStopped=o,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(o){this._isLocked!==o&&(this._isLocked=o,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let o="lenis";return this.options.autoToggle&&(o+=" lenis-autoToggle"),this.isStopped&&(o+=" lenis-stopped"),this.isLocked&&(o+=" lenis-locked"),this.isScrolling&&(o+=" lenis-scrolling"),this.isScrolling==="smooth"&&(o+=" lenis-smooth"),o}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(o=>{this.rootElement.classList.add(o)})}cleanUpClassName(){for(const o of Array.from(this.rootElement.classList))(o==="lenis"||o.startsWith("lenis-"))&&this.rootElement.classList.remove(o)}};const wA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();var DA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const UA=Jn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>Jn.createElement("svg",{ref:m,...DA,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:Kv("lucide",l),...d},[...h.map(([p,y])=>Jn.createElement(p,y)),...Array.isArray(c)?c:[c]]));const Xa=(o,e)=>{const i=Jn.forwardRef(({className:s,...l},c)=>Jn.createElement(UA,{ref:c,iconNode:e,className:Kv(`lucide-${wA(o)}`,s),...l}));return i.displayName=`${o}`,i};const gs=Xa("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const LA=Xa("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);const Th=Xa("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const dv=Xa("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);const pv=Xa("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);const NA=Xa("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const OA=Xa("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const zA=Xa("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Si={github:"https://github.com/AMIRTHAVARSSHAN",instagram:"https://www.instagram.com/build.with_varsshan/",linkedin:"https://www.linkedin.com/in/amirthavarsshan-k-90860341/"},mv=[{n:"01",title:"JARVIS OS",kicker:"AGENTIC DESKTOP",desc:"A personal AI operating layer concept for turning natural-language intent into actions, tools and workflows.",tags:["AI Agents","Automation","Python"],repo:"https://github.com/AMIRTHAVARSSHAN"},{n:"02",title:"VarshGPT",kicker:"GENAI SYSTEM",desc:"A conversational AI direction focused on model orchestration, interface design and practical productivity workflows.",tags:["LLM","GenAI","Web"],repo:"https://github.com/AMIRTHAVARSSHAN"},{n:"03",title:"Disease Prediction AI",kicker:"ML / HEALTHCARE",desc:"Machine-learning experimentation around symptom-driven prediction and intelligent healthcare assistance.",tags:["ML","NLP","Healthcare"],repo:"https://github.com/AMIRTHAVARSSHAN"},{n:"04",title:"Zoho Finance Lite",kicker:"FULL-STACK PRODUCT",desc:"A finance-management product concept combining application UX, data flows and a practical dashboard.",tags:["React","Node.js","Product"],repo:"https://github.com/AMIRTHAVARSSHAN"},{n:"05",title:"VarshGPT 2.0",kicker:"MULTIMODAL / AGENTS",desc:"The next iteration of the AI workspace idea: multimodal interaction, tools, memory and an agentic architecture.",tags:["Agents","Memory","Multimodal"],repo:"https://github.com/AMIRTHAVARSSHAN"}],PA=["Python","PyTorch","TensorFlow","React","Next.js","Node.js","FastAPI","Docker","Hugging Face","LLMs","RAG","AI Agents","Three.js","Git"],IA=[{type:"BUILD",title:"From idea to interface",text:"Sharing the process behind building and debugging AI products.",href:Si.instagram},{type:"DEBUG",title:"Shipping through the bugs",text:"Real build logs, experiments and lessons from the engineering loop.",href:Si.instagram},{type:"LEARN",title:"Learning in public",text:"AI/ML concepts, tools and experiments turned into practical builds.",href:Si.linkedin}];function BA(){const o=Jn.useRef(null);return Jn.useEffect(()=>{const e=o.current;if(!e)return;const i=new bx,s=new ui(48,innerWidth/innerHeight,.1,100);s.position.z=8;const l=new SA({antialias:!0,alpha:!0,powerPreference:"high-performance"});l.setPixelRatio(Math.min(devicePixelRatio,1.6)),l.setSize(innerWidth,innerHeight),l.outputColorSpace=Qn,e.appendChild(l.domElement);const c=new Do;i.add(c);const h=new fi(new Dc(1.42,5),new Ux({color:1119002,roughness:.18,metalness:.85,transmission:.22,transparent:!0,opacity:.95}));c.add(h);const d=new fi(new Dc(1.56,2),new wc({color:9403647,wireframe:!0,transparent:!0,opacity:.32}));c.add(d);const m=new wc({color:12168703,transparent:!0,opacity:.38});[2.1,2.55,3].forEach((L,U)=>{const C=new fi(new Ed(L,.012,8,160),m);C.rotation.x=U*.72,C.rotation.y=U*.48,c.add(C)});const p=1300,y=new Float32Array(p*3),g=new Float32Array(p*3);for(let L=0;L<p;L++){const U=3+Math.random()*5,C=Math.random()*Math.PI*2,H=(Math.random()-.5)*6;y[L*3]=Math.cos(C)*U,y[L*3+1]=Math.sin(C)*U*.55,y[L*3+2]=H;const F=new Me().setHSL(.68+Math.random()*.08,.65,.55+Math.random()*.3);g.set([F.r,F.g,F.b],L*3)}const S=new Ei;S.setAttribute("position",new hi(y,3)),S.setAttribute("color",new hi(g,3));const x=new wx(S,new Hv({size:.018,vertexColors:!0,transparent:!0,opacity:.75}));i.add(x);const E=new Px;let R;const M=()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),l.setSize(innerWidth,innerHeight)};addEventListener("resize",M);const _=()=>{const L=E.getElapsedTime();c.rotation.y=L*.085,c.rotation.x=Math.sin(L*.22)*.08,h.rotation.x=L*.12,d.rotation.y=-L*.18,x.rotation.y=L*.012,x.rotation.x=Math.sin(L*.08)*.03,l.render(i,s),R=requestAnimationFrame(_)};return _(),()=>{cancelAnimationFrame(R),removeEventListener("resize",M),l.dispose(),S.dispose(),e.removeChild(l.domElement)}},[]),J.createElement("div",{className:"scene",ref:o})}function FA(){const[o,e]=Jn.useState(!1),[i,s]=Jn.useState([]),l=Jn.useRef(null),c=Jn.useRef(null);Jn.useEffect(()=>{const d=new CA({duration:1.15,smoothWheel:!0}),m=x=>{d.raf(x),requestAnimationFrame(m)};requestAnimationFrame(m);const p=x=>{l.current&&(l.current.style.transform=`translate3d(${x.clientX}px,${x.clientY}px,0)`)};addEventListener("mousemove",p);const y=document.querySelectorAll("[data-reveal]"),g=new IntersectionObserver(x=>x.forEach(E=>{E.isIntersecting&&E.target.classList.add("is-in")}),{threshold:.12});y.forEach(x=>g.observe(x));const S=()=>{const x=scrollY/(document.body.scrollHeight-innerHeight);c.current&&(c.current.style.transform=`scaleX(${Math.max(0,Math.min(1,x))})`)};return addEventListener("scroll",S,{passive:!0}),S(),fetch("https://api.github.com/users/AMIRTHAVARSSHAN/repos?per_page=8&sort=updated").then(x=>x.ok?x.json():[]).then(x=>s(Array.isArray(x)?x:[])).catch(()=>{}),()=>{removeEventListener("mousemove",p),removeEventListener("scroll",S),g.disconnect(),d.destroy()}},[]);const h=d=>{document.getElementById(d)?.scrollIntoView({behavior:"smooth"}),e(!1)};return J.createElement(J.Fragment,null,J.createElement("div",{className:"cursor",ref:l}),J.createElement("div",{className:"progress",ref:c}),J.createElement(BA,null),J.createElement("header",{className:"nav"},J.createElement("button",{className:"brand",onClick:()=>h("top")},J.createElement("span",null,"AV"),J.createElement("small",null,"AMIRTHA VARSSHAN")),J.createElement("nav",{className:o?"open":""},[["work","WORK"],["about","ABOUT"],["build","BUILD LOG"],["contact","CONTACT"]].map(([d,m])=>J.createElement("button",{key:d,onClick:()=>h(d)},m))),J.createElement("button",{className:"menu",onClick:()=>e(!o)},o?J.createElement(zA,null):J.createElement(OA,null))),J.createElement("main",{id:"top"},J.createElement("section",{className:"hero section"},J.createElement("div",{className:"hero-copy"},J.createElement("p",{className:"eyebrow"},J.createElement("span",{className:"live-dot"})," AVAILABLE TO BUILD"),J.createElement("h1",null,"BUILDING",J.createElement("br",null),J.createElement("em",null,"INTELLIGENT"),J.createElement("br",null),"SYSTEMS."),J.createElement("p",{className:"lede"},"AI engineer & product builder exploring GenAI, agents, machine learning, automation and immersive interfaces."),J.createElement("div",{className:"hero-actions"},J.createElement("button",{className:"primary",onClick:()=>h("work")},"EXPLORE WORK ",J.createElement(gs,{size:17})),J.createElement("a",{className:"ghost",href:Si.github,target:"_blank",rel:"noreferrer"},J.createElement(Th,{size:17})," GITHUB"))),J.createElement("div",{className:"hero-meta"},J.createElement("span",null,"SCROLL TO ENTER"),J.createElement("span",{className:"line"}),J.createElement("span",null,"01 — 08"))),J.createElement("section",{id:"about",className:"section about"},J.createElement("div",{className:"section-head","data-reveal":!0},J.createElement("span",null,"01 / IDENTITY"),J.createElement("span",null,"WHO I AM")),J.createElement("div",{className:"about-grid"},J.createElement("h2",{"data-reveal":!0},"FROM",J.createElement("br",null),J.createElement("em",null,"IDEA"),J.createElement("br",null),"TO SYSTEM."),J.createElement("div",{"data-reveal":!0},J.createElement("p",{className:"big-copy"},"I like turning ambitious ideas into working software — from the model layer and agent logic to the interface people actually use."),J.createElement("p",{className:"muted"},"My work sits at the intersection of artificial intelligence, full-stack engineering and product thinking. The portfolio is a living build log, not a static résumé.")))),J.createElement("section",{className:"section stack-section"},J.createElement("div",{className:"section-head","data-reveal":!0},J.createElement("span",null,"02 / STACK"),J.createElement("span",null,"THE TOOLBOX")),J.createElement("div",{className:"stack-orbit","data-reveal":!0},J.createElement("div",{className:"orbit-core"},J.createElement(LA,null),J.createElement("span",null,"AI",J.createElement("br",null),"STACK")),PA.map((d,m)=>J.createElement("span",{key:d,className:"stack-pill",style:{"--i":m}},d)))),J.createElement("section",{id:"work",className:"section projects"},J.createElement("div",{className:"section-head","data-reveal":!0},J.createElement("span",null,"03 / SELECTED WORK"),J.createElement("span",null,"PROJECT UNIVERSE")),J.createElement("div",{className:"project-list"},mv.map((d,m)=>J.createElement("article",{className:"project","data-reveal":!0,key:d.title},J.createElement("div",{className:"project-index"},d.n),J.createElement("div",{className:"project-main"},J.createElement("p",{className:"eyebrow"},d.kicker),J.createElement("h3",null,d.title),J.createElement("p",null,d.desc),J.createElement("div",{className:"tags"},d.tags.map(p=>J.createElement("span",{key:p},p)))),J.createElement("a",{href:d.repo,target:"_blank",rel:"noreferrer",className:"project-link"},"VIEW REPO ",J.createElement(gs,{size:19})),J.createElement("div",{className:"project-glow"})))),J.createElement("a",{className:"all-link",href:Si.github,target:"_blank",rel:"noreferrer"},"EXPLORE FULL CODEBASE ",J.createElement(gs,{size:18}))),J.createElement("section",{id:"build",className:"section process"},J.createElement("div",{className:"section-head","data-reveal":!0},J.createElement("span",null,"04 / METHOD"),J.createElement("span",null,"HOW I BUILD")),J.createElement("div",{className:"process-title","data-reveal":!0},J.createElement("span",null,"IDEA"),J.createElement("b",null,"→"),J.createElement("span",null,"RESEARCH"),J.createElement("b",null,"→"),J.createElement("span",null,"ARCHITECT"),J.createElement("b",null,"→"),J.createElement("span",null,"BUILD"),J.createElement("b",null,"→"),J.createElement("span",null,"SHIP")),J.createElement("div",{className:"process-cards"},[["01","IDEATE","Start with the problem, not the framework."],["02","ARCHITECT","Break the product into models, APIs, data and interfaces."],["03","BUILD","Prototype fast, test the edges and keep the feedback loop short."],["04","SHIP","Turn experiments into reliable, usable systems."]].map(d=>J.createElement("div",{className:"process-card","data-reveal":!0,key:d[0]},J.createElement("span",null,d[0]),J.createElement("h4",null,d[1]),J.createElement("p",null,d[2]))))),J.createElement("section",{className:"section social"},J.createElement("div",{className:"section-head","data-reveal":!0},J.createElement("span",null,"05 / BUILDING IN PUBLIC"),J.createElement("span",null,"SOCIAL SIGNAL")),J.createElement("div",{className:"social-grid"},IA.map((d,m)=>J.createElement("a",{href:d.href,target:"_blank",rel:"noreferrer",className:"post","data-reveal":!0,key:d.title},J.createElement("div",{className:"post-top"},J.createElement("span",null,d.type),J.createElement(gs,{size:18})),J.createElement("div",null,J.createElement("h3",null,d.title),J.createElement("p",null,d.text)),J.createElement("div",{className:"post-number"},"0",m+1)))),J.createElement("div",{className:"social-links","data-reveal":!0},J.createElement("a",{href:Si.instagram,target:"_blank",rel:"noreferrer"},J.createElement(dv,null)," @build.with_varsshan"),J.createElement("a",{href:Si.linkedin,target:"_blank",rel:"noreferrer"},J.createElement(pv,null)," LinkedIn / Amirtha Varsshann"))),J.createElement("section",{className:"section github-section"},J.createElement("div",{className:"section-head","data-reveal":!0},J.createElement("span",null,"06 / CODEBASE"),J.createElement("span",null,"GITHUB LIVE")),J.createElement("div",{className:"github-intro","data-reveal":!0},J.createElement("div",null,J.createElement("p",{className:"eyebrow"},"OPEN SOURCE / EXPERIMENTS"),J.createElement("h2",null,"THE CODE",J.createElement("br",null),J.createElement("em",null,"BEHIND")," THE BUILDS.")),J.createElement("a",{className:"primary",href:Si.github,target:"_blank",rel:"noreferrer"},J.createElement(Th,{size:17})," OPEN GITHUB ",J.createElement(gs,{size:17}))),J.createElement("div",{className:"repo-grid"},(i.length?i:mv.slice(0,4).map(d=>({name:d.title,description:d.desc,html_url:d.repo,language:d.tags[0],stargazers_count:0}))).map((d,m)=>J.createElement("a",{href:d.html_url,target:"_blank",rel:"noreferrer",className:"repo","data-reveal":!0,key:d.name+m},J.createElement("span",null,"0",m+1),J.createElement("div",null,J.createElement("h4",null,d.name),J.createElement("p",null,d.description||"Experimental engineering project.")),J.createElement("small",null,d.language||"BUILD"),J.createElement(gs,{size:18}))))),J.createElement("section",{id:"contact",className:"section contact"},J.createElement("div",{className:"contact-orb"},J.createElement("div",{className:"orb-ring r1"}),J.createElement("div",{className:"orb-ring r2"}),J.createElement("div",{className:"orb-ring r3"}),J.createElement("span",null,"AV")),J.createElement("div",{className:"contact-copy","data-reveal":!0},J.createElement("p",{className:"eyebrow"},"07 / NEXT BUILD"),J.createElement("h2",null,"LET'S BUILD",J.createElement("br",null),J.createElement("em",null,"SOMETHING"),J.createElement("br",null),"USEFUL."),J.createElement("p",null,"Have an idea, a product problem or an AI system worth exploring?"),J.createElement("a",{className:"primary",href:"mailto:hello@amirthavarsshann.dev"},J.createElement(NA,{size:17})," START A CONVERSATION ",J.createElement(gs,{size:17}))))),J.createElement("footer",null,J.createElement("span",null,"© 2026 AMIRTHA VARSSHAN"),J.createElement("span",null,"AI · ENGINEERING · SYSTEMS"),J.createElement("div",null,J.createElement("a",{href:Si.github,target:"_blank",rel:"noreferrer"},J.createElement(Th,null)),J.createElement("a",{href:Si.instagram,target:"_blank",rel:"noreferrer"},J.createElement(dv,null)),J.createElement("a",{href:Si.linkedin,target:"_blank",rel:"noreferrer"},J.createElement(pv,null)))))}uy.createRoot(document.getElementById("root")).render(J.createElement(FA,null));
