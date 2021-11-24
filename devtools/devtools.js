/*
 * @Author: Evan
 * @Date: 2021-11-04 12:43:01
 * @Last Modified by: yangyang
 * @Last Modified time: 2021-11-23 19:24:37
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
  // let DB = null;
  // const databaseName = "ECA_RULE_DATA_DB";
  // // const version = 1
  // const request = window.indexedDB.open(databaseName);
  // request.onerror = function () {
  //   console.warn("数据库打开报错");
  // };
  // request.onsuccess = function () {
  //   DB = request.result;
  //   console.warn("数据库打开成功");
  // };
  // request.onupgradeneeded = function (event) {
  //   DB = event.target.result;
  // };

  // function read(db) {
  //   console.warn("🚀 ~ file: index.ts ~ line 21 ~ read ~ db", db);
  //   if (!db) return null;
  //   var transaction = db.transaction(["person"]);
  //   var objectStore = transaction.objectStore("person");
  //   const req = objectStore.get(1);

  //   req.onerror = function (event) {
  //     console.warn("事务失败");
  //   };

  //   req.onsuccess = function (event) {
  //     if (req.result) {
  //       console.warn("Name: " + req.result.name);
  //       console.warn("Age: " + req.result.age);
  //       console.warn("Email: " + req.result.email);
  //     } else {
  //       console.warn("未获得数据记录");
  //     }
  //   };
  // }
  chrome.devtools.panels.create(
    "q7 visual helper",
    "",
    "panel/index.html",
    function (extensionPanel) {
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
          // try {
          //   read(DB);
          // } catch (error) {
          //   console.log(
          //     "🚀 ~ file: devtools.js ~ line 94 ~ port.onMessage.addListener ~ error",
          //     error
          //   );
          // }
        } else {
          // contentScriptData.push(message);
        }
      });
      port.postMessage({
        source: "__EAC_DEV_TOOLS_HELPER__",
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
}
