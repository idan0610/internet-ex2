// Create 3 div elements for the 3 screens: login, profile and calculator
var loginScreen = document.createElement('div');
var profileScreen = document.createElement('div');
var calculatorScreen = document.createElement('div');
var calcs = [];

// -----------------------------------------------------------------------------------
// Events
// -----------------------------------------------------------------------------------

// Handle checking username and password when clicking on the login button
function checkInput () {
	if (document.getElementById("username").value === "admin" && document.getElementById("password").value === "admin") {
		loginScreen.style.visibility = "hidden";
		profileScreen.style.visibility = "visible";
	}
	else {
		alert("Try Again!");
	}
};

// Handle logout when clicking on the logout button
 function logout () {
	profileScreen.style.visibility = "hidden";
	calculatorScreen.style.visibility = "hidden";
	loginScreen.style.visibility = "visible";
	alert("You logged out successfully!");
};

function imageMouseover() {
	document.getElementById("image").src = "2.jpg";
}

function imageMouseout() {
	document.getElementById("image").src = "1.jpg";
}

function profile () {
	calculatorScreen.style.visibility = "hidden";
	profileScreen.style.visibility = "visible";
}

// Handle calculator when clicking on the calculator button
function calculatorClick () {
	profileScreen.style.visibility = "hidden";
	calculatorScreen.style.visibility = "visible";
};

function Calc() {
	var that = this;
	
	this.num1 = document.createElement("input");
	this.num1.type = "number";
	this.num1.value = 0;
	
	this.operator = document.createElement("select");
	var operators = ["+", "-", "*", "/"];
	var op;
	for (var i = 0; i < operators.length; i++) {
		op = document.createElement("option");
		op.value = operators[i];
		op.text = operators[i];
		this.operator.appendChild(op);
	}
	
	this.num2 = document.createElement("input");
	this.num2.type = "number";
	this.num2.value = 0;
	
	this.equals = document.createElement("input");
	this.equals.type = "button";
	this.equals.value = "=";
	this.equals.style.width = "30px";
	this.equals.style.marginRight = "20px";
	
	this.result = document.createElement("input");
	this.result.setAttribute("readonly", "readonly");
	
	this.br = document.createElement("br");
	
	this.calculate = function () {
		var chosenOp = that.operator.options[that.operator.selectedIndex].value;
		var first = Number(that.num1.value);
		var second = Number(that.num2.value);
		
		switch (chosenOp) {
			case "+":
				that.result.value = first + second;
				break;
			case "-":
				that.result.value = first - second;
				break;			
			case "*":
				that.result.value = first * second;
				break;			
			case "/":
				that.result.value = first / second;
				break;			
		}
	}
	
	this.equals.addEventListener("click", this.calculate);
	
	calculatorScreen.appendChild(this.num1);
	calculatorScreen.appendChild(this.operator);
	calculatorScreen.appendChild(this.num2);
	calculatorScreen.appendChild(this.equals);
	calculatorScreen.appendChild(this.result);
	calculatorScreen.appendChild(this.br);
}

function newCalc() {
	calcs.push(new Calc());
}

// -----------------------------------------------------------------------------------
// Screens
// -----------------------------------------------------------------------------------
loginScreen.setAttribute('id', 'login');
loginScreen.setAttribute('align', 'center');
document.body.appendChild(loginScreen);

profileScreen.setAttribute('id', 'profile');
profileScreen.style.visibility = "hidden";
profileScreen.setAttribute('align', 'center');
document.body.appendChild(profileScreen);

calculatorScreen.setAttribute('id', 'calculator');
calculatorScreen.style.visibility = "hidden";
calculatorScreen.setAttribute('align', 'center');
document.body.appendChild(calculatorScreen);

// -----------------------------------------------------------------------------------
// First Screen: Login
// -----------------------------------------------------------------------------------

// Instructions
loginScreen.innerHTML = "<p>Please Enter username and password to login:</p>";

// Username and Password
loginScreen.innerHTML += "<label for='username'>Username:</label> <input type='text' id='username' name='username' /><br /><br />";
loginScreen.innerHTML += "<label for='password'>Password:</label> <input type='password' id='password' name='password' /><br /><br />";

// Login button
loginScreen.innerHTML += "<input type='button' id='loginButton' value='Login' />";
document.getElementById("loginButton").addEventListener("click", checkInput);

// -----------------------------------------------------------------------------------
// Second Screen: Profile
// -----------------------------------------------------------------------------------

// Create content of profile
profileScreen.innerHTML = "<h1>Idan Refaeli</h1>";
profileScreen.innerHTML += "<p>My name is Idan Refaeli, I'm 24 years old and I'm studying computer science in The Hebrew University of Jerusalem</p>";
profileScreen.innerHTML += "<p>My hobbies are watching movies on cinema, listening music, playing video games and of course programming.</p>";
profileScreen.innerHTML += "<p>\"Programming is like sex. One mistake and you have to support it for the rest of your life.\"</p>";
profileScreen.innerHTML += "<img id='image' src='1.jpg' style='width: 200px; height: 200px;' onmouseover='imageMouseover()' onmouseout='imageMouseout()' /><br /><br />";

// Create 2 buttons
profileScreen.innerHTML += "<input type='button' id='logoutButton' value='Logout' />&nbsp;&nbsp;";
profileScreen.innerHTML += "<input type='button' id='calculatorButton' value='Calculator' />";

document.getElementById("logoutButton").addEventListener('click', logout);
document.getElementById("calculatorButton").addEventListener('click', calculatorClick);

// -----------------------------------------------------------------------------------
// Third Screen: Calculator
// -----------------------------------------------------------------------------------

// Create buttons
calculatorScreen.innerHTML += "<input type='button' id='logoutButtonCalc' value='Logout' />&nbsp;&nbsp;";
calculatorScreen.innerHTML += "<input type='button' id='profileButtonCalc' value='Profile' />&nbsp;&nbsp;";
calculatorScreen.innerHTML += "<input type='button' id='newCalc' value='New Calculator' /><br /><br />";

document.getElementById("logoutButtonCalc").addEventListener('click', logout);
document.getElementById("profileButtonCalc").addEventListener('click', profile);
document.getElementById("newCalc").addEventListener('click', newCalc);