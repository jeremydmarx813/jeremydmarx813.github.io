
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
// animals.push(animal);
// console.log('animals object: ', animals);
var nina = {
    species: 'dog',
    name: 'nina',
    noises: ['bark', 'whine', 'growl']
};

var jerome = { 
    species: 'duck', 
    name: 'jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
  };
  animals.push(nina, jerome);
//   console.log(animals);
  
var leo = {
    species: 'lion',
    name: 'leo',
    noises: ['roar', 'purr']
};

var oliver = {
    species: 'owl',
    name: 'oliver',
    noises: ['hoot', 'whoosh']
};

animals.push(leo, oliver);
console.log('animals obj: ', animals);
console.log('anmls len: ', animals.length);




//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search = function(animals, name){
  for(let i = 0; i < animals.length; i++){
      if(animals[i].name === name){
          return animals[i];
      }
  }  
  return null;
};


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var replace = function(animals, name, replacement) {
  for(let i = 0; i< animals.length; i++){
      if(animals[i].name === name){
          animals[i] = replacement;
      }
  }
  console.log('no replacement found');
};


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var remove = function(animals, name){
      for(let i = 0; i< animals.length; i++){
      if(animals[i].name === name){
         animals.splice(i, 1);
      }
  }
  console.log('name not found, unable to remove');
};

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var add = function(animals, animal) {
for(let i = 0; i < animals.length; i++){
    if(animals[i].name === animal.name){
        return null;
    }
}
  animals.push(animal);
};

//manual add prop function, goes by name for now
var addProp = function(animals, name, prop, propVal){
    //itt over animals
   for(let i = 0; i < animals.length; i++){
       //if animal name equals curr obj name and it has the prop passed in
       if(animals[i].name === name && !animals[i].hasOwnProperty(prop)){
           //set it equal to the propVal arg
           animals[i][prop] = propVal;
       }
   }
};

add(animals, {name: 'bill'});

addProp(animals, 'bill', 'species', 'buffalo');


//friend factory adds friends prop to all animals
var friendFactory = function(animals){
//loop over animals arr
for(let i = 0; i < animals.length; i++) {
    //if there is no friends from on current obj animal
    if(!animals[i].hasOwnProperty('friends')){
    //initialize the prop to an empt arr
        animals[i].friends = [];
    }
    console.log('prop already exists on ', animals[i].name, 'animals at ', i);
  }
};

friendFactory(animals);
console.log(animals);

//generate a friendship by adding a random animal to a random friend
//Is the recursive call slowing this site down? run time optimization? 

var makeFriendship = function(animals){
    //two random people from animals arr
    var friend1 = animals[Math.floor(Math.random() * animals.length)];
    var friend2 = animals[Math.floor(Math.random() * animals.length)];
   //if friend1 is already friends with friend 2 or
   //both people have same name, call the function again
    if(friend1.friends.indexOf(friend2.name) !== -1 ||friend1.name === friend2.name){
        console.log('invalid friend');
        return makeFriendship(animals); 
    }
    //push the friend2 name to friend1 friend arr
   friend1.friends.push(friend2.name); 
};

var friendshipCounter = 0;
while(friendshipCounter < 9){
    makeFriendship(animals);
    friendshipCounter++;
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom, search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
     module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
