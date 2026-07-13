// Working with more logical questions

//reverse
let number = 3456;
while (number > 0) {
  let digit = number % 10;

  console.log(digit);
  number = Math.floor(number / 10);
}

// function checkVotingEligibility(age) {
//   if (age >= 18) {
//     console.log("Eligible");
//   } else {
//     console.log("Not Eligible");
//   }
// }

// const checkVotingEligibility = (age) =>
//   age >= 18 ? "Eligible" : "Not Eligible";

// checkVotingEligibility(15);
// checkVotingEligibility(18);
// checkVotingEligibility(25);

//Topic: Nested For Loop

//Number Pattern
// 98765
// 87654
// 76543
// 65432
// 54321
// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 10; j >= 6; j--) {
//     pattern += j - i;
//   }
//   console.log(pattern);
// }

// 12345
// 23456
// 34567
// 45678
// 56789
// for (let i = 0; i <= 4; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5; j++) {
//     pattern += j + i;
//   }
//   console.log(pattern);
// }

// 12345
// 12345
// 12345
// 12345
// 12345
// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5; j++) {
//     pattern += j;
//   }
//   console.log(pattern);
// }

// Star Patterns
//review:
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     pattern += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// for (let i2 = 4; i2 >= 1; i2--) {
//   let pattern2 = "";

//   for (let j2 = 1; j2 <= 5 - i2; j2++) {
//     pattern2 += " ";
//   }

//   for (let k2 = 1; k2 <= 2 * i2 - 1; k2++) {
//     pattern2 += "*";
//   }

//   console.log(pattern2);
// }

//     *
//    * *
//   *   *
//  *     *
// *********

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     pattern += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k === 1 || k === 2 * i - 1 || i === 1 || i === 5) {
//       pattern += "*";
//     } else {
//       pattern += " ";
//     }
//   }
//   console.log(pattern);
// }

//REVIEW:
//     *
//    ***
//   *****
//  *******
// *********

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     pattern += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// *****
// *   *
// *   *
// *****
// for (let i = 1; i <= 4; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5; j++) {
//     if (i === 1 || i === 4 || j === 1 || j === 5) {
//       pattern += "*";
//     } else {
//       pattern += " ";
//     }
//   }
//   console.log(pattern);
// }

// *****
// ****
// ***
// **
// *

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 5; j >= i; j--) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 5; j >= i; j--) {
//     pattern += "*";
//   }
//   //   if (pattern.length % 2 === 0) {
//   //     console.log(pattern);
//   //   }
//   //   if (pattern.length % 2 !== 0) {
//   //     console.log(pattern);
//   //   }
// }

// *
// **
// ***
// ****
// *****
// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

//using function
// function printingPattern(height, symbol) {
//   for (let row = 1; row <= height; row++) {
//     let pattern = "";
//     for (let col = 1; col <= row; col++) {
//       pattern += symbol;
//     }
//     console.log(pattern);
//   }
// }
// printingPattern(20, "#");

//Function for pattern printing - row, column, symbol
// const patternPrinting = (row, column, symbol) => {
//   for (let i = 1; i <= row; i++) {
//     let pattern = "";
//     for (let j = 1; j <= column; j++) {
//       pattern += symbol;
//     }
//     console.log(`${pattern}`);
//   }
// };

// patternPrinting(2, 5, "*");

// Print a rectangle using # instead of *.
// for (let i = 1; i <= 2; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5; j++) {
//     pattern += "#";
//   }
//   console.log(pattern);
// }

// Print a rectangle using @.
// for (let i = 1; i <= 3; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 7; j++) {
//     pattern += "@";
//   }
//   console.log(pattern);
// }

// Print a rectangle of numbers:
// 11111
// 11111
// 11111
// for (let i = 1; i <= 3; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5; j++) {
//     pattern += "1";
//   }
//   console.log(pattern);
// }

// AAAA
// AAAA
// AAAA
// for (let i = 1; i <= 3; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5; j++) {
//     pattern += "A";
//   }
//   console.log(pattern);
// }

// $$$$$
// $$$$$
// $$$$$
// for (let i = 1; i <= 3; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5; j++) {
//     pattern += "$";
//   }
//   console.log(pattern);
// }

// *****
// *****
// *****
// for (let i = 1; i <= 3; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// *****
// *****
// *****
// *****
// for (let i = 1; i <= 4; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// Print a rectangle of 2 × 5 stars.
// for (let i = 1; i <= 2; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// Print a square of 6 × 6 stars.
// for (let i = 1; i <= 6; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 6; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// Print a rectangle of 4 × 8 stars.
// for (let i = 1; i <= 4; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 8; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// Print a square of 10 × 10 stars.
// for (let i = 1; i <= 10; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 10; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// Take rows and columns as variables instead of hardcoding them.
// let row = 3;
// let column = 7;
// for (let i = 1; i <= row; i++) {
//   let pattern = "";
//   for (let j = 1; j <= column; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }

// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(i, j);
//   }
// }

// for (let i = 1; i <= 3; i++) {
//   console.log(i);

//   for (let j = 1; j <= 3; j++) {
//     console.log(j);
//   }
// }

// let counter = 0;
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(i, j);
//     counter++;
//   }
// }
// console.log(counter);

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(i, j);
//   }
// }

// Print seat numbers in a cinema:
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`Row: ${i} - Seat: ${j}`);
//   }
// }

