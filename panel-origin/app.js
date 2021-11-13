// port.postMessage({
//   name: "original",
//   tabId: chrome.devtools.inspectedWindow.tabId,
// });
window.echoText = function (id, val) {
  const dom = document.getElementById(id);
  if (dom) {
    dom.innerText(val);
  } else {
    console.log(id, "is not exit");
  }
};
const addEvent = () => {
  document.getElementById("start").addEventListener("click", function (e) {
    console.log(
      "🚀 ~ file: app.js ~ line 43 ~ document.getElementById ~ start"
    );
    chrome.devtools.inspectedWindow.eval(
      `window.__EAC_DEV_TOOLS__.action(true)`
    );
  });
  document.getElementById("stop").addEventListener("click", function (e) {
    console.log("🚀 ~ file: app.js ~ line 24 ~ stop");
    chrome.devtools.inspectedWindow.eval(
      `window.__EAC_DEV_TOOLS__.action(false)`
    );
  });
};
window.onload = () => {
  // window.$app.$actions.$init(window.$app);
  addEvent();
};

const handlers = {
  noticePanel: [],
};
window.contentScriptReceiver = (data) => {
  console.log("🚀 ~ file: app.js ~ line 49 ~ data panel.html", data);
  if (data.source && data.source === "__EAC_DEV_TODOS__") {
    const handler = handlers.noticePanel;

    if (handler && handler.length) {
      handler.forEach((v) => {
        if (typeof v === "function") {
          v(data.data);
        }
      });
    }
  }
};
