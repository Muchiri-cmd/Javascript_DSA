function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly=function(){
  return "Alas, this is a flightless bird."
}

let penguin = new Penguin();
console.log(penguin.fly());