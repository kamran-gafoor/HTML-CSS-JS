var customers = [];
var abdul = {
	"firstName" : 'Abdul',    
	"lastName" : 'Gafoor',
	"dateOfBirth" : '04/12/1999',
	"email" : 'gafoor.kamran@gmail.com',
	"phone" : '0000000000',
	"gender" : "Male",
	"country" : 'India',
	"password" : 'abdul'
};
var kamran = {
	"firstName" : 'kamran',    
	"lastName" : 'gafoor',
	"dateOfBirth" : '04/12/1999',
	"email" : 'kamran@gmail.com',
	"phone" : '1111111111',
	"gender" : "Male",
	"country" : 'US',
	"password" : 'kamran'
};
customers.push(abdul);
customers.push(kamran);
console.log(customers);
function validateLoginForm(){
	console.log("Validation started..");
	var errors = "";
	
	var email = document.getElementById("email").value;
	if(email == '' || email == undefined) {
		errors = errors + "Please Enter Email Id.<br>";
	} else {
		var emailIdFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!email.match(emailIdFormat)) {
			errors = errors + "Please Enter Valid Email Id.<br>";
		}
	}
	
	var password = document.getElementById("password").value;
	if(password == '' || password == undefined) {
		errors = errors + "Please Enter Password.<br>";
	}
	
	var isValidUser = false;
	if(email != '' && email != undefined && 
		password != '' && password != undefined) {
			for (let customer in customers) {
				console.log(customer)
				if(customers[customer].email == email && customers[customer].password == password) {
					if(!isValidUser) {
						isValidUser = true;
					}
				}
				
			}
		}
	
	if(!isValidUser) {
		errors = errors + "Invalid Credentials.<br>";
	}
	
	document.getElementById("errors").innerHTML = errors;
	console.log("Validation ended..");
	
	if(errors == "") {
		var successMessage = "Customer Logged Successfully...";
		alert(successMessage);
		document.getElementById("successMessage").innerHTML = successMessage;
		clearAllTheFields();
		return true;
	} else {
		return false;
	}
	
	
	
}

function clearAllTheFields() {
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
}