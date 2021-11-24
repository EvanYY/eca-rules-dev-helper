let DB = null;
const databaseName = "ECA_RULE_DATA_DB";
// const version = 1;
const request = window.indexedDB.open(databaseName);
request.onerror = function () {
  console.log("数据库打开报错");
};
request.onsuccess = function () {
  DB = request.result;
  console.log("数据库打开成功");
};
request.onupgradeneeded = function (event) {
  DB = event.target.result;
};
// 监听页面发起的__EASYCANVAS_BRIDGE_TOPANEL__事件，一般用于选择元素时
window.addEventListener("message", (e) => {
  if (e.source === window && e.data && e.data.source === "__EAC_DEV_TODOS__") {
    try {
      chrome.runtime.sendMessage(e.data);
      console.log(
        "🚀 ~ file: content-script.js ~ line 14 ~ window.e.data",
        e.data
      );
      if (DB) {
        var objectStore = DB.createObjectStore("person", { keyPath: "id" });
        objectStore.createIndex("name", "name", { unique: false });
        objectStore.createIndex("email", "email", { unique: true });
      }
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
