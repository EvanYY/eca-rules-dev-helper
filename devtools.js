/*
 * @Author: Evan
 * @Date: 2021-11-04 12:43:01
 * @Last Modified by: yangyang
 * @Last Modified time: 2021-11-16 13:54:22
 */
let created = false;
let checkCount = 0;
const MESSAGE_BASE = "window.__EAC_DEV_TOOLS__";
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
      let _window;
      const contentScriptData = [];
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
        if (_window && _window.contentScriptReceiver) {
          _window.contentScriptReceiver(message);
        } else {
          // contentScriptData.push(message);
        }
      });
      port.postMessage({
        name: "original",
        tabId: chrome.devtools.inspectedWindow.tabId,
      });

      // 执行代码
      const sendMessageToBackground = (message, callback) => {
        chrome.devtools.inspectedWindow.eval(message, (value) => {
          callback && callback(value);
        });
      };
      extensionPanel.onShown.addListener((panelWindow) => {
        _window = panelWindow;
        // 审查窗口
        // _window.inspectedWindow = chrome.devtools.inspectedWindow;

        _window.respond = function (msg, callback) {
          sendMessageToBackground(msg, callback);
        };

        while (contentScriptData.length !== 0) {
          _window.contentScriptReceiver(contentScriptData.shift());
        }
      });
    }
  );
  // window.onbeforeunload = function (event) {
  //   // changeStatusOrder(false, 'active')
  //   chrome.devtools.inspectedWindow.eval(
  //     `${MESSAGE_BASE}.action(false, "active")`
  //   );
  //   return null;
  // };
}