//Topic: For Loop
// Print two counters simultaneously: One from 1 to 10, One from 10 to 1
// for (let i = 1, j = 10; i <= 10, j >= 1; i++, j--) {
//   console.log(i, j);
// }

// Print two multiplication tables together using two variables.
// let tableOf5 = 5;
// let tableOf6 = 6;
// for (let i = 1; i <= 10; i++) {
//   console.log(
//     `${tableOf5} x ${i} = ${tableOf5 * i}`,
//     `${tableOf6} x ${i} = ${tableOf6 * i}`,
//   );
// }

// Build a countdown timer from 60 to 0.
// for (let i = 60; i >= 0; i--) {
//   console.log(i + " seconds left...");
// }

// Create a loop that increments by 1 until 10, then by 5.
// for (let i = 0; i <= 100; ) {
//   if (i <= 9) {
//     console.log(++i);
//   }
//   if (i > 9) {
//     console.log((i += 5));
//   }
//   if (i == 100) {
//     break;
//   }
// }

// Use two variables to print: 1 100, 2 99, 3 98
// for (let i = 1, j = 100; i <= 100, j >= 1; i++, j--) {
//   console.log(i, j);
// }

// for (let i = 10; i >= 2; i -= 3) {
//   console.log(i);
// }

// for (let i = 1; i <= 5; i += 2) {
//   console.log(i);
// }

// for (let i = 2; i <= 20; i *= 2) {
//   console.log(i);
// }

// for (let i = 100; i > 1; i /= 2) {
//   console.log(i);
// }

// for (let i = 1; i < 50; i *= 3) {
//   console.log(i);
// }

// Print multiples of 5 up to 100 using i += 5.
// for (let i = 0; i <= 100; i += 5) {
//   console.log(i);
// }

// Print powers of 2 up to 128 using i *= 2
// for (let i = 1; i <= 128; i *= 2) {
//   console.log(i);
// }

// Print numbers from 1000 to 1, dividing by 10 each iteration (use integer values only).
// for (let i = 1000; i >= 1; i /= 10) {
//   console.log(i);
// }

// Print numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Print numbers from 10 to 1.
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// Print even numbers from 1 to 20.
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// Print odd numbers from 1 to 20.
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Print your name 10 times.
// for (let i = 1; i <= 10; i++) {
//   console.log("Deepak");
// }

// Print the multiplication table of 5.
// let tableOf = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${tableOf} x ${i} = ${tableOf * i}`);
// }

// Print all numbers divisible by 3 from 1 to 30.
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// Print the square of numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//   console.log(i * i);
// }

// Print the cube of numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//   console.log(i ** 3);
// }

// Print numbers from 100 to 1.
// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }

// Ternary Operator
// Easy
// Print "Even" or "Odd".
// let num = 10;
// console.log(num % 2 === 0 ? "Even Number" : "Odd Number");

// Print "Adult" or "Minor".
// let age = 17;
// console.log(age >= 18 ? "Adult" : "Minor");

// Print "Positive" or "Negative".
// let num = -7;
// console.log(num > 0 ? "Positive" : "Negative");

// Print "Pass" or "Fail".
// let marks = 78;
// console.log(marks >= 35 ? "Pass" : "Fail");

