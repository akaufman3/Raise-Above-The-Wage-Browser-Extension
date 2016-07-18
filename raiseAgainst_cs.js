var costAdjustments = {
	whiteMale: 0,
	whiteWoman: 1.28,
	africanAmericanWoman: 1.58,
	hispanicWoman: 1.85,
	asianAmericanWoman: 1.11
};

var currentCostAdjustments = 0;

var i;
var costs = [];
var twoDecimal = new RegExp(/\.[0-9]{2}/);
// var commaCheck = new RegExp(/[0-9,]+$/g);
var commaCheck = new RegExp(/[,]/g);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

	if(request.action == "whiteMale") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			var comma;
			if (commaCheck.test(costs[i]) == true) {
				currentCost = costs[i].replace(/\,/g, "");
				comma = true;
			} else {
				comma = false;
			}
			if (currentCostAdjustments !== 0) {
				if (comma == true) {
					var finalCost = '$' + Math.abs(parseFloat(costs[i])).toFixed(2);
					var maleCost = '$' + Number(finalCost).toLocaleString('en');
				}
				else {
					var maleCost = '$' + Math.abs(parseFloat(costs[i])).toFixed(2);
				}
			} else {
				var currentCost = match.replace(/\$/g, "");
				costs.push(currentCost);
				if (comma == true) {
					var finalCost = '$' + Math.abs(parseFloat(currentCost)).toFixed(2);
					var maleCost = '$' + Number(finalCost).toLocaleString('en');
				} else {
					var maleCost = '$' + Math.abs(parseFloat(currentCost)).toFixed(2);
				}
			}
			i++;
			return maleCost;
		});
	} else if(request.action == "whiteWoman") {
			var i = 0;
			document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
				if (currentCostAdjustments !== 0) {
					var womenCostDiff = costs[i] * costAdjustments.whiteWoman;
					var womenCost = '$' + Math.abs(parseFloat(womenCostDiff)).toFixed(2);
				} else {
					var currentCost = match.replace(/\$/g, "");
					costs.push(currentCost);
					var womenCostDiff = currentCost * costAdjustments.whiteWoman;
					var womenCost = '$' +  Math.abs(parseFloat(womenCostDiff)).toFixed(2);
				}
				i++;
				return womenCost;
			});
	} else if(request.action == "africanAmericanWoman") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			if (currentCostAdjustments !== 0) {
				var womenCostDiff = costs[i] * costAdjustments.africanAmericanWoman;
				var womenCost = '$' + Math.abs(parseFloat(womenCostDiff)).toFixed(2);
			} else {
				var currentCost = match.replace(/\$/g, "");
				costs.push(currentCost);
				var womenCostDiff = costs[i] * costAdjustments.africanAmericanWoman;
				var womenCost = '$' + Math.abs(parseFloat(womenCostDiff)).toFixed(2);
			}
			i++;
			return womenCost;
		});
	} else if(request.action == "hispanicWoman") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			if (currentCostAdjustments !== 0) {
				var womenCostDiff = costs[i] * costAdjustments.hispanicWoman;
				var womenCost = '$' + Math.abs(parseFloat(womenCostDiff)).toFixed(2);
			} else {
				var currentCost = match.replace(/\$/g, "");
				costs.push(currentCost);
				var womenCostDiff = currentCost * costAdjustments.hispanicWoman;
				var womenCost = '$' + Math.abs(parseFloat(womenCostDiff)).toFixed(2);
			}
			i++;
			return womenCost;
		});
	} else if(request.action == "asianAmericanWoman") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			if (currentCostAdjustments !== 0) {
				var womenCostDiff = costs[i] * costAdjustments.asianAmericanWoman;
				var womenCost = '$' + Math.abs(parseFloat(womenCostDiff)).toFixed(2);
			} else {
				var currentCost = match.replace(/\$/g, "");
				costs.push(currentCost);
				var womenCostDiff = currentCost * costAdjustments.asianAmericanWoman;
				var womenCost = '$' + Math.abs(parseFloat(womenCostDiff)).toFixed(2);
			}
			i++;
			return womenCost;
		});
	}

	var requestAction = request.action;
	currentCostAdjustments = costAdjustments[requestAction];
});

chrome.runtime.sendMessage({
	action: "show"
});