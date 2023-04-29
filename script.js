let firstValue = "";
let secondValue = "";
let operator = "";
// document.addEventListener("DOMContentLoaded", function(){
let clear = document.getElementById("btn-ac");
let equal = document.getElementById("btn-10");
let numbers = document.querySelectorAll(".number");
let secondScreen = document.querySelector(".previous");
let firstScreen = document.querySelector(".current");
let operators = document.querySelectorAll(".operator");
let screen = document.querySelector(".screen");


	numbers.forEach((number) => number.addEventListener("click", function(e){
		handleNum(e.target.textContent);
		if(firstValue.length > 10){
			firstScreen.style.fontSize = "25px"
		}
		firstScreen.textContent = firstValue; // allows you to press (target) any number button and it sends it to a function named handlednum. It then takes the user input numbers and stores them in a variable (currentValue)
	}));                                          //it then assigns that variable value (currentValue) into the currentScreen var allowing to be displayed on the calculator screen using text.content

	operators.forEach((op) => op.addEventListener('click', function(e){
		operateCalc(e.target.textContent)
		secondScreen.textContent = secondValue + "  " + operator;
		if(firstValue.length > 8 || secondValue > 8 ){
			secondScreen.style.fontSize =" 25px"
			firstScreen.style.fontSize = "25px"
		} 
		else if(currentValue >= 100000 || secondValue >= 100000){
			previousScreen.style.fontSize =" 15px"
			firstScreen.style.fontSize = "15px"
		}
		firstScreen.textContent = firstValue;
		console.log("op is " + operator)
		
		
	}));
	equal.addEventListener("click", function(){
		calculate()
		secondScreen.textContent = ""; // clears screen readying to print results
		console.log(secondValue)
		if (secondValue < 10000000){ //not sure why previousValue.length doesn work here
			firstScreen.style.fontSize = "65px"
			firstScreen.textContent = secondValue;
		}
		else{
			firstScreen.style.fontSize = "45px"
			firstScreen.textContent = secondValue;
		}
		
	})
	clear.addEventListener("click", function(){
		firstScreen.style.fontSize = "30px"
		secondScreen.style.fontSize = "30px"
		secondScreen.textContent = "";
		firstScreen.textContent = "";
		firstValue = "";
		secondValue = "";
		operator = "";
	})


//})domloaded

function operateCalc(op){
		operator = op;
		secondValue = firstValue;
		firstValue = " ";
	
	console.log(op)
}


function handleNum(num){
	console.log(firstValue.length);
	// if(currentValue < 1000000000000000000){
	// 	firstValue += num;
	// }
	if(firstValue.length < 20){
		firstValue += num;
	}


	
}

function calculate(){
	
	secondValue = Number(secondValue)
	firstValue = Number(firstValue)

	if(operator === "+"){
		secondValue += firstValue;
		console.log(firstValue + secondValue);	
	}
	else if(operator === "−"){
		secondValue -= firstValue;
	}
	else if(operator === "×"){
		secondValue *= firstValue;
	}
	else if(operator === "÷"){
		secondValue /= firstValue;
	}

}






	
