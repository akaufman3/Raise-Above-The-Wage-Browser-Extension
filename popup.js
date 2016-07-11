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
	$('#hispanicWoman').click(function() {	
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "hispanicWoman"});
		});
	});
	$('#asianAmericanWoman').click(function() {	
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "asianAmericanWoman"});
		});
	});
});