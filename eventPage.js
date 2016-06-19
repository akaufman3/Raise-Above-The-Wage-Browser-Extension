// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// 	if (request.action == "show") {
// 		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// 			chrome.pageAction.show(tabs[0].id);
// 		});
// 	}
// });

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete') {
	  	alert("completed")
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.pageAction.show(tabs[0].id);
		});
	}
});