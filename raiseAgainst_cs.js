var costAdjustments = {
	whiteWoman: 0.21,
	africanAmericanWoman: 0.45
};

var currentCostAdjustments = 0;
var costs = [];
var i;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if(request.action == "whiteWoman") {
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
	}

	var requestAction = request.action;
	currentCostAdjustments = costAdjustments[requestAction];
});

chrome.runtime.sendMessage({
	action: "show"
});