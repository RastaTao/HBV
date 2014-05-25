

model.Student.fullName.onGet = function() {
	return this.lastName +", " +this.firstName;
};
