// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    if(Array.isArray(value)){
        return 'array';
    } else if(value === null){
        return 'null';
    }
    return typeof value;
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    //checks if array is an arr OR number under zero
    if(!Array.isArray(array) || number < 0){
    //returns empt arr    
        return [];
    //but if there if there is no number arg OR the number number arg isn't a num    
    } else if(number === undefined || typeof number !== 'number'){
        //return only first item in arr
        return array[0];
    }
    //function returns slice performed on input arr from index 0 and number passed in
    //since it will be 1 higher than the amnt of items to extract from begining of arr
    //also covers returning entire arr if number > arr.length
    return array.slice(0, number);
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
    //checks if array is an arr OR number under zero
    if(!Array.isArray(array) || number < 0){
    //returns empt arr    
        return [];
    //but if there is no number arg OR the number number arg isn't a num    
    } else if(number === undefined || typeof number !== 'number'){
        //return only last item in arr
        return array[array.length - 1];
        //if number greater than arr.length
    } else if(number > array.length){
        //return entire arr
        return array;
    }
    //return slice on array with the start/first set to number subtracted
    //from the length in the array so it starts to include the item at that number index
    return array.slice(array.length - number);
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    //loop thru arr
    for(let i = 0; i < array.length; i++){
        //return index number if match found
        if(array[i] === value){
            return i;
        }
    }
    //function default is to return -1
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    if(_.indexOf(array, value) !== -1){
        return true;
    }
    return false;
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
  if(Array.isArray(collection)){
      for(let i = 0; i < collection.length; i++){
          func(collection[i], i, collection);
      }
  } else {
      for (let k in collection){
          func(collection[k], k, collection);
      }
  }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
//new arr to be returned 
   let newArr = [];
  //loop over input arr
   for(let i = 0; i < array.length; i++){
  //if calling _.indexOf with the duplicate-free arr passed in and the current itt element passed in
  //equals -1/isn't already in the array, push it in
       if(_.indexOf(newArr, array[i]) === -1){
           newArr.push(array[i]);
       }
   }
   return newArr;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
       let newArr = [];
      _.each(array, (element, index, array) => {
        if (func(element, index, array)) {
          newArr.push(element);
        }
      })
      return newArr;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

  _.reject = function(collection, test) {
    //return the call of _.filter on the collection arg and a callback(e, i, c)
    return _.filter(collection, (element, index, collection) => {
    //returns an array of elements which when passed to the callback as args, 
    //the callback evaluates to false; 
      return !test(element, index, collection);
     });
  };

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

  _.partition = function(array, func){
    //set variable equal to the result of calling filter 
    //passing in <array> and the callback <func>
      let arr1 = _.filter(array, (e, i, c) => {
          return func(e);
      });
      //set variable equal to the result of calling reject 
    //passing in <array> and the callback <func>
      let arr2 = _.reject(array, (e, i, c) => {
          return func(e);
      });
      //return array containg both variables from above.
      return [arr1, arr2];
  };

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

   _.map = function(collection, func){
     let newArr = [];
     _.each(collection, (e, i, c) => {
         newArr.push(func(e, i, c));
     });
     return newArr;
   };
   
   
   
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop){
    //return array that is map called on input array
    return _.map(array, (e, i, c) => {
        //grab each e[prop];
        return e[prop];
    });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    //test var to be switched to false if eval of func called on e is falsy 
    //returned at end
    let testVar = true;
   //edge case: if there is no function
    if(func === undefined){
    //iteratively loop over arr
    //would this have failed with a test for an object?/hardcoded for test?
        for(let i = 0; i < collection.length; i++){
            //if element at current index falsy, change variable
            if(!collection[i]){
                testVar = false;
              }
         }
    //default for !func edgecase     
    } else {
        //call each
        _.each(collection, (e, i, c) => {
        //if e is undefined OR
        //the result of func falled on the is falsy 
        if(e === undefined || !func(e, i, c)) {
             //testVar switches to false
             testVar = false;
            }
         });
    };
    //return final val of testv
    return testVar;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){
     //test var to be switched to true if eval of func called on e is truthy 
    //returned at end
    let testVar = false;
   //edge case: if there is no function
    if(func === undefined){
    //iteratively loop over arr
        for(let i = 0; i < collection.length; i++){
            //if element at current index truthy, change variable
            if(collection[i]){
                testVar = true;
              }
         }
    //default for !func edgecase     
    } else {
        //call each
        _.each(collection, (e, i, c) => {
        //if the result of func falled on the is truthy 
        if(func(e, i, c)) {
             //testVar switches to true
             testVar = true;
            }
         });
    };
    //return final val of testv
    return testVar;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(collection, func, seed){
    //call each
    _.each(collection, (e, i, c) => {
       //if seed is undefined
       if(seed === undefined){
            //seed set to first element
            seed = e;
       } 
       //else
       else {
      //set seed equal to the eval of func with seed, e, i passed in  
      seed = func(seed, e, i);
       }
    });
    //return final val of seed
    return seed;
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

  _.extend = function (obj1, obj2, ...otherObjs){
    return Object.assign(obj1, obj2, ...otherObjs);
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
