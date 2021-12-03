/*
 * @Author: Evan
 * @Date: 2021-12-02 14:43:03
 * @Last Modified by:   yangyang
 * @Last Modified time: 2021-12-02 14:43:03
 */
function detect() {
  class Devtools {
    constructor() {
      this.ACTIVE = false;
      this.state = Object.freeze({
        active: [],
        abort: [],
        start: [],
        stop: [],
      });
      this.getStatic = function () {
        return {
          target: {
            start: "start",
            stop: "stop",
            abort: "abort",
            active: "active",
          },
          action: {
            emit: "emit",
            abort: "abort",
            emitWait: "emitPendding",
            emitDic: "emitRuleDictionary",
            emitResolve: "emitResolve",
          },
        };
      };
      this.emit = function (origin, action) {
        const data =
          typeof origin === "string"
            ? origin
            : JSON.parse(JSON.stringify(origin));
        window.postMessage({
          source: "__EAC_DEV_TODOS__",
          data: data,
          action: action || "emit",
        });
      };
      this.addEvent = function (target, ev) {
        if (
          target in this.state &&
          typeof ev === "function" &&
          !this.state[target].some((v) => v === ev)
        ) {
          this.state[target].push(ev);
        } else {
          console.error("订阅错误", target, ev);
        }
      };
      this.removeEvent = function (target, ev) {
        if (target in this.state) {
          const idx = this.state[target].findIndex((v) => v === ev);
          if (idx !== -1) this.state[target].splice(idx, 1);
        }
      };
    }
    dispatchEvent(target) {
      let a = Array.from(arguments);
      if (target in this.state) {
        this.state[target].forEach((v) => {
          if (typeof v === "function") {
            v(...a.slice(1));
          }
        });
      }
    }
    action(status, action) {
      if (action === "emit") {
        if (typeof status !== "boolean") return;
        this.dispatchEvent(status ? "start" : "stop");
      } else if (action === "active") {
        this.ACTIVE = !!status;
        this.dispatchEvent("active", this.ACTIVE);
      } else if (action === "abort") {
        this.dispatchEvent(action, status);
      }
    }
    abort() {
      this.dispatchEvent("abort");
    }
  }
  const devtools = new Devtools();
  window.__EAC_DEV_TOOLS__ = devtools;
  window.addEventListener("message", function (ev) {
    if (
      ev.origin === window.origin &&
      ev.data &&
      ev.data.source === "__EAC_DEV_TOOLS_BACKGROUND__"
    ) {
      const { action, data } = ev.data;
      if (action === "active") {
        devtools.action(data, "active");
      }
    }
  });
}

if (document instanceof Document) {
  const script = document.createElement("script");
  script.textContent = ";(" + detect.toString() + ")(window)";
  document.documentElement.appendChild(script);
  script.parentNode.removeChild(script);
}
