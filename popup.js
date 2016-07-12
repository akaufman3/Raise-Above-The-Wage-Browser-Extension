$(function() { 
	$('#whiteMale').click(function() {
		$('#imgActiveProfileCircle').attr('src', 'public/whitemale.png');
		$('#activeProfileInfo p.profileName').text('White Male');
		$('#activeProfileInfo p.profileWage').text('$1.00');

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "whiteMale"});
		});
	});
	$('#whiteWoman').click(function() {
		$('#imgActiveProfileCircle').attr('src', 'public/whitewoman.png');	
		$('#activeProfileInfo p.profileName').text('White Woman');
		$('#activeProfileInfo p.profileWage').text('$0.79 \/ per dollar');

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "whiteWoman"});
		});
	});
	$('#africanAmericanWoman').click(function() {
		$('#imgActiveProfileCircle').attr('src', 'public/blackwoman.png');
		$('#activeProfileInfo p.profileName').text('African American Woman');
		$('#activeProfileInfo p.profileWage').text('$0.63 \/ per dollar');

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "africanAmericanWoman"});
		});
	});
	$('#hispanicWoman').click(function() {
		$('#imgActiveProfileCircle').attr('src', 'public/latinwoman.png');
		$('#activeProfileInfo p.profileName').text('Latina Woman');
		$('#activeProfileInfo p.profileWage').text('$0.54 \/ per dollar');

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "hispanicWoman"});
		});
	});
	$('#asianAmericanWoman').click(function() {
		$('#imgActiveProfileCircle').attr('src', 'public/asianwoman.png');
		$('#activeProfileInfo p.profileName').text('Asian Woman');
		$('#activeProfileInfo p.profileWage').text('$0.90 \/ per dollar');

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {action: "asianAmericanWoman"});
		});
	});
});