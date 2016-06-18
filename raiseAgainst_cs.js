var costAdjustments = {
	whiteWoman: 0.21,
	africanAmericanWoman: 0.45
};

var currentCostAdjustments = 0;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if(request.action == "whiteWoman") {
			document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
				var currentCost = match.replace(/\$/g, "");
				if (currentCostAdjustments !== 0) {
					var baseCost = currentCost - (currentCostAdjustments * currentCost);
					var womenCostDiff = baseCost * costAdjustments.whiteWoman;
					var womenCost = '$' + Math.abs(parseFloat(baseCost) + parseFloat(womenCostDiff)).toFixed(2);
				} else {
					var womenCostDiff = currentCost * costAdjustments.whiteWoman;
					var womenCost = '$' + Math.abs(parseFloat(currentCost) + parseFloat(womenCostDiff)).toFixed(2);
				}
				// return '<span class="red">' + womenCost + '</span>';
				return womenCost;
			});

	} else if(request.action == "africanAmericanWoman") {
		document.body.innerHTML = document.body.innerHTML.replace(/\$\d+[0-9\.,]+?(?=\D\D)\b(?! )/g, function(match){
			var currentCost = match.replace(/\$/g, "");
			if (currentCostAdjustments !== 0) {
				var baseCost = currentCost - (currentCostAdjustments * currentCost);
				var womenCostDiff = baseCost * costAdjustments.africanAmericanWoman;
				var womenCost = '$' + Math.abs(parseFloat(baseCost) + parseFloat(womenCostDiff)).toFixed(2);
			} else {
				var womenCostDiff = currentCost * costAdjustments.africanAmericanWoman;
				var womenCost = '$' + Math.abs(parseFloat(currentCost) + parseFloat(womenCostDiff)).toFixed(2);
			}
			// return '<span class="red">' + womenCost + '</span>';
			console.log(currentCostAdjustments)
			return womenCost;
		});
	}

	var requestAction = request.action;
	currentCostAdjustments = costAdjustments[requestAction];
});

chrome.runtime.sendMessage({
	action: "show"
});