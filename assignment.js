
function calculateAge(x) {
	var cy = new Date().getFullYear(); // Date() is used to know the current year
	var par = document.getElementById("demo");
	par.innerHTML="AGE IS "+ (cy-x) + " or "+ (cy-x-1);
	//The Element.innerHTML property sets or gets the HTML syntax describing the element's descendants
	};
	
function calculateSupply(age,perDay) {
	var maxAge = 100; // Assuming Maximum age for the person as 100 
	//setting the maximum age as 100
	document.getElementById("lts").innerHTML= "You will need "+Math.round((maxAge-age)*365*perDay) +" to last you until the ripe old age of "+maxAge;
	//The Element.innerHTML property sets or gets the HTML syntax describing the element's descendants
	//math.round function is used to round the floating numbers to nearest value
	};
	
function calculateArea(r) {
	var pi=22/7; // Assuming pi value as 22/7
	document.getElementById("area").innerHTML= "The Area is "+(pi*r*r);
	//The Element.innerHTML property sets or gets the HTML syntax describing the element's descendants
	};
function calculateCircumference(r) {
	var pi=22/7; //Assuming pi value as 22/7
	document.getElementById("area").innerHTML= "The Circumference is "+(2*pi*r);
	//The Element.innerHTML property sets or gets the HTML syntax describing the element's descendants
	};
	
function celsiusToFahrenheit(val) {
	
	document.getElementById("result").innerHTML= "The Farhenheit value is "+((val*9/5)+32);
	//The Element.innerHTML property sets or gets the HTML syntax describing the element's descendants
	};
function fahrenheitToCelsius(val) {
	document.getElementById("result").innerHTML= "The Celcius value is "+((val-32)*5/9);
	//The Element.innerHTML property sets or gets the HTML syntax describing the element's descendants
	};