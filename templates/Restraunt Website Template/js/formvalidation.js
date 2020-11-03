function validation() {
	// body...

	var user = document.getElementById("username").value;
	var mobile = document.getElementById("mobile").value;
	var email = document.getElementById("email").value;

	// Username Check (Start)
	if (user == "") 
	{
		document.getElementById("usernameerror").innerHTML = " Please enter username ";
		console.log(" Please enter username ");
		user = false;

	}
	else if (!isNaN(user)) 
	{
		document.getElementById("usernameerror").innerHTML = " Please enter only letters not number ";
		console.log(" Please enter only letters not number ");
		user = false;

	}
	else if ( (user.length <= 2) || (user.length >= 20) ) 
	{
		document.getElementById("usernameerror").innerHTML = " Please enter username with more than 2 letters";
		console.log(" Please enter username with more than 2 letters");
		user = false;
	}
	else 
	{
		document.getElementById("usernameerror").innerHTML = "";
		console.log(" Username = correct ");
		user = true;
	}
	// Username Check (End)


	// Mobile number Check (Start)
	if (mobile == "") 
	{
		document.getElementById("mobileerror").innerHTML = " Please enter mobile number ";
		console.log(" Please enter mobile number ");
		mobile = false;
	}
	else if (isNaN(mobile)) 
	{
		document.getElementById("mobileerror").innerHTML = " Please enter only numbers ";
		console.log(" Please enter only numbers ");
		mobile = false;
	}
	else if (mobile.length < 10) 
	{
		document.getElementById("mobileerror").innerHTML = " Please enter number with 10 digits ";
		console.log(" Please enter number with 10 digits ");
		mobile = false;
	}
	else 
	{
		document.getElementById("mobileerror").innerHTML = "";
		console.log(" Mobile number = correct ");
		mobile = true;
	}
	// Mobile number Check (End)

	// Email ID Check (Start)
	if (email == "") 
	{
		document.getElementById("emailerror").innerHTML = " Please enter a email ";
		console.log(" Please enter email ");
		email = false;
	}
	else if (!isNaN(email)) 
	{
		document.getElementById("emailerror").innerHTML = " Please enter only numbers ";
		console.log(" Please enter only numbers ");
		email = false;
	}
	else if (email.length <= 5) 
	{
		document.getElementById("emailerror").innerHTML = " Please enter number with more than 5 letters";
		console.log(" Please enter number with more than 5 letters");
		email = false;
	}
	else 
	{
		document.getElementById("emailerror").innerHTML = "";
		console.log(" Email = correct ");
		email = true;
	}
	// Email ID Check (End)

	// All Condition Check 
	if ((user == true),(mobile == true),(email == true))
	{
		var x = true;
	}
	else
	{
		var x = false;
	}

	// Return the value
	return x;

}


	

	