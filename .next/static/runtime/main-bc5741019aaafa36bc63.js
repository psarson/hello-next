(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"+oT+":function(e,t,n){var r=n("eVuF");function a(e,t,n,a,o,u,i){try{var l=e[u](i),s=l.value}catch(c){return void n(c)}l.done?t(s):r.resolve(s).then(a,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new r(function(r,o){var u=e.apply(t,n);function i(e){a(u,r,o,i,l,"next",e)}function l(e){a(u,r,o,i,l,"throw",e)}i(void 0)})}}},"+wdc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=null,a=!1,o=3,u=-1,i=-1,l=!1,s=!1;function c(){if(!l){var e=r.expirationTime;s?E():s=!0,k(p,e)}}function f(){var e=r,t=r.next;if(r===t)r=null;else{var n=r.previous;r=n.next=t,t.previous=n}e.next=e.previous=null,n=e.callback,t=e.expirationTime,e=e.priorityLevel;var a=o,u=i;o=e,i=t;try{var l=n()}finally{o=a,i=u}if("function"===typeof l)if(l={callback:l,priorityLevel:e,expirationTime:t,next:null,previous:null},null===r)r=l.next=l.previous=l;else{n=null,e=r;do{if(e.expirationTime>=t){n=e;break}e=e.next}while(e!==r);null===n?n=r:n===r&&(r=l,c()),(t=n.previous).next=n.previous=l,l.next=n,l.previous=t}}function d(){if(-1===u&&null!==r&&1===r.priorityLevel){l=!0;try{do{f()}while(null!==r&&1===r.priorityLevel)}finally{l=!1,null!==r?c():s=!1}}}function p(e){l=!0;var n=a;a=e;try{if(e)for(;null!==r;){var o=t.unstable_now();if(!(r.expirationTime<=o))break;do{f()}while(null!==r&&r.expirationTime<=o)}else if(null!==r)do{f()}while(null!==r&&!C())}finally{l=!1,a=n,null!==r?c():s=!1,d()}}var v,h,m=Date,y="function"===typeof setTimeout?setTimeout:void 0,g="function"===typeof clearTimeout?clearTimeout:void 0,_="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,w="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function x(e){v=_(function(t){g(h),e(t)}),h=y(function(){w(v),e(t.unstable_now())},100)}if("object"===typeof performance&&"function"===typeof performance.now){var b=performance;t.unstable_now=function(){return b.now()}}else t.unstable_now=function(){return m.now()};var k,E,C,T=null;if((T=window)&&T._schedMock){var P=T._schedMock;k=P[0],E=P[1],C=P[2],t.unstable_now=P[3]}else if("function"!==typeof MessageChannel){var I=null,M=function(e){if(null!==I)try{I(e)}finally{I=null}};k=function(e){null!==I?setTimeout(k,0,e):(I=e,setTimeout(M,0,!1))},E=function(){I=null},C=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof _&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof w&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var L=null,R=!1,S=-1,D=!1,A=!1,O=0,q=33,B=33;C=function(){return O<=t.unstable_now()};var K=new MessageChannel,N=K.port2;K.port1.onmessage=function(){R=!1;var e=L,n=S;L=null,S=-1;var r=t.unstable_now(),a=!1;if(0>=O-r){if(!(-1!==n&&n<=r))return D||(D=!0,x(F)),L=e,void(S=n);a=!0}if(null!==e){A=!0;try{e(a)}finally{A=!1}}};var F=function(e){if(null!==L){x(F);var t=e-O+B;t<B&&q<B?(8>t&&(t=8),B=t<q?q:t):q=t,O=e+B,R||(R=!0,N.postMessage(void 0))}else D=!1};k=function(e,t){L=e,S=t,A||0>t?N.postMessage(void 0):D||(D=!0,x(F))},E=function(){L=null,R=!1,S=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=o,a=u;o=e,u=t.unstable_now();try{return n()}finally{o=r,u=a,d()}},t.unstable_next=function(e){switch(o){case 1:case 2:case 3:var n=3;break;default:n=o}var r=o,a=u;o=n,u=t.unstable_now();try{return e()}finally{o=r,u=a,d()}},t.unstable_scheduleCallback=function(e,n){var a=-1!==u?u:t.unstable_now();if("object"===typeof n&&null!==n&&"number"===typeof n.timeout)n=a+n.timeout;else switch(o){case 1:n=a+-1;break;case 2:n=a+250;break;case 5:n=a+1073741823;break;case 4:n=a+1e4;break;default:n=a+5e3}if(e={callback:e,priorityLevel:o,expirationTime:n,next:null,previous:null},null===r)r=e.next=e.previous=e,c();else{a=null;var i=r;do{if(i.expirationTime>n){a=i;break}i=i.next}while(i!==r);null===a?a=r:a===r&&(r=e,c()),(n=a.previous).next=a.previous=e,e.next=a,e.previous=n}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)r=null;else{e===r&&(r=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=o;return function(){var r=o,a=u;o=n,u=t.unstable_now();try{return e.apply(this,arguments)}finally{o=r,u=a,d()}}},t.unstable_getCurrentPriorityLevel=function(){return o},t.unstable_shouldYield=function(){return!a&&(null!==r&&r.expirationTime<i||C())},t.unstable_continueExecution=function(){null!==r&&c()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return r}},"0KLy":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("p0XB")),o=r(n("0iUn")),u=r(n("sLSF")),i=r(n("MI3g")),l=r(n("a7VT")),s=r(n("Tit0")),c=r(n("XXOK")),f=r(n("UXZV")),d=r(n("eVuF")),p=r(n("pLtp")),v=function(e){return e&&e.__esModule?e:{default:e}};(0,r(n("hfKm")).default)(t,"__esModule",{value:!0});var h=v(n("q1tI")),m=n("Q0KE"),y=[],g=[],_=!1;function w(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function x(e){var t={loading:!1,loaded:{},error:null},n=[];try{(0,p.default)(e).forEach(function(r){var a=w(e[r]);a.loading?t.loading=!0:(t.loaded[r]=a.loaded,t.error=a.error),n.push(a.promise),a.promise.then(function(e){t.loaded[r]=e}).catch(function(e){t.error=e})})}catch(r){t.error=r}return t.promise=d.default.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function b(e,t){return h.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function k(e,t){var n,r=(0,f.default)({loader:null,loading:null,delay:200,timeout:null,render:b,webpack:null,modules:null},t),d=null;function p(){return d||(d=e(r.loader)),d.promise}if(!_&&"function"===typeof r.webpack){var v=r.webpack();g.push(function(e){var t=!0,n=!1,r=void 0;try{for(var a,o=(0,c.default)(v);!(t=(a=o.next()).done);t=!0){var u=a.value;if(-1!==e.indexOf(u))return p()}}catch(i){n=!0,r=i}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}})}return(n=function(t){function n(t){var a;return(0,o.default)(this,n),(a=(0,i.default)(this,(0,l.default)(n).call(this,t))).retry=function(){a.setState({error:null,loading:!0,timedOut:!1}),d=e(r.loader),a._loadModule()},p(),a.state={error:d.error,pastDelay:!1,timedOut:!1,loading:d.loading,loaded:d.loaded},a}return(0,s.default)(n,t),(0,u.default)(n,[{key:"componentWillMount",value:function(){this._mounted=!0,this._loadModule()}},{key:"_loadModule",value:function(){var e=this;if(this.context&&(0,a.default)(r.modules)&&r.modules.forEach(function(t){e.context(t)}),d.loading){"number"===typeof r.delay&&(0===r.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},r.timeout));var t=function(){e._mounted&&(e.setState({error:d.error,loaded:d.loaded,loading:d.loading}),e._clearTimeouts())};d.promise.then(function(){t()}).catch(function(e){t()})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this._clearTimeouts()}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"render",value:function(){return this.state.loading||this.state.error?h.default.createElement(r.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?r.render(this.state.loaded,this.props):null}}],[{key:"preload",value:function(){return p()}}]),n}(h.default.Component)).contextType=m.LoadableContext,n}function E(e){return k(w,e)}function C(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return d.default.all(n).then(function(){if(e.length)return C(e,t)})}E.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return k(x,e)},E.preloadAll=function(){return new d.default(function(e,t){C(y).then(e,t)})},E.preloadReady=function(e){return new d.default(function(t){var n=function(){return _=!0,t()};C(g,e).then(n,n)})},t.default=E},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),a=n("n3ko");e.exports=n("raTm")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(a(this,"Set"),e=0===e?0:e,e)}},r)},BMP1:function(e,t,n){"use strict";var r=n("5Uuq")(n("IKlv"));window.next=r,(0,r.default)().catch(function(e){console.error(e.message+"\n"+e.stack)})},DqTX:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),o=r(n("sLSF")),u=n("KI45");t.__esModule=!0,t.default=void 0;var i=u(n("eVuF")),l={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},s=function(){function e(){var t=this;(0,a.default)(this,e),this.updateHead=function(e){var n=t.updatePromise=i.default.resolve().then(function(){n===t.updatePromise&&(t.updatePromise=null,t.doUpdateHead(e))})},this.updatePromise=null}return(0,o.default)(e,[{key:"doUpdateHead",value:function(e){var t=this,n={};e.forEach(function(e){var t=n[e.type]||[];t.push(e),n[e.type]=t}),this.updateTitle(n.title?n.title[0]:null);["meta","base","link","style","script"].forEach(function(e){t.updateElements(e,n[e]||[])})}},{key:"updateTitle",value:function(e){var t="";if(e){var n=e.props.children;t="string"===typeof n?n:n.join("")}t!==document.title&&(document.title=t)}},{key:"updateElements",value:function(e,t){var n=document.getElementsByTagName("head")[0],r=Array.prototype.slice.call(n.querySelectorAll(e+".next-head")),a=t.map(c).filter(function(e){for(var t=0,n=r.length;t<n;t++){if(r[t].isEqualNode(e))return r.splice(t,1),!1}return!0});r.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)})}}]),e}();function c(e){var t=e.type,n=e.props,r=document.createElement(t);for(var a in n)if(n.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a){var o=l[a]||a.toLowerCase();r.setAttribute(o,n[a])}var u=n.children,i=n.dangerouslySetInnerHTML;return i?r.innerHTML=i.__html||"":u&&(r.textContent="string"===typeof u?u:u.join("")),r}t.default=s},HohS:function(e,t,n){"use strict";var r;(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0}),t.default=function(){return r},t.setConfig=function(e){r=e}},IClC:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.HeadManagerContext=a.createContext(null)},IKlv:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("ln6h")),o=r(n("0iUn")),u=r(n("sLSF")),i=r(n("MI3g")),l=r(n("a7VT")),s=r(n("Tit0")),c=r(n("doui")),f=n("5Uuq"),d=n("KI45");t.__esModule=!0,t.render=re,t.renderError=oe,t.default=t.emitter=t.ErrorComponent=t.router=t.dataManager=void 0;var p=d(n("+oT+")),v=d(n("htGi")),h=d(n("eVuF")),m=f(n("q1tI")),y=d(n("i8i4")),g=d(n("DqTX")),_=n("nOHt"),w=d(n("kiME")),x=n("Bu4q"),b=d(n("zmvN")),k=f(n("PBx+")),E=d(n("0KLy")),C=n("IClC"),T=n("qS9g"),P=n("9EOK"),I=n("cuFY"),M=n("s4NR"),L=n("kcOw");window.Promise||(window.Promise=h.default);var R=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=R;var S=R.props,D=R.err,A=R.page,O=R.query,q=R.buildId,B=R.dynamicBuildId,K=R.assetPrefix,N=R.runtimeConfig,F=R.dynamicIds,H=JSON.parse(window.__NEXT_DATA__.dataManager),U=new I.DataManager(H);t.dataManager=U;var X=K||"";n.p=X+"/_next/",k.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:N||{}});var j=(0,x.getURL)(),V=new b.default(q,X),G=function(e){var t=(0,c.default)(e,2),n=t[0],r=t[1];return V.registerPage(n,r)};window.__NEXT_P&&window.__NEXT_P.map(G),window.__NEXT_P=[],window.__NEXT_P.push=G;var z,J,Y,W,Q,$=new g.default,Z=document.getElementById("__next");t.router=J,t.ErrorComponent=Y;var ee=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),R.nextExport&&((0,L.isDynamicRoute)(J.pathname)||location.search)&&J.replace(J.pathname+"?"+(0,M.stringify)((0,v.default)({},J.query,(0,M.parse)(location.search.substr(1)))),j)}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(m.default.Component),te=(0,w.default)();t.emitter=te;var ne=function(){var e=(0,p.default)(a.default.mark(function e(n){var r;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(void 0===n?{}:n).webpackHMR,e.next=4,V.loadPage("/_app");case 4:return Q=e.sent,r=D,e.prev=6,e.next=9,V.loadPage(A);case 9:W=e.sent,e.next=14;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),r=e.t0;case 19:return e.next=21,E.default.preloadReady(F||[]);case 21:return!0===B&&V.onDynamicBuildId(),t.router=J=(0,_.createRouter)(A,O,j,{initialProps:S,pageLoader:V,App:Q,Component:W,err:r,subscription:function(e,t){re({App:t,Component:e.Component,props:e.props,err:e.err,emitter:te})}}),re({App:Q,Component:W,props:S,err:r,emitter:te}),e.abrupt("return",te);case 25:case"end":return e.stop()}},e,null,[[6,16]])}));return function(t){return e.apply(this,arguments)}}();function re(e){return ae.apply(this,arguments)}function ae(){return(ae=(0,p.default)(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,oe(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,se(t);case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(4),e.next=13,oe((0,v.default)({},t,{err:e.t0}));case 13:case"end":return e.stop()}},e,null,[[4,9]])}))).apply(this,arguments)}function oe(e){return ue.apply(this,arguments)}function ue(){return(ue=(0,p.default)(a.default.mark(function e(n){var r,o,u;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=n.App,o=n.err,e.next=3;break;case 3:return console.error(o),e.next=6,V.loadPage("/_error");case 6:if(t.ErrorComponent=Y=e.sent,!n.props){e.next=11;break}e.t0=n.props,e.next=14;break;case 11:return e.next=13,(0,x.loadGetInitialProps)(r,{Component:Y,router:J,ctx:{err:o,pathname:A,query:O,asPath:j}});case 13:e.t0=e.sent;case 14:return u=e.t0,e.next=17,se((0,v.default)({},n,{err:o,Component:Y,props:u}));case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}t.default=ne;var ie="function"===typeof y.default.hydrate;function le(e){var t=e.children;return m.default.createElement(ee,{fn:function(e){return oe({App:Q,err:e}).catch(function(e){return console.error("Error rendering page: ",e)})}},m.default.createElement(m.Suspense,{fallback:m.default.createElement("div",null,"Loading...")},m.default.createElement(P.RouterContext.Provider,{value:(0,_.makePublicRouterInstance)(J)},m.default.createElement(T.DataManagerContext.Provider,{value:U},m.default.createElement(C.HeadManagerContext.Provider,{value:$.updateHead},t)))))}function se(e){return ce.apply(this,arguments)}function ce(){return(ce=(0,p.default)(a.default.mark(function e(t){var n,r,o,u,i,l,s,c,f;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.App,r=t.Component,o=t.props,u=t.err,o||!r||r===Y||z.Component!==Y){e.next=6;break}return l=(i=J).pathname,s=i.query,c=i.asPath,e.next=5,(0,x.loadGetInitialProps)(n,{Component:r,router:J,ctx:{err:u,pathname:l,query:s,asPath:c}});case 5:o=e.sent;case 6:r=r||z.Component,o=o||z.props,f=(0,v.default)({Component:r,err:u,router:J},o),z=f,te.emit("before-reactdom-render",{Component:r,ErrorComponent:Y,appProps:f}),a=m.default.createElement(le,null,m.default.createElement(n,f)),d=Z,ie?(y.default.hydrate(a,d),ie=!1):y.default.render(a,d),te.emit("after-reactdom-render",{Component:r,ErrorComponent:Y,appProps:f});case 13:case"end":return e.stop()}var a,d},e)}))).apply(this,arguments)}},"PBx+":function(e,t,n){e.exports=n("HohS")},Q0KE:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.LoadableContext=a.createContext(null)},QCnb:function(e,t,n){"use strict";e.exports=n("+wdc")},"V+O7":function(e,t,n){n("aPfg")("Set")},cuFY:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("LX0d")),o=r(n("0iUn")),u=r(n("sLSF"));(0,r(n("hfKm")).default)(t,"__esModule",{value:!0});var i=function(){function e(t){(0,o.default)(this,e),this.data=new a.default(t)}return(0,u.default)(e,[{key:"getData",value:function(){return this.data}},{key:"get",value:function(e){return this.data.get(e)}},{key:"set",value:function(e,t){this.data.set(e,t)}},{key:"overwrite",value:function(e){this.data=new a.default(e)}}]),e}();t.DataManager=i},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest,o=[],u=[],i={},l=function(){return{ok:2==(a.status/100|0),statusText:a.statusText,status:a.status,url:a.responseURL,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(JSON.parse(a.responseText))},blob:function(){return Promise.resolve(new Blob([a.response]))},clone:l,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var s in a.open(t.method||"get",e,!0),a.onload=function(){a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){o.push(t=t.toLowerCase()),u.push([t,n]),i[t]=i[t]?i[t]+","+n:n}),n(l())},a.onerror=r,a.withCredentials="include"==t.credentials,t.headers)a.setRequestHeader(s,t.headers[s]);a.send(t.body||null)})}},qS9g:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.DataManagerContext=a.createContext(null)},ttDY:function(e,t,n){e.exports=n("+iuc")},xvv9:function(e,t,n){n("cHUd")("Set")},zmvN:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("ln6h")),o=r(n("0iUn")),u=r(n("sLSF")),i=n("KI45");t.__esModule=!0,t.default=void 0;var l=i(n("+oT+")),s=i(n("eVuF")),c=i(n("ttDY")),f=i(n("kiME")),d=i(n("m/Gl"));var p=function(e){if(!e||!e.supports)return!1;try{return e.supports("preload")}catch(t){return!1}}(document.createElement("link").relList),v=function(){function e(t,n){(0,o.default)(this,e),this.buildId=t,this.assetPrefix=n,this.pageCache={},this.prefetchCache=new c.default,this.pageRegisterEvents=(0,f.default)(),this.loadingRoutes={},this.promisedBuildId=s.default.resolve()}return(0,u.default)(e,[{key:"normalizeRoute",value:function(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'+e+'"');return"/"===(e=e.replace(/\/index$/,"/"))?e:e.replace(/\/$/,"")}},{key:"loadPage",value:function(e){var t=this;return e=this.normalizeRoute(e),new s.default(function(n,r){var a=t.pageCache[e];if(a){var o=a.error,u=a.page;o?r(o):n(u)}else t.pageRegisterEvents.on(e,function a(o){var u=o.error,i=o.page;t.pageRegisterEvents.off(e,a),delete t.loadingRoutes[e],u?r(u):n(i)}),document.getElementById("__NEXT_PAGE__"+e)||t.loadingRoutes[e]||(t.loadScript(e),t.loadingRoutes[e]=!0)})}},{key:"onDynamicBuildId",value:function(){var e=this;this.promisedBuildId=new s.default(function(t){(0,d.default)(e.assetPrefix+"/_next/static/HEAD_BUILD_ID").then(function(e){if(e.ok)return e;var t=new Error("Failed to fetch HEAD buildId");throw t.res=e,t}).then(function(e){return e.text()}).then(function(t){e.buildId=t.trim()}).catch(function(){console.warn("Failed to load BUILD_ID from server. The following client-side page transition will likely 404 and cause a SSR.\nhttp://err.sh/zeit/next.js/head-build-id")}).then(t,t)})}},{key:"loadScript",value:function(e){var t=this;return(0,l.default)(a.default.mark(function n(){var r,o,u;return a.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.promisedBuildId;case 2:e=t.normalizeRoute(e),r="/"===e?"/index.js":e+".js",o=document.createElement("script"),u=t.assetPrefix+"/_next/static/"+encodeURIComponent(t.buildId)+"/pages"+r,o.crossOrigin=void 0,o.src=u,o.onerror=function(){var n=new Error("Error loading script "+u);n.code="PAGE_LOAD_ERROR",t.pageRegisterEvents.emit(e,{error:n})},document.body.appendChild(o);case 10:case"end":return n.stop()}},n)}))()}},{key:"registerPage",value:function(e,t){var n=this;!function(){try{var r=t(),a=r.error,o=r.page;n.pageCache[e]={error:a,page:o},n.pageRegisterEvents.emit(e,{error:a,page:o})}catch(a){n.pageCache[e]={error:a},n.pageRegisterEvents.emit(e,{error:a})}}()}},{key:"prefetch",value:function(e){var t=this;return(0,l.default)(a.default.mark(function n(){var r,o;return a.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.normalizeRoute(e),r=("/"===e?"/index":e)+".js",!t.prefetchCache.has(r)&&!document.getElementById("__NEXT_PAGE__"+e)){n.next=4;break}return n.abrupt("return");case 4:if(t.prefetchCache.add(r),!("connection"in navigator)){n.next=8;break}if(-1===(navigator.connection.effectiveType||"").indexOf("2g")&&!navigator.connection.saveData){n.next=8;break}return n.abrupt("return");case 8:if(!p){n.next=18;break}return n.next=11,t.promisedBuildId;case 11:return(o=document.createElement("link")).rel="preload",o.crossOrigin=void 0,o.href=t.assetPrefix+"/_next/static/"+encodeURIComponent(t.buildId)+"/pages"+r,o.as="script",document.head.appendChild(o),n.abrupt("return");case 18:if("complete"!==document.readyState){n.next=22;break}return n.abrupt("return",t.loadPage(e).catch(function(){}));case 22:return n.abrupt("return",new s.default(function(n){window.addEventListener("load",function(){t.loadPage(e).then(function(){return n()},function(){return n()})})}));case 23:case"end":return n.stop()}},n)}))()}},{key:"clearCache",value:function(e){e=this.normalizeRoute(e),delete this.pageCache[e],delete this.loadingRoutes[e];var t=document.getElementById("__NEXT_PAGE__"+e);t&&t.parentNode.removeChild(t)}}]),e}();t.default=v}},[["BMP1",1,0]]]);