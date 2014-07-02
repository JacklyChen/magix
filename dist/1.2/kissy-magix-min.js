(function(e,t,n,r,i,a,o,s,u,f){f=1,u=function(e){return e.id||(e.id="mx_n_"+f++)},s.add("magix/magix",function(n){var o=[].slice,s=/\/\.(?:\/|$)|\/[^\/]+?\/\.{2}(?:\/|$)|\/\/+|\.{2}\//,u=/\/[^\/]*$/,c=/[#?].*$/,h=/([^=&?\/#]+)=?([^&#?]*)/g,d=/\?|(?!^)=/,m=/^https?:\/\//i,l="/",v="vframe",g=t.console,p=g&&g.error,$={tagName:v,rootId:"magix_vf_root",coded:1,error:p?function(e){g.error(e)}:r},x=$.hasOwnProperty,y=function(e,t){return e&&x.call(e,t)},w=function(t){return function(n,r,i){switch(arguments.length){case 0:i=t;break;case 1:i=V._o(n)?M(t,n):y(t,n)?t[n]:e;break;case 2:r===e?(delete t[n],i=r):t[n]=i=r}return i}},b=function(e,t){return t.f-e.f||t.t-e.t},C=function(e,t){var n=this;return n.get?(n.c=[],n.b=0|t||5,n.x=n.b+(e||20)):n=new C(e,t),n},M=function(e,t,n,r){for(r in t)n&&y(n,r)||(e[r]=t[r]);return e};M(C.prototype,{get:function(e){var t,n=this,r=n.c;return e=i+e,y(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},list:function(){return this.c},set:function(e,t,n){var r=this,a=r.c,o=i+e,s=a[o];if(!y(a,o)){if(a.length>=r.x){a.sort(b);for(var u=r.b;u--;)s=a.pop(),s.f>0&&r.del(s.o)}s={o:e},a.push(s),a[o]=s}return s.v=t,s.f=1,s.t=f++,s.m=n,t},del:function(e){e=i+e;var t=this.c,n=t[e];n&&(n.f=-1,n.v=a,delete t[e],n.m&&(P(n.m,n.o,n),n.m=a))},has:function(e){return y(this.c,i+e)}});var q=C(40),_=C(),P=function(e,t,n,r,i,a){for(V._a(e)||(e=[e]),t&&(V._a(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=a&&a.apply(n,t)}catch(o){$.error(o)}return i},k=function(e,t,n){if($.coded)try{n=decodeURIComponent(n)}catch(r){}k.p[t]=n},V={mix:M,has:y,tryCall:P,config:w($),start:function(e){var t=this;M($,e),t.use(["magix/router","magix/vom",e.iniFile],function(n,r,i){$=M($,i,e),$["!tnc"]=$.tagName!=v,n.on("!ul",r.loc),n.on("changed",r.loc),t.use($.extensions,n.start)})},keys:Object.keys||function(e){var t,n=[];for(t in e)y(e,t)&&n.push(t);return n},local:w({}),path:function(e,t){var n,r=e+i+t,o=_.get(r),f=a;if(!_.has(r)){for(m.test(e)&&(n=e.indexOf(l,8),0>n&&(n=e.length),f=e.slice(0,n),e=e.slice(n)),e=e.replace(c,a).replace(u,l),(m.test(t)||t.charAt(0)==l)&&(e=a),o=e+t;s.test(o);)o=o.replace(s,l);_.set(r,o=f+o)}return o},toObject:function(e){var t,n,r=q.get(e);return r||(k.p=t={},n=e.replace(c,a),d.test(n)&&(n=a),e.replace(n,a).replace(h,k),q.set(e,r=[n,t])),{path:r[0],params:M({},r[1])}},toUrl:function(e,t,n){var r,i,a,o=[];for(i in t)r=t[i],(!n||r||y(n,i))&&($.coded&&(r=encodeURIComponent(r)),a=1,o.push(i+"="+r));return a&&(e=(e&&e+(d.test(e)?"&":"?"))+o.join("&")),e},toMap:function(e,t,n){var r,i,a,o={};if(n=n||1,e&&(a=e.length))for(r=0;a>r;r++)i=e[r],o[t?i[t]:i]=t?i:n;return o},cache:C};return M(V,{use:function(e,t){n.use(e&&e+a,function(e){t&&t.apply(e,o.call(arguments,1))})},_a:n.isArray,_f:n.isFunction,_o:n.isObject})}),s.add("magix/event",function(e,t){var n=t.tryCall,r={fire:function(e,t,r,a){var o=i+e,s=this,u=s[o];if(u){t||(t={}),t.type||(t.type=e);for(var f,c,h=u.length,d=h-1;h--;)f=a?h:d-h,c=u[f],(c.d||c.r)&&(u.splice(f,1),d--),c.d||n(c.f,t,s);r=r||0>d}r&&delete s[o]},on:function(e,t,r,a){var o=this,s=i+e,u=o[s]||(o[s]=[]),f={f:t},c=0|r;c!==r?(r&&r.on&&a&&(r.on(a,function(){f.r=1},n),r=0),f.r=r,u.push(f)):u.splice(c,0,f)},off:function(e,t){var n=i+e,r=this[n];if(r)if(t){for(var a,o=r.length-1;o>=0;o--)if(a=r[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,n)}};return t.mix(t.local,r),r},{requires:["magix/magix"]}),s.add("magix/router",function(e,n,r,a){var s,u,f,c,h,d,m="",l="path",v="view",g=n.has,p=n.mix,$=n.keys,x=n.toUrl,y=n.toObject,w=n.config(),b=n.cache(),C=n.cache(),M=t.location,q=t.history,_={params:{},href:m},P=/(?:^https?:\/\/[^\/]+|#.*$)/gi,k=/^[^#]*#?!?/,V="params",I=function(e,t,n){if(e){n=this[V],e=(e+m).split(o);for(var r=0;e.length>r&&!(t=g(n,e[r]));r++);}return t},A=function(){return this[l]},T=function(){return this[v]},U=function(e,t,n,r){return n=this,r=n[V],arguments.length>1?r[e]=t:r[e]||m},N=function(e,t){var r,i,a,o;return u||(u={rs:w.routes||{},nf:w.unfoundView},a=w.defaultView,u.dv=a,o=w.defaultPath,r=u.rs,u.f=n._f(r),u.f||r[o]||!a||(r[o]=a),u[l]=o),e||(e=u[l]),r=u.rs,i=u.f?r.call(w,e,t):r[e],{view:i||u.nf||u.dv,path:e}},S=function(e,t){var n=e.href,r=t.href,a=n+i+r,o=C.get(a);if(!o){var s,u,f,c;o={isParam:I,isPath:A,isView:T},o[v]=f,o[l]=f,o[V]=c={};var h,d,m=e[V],g=t[V],p=[l,v].concat($(m),$(g));for(h=p.length-1;h>=0;h--)d=p[h],1==h&&(m=e,g=t,c=o),u=m[d],f=g[d],u!=f&&(c[d]={from:u,to:f},s=1);C.set(a,o=[s,o])}return o},E=p({start:function(){f=w.edge,c=f&&q.pushState,h=f&&!c,d=c?"srcQuery":"srcHash",c?E.useState():E.useHash(),E.route()},parse:function(e,t){e=e||M.href;var r,i,a,o,s,u,c=b.get(e);return c||(a=e.replace(P,m),o=e.replace(k,m),s=y(a),u=y(o),h&&(u[l]=n.path(M.pathname,u[l])),c={get:U,set:U,href:e,refHref:_.href,srcQuery:a,srcHash:o,query:s,hash:u,params:p(p({},s[V]),u[V])},b.set(e,c)),t&&!c[v]&&(i=c.hash[l]||f&&c.query[l],r=N(i,c),p(c,r)),c},route:function(){var e=E.parse(0,1),t=!_.get,n=S(_,e);_=e,n[0]&&(s=e,E.fire("changed",{location:e,changed:n[1],force:t}))},navigate:function(e,t,r){if(s){!t&&n._o(e)&&(t=e,e=m);var i=y(e),a=s.query[V],o=i[V],u=i[l],v=s[l];if(p(o,t),u){if(u=n.path(v,u),h)for(var $ in a)g(a,$)&&!g(o,$)&&(o[$]=m)}else u=v,o=p(p({},s[V]),o);u=x(i[l]=u,o,f?l:a),u!=s[d]&&(c?(E.poped=1,q[r?"replaceState":"pushState"](m,m,u),E.route()):(p(i,s,i),i.srcHash=u,E.fire("!ul",{loc:s=i}),u="#!"+u,r?M.replace(u):M.hash=u))}}},r);return E.useState=function(){var e=location.href;a.on(t,"popstate",function(){var t=location.href==e;(E.poped||!t)&&(E.poped=1,E.route())})},E.useHash=function(){a.on(t,"hashchange",E.route)},E},{requires:["magix/magix","magix/event","event"]}),s.add("magix/vom",function(e,t,n,r){var i=n.has,a=n.mix,o={},s={},u={},f=n.mix({all:function(){return o},add:function(e,t){i(o,e)||(o[e]=t,f.fire("add",{vframe:t}))},get:function(e){return o[e]},remove:function(e,t){var n=o[e];n&&(delete o[e],f.fire("remove",{vframe:n,fcc:t}))},loc:function(e){var n,r=e.loc;if(r?n=1:r=e.location,a(s,r),!n){a(u,e.changed);var i=t.root(f,s,u);u.view?i.mountView(r.view):i.locChged()}}},r);return f},{requires:["magix/vframe","magix/magix","magix/event"]}),s.add("magix/vframe",function(t,r,i,s){var f,c,h,d,m,l,v,g,p,$,x,y=r.tryCall,w=[],b=r.mix,C=r.config(),M="mx-vframe",q=r.has,_="querySelectorAll",P="alter",k="created",V=function(e){return"object"==typeof e?e:n.getElementById(e)},I=function(e,t,r){return t=V(e),t&&(r=h?n[_]("#"+u(t)+m):t.getElementsByTagName(f)),r||w},A=function(e,t,n){if(e=V(e),t=V(t),e&&t)if(e!==t)try{n=l?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},T=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1,t.rM={},t.owner=x,x.add(e,t)};return T.root=function(t,r,i){if(!v){f=C.tagName,c=C["!tnc"],h=c&&n[_],m=" "+f+"["+M+"=true]",d=c&&!h;var a=n.body;l=a.contains,p=r,$=i,x=t;var o=C.rootId,s=V(o);s||(s=n.createElement(f),s.id=o,a.appendChild(s),s=e),v=new T(o)}return v},b(b(T.prototype,i),{mountView:function(e,t,n){var i=this,a=V(i.id);if(!i._a&&a&&(i._a=1,i._t=a.innerHTML),i.unmountView(n),i._d=0,e){i.path=e;var o=r.toObject(e),u=o.path,f=++i.sign;r.use(u,function(e){if(f==i.sign){s.prepare(e,x);var n=new e({owner:i,id:i.id,$:V,$i:A,path:u,vom:x,location:p});i.view=n;var r=function(e){i.mountZoneVframes(e.id)};n.on("interact",function(){n.hasTmpl||(a&&(a.innerHTML=i._t),r(V)),n.on("primed",function(){i.viewPrimed=1,i.fire("viewMounted")}),n.on("rendered",r),n.on("prerender",function(e){i.unmountZoneVframes(e.id,0,1)||i.cAlter()})},0),n.load(b(o.params,t),$)}})}},unmountView:function(e){var t=this,n=t.view;if(n){g||(g={}),t._d=1,t.unmountZoneVframes(0,e,1),t.cAlter(g),t.view=0,n.oust();var r=V(t.id);r&&t._a&&!e&&(r.innerHTML=t._t),t.viewInited=0,t.viewPrimed&&(t.viewPrimed=0,t.fire("viewUnmounted")),g=0}t.sign++},mountVframe:function(e,t,n,r,i){var a=this;a.fcc&&!r&&a.cAlter();var o=x.get(e);return o||(o=new T(e),o.pId=a.id,q(a.cM,e)||a.cC++,a.cM[e]=1),o._p=r,o.mountView(t,n,i),o},mountZoneVframes:function(e,t,n,r){var i=this;e=e||i.id,i.unmountZoneVframes(e,r,1);var a=I(e),o=a.length,s={};if(o)for(var f,c,h,m,l=0;o>l;l++)if(f=a[l],c=u(f),!q(s,c)&&(h=f.getAttribute("mx-view"),m=d?f.getAttribute(M):1,m||h)){i.mountVframe(c,h,t,n,r);for(var v,g=I(f),p=0,$=g.length;$>p;p++)v=g[p],s[u(v)]=1}i.cCreated()},unmountVframe:function(e,t,n){var r=this;e=e||r.id;var i=x.get(e);if(i){var a=i.fcc;i.unmountView(t),x.remove(e,a);var o=x.get(i.pId);o&&q(o.cM,e)&&(delete o.cM[e],o.cC--,n||r._d||o.cCreated())}},unmountZoneVframes:function(e,t,n){var r,i,a=this,o=a.cM;for(i in o)(!e||A(i,e))&&a.unmountVframe(i,t,r=1);return n||a._d||a.cCreated(),r},parent:function(e){var t=this,n=t;for(e=e>>>0||1;n&&e--;)n=x.get(n.pId);return n},invokeView:function(e,t){var n,r=this;if(r.viewInited){var i=r.view,a=i&&i[e];a&&(n=y(a,t||w,i))}return n},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,t.fca=0,n.fire(k,e),t.fire(k,e));var r=t.id,i=x.get(t.pId);i&&!q(i.rM,r)&&(i.rM[r]=i.cM[r],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),!t.fca&&t.fcc){t.fcc=0;var n=t.view,r=t.id;n&&(t.fca=1,n.fire(P,e),t.fire(P,e));var i=x.get(t.pId);i&&q(i.rM,r)&&(i.rC--,delete i.rM[r],t._p||i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t&&t.sign>0){var n=t.olChg($),i={location:p,changed:$,prevent:function(){this.cs=w},to:function(e){e=(e+a).split(o),this.cs=e||w}};n&&t.render(i);for(var s,u=i.cs||r.keys(e.cM),f=0,c=u.length;c>f;f++)s=x.get(u[f]),s&&s.locChged()}}}),T},{requires:["magix/magix","magix/event","magix/view"]}),s.add("magix/view",function(s,f,c,h,d){var m,l={mouseenter:2,mouseleave:2},v=function(e,t,n,r,i,o){s.use("event",function(s,u){var f=l[t];o||2!=f?(f=r?"detach":T,u[f](e,t,n,i)):(f=(r?"un":a)+"delegate",u[f](e,t,"[mx-"+t+"]",n))})},g=f.tryCall,p=f.has,$=[],x=f.mix,y=0,w="destroy",b=f.cache(40),C=/(\w+)(?:<(\w+)>)?(?:\({([\s\S]*)}\))?/,M=/(\w+):(['"]?)([\s\S]*?)\2(?=(?:,\w+:|$))/g,q=/([$\w]+)<([\w,]+)>/,_={},P="mx-ei",k=n.body,V="parentNode",I={},A=/\smx-(?!view|vframe)[a-z]+\s*=\s*"/g,T="on",U="",N=function(e,t){return function(){t=this,t.sign>0&&(t.sign++,t.fire("rendercall"),E(t),g(e,arguments,t))}},S=function(e,t,n,r){S.p[t]=r},E=function(e,t){var n,r,i=e.$res;for(n in i)r=i[n],(t||r.mr)&&O(i,n,t)},O=function(e,t,n){var r,i,a=e[t];a&&(r=a.e,i=r&&r[w],i&&g(i,$,r),(!a.hk||n)&&delete e[t])},j=function(e,t){var n,r,i=e.$evts;for(n in i)Z(n,t);for(i=e.$sevts,n=i.length;n-->0;)r=i[n],v(r.h,r.t,r.f,t,e,1)},H=function(e,t,n){return n?e.setAttribute(t,n):n=e.getAttribute(t),n},R=function(e,t,n,r){return t+=a,r=e+i,t=n?[a].concat(t).join(U+r):t.replace(A,"$&"+r)},L=function(t){if(t&&!t[T]){var n=t.target;t[T]=1;for(var r,a,s,f=n,c=t.type,h=I[c]||(I[c]=RegExp(o+c+"(?:,|$)")),d="mx-"+c,l=[];f&&1==f.nodeType&&(r=H(f,d),a=H(f,P),!r&&!h.test(a));)l.push(f),f=f[V];if(r){for(var v,g,$,x,y,w,b,C,M,q=r.split(U);q.length;)if(g=q.shift()){if($=g.split(i),g=$.pop(),w=$[0],!w&&!v)for(b=f,C=m.all();b;){if(p(C,M=b.id)){H(f,d,(w=M)+i+r);break}b=b[V]}if(v=1,!w)throw Error("bad:"+g);x=m.get(w),y=x&&x.view,y&&(t.currentId=u(f),t.targetId=u(n),t.prevent=t.preventDefault,t.stop=t.stopPropagation,y.pEvt(g,c,t))}}else{for(;l.length;)s=l.pop(),a=H(s,P)||T,h.test(a)||(a=a+o+c,H(s,P,a));s=e}f=n=e}},Z=function(e,t){var n=0|_[e],r=n>0?1:0;n+=t?-r:r,n||(v(k,e,L,t),t||(n=1)),_[e]=n},D=function(e){var t=this;x(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),g(D.$,e,t)},K=D.prototype,z={$win:t,$doc:n};D.$=[],D.prepare=function(e,t){if(!e[i]){e[i]=1,m=t;var n,a,s,u,f,c,h=e.prototype,d={},l=[];for(var v in h)if(n=h[v],a=v.match(q))for(s=a[1],u=a[2],u=u.split(o),f=u.length-1;f>-1;f--)a=u[f],c=z[s],c?l.push({n:s,t:a,h:c,f:n}):(d[a]=1,h[s+i+a]=n);else"render"==v&&n!=r&&(h[v]=N(n));h.$evts=d,h.$sevts=l}},D.mixin=function(e,t){t&&D.$.push(t),x(K,e)},x(x(K,c),{render:r,wrapEvent:R,navigate:h.navigate,init:r,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,r=function(r){t&&(e.tmpl=R(e.id,r)),j(e),e.fire("interact",0,1),g(e.init,n,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var i=!t&&!e.rendered;i&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(r)):r()},beginUpdate:function(e){var t=this;t.sign>0&&t.rendered&&t.fire("prerender",{id:e||t.id})},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e||t.id}))},wrapAsync:function(e){var t=this,n=t.sign;return function(){n>0&&n==t.sign&&e&&e.apply(this,arguments)}},setHTML:function(e,t){var n,r=this;r.beginUpdate(e),r.sign>0&&(n=r.$(e),n&&(n.innerHTML=t)),r.endUpdate(e)},observeLocation:function(e){var t,n=this;t=n.$ol,t.f=1;var r=t.ks;f._o(e)&&(t.pn=e.path,e=e.params),e&&(t.ks=r.concat((e+a).split(o)))},olChg:function(e){var t,n=this,r=n.$ol;return r.f&&(r.pn&&(t=e.path),t||(t=e.isParam(r.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(w,0,1,1),E(e,1),j(e,1)),e.sign--},pEvt:function(e,t,n){var r=this;if(r.sign>0){var a=b.get(e);a||(a=e.match(C),a={n:a[1],f:a[2],i:a[3],p:S.p={}},a.i&&a.i.replace(M,S),b.set(e,a));var o=a.n+i+t,s=r[o];s&&(n[a.f]&&n[a.f](),n.params=a.p,g(s,n,r))}},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e){var t,n,r=this;for(n in r.$ns)if(t=r.$i(e,n))break;return t},manage:function(e,t){var n=this,r=arguments.length,o=1,s=n.$res;1==r&&(t=e,e=a),e&&O(s,e),e||(o=0,e="res_"+y++);var u={hk:o,e:t,mr:t&&t[i]==i};return s[e]=u,t},getManaged:function(t,n){var r=this,i=r.$res,a=e;if(p(i,t)){var o=i[t];a=o.e,n&&delete i[t]}return a},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e){O(this.$res,e,1)}});var B="?t="+s.now(),F=s.Env.mods,Q={},G={};return K.fetchTmpl=function(e,t){var n=this,r="tmpl"in n;if(r)t(n.tmpl);else if(p(Q,e))t(Q[e]);else{var i,a=F[e];a&&(i=a.uri||a.fullpath,i=i.slice(0,i.indexOf(e)+e.length));var o=i+".html",s=G[o],u=function(n){t(Q[e]=n)};s?s.push(u):(s=G[o]=[u],d({url:o+B,complete:function(e,t){g(s,e||t),delete G[o]}}))}},D.extend=function(e,t,n){var r=this,i=function(e){r.call(this,e),n&&n.call(this,e)};return i.extend=r.extend,s.extend(i,r,e,t)},D},{requires:["magix/magix","magix/event","magix/router","io"]}),s.add("magix/model",function(e,t){var n=t.has,o=t._o,s=t.toString,u="GET",c="POST",h=function(){this.id="m"+f++},d=function(e){return function(r,a,s){var u,f,c,h=this,d=i+e;h[d]||(h[d]={}),c=h[d],t._f(r)&&(r=t.tryCall(r)),r&&!o(r)&&(u={},u[r]=a,r=u);for(f in r)s&&n(c,f)||(c[f]=r[f])}};return t.mix(h.prototype,{sync:r,getPostParams:function(){return this[i+c]},getUrlParams:function(){return this[i+u]},setPostParams:d(c),setUrlParams:d(u),get:function(e,t,n){var r=this,i=arguments.length,o=2==i,u=r.$attrs;if(i){for(var f=(e+a).split(".");u&&f[0];)u=u[f.shift()];f[0]&&(u=n)}return o&&s.call(t)!=s.call(u)&&(u=t),u},set:function(e,t){var n=this;if(n.$attrs||(n.$attrs={}),e){if(!o(e)){var r={};r[e]=t,e=r}for(var i in e)n.$attrs[i]=e[i]}},request:function(e,t){var n=this;if(!n.$ost){var r=function(r,i){n.$ost||(o(i)||(i={data:i}),n.set(i),e(r,t))};n.$tspt=n.sync(n.$temp=r)}},destroy:function(){var e=this,t=e.$tspt,n=e.$temp;n&&(n("abort"),e.$temp=0),e.$ost=1,t&&t.abort&&t.abort(),e.$tspt=0}}),h.extend=function(t,n,r){var i=this,a=function(){i.call(this),r&&r.call(this)};return e.extend(a,i,t,n)},h},{requires:["magix/magix"]}),s.add("magix/mmanager",function(n,r,s){var u=r.has,c=r.tryCall,h=r._a,d=r._f,m=r._o,l=1,v=2,g=4,p="postParams",$="urlParams",x=Date.now||function(){return+new Date},y=t.JSON,w=r.mix,b=12e5,C=function(e,t,n,r){if(d(e))t&&(n=C(c(e)));else if(y)n=y.stringify(e);else if(m(e)||h(e)){n=[];for(r in e)u(e,r)&&n.push(r,i,C(e[r]))}else n=e;return n},M=function(e,t,n){for(var r,a=[t.name,C(n)],o={},s=e.length-1;s>-1;s--)r=e[s],o[r]||a.push(o[r]=C(t[r],1),C(n[r],1));return a.join(i)},q=function(e){var t=e.cache;return t&&(t=t===!0?b:0|t),t},_=function(e){throw Error(e)},P=function(e,t){var n=this;n.$mClz=e,n.$mCache=r.cache(),n.$mReqs={},n.$mMetas={},n.$sKeys=(t&&(a+t).split(o)||[]).concat(p,$),n.id="mm"+f++,c(P.$,arguments,n)},k=[].slice,V=function(e,t,n,r){return function(i){return e.apply(t,[n,r,i])}},I=function(e,t){var n=t.b,r=t.a,i=r[n];if(i){var a=i.q;delete r[n],c(a,e,i.e)}},A=function(t,n,r){var i,a,o=this,s=n.a,u=n.c,f=n.d,h=n.g,d=n.i,m=n.j,p=n.k,$=n.l,y=n.m,w=n.n,b=n.o;n.b++,delete u[o.id];var C=o.$mm,M=C.key;if(f[t]=o,r)n.e=1,i=1,n.f=r,h.msg=r,h[t]=r,m.fire("fail",{model:o,msg:r}),a=1;else{if(!d.has(M)){M&&d.set(M,o),C.time=x();var q=C.done;q&&c(q,o),C.cls&&m.clearCache(C.cls),m.fire("done",{model:o}),a=1}o.fromCache=C.used>0,C.used++}if(!s.$ost){if(p==l){var _=$?y[t]:y;_&&(w[t]=c(_,[i?h:e,o,h],s))}else if(p==v){b[t]={m:o,e:i,s:r};for(var P,k,V=b.i||0;P=b[V];V++)k=$?y[V]:y,P.e&&(h.msg=P.s,h[V]=P.s),w[V]=c(k,[P.e?h:e,P.m,h].concat(w),s);b.i=V}n.b==n.h&&(n.e||(h=e),w.unshift(h),p==g&&(f.unshift(h),w[1]=c(y,f,s)),s.$busy=0,s.doNext(w)),a&&m.fire("finish",{msg:r,model:o})}},T=function(e,t,n,r,i){if(e.$busy)return e.next(function(){this.send(t,n,r,i)});e.$busy=1,e.sign++;var a=e.$host,o=a.$mCache,s=a.$mReqs,f=e.$reqs;h(t)||(t=[t]);var c=t.length,d=[],m=h(n);m&&(d=Array(n.length));for(var l,v={a:e,b:0,c:e.$reqs,d:Array(c),g:{},h:c,i:o,j:a,k:r,l:m,m:n,n:d,o:[]},g=0;t.length>g;g++)if(l=t[g]){var p=a.getModel(l,i),$=p.entity,x=$.$mm.key,y=V(A,$,g,v);y.id=e.id,x&&u(s,x)?s[x].q.push(y):p.update?(f[$.id]=$,x&&(s[x]={q:[y],e:$},y=I),$.request(y,{a:s,b:x})):y()}else _("empty model");return e},U=function(e,t){return function(n,r){var i=k.call(arguments,1);return T(this,n,i.length>1?i:r,e,t)}};w(P,{create:function(e,t){return new P(e,t)},mixin:function(e,t){t&&P.$.push(t),w(P.prototype,e)},$:[]});var N=function(e){var t=this;t.$host=e,t.$reqs={},t[i]=i,t.sign=1,t.id="mr"+f++,t.$queue=[]};return w(N.prototype,{fetchAll:function(e,t){return T(this,e,t,g)},save:function(e,t){return T(this,e,t,g,1)},fetchOrder:U(v),fetchOne:U(l),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,n=e.$reqs,r=t.$mReqs;for(var i in n){var a,o,s=n[i],f=s.$mm.key,h=[],d=[];if(f&&u(r,f)){a=r[f],o=a.q;for(var m,l=0;o.length>l;l++)m=o[l],m.id!=e.id?h.push(m):d.push(m)}h.length?(c(d,"abort",a.e),a.q=h):s.destroy()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;return t.$queue.push(e),t.doNext(t.$args),t},doNext:function(e){var t=this;if(!t.$busy){t.$busy=1;var n=++t.sign;t.$ntId=setTimeout(function(){t.$busy=0,t.$args=e;var r,i=t.$queue,a=i.shift();a&&(r=c(a,e,t),n==t.sign&&t.doNext(r===i.$?e:[null,r]))},0)}},destroy:function(){var e=this;e.$ost=1,e.stop()}}),P.mixin(s),P.mixin({registerModels:function(e){var t=this,n=t.$mMetas;h(e)||(e=[e]);for(var r,i,a,o=0;e.length>o;o++)r=e[o],r&&(i=r.name,i?n[i]&&_("already exist:"+i):_("miss name"),a=q(r),a&&(r.cache=a),n[i]=r)},registerMethods:function(e){w(this,e)},create:function(e){var t=this,n=t.getMeta(e),r=q(e)||n.cache,i=new t.$mClz;return i.set(n),i.$mm={used:0,name:n.name,done:n.done,cls:n.cleans,key:r&&M(t.$sKeys,n,e)},e.name&&i.set(e),i.setUrlParams(n[$]),i.setPostParams(n[p]),i.setUrlParams(e[$]),i.setPostParams(e[p]),t.fire("start",{model:i}),i},getMeta:function(e){var t=this,n=t.$mMetas,r=e.name||e,i=n[r];return i||_("Unfound:"+r),i},getModel:function(e,t){var n,r,i=this;return t||(n=i.getCached(e)),n||(r=1,n=i.create(e)),{entity:n,update:r}},createMRequest:function(e,t){return e.manage(t,new N(this))},clearCache:function(e){var t=this,n=t.$mCache,i=n.list();e=r.toMap((e+a).split(o));for(var s=0;i.length>s;s++){var f=i[s],c=f.v,h=c&&c.$mm;h&&u(e,h.name)&&n.del(h.key)}},getCached:function(e){var t,n,r=this,i=r.$mCache,a=r.getMeta(e),o=q(e)||a.cache;if(o&&(n=M(r.$sKeys,a,e)),n){var s=r.$mReqs,u=s[n];u?t=u.e:(t=i.get(n),t&&o>0&&x()-t.$mm.time>o&&(i.del(n),t=0))}return t}}),P},{requires:["magix/magix","magix/event"]}),n.createElement("vframe")})(null,this,document,function(){},"","",",",KISSY);