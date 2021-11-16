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
    }
    addEvent(target, ev) {
      if (
        target in this.state &&
        typeof ev === "function" &&
        !this.state[target].some((v) => v === ev)
      ) {
        this.state[target].push(ev);
      } else {
        console.error("订阅错误", target, ev);
      }
    }
    getStatic() {
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
        },
      };
    }
    removeEvent(target, ev) {
      if (target in this.state) {
        const idx = this.state[target].findIndex((v) => v === ev);
        if (idx !== -1) this.state[target].splice(idx, 1);
      }
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
      console.log(
        "🚀 ~ file: detector.js ~ line 77 ~ detect ~ status, action",
        status,
        action
      );
      if (action === "emit") {
        if (typeof status !== "boolean") return;
        this.dispatchEvent(status ? "start" : "stop");
      } else if (action === "active") {
        this.ACTIVE = !!status;
        this.dispatchEvent("active", this.ACTIVE);
      }
    }
    changeActive(status) {
      this.ACTIVE = !!status;
      if (!!status) {
        this.abort();
      }
    }
    abort() {
      this.dispatchEvent("abort");
    }
  }
  window.__EAC_DEV_TOOLS__ = new Devtools();
}

if (document instanceof HTMLDocument) {
  const script = document.createElement("script");
  script.textContent = ";(" + detect.toString() + ")(window)";
  document.documentElement.appendChild(script);
  script.parentNode.removeChild(script);
}
