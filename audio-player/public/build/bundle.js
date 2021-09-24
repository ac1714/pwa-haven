var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s;function l(t,e){return s||(s=document.createElement("a")),s.href=e,t===s.href}let a,c="undefined"!=typeof window?t=>requestAnimationFrame(t):t;function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function h(){return m("")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function $(t){return function(e){return e.preventDefault(),t.call(this,e)}}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return""===t?null:+t}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function k(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function _(t){a=t}function O(){const t=function(){if(!a)throw new Error("Function called outside component initialization");return a}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const i=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,i)}))}}}function E(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const A=[],L=[],P=[],R=[],S=Promise.resolve();let z=!1;function N(t){P.push(t)}function j(t){R.push(t)}let U=!1;const M=new Set;function q(){if(!U){U=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];_(e),C(e.$$)}for(_(null),A.length=0;L.length;)L.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];M.has(e)||(M.add(e),e())}P.length=0}while(A.length);for(;R.length;)R.pop()();z=!1,U=!1,M.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const I=new Set;function T(t,e){t&&t.i&&(I.delete(t),t.i(e))}function D(t,e,n,o){if(t&&t.o){if(I.has(t))return;I.add(t),undefined.c.push((()=>{I.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const F="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function H(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function Q(t){t&&t.c()}function W(t,n,r,s){const{fragment:l,on_mount:a,on_destroy:c,after_update:u}=t.$$;l&&l.m(n,r),s||N((()=>{const n=a.map(e).filter(i);c?c.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(N)}function B(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(A.push(t),z||(z=!0,S.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,i,r,s,l,c,u,f=[-1]){const p=a;_(e);const m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:i.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:i.target||p.$$.root};u&&u(m.root);let g=!1;if(m.ctx=r?r(e,i.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=i)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](i),g&&G(e,t)),n})):[],m.update(),g=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);m.fragment&&m.fragment.l(t),t.forEach(d)}else m.fragment&&m.fragment.c();i.intro&&T(e.$$.fragment),W(e,i.target,i.anchor,i.customElement),q()}_(p)}class K{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(e){let n,o,i;return{c(){n=p("div"),n.innerHTML='<h4 class="alert-heading">Install</h4>\n    Click here to install the app for more features!',y(n,"class","alert alert-success filled-dm show svelte-1qjuqpq")},m(t,r){f(t,n,r),o||(i=v(n,"click",e[1]),o=!0)},p:t,d(t){t&&d(n),o=!1,i()}}}function X(e){let n,o=e[0]&&V(e);return{c(){o&&o.c(),n=h()},m(t,e){o&&o.m(t,e),f(t,n,e)},p(t,[e]){t[0]?o?o.p(t,e):(o=V(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&d(n)}}}function Y(t,e,n){let o;return window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),n(0,o=t)})),[o,async function(){o.prompt();const{outcome:t}=await o.userChoice;"accepted"===t&&n(0,o=null)}]}class Z extends K{constructor(t){super(),J(this,t,Y,X,r,{})}}function tt(t,e){if(isNaN(t)||t<0)return e?"00:00":"0:00";const n=Math.floor(t/3600);let o=Math.floor(t/60)-60*n,i=Math.floor(t%60);return e&&o<10&&(o="0"+o),i<10&&(i="0"+i),n>0?n+":"+o+":"+i:o+":"+i}function et(t,e,n){const o=t.slice();return o[5]=e[n],o}function nt(e){let n;return{c(){n=p("div"),n.textContent="Drag and drop, paste or click here to select a file/folder to play.",y(n,"class","font-size-24 font-weight-bold center text-center h-full pointer svelte-taw8gq")},m(t,e){f(t,n,e)},p:t,d(t){t&&d(n)}}}function ot(t){let e,n=t[1],o=[];for(let e=0;e<n.length;e+=1)o[e]=it(et(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);f(t,e,n)},p(t,i){if(11&i){let r;for(n=t[1],r=0;r<n.length;r+=1){const s=et(t,n,r);o[r]?o[r].p(s,i):(o[r]=it(s),o[r].c(),o[r].m(e.parentNode,e))}for(;r<o.length;r+=1)o[r].d(1);o.length=n.length}},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t),t&&d(e)}}}function it(t){let e,n,o,r,s,l,a,c,h,$,x,b,k,_=t[5]===t[0]?"volume_up":"play_arrow",O=t[5].name+"",E=tt(t[5].duration)+"";return{c(){e=p("div"),n=p("div"),o=m(_),r=g(),s=p("div"),l=m(O),a=g(),c=p("div"),h=m(E),$=g(),y(n,"class","material-icons font-size-20 center pr-20 svelte-taw8gq"),y(s,"class","text-truncate"),y(c,"class","ml-auto pl-20"),y(e,"class",x="d-flex w-full pointer font-size-20 "+(t[5]===t[0]?"text-primary":"text-muted")+" svelte-taw8gq")},m(d,p){f(d,e,p),u(e,n),u(n,o),u(e,r),u(e,s),u(s,l),u(e,a),u(e,c),u(c,h),u(e,$),b||(k=v(e,"click",(function(){i(t[3](t[5]))&&t[3](t[5]).apply(this,arguments)})),b=!0)},p(n,i){t=n,3&i&&_!==(_=t[5]===t[0]?"volume_up":"play_arrow")&&w(o,_),2&i&&O!==(O=t[5].name+"")&&w(l,O),2&i&&E!==(E=tt(t[5].duration)+"")&&w(h,E),3&i&&x!==(x="d-flex w-full pointer font-size-20 "+(t[5]===t[0]?"text-primary":"text-muted")+" svelte-taw8gq")&&y(e,"class",x)},d(t){t&&d(e),b=!1,k()}}}function rt(e){let n,o,i;function r(t,e){return t[1].length?ot:nt}let s=r(e),l=s(e);return{c(){n=p("div"),l.c(),y(n,"class","col-md-5 bg-dark overflow-y-scroll h-half h-md-full p-20")},m(t,r){f(t,n,r),l.m(n,null),o||(i=v(n,"click",e[4]),o=!0)},p(t,[e]){s===(s=r(t))&&l?l.p(t,e):(l.d(1),l=s(t),l&&(l.c(),l.m(n,null)))},i:t,o:t,d(t){t&&d(n),l.d(),o=!1,i()}}}function st(t,e,n){let{current:o}=e,{songs:i}=e;const r=O();return t.$$set=t=>{"current"in t&&n(0,o=t.current),"songs"in t&&n(1,i=t.songs)},[o,i,r,function(t){t!==o&&n(0,o=t)},()=>r("popup")]}class lt extends K{constructor(t){super(),J(this,t,st,rt,r,{current:0,songs:1})}}function at(t){let e,n,i,r,s,a,h,$,x,_,O,E,A,P,R,S,z,U,M,q,C,I,F,G,J,K,V,X,Y,Z,et,nt,ot,it,rt,st,at,ct,ut,ft,dt,pt,mt,gt,ht,vt,$t,yt,xt=!1,wt=!0,bt=t[9]?"play_arrow":"pause",kt=tt(t[13],!0)+"",_t=tt(t[3],!0)+"",Ot=t[10]?"volume_off":"volume_up",Et=t[11]?"repeat_one":"repeat",At=t[12]?"shuffle":"sort";function Lt(){cancelAnimationFrame(i),e.paused||(i=c(Lt),xt=!0),t[29].call(e)}function Pt(e){t[32](e)}let Rt={songs:t[8]};return void 0!==t[2]&&(Rt.current=t[2]),_=new lt({props:Rt}),L.push((()=>H(_,"current",Pt))),_.$on("popup",t[33]),{c(){e=p("audio"),r=g(),s=p("div"),a=p("div"),h=p("img"),x=g(),Q(_.$$.fragment),E=g(),A=p("nav"),P=p("div"),R=p("input"),S=g(),z=p("div"),U=p("div"),M=p("span"),M.textContent="skip_previous",q=g(),C=p("span"),I=m(bt),F=g(),G=p("span"),G.textContent="skip_next",J=g(),K=p("div"),V=m(kt),X=m(" / "),Y=m(_t),Z=g(),et=p("div"),nt=p("div"),ot=m(t[0]),it=g(),rt=p("div"),st=p("span"),at=m(Ot),ct=g(),ut=p("input"),ft=g(),dt=p("span"),pt=m(Et),mt=g(),gt=p("span"),ht=m(At),l(e.src,n=t[6])||y(e,"src",n),e.autoplay=!0,e.loop=t[11],y(e,"class","svelte-nuis8t"),void 0===t[3]&&N((()=>t[28].call(e))),l(h.src,$=t[5])||y(h,"src",$),y(h,"alt","cover"),y(h,"class","shadow-lg pointer svelte-nuis8t"),y(a,"class","col-md-7 p-20 center h-half h-md-full bg-dark svelte-nuis8t"),y(s,"class","content-wrapper row overflow-hidden svelte-nuis8t"),y(R,"class","w-full top-0 svelte-nuis8t"),y(R,"type","range"),y(R,"min","0"),y(R,"max","1"),y(R,"step","any"),k(R,"--value",100*t[14]+"%"),y(P,"class","d-flex w-full prog svelte-nuis8t"),y(M,"class","material-icons font-size-20 ctrl pointer svelte-nuis8t"),y(M,"type","button"),y(C,"class","material-icons font-size-24 ctrl pointer svelte-nuis8t"),y(C,"type","button"),y(G,"class","material-icons font-size-20 ctrl pointer svelte-nuis8t"),y(G,"type","button"),y(K,"class","text-muted center ml-10 text-nowrap svelte-nuis8t"),y(U,"class","d-flex align-items-center svelte-nuis8t"),y(nt,"class","text-truncate text-muted svelte-nuis8t"),y(et,"class","center px-20 mw-0 svelte-nuis8t"),y(st,"class","material-icons font-size-20 ctrl pointer svelte-nuis8t"),y(st,"type","button"),y(ut,"class","ml-auto px-5 h-half svelte-nuis8t"),y(ut,"type","range"),y(ut,"min","0"),y(ut,"max","1"),y(ut,"step","any"),k(ut,"--value",100*t[1]+"%"),y(dt,"class","material-icons font-size-20 ctrl pointer svelte-nuis8t"),y(dt,"type","button"),y(gt,"class","material-icons font-size-20 ctrl pointer svelte-nuis8t"),y(gt,"type","button"),y(rt,"class","d-flex align-items-center svelte-nuis8t"),y(z,"class","d-flex w-full flex-grow-1 px-20 justify-content-between svelte-nuis8t"),y(A,"class","navbar navbar-fixed-bottom p-0 d-flex flex-column border-0 shadow-lg bg-dark-light svelte-nuis8t")},m(n,o){f(n,e,o),t[26](e),isNaN(t[1])||(e.volume=t[1]),e.muted=t[10],f(n,r,o),f(n,s,o),u(s,a),u(a,h),u(s,x),W(_,s,null),f(n,E,o),f(n,A,o),u(A,P),u(P,R),b(R,t[14]),u(A,S),u(A,z),u(z,U),u(U,M),u(U,q),u(U,C),u(C,I),u(U,F),u(U,G),u(U,J),u(U,K),u(K,V),u(K,X),u(K,Y),u(z,Z),u(z,et),u(et,nt),u(nt,ot),u(z,it),u(z,rt),u(rt,st),u(st,at),u(rt,ct),u(rt,ut),b(ut,t[1]),u(rt,ft),u(rt,dt),u(dt,pt),u(rt,mt),u(rt,gt),u(gt,ht),vt=!0,$t||(yt=[v(e,"volumechange",t[27]),v(e,"durationchange",t[28]),v(e,"timeupdate",Lt),v(e,"play",t[30]),v(e,"pause",t[30]),v(e,"ended",t[31]),v(h,"click",t[19]),v(R,"change",t[34]),v(R,"input",t[34]),v(R,"mousedown",t[16]),v(R,"mouseup",t[17]),v(R,"input",t[18]),v(M,"click",t[23]),v(C,"click",t[19]),v(G,"click",t[22]),v(st,"click",t[20]),v(ut,"change",t[35]),v(ut,"input",t[35]),v(dt,"click",t[21]),v(gt,"click",t[24])],$t=!0)},p(t,o){(!vt||64&o[0]&&!l(e.src,n=t[6]))&&y(e,"src",n),(!vt||2048&o[0])&&(e.loop=t[11]),2&o[0]&&!isNaN(t[1])&&(e.volume=t[1]),1024&o[0]&&(e.muted=t[10]),!xt&&16&o[0]&&!isNaN(t[4])&&(e.currentTime=t[4]),xt=!1,512&o[0]&&wt!==(wt=t[9])&&e[wt?"pause":"play"](),(!vt||32&o[0]&&!l(h.src,$=t[5]))&&y(h,"src",$);const i={};256&o[0]&&(i.songs=t[8]),!O&&4&o[0]&&(O=!0,i.current=t[2],j((()=>O=!1))),_.$set(i),(!vt||16384&o[0])&&k(R,"--value",100*t[14]+"%"),16384&o[0]&&b(R,t[14]),(!vt||512&o[0])&&bt!==(bt=t[9]?"play_arrow":"pause")&&w(I,bt),(!vt||8192&o[0])&&kt!==(kt=tt(t[13],!0)+"")&&w(V,kt),(!vt||8&o[0])&&_t!==(_t=tt(t[3],!0)+"")&&w(Y,_t),(!vt||1&o[0])&&w(ot,t[0]),(!vt||1024&o[0])&&Ot!==(Ot=t[10]?"volume_off":"volume_up")&&w(at,Ot),(!vt||2&o[0])&&k(ut,"--value",100*t[1]+"%"),2&o[0]&&b(ut,t[1]),(!vt||2048&o[0])&&Et!==(Et=t[11]?"repeat_one":"repeat")&&w(pt,Et),(!vt||4096&o[0])&&At!==(At=t[12]?"shuffle":"sort")&&w(ht,At)},i(t){vt||(T(_.$$.fragment,t),vt=!0)},o(t){D(_.$$.fragment,t),vt=!1},d(n){n&&d(e),t[26](null),n&&d(r),n&&d(s),B(_),n&&d(E),n&&d(A),$t=!1,o(yt)}}}function ct(t,e,n){let o,i;const r=O();let{name:s=""}=e,l=null,a=null,c=localStorage.getItem("volume")||1,{files:u=[]}=e,f=null,d=[],p=.1,m=0,g=!0,h=!1,v=!1,$=!0,y=!1,w="./512.png";async function b(t){if(t.length){k(t.find((t=>0===t.type.indexOf("image"))));const e=t.filter((t=>0===t.type.indexOf("audio")));e&&(n(8,d=[]),n(2,f=null));const o=e.map((t=>new Promise((e=>{let n=document.createElement("audio");n.preload="metadata",n.onloadedmetadata=()=>{e({file:t,duration:n.duration,name:t.name.substring(0,t.name.lastIndexOf("."))||t.name}),URL.revokeObjectURL(n.src),n=null},n.src=t.url||URL.createObjectURL(t)}))));n(8,d=(await Promise.all(o)).sort(((t,e)=>t.file.name>e.file.name?1:e.file.name>t.file.name?-1:0))),n(2,f=d[0])}}function k(t){w&&URL.revokeObjectURL(w),n(5,w=t?t.url||URL.createObjectURL(t):"./512.png")}function _(){n(9,g=!g)}function E(){n(2,f=d[(d.indexOf(f)+1)%d.length])}function A(){const t=d.indexOf(f);n(2,f=d[0===t?d.length-1:t-1])}"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",_),navigator.mediaSession.setActionHandler("pause",_),navigator.mediaSession.setActionHandler("nexttrack",E),navigator.mediaSession.setActionHandler("previoustrack",A));return t.$$set=t=>{"name"in t&&n(0,s=t.name),"files"in t&&n(25,u=t.files)},t.$$.update=()=>{var e;2&t.$$.dirty[0]&&localStorage.setItem("volume",c),33554432&t.$$.dirty[0]&&b(u),24&t.$$.dirty[0]&&n(14,o=m/p),16&t.$$.dirty[0]&&n(13,i=m),4&t.$$.dirty[0]&&(e=f,l&&URL.revokeObjectURL(l),e?(n(6,l=e.file.url||URL.createObjectURL(e.file)),n(0,s=e.name)):(n(6,l=null),n(0,s=""))),24&t.$$.dirty[0]&&navigator.mediaSession?.setPositionState({duration:p||0,playbackRate:1,position:m||0})},[s,c,f,p,m,w,l,a,d,g,h,v,y,i,o,r,function({target:t}){$=g,n(9,g=!0),n(13,i=t.value*p)},function(){n(9,g=$),n(4,m=i)},function({target:t}){n(13,i=t.value*p)},_,function(){n(10,h=!h)},function(){n(11,v=!v)},E,A,function(){n(12,y=!y),n(8,d=y?d.sort((()=>.5-Math.random())):d.sort(((t,e)=>t.file.name>e.file.name?1:e.file.name>t.file.name?-1:0)))},u,function(t){L[t?"unshift":"push"]((()=>{a=t,n(7,a)}))},function(){c=this.volume,h=this.muted,n(1,c),n(10,h)},function(){p=this.duration,n(3,p)},function(){m=this.currentTime,n(4,m)},function(){g=this.paused,n(9,g)},()=>!v&&E(),function(t){f=t,n(2,f)},()=>r("popup"),function(){o=x(this.value),n(14,o),n(4,m),n(3,p)},function(){c=x(this.value),n(1,c)}]}class ut extends K{constructor(t){super(),J(this,t,ct,at,r,{name:0,files:25},null,[-1,-1])}}const{document:ft,window:dt}=F;function pt(t){let e,n,i,r,s,l,a,c,u,m,h,x;function w(e){t[6](e)}function b(e){t[7](e)}n=new Z({});let k={};return void 0!==t[0]&&(k.name=t[0]),void 0!==t[1]&&(k.files=t[1]),s=new ut({props:k}),L.push((()=>H(s,"name",w))),L.push((()=>H(s,"files",b))),s.$on("popup",t[4]),ft.title=u=t[0]||"Audio Player",{c(){e=p("div"),Q(n.$$.fragment),i=g(),r=p("div"),Q(s.$$.fragment),c=g(),y(e,"class","sticky-alerts d-flex flex-column-reverse svelte-9sfuxi"),y(r,"class","page-wrapper with-navbar-fixed-bottom svelte-9sfuxi")},m(o,l){f(o,e,l),W(n,e,null),f(o,i,l),f(o,r,l),W(s,r,null),f(o,c,l),m=!0,h||(x=[v(dt,"drop",$(t[2])),v(dt,"dragover",$(t[5])),v(dt,"paste",$(t[3]))],h=!0)},p(t,[e]){const n={};!l&&1&e&&(l=!0,n.name=t[0],j((()=>l=!1))),!a&&2&e&&(a=!0,n.files=t[1],j((()=>a=!1))),s.$set(n),(!m||1&e)&&u!==(u=t[0]||"Audio Player")&&(ft.title=u)},i(t){m||(T(n.$$.fragment,t),T(s.$$.fragment,t),m=!0)},o(t){D(n.$$.fragment,t),D(s.$$.fragment,t),m=!1},d(t){t&&d(e),B(n),t&&d(i),t&&d(r),B(s),t&&d(c),h=!1,o(x)}}}const mt=/\.(3gp|3gpp|3g2|aac|adts|ac3|amr|eac3|flac|mp3|m4a|mp4|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|oga|ogg|mogg|spx|opus|raw|wav|weba)$/i;function gt(t,e,n){const o=(new DOMParser).parseFromString.bind(new DOMParser);let i,r="";async function s(t){const e=t.map((t=>{if(0===t.type.indexOf("audio")||0===t.type.indexOf("image")||0===t.type.indexOf("video"))return t.getAsFile();if("text/plain"===t.type)return new Promise((e=>t.getAsString((t=>{if(mt.test(t)){const n=t.substring(Math.max(t.lastIndexOf("\\"),t.lastIndexOf("/"))+1),o=n.substring(0,n.lastIndexOf("."))||n;e({name:o,url:t,type:"audio/"})}e()}))));if("text/html"===t.type)return new Promise((e=>t.getAsString((t=>{const n=o(t,"text/html").querySelectorAll("audio");n.length&&e(n.map((t=>t?.src))),e()}))));if(!t.type){let e=t.webkitGetAsEntry();return e=e.isDirectory&&e,e?new Promise((t=>{e.createReader().readEntries((async e=>{const n=e.filter((t=>t.isFile)).map((t=>new Promise((e=>t.file(e)))));t(await Promise.all(n))}))})):void 0}}));n(1,i=(await Promise.all(e)).flat().filter((t=>t)))}return navigator.serviceWorker.getRegistrations().then(((t=[])=>{t.find((t=>t.scope===location.origin+"/"))||navigator.serviceWorker.register("/sw.js")})),"launchQueue"in window&&launchQueue.setConsumer((async t=>{if(!t.files.length)return;const e=t.files.map((t=>t.getFile()));n(1,i=(await Promise.all(e)).filter(((t,e,n)=>n.findIndex((e=>e.name===t.name&&e.size===t.size&&e.lastModified===t.lastModified))===e))),console.log(i)})),[r,i,function({dataTransfer:t}){s([...t.items])},function({clipboardData:t}){s([...t.items])},function(){if(!i.length){let t=document.createElement("input");t.type="file",t.multiple="multiple",t.onchange=({target:e})=>{n(1,i=[...e.files]),t=null},t.click()}},function(e){E.call(this,t,e)},function(t){r=t,n(0,r)},function(t){i=t,n(1,i)}]}return new class extends K{constructor(t){super(),J(this,t,gt,pt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
