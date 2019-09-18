/*
*CONTROL FLOW

*Controls the flow of our program based on conditions, and provided code to 
execute based on whether the condition evaluates to true or false

*All condtional statements begin with an if statement

*keyword if followed with () containing condition to evaluate to true or false

*after condtion, {} with code to execute if provided condition evaluates to 
true 
*/

//NORMAL CONTROL FLOW IN GLOBAL SCOPE IS OBSERVED IN BELOW EXAMPLE

var val1 = 5;
var val2 = 4;

if(val1 > val2){ //condition that evaluates to true
    console.log('this is true!');//code block executes
}

//*else statements chain to if statements and provide a code block to execute 
//if condition in if() statement doesn't evaluate to true
//*else statements don't need () with condition because they only execute if
//the if statement condition does not evaluate to true

if(val1 < val2){ //condition that evaluates to false
    console.log('this is true!');
} else {
    console.log('this is false');//code block executes
}

//*else if statements come between the if statement and else statement to 
//provide alternate conditions to test for

if(val1 < val2){ //condition that evaluates to false
    console.log('this is true!');
} else if (val1 === 5) {//this condition evaluates to true
    console.log('this part of the code is true!');//code block executes
} else {
    console.log('this is fale');
}

//and else statement is not necessarily required with an if else statement,
//but if neither the if condtion or if else condition evaluate to true,
//no code will run

if(val1 < val2){ //condition that evaluates to false
    console.log('this is true!');
} else if (val1 === 6) {//this condition also evaluates to false
    console.log('this part of the code is true!');
} //no code runs

//*you can chain as many if else statements after the if statement as you need
//*think of the else statement as a default

//**SWITCH STATEMENTS 
//*Another way to test condtions is using switch statements

switch (val1)  { //value to test
    case 6: //says if val1 === 6
    case 7://can chain multiple conditions separated by : if the result of all
    case 8://the conditions evaluating to true would execute the same code 
        console.log('this is not true!');
        break;//keyword to tell program to exit switch statement once code 
        //block is executed
    case 5:
        console.log('this is true!');//this code will execute
        break;
    default:
        console.log('somethin is wrong with this code');
        break;
}

//*switch statements better when you have tons of condtions to test