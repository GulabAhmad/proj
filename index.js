"use strict";
var Name = "Hey Gulab Ahmad, I have started learning TYPESCRIPT.";
console.log(Name);
//- Store your name in a variable and print it.
var userName = "Gulab Ahmad";
console.log(userName);
//- Store 10 numbers in different variables.
var num1 = 22;
var num2 = 34;
var num3 = 88;
var num4 = 55;
var num5 = 23;
var num6 = 54;
var num7 = 79;
var num8 = 99;
var num9 = 90;
var num10 = 57;
console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);
//Add all of them and print the SUM.
console.log(num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10);
//- Print the Difference (subtraction).
console.log(num1 - num2 - num3 - num4 - num5 - num6 - num7 - num8 - num9 - num10);
//- Print the result after multiplying all.
console.log(num1 * num2 * num3 * num4 * num5 * num6 * num7 * num8 * num9 * num10);
// Take two numbers and print the division result.
var Num1 = 150;
var Num2 = 200;
var result = Num1 / Num2;
console.log(result);
// write a Program of student grade 
var givenNumber = -9;
if (givenNumber > 0) {
    console.log("Positive");
}
else if (givenNumber < 0) {
    console.log("Negative");
}
else {
    console.log("zero");
}
// Write  a program of student marks
var studentMarks = 60;
if (studentMarks > 80) {
    console.log("Grade A");
}
else if (studentMarks = 70 - 80) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}
var marks = 50;
if (marks >= 80) {
    console.log("Student Grade A");
}
else if (marks <= 70 && marks >= 60) {
    console.log("Student Grade B");
}
else if (marks <= 50 && marks >= 40) {
    console.log("Student Grade C");
}
var num = 11;
if (num % 2 == 0) {
    console.log("The Number is Even");
}
else {
    console.log("The number is odd");
}
// Switch Statment
var Section = "D";
switch (Section) {
    case "A":
        console.log("Sectiion A Class will start at 9AM to 12PM");
        break;
    case "B":
        console.log("Section B Class will start at 12PM to 3PM");
        break;
    case "C":
        console.log("Section C Class will start at 3PM to 6PM");
        break;
    default:
        console.log("Section D Class will start at 7PM to 9PM");
        break;
}
//function HP() {
//  var num90: number = 50;
//var num00:number = 70;
//  var result:number =  num90 + num00;
// console.log(result);
//}
//HP()
function GET(num2, num3) {
    var result = num2 * num3;
    console.log(result);
}
GET(56, 67);
// Write  a program to calculate area of rectangle.........
var width = 9;
var length = 7;
var result = length * width;
console.log(result);
// Write a program that takes input and calculates the volume of a cube.
var length1 = 7;
var result = length1 * length1 * length1;
console.log(result);
//   Write a program that checks if a given number is positive, negative, or zero.
var num11 = -0;
if (num11 > 0) {
    console.log("Positive!");
}
else if (num11 < 0) {
    console.log("negative!");
}
else {
    console.log("zero!");
}
// Write a program that checks if a given number is even or odd.
var num10 = 115;
if (num10 % 2 == 0) {
    console.log("The given Number is Even!");
}
else {
    console.log("The given number is Odd!");
}
//Write a program that determines if a person is eligible to vote based on their age.
var age = 18;
if (age >= 18) {
    console.log("The Person is eligible to vote");
}
else if (age > 18) {
    console.log("The Person is not eligible for vote");
}
//Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function toTemperature(_temp) {
    // var temp:number = 36;
    var tempF = _temp * 9 / 5 + 32;
    console.log(tempF);
}
toTemperature(56);
toTemperature(24);
toTemperature(36);
//Write a program that calculates the percentage.
function calculatePercentage(obtainedmarks, totalmarks) {
    // var obtainedmarks: number = 1076;
    //var totalmarks: number = 1100;
    var result = obtainedmarks / totalmarks * 100;
    console.log(result);
}
calculatePercentage(760, 1100);
//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
//Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
// Array  in Programming 
var studentNo = [67, 76, 76, 7454, 5, 545, 45, 54];
studentNo[1] = 89;
console.log(studentNo[1]);
var studentName = ["Mukhtar Ahmad", "Gulab", "Ahmad", "Muhmmad Abdul Ahad", "Qamar Sultan"];
studentName[3] = "Gulbahar";
console.log(studentName[3]);
console.log(studentName[4]);
let fruits = ["Apple", "Bannana", "Grapes", "Mango", "Oranges", "Melon"];
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push("Red Juice");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Gulab Ahmad");
console.log(fruits);
fruits.splice(0, 3, "String", "Coca Cola");
console.log(fruits);
var testvariable = "Gulab Ahmad";
console.log(typeof testvariable);
let n1 = 16;
let n2 = 4;
console.log(n1 % n2);
let n4 = 34;
console.log(n4);
n4 += 34;
console.log(n4);
n4 -= 56;
console.log(n4);
//let x = 45.00;
//let y = 45;
//console.log(x==y);
//console.log(x===y);
let n = 5;
//console.log(n >= 5 || n < 10);
//console.log(n > 5 || n < 10);
console.log(!(n < 10));
console.log(!(n > 10));
// Create a program that determines the category of a user-provided age.
// If the age is between 0 and 12, print "Child." 
//If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var userage = 19;
if (userage <= 12) {
    console.log("Child");
}
else if (userage >= 13 && userage <= 19) {
    console.log("Teeanger");
}
else {
    console.log("Adult");
}
// Congraulation Gulab Well Done Good Job
//Write a program that checks if the given year is leap year or not
let leapyear = 2222;
if (leapyear % 4) {
    console.log("The given year is leap year");
}
else {
    console.log("The given year is not leap year");
}
// Array that deduct the even and odd number
// we use map function
let numbers = [4, 35, 6, 5, 2, 8, 99, 12, 16, 15, 10, 456, 654, 321, 123];
let updateNumbers = numbers.map((numbers) => {
    if (numbers % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
});
console.log(updateNumbers);
var cars = [{
        company: "honda",
        year: 2021,
    },
    {
        company: "kia",
        year: 2022,
    },
    {
        company: "Hundai",
        year: 2020,
    },
    {
        company: "Toyota",
        year: 2020,
    },
    {
        company: "Audii",
        year: 2020,
    },
    {
        company: "Mercedes",
        year: 2020,
    },
    {
        company: "Royal Roce",
        year: 2023,
    }, {
        company: "Suzuki",
        year: 2021,
    },
    {
        company: "Wagnor",
        year: 2012,
    }
];
for (let j = 0; j < cars.length; j++) {
    console.log("cars", cars[j].company, cars[j].year);
}
// function and return
function sum(addnum1, addnum2) {
    var result = addnum1 * addnum2;
    return result;
}
var sumnum = sum(5, 5);
sumnum = sumnum + 10;
console.log("sumnum", sumnum);
function space(alphanum, betanum) {
    var result = alphanum + betanum;
    return result;
}
var tonum = space(67, 1);
tonum = tonum + 15;
console.log("tonum is ", tonum);
var sumResult = (num1, num2) => num1 = num2;
var num1 = 10;
var num2 = 10;
sumResult;
let country = prompt("Where do you live?");
// Number() function is used to convert the string to number
let agenumber = (prompt("What's your age?"));
if (country === "pakistan") {
    if (age >= 18) {
        console.log("Here is your ticket");
    }
    else {
        console.error("Age restriction");
    }
}
else {
    console.log("Invalid country");
}
