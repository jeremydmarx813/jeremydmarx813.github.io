
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  let outputStr= '';
  while(outputStr.length < num){
    outputStr += '#';
    console.log(outputStr);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(let i = 1; i < 16; i++){
    if(i % 5 ===0 && i % 3 === 0){
      console.log('fizzbuzz');
    } else if(i % 3 === 0){
      console.log('fizz');
    } else if(i % 5 === 0){
      console.log('buzz');
    } else {
    console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  let chessLine = '';
  //outer for loop
  for(let i = 1; i <= num; i ++){
  //edge case for outer loop
   if(i % 2 !== 0){
    //set inner loop for if edge case is true
    //loop starts char alternation with ' '
    for(let j = 1; j <= num; j++){
       if(j % 2 !== 0){
          chessLine += ' ';
         } else {
            chessLine += '#';
         }
      }
    //add a line break at end of outer loop itt
     chessLine += '\n';
     //if edge case is false for outer loop
   } else {
     //set inner loop for if outer edge case is false
     //start char itt with '#'
     for(let j = 1; j <= num; j++){
         if(j % 2 !== 0){
          chessLine += '#';
       } else {
            chessLine += ' ';
       }
      }
      //line break at end of outer loop itt
    chessLine += '\n'; 
    }
  }
  console.log(chessLine);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
