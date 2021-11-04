// window.addEventListener("message", (e) => {
//   if (e.source === window && e.data.easyCanvasDetected) {
//     chrome.runtime.sendMessage(e.data);
//   }
// });
// sub: {
//     state={
//         start:[],
//         stop:[]
//     },
//     addEventListener(target,ev){
//         if(target in this.state) {
//             this.state[target].push(ev)
//         }
//     } ,
//     removeEventListener(target,ev) {
//         if(target in this.state && this.state[target].length) {
//             const idx = this.state[target].findIndex(v => v === ev)
//             if(idx !== -1) {
//                 this.state[target].splice(idx,1)
//             }
//         }
//     },
//     dispatchEvent(target, res){
//         if(target in this.state) {
//             const data = JSON.parse(JSON.stringify(res))
//             this.state[target].forEach(item => item(data))
//         }
//     },
//     clear(){
//         this.state = {
//             start:[],
//             stop:[]
//         }
//     }
// },
function detect(win) {
  window.__EAC_DEV_TOOLS__ = {
    getStatic: function () {},
    state: {
      status: false,
      start:[],
      end:[]
    },
    addEvent: function(){
        
    },
    action: function (status) {
      this.state.status = status;
      console.log("this.state.status", this.state.status);
      if (!status) this.notice({ val: Math.random() });
    },

    notice: function (origin) {
      const data = JSON.parse(JSON.stringify(origin));
      window.postMessage({ source: "__EAC_DEV_TODOS__", data: data });
    },
  };
}

if (document instanceof HTMLDocument) {
  const script = document.createElement("script");
  script.textContent = ";(" + detect.toString() + ")(window)";
  document.documentElement.appendChild(script);
  script.parentNode.removeChild(script);
}
