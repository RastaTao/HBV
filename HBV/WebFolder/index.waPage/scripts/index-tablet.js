
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button3 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		window.location = "/results/index-tablet.html";
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		window.location = "/log/index-tablet.html";
	};// @lock
	
	//
	//

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
// @endregion
};// @endlock
