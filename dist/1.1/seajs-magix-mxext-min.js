define("magix/magix",function(){var e=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,t=/\/[^\/]*$/,r=/[#?].*$/,n="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,s=0,c="/",f="vframe",u=function(){},v={tagName:f,rootId:"magix_vf_root",execError:u},l={}.hasOwnProperty,m=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=b.isObject(t)?p(e,t):g(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},h=function(e){var t=this;t.c=[],t.x=e||20,t.b=t.x+5},d=function(e){return new h(e)},g=function(e,t){return e?l.call(e,t):e},p=function(e,t,r){for(var n in t)r&&g(r,n)||(e[n]=t[n]);return e};p(h.prototype,{get:function(e){var t,r=this,n=r.c;return e=a+e,g(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=s++,t=t.v)),t},set:function(e,t){var r=this,n=r.c;e=a+e;var i=n[e];if(!g(n,e)){if(n.length>=r.b){n.sort(function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f});for(var o=r.b-r.x;o--;)i=n.pop(),delete n[i.k]}i={},n.push(i),n[e]=i}return i.k=e,i.v=t,i.f=1,i.t=s++,i},del:function(e){e=a+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=n,delete t[e])},has:function(e){return e=a+e,g(this.c,e)}});var x=d(60),y=d(),w=function(e,t,r,n,i,a){for(b.isArray(e)||(e=[e]),t&&(b.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){v.execError(o)}return i},b={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:p,has:g,safeExec:w,noop:u,config:m(v),start:function(e){var t=this;p(v,e),t.libRequire(v.iniFile,function(r){v=p(v,r,e),v.tagNameChanged=v.tagName!=f;var n=v.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(v.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)g(e,r)&&t.push(r);return t},local:m({}),path:function(i,a){var s=i+"\n"+a,f=y.get(s);if(!f){if(o.test(a))f=a;else if(i=i.replace(r,n).replace(t,n)+c,a.charAt(0)==c){var u=o.test(i)?8:0,v=i.indexOf(c,u);f=i.substring(0,v)+a}else f=i+a;for(;e.test(f);)f=f.replace(e,"$1/");y.set(s,f)}return f},pathToObject:function(e,t){var s=x.get(e);if(!s){s={};var f={},u=n;r.test(e)?u=e.replace(r,n):~e.indexOf("=")||(u=e);var v=e.replace(u,n);if(u&&o.test(u)){var l=u.indexOf(c,8);u=-1==l?c:u.substring(l)}v.replace(i,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}f[r]=n}),s[a]=u,s.params=f,x.set(e,s)}return s},objectToPath:function(e,t){var r,n=e[a],i=[],o=e.params;for(var s in o)r=o[s],t&&encodeURIComponent(r),i.push(s+"="+r);return i.length&&(n=n+"?"+i.join("&")),n},listToMap:function(e,t){var r,n,i,a={};if(b.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:d},C=Object.prototype.toString;return p(b,{libRequire:function(e,t){e?seajs.use(e,t):t&&t()},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==C.call(e)},isString:function(e){return"[object String]"==C.call(e)},isNumber:function(e){return"[object Number]"==C.call(e)},isRegExp:function(e){return"[object RegExp]"==C.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,b.mix(e.prototype,r),b.mix(e,n),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e){var t,r,n,i,a,o=e("magix/magix"),s=e("magix/event"),c=window,f="",u="pathname",v=o.has,l=o.mix,m=document,h=/^UTF-8$/i.test(m.charset||m.characterSet||"UTF-8"),d=o.config(),g=o.cache(),p=o.cache(),x=/#.*$/,y=/^[^#]*#?!?/,w="params",b=d.nativeHistory,$=function(e,t,r){if(e){r=this[w],o.isArray(e)||(e=e.split(","));for(var n=0;e.length>n&&!(t=v(r,e[n]));n++);}return t},C=function(){return v(this,u)},E=function(){return v(this,"view")},M=function(e,t,r){return t=this,r=t[w],r[e]},T=function(e){var t=o.pathToObject(e,h),r=t[u];return r&&a&&(t[u]=o.path(c.location[u],r)),t},O=l({getView:function(e,t){if(!n){n={rs:d.routes||{},nf:d.notFoundView};var r=d.defaultView;if(!r)throw Error("unset defaultView");n.home=r;var i=d.defaultPathname||f;n.rs[i]=r,n[u]=i}var a;e||(e=n[u]);var s=n.rs;return a=o.isFunction(s)?s.call(d,e,t):s[e],{view:a?a:n.nf||n.home,pathname:a||b?e:n.nf?e:n[u]}},start:function(){var e=O,t=c.history;i=b&&t.pushState,a=b&&!i,i?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||c.location.href;var r=O,n=g.get(e);if(!n){var i=e.replace(x,f),a=e.replace(y,f),o=T(i),s=T(a),v={};l(v,o[w]),l(v,s[w]),n={get:M,href:e,srcQuery:i,srcHash:a,query:o,hash:s,params:v},g.set(e,n)}if(t&&!n.view){var m;m=b?n.hash[u]||n.query[u]:n.hash[u];var h=r.getView(m,n);l(n,h)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=p.get(i);if(a||(i=n+"\n"+i,a=p.get(i)),!a){var o,s,c;a={params:{}},s=e[u],c=t[u],s!=c&&(a[u]={from:s,to:c},o=1),s=e.view,c=t.view,s!=c&&(a.view={from:s,to:c},o=1);var f,v=e[w],l=t[w];for(f in v)s=v[f],c=l[f],v[f]!=l[f]&&(o=1,a[w][f]={from:s,to:c});for(f in l)s=v[f],c=l[f],v[f]!=l[f]&&(o=1,a[w][f]={from:s,to:c});a.occur=o,a.isParam=$,a.isPathname=C,a.isView=E,p.set(i,a)}return a},route:function(){var e=O,n=e.parseQH(0,1),i=r||{params:{},href:"~"},a=!r;r=n;var o=e.getChged(i,n);o.occur&&(t=n,e.fire("changed",{location:n,changed:o,force:a}))},navigate:function(e,r,n){var s=O;if(!r&&o.isObject(e)&&(r=e,e=f),r&&(e=o.objectToPath({params:r,pathname:e},h)),e){var c=T(e),m={};if(m[w]=l({},c[w]),m[u]=c[u],m[u]){if(a){var d=t.query;if(d&&(d=d[w]))for(var g in d)v(d,g)&&!v(m[w],g)&&(m[w][g]=f)}}else{var p=l({},t[w]);m[w]=l(p,m[w]),m[u]=t[u]}var x,y=o.objectToPath(m);x=i?y!=t.srcQuery:y!=t.srcHash,x&&(i?(s.poped=1,history[n?"replaceState":"pushState"](null,null,y),s.route()):(l(m,t,m),m.srcHash=y,m.hash={params:m[w],pathname:m[u]},s.fire("!ul",{loc:t=m}),y="#!"+y,n?location.replace(y):location.hash=y))}}},s);return O.useState=function(){var e=O,t=location.href;c.addEventListener("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())},!1)},O.useHash=function(){c.addEventListener("hashchange",O.route,!1)},O}),define("magix/body",["magix/magix"],function(e){var t,r=e("magix/magix"),n=r.has,i=r.listToMap("submit,focusin,focusout,mouseenter,mouseleave,mousewheel,change"),a=document.body,o={},s=String.fromCharCode(26),c="mx-owner",f="mx-ie",u={},v=65536,l=function(e){return e.id||(e.id="mx-e-"+v--)},m=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},h={process:function(e){for(var r=e.target||e.srcElement;r&&1!=r.nodeType;)r=r.parentNode;var i=r,o=e.type,v=u[o]||(u[o]=RegExp("(?:^|,)"+o+"(?:,|$)"));if(!v.test(m(r,f))){for(var h,d,g="mx-"+o,p=[];i&&i!=a&&(h=m(i,g),d=m(i,f),!h&&!v.test(d));)p.push(i),i=i.parentNode;if(h){var x,y=h.indexOf(s);y>-1&&(x=h.slice(0,y),h=h.slice(y));var w=m(i,c)||x;if(!w)for(var b=i,$=t.all();b&&b!=a;){if(n($,b.id)){m(i,c,w=b.id);break}b=b.parentNode}if(!w)throw Error("miss "+c+":"+h);var C=t.get(w),E=C&&C.view;E&&E.processEvent({info:h,se:e,st:o,tId:l(r),cId:l(i)})}else for(var M;p.length;)M=p.shift(),d=m(M,f),v.test(d)||(d=d?d+","+o:o,m(M,f,d))}},on:function(e,r){var n=this;if(o[e])o[e]++;else{t=r,o[e]=1;var s=i[e];s?n.unbubble(0,a,e):a["on"+e]=function(e){e=e||window.event,e&&n.process(e)}}},un:function(e){var t=this,r=o[e];if(r>0){if(r--,!r){var n=i[e];n?t.unbubble(1,a,e):a["on"+e]=null}o[e]=r}}};return h.unbubble=function(e,t,r){var n=e?"undelegate":"delegate";$(t)[n]("[mx-"+r+"]",r,h.process)},h}),define("magix/event",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,v=c.length,l=v-1;v--;)f=a?v:l-v,u=c[f],(u.d||u.r)&&(c.splice(f,1),l--),u.d||n(u.f,t,s)}i&&delete s[o]},on:function(e,n,i){var a=r(e),o=this[a]||(this[a]=[]);t.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},un:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]}};return i}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e){var t,r,n,i=e("magix/magix"),a=e("magix/event"),o=e("magix/view"),s=document,c=65536,f=i.safeExec,u=[].slice,v=i.mix,l=i.config("tagName"),m=i.config("rootId"),h=!i.config("tagNameChanged"),d=i.has,g="mx-view",p=h?"mx-defer":"mx-vframe",x="alter",y="created",w=function(e){return"object"==typeof e?e:s.getElementById(e)},b=function(e,t,r){return r=w(e),r?r.getElementsByTagName(t):[]},$=function(e){return s.createElement(e)},C=function(e){return e.id||(e.id="magix_vf_"+c--)},E=function(e,t,r){if(e=w(e),t=w(t),e&&t)if(e!==t)try{r=t.contains?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},M=/<script[^>]*>[\s\S]*?<\/script>/gi,T=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={}};return v(T,{root:function(e,r){if(!t){n=r;var i=w(m);i||(i=$(l),i.id=m,s.body.insertBefore(i,s.body.firstChild)),t=new T(m),e.add(t)}return t}}),v(v(T.prototype,a),{mountView:function(e,t,r){var a=this,s=w(a.id);if(s._bak?s._chgd=1:(s._bak=1,s._tmpl=s.innerHTML.replace(M,"")),a.unmountView(),e){var c=i.pathToObject(e),u=c.pathname,l=--a.sign;i.libRequire(u,function(e){if(l==a.sign){var i=a.owner;o.prepare(e);var m=new e({owner:a,id:a.id,$:w,path:u,vom:i,location:n});a.view=m,m.on("interact",function(e){e.tmpl||(s._chgd&&(s.innerHTML=s._tmpl),a.mountZoneVframes(0,0,1)),m.on("rendered",function(){a.mountZoneVframes(0,0,1)}),m.on("prerender",function(){a.unmountZoneVframes(0,1)||a.cAlter()}),m.on("inited",function(){a.viewInited=1,a.fire("viewInited",{view:m}),r&&f(r,m,a)})},0),t=t||{},m.load(v(t,c.params,t))}})}},unmountView:function(){var e=this;if(e.view){r||(r={}),e.unmountZoneVframes(0,1),e.cAlter(r),e.view.destroy();var t=w(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,r=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r){var n=this,i=n.owner,a=i.get(e);return a||(a=new T(e),a.pId=n.id,d(n.cM,e)||n.cC++,n.cM[e]=1,i.add(a)),a.mountView(t,r),a},mountZoneVframes:function(e,t){var r=this,n=e||r.id;r.unmountZoneVframes(n,1);var i=b(n,l),a=i.length,o={};if(a)for(var s,c,f,u,v=0;a>v;v++)if(s=i[v],c=C(s),!d(o,c)&&(f=s.getAttribute(g),u=!s.getAttribute(p),u=u==h,u||f)){r.mountVframe(c,f,t);for(var m,x=b(s,l),y=0,w=x.length;w>y;y++)m=x[y],f=m.getAttribute(g),u=!m.getAttribute(p),u=u==h,u||f||(o[C(m)]=1)}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=r.owner,i=n.get(e);if(i){var a=i.fcc;i.unmountView(),n.remove(e,a),r.fire("destroy");var o=n.get(i.pId);o&&d(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i,a=this;if(e){var o=a.cM,s={};for(i in o)E(i,e)&&(s[i]=1);r=s}else r=a.cM;for(i in r)n=1,a.unmountVframe(i,1);return t||a.cCreated(),n},invokeView:function(e){var t,r=this,n=r.view,i=u.call(arguments,1);return r.viewInited&&n[e]&&(t=f(n[e],i,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(y,e),t.fire(y,e));var n=t.owner;n.vfCreated();var i=t.id,a=n.get(t.pId);a&&!d(a.rM,i)&&(a.rM[i]=a.cM[i],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(x,e),t.fire(x,e));var i=t.owner,a=i.get(t.pId);a&&d(a.rM,n)&&(a.rC--,delete a.rM[n],a.cAlter(e))}},locChged:function(e,t){var r=this,n=r.view;if(n&&n.sign&&n.rendered){var a=n.olChanged(t),o={location:e,changed:t,prevent:function(){this.cs=[]},toChildren:function(e){e=e||[],i.isString(e)&&(e=e.split(",")),this.cs=e}};a&&f(n.locationChange,o,n);for(var s,c=o.cs||i.keys(r.cM),u=0,v=c.length,l=r.owner;v>u;u++)s=l.get(c[u]),s&&s.locChged(e,t)}}}),T}),define("magix/view",function(e){var t=e("magix/magix"),r=e("magix/event"),n=e("magix/body"),i=t.safeExec,a=t.has,o=",",s=[],c=t.noop,f=t.mix,u={render:1,renderUI:1},v="~",l=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},m=t.cache(40),h=/\smx-(?!view|defer|owner)[a-z]+\s*=\s*['"]/g,d=String.fromCharCode(26),g=function(){this.render()},p={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},x=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,y=/(\w+):([^,]+)/g,w=/([$\w]+)<([\w,]+)>/,b=function(e){var t=this;f(t,e),t.sign=1};b.prepare=function(e){var t=this,r=e.superclass;if(r&&t.prepare(r.constructor),!e[v]){e[v]=1,e.extend=t.extend;var n,i,s,f,m,h=e.prototype,g={};for(var p in h)if(a(h,p))if(n=h[p],i=p.match(w))for(s=i[1],f=i[2],f=f.split(o),m=f.length-1;m>-1;m--)i=f[m],g[i]=1,h[s+d+i]=n;else a(u,p)&&n!=c&&(h[p]=l(n));f&&(h.$evts=g)}},f(f(b.prototype,r),{render:c,locationChange:c,init:c,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,o=a(e,"template"),c=function(a){if(n==e.sign){o||(e.template=e.wrapMxEvent(a)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),i(e.init,r,e),e.fire("inited",0,1),i(e.render,s,e);var c=!t&&!e.rendered;c&&(e.rendered=!0,e.fire("primed",null,1))}};t&&!o?e.fetchTmpl(c):c()},beginUpdate:function(){var e=this;e.sign&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign&&(e.rendered||e.fire("primed",0,1),e.rendered=!0,e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(h,"$&"+this.id+d)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;t.isObject(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.keys=i.concat((e+"").split(o))),n.locationChange==c&&(n.locationChange=g)},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},destroy:function(){var e=this;e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1),e.sign=0},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign){var r=e.info,n=e.se,a=m.get(r);a||(a=r.match(x),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(y,function(e,t,r){a.p[t]=r}),m.set(r,a));var o=a.n+d+n.type,s=t[o];if(s){var c=p[a.f];c&&c.call(p,n),i(s,f({currentId:e.cId,targetId:e.tId,type:e.st,domEvent:n,params:a.p},p),t)}}},delegateEvents:function(e){var t=this,r=t.$evts,i=e?n.un:n.on,a=t.vom;for(var o in r)i.call(n,o,a)}});var C,E="?t="+Date.now(),M={},T={};return b.prototype.fetchTmpl=function(e){var t=this,r="template"in t;if(r)e(t.template);else if(a(M,t.path))e(M[t.path]);else{var n=t.path.indexOf("/");if(!C){var o=t.path.substring(0,n);C=seajs.data.paths[o]}var s=t.path.substring(n+1),c=C+s+".html",f=T[c],u=function(r){e(M[t.path]=r)};f?f.push(u):(f=T[c]=[u],$.ajax({url:c+E,success:function(e){i(f,e),delete T[c]},error:function(e,t){i(f,t),delete T[c]}}))}},b.extend=function(e,r,n){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&i(r,arguments,this)};return o.extend=a.extend,t.extend(o,a,e,n)},b}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e){var t=e("magix/vframe"),r=e("magix/magix"),n=e("magix/event"),i=r.has,a=r.mix,o=0,s=0,c=0,f=0,u={},v={},l=r.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,e.owner=l,l.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],l.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&l.fire("progress",{percent:c=e},f=1==e)}},root:function(){return t.root(l,v)},locChged:function(e){var t,r=e.loc;if(r?t=1:r=e.location,a(v,r),!t){var n=l.root(),i=e.changed;i.isView()?n.mountView(r.view):n.locChged(r,i)}}},n);return l}),define("mxext/mmanager",["magix/magix"],function(e){var t=e("magix/magix"),r=t.has,n=t.safeExec,i=t.mix,a=function(e){var r=this;r.$mClass=e,r.$mCache=t.cache(),r.$mCacheKeys={},r.$mMetas={}},o=[].slice,s={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,before:1,after:1},c=function(e,t,r){return function(){return e.apply(t,[t,r].concat(o.call(arguments)))}},f=function(e,t){if(t)for(var r=e.length-1;r>-1;r--)f(e[r]);else{var n=e.$mm;!e.fromCache&&n.used>0&&(e.fromCache=!0),n.used++}},u=function(e){return e&&e.manage},v=function(e){return function(){var t=new h(this),r=arguments,n=r[r.length-1];return u(n)&&(n.manage(t),r=o.call(r,0,-1)),t[e].apply(t,r)}};i(a,{create:function(e){if(!e)throw Error("MManager.create:modelClass ungiven");return new a(e)}});var l={ALL:1,ONE:2,ORDER:4},m=Date.now||function(){return+new Date},h=function(e){this.$host=e,this.$doTask=!1,this.$reqModels={}};return i(h.prototype,{send:function(e,i,a,o){var s=this;if(s.$doTask)return s.next(function(){this.send(e,i,a,o)}),s;s.$doTask=!0;var u=s.$host,v=u.$mCache,h=u.$mCacheKeys,d=s.$reqModels;t.isArray(e)||(e=[e]);var g,p,x,y=e.length,w=0,b=Array(y),$=[],C={},E=[],M=t.isArray(i);M&&($=Array(i.length));for(var T,O=function(e,t,o,c){if(!s.$destroy){w++,delete d[e.id];var u=e.$mm,T=u.cacheKey;if(b[t]=e,o)g=!0,x=!0,p=o,C.msg=o,C[t]=o;else if(x=!1,!T||T&&!v.has(T)){T&&v.set(T,e),u.doneAt=m();var O=u.after,P=u.meta;O&&n(O,[e,P])}if(a==l.ONE){var V=M?i[t]:i;V&&(f(e),$[t]=n(V,[x?C:null,e,C],s))}else if(a==l.ORDER){E[t]={m:e,e:x,s:o};for(var A,j,k=E.i||0;A=E[k];k++)j=M?i[k]:i,f(A.m),A.e&&(C.msg=A.s),$[k]=n(j,[A.e?C:null,A.m,C].concat($),s),A.e&&(C[k]=A.s,E.e=1);E.i=k}if(w>=y&&(g||(C=null),a==l.ALL?(f(b,1),b.unshift(C),$[0]=C,$[1]=n(i,b,s)):$.unshift(C),s.$ntId=setTimeout(function(){s.doNext($)},30)),T&&r(h,T)){var I=h[T].q;delete h[T],n(I,[c,o],e)}}},P=0;e.length>P;P++){if(T=e[P],!T)throw Error("miss attrs:"+e);var V,A=u.getModel(T,o),j=A.cacheKey;V=A.entity;var k=c(O,V,P);j&&r(h,j)?h[j].q.push(k):A.needUpdate?(d[V.id]=V,j&&(h[j]={q:[],e:V}),V.request(k)):k()}return s},fetchAll:function(e,t){return this.send(e,t,l.ALL)},saveAll:function(e,t){return this.send(e,t,l.ALL,1)},fetchOrder:function(e,t){var r=o.call(arguments,1);return this.send(e,r.length>1?r:t,l.ORDER)},saveOrder:function(e,t){var r=o.call(arguments,1);return this.send(e,r.length>1?r:t,l.ORDER,1)},saveOne:function(e,t){var r=o.call(arguments,1);return this.send(e,r.length>1?r:t,l.ONE,1)},fetchOne:function(e,t){var r=o.call(arguments,1);return this.send(e,r.length>1?r:t,l.ONE)},abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,i=e.$reqModels,a=t.$mCacheKeys;if(i)for(var o in i){var s=i[o],c=s.$mm.cacheKey;if(c&&r(a,c)){var f=a[c];delete a[c],n(f,[!0,s,"aborted"],s)}s.abort()}e.$reqModels={},e.$queue=[],e.$doTask=!1},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$doTask){var r=t.$latest||[];t.doNext.apply(t,[r])}return t},doNext:function(e){var t=this;t.$doTask=!1;var r=t.$queue;if(r){var i=r.shift();i&&n(i,e,t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=!0,e.abort()}}),i(a.prototype,{registerModels:function(e){var r=this,n=r.$mMetas;t.isArray(e)||(e=[e]);for(var i,a,o=0;e.length>o;o++){if(i=e[o],a=i.name,i&&!a)throw Error("miss name attribute");if(n[a])throw Error("already exist:"+a);n[a]=i}},registerMethods:function(e){var t=this;i(t,e)},createModel:function(e){var r=this,i=r.getModelMeta(e),a=new r.$mClass;a.set(i,s),a.$mm={used:0};var o=e.before||i.before;t.isFunction(o)&&n(o,[a,i,e]);var c=e.after||i.after;a.$mm.after=c;var f=e.cacheKey||i.cacheKey;return t.isFunction(f)&&(f=n(f,[i,e])),a.$mm.cacheKey=f,a.$mm.meta=i,a.set(e,s),a.setUrlParams(i.urlParams),a.setPostParams(i.postParams),a.setUrlParams(e.urlParams),a.setPostParams(e.postParams),a},getModelMeta:function(e){var r,n=this,i=n.$mMetas;r=t.isString(e)?e:e.name;var a=i[r];if(!a)throw Error("Not found:"+e.name);return a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=!0,r=i.createModel(e)),{entity:r,cacheKey:r.$mm.cacheKey,needUpdate:n}},saveAll:v("saveAll"),fetchAll:v("fetchAll"),saveOrder:v("saveOrder"),fetchOrder:v("fetchOrder"),saveOne:v("saveOne"),fetchOne:v("fetchOne"),createMRequest:function(e){var t=new h(this);return u(e)&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.cacheKey)}}},getCachedModel:function(e){var r,i,a=this,o=a.$mCache,s=null;if(t.isString(e)?r=e:(i=a.getModelMeta(e),r=e.cacheKey||i.cacheKey,t.isFunction(r)&&(r=n(r,[i,e]))),r){var c=a.$mCacheKeys,f=c[r];if(f)s=f.e;else if(s=o.get(r)){i||(i=s.$mm.meta);var u=e.cacheTime||i.cacheTime||0;t.isFunction(u)&&(u=n(u,[i,e])),u>0&&m()-s.$mm.doneAt>u&&(a.clearCacheByKey(r),s=null)}}return s}}),a}),define("mxext/model",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e,r){var n=this,i=function(){i.superclass.constructor.apply(this,arguments),r&&t.safeExec(r,arguments,this)};return t.mix(i,n,{prototype:!0}),t.extend(i,n,e)},n=+new Date,i=function(e){e&&this.set(e),this.id="m"+n--},a=encodeURIComponent;return t.mix(i,{GET:"GET",POST:"POST",extend:r}),t.mix(i.prototype,{sync:t.noop,parse:function(e){return e},getPostParams:function(){return this.getParams(i.POST)},getUrlParams:function(){return this.getParams(i.GET)},getParams:function(e){var r=this;e=e?e.toUpperCase():i.GET;var n,o="$"+e,s=r[o],c=[];if(s)for(var f in s)if(n=s[f],t.isArray(n))for(var u=0;n.length>u;u++)c.push(f+"="+a(n[u]));else c.push(f+"="+a(n));return c.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,i.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,i.POST,!0)},setParams:function(e,r,n,a){n=n?n.toUpperCase():i.GET;var o=this;o.$types||(o.$types={}),o.$types[n]=!0;var s="$"+n;if(o[s]||(o[s]={}),t.isObject(e))for(var c in e)a&&o[s][c]||(o[s][c]=e[c]);else e&&(a&&o[s][e]||(o[s][e]=r))},setPostParams:function(e,t){var r=this;r.setParams(e,t,i.POST)},setUrlParams:function(e,t){this.setParams(e,t,i.GET)},reset:function(){var e=this,r=e.$types;if(r){for(var n in r)t.has(r,n)&&delete e["$"+n];delete e.$types}var i=e.$keys,a=e.$attrs;if(i){for(var o=0;i.length>o;o++)delete a[i[o]];delete e.$keys}},get:function(e){var t=this,r=!arguments.length,n=t.$attrs;return n?r?n:n[e]:null},set:function(e,r,n){var i=this;if(i.$attrs||(i.$attrs={}),n&&!i.$keys&&(i.$keys=[]),t.isObject(e)){t.isObject(r)||(r={});for(var a in e)n&&i.$keys.push(a),t.has(r,a)||(i.$attrs[a]=e[a])}else e&&(n&&i.$keys.push(e),i.$attrs[e]=r)},request:function(e,r){e||(e=function(){});var n=this;n.$abort=!1;var i=function(i,a){if(!n.$abort)if(i)e(i,a,r);else{if(a){var o=n.parse(a);t.isObject(o)||(o={data:o}),n.set(o,null,!0)}e(i,a,r)}};n.$trans=n.sync(i,r)},abort:function(){var e=this,t=e.$trans;t&&t.abort&&t.abort(),delete e.$trans,e.$abort=!0},isAborted:function(){return this.$abort}}),i}),define("mxext/view",["magix/magix","magix/view","magix/router"],function(e){var t=e("magix/magix"),r=e("magix/view"),n=e("magix/router"),i=window,a=function(e){i.clearTimeout(e),i.clearInterval(e)},o=function(e){c(e.destroy,[],e)},s=0,c=t.safeExec,f=t.has,u=r.extend({mxViewCtor:t.noop,navigate:function(){n.navigate.apply(n,arguments)},manage:function(e,r){var n=this,i=arguments,c=!0;1==i.length&&(r=e,e="res_"+s++,c=!1),n.$res||(n.$res={});var f;t.isNumber(r)?f=a:r&&r.destroy&&(f=o);var u={hasKey:c,res:r,sign:n.sign,destroy:f};return n.$res[e]=u,r},getManaged:function(e){var t=this,r=t.$res;if(r&&f(r,e)){var n=r[e],i=n.res;return i}return null},removeManaged:function(e){var t=this,r=null,n=t.$res;return n&&f(n,e)&&(r=n[e].res,delete n[e]),r},destroyManaged:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r];if(n.sign!=e.sign){var i=n.res,a=n.destroy,o=!1;a&&(a(i),o=!0),n.hasKey||delete t[r],e.fire("destroyManaged",{resource:i,processed:o})}}},destroyMRequest:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r],i=n.res;i&&i.fetchOne&&i.fetchAll&&(i.destroy(),delete t[r])}}},function(){var e=this;e.on("interact",function(){e.on("rendercall",e.destroyMRequest),e.on("prerender",e.destroyManaged),e.on("destroy",e.destroyManaged)}),e.mxViewCtor()});return u}),document.createElement("vframe");