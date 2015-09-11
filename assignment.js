
function calculateAge(x) {
	var cy = new Date().getFullYear(); // Date() function is used to know the current year
	var par = document.getElementById("demo");
	par.innerHTML="AGE IS "+ (cy-x) + " or "+ (cy-x-1);
	};
	
function calculateSupply(age,perDay) {
	var maxAge = 100;
	//setting the maximum age as 100
	document.getElementById("lts").innerHTML= "You will need "+Math.round((maxAge-age)*365*perDay) +" to last you until the ripe old age of "+maxAge;
	//math.round function is used to round the floating numbers to nearest value
	};
	
function calculateArea(r) {
	var pi=22/7;
	document.getElementById("area").innerHTML= "The Area is "+(pi*r*r);
	};
function calculateCircumference(r) {
	var pi=22/7;
	document.getElementById("area").innerHTML= "The Circumference is "+(2*pi*r);
	};
	
function celsiusToFahrenheit(val) {
	
	document.getElementById("result").innerHTML= "The Farhenheit value is "+((val*9/5)+32);
	};
function fahrenheitToCelsius(val) {
	document.getElementById("result").innerHTML= "The Celcius value is "+((val-32)*5/9);
	};