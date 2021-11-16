// 作为content script 与 devtool 通信的桥
const connections = {};
const emitCurrentPage = (action, data) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      source: "__EAC_DEV_TOOLS_BACKGROUND__",
      action: action,
      data: data,
    });
  });
};
chrome.runtime.onConnect.addListener(function (port) {
  const extensionListener = function (message, sender, sendResponse) {
    console.log(
      "🚀 ~ file: background.js ~ line 9 ~ extensionListener ~ message.tabId",
      message
    );
    if (message.source == "__EAC_DEV_TOOLS_HELPER__") {
      connections[message.tabId] = port;
      emitCurrentPage("active", true);
    }
  };
  port.onMessage.addListener(extensionListener);

  port.onDisconnect.addListener(function (port) {
    port.onMessage.removeListener(extensionListener);

    const tabs = Object.keys(connections);
    for (let i = 0, len = tabs.length; i < len; i++) {
      if (connections[tabs[i]] == port) {
        emitCurrentPage("active", false);
        delete connections[tabs[i]];
        break;
      }
    }
  });
});

// 接收内容脚本的消息，并发送到devtool的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (sender.tab) {
    const tabId = sender.tab.id;
    if (tabId in connections) {
      connections[tabId].postMessage(message);
    } else {
      console.log("Tab not found in connection list.");
    }
  } else {
    console.log("sender.tab not defined.");
  }
  return true;
});
