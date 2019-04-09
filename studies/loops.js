/*
**LOOPS

*loops are for repeating the same action multiple times or iterating over 
collections of data

*1. for loop

*syntax: for (starting condition; stopping condion; iteration counter){
    code block to execute for each time code runs
}
*/

for (let i = 1; i < 11; i++){
    console.log(i); //returns 1 2 3 4 5 6 7 8 9 10
}

//*loop counting to 10
//*for keyword
//*declares variable for data being looped over, sets starter to 1
//*continues looping until stopping condion is true
//*inceases the value of the data being looped over by 1 each time loop runs
//*code block to execute each time loop runs


for (let i = 10; i > 0; i--) {
    console.log(i);//returns 10 9 8 7 6 5 4 3 2 1 
}

//*loop counting backwards from 10
//*sets starter to 10
//*continues looping until stopping condion is true
//*deceases the value of the data being looped over by 1 each time loop runs
//*code block to execute each time loop runs

var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < sampleArray.length; i++){
    console.log(sampleArray[i]);//returns 1 2 3 4 5 6 7 8 9 10
}

//*looping over arrays with for loops 
//*value of itteration variable sets to index of array
//*since arrays are 0 indexed, the total length will be 1 less the amount of 
//index positions
//*increases index position each time loop runs
//*i refers to index number, so you have to chain i to the array you are
//itterating over


var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = sampleArray.length - 1; i > -1; i--){
    console.log(sampleArray[i]);//returns 10 9 8 7 6 5 4 3 2 1
}

//*loops backwards through array
//*gets last index by subtraction 1 from total length of array

/*
*WHILE LOOP

*alternate syntax for looping 

*declares starting variable first outside of code block

*keyword while then the condition to keep looping while condition evaluates
true inside ()

*code block to run on each loop
*/

var count = 0;
while (count < 10) 
{ count+= 1;
console.log(count) } //returns 1 2 3 4 5 6 7 8 9 10

//*after the loop logs 9, the condition in the loop is still true, so it 
//goes back into the loop and logs 10

/*

*FOR IN LOOPS

*meant to iterate over the keys of an object


*/

var numObj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10
}

for (let key in numObj){
    console.log(numObj[key]); // returns 1 2 3 4 5 6 7 8 9 10
}

//*for keyword
//*declares itteration variable name for keys
//*in, then name object you are itterating over
//*like looping over arrays, the itteration variable refers to the key you are
//currently looping through, so you have to chain it to the object you are 
//looping through like you are using bracket notation to access a value at
//a key in an object
//*since key is not actually a key in the object, you have to use bracket 
//notation, not dot notation