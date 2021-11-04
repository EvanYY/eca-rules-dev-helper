/*
 * @Author: Evan
 * @Date: 2021-11-04 12:43:01
 * @Last Modified by: yangyang
 * @Last Modified time: 2021-11-04 17:48:29
 */
let created = false;
let checkCount = 0;

// chrome.devtools.network.onNavigated.addListener(createPanelIfHasEasyCanvas);
// const checkVueInterval = setInterval(createPanelIfHasEasyCanvas, 1000);
// createPanelIfHasEasyCanvas();

// function createPanelIfHasEasyCanvas() {
//   // if (created || checkCount++ > 10) {
//   //     return;
//   // }
//   chrome.devtools.inspectedWindow.eval(
//     "!!(window.__EASYCANVAS_DEVTOOL__)",
//     (hasEasyCanvas) => {
//       if (!hasEasyCanvas || created) {
//         console.log(
//           "🚀 ~ file: devtools.js ~ line 22 ~ createPanelIfHasEasyCanvas ~ created",
//           created
//         );
//         return;
//       }
//       // clearInterval(checkVueInterval);
//       created = true;
//     }
//   );
// }
createPanels();

function createPanels() {
  chrome.devtools.panels.create(
    "q7 visual helper",
    "icons/panel-icon.png",
    "panel/index.html",
    function (extensionPanel) {
      console.log(
        "🚀 ~ file: devtools.js ~ line 41 ~ createPanels ~ extensionPanel",
        extensionPanel
      );
      // let _window;
      // const contentScriptData = [];
      // 与后台网页消息通信-长连接
      const port = chrome.runtime.connect({ name: "devtools" });
      // 监听来自页面中的事件，content-sctipt background devtool
      port.onMessage.addListener((message) => {
        console.log(
          "🚀 ~ file: devtools.js ~ line 56 ~ port.onMessage.addListener ~ message",
          message
        );
      });
      port.postMessage({
        name: "original",
        tabId: chrome.devtools.inspectedWindow.tabId,
      });
    }
  );
}
