
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var goTo1 = {};	// @button
	var textField1 = {};	// @textField
	var select1 = {};	// @select
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$("container4").hide();
		$$("listView1").show();
		$$("container2").show();
		
		sources.test.all();
	};// @lock

	goTo1.click = function goTo1_click (event)// @startlock
	{// @endlock
		
		var current = sources.student.getCurrentElement();
		var fName = current.fullName.value;
		
		sources.test.query("student.fullName ==:1",fName);
		
		$$("container4").show();
		$$("listView1").hide();
		$$("container2").hide();
		
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
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("goTo1", "click", goTo1.click, "WAF");
	WAF.addListener("textField1", "keyup", textField1.keyup, "WAF");
	WAF.addListener("select1", "change", select1.change, "WAF");
// @endregion
};// @endlock
