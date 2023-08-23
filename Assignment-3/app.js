// Assignment 03 Q1

// var studentName = [];

// Assignment 03 Q3

// var studentName = ['Tanzeel','zain','areeb'];

// Assignment 03 Q4

// var numbers = [1 , 2 , 3];

// Assignment 03 Q5

// var booleanArr = [ true, false];

// Assignment 03 Q6

// var mixArr = ['apple', 1, true];

// Assignment 03 Q7

// var eduInPakistan = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];
// var serialNumber = 0;
// document.write(`<h2>Qualifications:</h2> <br />`);
// for(i = 0; i < eduInPakistan.length; i++){
//  document.write(`${++serialNumber}) ${eduInPakistan[i]} <br>`);
// }

// Assignment 03 Q8

// var studentName = ['Ali', 'Fida', 'Raza'];
// var score = [350, 467, 432];
// var totalMarks = 500;

// for(var i=0; i < studentName.length; i++){
//     document.write(`Score of ${studentName[i]} is ${score[i]}. Percentage:${score[i]/totalMarks * 100}% <br>`);
// }

// Assignment 03 Q9

// var color = ['red', 'green', 'blue'];
// console.log(color);
// var updateColor = window.prompt(`Do you want to add the color ? \n PLease Enter the color`);
// color.push(updateColor);
// console.log(color);

// var addInBegining = window.prompt(`Enter to add color at begining`);
// color.unshift(addInBegining);
// console.log(color);

// var addInBegining2 = window.prompt(`Enter to add color at begining`);
// color.unshift(addInBegining2)
// console.log(color);

// color.shift(color);
// console.log(color);

// var enterIndex = +window.prompt("At which index do you do want to add the color?");
// var addColorAtEnteredIndex = window.prompt(`Color Name`);

// color.splice(enterIndex,0,addColorAtEnteredIndex);
// console.log(color);

// var deleteColor = window.prompt("Enter color to delete");
// console.log(color.indexOf(deleteColor));

// color.splice(color.indexOf(deleteColor),1);
// console.log(color);

// Assignment 03 10

// const fruits = [99, 45, 44, 86, 67, 38];
// console.log(fruits);
// fruits.sort();
// console.log("Ordered  Scores of Students " + fruits)

// Assignment 03 11

// var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "San Francisco"];
// var selectedCities = [];

// selectedCities = cities.slice(0, 3);
// console.log("Selected Cities:", selectedCities);

// Assignment 03 12
// var arr = ['This', 'is', 'my', 'cat'];
// console.log("Array "+ arr);
// console.log(arr.join(" "));

// Assignment 03 13

// let arrayFifo = [];

// for (let i = 1; i <= 5; i++) {
//   let userInput = window.prompt("Enter Value");
//   arrayFifo.push(userInput);
//   console.log(arrayFifo);
// }

// while (arrayFifo.length > 0) {
//   let value = arrayFifo.shift();
//   console.log(value);
// }

// Assignment 03 14

// let arrayFifo = [];

// for (let i = 1; i <= 5; i++) {
//   let userInput = window.prompt("Enter Value");
//   arrayFifo.push(userInput);
//   console.log(arrayFifo);
// }

// while (arrayFifo.length > 0) {
//   let value = arrayFifo.pop();
//   console.log(value);
// }

// Assignment 03 15

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

function dropDownMenu(){
    document.write(`<select id="manufacturerDropDown"> `);

    for(var i=0; i < phoneManufacturers.length; i++){
        document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");

    }
    document.write("</select>");
}
dropDownMenu();
