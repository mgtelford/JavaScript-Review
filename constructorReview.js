//Create a Animal Constructor that has the following parameters. species, name, legs, color, 
//food (which is an array of foods they can eat).

var Animal = function (species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns 
//it (not in constructor form) that has the following parameters. name, age, height, gender


var person = function(name, age, height, gender) {
   return {
    name: name,
    age: age,
    height: height,
    gender: gender
   }  
}


//Create a animal array and a person array.

var animalArray = [];
var personArray = [];


//Create two instances of Animal and push those into your animal array

  animalArray.push(new Animal("cat", "lion", "four", "yellow", ["red meat", "lion treat"]));
  animalArray.push(new Animal("mammal", "dog", "four", "brown", ["dog food", "cats"]));


//Create two instances of person and push those into your person array.

var bob = {name: "Bob", age: "25", height: "5'5", gender: "male"};
personArray.push(person("suzy", "30", "5'2", "female"));
personArray.push(person("Bob", "25", "5'11", "male"));

person.push(bob);

//Now we want every instance of Animal to have a eat method. This method will choose a random item
// in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function () {
    var foodIndex = Math.floor((Math.random() * this.food.length));
    console.log(this.name + " ate " + this.food[foodIndex]);
}

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

  No. The person function is not a constructor function so every instance of person does not connect the prototype



/*
  1) What happens when you use the 'new' keyword to call a Constructor function? "The 'new' keyword triggers the relationship with the prototype"
  2) What's a good way to describe the keyword 'this'   "this" points to the object which is connected to the prototype.
  3) Can a normal function which creates an object and then returns that object use the prototype? Unfortunately, not.
  4) What happens if you forget to use 'new' when calling a constructor? It will not connect to the prototype
*/