// Print "Eligible" or "Not Eligible" for voting.
// console.log(age >= 18 ? "Eligible for voting" : "Not Eligible for voting");

// Medium
// Find the larger of two numbers.
// let num1 = 10;
// let num2 = 5;
// console.log(num1 > num2 ? num1 + " is Greater" : num2 + " is Greater");

// Check if a number is divisible by 5.
// let num = 40;
// console.log(num % 5 === 0 ? "Divisible by 5" : "Not Divisible by 5");

// Print "Free Shipping" or "Paid Shipping".
// const cartValue = 399;
// console.log(cartValue >= 500 ? "Free Shipping" : "Paid Shipping");

// Display "In Stock" or "Out of Stock".
// const stock = 10;
// console.log(stock > 0 ? "In Stock" : "Out Of Stock");

// Show "Morning" or "Evening" greeting based on the hour.
// const currentTime = new Date().getHours();
// console.log(currentTime > 17 ? "Evening" : "Morning");

//Nested If
//pending questions
// Check if a user is logged in, then display their profile.
// Check if a product is in stock, then check if it has a discount.
// College admission:Age check,Marks check,Document verification
// Online shopping:Login,Cart not empty,Payment successful
// Flight boarding:Passport,Visa,Security clearance
// Gym membership:Age,Medical certificate,Membership payment

// Easy
// Check if a person is eligible to vote, then check if they have a voter ID.
// const voterId = (age, isVoterId) => {
//   if (age >= 18) {
//     if (isVoterId) {
//       console.log("You are Eligible");
//     }
//   }
// };
// voterId(18, true);
// voterId(23, false);

// Check if a student passed, then check if they scored above 75 for distinction.
// const studentPassed = (marks) => {
//   if (marks > 35) {
//     if (marks > 75) {
//       console.log("Passed with distinction");
//     }
//   }
// };

// studentPassed(45);
// studentPassed(85);

// Check if a number is positive, then check if it's even.
// const positiveEvenNumber = (number) => {
//   if (number > 0) {
//     if (number % 2 === 0) {
//       console.log("It's a Positive Even Number");
//     }
//   }
// };

// positiveEvenNumber(23);
// positiveEvenNumber(20);
// positiveEvenNumber(-2);

// Medium
// ATM simulation: Verify PIN,Check balance,Withdraw amount
// const atmSimulation = (pin, balance, withdraw) => {
//   if (pin == 1234) {
//     console.log("Profile: User");
//     if (balance) {
//       console.log(`you have ${balance}$`);
//       if (balance > withdraw) {
//         console.log(
//           `you have withdrawn money ${withdraw} and left with ${balance - withdraw}`,
//         );
//       }
//     }
//   }
// };

// atmSimulation(1234, 20000, 3500);
// atmSimulation(1111, 30000, 20000);
// atmSimulation(1234, 20000, 35000);

// Switch Loops
// Print the day of the week based on a number (1–7).
// const weekDays = (num) => {
//   switch (num) {
//     case 1:
//       console.log("Sunday");
//       break;
//     case 2:
//       console.log("Monday");
//       break;
//     case 3:
//       console.log("Tuesday");
//       break;
//     case 4:
//       console.log("Wednesday");
//       break;
//     case 5:
//       console.log("Thursday");
//       break;
//     case 6:
//       console.log("Friday");
//       break;
//     case 7:
//       console.log("Saturday");
//       break;

//     default:
//       console.log("Please enter number from 1 to 7");
//       break;
//   }
// };
// weekDays(3);
// weekDays(1);
// weekDays(6);
// weekDays(5);
// weekDays(2);
// weekDays(4);
// weekDays(7);

// Print the month name based on a month number.

// const monthNames = (month) => {
//   switch (month) {
//     case 1:
//       console.log("January");
//       break;
//     case 2:
//       console.log("February");
//       break;
//     case 3:
//       console.log("March");
//       break;
//     case 4:
//       console.log("April");
//       break;
//     case 5:
//       console.log("May");
//       break;

//     case 6:
//       console.log("June");
//       break;
//     case 7:
//       console.log("July");
//       break;
//     case 8:
//       console.log("August");
//       break;
//     case 9:
//       console.log("September");
//       break;
//     case 10:
//       console.log("October");
//       break;
//     case 11:
//       console.log("November");
//       break;
//     case 12:
//       console.log("December");
//       break;
//     default:
//       console.log("Please enter number from 1 to 12");
//   }
// };
// monthNames(5);
// monthNames(1);
// monthNames(12);
// monthNames(13);

