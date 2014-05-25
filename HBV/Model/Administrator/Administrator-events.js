

model.Administrator.password.onGet = function() {
	return "***************";
};


model.Administrator.password.onSet = function(value) {
	this.hashKey = directory.computeHA1(this.ID, value);
};
