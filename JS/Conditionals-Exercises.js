'use strict';

//Exercise 1

console.log(strictA == strictB); // true
console.log(strictA === strictB); // false


//Exercise 2

console.log(strictA != strictB); // false
console.log(strictA !== strictB); // true

//Exercise 3

let age = 10;

if (age >= 18 && age <= 65) {
  console.log("Age is in range");
} else if (age < 18) {
  console.log("Underage");
} else {
  console.log("Catch all else");
}

//Exercise 4

let age = 100;
let result = age >= 50 ? "50 or over" : "Under 50";
console.log(result);