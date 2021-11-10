const $state = {
  isPaintRecording: true, // 监听
  selectorActive: false, // 元素选择
  snapshoot: {}, // 元素快照
  treeElements: {
    expansionMap: [],
    inspectedInstance: {},
  },
  elements: {},
};

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
