function validateForm(){
	console.log("validation started);
	var errors = "";
	
	var fname=document.getElementById("fname").value;
	if(fname == "" || fname == undefined){
		errors=errors + "Please enter first name. <br>";
	}
	
	var lname=document.getElementById("lname").value;
	if(lname == "" || lname == undefined){
		errors=errors + "Please enter last name. <br>";
	}
	
	var dob=document.getElementById("dob").value;
	if(fname == "" || dob == undefined){
		errors=errors + "Please enter Date of Birth. <br>";
	}
	
	var email=document.getElementById("email").value;
	if(email == "" || email == undefined){
		errors=errors + "Please enter email id. <br>";
	}else {
		var emailIdFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!email.match(emailIdFormat)){
			errors = errors + "Please enter valid email id.<br>;
		}
	}
	
	var phone=document.getElementById("phone").value;
	if(phone == "" || phone == undefined){
		errors=errors + "Please enter phone number. <br>";
	}else {
		var phoneFormat = /^\d(10)+$/;
		if(!phone.match(phoneFormat)){
			errors = errors + "Please enter valid phone number.<br>;
		}
	}
	
	var female=document.getElementById("female").checked;
	var male=document.getElementById("male").checked;
	if((female == "" || female == undefined) && (male == "" || male == undefined)){
		errors=errors + "Please select gender. <br>";
	}
	
	var cloths=document.getElementById("cloths").checked;
	var electronics=document.getElementById("electronics").checked;
	var toys=document.getElementById("toys").checked;
	var books=document.getElementById("books").checked;
	if((cloths == "" || cloths == undefined) && (electronics == "" || electronics == undefined) && (toys == "" || toys == undefined) && (books == "" || books == undefined)){
		errors=errors + "Please select shopping interest. <br>";
	}
	
	var country = document.getElementById("country").value;
	if(country == "" || country == undefined){
		errors=errors + "Please select country. <br>";
	}
	
	var password = document.getElementById("password").value;
	if(password == "" || password == undefined){
		errors=errors + "Please select password. <br>";
	}
	
	var confirmpassword = document.getElementById("confirmpassword").value;
	if(confirmpassword == "" || confirmpassword == undefined){
		errors=errors + "Please confirm password. <br>";
	}
	
	if(password != '' && password != undefined && confirmpassword != '' && confirmpassword != undefined){
		if(password != confirmpassword){
			errors = errors + "password and confirm password does not match.<br>";
		}
	}
	
	var shipping = document.getElementById("shipping").value;
	if(shipping == "" || shipping == undefined){
		errors=errors + "Please enter address for shipping. <br>";
	}
	
	document.getElementById("errors").innerHTML= errors;
	console.log("validation ended");
	
	if(errors == ""){
		var successMessage = "customer signed up";
		alert(successMessage);
		document.getElementById(successMessage).innerHTML= successMessage;
		clearAllTheFields();
	}
}
		
	
	
		