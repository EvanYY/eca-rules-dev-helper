// // 监听页面发起的__EASYCANVAS_BRIDGE_TOPANEL__事件，一般用于选择元素时
window.addEventListener("message", (e) => {
  if (e.source === window && e.data && e.data.source === "__EAC_DEV_TODOS__") {
    console.log(
      "🚀 ~ file: content-script.js ~ line 14 ~ window.e.data",
      e.data
    );
    chrome.runtime.sendMessage(e.data);
  }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message && message.source === "__EAC_DEV_TOOLS_BACKGROUND__") {
    window.postMessage({ ...message });
  }
});
