$(function() {  
	$('#whiteWoman').click(function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "whiteWoman"});
		});
	});
	$('#africanAmericanWoman').click(function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "africanAmericanWoman"});
		});
	});
	$('#whiteMale').click(function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "whiteMale"});
		});
	});
});