function dropElements(arr, func) {
  //iterate through each element starting from first element 
  let result=[];
  for (let i=0;i<arr.length;i++){
    if (func(arr[i])){
      return arr.slice(i);
    }
  }
  return result;
}

let result=dropElements([1, 2, 3], function(n) {return n < 3; });
console.log(result);