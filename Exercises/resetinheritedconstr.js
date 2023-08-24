function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line.constructors
//duck.constructor && beagle.constructor should return respective 
Bird.prototype.constructor=Bird;
Dog.prototype.constructor=Dog;



let duck = new Bird();
let beagle = new Dog();