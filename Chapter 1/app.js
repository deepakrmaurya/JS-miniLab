//Logic Building

//Calculator
addEventListener("load", function () {
  let num1Value = document.getElementById("num1").value;
  let num2Value = document.getElementById("num2").value;

  let result = document.getElementById("labelBox");

  let addition = document.getElementById("add").value;
  let subtraction = document.getElementById("sub").value;
  let multiply = document.getElementById("mul").value;
  let division = document.getElementById("div").value;
  let modulus = document.getElementById("mod").value;
  let percentage = document.getElementById("percent").value;

  let operator = document.getElementById("buttons").value;
  console.log(operator);

  if (operator === "add") {
    let opreations = num1 + num2;
    console.log(num1 + " " + num2);
    result.textContent = opreations;
  }
});

//Age Calculator TODO: develop the advnace verison of it
// let currentYear = new Date().getFullYear();
// let userBirthYear = 1998;

// let age = currentYear - userBirthYear;
// console.log(age);

//Currency Converter TODO: develop a advance and multi currency converter
// document.getElementById("convertBtn").addEventListener("click", function () {
//   let amount = document.getElementById("textboxValue").value;

//   let actualCurrency = document.getElementById("actualCurrency").value;

//   let convertCurrencyTo = document.getElementById("convertCurrencyTo").value;

//   let label = document.getElementById("label");

//   if (
//     (actualCurrency === "USD" && convertCurrencyTo === "USD") ||
//     (actualCurrency === "INR" && convertCurrencyTo === "INR")
//   ) {
//     console.error("converting currency can't be same");
//     label.textContent = "Converting Currency can't be same";
//   }

//   if (actualCurrency === "USD" && convertCurrencyTo === "INR") {
//     let convertedAmount = (amount * 95.56).toFixed(2);
//     label.textContent = convertedAmount + " ₹";
//   }

//   if (actualCurrency === "INR" && convertCurrencyTo === "USD") {
//     let convertedAmount = (amount / 95.56).toFixed(2);
//     label.textContent = convertedAmount + " $";
//   }
// });

//Percentage Calulator TODO: develop a advance one
// let englishMarks = Number(prompt("Enter English Marks"));
// let scienceMarks = Number(prompt("Enter Science Marks"));
// let mathMarks = Number(prompt("Enter Math Marks"));
// let socialStudiesMarks = Number(prompt("Enter Social Studies Marks"));
// let historyMarks = Number(prompt("Enter History Marks"));

// if (
//   englishMarks > 0 ||
//   englishMarks > 100 ||
//   scienceMarks > 0 ||
//   scienceMarks > 100 ||
//   mathMarks > 0 ||
//   mathMarks > 100 ||
//   socialStudiesMarks > 0 ||
//   socialStudiesMarks > 100 ||
//   historyMarks > 0 ||
//   historyMarks > 100
// ) {
//   console.error("Please insert valid marks");
// } else {
//   let totalMarksObtained = englishMarksenglishMarks;
//   englishMarks + scienceMarks + mathMarks + socialStudiesMarks + historyMarks;

//   let totalMarks = 500;

//   let percentage = ((totalMarksObtained / totalMarks) * 100).toFixed(2);
//   console.log(percentage);
// }

//Temperature Converter
// document.getElementById("convert").addEventListener("click", function () {
//   let textbox1 = document.getElementById("textbox1").value;
//   //   let textvalue1 = textbox1.value;

//   let converterId = document.getElementById("converter").value;
//   //   let converterdIdValue = converterId.value;

//   let convertedTemp = document.getElementById("convertedTemp");

//   if (isNaN(textbox1)) {
//     convertedTemp.textContent = "Please Enter a valid temperature value";
//     return;
//   }

//   if (converterId === "ctof") {
//     let temp = ((textbox1 * 9) / 5 + 32).toFixed(2);
//     convertedTemp.textContent = temp;
//     console.log(typeof temp);
//   }

//   if (converterId === "ftoc") {
//     let temp = (((textbox1 - 32) * 5) / 9).toFixed(2);
//     convertedTemp.textContent = temp;
//     console.log(typeof temp);
//   }
// });

//Leap Year OR NOT
// const leapYearFinder = (year) => {
//   if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
//     console.log("It's a Leap Year");
//   } else {
//     console.log("Not a Leap Year");
//   }
// };

