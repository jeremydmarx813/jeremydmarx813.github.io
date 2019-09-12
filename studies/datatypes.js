/*
This page is to describe the different types of data that can be saved to 
variables and different characteristics they can have.

TWO MAIN CATEGORIES OF DATA: SIMPLE/PRIMITIVE AND COMPLEX

*SIMPLE/PRIMITIVE DATA

*Simple/Primitive data contain a fixed value and take up a specific amount of
memory in a program.  They don't perform actions, are not open ended, don't 
contain a collection of data, or a collection of data with an accompanying 
description.  
*When you want to call on primitive data, you are calling the VALUE of them.  

*TYPES OF SIMPLE/PRIMITIVE DATA

1. Numbers - refers to numerical data, values that could have arithmetical 
operations performed on them.

*/

var num = 5;

/*
2. Strings - refers to data with charachters enclosed in quotes.
* Most commonly used for words and phrases.  
*/

var word = '5'; // a number enclosed in quotes is technically a string
var word = 'five';

/*
3.  Boolean - refers to a binary true or false condition.  
*/

var fact = true; //the word true with no quotes is a keyword in JS
var lie = false; //same with false;

/*

*You can also think of booleans as a non-numerical way to describe positive
and negative.

*Values can also have a 'truthy' or 'falsy' condition.  This basically 
descrives whether or not a value exists - doesn't have to mean whether a value 
saved is a boolean keyword data type (although a variable with the value of 
the boolean true is considered truthy).  If a value or variable exists, it is 
consisdered a 'truthy value'.

*undeclared values, empty strings, undefined, null, and other 'empty' values 
are considered 'falsy'.  values with the false keyword/boolean data type are
also considered falsy.
*/

var reality = 'the real world';
var matrix = '';
var lie = false;

if (reality) {
    console.log('this variable exists'); //reality is declared and has value
    //so this would log and is 'truthy'
} else {
    console.log(undefined);
}

if (matrix) {
    console.log('this variable exists');
} else {
    console.log(undefined); //matrix is an empty/'falsy' value, so it would
    //return undefined
}
/*
if (imagination) {
    console.log('this variable exists');
} else {
    console.log(undefined); // imagination is not a declared variable, so it 
    //return undefined and is 'falsy'
}

if (lie) {
    console.log('this variable exists');
} else {
    console.log(undefined); //the false boolean value is 'falsy'
}
*/
/*
4. undefined
*undefined is a keyword used to describe a value of having no value, such as
the empty 'falsy' values in the example above.  They also describe 
uninitialized variables.
*/

var nonExistent; 
console.log(nonExistent); //would return undefined

/*
5. null
*Describes a value that is nullified by the programmer
*/

var matrix = null; //a assigned null to the matrix variable from earlier to 
//since it's empty, 'falsy' and i don't want it used in other parts of program

/*
6. NaN
* Stands for Not a Number.  If a program you write required a numerical value 
and doesn't get one or gets another data type passed to it, you can return this 
keyword to convey that.  
*/

var val1 = 1;
var val2 = '1';

function add(num) {
    if (typeof num === 'string'){ //uses typeof keyword to analyze data type
        return NaN;
    }
    return num + 1;
}

console.log(add(val1));//returns 2
console.log(add(val2));//return NaN

/*
7. Infinity and -Infinity
*JavaScript has a built in Math object to do complex mathemematics and 
calculations.  Infinity and -Infinity are keywords used to describe the highest
numerical values in the Math object in the positive and negative object,
respectively.
*/

var val1 = 100000000000 * 70000000000000;
var val2 = 100000000000 * -7000000000000;

function infiniteChecker(num) {
    if (num > (1000000000 * 10000000)){
        return Infinity;
    } else if (num < (1000000000 * -10000000)){
        return -Infinity;
    }
}

console.log(infiniteChecker(val1));//returns Infinity
console.log(infiniteChecker(val2));//returns -Infinity

