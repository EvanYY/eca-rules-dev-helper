(this["webpackJsonpeac-panel-ui"]=this["webpackJsonpeac-panel-ui"]||[]).push([[0],{139:function(e,t,n){},324:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(27),a=n.n(r),s=(n(139),n(140),n(76)),o=n.n(s),u=(n(142),n(91)),l=n.n(u),d=(n(144),n(56)),f=n.n(d),j=n(16),v=n(2),b=function(e){var t=Object(c.useState)(!0),n=Object(j.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)("\u5f00\u59cb\u5f55\u5236"),s=Object(j.a)(a,2),o=s[0],u=s[1],d=e.control,b=e.stateUI,h=b.menu,O=b.loading;return Object(v.jsx)("div",{className:"content",children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(f.a,{onClick:function(){i?(r(!1),u("\u7ed3\u675f\u5f55\u5236"),d.start()):(r(!0),u("\u5f00\u59cb\u5f55\u5236"),d.stop())},disabled:O,children:b.loading?"\u6b63\u5728\u89e3\u6790\u6a21\u677f":o}),Object(v.jsx)(f.a,{disabled:true,children:"\u5bfc\u5165"}),Object(v.jsx)(f.a,{disabled:true,children:"\u5bfc\u51fa"}),0!==h.length&&Object(v.jsx)(f.a,{type:"primary",danger:!0,onClick:function(){return d.removeMenu()},children:"\u6e05\u7a7a\u5f55\u5236\u7ed3\u679c"})]})})},h=n(22),O=(n(216),n(92)),p=n.n(O),m=n(128),x=n(129);function g(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var y=/\s/;var w=/^\s+/;function S(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&y.test(e.charAt(t)););return t}(e)+1).replace(w,""):e}var E=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,M=/^0o[0-7]+$/i,C=parseInt;function N(e){if("number"===typeof e)return e;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=S(e);var n=k.test(e);return n||M.test(e)?C(e.slice(2),n?2:8):E.test(e)?NaN:+e}var I="Expected a function",D=Math.max,L=Math.min,_=function(){return Date.now()};function F(e,t){var n,c,i,r,a,s,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(I);function j(t){var i=n,a=c;return n=c=void 0,u=t,r=e.apply(a,i)}function v(e){return u=e,a=setTimeout(O,t),l?j(e):r}function b(e){var n=t-(e-s);return d?L(n,i-(e-u)):n}function h(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-u>=i}function O(){var e=_();if(h(e))return p(e);a=setTimeout(O,b(e))}function p(e){return a=void 0,f&&n?j(e):(n=c=void 0,r)}function m(){void 0!==a&&clearTimeout(a),u=0,n=s=c=a=void 0}function x(){return void 0===a?r:p(_())}function y(){var e=_(),i=h(e);if(n=arguments,c=this,s=e,i){if(void 0===a)return v(s);if(d)return clearTimeout(a),a=setTimeout(O,t),j(s)}return void 0===a&&(a=setTimeout(O,t)),r}return t=N(t)||0,g(o)&&(l=!!o.leading,i=(d="maxWait"in o)?D(N(o.maxWait)||0,t):i,f="trailing"in o?!!o.trailing:f),y.cancel=m,y.flush=x,y}var T=function(e,t){if(""===t||t===e)return!0;for(var n=0,c=0,i=-1,r=-1;n<e.length;)if(c<t.length&&(e[n]===t[c]||"?"===t[c]))n++,c++;else if(c<t.length&&"*"===t[c])i=n,r=c++;else{if(!(r>-1))return!1;n=++i,c=r+1}for(;c<t.length;)if("*"!==t[c++])return!1;return!0},U=function(e){return{id:e.batchId,label:e.trigger.title,time:P(e.trigger.time,"HH\u65f6MM\u5206SS\u79d2MS\u6beb\u79d2"),store:{rules:{nodes:e.fields.map((function(e){return{name:e.field,store:e.detail}})),links:e.rules.map((function(e){return{source:e.dependent,target:e.target,value:e.weight,effect:e.effect}}))},effect:{pre:e.valueDiffer.oldValue,next:e.valueDiffer.newValue}}}},R=function(e,t,n){return e.length?{id:H(),timeRange:{start:P(t.start),stop:P(t.stop)},store:e.map((function(e){return U(e)})),status:n||"resolve"}:null},V=function(e){try{return JSON.parse(e)}catch(t){return[]}},z=function(e){return document.getElementById(e)},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;try{return JSON.stringify(e,null,t)}catch(n){return JSON.stringify({error:"".concat(e," failed praser to string")},null,t)}};function H(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:13,t="abcdefghijklmnopqrstuvwxyz0123456789",n="",c=0;c<e;c++){var i=Math.random()*t.length;n+=t[parseInt(i,10)]}return n}function P(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:MM:SS";try{t=new Date(e)}catch(s){throw new Error("dateFormat \u65e5\u671f\u521d\u59cb\u5316\u51fa\u9519")}var c,i=n,r={"y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString(),"MS+":t.getMilliseconds().toString()};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(c=new RegExp("("+a+")").exec(i))&&(i=i.replace(c[1],1===c[1].length?r[a]:r[a].padStart(c[1].length,"0")));return i}var J=function(){return(new Date).getTime()},q=function(){function e(){Object(m.a)(this,e),this.state={}}return Object(x.a)(e,[{key:"addEvent",value:function(e,t){e in this.state?this.state[e].some((function(e){return e===t}))||this.state[e].push(t):this.state[e]=[t]}},{key:"removeEvent",value:function(e,t){if(!(e in this.state))return console.error("".concat(e," is not in state"));var n=this.state[e].findIndex((function(e){return e===t}));-1!==n&&(this.state[e].splice(n,1),0===this.state[e].length&&delete this.state[e])}},{key:"dispatchEvent",value:function(e,t,n){e in this.state?this.state[e].forEach((function(e){return e(t,n)})):"".concat(e," is not in state")}}]),e}(),W=function(e,t,n){return"".concat(e,"__").concat(t,"__").concat(n)},$=new q,B="searchLink",K="viewResize";function Y(e){return Object(v.jsx)("div",{style:{gap:e.size||"8px"},className:"eca-space align-center",children:e.children})}var G=p.a.Option,Q=function(e){var t,n,i=e.stateUI,r=i.curMenu,a=i.dictionary;if(!r)return null;var s=r.store.rules,o=function(e){var t=Object(c.useState)("-1"),n=Object(j.a)(t,2),i=n[0],r=n[1],a={};return Object.values(e).map((function(e){return e.actionName})).forEach((function(e){a[e]=e})),{value:i,setValue:r,dictionaryList:[{value:"-1",label:"\u5168\u90e8"}].concat(Object.keys(a).map((function(e){return{value:e,label:e}})))}}(a),u=function(e){var t=e.map((function(e,t){var n={"-1":null};return e.effect.forEach((function(e){n[e.actionName]=null})),{indexes:n,store:e,source:e.source,target:e.target,label:"".concat(e.source," - ").concat(e.target),id:"".concat(t)}})),n=Object(c.useState)(null),i=Object(j.a)(n,2),r=i[0],a=i[1],s=Object(c.useState)(!1),o=Object(j.a)(s,2),u=o[0],l=o[1],d=Object(c.useState)([]),f=Object(j.a)(d,2),v=f[0],b=f[1];return Object(c.useEffect)((function(){b(t)}),[]),{value:r,setValue:a,options:v,setOptions:b,cacheLinks:t,open:u,setOpen:l}}(s.links),l=u.options,d=function(e){var t=u.cacheLinks.filter((function(t){return null===t.indexes[e]&&T(t.target,h.current.value)}));u.setOptions(t)};Object(c.useEffect)((function(){h.current.value="",o.setValue("-1"),u.setValue(null),u.setOptions([])}),[r]),Object(c.useEffect)((function(){var e=function(e){e||(o.setValue("-1"),u.setValue(null))};return $.addEvent(B,e),function(){$.removeEvent(B,e)}}));var f=F((function(e){var t=u.cacheLinks.filter((function(t){return null===t.indexes[o.value]&&T(t.target,e)}));u.setOptions(t)}),300),b=function(e){var t=u.options.map((function(e){return e.id}));if(t.length){var n="";if(null===u.value)n=t[e?t.length-1:0];else{var c=t.findIndex((function(e){var t;return e===(null===(t=u.value)||void 0===t?void 0:t.id)}));if(-1===c)n=t[e?t.length-1:0];else{var i=e?--c:++c;n=e?i<0?t[t.length-1]:t[i]:i>t.length-1?t[0]:t[i]}}!function(e){var t=u.options.find((function(t){return t.id===e}));if(u.setValue(t||null),!t)throw new Error("\u641c\u7d22\u540e\u7684node \u5e76\u4e0d\u5b58\u5728");$.dispatchEvent(B,t.store)}(n)}},h=Object(c.useRef)(null);return Object(v.jsxs)("div",{children:[Object(v.jsxs)(Y,{children:[Object(v.jsx)(p.a,{style:{width:300},value:o.value,onChange:function(e){o.setValue(e),d(e)},children:o.dictionaryList.map((function(e){return Object(v.jsx)(G,{value:e.value,children:e.label},e.value)}))}),Object(v.jsxs)(Y,{size:12,children:[Object(v.jsx)("input",{ref:h,placeholder:"\u6b63\u5219\u641c\u7d22\u8fb9\u7684\u672b\u5c3e\u8282\u70b9|\u5feb\u6377\u952eup down",onChange:function(e){f(e.target.value)},onFocus:function(e){f(e.target.value)},onKeyDown:function(e){"ArrowUp"!==e.code&&"ArrowDown"!==e.code||(e.preventDefault(),e.stopPropagation(),b("ArrowUp"===e.code))},style:{width:250}}),Object(v.jsx)("span",{className:"btn-text",onClick:function(){return b(!0)},children:"\u2191"}),Object(v.jsx)("span",{className:"btn-text",onClick:function(){return b(!1)},children:"\u2193"}),Object(v.jsxs)("span",{children:["\u5171",Object(v.jsx)("span",{children:l.length}),"\u6761"]}),u.value&&Object(v.jsxs)("span",{children:["\u5f53\u524d\u8fb9\u5904\u4e8e\u641c\u7d22\u540e\u7684\u4f4d\u7f6e",l.findIndex((function(e){var t;return e.id===(null===(t=u.value)||void 0===t?void 0:t.id)}))]})]})]}),Object(v.jsxs)("div",{style:{lineHeight:"20px"},children:[Object(v.jsx)("span",{children:"\u8d77\u59cb\u8282\u70b9:"}),u.value&&Object(v.jsx)("span",{className:"eca-search-link-node",children:null===(t=u.value)||void 0===t?void 0:t.source})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"\u76ee\u6807\u8282\u70b9:"}),u.value&&Object(v.jsx)("span",{className:"eca-search-link-node",children:null===(n=u.value)||void 0===n?void 0:n.target})]})]})},X=n(132),Z=n(55),ee=n(93),te=["oldStr","newStr","context","theme"],ne=function(e){var t=e.oldStr,n=void 0===t?"":t,i=e.newStr,r=void 0===i?"":i,a=e.context,s=e.theme,o=void 0===s?"auto":s,u=Object(X.a)(e,te),l=Object(c.useMemo)((function(){var e=["",n||"",r||"","","",{context:a}],t=Z.createPatch.apply(void 0,e),c=Object(ee.b)(t,Object(h.a)(Object(h.a)({},u),{},{drawFileList:!1,matching:"lines"}));return function(e){return e.replace(/<span class="d2h-code-line-ctn">(.+?)<\/span>/g,'<span class="d2h-code-line-ctn"><code>$1</code></span>')}(Object(ee.a)(c,Object(h.a)(Object(h.a)({},u),{},{drawFileList:!1,matching:"lines"})))}),[n,r,a,u]);return Object(v.jsx)("div",{className:"react-code-diff-lite ".concat(o),dangerouslySetInnerHTML:{__html:l}})};ne.defaultProps={oldStr:"",newStr:"",context:0,outputFormat:"line-by-line"};var ce,ie,re=ne,ae=function(e){var t=e.pre,n=e.next,i=Object(c.useState)({Com:null}),r=Object(j.a)(i,2),a=r[0],s=r[1],o=Object(c.useRef)();return Object(c.useEffect)((function(){return o.current=setTimeout((function(){s({Com:Object(v.jsx)(re,{oldStr:A(t),newStr:A(n),context:15e4,theme:"light",outputFormat:"side-by-side"})})}),200),function(){o.current&&clearTimeout(o.current)}}),[]),Object(v.jsxs)("div",{className:"box-content diff-json-container",children:[!a.Com&&Object(v.jsx)("div",{children:"\u6b63\u5728\u6bd4\u5bf9\u6a21\u677f..."}),a.Com]})},se=function(e){var t=e.cur,n=e.setcur,c=e.tabs;return Object(v.jsx)("div",{className:"eca-tabs-content",children:Object(v.jsxs)(Y,{children:[c.map((function(e,c){return Object(v.jsx)("div",{className:"eca-tabs-item ".concat(t===e.types?"is-active-tab":""),onClick:function(){return n(e.types)},children:e.label},c)})),e.children]})})},oe=function(e){var t=e.options,n=e.active,c=e.isActiveClass,i=e.setState;return Object(v.jsx)("div",{className:"eca-list-group",children:t.length?t.map((function(t,r){return Object(v.jsxs)("div",{className:"eca-list-item ".concat((null===n||void 0===n?void 0:n.id)===(null===t||void 0===t?void 0:t.id)?c||"is-active":""),onClick:function(){return function(e,t){e!==(null===n||void 0===n?void 0:n.id)&&i(t||{})}(t.id,t)},children:[Object(v.jsx)("div",{title:t.label,children:t.label}),Object(v.jsx)("div",{children:e.extend&&(null===e||void 0===e?void 0:e.extend(t))})]},r)})):"\u6682\u65e0\u6570\u636e"})},ue=n(131),le=n.n(ue),de=function(e){return Object(v.jsx)("div",{className:"pre-format",children:Object(v.jsx)(le.a,{src:e.json,displayObjectSize:!1,displayDataTypes:!1,enableClipboard:!1})})},fe=function(e){var t=e.options,n=e.active,c=e.setState,i=n.store,r=i.variables,a=i.params;return Object(v.jsxs)("div",{className:"list-json",children:[Object(v.jsx)("div",{className:"list-json-menu",children:oe({options:t,setState:c,active:n,isActiveClass:"is-active-list",extend:function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{children:["\u8fdb\u7a0b: ",e.store.sequence]})})}})}),Object(v.jsxs)("div",{className:"list-json-container",children:[Object(v.jsxs)("div",{className:"echo-json",children:[Object(v.jsx)("div",{children:"\u89c4\u5219\u5b9a\u4e49"}),Object(v.jsx)(de,{json:a})]}),Object(v.jsxs)("div",{className:"echo-json",children:[Object(v.jsx)("div",{children:"\u8868\u8fbe\u5f0f\u7684\u503c"}),Object(v.jsx)(de,{json:r})]})]})]})},je=n(74),ve=n(57),be=function(e){var t,n=e.stateUI.curMenu,i=e.stateUI.dictionary,r=n.store.rules,a=Object(c.useState)(""),s=Object(j.a)(a,2),o=s[0],u=s[1],l=Object(c.useState)({options:[],active:{}}),d=Object(j.a)(l,2),f=d[0],b=d[1],O="eca-panel-chart",p=function(){var e=ve.a(z(O));e&&e.resize()},m=function(e){var t=function(e,t){return e.effect.map((function(e){var n=W(e.ruleId,e.actionIndex,e.actionName),c=t[n];return{id:n,label:e.actionName,store:{variables:e.variables,params:c||{},sequence:e.sequence}}}))}(e,i),n=t.length;b({active:t[0]||{},options:n?t:[]})},x=function(e){if(e.data.source){var t=e.data;$.dispatchEvent(B,null),m(t),g(t)}},g=function(e){var t=ve.a(z(O));try{t&&(e||t.clear(),t.off("click"),t.on("click",x),t.setOption(function(e,t,n){var c=Math.max.apply(Math,Object(je.a)(e.map((function(e){return e.name.length})))),i={tooltip:{trigger:"item"},series:{type:"sankey",right:Math.round(6.2*c)+20+"px",left:"20px",top:"20px",nodeAlign:"left",bottom:"20px",emphasis:{focus:"adjacency"},data:e,links:t,lineStyle:{color:"gradient",curveness:.5}}};if(n){i.series.emphasis={focus:"none"};var r={lineStyle:{opacity:1}};i.series.links=t.map((function(e){return e.source===n.source&&e.target===n.target?Object(h.a)(Object(h.a)({},e),r):e})),i.series.lineStyle.opacity=.1}return i}(r.nodes,r.links,e||null)))}catch(n){u("\u6851\u57fa\u56fe\u7ed8\u5236\u5931\u8d25 \u53ef\u80fd\u5b58\u5728\u73af")}};Object(c.useEffect)((function(){g(),b({options:[],active:{}})}),[n]),Object(c.useEffect)((function(){var e=ve.a(z(O));void 0===e&&((e=ve.b(z(O))).on("click",x),e.resize(),g())}),[]),Object(c.useEffect)((function(){return $.addEvent(K,p),function(){$.removeEvent(K,p)}}),[]),Object(c.useEffect)((function(){var e=function(e){e&&(m(e),g(e))};return $.addEvent(B,e),function(){$.removeEvent(B,e)}}),[]);var y=Object(c.useState)({w:0,h:0}),w=Object(j.a)(y,2),S=w[0],E=w[1],k=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=10,c=0;E((function(i){var r={h:i.h,w:i.w};switch(e){case"h":case"w":r[e]=t?r[e]+.1:r[e]-.1,r[e]<c?r[e]=c:r[e]>n&&(r[e]=n);break;case"clear":r.w=0,r.h=0}return r}))};return Object(c.useEffect)((function(){p()}),[S]),Object(v.jsxs)(v.Fragment,{children:[!o&&Object(v.jsxs)("div",{className:"eca-canvas",children:[Object(v.jsx)("div",{className:"eca-canvas-utils",children:Object(v.jsxs)(Y,{size:20,children:[Object(v.jsx)("div",{className:"eca-canvas-up",onClick:function(){return k("h",!0)},children:"\u9ad8\u653e\u5927"}),Object(v.jsx)("div",{className:"eca-canvas-down",onClick:function(){return k("h",!1)},children:"\u9ad8\u7f29\u5c0f"}),Object(v.jsx)("div",{className:"eca-canvas-up",onClick:function(){return k("w",!0)},children:"\u5bbd\u653e\u5927"}),Object(v.jsx)("div",{className:"eca-canvas-down",onClick:function(){return k("w",!1)},children:"\u5bbd\u7f29\u5c0f"}),Object(v.jsx)("div",{className:"eca-canvas-all",onClick:function(){return E({w:0,h:0})},children:"\u6062\u590d\u5c3a\u5bf8"}),Object(v.jsxs)(Y,{size:8,children:[Object(v.jsxs)("span",{children:["\u9ad8\u5ea6\u6bd4: ",(100*(1+S.h)).toFixed(0)," %"]}),Object(v.jsxs)("span",{children:["\u5bbd\u5ea6\u6bd4: ",(100*(1+S.w)).toFixed(0)," %"]})]})]})}),Object(v.jsx)("div",{style:{width:"100%",height:"100%",overflow:"auto",backgroundColor:"#fff",borderRadius:"10px"},children:Object(v.jsx)("div",{id:O,style:{width:"".concat(100*(1+S.w),"%"),height:"".concat(100*(1+S.h),"%")},children:"chart"})})]}),o&&Object(v.jsxs)("div",{style:{color:"red"},children:[" ",o," "]}),!!(null===(t=f.options)||void 0===t?void 0:t.length)&&Object(v.jsx)(fe,{options:f.options,active:f.active,setState:function(e){b({active:e,options:f.options})}})]})},he=function(e){var t=e.stateUI,n=Object(c.useState)({activeDiff:!1,cur:t.defCur}),i=Object(j.a)(n,2),r=i[0],a=i[1],s=t.curMenu?t.curMenu.store.effect:null;return Object(c.useEffect)((function(){a({activeDiff:!1,cur:t.defCur})}),[t.curMenu]),Object(v.jsx)(v.Fragment,{children:t.curMenu&&Object(v.jsxs)("div",{style:{background:"#fff"},children:[Object(v.jsx)(se,{cur:r.cur,setcur:function(e){a((function(t){return{activeDiff:t.activeDiff||"effect"===e,cur:e}}))},tabs:t.tabsUIData}),Object(v.jsxs)("div",{style:{flex:1,display:"rules"===r.cur?"block":"none"},children:[Object(v.jsx)("div",{style:{padding:"10px"},children:Object(v.jsx)(Q,Object(h.a)({},e))}),Object(v.jsx)(be,Object(h.a)({},e))]}),r.activeDiff&&s&&Object(v.jsx)("div",{style:{flex:1,display:"effect"===r.cur?"block":"none"},children:Object(v.jsx)(ae,{pre:s.pre,next:s.next})}),!s&&Object(v.jsx)("span",{style:{color:"red"},children:"\u7f3a\u5c11\u5f71\u54cd\u5b57\u6bb5"})]})})},Oe=(n(299),n(75)),pe=n.n(Oe),me=function(e){var t,n=e.control,c=e.stateUI,i=c.menu,r=c.curMenu,a=(t=[]).concat.apply(t,Object(je.a)(i.map((function(e){return e.store}))));return Object(v.jsx)(pe.a,{theme:"light",onClick:function(e){var t=e.key;if(t===(null===r||void 0===r?void 0:r.id))return null;var c=a.find((function(e){return e.id===t}));c&&n.setCurMenu(c)},mode:"inline",children:i.map((function(e,t){return Object(v.jsx)(pe.a.SubMenu,{title:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("span",{title:"".concat(e.timeRange.start,"-").concat(e.timeRange.stop),children:["\u7b2c",t+1,"\u6b65"]}),Object(v.jsx)("span",{style:{paddingLeft:10},onClick:function(){return n.removeMenu(e.id)},children:"close"})]}),children:(c=e.store,c.map((function(e){return Object(v.jsx)(pe.a.Item,{title:"".concat(e.label,"(").concat(e.time,")"),children:Object(v.jsx)("div",{title:e.time,children:e.label})},e.id)})))},e.id);var c}))})},xe=function(e){var t=Object(c.useState)(0),n=Object(j.a)(t,2),i=n[0],r=n[1],a=Object(c.useRef)();return Object(c.useEffect)((function(){var t=setInterval((function(){r((function(t){return t>30&&e.setLoading&&e.setLoading(!1),++t}))}),1e3);return a.current=t,function(){a.current&&clearTimeout(a.current),r(0)}}),[]),Object(v.jsx)("div",{className:"mask",children:Object(v.jsxs)("div",{children:[e.children," ",Object(v.jsxs)("span",{children:[i,"s"]}),Object(v.jsx)("span",{children:"30s\u8d85\u65f6"})]})})},ge="noticePanel",ye=function(){return window.chrome&&!!window.chrome.devtools},we=new q,Se=function(e,t){var n,c=t||"emit";ye()&&(n="action(".concat(e,',"').concat(c,'")'),ye()&&window.chrome.devtools.inspectedWindow.eval("".concat("window.__EAC_DEV_TOOLS__",".").concat(n)))};window.contentScriptReceiver=function(e){e.source&&"__EAC_DEV_TODOS__"===e.source&&we.dispatchEvent(ge,e)},function(e){e.emit="emit",e.abort="abort",e.pending="emitPendding",e.dic="emitRuleDictionary",e.res="emitResolve"}(ce||(ce={})),function(e){e.pending="pending",e.resolve="resolve"}(ie||(ie={}));var Ee={start:-1,stop:-1},ke=o.a.Content;var Me=function(e){var t=e.hideChromeUtils,n=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),a=Object(j.a)(r,2),s=a[0],o=a[1],u=Object(c.useState)(!1),l=Object(j.a)(u,2),d=l[0],f=l[1],v=Object(c.useState)({}),b=Object(j.a)(v,2);return{defCur:"rules",tabsUIData:[{label:"\u89c4\u5219\u6267\u884c",types:"rules"},{label:"\u6570\u636e\u5f71\u54cd",types:"effect"}],menu:n,setMenu:i,loading:d,setLoading:f,curMenu:s,setCurMenu:o,dictionary:b[0],setDictionary:b[1]}}(),i=function(e){var t=e.setMenu,n=e.setLoading,i=function(t,c){var i=R(t,c);i?e.setMenu((function(e){return e.concat(i)})):console.error("\u6a21\u677f\u89e3\u6790\u9519\u8bef ".concat(i)),n(!1)};return Object(c.useEffect)((function(){var t=function(t,c){var r=t.data,a=t.action;if(a===ce.emit)i(V(r),Object(h.a)(Object(h.a)({},Ee),c));else if(a===ce.dic)e.setDictionary((function(e){var t="string"===typeof r?JSON.parse(r):r,n={};return t.forEach((function(e){n[W(e.ruleId,e.actionIndex,e.actionName)]=e})),Object(h.a)(Object(h.a)({},e),n)}));else if(a===ce.pending||a===ce.res){var s=V(r);e.setMenu((function(e){var t=e;if(!s.length)return t;var n=t.findIndex((function(e){return e.status===ie.pending})),i=a===ce.res?ie.resolve:ie.pending;if(-1!==n){var r=s.map((function(e){return U(e)}));return t.map((function(e,t){return t===n?Object(h.a)(Object(h.a)({},e),{},{status:i,store:e.store.concat(r)}):e}))}var o=R(s,Object(h.a)(Object(h.a)({},Ee),c),i);return o?t.concat(o):t})),a===ce.res&&n(!1)}};return we.addEvent(ge,t),function(){we.removeEvent(ge,t)}}),[]),Object(c.useEffect)((function(){var e=F((function(){$.dispatchEvent(K)}),500);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),{abortRequest:function(){Se(!0,"abort")},receiveUpdateSource:i,setCurMenu:function(t){e.setCurMenu(t)},start:function(){Ee.start=J(),Se(!0)},stop:function(){Ee.stop=J(),Se(!1),n(!0)},upload:function(){return"upload"},downLoad:function(){return"downLoad"},removeMenu:function(n){"string"===typeof n?t((function(e){return e.filter((function(e){return e.id!==n}))})):(t([]),e.setCurMenu(null))}}}(n),r=Object(c.useMemo)((function(){return Object(v.jsx)(he,{control:i,stateUI:n})}),[n.curMenu]);return Object(v.jsxs)(o.a,{className:"App",children:[!t&&Object(v.jsx)(b,{control:i,stateUI:n}),Object(v.jsxs)(o.a,{style:{height:"calc(100% - 40px)",display:"flex",flexDirection:"row"},className:n.loading?"mask-root":"",children:[!!n.menu&&n.menu.length>0&&Object(v.jsx)("div",{style:{overflow:"auto",width:180,maxWidth:180,minWidth:180,backgroundColor:"#ffffff",borderRight:"1px solid #dddddd"},children:me({stateUI:n,control:i})})||"\u6682\u65e0\u6570\u636e",n.menu&&n.menu.length>0&&Object(v.jsx)(ke,{style:{display:"flex",flexDirection:"column"},children:r}),n.loading&&Object(v.jsx)(xe,{setLoading:n.setLoading,children:"\u6b63\u5728\u63a5\u6536\u6a21\u677f\u6570\u636e"})]})]})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,333)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(Me,{})}),document.getElementById("root")),Ce()}},[[324,1,2]]]);