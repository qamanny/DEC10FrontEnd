'use strict';

// Exercise 1
let a = 100;
while (a <= 200) {
  a++;
  console.log(`a = ${a}`);
}

// Exercise 2
let a = 100;
while (a <= 200) {
  if (a % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  a++;
}

//Exercise 3
for (i = 0; i < 10; i++) {
    for (j = 1; j < 10; j++) {
        console.log(j);
    }
}

//Exercise 5
let day = now.getDay();
switch(day) {
    case 0: 
    console.log("It's Sunday");
    break;
    case 6:
    console.log("It's Saturday");
    break;
    case 1:
    console.log("It's Monday");
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's a weekday");
        break;
    default:
        console.log("Excuse me");
        break;
    
}