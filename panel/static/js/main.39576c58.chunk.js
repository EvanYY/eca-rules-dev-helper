(this["webpackJsonpeac-panel-ui"]=this["webpackJsonpeac-panel-ui"]||[]).push([[0],{140:function(e,t,n){},325:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(27),a=n.n(i),o=(n(140),n(141),n(76)),s=n.n(o),u=(n(143),n(93)),l=n.n(u),d=(n(145),n(56)),f=n.n(d),v=n(22),j=n(2),b=function(e){var t=Object(r.useState)(!0),n=Object(v.a)(t,2),c=n[0],i=n[1],a=Object(r.useState)("\u5f00\u59cb\u5f55\u5236"),o=Object(v.a)(a,2),s=o[0],u=o[1],d=e.control,b=e.stateUI,h=b.menu,p=b.loading;return Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(f.a,{onClick:function(){c?(i(!1),u("\u7ed3\u675f\u5f55\u5236"),d.start()):(i(!0),u("\u5f00\u59cb\u5f55\u5236"),d.stop())},disabled:p,children:b.loading?"\u6b63\u5728\u89e3\u6790\u6a21\u677f":s}),Object(j.jsx)(f.a,{disabled:true,children:"\u5bfc\u5165"}),Object(j.jsx)(f.a,{disabled:true,children:"\u5bfc\u51fa"}),0!==h.length&&Object(j.jsx)(f.a,{type:"primary",danger:!0,onClick:function(){return d.removeMenu()},children:"\u6e05\u7a7a\u5f55\u5236\u7ed3\u679c"})]})})},h=n(19);function p(e){return Object(j.jsx)("div",{style:{gap:"8px"},className:"eca-space align-center",children:e.children})}var O=function(e){var t=e.cur,n=e.setcur,r=e.tabs;return Object(j.jsx)("div",{className:"eca-tabs-content",children:Object(j.jsxs)(p,{children:[r.map((function(e,r){return Object(j.jsx)("div",{className:"eca-tabs-item ".concat(t===e.types?"is-active-tab":""),onClick:function(){return n(e.types)},children:e.label},r)})),e.children]})})},m=function(e){var t=e.options,n=e.active,r=e.isActiveClass,c=e.setState;return Object(j.jsx)("div",{className:"eca-list-group",children:t.length?t.map((function(t,i){return Object(j.jsxs)("div",{className:"eca-list-item ".concat((null===n||void 0===n?void 0:n.id)===(null===t||void 0===t?void 0:t.id)?r||"is-active":""),onClick:function(){return function(e,t){e!==(null===n||void 0===n?void 0:n.id)&&c(t||{})}(t.id,t)},children:[Object(j.jsx)("div",{title:t.label,children:t.label}),Object(j.jsx)("div",{children:e.extend&&(null===e||void 0===e?void 0:e.extend(t))})]},i)})):"\u6682\u65e0\u6570\u636e"})},x=n(128),g=n.n(x),y=function(e){return Object(j.jsx)("div",{className:"pre-format",children:Object(j.jsx)(g.a,{src:e.json,displayObjectSize:!1,displayDataTypes:!1})})},w=n(133),S=n(55),E=n(95),M=["oldStr","newStr","context","theme"],N=function(e){var t=e.oldStr,n=void 0===t?"":t,c=e.newStr,i=void 0===c?"":c,a=e.context,o=e.theme,s=void 0===o?"auto":o,u=Object(w.a)(e,M),l=Object(r.useMemo)((function(){var e=["",n||"",i||"","","",{context:a}],t=S.createPatch.apply(void 0,e),r=Object(E.b)(t,Object(h.a)(Object(h.a)({},u),{},{drawFileList:!1,matching:"lines"}));return function(e){return e.replace(/<span class="d2h-code-line-ctn">(.+?)<\/span>/g,'<span class="d2h-code-line-ctn"><code>$1</code></span>')}(Object(E.a)(r,Object(h.a)(Object(h.a)({},u),{},{drawFileList:!1,matching:"lines"})))}),[n,i,a,u]);return Object(j.jsx)("div",{className:"react-code-diff-lite ".concat(s),dangerouslySetInnerHTML:{__html:l}})};N.defaultProps={oldStr:"",newStr:"",context:0,outputFormat:"line-by-line"};var k=N,C=n(129),I=n(130);function D(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var L=/\s/;var _=/^\s+/;function F(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&L.test(e.charAt(t)););return t}(e)+1).replace(_,""):e}var T=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,U=/^0o[0-7]+$/i,V=parseInt;function A(e){if("number"==typeof e)return e;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=F(e);var n=R.test(e);return n||U.test(e)?V(e.slice(2),n?2:8):T.test(e)?NaN:+e}var H="Expected a function",P=Math.max,z=Math.min,J=function(){return Date.now()};var W=function(e){return{id:e.batchId,label:e.trigger.title,time:G(e.trigger.time,"HH\u65f6MM\u5206SS\u79d2MS\u6beb\u79d2"),store:{rules:{nodes:e.fields.map((function(e){return{name:e.field,store:e.detail}})),links:e.rules.map((function(e){return{source:e.dependent,target:e.target,value:e.weight,effect:e.effect}}))},effect:{pre:e.valueDiffer.oldValue,next:e.valueDiffer.newValue}}}},q=function(e,t,n){return e.length?{id:Y(),timeRange:{start:G(t.start),stop:G(t.stop)},store:e.map((function(e){return W(e)})),status:n||"resolve"}:null},$=function(e){try{return JSON.parse(e)}catch(t){return[]}},B=function(e){return document.getElementById(e)},K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;try{return JSON.stringify(e,null,t)}catch(n){return JSON.stringify({error:"".concat(e," failed praser to string")},null,t)}};function Y(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:13,t="abcdefghijklmnopqrstuvwxyz0123456789",n="",r=0;r<e;r++){var c=Math.random()*t.length;n+=t[parseInt(c,10)]}return n}function G(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:MM:SS";try{t=new Date(e)}catch(o){throw new Error("dateFormat \u65e5\u671f\u521d\u59cb\u5316\u51fa\u9519")}var r,c=n,i={"y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString(),"MS+":t.getMilliseconds().toString()};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r=new RegExp("("+a+")").exec(c))&&(c=c.replace(r[1],1===r[1].length?i[a]:i[a].padStart(r[1].length,"0")));return c}var Q,X,Z=function(){return(new Date).getTime()},ee=function(){function e(){Object(C.a)(this,e),this.state={}}return Object(I.a)(e,[{key:"addEvent",value:function(e,t){e in this.state?this.state[e].some((function(e){return e===t}))||this.state[e].push(t):this.state[e]=[t]}},{key:"removeEvent",value:function(e,t){if(!(e in this.state))return console.error("".concat(e," is not in state"));var n=this.state[e].findIndex((function(e){return e===t}));-1!==n&&this.state[e].splice(n,1)}},{key:"dispatchEvent",value:function(e,t,n){e in this.state?this.state[e].forEach((function(e){return e(t,n)})):"".concat(e," is not in state")}}]),e}(),te=function(e,t,n){return"".concat(e,"__").concat(t,"__").concat(n)},ne=function(e){var t=e.options,n=e.active,r=e.setState,c=n.store,i=c.variables,a=c.params,o=c.result;return Object(j.jsxs)("div",{className:"list-json",children:[Object(j.jsx)("div",{className:"list-json-menu",children:m({options:t,setState:r,active:n,isActiveClass:"is-active-list",extend:function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:["\u8fdb\u7a0b: ",e.store.sequence]})})}})}),Object(j.jsxs)("div",{className:"list-json-container",children:[Object(j.jsxs)("div",{className:"echo-json",children:[Object(j.jsx)("div",{children:"\u89c4\u5219\u5b9a\u4e49"}),Object(j.jsx)(y,{json:a})]}),Object(j.jsxs)("div",{className:"echo-json",children:[Object(j.jsx)("div",{children:"\u8868\u8fbe\u5f0f\u7684\u503c"}),Object(j.jsx)(y,{json:i})]}),Object(j.jsxs)("div",{className:"echo-json",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"\u503c\u53d8\u5316"}),o.type&&Object(j.jsxs)("span",{children:["(\u7c7b\u578b:",o.type,")"]})]}),Object(j.jsx)("div",{className:"pre-format",style:{position:"relative",minWidth:400},children:Object(j.jsx)(k,{oldStr:K(o.pre),newStr:K(o.next),context:15e4,theme:"light",outputFormat:"side-by-side"})})]})]})]})},re=new ee,ce="searchLink",ie="viewResize",ae=n(74),oe=n(57),se=function(e){var t,n=e.stateUI.curMenu,c=e.stateUI.dictionary,i=n.store.rules,a=Object(r.useState)(""),o=Object(v.a)(a,2),s=o[0],u=o[1],l=Object(r.useState)({options:[],active:{}}),d=Object(v.a)(l,2),f=d[0],b=d[1],p="eca-panel-chart",O=function(){var e=oe.a(B(p));e&&e.resize()},m=function(e){var t=function(e,t){return e.effect.map((function(e){var n=te(e.ruleId,e.actionIndex,e.actionName),r=t[n];return{id:n,label:e.actionName,store:{variables:e.variables,params:r||{},result:{pre:e.result.oldValue,next:e.result.newValue,type:e.result.type||""},sequence:e.sequence}}}))}(e,c),n=t.length;b({active:t[0]||{},options:n?t:[]})},x=function(e){var t=oe.a(B(p));try{t&&t.setOption(function(e,t,n){var r=Math.max.apply(Math,Object(ae.a)(e.map((function(e){return e.name.length})))),c={tooltip:{trigger:"item"},series:{type:"sankey",right:Math.round(6.2*r)+20+"px",left:"20px",top:"20px",bottom:"20px",emphasis:{focus:"adjacency"},data:e.map((function(e){return{name:e.name,key:e.name,store:e.store}})),links:t,lineStyle:{color:"gradient",curveness:.5}}};if(!n)return Object(h.a)({},c);c.series.emphasis={focus:"none"};var i={lineStyle:{opacity:1}};return c.series.links=t.map((function(e){return e.source===n.source&&e.target===n.target?Object(h.a)(Object(h.a)({},e),i):e})),c.series.lineStyle.opacity=.1,Object(h.a)({},c)}(i.nodes,i.links,e||null))}catch(n){u("\u6851\u57fa\u56fe\u7ed8\u5236\u5931\u8d25 \u53ef\u80fd\u5b58\u5728\u73af")}};Object(r.useEffect)((function(){var e=oe.a(B(p));void 0===e&&((e=oe.b(B(p))).on("click",(function(e){if(e.data.source){var t=e.data;re.dispatchEvent(ce,null),m(t),x(t)}})),e.resize(),x())}),[]),Object(r.useEffect)((function(){return re.addEvent(ie,O),function(){re.removeEvent(ie,O)}}),[]),Object(r.useEffect)((function(){var e=function(e){e&&(m(e),x(e))};return re.addEvent(ce,e),function(){re.removeEvent(ce,e)}}),[]);var g=Object(r.useState)(0),y=Object(v.a)(g,2),w=y[0],S=y[1],E=function(e){S((function(t){var n=e?t+.1:t-.1;return n<0?0:n>2?2:n}))};return Object(r.useEffect)((function(){O()}),[w]),Object(j.jsxs)(j.Fragment,{children:[!s&&Object(j.jsxs)("div",{className:"eca-canvas",children:[Object(j.jsxs)("div",{className:"eca-canvas-utils",children:[Object(j.jsx)("div",{onClick:function(){return E(!0)},className:"eca-canvas-up",children:"\u653e\u5927"}),Object(j.jsx)("div",{className:"eca-canvas-down",onClick:function(){return E(!1)},children:"\u7f29\u5c0f"})]}),Object(j.jsx)("div",{style:{width:"100%",height:"100%",overflow:"auto",backgroundColor:"#fff",borderRadius:"10px"},children:Object(j.jsx)("div",{id:p,style:{width:"".concat(100*(1+w),"%"),height:"".concat(100*(1+w),"%")},children:"chart"})})]}),s&&Object(j.jsxs)("div",{style:{color:"red"},children:[" ",s," "]}),!!(null===(t=f.options)||void 0===t?void 0:t.length)&&Object(j.jsx)(ne,{options:f.options,active:f.active,setState:function(e){b({active:e,options:f.options})}})]})},ue=function(e){var t=e.pre,n=e.next;return Object(j.jsx)("div",{className:"box-content diff-json-container",children:Object(j.jsx)(k,{oldStr:K(t),newStr:K(n),context:15e4,theme:"light",outputFormat:"side-by-side"})})},le=(n(219),n(94)),de=n.n(le),fe=n(131),ve=de.a.Option,je=function(e){var t,n,c=e.stateUI,i=c.curMenu,a=c.dictionary;if(!i)return null;var o=i.store.rules,s=function(e){var t=Object(r.useState)("-1"),n=Object(v.a)(t,2),c=n[0],i=n[1],a={};return Object.values(e).map((function(e){return e.actionName})).forEach((function(e){a[e]=e})),{value:c,setValue:i,dictionaryList:[{value:"-1",label:"\u5168\u90e8"}].concat(Object.keys(a).map((function(e){return{value:e,label:e}})))}}(a),u=function(e){var t=e.map((function(e,t){var n={"-1":1};return e.effect.forEach((function(e){n[e.actionName]=1})),{indexes:n,store:e,source:e.source,target:e.target,label:"".concat(e.source," - ").concat(e.target),id:"".concat(t)}})),n=Object(r.useState)(null),c=Object(v.a)(n,2),i=c[0],a=c[1],o=Object(r.useState)(!1),s=Object(v.a)(o,2),u=s[0],l=s[1],d=Object(r.useState)([]),f=Object(v.a)(d,2),j=f[0],b=f[1];return Object(r.useEffect)((function(){b(t)}),[]),{value:i,setValue:a,options:j,setOptions:b,cacheLinks:t,filterRules:function(e,t){if(!t)return!0;try{return new RegExp(t).test(e.target)}catch(n){return console.error(n),!1}},open:u,setOpen:l}}(o.links),l=u.options,d=u.filterRules,f=function(e){var t=u.cacheLinks.filter((function(t){return!!t.indexes[e]&&d(t,O.current.value)}));u.setOptions(t)},b=function(e){var t=u.options.find((function(t){return t.id===e}));if(u.setValue(t||null),!t)throw new Error("\u641c\u7d22\u540e\u7684node \u5e76\u4e0d\u5b58\u5728");re.dispatchEvent(ce,t.store)};Object(r.useEffect)((function(){s.setValue("-1"),u.setValue(null)}),[i]),Object(r.useEffect)((function(){var e=function(e){e||(s.setValue("-1"),u.setValue(null))};return re.addEvent(ce,e),function(){re.removeEvent(ce,e)}}));var h=Object(fe.debounce)((function(e){var t=u.cacheLinks.filter((function(t){return n=e,!!(r=t).indexes[s.value]&&d(r,n);var n,r}));u.setOptions(t)}),300),O=Object(r.useRef)(null);return Object(j.jsxs)("div",{children:[Object(j.jsxs)(p,{children:[Object(j.jsx)(de.a,{style:{width:300},value:s.value,onChange:function(e){s.setValue(e),f(e)},children:s.dictionaryList.map((function(e){return Object(j.jsx)(ve,{value:e.value,children:e.label},e.value)}))}),Object(j.jsxs)(p,{children:[Object(j.jsx)("input",{ref:O,placeholder:"\u6b63\u5219\u641c\u7d22\u8fb9\u7684\u672b\u5c3e\u8282\u70b9|\u5feb\u6377\u952eup down",onChange:function(e){h(e.target.value)},onFocus:function(e){h(e.target.value)},onKeyDown:function(e){if("ArrowUp"===e.code||"ArrowDown"===e.code){e.preventDefault(),e.stopPropagation();var t="ArrowUp"===e.code,n=u.options.map((function(e){return e.id}));if(!n.length)return;if(null===u.value)b(n[t?n.length-1:0]);else{var r=n.findIndex((function(e){var t;return e===(null===(t=u.value)||void 0===t?void 0:t.id)}));if(-1===r)return void b(n[t?n.length-1:0]);var c=t?--r:++r;t?b(c<0?n[n.length-1]:n[c]):c>n.length-1?b(n[0]):b(n[c])}}},style:{width:250}}),Object(j.jsxs)("span",{children:["\u5171",Object(j.jsx)("span",{children:l.length}),"\u6761"]}),u.value&&Object(j.jsxs)("span",{children:["\u5f53\u524d\u4f4d\u7f6e",l.findIndex((function(e){var t;return e.id===(null===(t=u.value)||void 0===t?void 0:t.id)}))]})]})]}),Object(j.jsxs)("div",{style:{lineHeight:"20px"},children:[Object(j.jsx)("span",{children:"\u8d77\u59cb\u8282\u70b9:"}),u.value&&Object(j.jsx)("span",{className:"eca-search-link-node",children:null===(t=u.value)||void 0===t?void 0:t.source})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"\u76ee\u6807\u8282\u70b9:"}),u.value&&Object(j.jsx)("span",{className:"eca-search-link-node",children:null===(n=u.value)||void 0===n?void 0:n.target})]})]})},be=(n(300),n(75)),he=n.n(be),pe=function(e){var t,n=e.control,r=e.stateUI,c=r.menu,i=r.curMenu,a=(t=[]).concat.apply(t,Object(ae.a)(c.map((function(e){return e.store}))));return Object(j.jsx)(he.a,{theme:"light",onClick:function(e){var t=e.key;if(t===(null===i||void 0===i?void 0:i.id))return null;var r=a.find((function(e){return e.id===t}));r&&n.setCurMenu(r)},mode:"inline",children:c.map((function(e,t){return Object(j.jsx)(he.a.SubMenu,{title:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("span",{title:"".concat(e.timeRange.start,"-").concat(e.timeRange.stop),children:["\u7b2c",t+1,"\u6b65"]}),Object(j.jsx)("span",{style:{paddingLeft:10},onClick:function(){return n.removeMenu(e.id)},children:"close"})]}),children:(r=e.store,r.map((function(e){return Object(j.jsx)(he.a.Item,{title:"".concat(e.label,"(").concat(e.time,")"),children:Object(j.jsx)("div",{title:e.time,children:e.label})},e.id)})))},e.id);var r}))})},Oe="noticePanel",me=function(){return window.chrome&&!!window.chrome.devtools},xe=new ee,ge=function(e,t){var n,r=t||"emit";me()&&(n="action(".concat(e,',"').concat(r,'")'),me()&&window.chrome.devtools.inspectedWindow.eval("".concat("window.__EAC_DEV_TOOLS__",".").concat(n)))};window.contentScriptReceiver=function(e){e.source&&"__EAC_DEV_TODOS__"===e.source&&xe.dispatchEvent(Oe,e)},function(e){e.emit="emit",e.abort="abort",e.pending="emitPendding",e.dic="emitRuleDictionary",e.res="emitResolve"}(Q||(Q={})),function(e){e.pending="pending",e.resolve="resolve"}(X||(X={}));var ye={start:-1,stop:-1},we=function(e){var t=e.setMenu,n=e.setLoading,c=function(t,r){var c=q(t,r);c?e.setMenu((function(e){return e.concat(c)})):console.error("\u6a21\u677f\u89e3\u6790\u9519\u8bef ".concat(c)),n(!1)};return Object(r.useEffect)((function(){var t=function(t,r){var i=t.data,a=t.action;if(a===Q.emit)c($(i),Object(h.a)(Object(h.a)({},ye),r));else if(a===Q.dic)e.setDictionary((function(e){var t="string"===typeof i?JSON.parse(i):i,n={};return t.forEach((function(e){n[te(e.ruleId,e.actionIndex,e.actionName)]=e})),Object(h.a)(Object(h.a)({},e),n)}));else if(a===Q.pending||a===Q.res){var o=$(i);e.setMenu((function(e){var t=e;if(!o.length)return t;var n=t.findIndex((function(e){return e.status===X.pending})),c=a===Q.res?X.resolve:X.pending;if(-1!==n){var i=o.map((function(e){return W(e)}));return t.map((function(e,t){return t===n?Object(h.a)(Object(h.a)({},e),{},{status:c,store:e.store.concat(i)}):e}))}var s=q(o,Object(h.a)(Object(h.a)({},ye),r),c);return s?t.concat(s):t})),a===Q.res&&n(!1)}};return xe.addEvent(Oe,t),function(){xe.removeEvent(Oe,t)}}),[]),Object(r.useEffect)((function(){var e=function(e,t){var n,r,c,i,a,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(H);function v(t){var c=n,a=r;return n=r=void 0,u=t,i=e.apply(a,c)}function j(e){return u=e,a=setTimeout(p,t),l?v(e):i}function b(e){var n=t-(e-o);return d?z(n,c-(e-u)):n}function h(e){var n=e-o;return void 0===o||n>=t||n<0||d&&e-u>=c}function p(){var e=J();if(h(e))return O(e);a=setTimeout(p,b(e))}function O(e){return a=void 0,f&&n?v(e):(n=r=void 0,i)}function m(){void 0!==a&&clearTimeout(a),u=0,n=o=r=a=void 0}function x(){return void 0===a?i:O(J())}function g(){var e=J(),c=h(e);if(n=arguments,r=this,o=e,c){if(void 0===a)return j(o);if(d)return clearTimeout(a),a=setTimeout(p,t),v(o)}return void 0===a&&(a=setTimeout(p,t)),i}return t=A(t)||0,D(s)&&(l=!!s.leading,c=(d="maxWait"in s)?P(A(s.maxWait)||0,t):c,f="trailing"in s?!!s.trailing:f),g.cancel=m,g.flush=x,g}((function(){re.dispatchEvent(ie)}),500);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),{abortRequest:function(){ge(!0,"abort")},setTab:function(t){e.setCur(t)},receiveUpdateSource:c,setCurMenu:function(t){e.setCurMenu(t),e.setCur(e.defCur)},start:function(){ye.start=Z(),ge(!0)},stop:function(){ye.stop=Z(),ge(!1),n(!0)},upload:function(){return"upload"},downLoad:function(){return"downLoad"},removeMenu:function(n){"string"===typeof n?t((function(e){return e.filter((function(e){return e.id!==n}))})):(t([]),e.setCurMenu(null))}}},Se=s.a.Content;var Ee=function(e){var t=e.hideChromeUtils,n=function(){var e="rules",t=Object(r.useState)(e),n=Object(v.a)(t,2),c=n[0],i=n[1],a=Object(r.useState)([]),o=Object(v.a)(a,2),s=o[0],u=o[1],l=Object(r.useState)(null),d=Object(v.a)(l,2),f=d[0],j=d[1],b=Object(r.useState)(!1),h=Object(v.a)(b,2),p=h[0],O=h[1],m=Object(r.useState)({}),x=Object(v.a)(m,2);return{defCur:e,tabsUIData:[{label:"\u89c4\u5219\u6267\u884c",types:"rules"},{label:"\u6570\u636e\u5f71\u54cd",types:"effect"}],cur:c,setCur:i,menu:s,setMenu:u,loading:p,setLoading:O,curMenu:f,setCurMenu:j,dictionary:x[0],setDictionary:x[1]}}(),c=we(n),i=Object(r.useMemo)((function(){return function(e){var t=e.stateUI,n=e.control;if(t.curMenu){var r=t.curMenu.store.effect,c=function(){return"rules"===t.cur||"cycle"===t.cur?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{padding:"10px",flex:1},children:Object(j.jsx)(je,Object(h.a)({},e))}),Object(j.jsx)(se,Object(h.a)({},e))]}):"effect"===t.cur?Object(j.jsx)(ue,{pre:r.pre,next:r.next}):null};return Object(j.jsxs)("div",{style:{background:"#fff"},children:[Object(j.jsx)(O,{cur:t.cur,setcur:n.setTab,tabs:t.tabsUIData}),Object(j.jsx)(c,{})]})}return null}({stateUI:n,control:c})}),[n.curMenu,n.cur]);return Object(j.jsxs)(s.a,{className:"App",children:[!t&&Object(j.jsx)(b,{control:c,stateUI:n}),Object(j.jsxs)(s.a,{style:{height:"calc(100% - 40px)",display:"flex",flexDirection:"row"},className:n.loading?"mask-root":"",children:[n.menu&&n.menu.length>0&&Object(j.jsx)("div",{style:{overflow:"auto",width:180,maxWidth:180,minWidth:180,backgroundColor:"#ffffff",borderRight:"1px solid #dddddd"},children:pe({stateUI:n,control:c})})||"\u6682\u65e0\u6570\u636e",n.menu&&n.menu.length>0&&Object(j.jsx)(Se,{style:{display:"flex",flexDirection:"column"},children:i})]})]})},Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,334)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(Ee,{})}),document.getElementById("root")),Me()}},[[325,1,2]]]);