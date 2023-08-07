// Chapter no. 2 Q1
// var username;

// Chapter no. 2 Q2
// var myName = "Tanzeel Ur Rehman";

// Chapter no. 2 Q3
// var message = "Hello World";
// window.alert(message);

// Chapter no. 2 Q4

// var studentName = "My name is Jhone Doe";
// var studentAge = "I'm 15 years old";
// var studentMessage = "I'm a certified Mobile Appication Developer";

// window.alert(studentName);
// window.alert(studentAge);
// window.alert(studentMessage);

// Chapter no. 2 Q5

// var lineBreak = "PIZZA\nPIZZ\nPIZ\nPI\nP"
// window.alert(lineBreak);

// Chapter no. 2 Q6

// var email = "tanzeelurrehman1995@gmail.com"
// window.alert("My E-mail address is " + email);

// Chapter no. 2 Q7

// var book = "A smarter way to learn JavaScript";
// window.alert("I am trying to learn from the Book " + book);

// Chapter no. 2 Q8

// document.write("Yah! I can write HTML content through JS");

// Chapter no. 2 Q9

// window.alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

// Chapter no. 3 Q1

// var age = 28;
// window.alert("I am " + age + " years old");

// Chapter no. 3 Q2

// var n = 6;
// window.alert("You have visited this site " + n + " Times");

// Chapter no. 3 Q3

// var birthYear = 1995;
// document.write("My birth year is " + birthYear);

// Chapter no. 3 Q4

// var vistorName = "John Doe";
// var product = "T-shirt(s)";
// var quantity = 5;

// document.write(vistorName + " ordered " + quantity + " " + product + " on XYZ clothing store");

// Chapter no. 4 Q1

// var name, age, rollNo;


// Chapter no. 4 Q2

//legal variables name
// var name, my_Name,whatIsYourName,your_Message_In_Text,$myName;

//illegal variable name

// var 1name, my name, var , one*two , function;

// Chapter no. 4 Q3

// var heading = "Rules for naming JS variables"
// var variableName1 = "$", variableName2 = "_" , variableName3 = "numbers"; 
// var variableNameBegins1 = "small letter", variableNameBegins2 = "$", variableNameBegins3 = "_";
// var jsIsCase = "sensitive";
// var keywords = "keywords";

// document.write(heading + "<br> <br> <br>");
// document.write("Variable names can only contains " + variableName1 + " , " + variableName2 + " and " + variableName3 + " For Example: $my_1stVariable" + "<br>")
// document.write("Variable must begins with a " + variableNameBegins1 + " , " + variableNameBegins2 + " & " + variableNameBegins3 + ". For Example: $name, _name, or name" + "<br>");
// document.write("Variabe names are case " + jsIsCase + "<br>");
// document.write("Variable names should not be JS " + keywords);

// Chapter no.5 Q1

// var num1 = 2, num2 = 4;
// var add = num1 + num2 ;

// document.write("Sum of " + num1 + " and " + num2 + " is " + add);

// Chapter no.5 Q2 

// var num1 = 20, num2 = 10;
// var subtract = num1 - num2;
// var multiplication = num1*num2;
// var division = num1/num2;
// document.write(`Subtraction of ${num1} and ${num2} is ${subtract}`);
// document.write(`Multipication of ${num1} and ${num2} is ${multiplication}`);
// document.write(`division of ${num1} and ${num2} is ${division}`);

// Chapter no.5 Q3

// var number;
// document.write("Value after variable declaration is: ??." + "<br>");
// number = 5;
// document.write(`Initialize value: ${number} <br>`);
// number = ++number;
// document.write(`Value after Increment: ${number} <br>`);
// number = number + 7;
// document.write(`Value after addition is: ${number} <br>`);
// number = --number;
// document.write(`Value after decrement is: ${number} <br>`);
// number = number % 3;
// document.write(`The reminder is: ${number}`);

// Chapter no.5 Q4

// var ticketPrice = 600;
// document.write(`The total cost to buy 5 tickets to a movie is ${ticketPrice*5}PKR`);

// Chapter no.5 Q5

// var number = 4;

// document.write("Table of 4" + "<br> <br>");
// for(var i=1 ; i<=10 ; i++){
//     document.write(`${number}x${i}=${number*i} <br>`);
// }


// Chapter no.5 Q6a
 
// var tempInCelsius = 25;

// //Conversion

// var tempInfahrenheit = (tempInCelsius  * 9/5) + 32;
// document.write(`${tempInCelsius}°c is ${tempInfahrenheit}°F`)

// Chapter no.5 Q6b

// var tempInFahrenheit = 45;

// // conversion

// var tempInCelsius = (tempInFahrenheit - 32)*5/9;
// document.write(`${tempInFahrenheit}°F is ${tempInCelsius}`);

// Chapter no.5 Q7

// document.write("Shopping Cart <br> <br> <br>");

// var priceOfItem1 = 650;
// var priceOfItem2 = 100;
// var orderedQuantityOfItem1 = 3;
// var orderedQuantityOfItem2 = 7;
// var shippingChargers = 100;

// document.write(`Price of item 1 is ${priceOfItem1} <br>`);
// document.write(`Quantity of item 1 is ${orderedQuantityOfItem1} <br>`);
// document.write(`Price of item 2 is ${priceOfItem2} <br>`);
// document.write(`Quantity of item 2 is ${orderedQuantityOfItem2} <br>`);
// document.write(`Shipping Charges ${shippingChargers} <br> <br>`);
// document.write(`Total cost of order is ${(priceOfItem1*orderedQuantityOfItem1)+(priceOfItem2*orderedQuantityOfItem2)+shippingChargers}`);


// Chapter no.5 Q8

// var totalMarks = 100; obtainedMarks = 86;
// var percentage = (obtainedMarks/totalMarks)*100;

// document.write(`Mark Sheet <br> <br> Total Marks: ${totalMarks} <br> Obtained Marks: ${obtainedMarks} <br> Percentage: ${percentage}`);

// Chapter no.5 Q9

// var dollars = 10;
// var riyals = 25;
// var exchangeRatesOnedollar = 104.80;
// var exchangeRatesOneriyal = 28;

// document.write(`Currency In PKR <br> <br> Total currency in PKR: ${(dollars*exchangeRatesOnedollar)+(riyals*exchangeRatesOneriyal)}`);

// Chapter no.5 Q10

// var number = 5;
// var multiplyBy = 10;
// var divideBy = 2;
// var result = number*multiplyBy/divideBy;

// document.write(result);

// Chapter no.5 Q11

// var currentYear = 2023, birthYear = 1995, age = (currentYear - birthYear);
// document.write(`Age Calculator <br> <br> Current Year: ${currentYear} <br> Birth Year: ${birthYear} <br> Your age either ${age} or ${++age}`);

// Chapter no.5 Q12

// var radius = 20;
// document.write(`The Geometrizer <br> <br> Radius of Circle: ${radius} <br> The circumference is: ${2 * 3.142 * radius} <br> The Area of circle: ${3.142 * 20 *20}`)

// Chapter no.5 Q13

// var favouriteSnack = "lays";
// var currentAge = 15;
// var maxAge = 65;
// var estimatedAmountPerDay = 3;

// document.write(`The lifetime Supply Calculator <br> <br> Favourite Snack: ${favouriteSnack} <br> Current Age: ${currentAge} <br> Estimated Maximum age: ${maxAge} <br> Amount of snacks per day: ${estimatedAmountPerDay} <br> You will need ${(estimatedAmountPerDay * 365) * (maxAge - currentAge)} ${favouriteSnack} to last you until the ripe old age of ${maxAge}`);