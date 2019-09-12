/*
 * VARIABLES:
 
 * 0. To hold things in memory during the life-cycle of a program, we can use 
      variables.  Variables are named identifiers that can point to values of a 
      particular type, like a Number, String, Boolean, Array, Object or another 
      data-type.  Other ways to think of variables are that they are labled 
      containers for values or tentacles that latch on to values (credit to 
      Eloquent Javascript for that!).
 
 * 1. To create a variable we use the keyword, var, followed by a 
      name (id or alias) for our variable.
 
 * 2. There are 2 phases of using variables: declaration and 
      initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we 
   have NOT initialized it to anything.
 */
console.log(myName); // prints => undefined
/*
 * 2. initialization or assignment, when we first give it a value to contain
    latch on or point to.
*/
myName = 'john';
console.log(myName); // prints => john

// We could have also declared it and initialized it simultaneuoulsy in one 
// step 
var myName = 'john';

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable (when using the var 
// keyword, we'll get to the exception in a bit!)
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
console.log(myVariable);

/*
you can also re-assing it to another variable name;
*/

var anotherVariable = 4;
myVariable = anotherVariable;
console.log(myVariable); // should return 4, the value of anotherVariable

/*
  * 4. let and const keywords
  * When the ES6 version of JavaScript came along in 2015, it introduced two 
   new keywords to assign/contain/latch onto values: let and const.
   the declaration and initialization of variables using let/const works the 
   same as with var.
*/

//var myName;
//let myName;
//const myName;

//var myName = 'john';
//let myName = 'john';
//const myName = 'john';

/*
  * A key difference between var/let and const is that const cannot be 
  re-assigned to another value, hence the 'constant'. 
*/


//const myName = 'john';
myName = 'brian';
console.log(myName); // would return an error message

/*
   5.  Other properties of variables keywords
   
   * a: scope
   * scope refers to what part/('space', as OPSpark describles it)/layer/level
   of code a variable/object-type is available to be used.  For intance, a
   variable declared in the general space of your script/JavaScript 
   file (more formally called the "global scope") would not 
   necessarily be availbe to you inside a code block, which is indicated  
   by the curly braces {} AND vice versa. { 'hi' } 'hi' would be considered 
   inside that code block.  You could not necessarily access 'hi' from outside 
   of that code block and would not necessarily be able to
   access other things outside of the 'hi' code block from inside { 'hi' }.
   
   let and const are always scoped to whatever code block they are in.
   var is only strictly scoped to a code block if the code block is a FUNCTION
   

*/

function testFunc () {
    var test1 = 'a'; 
    let test2 = 'b';
    const test3 = 'c';
    //all three of these variables are unavailable outside of this function/{}
}

//console.log(test1); //returns error
//console.log(test2); //returns error
//console.log(test3); //returns error
/*
if () {
    var test1 = 'a'; 
    let test2 = 'b';
    const test3 = 'c';
    //only var is available outside of the if statement/code block
}

console.log(test1); //returns 'a'
console.log(test2); //returns error
console.log(test3); //returns error
*/
/*
   b: Hoisting
   *Hoisting refers to the ability to reference a variable before it is 
   declared. Hoisting pulls a variable the top of the program before it runs
   the program.
   * variables using the var keyword are hoisted, so you can call them before 
   you declare them.
   
   NOTE: only the declaration of the variable is hoisted, not the value, so 
   you calling the variable before it is declared OR initialized will return
   undefined. 
   
   
*/

console.log(myName); //returns undefined
//var myName = 'john;

/*
let and const are not hoisted, so you will get an error message if you try to 
call or reference them before they are declared.
*/

console.log(myName); //returns Reference Error
//let myName = 'john;

console.log(myName); //returns Reference Error
//const myName = 'john;