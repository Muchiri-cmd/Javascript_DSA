function diffArray(arr1, arr2) {
    const newArr = [];
    //check in array 2 elements in array1
    for (let elem of arr1){
      if (arr2.indexOf(elem)==-1){
        newArr.push(elem);
      }
    }
    //check in array1 elements in array2
    for (let elem of arr2){
      if(arr1.indexOf(elem)==-1){
        newArr.push(elem);
      }
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);