// Create a calculator using +, -, *, /.
// const switchCalculator = (num1, num2, operator) => {
//   switch (operator) {
//     case "+":
//       console.log(`${num1} + ${num2} = ${num1 + num2}`);
//       break;
//     case "-":
//       console.log(`${num1} - ${num2} = ${num1 - num2}`);
//       break;
//     case "*":
//       console.log(`${num1} * ${num2} = ${num1 * num2}`);
//       break;
//     case "/":
//       console.log(`${num1} / ${num2} = ${num1 / num2}`);
//       break;
//     default:
//       console.error("Please select opreator between + - * / only");
//   }
// };

// switchCalculator(10, 5, "+");
// switchCalculator(10, 45, "-");
// switchCalculator(100, 23, "*");
// switchCalculator(240, 12, "/");

// Print a traffic signal action: Red → Stop, Yellow → Slow, Green → Go
// function signal(lightColor) {
//   switch (lightColor) {
//     case "RED":
//       console.log("STOP");
//       break;
//     case "YELLOW":
//       console.log("SLOW");
//       break;
//     case "GREEN":
//       console.log("GO");
//       break;
//     default:
//       console.log("Please select from RED, YELLOW OR GREEN");
//   }
// }
// signal("ASD");
// signal("YELLOW");
// signal("RED");
// signal("GREEN");

//Restaurant menu (Pizza, Burger, Pasta, Sandwich).
// const restaurantMenu = (order) => {
//   console.log("Select Order from Pizza, Burger, Pasta, Sandwich ");
//   switch (order) {
//     case "Pizza":
//       console.log(`${order}: $5.99`);
//       break;
//     case "Burger":
//       console.log(`${order}: $3.99`);
//       break;
//     case "Pasta":
//       console.log(`${order}: $4.49`);
//       break;
//     case "Sandwich":
//       console.log(`${order}: $2.20`);
//       break;

//     default:
//       console.log("Not Available");
//       break;
//   }
// };

// restaurantMenu("Pizza");
// restaurantMenu("Pasta");
// restaurantMenu("Pani Puri");

// User role system (Admin, Editor, User, Guest).
// const userRole = (role) => {
//   switch (role) {
//     case "Admin":
//       console.log("Full Access");
//       break;
//     case "Editor":
//       console.log("Create, Read, Update");
//       break;
//     case "User":
//       console.log("Read Only");
//       break;
//     case "Guest":
//       console.log("Limited Access");
//       break;

//     default:
//       console.log("User Role Not Recognized");
//       break;
//   }
// };
// userRole("User");
// userRole("Guest");
// userRole("New User");

// Language selector (English, Hindi, Spanish, Japanese).
// Payment method (UPI, Card, Cash, Net Banking).
// Movie genre recommendation based on genre.

//The IF, The ESLE IF and The ELSE

// Topic: Level 3 – Intermediate
// Find the second largest among three numbers.
// const secondLargestNumber = (num1, num2, num3) => {
//   if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
//     console.log(`${num1} is second largest`);
//   } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
//     console.log(`${num2}  is second largest`);
//   } else if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)) {
//     console.log(`${num2}  is second largest`);
//   } else {
//     console.error("Error");
//   }
// };

// secondLargestNumber(1, 2, 3);
// secondLargestNumber(10, 20, 30);
// secondLargestNumber(30, 60, 90);
// secondLargestNumber(-1, 10, 20);
// secondLargestNumber(-10, -90, -100);

// Check whether three sides can form a triangle.

// const canFormATriangle = (s1, s2, s3) => {
//   if (s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1) {
//     console.log("Triangle can be formed");
//   } else {
//     console.log("Triangle can not be formed");
//   }
// };

// canFormATriangle(2, 3, 4);
// canFormATriangle(3, 2, 10);

//forming triangle using degrees
// const canFormATriangle = (n1, n2, n3) => {
//   if (n1 + n2 + n3 === 180) {
//     console.log("Triangle can be formed");
//   } else {
//     console.log("Triangle can not form");
//   }
// };
// canFormATriangle(60, 60, 60);
// canFormATriangle(20, 80, 80);
// canFormATriangle(90, 90, 90);
// canFormATriangle(10, 20, 30);

