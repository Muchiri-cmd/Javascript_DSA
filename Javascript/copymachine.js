//The function is supposed to return a new array made up of num copies of arr

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      
      newArr.push([...arr]);
      
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));