// leapYearFinder(2028);
// leapYearFinder(2100);
// leapYearFinder(2400);

//Create a function checkNumber(number) (after learning functions).
// const checkNumber = (number) => {
//   if (number > 0) {
//     console.log("Positive");
//   } else if (number < 0) {
//     console.log("Negative");
//   } else if (number == 0) {
//     console.log("Zero");
//   } else {
//     console.log("Please enter a valid number");
//   }
// };

// checkNumber(124);
// checkNumber(-2348);
// checkNumber(000);
// checkNumber("asdnas");

// Count positive and negative numbers in a list after( learning arrays and loops).
// const numberList = [
//   234, -234, 54, 324, -65, -567, 36, 0, -345, 0, 45.3, -65.2, -0,
// ];
// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;
// for (let i = 0; i < numberList.length; i++) {
//   if (numberList[i] > 0) {
//     positiveCount++;
//     console.log(numberList[i]);
//   } else if (numberList[i] < 0) {
//     negativeCount++;
//     console.log(numberList[i]);
//   } else {
//     zeroCount++;
//     console.log(numberList[i]);
//   }
// }

// console.log(
//   `Positive Count: ${positiveCount}, Negative Count: ${negativeCount}, Zeros: ${zeroCount}`,
// );

//is the number positive, negative or zero
// let number = ;
// if (number > 0) {
//   console.log("number is positive");
// } else if (number < 0) {
//   console.log("number is negative");
// } else if (number == 0) {
//   console.log("NUmber is zero");
// } else {
//   console.log("Not a valid number, please enter a valid number");
// }

//is the number positive, negative or zero with ternary opreator
// let number = -342;
// console.log(
//   number > 0
//     ? "Positive"
//     : number < 0
//       ? "Negative"
//       : number == 0
//         ? "Zero"
//         : "Please enter a valid number",
// );

//isEven Function
// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(`${number} is Even`);
//   } else {
//     console.log(`${number} is Odd`);
//   }
// };

// isEven(41);

