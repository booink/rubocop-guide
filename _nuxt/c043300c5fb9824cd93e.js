(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=120},122:function(t,e,n){"use strict";var r=n(36);n.n(r).a},123:function(t,e,n){(t.exports=n(27)(!1)).push([t.i,"\n.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0\n}\n.__nuxt-error-page .error{max-width:450px\n}\n.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px\n}\n.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px\n}\n.__nuxt-error-page a{color:#7f828b!important;text-decoration:none\n}\n.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px\n}",""])},135:function(t,e,n){"use strict";var r=n(37);n.n(r).a},136:function(t,e,n){(t.exports=n(27)(!1)).push([t.i,"\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999\n}",""])},141:function(t,e,n){t.exports=n.p+"img/7df103a.png"},160:function(t,e,n){"use strict";n.r(e);n(56),n(45),n(46);var r=n(20),o=n.n(r),i=(n(34),n(49),n(99),n(4)),a=n.n(i),s=(n(100),n(101),n(70),n(26),n(51),n(71),n(105),n(117),n(0)),u=(n(79),n(120)),c=u.keys();function l(t){var e=u(t);return e.default||e}var p={},f=!0,h=!1,d=void 0;try{for(var m,v=c[Symbol.iterator]();!(f=(m=v.next()).done);f=!0){var x=m.value;p[x.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=l(x)}}catch(t){h=!0,d=t}finally{try{f||null==v.return||v.return()}finally{if(h)throw d}}var g=p,y=n(21),_=n.n(y),b=n(85),w=n.n(b),C=n(55),k=function(){return n.e(5).then(n.bind(null,167)).then(function(t){return t.default||t})},$=function(){return n.e(6).then(n.bind(null,164)).then(function(t){return t.default||t})},R=function(){return n.e(2).then(n.bind(null,168)).then(function(t){return t.default||t})},E=function(){return n.e(3).then(n.bind(null,166)).then(function(t){return t.default||t})},A=function(){return n.e(8).then(n.bind(null,170)).then(function(t){return t.default||t})},S=function(){return n.e(4).then(n.bind(null,169)).then(function(t){return t.default||t})},T=function(){return n.e(7).then(n.bind(null,165)).then(function(t){return t.default||t})};s.default.use(C.a),window.history.scrollRestoration="manual";var j=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var N=n(86),q=n.n(N).a,O={name:"nuxt-child",functional:!0,props:["keepAlive","keepAliveProps"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var i=n,a=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=a[u]||s,l={};P.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var p={};L.forEach(function(t){"function"==typeof c[t]&&(p[t]=c[t].bind(i))});var f=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(i,t)};var h=[t("router-view",r)];return void 0!==o.keepAlive&&(h=[t("keep-alive",{props:o.keepAliveProps},h)]),t("transition",{props:l,on:p},h)}},P=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],L=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],D={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},M={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},U=(n(122),n(15)),I=Object(U.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);I.options.__file="nuxt-error.vue";var B=I.exports,z=(n(124),n(125),n(126),n(128),n(130),n(131),n(134),function(){return{}});function H(t,e){var n=t.options.data||z;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),_()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function J(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function F(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function G(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function K(t){return Promise.all(G(t,function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[o]=J(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function Q(t){return V.apply(this,arguments)}function V(){return(V=a()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K(e);case 2:return t.abrupt("return",_()({},e,{meta:F(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function X(t,e){return W.apply(this,arguments)}function W(){return(W=a()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/rubocop-guide/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var i=o()(n);if("number"==typeof t||"undefined"!==i&&"object"!==i||(r=n||{},n=t,i=o()(n),t=302),"object"===i&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=at(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,Q(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,Q(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function Y(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function Z(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function tt(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?rt:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,p=i[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(l=s(p[f]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===f?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";for(;null!=(n=nt.exec(t));){var u=n[0],c=n[1],l=n.index;if(a+=t.slice(i,l),i=l+u.length,c)a+=c[1];else{var p=t[i],f=n[2],h=n[3],d=n[4],m=n[5],v=n[6],x=n[7];a&&(r.push(a),a="");var g=null!=f&&null!=p&&p!==f,y="+"===v||"*"===v,_="?"===v||"*"===v,b=n[2]||s,w=d||m;r.push({name:h||o++,prefix:f||"",delimiter:b,optional:_,repeat:y,partial:g,asterisk:!!x,pattern:w?it(w):x?".*":"[^"+ot(b)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&r.push(a);return r}(t,e))}function et(t,e){var n={},r=_()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var nt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function rt(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function ot(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function it(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function at(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,i=t.split("/"),a=(n?n+"://":"//")+i.shift(),s=i.filter(Boolean).join("/");return 2===(i=s.split("#")).length&&(s=i[0],o=i[1]),a+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=o?"#"+o:""}var st={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||tt(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:O,NuxtError:B}},ut={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"#fff",failedColor:"red"}},methods:{start:function(){var t=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){t.show=!0,t._cut=1e4/Math.floor(t.duration),t._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100)},this.throttle),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){t.show=!1,s.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},ct=(n(135),Object(U.a)(ut,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,null,null,null));ct.options.__file="nuxt-loading.vue";var lt=ct.exports,pt=(n(137),n(139),[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar header has-shadow is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[this._v("Rubocop Guide")]),this._v(" "),e("div",{staticClass:"navbar-burger"},[e("span"),this._v(" "),e("span"),this._v(" "),e("span")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"content has-text-centered"},[r("p",[r("img",{attrs:{src:n(141),alt:"Buefy",height:"28",width:"50"}}),t._v(" "),r("strong",[t._v("Bulma")]),t._v(" by "),r("a",{attrs:{href:"https://jgthms.com"}},[t._v("Jeremy Thomas")]),t._v(". The source code is licensed\n        "),r("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". The website content\n        is licensed "),r("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[t._v("CC BY NC SA 4.0")]),t._v(".\n      ")])])])}]),ft={data:function(){return{items:[{title:"Bundler",to:{name:"Bundler"}},{title:"Correctors",to:{name:"Correctors"}},{title:"Gemspec",to:{name:"Gemspec"}},{title:"Generator",to:{name:"Generator"}},{title:"InternalAffairs",to:{name:"InternalAffairs"}},{title:"Layout",to:{name:"Layout"}},{title:"Lint",to:{name:"Lint"}},{title:"Metrics",to:{name:"Metrics"}},{title:"Mixin",to:{name:"Mixin"}},{title:"Naming",to:{name:"Naming"}},{title:"Performance",to:{name:"Performance"}},{title:"Rails",to:{name:"Rails"}},{title:"Security",to:{name:"Security"}},{title:"Style",to:{name:"Style"}},{title:"VariableForce",to:{name:"VariableForce"}}]}}},ht=Object(U.a)(ft,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("section",{staticClass:"main-content columns"},[n("aside",{staticClass:"column is-2 section"},[n("ul",{staticClass:"menu-list"},t._l(t.items,function(e,r){return n("li",{key:r},[n("nuxt-link",{attrs:{to:e.to,"exact-active-class":"is-active"}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1)}))]),t._v(" "),n("div",{staticClass:"container column is-10"},[n("nuxt")],1)]),t._v(" "),t._m(1)])},pt,!1,null,null,null);ht.options.__file="default.vue";var dt={_default:ht.exports},mt={head:{title:"rubocop_guide",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Guide to Rubocop from ruby"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",type:"text/css",href:"//cdn.materialdesignicons.com/2.4.85/css/materialdesignicons.min.css"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),i=t("transition",{props:{name:"layout",mode:"out-in"}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,i])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&dt["_"+t]||(t="default"),this.layoutName=t,this.layout=dt["_"+t],this.layout},loadLayout:function(t){return t&&dt["_"+t]||(t="default"),Promise.resolve(dt["_"+t])}},components:{NuxtLoading:lt}},vt=n(87),xt=n.n(vt);s.default.use(xt.a,{css:!0,materialDesignIcons:!0,materialDesignIconsHRef:"//cdn.materialdesignicons.com/2.4.85/css/materialdesignicons.min.css"});for(var gt=n(88),yt=n.n(gt),_t={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,i=void 0;try{for(var a,s=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;if(!e)return void delete this.defaults.headers[u][t];this.defaults.headers[u][t]=e}}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||Promise.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||Promise.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},bt=["request","delete","get","head","options","post","put","patch"],wt=function(){var t=bt[Ct];_t["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},Ct=0;Ct<bt.length;Ct++)wt();var kt=function(t,e){var n={baseURL:"http://localhost:5555/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host;var r=yt.a.create(n);!function(t){for(var e in _t)t[e]=_t[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var i=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=i,t.defaults.onDownloadProgress=i}(r),t.$axios=r,e("axios",r)};s.default.component(q.name,q),s.default.component(O.name,O),s.default.component(D.name,D),s.default.component(st.name,st),s.default.use(w.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var $t={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function Rt(){return(Rt=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new C.a({mode:"history",base:"/rubocop-guide/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:j,routes:[{path:"/Style",component:k,children:[{path:"",component:$,name:"Style"}]},{path:"/Lint",component:R,name:"Lint",children:[{path:"UriEscapeUnescape",component:E,name:"Lint-UriEscapeUnescape"}]},{path:"/inspire",component:A,name:"inspire"},{path:"/Naming/HeredocDelimiterNaming",component:S,name:"Naming-HeredocDelimiterNaming"},{path:"/",component:T,name:"index"}],fallback:!1});case 2:return n=t.sent,r=_()({router:n,nuxt:{defaultTransition:$t,transitions:[$t],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},$t,{name:t}):Object.assign({},$t,t):$t}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},mt),o=e?e.next:function(t){return r.router.push(t)},e?i=n.resolve(e.url).route:(a=Z(n.options.base),i=n.resolve(a).route),t.next=8,X(r,{route:i,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:u=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.default[n]||(s.default[n]=!0,s.default.use(function(){s.default.prototype.hasOwnProperty(t)||Object.defineProperty(s.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},t.next=12;break;case 12:if("function"!=typeof kt){t.next=15;break}return t.next=15,kt(r.context,u);case 15:t.next=18;break;case 18:return t.abrupt("return",{app:r,router:n});case 19:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var Et,At,St=[],Tt=window.__NUXT__||{};function jt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Nt(t,e,n){return qt.apply(this,arguments)}function qt(){return(qt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Et.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?et(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,K(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return a._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},i=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:i,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Ot(t,e){return Tt.serverRendered&&e&&H(t,e),t._Ctor=t,t}function Pt(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof g[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g[t])}),!i)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():Y(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Lt(t,e,n){return Dt.apply(this,arguments)}function Dt(){return(Dt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i,a,u,c,l,p,f,h,d,m,v,x,g,y,_,b=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return St=e===n?[]:F(n,o=[]).map(function(t,e){return tt(n.matched[o[e]].path)(n.params)}),i=!1,a=function(t){n.path===t.path&&b.$loading.finish&&b.$loading.finish(),n.path!==t.path&&b.$loading.pause&&b.$loading.pause(),i||(i=!0,r(t))},t.next=7,X(Et,{route:e,from:n,next:a.bind(this)});case 7:if(this._dateLastError=Et.nuxt.dateErr,this._hadError=!!Et.nuxt.err,(c=F(e,u=[])).length){t.next=25;break}return t.next=14,Pt.call(this,c,Et.context);case 14:if(!i){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof B.layout?B.layout(Et.context):B.layout);case 18:return l=t.sent,t.next=21,Pt.call(this,c,Et.context,l);case 21:if(!i){t.next=23;break}return t.abrupt("return");case 23:return Et.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(jt(c,e,n)),t.prev=27,t.next=30,Pt.call(this,c,Et.context);case 30:if(!i){t.next=32;break}return t.abrupt("return");case 32:if(!Et.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(p=c[0].options.layout)&&(p=p(Et.context)),t.next=38,this.loadLayout(p);case 38:return p=t.sent,t.next=41,Pt.call(this,c,Et.context,p);case 41:if(!i){t.next=43;break}return t.abrupt("return");case 43:if(!Et.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,h=!0,d=!1,m=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(h=(x=v.next()).done){t.next=64;break}if("function"==typeof(g=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(Et.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:h=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,m=t.t0;case 70:t.prev=70,t.prev=71,h||null==v.return||v.return();case 73:if(t.prev=73,!d){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=tt(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,b._pathChanged&&b._queryChanged||t._path!==St[n])t._dataRefresh=!0;else if(!b._pathChanged&&b._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return b._diffQuery[t]}))}if(!b._hadError&&b._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],i=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=i&&a?30:45;if(i){var c=Y(t.options.asyncData,Et.context).then(function(e){H(t,e),b.$loading.increase&&b.$loading.increase(s)});o.push(c)}if(b.$loading.manual=!1===t.options.loading,a){var l=t.options.fetch(Et.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){b.$loading.increase&&b.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:i||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return St=[],y=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||y||500,w=t.t2,s.default.config.errorHandler&&s.default.config.errorHandler(w),"function"==typeof(_=B.layout)&&(_=_(Et.context)),t.next=108,this.loadLayout(_);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var w},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Mt(t,e){G(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.default.extend(t))._Ctor=t,n.components[r]=t),t})}function Ut(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?B.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Et.context)),this.setLayout(e)}function It(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.default.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=F(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.default.set(t.$data,r,n[r])}}),Ut.call(n,t)})}function Bt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),At.afterEach(function(e,n){s.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function zt(){return(zt=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Et=e.app,At=e.router,t.next=4,Promise.all((void 0,c=Z((u=At).options.base,u.options.mode),G(u.match(c),function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o,i){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return a=Ot(J(e),Tt.data?Tt.data[i]:null),r.components[o]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,i){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new s.default(Et),o=Tt.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),i=function(){r.$mount("#__nuxt"),s.default.nextTick(function(){Bt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(jt(n,At.currentRoute)),St=At.currentRoute.matched.map(function(t){return tt(t.path)(At.currentRoute.params)})),r.$loading={},Tt.error&&r.error(Tt.error),At.beforeEach(Nt.bind(r)),At.beforeEach(Lt.bind(r)),At.afterEach(Mt),At.afterEach(It.bind(r)),!Tt.serverRendered){t.next=22;break}return i(),t.abrupt("return");case 22:Lt.call(r,At.currentRoute,At.currentRoute,function(t){if(!t)return Mt(At.currentRoute,At.currentRoute),Ut.call(r,At.currentRoute),void i();At.push(t,function(){return i()},function(t){if(!t)return i();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.default.config,{silent:!0,performance:!1}),function(t){return Rt.apply(this,arguments)}().then(function(t){return zt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},36:function(t,e,n){var r=n(123);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(28).default)("45b1ddea",r,!0,{sourceMap:!1})},37:function(t,e,n){var r=n(136);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(28).default)("fd547dac",r,!0,{sourceMap:!1})},89:function(t,e,n){t.exports=n(160)}},[[89,9,1,10]]]);