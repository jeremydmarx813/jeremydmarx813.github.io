// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lowdown-jeremydmarx813');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./jeremydmarx813.github.io/projects/let-s-get-functional/
 */

///TEST FOR CODE ENVY!!!!

var maleCount = function(array) {
    return _.filter(array, (e, i, c) => {
        return e.gender === 'male';
    }).length;
};

var femaleCount = function(array) {
    return _.reduce(array, (seed, e, i) => {
        if(e.gender === 'female'){
            seed++;
        }
        return seed;
    }, 0);
};

var oldestCustomer = function(array) {
    //return the eval of calling reduce on input arr
    //no seed fed, to start on first e
    return _.reduce(array, (seed, e, i) => {
        //if current e.age is > seed.age
        if(e.age > seed.age){
            // return e to become new seed
            return e;
        }
        // return seed.name
        return seed;
    }).name;
};

var youngestCustomer = function(array) {
     //return the eval of calling reduce on input arr
    //no seed fed, to start on first e
    return _.reduce(array, (seed, e, i) => {
        //if current e.age is < seed.age
        if(e.age < seed.age){
            // return e to become new seed
            return e;
        }
        // return seed.name
        return seed;
    }).name;
};

var averageBalance = function(array) {
    //BALANCES ARE STRINGS!!!
     //return the eval of calling reduce on input arr divided by arr length for avg
    //feed seed of 0 to specify number data type
    return _.reduce(array, (seed, e, i) => {
       // return seed + current obj.balance
        return seed + e.balance;
    }, 0) / array.length;
};

var firstLetterCount = function(array, letter) {
    return _.reduce(array, (seed, e, i) => {
        if(e.name[0].toLowerCase() === letter.toLowerCase()){
            seed++;
        }
        return seed;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter) {
    //make sure store data, cause each returns undefined
    _.each(array, (e, i, c) => {
        if(e.name === customer){
            return firstLetterCount(e.friends, letter);
        }
    });
};

var friendsCount = function(array, name) {
    //return reduce on input arr
    //feed empty arr as seed
    return _.reduce(array, (seed, e, i) => {
   //each to itt over each ele friends
        _.each(e.friends, (innerE, innerI, innerC) => {
        //if inner name appears in itt, push outer name to
            if(innerE.name === name){
                seed.push(e.name);
            }
        });
        return seed;
    }, []);
};

var topThreeTags = function(array) {
    //create arr to be returned at end
    let finArr = [];
    //make obj of all tags and counts of how many times they appear 
    //use reduce on input arr, plug in empt obj as seed
    let testObj = _.reduce(array, (seed, e, i) => {
        //ise each to itt over each object in input arr
        _.each(e.tags, (innerE, innerI, innerC) => {
            //if prop isnt set on seed, set it
            //else bump by 1, return seed at end
            if(!seed[innerE]) {
                seed[innerE] = 1;
            } else {
                seed[innerE]++;
            }
        });
        return seed;
    }, {});
    //test var to compare value in obj loop below
    let testVar;
    //loop thru testObj
    for(let k in testObj){
    //delete all tags that appear once
     if(testObj[k] === 1){
         delete testObj[k];
    //if a test var has been set
     }  else if(testVar){
        //if the current val is greater than or equal to test Var, unshift and reset testVar
          if(testObj[k] >= testVar){
              finArr.unshift(k);
              testVar = testObj[k];
          }
    //if on first itt, push to fin arr, set tetsVar
      } else {
          finArr.push(k);
          testVar = testObj[k];
      }    
    }
    //return first 3 indexes of finArr
    return finArr.slice(0, 3);
};

var genderCount = function(array) {
    //return reduce called on array, pass in empty obj as seed to be returned
    return _.reduce(array, (seed, e, i) => {
        //if the prop of current elements gender isnt set, set it
        //if it is, bump up by one
        if(!seed[e.gender]){
            seed[e.gender] = 1;
        } else {
            seed[e.gender]++;
        }
        //return seed at end of each itt?
        return seed;
    }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
