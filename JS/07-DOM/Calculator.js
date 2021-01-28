'use strict'; 
const number1 = document.querySelector("#firstNumber"); //12
const number2 = document.querySelector("#secondNumber"); //15
const result = document.querySelector("#result"); 

// return the values entered by the user
const getValues = () => {
    return [Number.parseFloat(number1.value), Number.parseFloat(number2.value)];
}

// methods for each of the calc functions
const add = () => {
    const [num1, num2] = getValues(); 
    const newResult = num1 + num2; 
    result.value = newResult;
}