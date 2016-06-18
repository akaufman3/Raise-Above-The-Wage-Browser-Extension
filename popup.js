$(function() {  
	$('#whiteMale').click(function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "whiteMale"});
		});
	});
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
	$('#latinoWoman').click(function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "latinoWoman"});
		});
	});
	$('#asianAmericanWoman').click(function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "asianAmericanWoman"});
		});
	});
});