//print all the odd numbers from 1 to 20
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//print all the even numbers from 1 to 20
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//Array numbers only even count
// let a = [34, 25, 17, 15, 65, 88];
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0) {
//     console.log(`${a[i]} is Even`);
//     count++;
//   } else {
//     console.log(`${a[i]} is Odd`);
//   }
// }
// console.log(count);

//Array numbers even odd
// let a = [34, 25, 17, 15, 65];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0) {
//     console.log(`${a[i]} is Even`);
//   } else {
//     console.log(`${a[i]} is Odd`);
//   }
// }

// let a = Number(prompt("Enter a number"));
// console.log(a % 2 === 0 ? "Even" : "Odd");

//Debugging and using breakpoints
// let a = 10;
// let b = 20;
// let sum = a + b;
// debugger;
// console.log(sum);

//User Input
// let num1 = Number(prompt("Enter Number:"));
// let num2 = Number(prompt("Enter Number:"));

// console.log(num1 + num2);

// let age = prompt("Enter Age");
// console.log(typeof age); //prompt always gives string - so wrap the prompt in Number() if you need a number to perform operations on it

//Template Litrals
// let firstName = "Deepak";
// let lastName = "Maurya";
// let age = 28;
// let city = "Mumbai";

// console.log(
//   `Hi, my name is ${firstName} ${lastName}, I am ${age} year old. I live in ${city}`,
// );

// console.log(`${2 + 2}`);

//WE CAN CALL A FUNCTION AS WELL INSIDE TEMPLATE LITERALS
// const greet = () => {
//   console.log("Hello");
// };
// console.log(`${greet()}`);

// console.log(`Thank You
//     Thank You
//         Thank You`);

// //Type Conversion
// console.log(Boolean(0));
// console.log(Boolean("0"));
// console.log(Boolean(""));
// console.log(Boolean([]));
// console.log(Boolean(null));

// let num = "100";
// console.log(num + 2);
// console.log(Number(num) + 2);
// let num1 = 500;
// console.log(num1 + 2);
// console.log(String(num1) + 2);

// let pi = "3.14";
// console.log(parseFloat(pi));

// let px = "42px";
// console.log(parseInt(px));

// console.log(Boolean(""));

// console.log("5" + 2 + 3);
// console.log("5" - 2);

//Ternary  Operator
// let number = 21;
// console.log(number % 2 === 0 ? "even" : "odd");

// let login = true;
// console.log(login ? "logged in" : "logged out");

// let num1 = 5;
// let num2 = 10;
// console.log(num1 > num2 ? "num1 is greater" : "num2 is greater");

//Bitwise

//Logical Operator
// let userAge = 19;
// let isLicense = true;
// let result = !(userAge > 18 && isLicense);
// console.log(result);

// let user = "Moderator";
// console.log(user === "Admin" || user === "Moderator");

// console.log(true && false);
// console.log(false || true);

// let isLoggedIn = true;
// console.log(isLoggedIn && userAge > 18);

//Comparison Operator
// let first = 10;
// let second = 15;
// console.log(first == 10);
// console.log(second == first);
// console.log(first == "10");
// console.log(first === "10");
// console.log(25 > 20);
// let marks = 66;
// console.log(marks >= 35);

// let user1Age = 29;
// let user2Age = 14;
// let user3Age = 18;
// console.log(user1Age == 18);
// console.log(user2Age == 18);
// console.log(user3Age == 18);

// let password1 = "qwerty";
// let password2 = "asdfgh";
// console.log(password1 === password2);

//Arithmetic Operations
// let a1 = 10;
// let b1 = 20;

// let add = a1 + b1;
// let subtraction = b1 - a1;
// let mul = a1 * b1;
// let div = b1 / a1;
// let remainder = b1 % a1;
// console.log(
//   `ADD: ${add} SUB: ${subtraction} MUL: ${mul} DIV: ${div} MOD: ${remainder}`,
// );

// //Average
// let englishMarks = 50;
// let frenchMarks = 60;
// let spanishMarks = 70;

// let averageMarks = (englishMarks + frenchMarks + spanishMarks) / 3;
// console.log(averageMarks);

// //Hours into Mins
// // let hours = prompt("enter number of hours");
// // let mins = Number(hours) * 60;
// // console.log(`${hours} hours = ${mins} mins`);

// //Area of rectangle
// let length = 10;
// let width = 5;
// let areaOfRectangle = length * width;
// console.log(areaOfRectangle);

//square and cube of number
// let number = prompt("Enter number to find it's Square and Cube");
// let square = Number(number) ** 2;
// let cube = Number(number) ** 3;
// console.log(`For number ${number} square is ${square} and cube is ${cube}`);

// //Compound Operators
// let qwe = "Deepak";
// qwe += " Maurya";
// console.log(qwe);

// //2
// let asd = 10;
// console.log(asd);
// asd = 20;
// console.log(asd);
// asd += 5;
// console.log(asd);
// asd -= 2;
// console.log(asd);
// asd *= 3;
// console.log(asd);

// //others
// console.log(aa);
// var aa = 8;
// console.log(typeof aa);
// if (typeof aa === "number") {
//   console.log("right");
// }

// const name = "Deepak";
// let age = 24;
// console.log(`My name is ${name} and I am ${age} year old`);
// // name = "Maurya";
// age = 28;
// console.log(`now my age is ${age}`);

// var var1 = 10;
// console.log(var1);
// var var1 = 20;
// console.log(var1);

// console.log("Hello, this is from js file");
// console.log(
//   "My name is Deepak, my hobbies are: Writing, Gaming and I am 28 year old",
// );

// console.error("This is Error");
// console.warn("This is warning");

// const users = [
//   { id: 1, name: "Deepak" },
//   { id: 2, name: "Rishabh" },
// ];
// console.table(users);

// console.clear(); //clears the console

// console.time("loop");

// for (let i = 0; i < 100000; i++) {}

// console.timeEnd("loop");

// //Topic: Variable Intro
// let name = "Deepak";
// let age = 24;
// console.log(`My name is ${name} and I am ${age} year old`);

// age = 28;
// let city = "Mumbai";
// console.log(`My name is ${name} and now my age is ${age}, I live in ${city}`);

// let x;
// x = 100;
// console.log(x);

// //Perimeter of Rectangle
// let length = 10;
// let width = 5;
// let rectanglePerimeter = 2 * (length + width);
// console.log(rectanglePerimeter);

// let movieName = "National Teasure";
// console.log(`One of my favorite movie is ${movieName}`);

// let englishMarks = 50;
// let frenchMarks = 60;
// let spanishMarks = 70;

// console.log(`Total Score: ${englishMarks + frenchMarks + spanishMarks}`);
