(this["webpackJsonpeac-panel-ui"]=this["webpackJsonpeac-panel-ui"]||[]).push([[0],{124:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(22),a=n.n(r),s=(n(124),n(125),n(63)),o=n.n(s),u=(n(127),n(74)),l=n.n(u),d=(n(77),n(35)),f=n.n(d),j=n(12),v=n(1),b=function(e){var t=Object(c.useState)(!0),n=Object(j.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)("\u5f00\u59cb\u5f55\u5236"),s=Object(j.a)(a,2),o=s[0],u=s[1],d=e.control,b=e.stateUI,h=b.menu,O=b.loading,p="small";return Object(v.jsx)("div",{className:"content",children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(f.a,{onClick:function(){i?(r(!1),u("\u7ed3\u675f\u5f55\u5236"),d.start()):(r(!0),u("\u5f00\u59cb\u5f55\u5236"),d.stop())},disabled:O,size:p,children:b.loading?"\u6b63\u5728\u89e3\u6790\u6a21\u677f":o}),Object(v.jsx)(f.a,{disabled:true,size:p,children:"\u5bfc\u5165"}),Object(v.jsx)(f.a,{disabled:true,size:p,children:"\u5bfc\u51fa"}),0!==h.length&&Object(v.jsx)(f.a,{type:"primary",danger:!0,onClick:function(){return d.removeMenu()},size:p,children:"\u6e05\u7a7a\u5f55\u5236\u7ed3\u679c"})]})})},h=n(16),O=(n(202),n(75)),p=n.n(O),m=n(112),g=n(113);function x(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var y=/\s/;var w=/^\s+/;function S(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&y.test(e.charAt(t)););return t}(e)+1).replace(w,""):e}var k=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,E=/^0o[0-7]+$/i,C=parseInt;function M(e){if("number"===typeof e)return e;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=S(e);var n=N.test(e);return n||E.test(e)?C(e.slice(2),n?2:8):k.test(e)?NaN:+e}var D="Expected a function",I=Math.max,L=Math.min,T=function(){return Date.now()};function _(e,t){var n,c,i,r,a,s,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(D);function j(t){var i=n,a=c;return n=c=void 0,u=t,r=e.apply(a,i)}function v(e){return u=e,a=setTimeout(O,t),l?j(e):r}function b(e){var n=t-(e-s);return d?L(n,i-(e-u)):n}function h(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-u>=i}function O(){var e=T();if(h(e))return p(e);a=setTimeout(O,b(e))}function p(e){return a=void 0,f&&n?j(e):(n=c=void 0,r)}function m(){void 0!==a&&clearTimeout(a),u=0,n=s=c=a=void 0}function g(){return void 0===a?r:p(T())}function y(){var e=T(),i=h(e);if(n=arguments,c=this,s=e,i){if(void 0===a)return v(s);if(d)return clearTimeout(a),a=setTimeout(O,t),j(s)}return void 0===a&&(a=setTimeout(O,t)),r}return t=M(t)||0,x(o)&&(l=!!o.leading,i=(d="maxWait"in o)?I(M(o.maxWait)||0,t):i,f="trailing"in o?!!o.trailing:f),y.cancel=m,y.flush=g,y}var z=function(e,t){if(""===t||t===e)return!0;for(var n=0,c=0,i=-1,r=-1;n<e.length;)if(c<t.length&&(e[n]===t[c]||"?"===t[c]))n++,c++;else if(c<t.length&&"*"===t[c])i=n,r=c++;else{if(!(r>-1))return!1;n=++i,c=r+1}for(;c<t.length;)if("*"!==t[c++])return!1;return!0},F=function(e){return{id:P(),label:e.trigger.title,time:H(e.trigger.time,"HH\u65f6MM\u5206SS\u79d2MS\u6beb\u79d2"),store:{rules:{nodes:e.fields.map((function(e){return{name:e.field,store:e.detail}})),links:e.rules.map((function(e){return{source:e.dependent,target:e.target,value:e.weight,effect:e.effect}}))},effect:{pre:e.valueDiffer.oldValue,next:e.valueDiffer.newValue}}}},R=function(e,t,n){return e.length?{id:P(),timeRange:{start:H(t.start),stop:H(t.stop)},store:e.map((function(e){return F(e)})),status:n||"resolve"}:null},U=function(e){try{return JSON.parse(e)}catch(t){return[]}},A=function(e){return document.getElementById(e)},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;try{return JSON.stringify(e,null,t)}catch(n){return JSON.stringify({error:"".concat(e," failed praser to string")},null,t)}};function P(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:13,t="abcdefghijklmnopqrstuvwxyz0123456789",n="",c=0;c<e;c++){var i=Math.random()*t.length;n+=t[parseInt(i,10)]}return n}function H(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:MM:SS";try{t=new Date(e)}catch(s){throw new Error("dateFormat \u65e5\u671f\u521d\u59cb\u5316\u51fa\u9519")}var c,i=n,r={"y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString(),"MS+":t.getMilliseconds().toString()};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(c=new RegExp("("+a+")").exec(i))&&(i=i.replace(c[1],1===c[1].length?r[a]:r[a].padStart(c[1].length,"0")));return i}var J=function(){return(new Date).getTime()},q=function(){function e(){Object(m.a)(this,e),this.state={}}return Object(g.a)(e,[{key:"addEvent",value:function(e,t){e in this.state?this.state[e].some((function(e){return e===t}))||this.state[e].push(t):this.state[e]=[t]}},{key:"removeEvent",value:function(e,t){if(!(e in this.state))return console.error("".concat(e," is not in state"));var n=this.state[e].findIndex((function(e){return e===t}));-1!==n&&(this.state[e].splice(n,1),0===this.state[e].length&&delete this.state[e])}},{key:"dispatchEvent",value:function(e,t,n){e in this.state?this.state[e].forEach((function(e){return e(t,n)})):"".concat(e," is not in state")}}]),e}(),W=function(e,t,n){return"".concat(e,"__").concat(t,"__").concat(n)},Y=new q,$="searchLink",B="viewResize";function X(e){return Object(v.jsx)("div",{style:{gap:e.size||"8px"},className:"eca-space align-center ".concat(e.className||""),children:e.children})}var K=p.a.Option,G=function(e){var t,n,i=e.stateUI,r=i.curMenu,a=i.dictionary,s=(r?r.store:{rules:{nodes:[],links:[]}}).rules,o=function(e){var t=Object(c.useState)("-1"),n=Object(j.a)(t,2),i=n[0],r=n[1],a={};return Object.values(e).map((function(e){return e.actionName})).forEach((function(e){a[e]=e})),{value:i,setValue:r,dictionaryList:[{value:"-1",label:"\u5168\u90e8"}].concat(Object.keys(a).map((function(e){return{value:e,label:e}})))}}(a),u=function(e){var t=e.map((function(e,t){var n={"-1":null};return e.effect.forEach((function(e){n[e.actionName]=null})),{indexes:n,store:e,source:e.source,target:e.target,label:"".concat(e.source," - ").concat(e.target),id:"".concat(t)}})),n=Object(c.useState)(null),i=Object(j.a)(n,2),r=i[0],a=i[1],s=Object(c.useState)(!1),o=Object(j.a)(s,2),u=o[0],l=o[1],d=Object(c.useState)(t),f=Object(j.a)(d,2);return{value:r,setValue:a,options:f[0],setOptions:f[1],cacheLinks:t,open:u,setOpen:l}}(s.links),l=u.options,d=u.cacheLinks,b=function(e,t){var n=d.find((function(t){return t.id===e}));if(u.setValue(n||null),n){var c={},i=d.filter((function(e){return null===e.indexes[t||o.value]&&z(e.target,m.current.value)}));i.forEach((function(e){c[e.target]=null})),Y.dispatchEvent($,n.store,i.length?c:null)}else console.dir("\u641c\u7d22\u540e\u7684node \u5e76\u4e0d\u5b58\u5728")};Object(c.useEffect)((function(){m.current.value="",o.setValue("-1"),u.setValue(null),u.setOptions(d.filter((function(e){return null===e.indexes[o.value]})))}),[r]),Object(c.useEffect)((function(){var e=function(e){e||(o.setValue("-1"),u.setValue(null))};return Y.addEvent($,e),function(){Y.removeEvent($,e)}}),[u,o]);var h=_((function(e){var t=d.filter((function(t){return null===t.indexes[o.value]&&z(t.target,e)}));u.setOptions(t),t.length>0&&e&&b(t[0].id)}),500),O=function(e){var t=u.options.map((function(e){return e.id}));if(t.length){var n="";if(null===u.value)n=t[e?t.length-1:0];else{var c=t.findIndex((function(e){var t;return e===(null===(t=u.value)||void 0===t?void 0:t.id)}));if(-1===c)n=t[e?t.length-1:0];else{var i=e?--c:++c;n=e?i<0?t[t.length-1]:t[i]:i>t.length-1?t[0]:t[i]}}b(n)}},m=Object(c.useRef)(null);return Object(v.jsxs)("div",{className:"search-bar",children:[Object(v.jsxs)(X,{children:[Object(v.jsx)(p.a,{style:{width:300},value:o.value,onChange:function(e){o.setValue(e);var t=d.filter((function(t){return null===t.indexes[e]&&z(t.target,m.current.value)}));u.setOptions(t),t.length>0&&b(t[0].id,e)},children:o.dictionaryList.map((function(e){return Object(v.jsx)(K,{value:e.value,children:e.label},e.value)}))}),Object(v.jsxs)(X,{size:12,children:[Object(v.jsx)("input",{ref:m,placeholder:"\u901a\u914d\u7b26\u641c\u7d22\u8fb9\u7684\u672b\u5c3e\u8282\u70b9",onChange:function(e){h(e.target.value)},onKeyDown:function(e){"ArrowUp"!==e.code&&"ArrowDown"!==e.code||(e.preventDefault(),e.stopPropagation(),O("ArrowUp"===e.code))},style:{width:270}}),Object(v.jsxs)("span",{children:[l.findIndex((function(e){var t;return e.id===(null===(t=u.value)||void 0===t?void 0:t.id)}))+1,"/",l.length]}),Object(v.jsx)(f.a,{disabled:0===l.length,onClick:function(){return O(!0)},children:"\u2191"}),Object(v.jsx)(f.a,{disabled:0===l.length,onClick:function(){return O(!1)},children:"\u2193"}),Object(v.jsx)("span",{style:{color:"#bbb"},children:"\u5feb\u6377\u952eup down"})]})]}),Object(v.jsx)("div",{style:{padding:"10px 0 0 4px"},children:Object(v.jsxs)(X,{children:[Object(v.jsxs)("div",{style:{lineHeight:"20px"},children:[Object(v.jsx)("span",{children:"\u8d77\u59cb\u8282\u70b9:"}),u.value&&Object(v.jsx)("span",{className:"eca-search-link-node",children:null===(t=u.value)||void 0===t?void 0:t.source})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"\u76ee\u6807\u8282\u70b9:"}),u.value&&Object(v.jsx)("span",{className:"eca-search-link-node",children:null===(n=u.value)||void 0===n?void 0:n.target})]})]})})]})},Q=n(117),Z=n(46),ee=n(76),te=["oldStr","newStr","context","theme"],ne=function(e){var t=e.oldStr,n=void 0===t?"":t,i=e.newStr,r=void 0===i?"":i,a=e.context,s=e.theme,o=void 0===s?"auto":s,u=Object(Q.a)(e,te),l=Object(c.useMemo)((function(){var e=["",n||"",r||"","","",{context:a}],t=Z.createPatch.apply(void 0,e),c=Object(ee.b)(t,Object(h.a)(Object(h.a)({},u),{},{drawFileList:!1,matching:"lines"}));return function(e){return e.replace(/<span class="d2h-code-line-ctn">(.+?)<\/span>/g,'<span class="d2h-code-line-ctn"><code>$1</code></span>')}(Object(ee.a)(c,Object(h.a)(Object(h.a)({},u),{},{drawFileList:!1,matching:"lines"})))}),[n,r,a,u]);return Object(v.jsx)("div",{className:"react-code-diff-lite ".concat(o),dangerouslySetInnerHTML:{__html:l}})};ne.defaultProps={oldStr:"",newStr:"",context:0,outputFormat:"line-by-line"};var ce=ne,ie=function(e){var t=e.pre,n=e.next,i=Object(c.useState)({Com:null}),r=Object(j.a)(i,2),a=r[0],s=r[1],o=Object(c.useRef)();return Object(c.useEffect)((function(){return o.current=setTimeout((function(){s({Com:Object(v.jsx)(ce,{oldStr:V(t),newStr:V(n),context:15e4,theme:"light",outputFormat:"side-by-side"})})}),200),function(){o.current&&clearTimeout(o.current)}}),[n,t]),Object(v.jsxs)("div",{className:"box-content diff-json-container",children:[!a.Com&&Object(v.jsx)("div",{children:"\u6b63\u5728\u6bd4\u5bf9\u6a21\u677f..."}),a.Com]})},re=function(e){var t=e.cur,n=e.setcur,c=e.tabs;return Object(v.jsx)("div",{className:"eca-tabs-content",children:Object(v.jsxs)(X,{children:[e.prefix,c.map((function(e,c){return Object(v.jsx)("div",{className:"eca-tabs-item ".concat(t===e.types?"is-active-tab":""),onClick:function(){return n(e.types)},children:e.label},c)})),e.children]})})},ae=function(e){var t=e.options,n=e.active,c=e.isActiveClass,i=e.setState;return Object(v.jsx)("div",{className:"eca-list-group",children:t.length?t.map((function(t,r){return Object(v.jsxs)("div",{className:"eca-list-item ".concat((null===n||void 0===n?void 0:n.id)===(null===t||void 0===t?void 0:t.id)?c||"is-active":""),onClick:function(){return function(e,t){e!==(null===n||void 0===n?void 0:n.id)&&i(t||{})}(t.id,t)},children:[Object(v.jsx)("div",{title:t.label,children:t.label}),Object(v.jsx)("div",{children:e.extend&&(null===e||void 0===e?void 0:e.extend(t))})]},r)})):"\u6682\u65e0\u6570\u636e"})},se=n(115),oe=n.n(se),ue=function(e){return Object(v.jsx)("div",{className:"pre-format",children:Object(v.jsx)("div",{className:"pre-format-room",children:Object(v.jsx)(oe.a,{src:e.json,displayObjectSize:!1,displayDataTypes:!1,enableClipboard:!1})})})},le=function(e){var t=e.options,n=e.active,c=e.setState,i=n.store,r=i.variables,a=i.params;return Object(v.jsxs)("div",{className:"list-json",children:[Object(v.jsx)("div",{className:"list-json-menu",children:ae({options:t,setState:c,active:n,isActiveClass:"is-active-list",extend:function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{children:["\u8fdb\u7a0b: ",e.store.sequence]})})}})}),Object(v.jsxs)("div",{className:"list-json-container",children:[Object(v.jsxs)("div",{className:"echo-json clear-mr",children:[Object(v.jsx)("div",{className:"echo-json-title",children:"\u89c4\u5219\u5b9a\u4e49"}),Object(v.jsx)(ue,{json:a})]}),Object(v.jsxs)("div",{className:"echo-json",children:[Object(v.jsx)("div",{className:"echo-json-title",children:"\u8868\u8fbe\u5f0f\u7684\u503c"}),Object(v.jsx)(ue,{json:r})]})]})]})},de=n(116),fe=n.p+"static/media/move.00692c67.svg";function je(e){var t=e.redraw,n=e.mode,i=void 0===n?"vertical":n,r=Object(c.useRef)(null),a=function(e){t&&t(e)};return Object(v.jsx)("div",{className:"draggleLine-wrapper",style:e.style,onDragStart:function(e){return function(e){e.stopPropagation();var t=e.clientX,n=e.clientY;r.current={x:t,y:n}}(e)},onDragEnd:function(e){return(t=e).stopPropagation(),t.clientY,r.current,void("vertical"===i?a(t.clientY-r.current.y):"horizontal"===i&&a(t.clientX-r.current.x));var t},draggable:"true",children:Object(v.jsx)("img",{src:fe,width:"20",alt:"\u62d6\u62fd",draggable:"false"})})}var ve,be,he=n(47),Oe="eca-panel-chart",pe=function(e){var t,n=e.stateUI.curMenu,i=e.stateUI.collapsed,r=e.stateUI.dictionary,a=n.store.rules,s=Object(c.useState)(""),o=Object(j.a)(s,2),u=o[0],l=o[1],d=Object(c.useState)({options:[],active:{}}),f=Object(j.a)(d,2),b=f[0],O=f[1],p=function(){var e=Object(c.useState)({w:0,h:0}),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(c.useCallback)((function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=10,c=0;i((function(i){var r={h:i.h,w:i.w};switch(e){case"h":case"w":r[e]=t?r[e]+.1:r[e]-.1,r[e]<c?r[e]=c:r[e]>n&&(r[e]=n);break;default:break;case"clear":r.w=0,r.h=0}return r}))}),[]),a=function(){return document.body.offsetHeight-200},s=300,o=Object(c.useState)(a()),u=Object(j.a)(o,2),l=u[0],d=u[1],f=Object(c.useState)(s),v=Object(j.a)(f,2),b=v[0],h=v[1];Object(c.useEffect)((function(){var e=function(){var e=a();d(e),b>e&&h(e)};return Y.addEvent(B,e),function(){Y.removeEvent(B,e)}}),[b]);var O=Object(c.useState)(!0),p=Object(j.a)(O,2),m=p[0],g=p[1],x=_((function(){var e=!m;g(e),h(e?s:a())}),200);return{scal:n,defTarget:s,target:b,astringe:m,chartScal:r,redraw:function(e){h((function(t){var n=t+e;return n<s?s:n>l?l:n}))},setTarget:h,setAstringe:g,dectorSetAstringe:x}}(),m=p.scal,g=p.chartScal,x=p.redraw,y=p.target,w=p.setTarget,S=p.defTarget,k=p.astringe,N=p.dectorSetAstringe,E=p.setAstringe,C=Object(c.useCallback)((function(e){var t=function(e,t){return e.effect.map((function(e){var n=W(e.ruleId,e.actionIndex,e.actionName),c=t[n];return{id:n,label:e.actionName,store:{variables:e.variables,params:c||{},sequence:e.sequence}}}))}(e,r),n=t.length;O({active:t[0]||{},options:n?t:[]})}),[r]),M=Object(c.useCallback)((function(e,t){var n=he.a(A(Oe));try{n&&(e||n.clear(),n.off("click"),n.on("click",(function(e){if(e.data.source){var t=e.data;Y.dispatchEvent($,null),C(t),M(t)}})),n.setOption(function(e){var t=e.nodes,n=e.links,c=e.searchLink,i=e.nodesMap,r=t.map((function(e){return e})).sort((function(e,t){return e.name.localeCompare(t.name)})),a=Math.max.apply(Math,Object(de.a)(r.map((function(e){return e.name.length})))),s={tooltip:{trigger:"item"},series:{type:"sankey",layoutIterations:0,right:Math.round(6.2*a)+4+"px",left:"10",top:"10",nodeAlign:"left",bottom:"10",emphasis:{focus:"adjacency"},draggable:!1,data:r,links:n,lineStyle:{color:"gradient",curveness:.5}}};if(c){s.series.emphasis={focus:"none"};var o={lineStyle:{opacity:1}};if(i){var u={label:{color:"red"}};s.series.data=r.map((function(e){return null===i[e.name]?Object(h.a)(Object(h.a)({},e),u):e}))}s.series.links=n.map((function(e){return e.source===c.source&&e.target===c.target?Object(h.a)(Object(h.a)({},e),o):e})),s.series.lineStyle.opacity=.1}return s}({nodes:a.nodes,links:a.links,searchLink:e||null,nodesMap:t||null})))}catch(c){l("\u6851\u57fa\u56fe\u7ed8\u5236\u5931\u8d25 \u53ef\u80fd\u5b58\u5728\u73af")}}),[C,a.links,a.nodes]);Object(c.useEffect)((function(){w(S),E(!0),M(),O({options:[],active:{}}),g("clear")}),[g,M,n,S,E,w]),Object(c.useEffect)((function(){var e=he.a(A(Oe));void 0===e&&((e=he.b(A(Oe))).on("click",(function(e){if(e.data.source){var t=e.data;Y.dispatchEvent($,null),C(t),M(t)}})),M())}),[M,C]),Object(c.useEffect)((function(){return Y.addEvent(B,D),function(){Y.removeEvent(B,D)}}),[]),Object(c.useEffect)((function(){var e=function(e,t){e&&(C(e),M(e,t))};return Y.addEvent($,e),function(){Y.removeEvent($,e)}}),[M,C]),Object(c.useEffect)((function(){setTimeout((function(){D()}),300)}),[m,i,y]);var D=function(){var e=he.a(A(Oe));e&&e.resize()};return Object(v.jsxs)(v.Fragment,{children:[!u&&Object(v.jsxs)("div",{className:"eca-canvas",style:{width:"calc(100vw - ".concat(i?82:200,"px)"),minWidth:i?880:760,height:y},children:[Object(v.jsx)("div",{className:"utils-base utils-reset utils-btn eca-canvas-all",onClick:function(){return g("clear")},children:"\u6062\u590d\u5c3a\u5bf8"}),Object(v.jsxs)(X,{className:"utils-base utils-width",children:[Object(v.jsx)("div",{className:"utils-btn eca-canvas-up",onClick:function(){return g("w",!0)},children:"+"}),Object(v.jsx)("div",{className:"",children:(100*(1+m.w)).toFixed(0)+"%"}),Object(v.jsx)("div",{className:"utils-btn eca-canvas-down ".concat(0===m.w?"eca-forbidden":""),onClick:function(){return g("w",!1)},children:"-"}),Object(v.jsxs)("div",{className:"utils-btn",onClick:function(){return N()},children:[k?"\u5c55\u5f00":"\u6536\u8d77"," \u56fe\u8868"]})]}),Object(v.jsxs)(X,{className:"utils-base utils-height",size:10,children:[Object(v.jsx)("div",{className:"utils-btn eca-canvas-up ",onClick:function(){return g("h",!0)},children:"+"}),Object(v.jsx)("div",{className:"utils-height-text",children:(100*(1+m.h)).toFixed(0)+"%"}),Object(v.jsx)("div",{className:"utils-btn eca-canvas-down ".concat(0===m.h?"eca-forbidden":""),onClick:function(){return g("h",!1)},children:"-"})]}),Object(v.jsx)("div",{className:"eca-canvas-chart",children:Object(v.jsx)("div",{style:{height:"100%",width:"100%",overflow:"auto"},children:Object(v.jsx)("div",{id:Oe,style:{width:"".concat(100*(1+m.w),"%"),height:"".concat(100*(1+m.h),"%")}})})}),Object(v.jsx)(je,{style:{position:"absolute",bottom:2,left:0},redraw:x})]}),u&&Object(v.jsxs)("div",{style:{color:"red"},children:[" ",u," "]}),Object(v.jsx)("div",{style:{height:"calc(100% - ".concat(y+112,"px)")},children:!!(null===(t=b.options)||void 0===t?void 0:t.length)&&Object(v.jsx)(le,{options:b.options,active:b.active,setState:function(e){O({active:e,options:b.options})}})})]})},me=function(e){var t=e.stateUI,n=Object(c.useState)({activeDiff:!1,cur:t.defCur}),i=Object(j.a)(n,2),r=i[0],a=i[1],s=t.curMenu?t.curMenu.store.effect:null;return Object(c.useEffect)((function(){a({activeDiff:!1,cur:t.defCur})}),[t.curMenu,t.defCur]),Object(v.jsx)(v.Fragment,{children:t.curMenu&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(re,{cur:r.cur,setcur:function(e){a((function(t){return{activeDiff:t.activeDiff||"effect"===e,cur:e}}))},tabs:t.tabsUIData}),Object(v.jsxs)("div",{style:{height:"calc(100% - 45px)",display:"rules"===r.cur?"block":"none"},children:[Object(v.jsx)("div",{children:Object(v.jsx)(G,Object(h.a)({},e))}),Object(v.jsx)(pe,Object(h.a)({},e))]}),r.activeDiff&&s&&Object(v.jsx)("div",{style:{background:"#fff",display:"effect"===r.cur?"block":"none"},children:Object(v.jsx)(ie,{pre:s.pre,next:s.next})}),!s&&Object(v.jsx)("span",{style:{color:"red"},children:"\u7f3a\u5c11\u5f71\u54cd\u5b57\u6bb5"})]})})},ge=n.p+"static/media/delete.a762156b.svg",xe=function(e){var t=Object(c.useRef)({root:null,level1:null}),n=e.control,i=e.stateUI,r=i.menu,a=i.curMenu,s=function(e,c){return e.map((function(e){return Object(v.jsx)("div",{title:"".concat(e.label,"(").concat(e.time,")"),onClick:function(){return function(e,c){var i=e.id;if(i===(null===a||void 0===a?void 0:a.id))return null;t.current.root=c,t.current.level1=i,n.setCur(e)}(e,c)},className:"eca-menu-item ".concat(e.id===t.current.level1?"is-acitve-menu":""),children:Object(v.jsx)("div",{title:"".concat(e.time,"\n").concat(e.label),className:"eca-menu-item-text",children:e.label})},e.id)}))};return Object(v.jsx)("div",{style:{overflow:"auto",height:"100%",width:"100%"},children:(r||[]).map((function(e,c){return Object(v.jsxs)("div",{className:"eca-menu",children:[Object(v.jsxs)("div",{className:"eca-menu-sub ".concat(e.id===t.current.root?"is-acitve-menu":""),title:"".concat(e.timeRange.start,"-").concat(e.timeRange.stop),children:[Object(v.jsxs)("span",{children:["\u7b2c",c+1,"\u6761"]}),Object(v.jsx)("span",{className:"eca-menu-icon",onClick:function(){return n.removeMenu(e.id)},children:Object(v.jsx)("img",{src:ge,alt:"",width:"14"})})]}),Object(v.jsx)("div",{children:s(e.store,e.id)})]},e.id)}))})},ye=function(e){var t=Object(c.useState)(0),n=Object(j.a)(t,2),i=n[0],r=n[1],a=e.setLoading,s=Object(c.useRef)();return Object(c.useEffect)((function(){return s.current=setInterval((function(){r((function(e){var t=++e;return t>=30&&"function"===typeof a&&a(!1),t}))}),1e3),function(){s.current&&(clearTimeout(s.current),r(0))}}),[a]),Object(v.jsx)("div",{className:"mask",children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[e.children,i,"s"]}),Object(v.jsx)("div",{style:{color:"#ececec",fontSize:"14px"},children:"Tips:\u6700\u591a\u7b49\u5f8530s\uff0c\u82e5\u8d85\u65f6\u672a\u54cd\u5e94\u5219\u662f\u6d88\u606f\u5e76\u672a\u53d1\u9001\uff0c\u53ef\u5c1d\u8bd5\u5173\u95ed\u63a7\u5236\u53f0\u540e\u5237\u65b0\u9875\u9762\u91cd\u65b0\u64cd\u4f5c"})]})})},we="noticePanel",Se=function(){return window.chrome&&!!window.chrome.devtools},ke=new q,Ne=function(e,t){var n,c=t||"emit";Se()&&(n="action(".concat(e,',"').concat(c,'")'),Se()&&window.chrome.devtools.inspectedWindow.eval("".concat("window.__EAC_DEV_TOOLS__",".").concat(n)))};window.contentScriptReceiver=function(e){e.source&&"__EAC_DEV_TODOS__"===e.source&&ke.dispatchEvent(we,e)},function(e){e.emit="emit",e.abort="abort",e.pending="emitPendding",e.dic="emitRuleDictionary",e.res="emitResolve"}(ve||(ve={})),function(e){e.pending="pending",e.resolve="resolve"}(be||(be={}));var Ee={start:-1,stop:-1},Ce=o.a.Content;var Me=function(){var e=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),a=Object(j.a)(r,2),s=a[0],o=a[1],u=Object(c.useState)(!1),l=Object(j.a)(u,2),d=l[0],f=l[1],v=Object(c.useState)({}),b=Object(j.a)(v,2),h=b[0],O=b[1],p=Object(c.useState)(!1),m=Object(j.a)(p,2);return{defCur:"rules",tabsUIData:[{label:"\u89c4\u5219\u6267\u884c",types:"rules"},{label:"\u6570\u636e\u5f71\u54cd",types:"effect"}],collapsed:m[0],setCollapsed:m[1],menu:n,setMenu:i,loading:d,setLoading:f,curMenu:s,setCurMenu:o,dictionary:h,setDictionary:O}}(),t=function(e){var t=e.setMenu,n=e.setLoading,i=e.setCurMenu,r=e.setDictionary,a=e.setCollapsed,s=Object(c.useCallback)((function(e,c){var i=R(e,c);i?t((function(e){return e.concat(i)})):console.dir("\u6a21\u677f\u89e3\u6790\u9519\u8bef ".concat(i)),n(!1)}),[n,t]);return Object(c.useEffect)((function(){var e=function(e,c){var i=e.data,a=e.action;if(a===ve.emit)s(U(i),Object(h.a)(Object(h.a)({},Ee),c));else if(a===ve.dic)r((function(e){var t="string"===typeof i?JSON.parse(i):i,n={};return t.forEach((function(e){n[W(e.ruleId,e.actionIndex,e.actionName)]=e})),Object(h.a)(Object(h.a)({},e),n)}));else if(a===ve.pending||a===ve.res){var o=U(i);t((function(e){var t=e;if(!o.length)return t;var n=t.findIndex((function(e){return e.status===be.pending})),i=a===ve.res?be.resolve:be.pending;if(-1!==n){var r=o.map((function(e){return F(e)}));return t.map((function(e,t){return t===n?Object(h.a)(Object(h.a)({},e),{},{status:i,store:e.store.concat(r)}):e}))}var s=R(o,Object(h.a)(Object(h.a)({},Ee),c),i);return s?t.concat(s):t})),a===ve.res&&n(!1)}};return ke.addEvent(we,e),function(){ke.removeEvent(we,e)}}),[s,r,n,t]),Object(c.useEffect)((function(){var e=_((function(){Y.dispatchEvent(B)}),500);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),{abortRequest:function(){Ne(!0,"abort")},receiveUpdateSource:s,setCur:function(e){i(e)},start:function(){Ee.start=J(),Ne(!0)},stop:function(){Ee.stop=J(),Ne(!1),n(!0)},upload:function(){return"upload"},downLoad:function(){return"downLoad"},removeMenu:function(e){"string"===typeof e?t((function(t){var n=t.filter((function(t){return t.id!==e}));return 0===n.length&&(i(null),a(!1)),n})):(t([]),i(null),a(!1)),n(!1)}}}(e),n=Object(c.useMemo)((function(){return Object(v.jsx)(me,{control:t,stateUI:e})}),[t,e]);return Object(v.jsxs)(o.a,{className:"App",children:[Object(v.jsx)(b,{control:t,stateUI:e}),Object(v.jsxs)(o.a,{style:{display:"flex",flexDirection:"row",height:"calc(100vh - 45px)"},className:e.loading?"mask-root":"",children:[Object(v.jsx)("div",{style:{display:e.menu&&e.menu.length>0?"inline-block":"none",width:200,height:"100%",backgroundColor:"#ffffff",borderRight:"1px solid #dddddd",padding:"4px 0 20px 0"},children:xe({stateUI:e,control:t})}),e.menu&&e.menu.length>0&&Object(v.jsx)(Ce,{style:{display:"flex",flexDirection:"column"},children:n}),e.loading&&Object(v.jsx)(ye,{setLoading:e.setLoading,children:"\u6b63\u5728\u63a5\u6536\u6a21\u677f\u6570\u636e"}),0===e.menu.length&&Object(v.jsx)("h1",{style:{fontSize:"20px",padding:"10px 18px"},children:"\u8bf7\u5f55\u5236\u6570\u636e..."})]})]})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,306)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(Me,{})}),document.getElementById("root")),De()}},[[298,1,2]]]);