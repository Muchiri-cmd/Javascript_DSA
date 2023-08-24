/*Use Closure to Protect Properties Within an Object from 
Being Modified Externally*/

function Bird() {
    let weight = 15;//var within constructor function.changes scope to local
  
    this.getWeight=function(){
      return weight;
    };
  }