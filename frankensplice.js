/*You are given two arrays and an index.Copy each element of the
first array into the second array, in order.Begin inserting 
elements at index n of the second array.*/

function frankenSplice(arr1, arr2, n) {
    const newArr2=[...arr2]
    //array.splice(start,delete,item1,item2,...)
    newArr2.splice(n,0,...arr1)
    return newArr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);