// Assignment 04 Chatper 15-20 Q1

// var arr = [[],[]];

// Assignment 04 Chatper 15-20 Q2

// var arr = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];

// for (var i = 0; i <= 3; i++) {
//   for (var j = 0; j <= 3; j++) {
//     document.write(arr[i][j] + " ");
//   }
//  document.write("<br>");
// }

// Assignment 04 Chatper 15-20 Q3

// for(var i =1 ; i <=10; i++){
//     document.write(i + "<br />");
// }

// Assignment 04 Chatper 15-20 Q4

// var table = window.prompt("Enter a number to show its multiplication table");
// var tableLength = window.prompt("Enter length multiplication table");

// for (var i =1; i <=tableLength; i++){
//     document.write(`${table} x ${i} = ${table*i} <br>`);
// }

// Assignment 04 Chatper 15-20 Q5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br />");
// }

// for(var j = 0; j < fruits.length; j++){
//     document.write(`Element at index ${j} is ${fruits[j]} <br/>`);
// }

// Assignment 04 Chatper 15-20 Q6(a)

// var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write(counting + "<br />");

// Assignment 04 Chatper 15-20 Q6(b)

// var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write("Reverse Counting = ");
// for (var i = counting.length - 1; i >= 0; i--) {
//   document.write(counting[i] + ", ");
// }

// Assignment 04 Chatper 15-20 Q6(c)
// var counting = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  for(var i=0; i < counting.length; i++){
//     if(counting[i] % 2 === 0){
//         document.write(`${counting[i]} is Even Number <br />`);
//     }
//  }

// // Assignment 04 Chatper 15-20 Q6(d)
// var counting = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  for(var i=0; i < counting.length; i++){
//     if(counting[i] % 2 !== 0){
//         document.write(`${counting[i]} is Odd Number <br />`);
//     }
//  }

// // Assignment 04 Chatper 15-20 Q6(e)

// var num = window.prompt("Enter a number to generate series");
// var seriesLength = window.prompt("Enter the length of series");

// for(var i=1; i<=seriesLength; i++){
//     document.write(`${num*i}k, `);
// }

// Assignment 04 Chatper 15-20 Q7

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = window.prompt(
//   "Welcome to ABC bakery, What do you know to order?"
// );

// flag = `${userInput} is <b>not available</b> at our bakery`
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] == userInput) {
//     flag =`${arr[i]} is <b>available</b> at index ${i} <br>`;
//   }
// }

// document.write(flag);

// Assignment 04 Chatper 15-20 Q8

// var arr = [24, 53, 78, 91, 12];
// document.write("Array Items: " + arr + "<br/>");
// var largestValue = arr[0];
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] > largestValue){
//         largestValue = arr[i];
//     }
// }
// document.write("Largest value: " + largestValue);

// Assignment 04 Chatper 15-20 Q9

// var arr = [24, 53, 78, 91, 12];
// document.write("Array Items: " + arr + "<br/>");
// var smallestValue = arr[0];
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] < smallestValue){
//         smallestValue = arr[i];
//     }
// }
// document.write("Smallest value: " + smallestValue);

// Assignment 04 Chatper 15-20 Q10

// var num = 5;
// for(var i=1 ; i<=20 ; i++){
//     document.write(`${num*i}, `);
// }

// Assignment 04 Chatper 21-25 Q1

// var firstName = window.prompt("Enter your first name");
// var secondName = window.prompt("Enter your second name");
// var fullName = firstName + " " + secondName;

// document.write(fullName);

// Assignment 04 Chatper 21-25 Q2

// var userInput = window.prompt("Enter your favorite mobile phone");
// document.write(`My favorite mobile phone is: ${userInput}. <br/> The length of string is: ${userInput.length}`);

// Assignment 04 Chatper 21-25 Q3

// var nationality = "Pakistani";
// document.write(`String: ${nationality}. <br>The index of 'n' is ${nationality.indexOf("n")}`);

// Assignment 04 Chatper 21-25 Q4

// var str = "Hello World";
// document.write(`String: ${str}. <br>The Last index of 'l' is ${str.lastIndexOf("l")}`);

// Assignment 04 Chatper 21-25 Q5

// var nationality = "Pakistani";
// document.write(`String: ${nationality}. <br>The character at 3rd index is: ${nationality.charAt(3)}`);

// Assignment 04 Chatper 21-25 Q6

// var firstName = window.prompt("Enter your first name");
// var secondName = window.prompt("Enter your second name");
// var fullName = firstName.concat(" ", secondName);

// document.write(fullName);

// Assignment 04 Chatper 21-25 Q7

// var originalWord = "Hyderabad";
// var searcWord = "Hyder";
// var replaceWord = ' Islam'
// var index = originalWord.indexOf(searcWord);

// for(var i =0; i <= originalWord.length/2; i++){
//     if(index !== -1){
        
//     }
// }

// Assignment 04 Chatper 21-25 Q8

// Assignment 04 Chatper 21-25 Q9

// var value="472";
// document.write(`Value: ${value}. <br/>Type: ${typeof value} <br/>`);

// document.write(`Value: ${value}.<br />Type; ${typeof Number(value)}`)

// Assignment 04 Chatper 21-25 Q10

// var userInput = window.prompt("Enter any word");
// document.write(`User Input: ${userInput}.<br/>Upper Case: ${userInput.toUpperCase()}`)

// Assignment 04 Chatper 21-25 Q11

// var userInput = window.prompt("Enter any word");
// document.write(`User Input: ${userInput}.<br/>Upper Case: ${userInput.charAt(0).toUpperCase()}${userInput.slice(1)}`)