/*
*COMPLEX DATA TYPES

*complex data types are refer to data that collect or store larger collections
or data can be open-ended in terms of how much data can be open ended in terms
of how much data can be stored in them, or story blocks of code that perform 
actions.  
*while it may be easy to think of a collection of data or code that performs 
actions as the value of a collection, when calling complex data types, they 
are passed by the reference to the location of the collection.  For instance, 
if you log a variable containing a simple data type, you are logging the value 
that variable holds and therefor the value of the variable.  If you log a 
variable storing a complex data type, you are logging a reference to where the
collection of data of code that performs an action is stored in your program.
*/

var simpleData = 1;
var complexData = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(simpleData); //same as logging the value of 1;
console.log(complexData); //you are referring to the place where the collection
//of numbers is stored in the program

/*
*TYPES OF COMPLEX DATA

8. Array

*Collection of data stored inside [] angle brackets.  Each item in array is 
sepparated by a , and each item between the commas are labeled/numbered
positions called 'indexes'.  You count indexes starting at the number 0, and go
up from there, so the first position in the array is position 0, the second 
position is position 1, etc. To access the positions or assign a value to a 
specific position, you can put the position number inside [] and put the angle 
brackets right after the name of the array.
*/

var complexData = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(complexData[0]); //returns 1;
complexData[0] = 'one';
console.log(complexData[0]); //returns 'one', since we reassigned the value at 
//array index 0 on the previous line;

/*
*Arrays assigned to the keyword const can be changed or added to, but you still
can't reassign it to anything other that that array.

*Arrays have lots of different properties (descriptive characteristics) and 
methods (actions you can call on them to change them).
*/

var complexData = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(complexData.length); // length property describes how many elements
// are in array; returns 8;
complexData.push(9); //push method adds element to end of array
complexData.pop();//pop method takes last elemnt off end of array
//previous two metods would cancel each other out if you logged the array;
console.log(complexData.shift());//shift method removes first element of array
console.log(complexData.unshift(1));//unshift adds method to beginning of arr
//previous two methods cancel each other out
complexData.splice(1, 3, 'two, three, four'); //splice method replaces items at
//selected index, says how many indexes to replace, and then specifies what
//to replace them with
console.log(complexData);//returns [1, "two, three, four", 5, 6, 7, 8]
console.log(Array.isArray(complexData));//check to see if complexData is an 
//Array, return true

/*
9. Objects

*Technically, all data in JavaScript is an object, but this type of Object
is an object literal.  Object literals store collections of data in key/value
pairs. Keys are separated from the values they hold by ':'.They are not stored
in ordered positions like Arrays.  A key is really a 'porperty'. If they value
of a property or key is a function (reusable block of code that performs an 
action) it is called a method.

*key/value pairs are stored in {} curly brackets and separated by commas;

*to access/assign the values stored at keys, you can use . dot notation (like in 
.length) or if the key has special charachters/key is represented by a variable 
(like a parameter from a function or  variable in loop), [] angle brackets.
*/

var complexData = {
    one: 1,
    two: 2,
    three: 3,
    four: function (){
        return 'one, two, three!';
    }
}

console.log(complexData.one); //logs 1
complexData.one = 'one';
console.log(complexData.one); //logs 'one'
console.log(complexData.four());//logs 'one, two, three!'

/*
10. Functions 

* I will delve into what a function is more in the functions section of the 
studes page, but basically it is a reusable block of code that performs an 
action.  

*Functions have a variety of ways of being declared, but for now we'll stick 
with a function expression to demonstrate saving it to a variable to visualise
it as a complex data type.

*function is a keyword reserved in javascript

*functions take parameters, so you can plug data into your functions.  
parameters act as variables inside the function code block.
When a parameter is assigned a value, it is called an argument.  
Parameters/arguments go inside ().

*the action the function performs goes inside {}.

*To call or invoke a function, type variable name, then parenthesis with 
arguments if there are parameters in function.

*return keyword in functions executes action and finishes action of code block

*/

var valOne = 1;
var valTwo = 2;
var addTwoNumbers = function(num1, num2) {
    console.log('adding is fun!'); //you can add other code before function 
    //hits return statement
    return num1 + num2;
}

console.log(addTwoNumbers(5, 5)); //logs adding is fun, then returns 10
console.log(addTwoNumbers(valOne, valTwo));//logs adding is fun, then returns 3
//further shows how simple variable types are passed by value.