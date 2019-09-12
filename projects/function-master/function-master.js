//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  let newArr = [];
  for(let i in object){
      newArr.push(object[i]);
  }
  return newArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
  return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let newArr = [];
    for(let i in object){
        if(typeof object[i] === 'string'){
            newArr.push(object[i]);
        }
    }
    return newArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
    } else if(collection !== null && typeof collection === 'object'){
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let newArr = string.split(' ');
    let finalArr = [];
    for(let i = 0; i < newArr.length; i++){
        finalArr.push(newArr[i][0].toUpperCase() + newArr[i].slice(1));
    }
    return finalArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let finalName = object.name[0].toUpperCase() + object.name.slice(1);
   return `Welcome ${finalName}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  let name = object.name[0].toUpperCase() + object.name.slice(1);
  let species = object.species[0].toUpperCase() + object.species.slice(1);
  return `${name} is a ${species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  if (object.noises && object.noises.length){
      return object.noises.join(' ');
  } else
      return 'there are no noises';
  
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  let testArr = string.split(' ');
  for(let i = 0; i < testArr.length; i++){
      if(testArr[i] === word){
          return true;
      }
  }
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
  object.friends.push(name);
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//after looking at tests, check if friends prop even exists
if(object.friends){
  //loop thru objects friends arr
  for(let i = 0; i < object.friends.length; i++){
  //break cond if the name passed in eqls current it name    
      if (object.friends[i] === name){
          return true;
      }
  }
}
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
/////////////////////using isFriend /////////////////////////////////////////
    //final arr to return of names that arent in names friend list
    let arr = [];
  //loop over array of objects
  for(let i = 0; i < array.length; i++){
//if the current object's name doesnt equal name AND 
//calling isFriend on name and the current object evals to false      
      if(array[i].name !== name  && !isFriend(name, array[i])){
          //push that objects name to the final arr to be returned
            arr.push(array[i].name);
      }
  }
   //return final arr
   return arr;
    //}
////////REAL ANSWER////////////////////////

//   //final arr to be returned  
//   let newArr = [];
//   //test variable declaration, will be set to the friend array of theobject in <array>
//   // which has name prop of <name>
//   let testVar;
//   //people who arent friends with name
//   let testVar2 = [];
//  //loop thru array of objs
//   for(let i = 0; i < array.length; i++){
//   //if input name is equal to current itt obj name
//     if(array[i].name === name){
//       //set test var to that objects friends array
//       testVar = array[i].friends;
//       } else {
//         //otherwise push the curr itt obj name to testVar2
//         testVar2.push(array[i].name);
//       }
//   }
  
  
//   //loop thru the names of people who arent the name arg
//   for(let j = 0; j < testVar2.length; j++){
//       //if index of testVar === -1 (if its not in names friends list)
//       if(testVar.indexOf(testVar2[j]) === -1){
//         //push it to final arr
//         newArr.push(testVar2[j]);
//         }
//      }
//      return newArr;

////////REAL ANSWERS////////////////////////



}


//JAMES CODE EXPERIMENT
  //see who doesn't have jimmy in their friend list??
//   let arr = [];
  
//   for(let i = 0; i < array.length; i++){
//       if(!isFriend(name, array[i])){
//           console.log('not a friend!');
//           arr.push(array[i].name);
//       }
//   }
  
//   return arr;
// let nameFriends;
// // put every persons name in the array to subtract from except the name variable
// for (var i = 0; i < array.length; i++){
// if(array[i].name !== name){
// arr.push(array[i].name);
// } else {
//   nameFriends = array[i].friends;
// }
// }
// for (var i = 0; i < nameFriends.length; i++){
// if (arr.includes(nameFriends[i])){
//   arr.splice(i, 1);
// }
// }
// console.log(arr);
// return arr with everything thats in nameFriends taken out


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for(let i = 0; i < array.length; i++){
    if(object.hasOwnProperty(array[i])){
      delete object[array[i]];
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  //obj to count occurences
  let testObj = {};
  let testArr = [];
  //loop thru input arr
  for(let i = 0; i < array.length; i++){
  //if the testobj has a prop of the arrays curr ind
    if(!testObj.hasOwnProperty(array[i])){
      //bump its value by one;
       testObj[array[i]] = 1;
       testArr.push(array[i]);
    } else {
        testObj[array[i]] += 1;
    } 
 
  }
  return testArr;
}

  
 //itteration draft with double loop
 
  //test variable idea
//   let testVar = array[0];
//start the new array at the first index of the input 
//array to check for duplicates, return at end
 // let newArr = [array[0]];
 //loop over the input array starting at 2nd index 
 // for(let i = 1; i < array.length; i++){
    //for each itteration of the outer/input array,
    //inner loop goes thru entire new array to check for the
    //item at current itaration of input/outer loop
    //try a console.log to not break the loop?
    //for(let j = 0; j < newArr.length; j++){
    //if current itteration doesn't equal outer generation    
        // if(newArr[j] === array[i]){
  //   //push console log to move to next itt
  //         console.log(newArr[j] + ' is already here');
  //       } else {
  //         //otherwise push it to next arr;
  //         newArr.push(array[i]);
  //       }
  //   }
  // }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}