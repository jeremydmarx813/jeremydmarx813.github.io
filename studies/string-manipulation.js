/*

STRINGS

*Refers to data with charachters enclosed in quotes: '', ""

* Most commonly used for words and phrases.  

*/

var name = 'john';
var name = "john";//double quotes allows for you to use charachters that are
//frequently used in the JavaScript environment within a string, such as 
// '', /.

//*Strings are technically objects in JavaScript, so they have properties

console.log(name.length); //length property refers to how many characters are
//in a string: returns 4
console.log('bob'.length); //returns 3

//*Character positions in a string are labled/indexed and can be 
//accessed the same way indexed positions in arrays are, with [].

var name = 'bob';
console.log(name[0]); //first character in string: logs 'b';

//*Use the array index and length property to access last character in string
console.log(name[name.length -1]); //returns 'b';

//*String methods
//*Methods on the string object

console.log(name.toUpperCase());//Capitalizes all letters in string; returns 
//'BOB'
var name2 = 'BILLY';
console.log(name2.toLowerCase());//Makes all letters in string lowercase; 
//returns 'billy'

//*STRING CONCATENATION 
//*Use the + operator to add to strings or add strings together 

console.log(name2.toLowerCase() + ' ' + name);//adds character of space and 
//value of name to the end of the value of name2 in all lowercase: 
//returns 'billy bob';

//*TEMPLATE LITERALS 
//*Use back ticks `` to enclose a string and ${} inside backticks to include 
//the value of a variable
//in es6 this is called String Interpolation
console.log(`${name2} ${name}`); //returns BILLY bob