// Classify a triangle:Equilateral, Isosceles, Scalene
// const triangleType = (d1, d2, d3) => {
//   if (d1 == 60 && d2 == 60 && d3 == 60) {
//     console.log("Equilateral Triangle");
//   } else if (d1 == d2 || d1 == d3 || d2 == d3) {
//     console.log("Isosceles Triangle");
//   } else if (d1 == 90 || d2 == 90 || d3 == 90) {
//     console.log("Scalene Triangle");
//   } else {
//     console.error("Error");
//   }
// };

// triangleType(60, 60, 60);
// triangleType(30, 60, 90);
// triangleType(80, 80, 20);

// Calculate electricity bill using slabs.
// const electricityBill = (billSlab) => {
//   if (billSlab >= 0 && billSlab <= 100) {
//     console.log(`Bill Amount for ${billSlab} will be ${billSlab * 5}`);
//   } else if (billSlab >= 101 && billSlab <= 200) {
//     console.log(`Bill Amount for ${billSlab} will be ${billSlab * 10}`);
//   } else if (billSlab > 200) {
//     console.log(`Bill Amount for ${billSlab} will be ${billSlab * 15}`);
//   } else {
//     console.error("Something Went Wrong");
//   }
// };

// electricityBill(10);
// electricityBill(110);
// electricityBill(300);
// electricityBill("ten");

// Calculate income tax using slabs.
// const incomeTax = (income) => {
//   if (income <= 250000) {
//     console.log(`For ${income} No tax`);
//   } else if (income > 250001 && income <= 500000) {
//     console.log(`For ${income} Tax: ${(income * 5) / 100}`);
//   } else if (income > 500001 && income <= 1000000) {
//     console.log(`For ${income} Tax: ${(income * 20) / 100}`);
//   } else if (income > 1000000) {
//     console.log(`For ${income} Tax: ${(income * 30) / 100}`);
//   } else {
//     console.error("Something went wrong");
//   }
// };

// incomeTax(350000);
// incomeTax(0);
// incomeTax(200000000);
// incomeTax(125000);
// incomeTax("None");
// incomeTax(750000);

// Check if a person can apply for a loan: Age, Salary, Credit Score
// function loanApproval(age, salary, creditScore) {
//   if (age >= 18 && salary >= 30000 && creditScore >= 700) {
//     console.log("Loan Approved");
//   } else {
//     console.log("Sorry, you are not eligible for loan");
//   }
// }

// loanApproval(18, 30000, 700);
// loanApproval(17, 70000, 1000);
// loanApproval(28, 0, 0);
// loanApproval(32, 29999, 800);
// loanApproval(50, 60000, 900);

// Validate a password:Minimum length, Contains number,Contains uppercase
// const passwordValidation = (password) => {
//   let characters = password.split("");
//   let containsNumber = characters.some((char) => char >= "0" && char <= "9");
//   let containsUppercase = characters.some((char) => char >= "A" && char <= "Z");
//   if (password.length > 8 && containsNumber && containsUppercase) {
//     console.log("Password Approved");
//   } else {
//     console.log("Weak Password, Please change");
//   }
// };

// passwordValidation("saAda12A3sdasd");
// passwordValidation("sa");
// passwordValidation("Hello1234");
// passwordValidation("hello1234");
// passwordValidation("hellooooooo");
// passwordValidation("hello");

// Note: for later
// Check if a user gets free shipping based on membership and cart value.
// Determine a student's scholarship based on marks and attendance.
// Create a movie ticket booking rule based on age and show time.

//Topic: Level 2 – Beginner+ (Using else if)
// Build a grading system (A, B, C, D, F).
// const gradingSystem = (marks) => {
//   if (marks <= 100 && marks >= 90) {
//     console.log("A grade");
//   } else if (marks <= 89 && marks >= 75) {
//     console.log("B grade");
//   } else if (marks <= 74 && marks >= 60) {
//     console.log("C grade");
//   } else if (marks <= 59 && marks >= 35) {
//     console.log("D grade");
//   } else {
//     console.log("F grade");
//   }
// };

// gradingSystem(100);
// gradingSystem(90);
// gradingSystem(89);
// gradingSystem(34);
// gradingSystem(76);
// gradingSystem(45);
// gradingSystem(62);

