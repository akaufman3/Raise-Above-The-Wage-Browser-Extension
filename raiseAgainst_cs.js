var costAdjustments = {
	whiteMale: 0,
	whiteWoman: 0.21,
	africanAmericanWoman: 0.45,
	latinoWoman: 0.35,
	asianAmericanWoman: 0.54
};

var currentCostAdjustments = 0;
var costs = [];
var i;

var twoDecimal = new RegExp(/\.[0-9]{2}/);
// var commaCheck = new RegExp(/[0-9,]+$/g);
var commaCheck = new RegExp(/[,]/g);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if(request.action == "whiteMale") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			var currentCost = match.replace(/\$/g, "");
			var comma;
			if (commaCheck.test(currentCost) == true) {
				currentCost = currentCost.replace(/\,/g, "");
				comma = true;
			} else {
				comma = false;
			}
			if (currentCostAdjustments !== 0) {
				var baseCost = currentCost - (currentCostAdjustments * costs[i]);
				if (comma == true) {
					var finalCost = Math.abs(parseFloat(baseCost)).toFixed(2);
					var maleCost = '$' + Number(finalCost).toLocaleString('en');
				} else {
					var maleCost = '$' + Math.abs(parseFloat(baseCost)).toFixed(2);
				}
			} else {
				costs.push(currentCost);
				if (comma == true) {
					var finalCost = Math.abs(parseFloat(currentCost)).toFixed(2);
					var maleCost = '$' + Number(finalCost).toLocaleString('en');
				} else {
					var maleCost = '$' + Math.abs(parseFloat(currentCost)).toFixed(2);
				}
			}
			// return '<span class="red">' + womenCost + '</span>';
			i++;
			return maleCost;
		});
	} else if(request.action == "whiteWoman") {
			var i = 0;
			document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
				var currentCost = match.replace(/\$/g, "");
				if (currentCostAdjustments !== 0) {
					var baseCost = currentCost - (currentCostAdjustments * costs[i]);
					var womenCostDiff = baseCost * costAdjustments.whiteWoman;
					var womenCost = '$' + Math.abs(parseFloat(baseCost) + parseFloat(womenCostDiff)).toFixed(2);
				} else {
					costs.push(currentCost);
					var womenCostDiff = currentCost * costAdjustments.whiteWoman;
					var womenCost = '$' + Math.abs(parseFloat(currentCost) + parseFloat(womenCostDiff)).toFixed(2);
				}
				// return '<span class="red">' + womenCost + '</span>';
				i++;
				return womenCost;
			});
	} else if(request.action == "africanAmericanWoman") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			var currentCost = match.replace(/\$/g, "");
			if (currentCostAdjustments !== 0) {
				var baseCost = currentCost - (currentCostAdjustments * costs[i]);
				var womenCostDiff = baseCost * costAdjustments.africanAmericanWoman;
				var womenCost = '$' + Math.abs(parseFloat(baseCost) + parseFloat(womenCostDiff)).toFixed(2);
			} else {
				costs.push(currentCost);
				var womenCostDiff = currentCost * costAdjustments.africanAmericanWoman;
				var womenCost = '$' + Math.abs(parseFloat(currentCost) + parseFloat(womenCostDiff)).toFixed(2);
			}
			// return '<span class="red">' + womenCost + '</span>';
			i++;
			return womenCost;
		});
	} else if(request.action == "latinoWoman") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			var currentCost = match.replace(/\$/g, "");
			if (currentCostAdjustments !== 0) {
				var baseCost = currentCost - (currentCostAdjustments * costs[i]);
				var womenCostDiff = baseCost * costAdjustments.latinoWoman;
				var womenCost = '$' + Math.abs(parseFloat(baseCost) + parseFloat(womenCostDiff)).toFixed(2);
			} else {
				costs.push(currentCost);
				var womenCostDiff = currentCost * costAdjustments.latinoWoman;
				var womenCost = '$' + Math.abs(parseFloat(currentCost) + parseFloat(womenCostDiff)).toFixed(2);
			}
			// return '<span class="red">' + womenCost + '</span>';
			i++;
			return womenCost;
		});
	} else if(request.action == "asianAmericanWoman") {
		var i = 0;
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			var currentCost = match.replace(/\$/g, "");
			if (currentCostAdjustments !== 0) {
				var baseCost = currentCost - (currentCostAdjustments * costs[i]);
				var womenCostDiff = baseCost * costAdjustments.asianAmericanWoman;
				var womenCost = '$' + Math.abs(parseFloat(baseCost) + parseFloat(womenCostDiff)).toFixed(2);
			} else {
				costs.push(currentCost);
				var womenCostDiff = currentCost * costAdjustments.asianAmericanWoman;
				var womenCost = '$' + Math.abs(parseFloat(currentCost) + parseFloat(womenCostDiff)).toFixed(2);
			}
			// return '<span class="red">' + womenCost + '</span>';
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