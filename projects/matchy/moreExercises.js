var data = { results: [ 
  { animal: 'fox', 
    numberOfLegs: 4, 
    says: '??', 
    matches: 
      [ 'dog', 'cat', 'pig']
  },
  { animal: 'frog', 
    numberOfLegs: 4, 
    says: 'ribbit', 
    matches: 
      [ 'whale', 'cat', 'pig', 'rabbit']
  },
  { animal: 'dog', 
    numberOfLegs: 4, 
    says: 'woof', 
    matches: 
      [ 'dog', 'fish', 'pig']
  },
  { animal: 'human', 
    numberOfLegs: 2, 
    says: 'hello', 
    matches: 
      [ 'frog', 'duck', 'pig']
  },
  { animal: 'fish', 
    numberOfLegs: 0, 
    says: 'blub', 
    matches: 
      [ 'dog', 'rabbit', 'frog', 'human']
  },
  { animal: 'whale', 
    numberOfLegs: 0, 
    says: 'aaarrrhhh', 
    matches: 
      [ 'duck', 'fish', 'pig']
  },
  { animal: 'duck', 
    numberOfLegs: 2, 
    says: 'quack', 
    matches: 
      [ 'fish', 'human', 'chicken', 'whale']
  }
  ]};

  // Use the .length property to console.log the length of the results
  // array.
console.log('results length: ', data.results.length);
  // Imagine you want are making a search results page,
  // (console.log) all of the animal names in order.

  // Next, Capitalize the first letter of each name and put a label
  // Your end result should look like this:
  // Name: Fox
  // Name: Dog
  // Name: Frog
  // Name: Human
  // Name: Fish
  // etc.

  // Next, console.log the number of legs next to their name.
  // Your end result should look like this:
  // Name: Fox, Legs: 4
  // Name: Dog, Legs: 4
  // Name: Frog, Legs: 4
  // Name: Human, Legs: 2
  // Name: Fish, Legs: 0
  
   data.results.forEach(animal =>{
   var animalName = `${animal.animal[0].toUpperCase()}${animal.animal.slice(1)}`;
   console.log('Name: ', animalName + ', Legs: ', animal.numberOfLegs);
 });

  // Now, redo the steps in the previous one and 
  // take this data and add it to an array with nested objects. 
  // Your result should look like this:
  
  var finArr = data.results.map(a => {
     var animalName = `${a.animal[0].toUpperCase()}${a.animal.slice(1)}`;
     return {
       'Name': animalName,
       'Legs': a.numberOfLegs
     };
  });
  
  console.log(finArr);
  
  
  var results = [
  {Name: 'Fox', Legs: 4},
  {Name: 'Dog', Legs: 4},
  {Name: 'Frog', Legs: 4},
  {Name: 'Human', Legs: 2},
  {Name: 'Fish', Legs: 0}
  ];

console.log(results);
  // For another search result, console.log the animals whose matches are 'fish'

  // Next, add it to an array called 'FishMatches'. 
  //this one 

var FishMatches = [];
var arr = data.results;

for(let i = 0; i < arr.length; i++){
  var testObj = {};
  for(let j = 0; j < arr[i].matches.length; j++){
    if(arr[i].matches[j] === 'fish'){
      testObj.name = arr[i].animal;
      testObj.index = i;
      FishMatches.push(testObj);
    }
  };
}

//map draft of FishMatches
  // var FishMatches = data.results.filter(a => {
  //   for(let i = 0; i < a.matches.length; i++){
  //     if(a.matches[i] === 'fish'){
  //       return {
  //         'name': a.name,
  //         'index': i 
  //       };
  //     } 
  //   }
  // });
  console.log(FishMatches);
  // Make each match an object with two properties 'name' and 'index'
  // Your end result should look like this:
  var fishMatches = [{name: 'dog', index: 2}, {name: 'whale', index:5}];
  // console.log(fishMatches);