// Find the largest of three numbers.
// const largestOf3Numbers = (num1, num2, num3) => {
//   if (num1 > num2 && num1 > num3) {
//     console.log(`${num1} is greater than ${num2} and ${num3}`);
//   } else if (num2 > num1 && num2 > num3) {
//     console.log(`${num2} is greater than ${num1} and ${num3}`);
//   } else {
//     console.log(`${num3} is greater than ${num1} and ${num2}`);
//   }
// };

// largestOf3Numbers(1, 2, 3);
// largestOf3Numbers(30, 22, 11);
// largestOf3Numbers(-34, -88, -123);

// Check if a number is positive, negative, or zero.
// const isNumber = (number) => {
//   if (number > 0) {
//     console.log("Positive");
//   } else if (number < 0) {
//     console.log("Negative");
//   } else {
//     console.log("Zero");
//   }
// };

// isNumber(-66);
// isNumber(98);
// isNumber(0);

// Create a simple calculator using two numbers and an operator (+, -, *, /).
// const simpleCalculator = (operator) => {
//   let num1 = 10;
//   let num2 = 5;
//   if (operator === "Add") {
//     console.log(num1 + num2);
//   } else if (operator === "Sub") {
//     console.log(num1 - num2);
//   } else if (operator === "Mul") {
//     console.log(num1 * num2);
//   } else if (operator === "Div") {
//     console.log(num1 / num2);
//   } else {
//     console.log("Please enter a valid operator name");
//   }
// };

// simpleCalculator("Add");
// simpleCalculator("Sub");
// simpleCalculator("Mul");
// simpleCalculator("Div");
// simpleCalculator("Mod");

// Determine the season based on the month number.
// const season = (month) => {
//   if (
//     month === "January" ||
//     month === "October" ||
//     month === "November" ||
//     month === "December"
//   ) {
//     console.log("Winter");
//   } else if (
//     month === "February" ||
//     month === "March" ||
//     month === "April" ||
//     month === "May"
//   ) {
//     console.log("Summer");
//   } else if (
//     month === "June" ||
//     month === "July" ||
//     month === "August" ||
//     month === "September"
//   ) {
//     console.log("Rainy");
//   } else {
//     console.log("Please Enter a Valid Month Name");
//   }
// };
// season("May");
// season("October");
// season("June");
// season("Monday");

// Print the day type (Weekday or Weekend) from the day name.
// const dayType = (day) => {
//   if (
//     day === "Monday" ||
//     day === "Tuesday" ||
//     day === "Wednesday" ||
//     day === "Thursday" ||
//     day === "Friday"
//   ) {
//     console.log("It's a Week Day");
//   } else if (day === "Sunday" || day === "Saturday") {
//     console.log("It's a Weekend");
//   } else {
//     console.log("Please enter a valid Day");
//   }
// };

// dayType("Monday");
// dayType("Sunday");
// dayType("Wednesday");
// dayType("April");

// Check BMI category (Underweight, Normal, Overweight, Obese).
// const bmiCalculator = (bmi) => {
//   if (bmi >= 30) {
//     console.log("Obese");
//   } else if (bmi <= 29.9 && bmi >= 25) {
//     console.log("OverWeight");
//   } else if (bmi <= 24.9 && bmi >= 18.5) {
//     console.log("Normal");
//   } else if (bmi <= 18.4) {
//     console.log("UnderWeight");
//   } else {
//     console.log("Please Enter a Valid Number");
//   }
// };

// bmiCalculator(50);
// bmiCalculator(12);
// bmiCalculator(19);
// bmiCalculator(28);
// bmiCalculator("asd");

// Check ticket price based on age: Child, Adult, Senior Citizen
// function ticketPrices(age) {
//   if (age >= 60) {
//     console.log("for Senior Citizen  Ticket Price: 25");
//   } else if (age <= 59 && age >= 15) {
//     console.log("for Adult  Ticket Price: 40");
//   } else if (age <= 14) {
//     console.log("for Child  Ticket Price: 20");
//   } else {
//     console.log("Please enter a valid age");
//   }
// }
// ticketPrices(60);
// ticketPrices(9);
// ticketPrices("Thirty");
// ticketPrices(33);

