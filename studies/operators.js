/*
*OPERATORS

*operators are the characters that allow us to indicate which action we want
our code to perform. 

*code that an operator acts on is called an 'operand'.

*Types of Operators 

* 1. ASSIGNMENT OPERATORS

*Assignment operators are the character used to indicate we are assigning a 
value to a variable.
*/

var name = 'john'; //the = sign is the assignment operator, assigns name to the
//value of 'john'

/*
*2. ARITHMETIC OPERATORS

* arithmetic operators allow us to perform mathematical actions on 'number'
datatypes (the + characther can be used on strings, but we will deal with that
later).

*/

var val1 = 5;
var val2 = 4;

//***BELOW EXAMPLES DON'T FOLLOW CONTROL FLOW RULES: VARIABLES AND GLOBAL SCOPE
//RESET TO THE INITIALIZED VALUES ABOVE FOR EACH STATEMENT!!!


//examples use variable name to reference value, but could also use the number
//assigned to each variable
console.log(val1 + val2);//addition operator: logs 9
console.log(val1 - val2);//subtraction operator: logs 1
console.log(val1 * val2);//multiplication operator: logs 20
console.log(val1 / val2);// division operator: logs 1.25
console.log(val1 % val2);//remainder operator; return the value of the 
//remainder of dividing the left operand by the right operand: logs 1
console.log(val2++);//increment operator; adds 1 to operand: logs 5
console.log(val1--);//decrement operator; subtracts 1 to operand: logs 4

/*
*There are short hand operators that assign and perform arithmetic on a value.
*/

var val1 = val1 + val2;
val1 += val2;
//both of the above examples return same value;

val1 += val2;
console.log(val1);//logs 9
val1 -= val2;
console.log(val1);//logs 1
val1 *= val2;
console.log(val1);//logs 20
val1 /= val2;
console.log(val1);//logs 1.25

/*
*3. Comparison Operators
*Comparison operators compare two operands/values and evaluate to a boolean
*/

console.log(val1 > val2);//greater than operator; checks if left operand is 
//greater than right operand: returns true
console.log(val1 < val2);//less than operator; checks if left operand is 
//less than right operand: returns false
console.log(val1 >= val2);//greater than or equal to operator; checks if left 
//operand is greater than or equal toright operand: returns true
console.log(val1 <= val2);//less than or equal to operator; checks if left 
//operand is less than or equal toright operand: returns false

/* Strict Comparison 
*Checks if values are equal in datatype AND value.  Non-strict comparison will
automatically convert different data types to the same data type (formally 
referred to as 'type coercion')to see if they are roughly the same, which is 
frowned upon.
*/

var val3 = '5';
console.log(val1 === val3);//three = signs indicate 'is strictly equal to': 
//returns false
console.log(val1 == val3)//two = signs indicate 'is loosely equal to'; will 
//convert val3 into number: returns true

/*
* 4. LOGICAL OPERATORS
*Allow us to check multiple conditions at once
*Bang operator (!) negates a condition/flips truthiness of value
*/

console.log(val1 > val2 && val2 === 4);//And operator; checks if both 
//conditions evaluate to true: returns true
console.log(val1 < val2 || val2 === 4);//Or operator; checks if either 
//condition evaluates to true.  Will only check condition on right if condition
//on left evaluates to false: returns true
console.log(val1 > val2 && val2 !== 4);//bang operator; condition on right says
//'check if val2 is NOT strictly equal to 4': returns false

/*
*5. UNARY OPERATORS 
* Operators that perform action on single operand.

* Some operators discussed earlier are also urnary operators
*/

console.log(!val1); //bang operator negates condition/comparison: returns false
val1++;
console.log(val1);//increment operator: returns 6
val1--;
console.log(val1);//decrement operator: returns 4
console.log(typeof val1);//typeof operator; checks data type of value: returns
//'number'
console.log(-val1);//makes numerical value negative: returns -5;

/*
*6. TERNARY OPERATOR 

*Allows us to check a condition and provide two different possible code 
statement depending on how the condition evaluates

*(condition) ? (if condition evaluates to true, statement to execute) : 
(statement to execute otherwise)
*/
console.log(val1 > val2 ? 'bigger number!' : 'smaller number!');//condition
//evaluated to true, so logs 'bigger number'




