
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var logButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	logButton.click = function logButton_click (event)// @startlock
	{// @endlock
		var theUser = $$("userInput").getValue();
		var thePass = $$("passInput").getValue();
		
		if(WAF.directory.loginByPassword(theUser, thePass))
		{
			window.location = "/list/index-tablet.html";
		}
		else
		{
			$$("message").setValue("Wrong username or password!");
			
			function clearValue()
			{
			 $$("message").setValue("");
			};
			
			 setTimeout(clearValue,2500);		 
			
			
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("logButton", "click", logButton.click, "WAF");
// @endregion
};// @endlock