// Assign shipping charges based on order amount.
// const shippingCharges = (cartAmount) => {
//   if (cartAmount >= 500) {
//     console.log("Free Shipping");
//   } else if (cartAmount < 500) {
//     console.log("Shipping Charges: Rs.100");
//   } else {
//     console.error("Error");
//   }
// };

// shippingCharges(501);
// shippingCharges(250);
// shippingCharges("Four");

// Check internet speed: Slow, Medium, Fast
// const internetSpeed = (speed) => {
//   if (speed > 100) {
//     console.log("Internet Speed: Fast");
//   } else if (speed <= 99 && speed >= 40) {
//     console.log("Internet Speed: Medium");
//   } else if (speed <= 39 && speed >= 1) {
//     console.log("Internet Speed: Slow");
//   } else {
//     console.log("Please enter valid speed number");
//   }
// };
// internetSpeed(102);
// internetSpeed(60);
// internetSpeed(20);
// internetSpeed(-100);

//Topic: Level 1 – Beginner (Easy)
// Check if a number is positive or negative.
// const numberIs = (number) => {
//   if (number > 0) {
//     console.log(`${number} is a Positive Number`);
//   } else if (number < 0) {
//     console.log(`${number} is a Negative Number`);
//   } else {
//     console.log(`${number} is Zero`);
//   }
// };

// numberIs(7);
// numberIs(-4);
// numberIs(0);

// Check if a number is even or odd.
// const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     console.log(`${number} is a Even Number`);
//   } else {
//     console.log(`${number} is a Odd Number`);
//   }
// };

// evenOrOdd(67);
// evenOrOdd(-231);

// Check if a person is eligible to vote (18+).
// const votingEligibility = (age) => {
//   if (age >= 18) {
//     console.log(`You are Eligible to vote`);
//   } else {
//     console.log(`You are Not Eligible to vote`);
//   }
// };
// votingEligibility(32);
// votingEligibility(15);
// votingEligibility(18);

// Check whether a number is divisible by 5.
// const numberDivisibleBy5 = (number) => {
//   if (number % 5 === 0) {
//     console.log(`${number} is Divisible by 5`);
//   } else {
//     console.log(`${number} is Not Divisible by 5`);
//   }
// };

// numberDivisibleBy5(50);
// numberDivisibleBy5(43);

// Find the larger of two numbers.
// function largerNumber(num1, num2) {
//   if (num1 > num2) {
//     console.log(`${num1} is Greater than ${num2}`);
//   } else {
//     console.log(`${num2} is Greater than ${num1}`);
//     console.log(`${num1} is Smaller than ${num2}`);
//   }
// }

// largerNumber(50, 32);
// largerNumber(12, 40);
// largerNumber(-122, -81);
// largerNumber(66, -12);

// Check whether a person passed (marks >= 35).
// const isPassed = (marks) => {
//   if (marks >= 35) {
//     console.log("Passed");
//   } else {
//     console.log("Failed");
//   }
// };

// isPassed(35);
// isPassed(99);
// isPassed(34);
// isPassed(34.9);

// Check if a character is a vowel (a, e, i, o, u).
// const isVowel = (letter) => {
//   if (
//     letter == "a" ||
//     letter == "e" ||
//     letter == "i" ||
//     letter == "o" ||
//     letter == "u"
//   ) {
//     console.log(`${letter} is a vowel`);
//   } else {
//     console.log(`${letter} is not a vowel`);
//   }
// };

// isVowel("a");
// isVowel("g");

// Check if a year is before or after 2000.
// const yearIsBefore2000 = (year) => {
//   if (year > 2000) {
//     console.log(`${year} is after 2000`);
//   } else {
//     console.log(`${year} is before 2000`);
//   }
// };
// yearIsBefore2000(1998);
// yearIsBefore2000(2012);

// Check whether a number is a multiple of 10.
// const multipleOfTen = (number) => {
//   if (number % 10 === 0) {
//     console.log(`${number} is a multiple of 10`);
//   } else {
//     console.log(`${number} is not a multiple of 10`);
//   }
// };
// multipleOfTen(99);
// multipleOfTen(100);
// multipleOfTen(-110);

// Print "Adult" or "Minor" based on age.

// const adultOrNot = (age) => {
//   if (age >= 18) {
//     console.log("Adult");
//   } else {
//     console.log("Minor");
//   }
// };

// adultOrNot(18);
// adultOrNot(17);
// adultOrNot(55);
