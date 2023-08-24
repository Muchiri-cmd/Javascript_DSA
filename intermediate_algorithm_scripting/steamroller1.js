function steamrollArray(arr) {
  
  while(
  arr.some(dataPoint => {
    return Array.isArray(dataPoint);
  })
)//while there is an array in the arr,perform arr.flat()
  {
    arr=arr.flat();
    
  }
 
  return arr;
  //return arr.flat().flat().flat();
}

let result=steamrollArray([1, [2], [3, [[4]]]]);
console.log(result);