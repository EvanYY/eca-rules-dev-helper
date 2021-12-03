/*
 * @Author: Evan
 * @Date: 2021-12-02 14:43:00
 * @Last Modified by:   yangyang
 * @Last Modified time: 2021-12-02 14:43:00
 */
// // let DB = null;
// const databaseName = "ECA_RULE_DATA_DB";
// // const version = 1;
// const request = window.indexedDB.open(databaseName);
// request.onerror = function () {
//   console.dir("Why didn't you allow my web app to use IndexedDB?!");
// };
// request.onsuccess = function (event) {
//   if (request === event.target) {
//     DB = request.result;
//     console.log("数据库打开成功");
//   }
// };
// request.onupgradeneeded = function (event) {
//   // DB = event.target.result;
// };
// 监听页面发起的__EAC_DEV_TODOS__事件，接收数据
window.addEventListener("message", (e) => {
  if (e.source === window && e.data && e.data.source === "__EAC_DEV_TODOS__") {
    try {
      chrome.runtime.sendMessage(e.data);
      console.log(
        "🚀 ~ file: content-script.js ~ line 14 ~ window.e.data",
        e.data
      );
    } catch (e) {
      console.log(
        "🚀 ~ file: content-script.js ~ line 11 ~ window.addEventListener ~ error",
        e
      );
    }
  }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message && message.source === "__EAC_DEV_TOOLS_BACKGROUND__") {
    window.postMessage({ ...message });
  }
});
