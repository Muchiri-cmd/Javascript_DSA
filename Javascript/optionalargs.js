function addTogether(a,b) {
  //check if both args are valid
  if (typeof a!=='number' || (b!==undefined && typeof b!=='number')){
    return undefined;
  }
  if (b===undefined){
    return function(c){
      //check if argument to returned function is valid
      if (typeof c !=='number'){
        return undefined;
      }
      return a+c;//return the sum
    };
  } 
  //if both provided 
  return undefined;
}

addTogether(2,3);