function findElement(arr, func) {
    let num = 0;
    for (let elem=0;elem<arr.length;elem++){
        if (func(arr[elem])){
          return arr[elem]
        }
    }
    return undefined //if no elem passes the test
      
  }
  
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);