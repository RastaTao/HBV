
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button8 = {};	// @button
	var documentEvent = {};	// @document
	var button7 = {};	// @button
	var button6 = {};	// @button
	var button5 = {};	// @button
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button1 = {};	// @button
	var textField1 = {};	// @textField
	var select1 = {};	// @select
// @endregion// @endlock

// eventHandlers// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		WAF.directory.logout();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		sources.test.query("ID<0");
		sources.student.query("ID<0");
		
		var current = WAF.directory.currentUser();
		
		if(current)
		{
		sources.test.all();
		sources.student.all();
		}
		
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		$$("listView2").show();
		$$("searchDiv").show();
		$$("addDiv").hide();
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		$$("listView2").show();
		$$("searchDiv").show();
		$$("modifyDiv").hide();
		sources.test.all();
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		var current = sources.student.getCurrentElement();
		var fName = current.fullName.value;
		
		$$("name").setValue(fName);
		
		sources.test.query("student.fullName ==:1",fName);
		
		$$("modifyDiv").show();
		$$("popup").hide();
		$$("searchDiv").hide();
		$$("listView2").hide();
		$$("addDiv").hide();
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$("modifyDiv").hide();
		$$("popup").hide();
		$$("searchDiv").hide();
		$$("listView2").hide();
		$$("addDiv").show();
		
		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$("popup").show();
		
		function clearValue()
			{
			 $$("popup").hide();
			};
			
			 setTimeout(clearValue,2500);	
		
	};// @lock

	textField1.keyup = function textField1_keyup (event)// @startlock
	{// @endlock
		var value = $$("textField1").getValue();
		WAF.sources.student.query("firstName =:1 OR lastName =:1",{ params: ["*" +value + "*"]});
		
	};// @lock

	select1.change = function select1_change (event)// @startlock
	{// @endlock
		var value = $$("select1").getValue();
		
		if(value === "all"){
		WAF.sources.student.all();
						  }
		else{
		
		WAF.sources.student.query("sport =:1",value);
			}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button8", "click", button8.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("textField1", "keyup", textField1.keyup, "WAF");
	WAF.addListener("select1", "change", select1.change, "WAF");
// @endregion
};// @endlock
