function checkPositive(arr) {
    return arr.some(function(index){
      return index>0;
    });
  }
  
  checkPositive([1, 2, 3, -4, 5]);