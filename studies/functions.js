/*
Functions 

* Functions are reusable blocks of code that perform an action/actions.  

*function is a keyword reserved in javascript

*functions take parameters, so you can plug data into your functions.  
parameters act as variables inside the function code block.
When a parameter is assigned/passed a value, it is called an argument.  
Parameters/arguments go inside ().

*the action the function performs goes inside {}.

*To call or invoke a function, type variable name, then parenthesis with 
arguments if there are parameters in function.

*return keyword in functions executes action and finishes action of code block.
without the return keyword, functions by default return undefined.

*Functions have a variety of ways of being declared.
*/

//*a: function declaration

function addTwoNumbers (num1, num2) {
    return num1 + num2;
}

//b: function expression

var addTwoNumbers = function(num1, num2) {
    return num1 + num2;
}

//c: ES6 arrow syntax

var addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

//ES6 notes :
//* if you only have one parameter, you can eliminate the () around parameter.
//you need the parenthesis if you have more than one or no parameters.
//*if you can fit the whole funtion on one line, you can eliminate the {}
// and return keyword for what's called an implicit return 
// *Let's change the above function to require one parameter.

var addTwoToANumber = (num) => {
    return num + 2;
}

//Could be written like:

var addTwoToANumber = num => num + 2;
    

/*
Anonymous Funtions

*Anonymous Funtions are functions written without a name.

*Most commonly written while being passed as arguments to other functions.
*/

var addTwoToANumber = function(num, add2) {//defines unwritten function as
//second parameter
    console.log(add2(num));
}

addTwoToANumber(5, function(num) {return num +2});//writes a function that adds
//2 to first parameter while being called as an argument


//Function blocks can store other types of code blocks such as
//if-else if-else statements, loops, and variable declarations

//* Variables declared inside of a function cannot be called outside of the
//function scope, regardless of what variable keyword you use



var addTwoNumbers = function(num1, num2) {
    var valOne = 5;
    var valTwo = 6;
    return (num1 + valOne) + (num2 + valTwo);
}

//console.log(valOne);//will throw reference error
//console.log(valTwo);//will throw refernce error

/*
*Closures are functions that are nested inside of other functions and have 
access to the variables in it's parent functions' scope.
*/

var addTwoNumbers = function(num1, num2) {
    var valOne = 5;
    var valTwo = 6;
    function increaseParameters () {
    return (num1 + valOne) + (num2 + valTwo);
    }
        return increaseParameters();
    }

console.log(addTwoNumbers(5, 4));//logs 20