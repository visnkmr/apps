(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3910(t,e,s){Promise.resolve().then(s.bind(s,7426)),Promise.resolve().then(s.bind(s,8877)),Promise.resolve().then(s.t.bind(s,6050,23))},8298(t,e,s){"use strict";s.d(e,{F(){return c},f(){return h}});var i=s(2265);const r=["light","dark"],n="(prefers-color-scheme: dark)",a="undefined"==typeof window,o=(0,i.createContext)(void 0),u={setTheme(t){},themes:[]},c=()=>{var t;return null!==(t=(0,i.useContext)(o))&&void 0!==t?t:u},h=t=>(0,i.useContext)(o)?i.createElement(i.Fragment,null,t.children):i.createElement(d,t),l=["light","dark"],d=({forcedTheme:t,disableTransitionOnChange:e=!1,enableSystem:s=!0,enableColorScheme:a=!0,storageKey:u="theme",themes:c=l,defaultTheme:h=(s?"system":"light"),attribute:d="data-theme",value:v,children:g,nonce:b})=>{const[C,w]=(0,i.useState)((()=>m(u,h))),[O,S]=(0,i.useState)((()=>m(u))),q=v?Object.values(v):c,x=(0,i.useCallback)((t=>{let i=t;if(!i)return;"system"===t&&s&&(i=p());const n=v?v[i]:i,o=e?y():null,u=document.documentElement;if("class"===d?(u.classList.remove(...q),n&&u.classList.add(n)):n?u.setAttribute(d,n):u.removeAttribute(d),a){const t=r.includes(h)?h:null,e=r.includes(i)?i:t;u.style.colorScheme=e}null==o||o()}),[]),P=(0,i.useCallback)((t=>{w(t);try{localStorage.setItem(u,t)}catch(t){}}),[t]),E=(0,i.useCallback)((e=>{const i=p(e);S(i),"system"===C&&s&&!t&&x("system")}),[C,t]);(0,i.useEffect)((()=>{const t=window.matchMedia(n);return t.addListener(E),E(t),()=>t.removeListener(E)}),[E]),(0,i.useEffect)((()=>{const t=t=>{t.key===u&&P(t.newValue||h)};return window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)}),[P]),(0,i.useEffect)((()=>{x(null!=t?t:C)}),[t,C]);const k=(0,i.useMemo)((()=>({theme:C,setTheme:P,forcedTheme:t,resolvedTheme:"system"===C?O:C,themes:s?[...c,"system"]:c,systemTheme:s?O:void 0})),[C,P,t,O,s,c]);return i.createElement(o.Provider,{value:k},i.createElement(f,{forcedTheme:t,disableTransitionOnChange:e,enableSystem:s,enableColorScheme:a,storageKey:u,themes:c,defaultTheme:h,attribute:d,value:v,children:g,attrs:q,nonce:b}),g)},f=(0,i.memo)((({forcedTheme:t,storageKey:e,attribute:s,enableSystem:a,enableColorScheme:o,defaultTheme:u,value:c,attrs:h,nonce:l})=>{const d="system"===u,f="class"===s?`var d=document.documentElement,c=d.classList;c.remove(${h.map((t=>`'${t}'`)).join(",")});`:`var d=document.documentElement,n='${s}',s='setAttribute';`,m=o?r.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(t,e=!1,i=!0)=>{const n=c?c[t]:t,a=e?t+"|| ''":`'${n}'`;let u="";return o&&i&&!e&&r.includes(t)&&(u+=`d.style.colorScheme = '${t}';`),"class"===s?u+=e||n?`c.add(${a})`:"null":n&&(u+=`d[s](n,${a})`),u},p=t?`!function(){${f}${y(t)}}()`:a?`!function(){try{${f}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${d})){var t='${n}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${d?"":"else{"+y(u,!1,!1)+"}"}${m}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${e}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(u,!1,!1)};}${m}}catch(t){}}();`;return i.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})}),(()=>!0)),m=(t,e)=>{if(a)return;let s;try{s=localStorage.getItem(t)||void 0}catch(t){}return s||e},y=()=>{const t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(t)}),1)}},p=t=>(t||(t=window.matchMedia(n)),t.matches?"dark":"light")},7426(t,e,s){"use strict";function i(t){return t.options.scope?.id??t.mutationId+""}function r(t){return{onFetch(e,s){const i=e.options,r=e.fetchOptions?.meta?.fetchMore?.direction,o=e.state.data?.pages||[],u=e.state.data?.pageParams||[];let c={pages:[],pageParams:[]},l=0;const d=async()=>{let s=!1;const d=(0,h.cG)(e.options,e.fetchOptions),f=async(t,i,r)=>{if(s)return Promise.reject();if(null==i&&t.pages.length)return Promise.resolve(t);const n={queryKey:e.queryKey,pageParam:i,direction:r?"backward":"forward",meta:e.options.meta};Object.defineProperty(n,"signal",{enumerable:!0,get(){return e.signal.aborted?s=!0:e.signal.addEventListener("abort",(()=>{s=!0})),e.signal}});const a=await d(n),{maxPages:o}=e.options,u=r?h.Ht:h.VX;return{pages:u(t.pages,a,o),pageParams:u(t.pageParams,i,o)}};if(r&&o.length){const t="backward"===r,e={pages:o,pageParams:u},s=(t?a:n)(i,e);c=await f(e,s,t)}else{const e=t??o.length;do{const t=0===l?u[0]??i.initialPageParam:n(i,c);if(l>0&&null==t)break;c=await f(c,t),l++}while(e>l)}return c};e.options.persister?e.fetchFn=()=>e.options.persister?.(d,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=d}}}function n(t,{pages:e,pageParams:s}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}function a(t,{pages:e,pageParams:s}){return e.length>0?t.getPreviousPageParam?.(e[0],e,s[0],s):void 0}function o(t){let{children:e}=t;const[s]=c.useState((()=>new w));return(0,u.jsx)(S.f,{attribute:"class",children:(0,u.jsx)(O.aH,{client:s,children:e})})}var u,c,h,l,d,f,m,y,p,v,g,b,C,w,O,S;s.d(e,{Providers(){return o}}),u=s(7437),c=s(2265),h=s(5345),l=s(1733),d=s(8238),f=s(4112),m=class extends f.l{constructor(t={}){super(),this.config=t,this.#t=new Map}#t;build(t,e,s){const i=e.queryKey,r=e.queryHash??(0,h.Rm)(i,e);let n=this.get(r);return n||(n=new l.A({cache:this,queryKey:i,queryHash:r,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(n)),n}add(t){this.#t.has(t.queryHash)||(this.#t.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const e=this.#t.get(t.queryHash);e&&(t.destroy(),e===t&&this.#t.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){d.V.batch((()=>{this.getAll().forEach((t=>{this.remove(t)}))}))}get(t){return this.#t.get(t)}getAll(){return[...this.#t.values()]}find(t){const e={exact:!0,...t};return this.getAll().find((t=>(0,h._x)(e,t)))}findAll(t={}){const e=this.getAll();return Object.keys(t).length>0?e.filter((e=>(0,h._x)(t,e))):e}notify(t){d.V.batch((()=>{this.listeners.forEach((e=>{e(t)}))}))}onFocus(){d.V.batch((()=>{this.getAll().forEach((t=>{t.onFocus()}))}))}onOnline(){d.V.batch((()=>{this.getAll().forEach((t=>{t.onOnline()}))}))}},y=s(7989),p=s(1255),v=class extends y.F{#e;#s;#i;constructor(t){super(),this.mutationId=t.mutationId,this.#s=t.mutationCache,this.#e=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#e.includes(t)||(this.#e.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#e=this.#e.filter((e=>e!==t)),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(t){this.#i=(0,p.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#r({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});const e="pending"===this.state.status,s=!this.#i.canStart();try{if(!e){this.#r({type:"pending",variables:t,isPaused:s}),await(this.#s.config.onMutate?.(t,this));const e=await(this.options.onMutate?.(t));e!==this.state.context&&this.#r({type:"pending",context:e,variables:t,isPaused:s})}const i=await this.#i.start();return await(this.#s.config.onSuccess?.(i,t,this.state.context,this)),await(this.options.onSuccess?.(i,t,this.state.context)),await(this.#s.config.onSettled?.(i,null,this.state.variables,this.state.context,this)),await(this.options.onSettled?.(i,null,t,this.state.context)),this.#r({type:"success",data:i}),i}catch(e){try{throw await(this.#s.config.onError?.(e,t,this.state.context,this)),await(this.options.onError?.(e,t,this.state.context)),await(this.#s.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this)),await(this.options.onSettled?.(void 0,e,t,this.state.context)),e}finally{this.#r({type:"error",error:e})}}finally{this.#s.runNext(this)}}#r(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),d.V.batch((()=>{this.#e.forEach((e=>{e.onMutationUpdate(t)})),this.#s.notify({mutation:this,type:"updated",action:t})}))}},g=class extends f.l{constructor(t={}){super(),this.config=t,this.#n=new Map,this.#a=Date.now()}#n;#a;build(t,e,s){const i=new v({mutationCache:this,mutationId:++this.#a,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){const e=i(t),s=this.#n.get(e)??[];s.push(t),this.#n.set(e,s),this.notify({type:"added",mutation:t})}remove(t){const e=i(t);if(this.#n.has(e)){const s=this.#n.get(e)?.filter((e=>e!==t));s&&(0===s.length?this.#n.delete(e):this.#n.set(e,s))}this.notify({type:"removed",mutation:t})}canRun(t){const e=this.#n.get(i(t))?.find((t=>"pending"===t.state.status));return!e||e===t}runNext(t){const e=this.#n.get(i(t))?.find((e=>e!==t&&e.state.isPaused));return e?.continue()??Promise.resolve()}clear(){d.V.batch((()=>{this.getAll().forEach((t=>{this.remove(t)}))}))}getAll(){return[...this.#n.values()].flat()}find(t){const e={exact:!0,...t};return this.getAll().find((t=>(0,h.X7)(e,t)))}findAll(t={}){return this.getAll().filter((e=>(0,h.X7)(t,e)))}notify(t){d.V.batch((()=>{this.listeners.forEach((e=>{e(t)}))}))}resumePausedMutations(){const t=this.getAll().filter((t=>t.state.isPaused));return d.V.batch((()=>Promise.all(t.map((t=>t.continue().catch(h.ZT))))))}},b=s(7045),C=s(7853),w=class{#o;#s;#u;#c;#h;#l;#d;#f;constructor(t={}){this.#o=t.queryCache||new m,this.#s=t.mutationCache||new g,this.#u=t.defaultOptions||{},this.#c=new Map,this.#h=new Map,this.#l=0}mount(){this.#l++,1===this.#l&&(this.#d=b.j.subscribe((async t=>{t&&(await this.resumePausedMutations(),this.#o.onFocus())})),this.#f=C.N.subscribe((async t=>{t&&(await this.resumePausedMutations(),this.#o.onOnline())})))}unmount(){this.#l--,0===this.#l&&(this.#d?.(),this.#d=void 0,this.#f?.(),this.#f=void 0)}isFetching(t){return this.#o.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#s.findAll({...t,status:"pending"}).length}getQueryData(t){const e=this.defaultQueryOptions({queryKey:t});return this.#o.get(e.queryHash)?.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),s=this.#o.build(this,e),i=s.state.data;return void 0===i?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime((0,h.KC)(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return this.#o.findAll(t).map((({queryKey:t,state:e})=>[t,e.data]))}setQueryData(t,e,s){const i=this.defaultQueryOptions({queryKey:t}),r=this.#o.get(i.queryHash),n=r?.state.data,a=(0,h.SE)(e,n);if(void 0!==a)return this.#o.build(this,i).setData(a,{...s,manual:!0})}setQueriesData(t,e,s){return d.V.batch((()=>this.#o.findAll(t).map((({queryKey:t})=>[t,this.setQueryData(t,e,s)]))))}getQueryState(t){const e=this.defaultQueryOptions({queryKey:t});return this.#o.get(e.queryHash)?.state}removeQueries(t){const e=this.#o;d.V.batch((()=>{e.findAll(t).forEach((t=>{e.remove(t)}))}))}resetQueries(t,e){const s=this.#o,i={type:"active",...t};return d.V.batch((()=>(s.findAll(t).forEach((t=>{t.reset()})),this.refetchQueries(i,e))))}cancelQueries(t,e={}){const s={revert:!0,...e},i=d.V.batch((()=>this.#o.findAll(t).map((t=>t.cancel(s)))));return Promise.all(i).then(h.ZT).catch(h.ZT)}invalidateQueries(t,e={}){return d.V.batch((()=>{if(this.#o.findAll(t).forEach((t=>{t.invalidate()})),"none"===t?.refetchType)return Promise.resolve();const s={...t,type:t?.refetchType??t?.type??"active"};return this.refetchQueries(s,e)}))}refetchQueries(t,e={}){const s={...e,cancelRefetch:e.cancelRefetch??!0},i=d.V.batch((()=>this.#o.findAll(t).filter((t=>!t.isDisabled())).map((t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(h.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))));return Promise.all(i).then(h.ZT)}fetchQuery(t){const e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);const s=this.#o.build(this,e);return s.isStaleByTime((0,h.KC)(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(h.ZT).catch(h.ZT)}fetchInfiniteQuery(t){return t.behavior=r(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(h.ZT).catch(h.ZT)}ensureInfiniteQueryData(t){return t.behavior=r(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return C.N.isOnline()?this.#s.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#o}getMutationCache(){return this.#s}getDefaultOptions(){return this.#u}setDefaultOptions(t){this.#u=t}setQueryDefaults(t,e){this.#c.set((0,h.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...this.#c.values()],s={};return e.forEach((e=>{(0,h.to)(t,e.queryKey)&&Object.assign(s,e.defaultOptions)})),s}setMutationDefaults(t,e){this.#h.set((0,h.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...this.#h.values()];let s={};return e.forEach((e=>{(0,h.to)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})})),s}defaultQueryOptions(t){if(t._defaulted)return t;const e={...this.#u.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,h.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===h.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#u.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#o.clear(),this.#s.clear()}},O=s(9827),S=s(8298)},8877(t,e,s){"use strict";function i(t){const{theme:e,setTheme:s}=(0,o.F)();return(0,n.useEffect)((()=>{const t=document.getElementById("theme-toggle-dark-icon"),s=document.getElementById("theme-toggle-light-icon");"dark"===e?(t.style.display="block",s.style.display="none"):(t.style.display="none",s.style.display="block")}),[e]),(0,r.jsx)("div",{className:"dark:bg-gray-900",children:(0,r.jsxs)("div",{className:"overflow-hidden",children:[(0,r.jsx)("div",{className:"float-left p-2.5",children:(0,r.jsx)("div",{className:"flex justify-start ",children:(0,r.jsx)("div",{className:"m-3  border border-gray-300",children:t.showback?(0,r.jsx)("button",{onClick(){return history.back()},className:"p-2 ml-1",children:(0,r.jsxs)("div",{className:"flex items-center whitespace-nowrap",children:[(0,r.jsx)(u,{}),"Back"]})}):(0,r.jsx)("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("button",{className:"p-2 ml-1",children:(0,r.jsxs)("div",{className:"flex items-center whitespace-nowrap",children:[(0,r.jsx)(u,{}),"Back"]})})})})})}),(0,r.jsx)("div",{className:"float-right p-2.5",children:(0,r.jsxs)("button",{id:"theme-toggle",type:"button","aria-label":"light dark mode toggle",className:"text-gray-500  rounded-lg text-sm p-2.5",onClick(){return s("light"===e?"dark":"light")},children:[(0,r.jsx)("svg",{id:"theme-toggle-dark-icon",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",style:{display:"none"},children:(0,r.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),(0,r.jsx)("svg",{id:"theme-toggle-light-icon",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",style:{display:"none"},children:(0,r.jsx)("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"})})]})})]})})}var r,n,a,o;s.d(e,{default(){return i}}),r=s(7437),n=s(2265),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const u=((t,e)=>{const s=(0,n.forwardRef)(((s,i)=>{let{color:r="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:c,children:h,...l}=s;return(0,n.createElement)("svg",{ref:i,...a,width:o,height:o,stroke:r,strokeWidth:c?24*+u/+o:u,className:"lucide lucide-".concat((d=t,d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase())),...l},[...e.map((t=>{let[e,s]=t;return(0,n.createElement)(e,s)})),...(Array.isArray(h)?h:[h])||[]]);var d}));return s.displayName="".concat(t),s})("ArrowLeft",[["line",{x1:"19",x2:"5",y1:"12",y2:"12",key:"9fu2vq"}],["polyline",{points:"12 19 5 12 12 5",key:"1ksm0z"}]]);o=s(8298),s(9227)},6050(){},9227(){},7045(t,e,s){"use strict";var i,r,n,a;s.d(e,{j(){return a}}),i=s(4112),r=s(5345),n=class extends i.l{#m;#y;#p;constructor(){super(),this.#p=t=>{if(!r.sk&&window.addEventListener){const e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#y||this.setEventListener(this.#p)}onUnsubscribe(){this.hasListeners()||(this.#y?.(),this.#y=void 0)}setEventListener(t){this.#p=t,this.#y?.(),this.#y=t((t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()}))}setFocused(t){this.#m!==t&&(this.#m=t,this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach((e=>{e(t)}))}isFocused(){return"boolean"==typeof this.#m?this.#m:"hidden"!==globalThis.document?.visibilityState}},a=new n},8238(t,e,s){"use strict";s.d(e,{V(){return i}});var i=(()=>{let t=[],e=0,s=t=>{t()},i=t=>{t()},r=t=>setTimeout(t,0);const n=i=>{e?t.push(i):r((()=>{s(i)}))};return{batch(n){let a;e++;try{a=n()}finally{e--,e||(()=>{const e=t;t=[],e.length&&r((()=>{i((()=>{e.forEach((t=>{s(t)}))}))}))})()}return a},batchCalls(t){return(...e)=>{n((()=>{t(...e)}))}},schedule:n,setNotifyFunction(t){s=t},setBatchNotifyFunction(t){i=t},setScheduler(t){r=t}}})()},7853(t,e,s){"use strict";var i,r,n,a;s.d(e,{N(){return a}}),i=s(4112),r=s(5345),n=class extends i.l{#v=!0;#y;#p;constructor(){super(),this.#p=t=>{if(!r.sk&&window.addEventListener){const e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#y||this.setEventListener(this.#p)}onUnsubscribe(){this.hasListeners()||(this.#y?.(),this.#y=void 0)}setEventListener(t){this.#p=t,this.#y?.(),this.#y=t(this.setOnline.bind(this))}setOnline(t){this.#v!==t&&(this.#v=t,this.listeners.forEach((e=>{e(t)})))}isOnline(){return this.#v}},a=new n},1733(t,e,s){"use strict";function i(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,a.Kw)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}var r,n,a,o,u;s.d(e,{A(){return u},z(){return i}}),r=s(5345),n=s(8238),a=s(1255),o=s(7989),u=class extends o.F{#g;#b;#C;#i;#u;#w;constructor(t){super(),this.#w=!1,this.#u=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#C=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#g=(t=>{const e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}})(this.options),this.state=t.state??this.#g,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(t){this.options={...this.#u,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#C.remove(this)}setData(t,e){const s=(0,r.oE)(this.state.data,t,this.options);return this.#r({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#r({type:"setState",state:t,setStateOptions:e})}cancel(t){const e=this.#i?.promise;return this.#i?.cancel(t),e?e.then(r.ZT).catch(r.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#g)}isActive(){return this.observers.some((t=>!1!==(0,r.Nc)(t.options.enabled,this)))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===r.CN||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some((t=>t.getCurrentResult().isStale)):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,r.Kp)(this.state.dataUpdatedAt,t)}onFocus(){const t=this.observers.find((t=>t.shouldFetchOnWindowFocus()));t?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){const t=this.observers.find((t=>t.shouldFetchOnReconnect()));t?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#C.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter((e=>e!==t)),this.observers.length||(this.#i&&(this.#w?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#C.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#r({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus)if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise;if(t&&this.setOptions(t),!this.options.queryFn){const t=this.observers.find((t=>t.options.queryFn));t&&this.setOptions(t.options)}const s=new AbortController,i=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#w=!0,s.signal)})},n={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{const t=(0,r.cG)(this.options,e),s={queryKey:this.queryKey,meta:this.meta};return i(s),this.#w=!1,this.options.persister?this.options.persister(t,s,this):t(s)}};i(n),this.options.behavior?.onFetch(n,this),this.#b=this.state,"idle"!==this.state.fetchStatus&&this.state.fetchMeta===n.fetchOptions?.meta||this.#r({type:"fetch",meta:n.fetchOptions?.meta});const o=t=>{(0,a.DV)(t)&&t.silent||this.#r({type:"error",error:t}),(0,a.DV)(t)||(this.#C.config.onError?.(t,this),this.#C.config.onSettled?.(this.state.data,t,this)),this.scheduleGc()};return this.#i=(0,a.Mz)({initialPromise:e?.initialPromise,fn:n.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0!==t){try{this.setData(t)}catch(t){return void o(t)}this.#C.config.onSuccess?.(t,this),this.#C.config.onSettled?.(t,this.state.error,this),this.scheduleGc()}else o(Error(this.queryHash+" data is undefined"))},onError:o,onFail:(t,e)=>{this.#r({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:n.options.retry,retryDelay:n.options.retryDelay,networkMode:n.options.networkMode,canRun(){return!0}}),this.#i.start()}#r(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...i(e.data,this.options),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=t.error;return(0,a.DV)(s)&&s.revert&&this.#b?{...this.#b,fetchStatus:"idle"}:{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),n.V.batch((()=>{this.observers.forEach((t=>{t.onQueryUpdate()})),this.#C.notify({query:this,type:"updated",action:t})}))}}},7989(t,e,s){"use strict";var i,r;s.d(e,{F(){return r}}),i=s(5345),r=class{#O;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.gcTime)&&(this.#O=setTimeout((()=>{this.optionalRemove()}),this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i.sk?1/0:3e5))}clearGcTimeout(){this.#O&&(clearTimeout(this.#O),this.#O=void 0)}}},1255(t,e,s){"use strict";function i(t){return Math.min(1e3*2**t,3e4)}function r(t){return"online"!==(t??"online")||u.N.isOnline()}function n(t){return t instanceof l}function a(t){let e,s=!1,n=0,a=!1;const d=(0,c.O)(),f=()=>o.j.isFocused()&&("always"===t.networkMode||u.N.isOnline())&&t.canRun(),m=()=>r(t.networkMode)&&t.canRun(),y=s=>{a||(a=!0,t.onSuccess?.(s),e?.(),d.resolve(s))},p=s=>{a||(a=!0,t.onError?.(s),e?.(),d.reject(s))},v=()=>new Promise((s=>{e=t=>{(a||f())&&s(t)},t.onPause?.()})).then((()=>{e=void 0,a||t.onContinue?.()})),g=()=>{if(a)return;let e;const r=0===n?t.initialPromise:void 0;try{e=r??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch((e=>{if(a)return;const r=t.retry??(h.sk?0:3),o=t.retryDelay??i,u="function"==typeof o?o(n,e):o,c=!0===r||"number"==typeof r&&r>n||"function"==typeof r&&r(n,e);!s&&c?(n++,t.onFail?.(n,e),(0,h._v)(u).then((()=>f()?void 0:v())).then((()=>{s?p(e):g()}))):p(e)}))};return{promise:d,cancel(e){a||(p(new l(e)),t.abort?.())},continue(){return e?.(),d},cancelRetry(){s=!0},continueRetry(){s=!1},canStart:m,start(){return m()?g():v().then(g),d}}}var o,u,c,h,l;s.d(e,{DV(){return n},Kw(){return r},Mz(){return a}}),o=s(7045),u=s(7853),c=s(6803),h=s(5345),l=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}}},4112(t,e,s){"use strict";s.d(e,{l(){return i}});var i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},6803(t,e,s){"use strict";function i(){function t(t){Object.assign(i,t),delete i.resolve,delete i.reject}let e,s;const i=new Promise(((t,i)=>{e=t,s=i}));return i.status="pending",i.catch((()=>{})),i.resolve=s=>{t({status:"fulfilled",value:s}),e(s)},i.reject=e=>{t({status:"rejected",reason:e}),s(e)},i}s.d(e,{O(){return i}})},5345(t,e,s){"use strict";function i(){}function r(t,e){return"function"==typeof t?t(e):t}function n(t){return"number"==typeof t&&t>=0&&t!==1/0}function a(t,e){return Math.max(t+(e||0)-Date.now(),0)}function o(t,e){return"function"==typeof t?t(e):t}function u(t,e){return"function"==typeof t?t(e):t}function c(t,e){const{type:s="all",exact:i,fetchStatus:r,predicate:n,queryKey:a,stale:o}=t;if(a)if(i){if(e.queryHash!==l(a,e.options))return!1}else if(!f(e.queryKey,a))return!1;if("all"!==s){const t=e.isActive();if("active"===s&&!t)return!1;if("inactive"===s&&t)return!1}return!("boolean"==typeof o&&e.isStale()!==o||r&&r!==e.state.fetchStatus||n&&!n(e))}function h(t,e){const{exact:s,status:i,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(s){if(d(e.options.mutationKey)!==d(n))return!1}else if(!f(e.options.mutationKey,n))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function l(t,e){return(e?.queryKeyHashFn||d)(t)}function d(t){return JSON.stringify(t,((t,e)=>v(e)?Object.keys(e).sort().reduce(((t,s)=>(t[s]=e[s],t)),{}):e))}function f(t,e){return t===e||typeof t==typeof e&&!(!t||!e||"object"!=typeof t||"object"!=typeof e)&&!Object.keys(e).some((s=>!f(t[s],e[s])))}function m(t,e){if(t===e)return t;const s=p(t)&&p(e);if(s||v(t)&&v(e)){const i=s?t:Object.keys(t),r=i.length,n=s?e:Object.keys(e),a=n.length,o=s?[]:{};let u=0;for(let r=0;a>r;r++){const a=s?r:n[r];(!s&&i.includes(a)||s)&&void 0===t[a]&&void 0===e[a]?(o[a]=void 0,u++):(o[a]=m(t[a],e[a]),o[a]===t[a]&&void 0!==t[a]&&u++)}return r===a&&u===r?t:o}return e}function y(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const s in t)if(t[s]!==e[s])return!1;return!0}function p(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function v(t){if(!g(t))return!1;const e=t.constructor;if(void 0===e)return!0;const s=e.prototype;return!!g(s)&&!!s.hasOwnProperty("isPrototypeOf")&&Object.getPrototypeOf(t)===Object.prototype}function g(t){return"[object Object]"==={}.toString.call(t)}function b(t){return new Promise((e=>{setTimeout(e,t)}))}function C(t,e,s){return"function"==typeof s.structuralSharing?s.structuralSharing(t,e):!1!==s.structuralSharing?m(t,e):e}function w(t,e,s=0){const i=[...t,e];return s&&i.length>s?i.slice(1):i}function O(t,e,s=0){const i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}function S(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==x?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))}var q,x;s.d(e,{CN(){return x},Ht(){return O},KC(){return o},Kp(){return a},Nc(){return u},PN(){return n},Rm(){return l},SE(){return r},VS(){return y},VX(){return w},X7(){return h},Ym(){return d},ZT(){return i},_v(){return b},_x(){return c},cG(){return S},oE(){return C},sk(){return q},to(){return f}}),q="undefined"==typeof window||"Deno"in globalThis,x=Symbol()},9827(t,e,s){"use strict";var i,r,n,a,o;s.d(e,{NL(){return a},aH(){return o}}),i=s(2265),r=s(7437),n=i.createContext(void 0),a=t=>{const e=i.useContext(n);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},o=t=>{let{client:e,children:s}=t;return i.useEffect((()=>(e.mount(),()=>{e.unmount()})),[e]),(0,r.jsx)(n.Provider,{value:e,children:s})}}},t=>{var e;t.O(0,[269,387],(()=>t(t.s=3910))),e=t.O(),_N_E=e}]);