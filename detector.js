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
function detect() {
  window.__EAC_DEV_TOOLS__ = {
    getStatic: function () {
      return {
        target: {
          s: "start",
          e: "end",
        },
      };
    },
    state: {
      status: false,
      start: [],
      end: [],
    },
    addEvent: function (target, ev) {
      if (
        (target === "start" || target === "end") &&
        !this.state[target].some((v) => v === ev)
      ) {
        this.state[target].push(ev);
      }
    },
    removeEvent: function (target, ev) {
      if (target === "start" || target === "end") {
        const idx = this.state[target].findIndex((v) => v === ev);
        if (idx !== -1) this.state[target].splice(idx, 1);
      }
    },
    dispatchEvent: function (target) {
      let a = Array.from(arguments);
      if (target === "start" || target === "end") {
        this.state[target].forEach((v) => {
          if (typeof v === "function") {
            v(this.notice, ...a.slice(1));
          }
        });
      }
    },
    action: function (status) {
      console.log("🚀 ~ file: detector.js ~ line 77 ~ detect ~ status", status);
      if (typeof status !== "boolean") return;
      this.state.status = status;
      this.dispatchEvent(status ? "start" : "end");
    },
    notice: function (origin) {
      const data =
        typeof origin === "string"
          ? origin
          : JSON.parse(JSON.stringify(origin));
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
