chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'runPopupCode') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.executeScript(tabs[0].id, { file: 'content_scripts.js' });
      });
    }
  });