// var twoDecimal = new RegExp(/\.[0-9]{2}/);
// var commaCheck = new RegExp(/[0-9,]+$/g);
// var commaCheck = new RegExp(/[,]/g);

var costAdjustments = {
	whiteMale: 0,
	whiteWoman: 1.28,
	africanAmericanWoman: 1.58,
	hispanicWoman: 1.85,
	asianAmericanWoman: 1.11
};

var i;
var whiteMaleCosts = [];
var whiteWomanCosts = [];
var africanAmericanWomanCosts = [];
var hispanicWomanCosts = [];
var asianAmericanWomanCosts = [];


var findDollars =/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g;
while (m = findDollars.exec(document.body.innerText)) { 
    var currentCost = m[0].replace(/\$/g, "");
	whiteMaleCosts.push(currentCost);
	
	var whiteWomanCost = currentCost * costAdjustments.whiteWoman;
	whiteWomanCosts.push(whiteWomanCost);

	var africanAmericanWomanCost = currentCost * costAdjustments.africanAmericanWoman;
	africanAmericanWomanCosts.push(africanAmericanWomanCost);

	var hispanicWomanCost = currentCost * costAdjustments.hispanicWoman;
	hispanicWomanCosts.push(hispanicWomanCost);	

	var asianAmericanWomanCost = currentCost * costAdjustments.asianAmericanWoman;
	asianAmericanWomanCosts.push(asianAmericanWomanCost);	
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

	if(request.action == "whiteMale") {
		var i = 0;
		var maleCost = '$' + Math.abs(parseFloat(whiteMaleCosts[i])).toFixed(2);
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			console.log(match, "match")
			var newValue = '$' + Math.abs(parseFloat(whiteMaleCosts[i])).toFixed(2);
			console.log(newValue, "newValue")
			i++;
			return match.replace(match, newValue);
		});
	} else if(request.action == "whiteWoman") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			var womenCost = '$' + Math.abs(parseFloat(whiteWomanCosts[i])).toFixed(2);
			i++;
			return womenCost;
		});
	} else if(request.action == "africanAmericanWoman") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			var womenCost = '$' + Math.abs(parseFloat(africanAmericanWomanCosts[i])).toFixed(2);
			i++;
			return womenCost;
		});
	} else if(request.action == "hispanicWoman") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			var womenCost = '$' + Math.abs(parseFloat(hispanicWomanCosts[i])).toFixed(2);
			i++;
			return womenCost;
		});
	} else if(request.action == "asianAmericanWoman") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			var womenCost = '$' + Math.abs(parseFloat(asianAmericanWomanCosts[i])).toFixed(2);
			i++;
			return womenCost;
		});
	}

	var requestAction = request.action;
});

console.log(whiteMaleCosts, "whiteMalecosts");
console.log(whiteWomanCosts, "whiteWomanCosts");
console.log(africanAmericanWomanCosts, "africanAmericanWomanCosts");
console.log(hispanicWomanCosts, "hispanicWomanCosts");
console.log(asianAmericanWomanCosts, "asianAmericanWomanCosts");


chrome.runtime.sendMessage({
	changeInfo: "completed"
});