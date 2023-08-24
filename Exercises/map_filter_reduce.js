/* The function should return a new array containing 
the squares of only the positive integers (decimal numbers are not integers)
when an array of real numbers is passed to it */

const squareList = arr => {
    let newArr=arr.filter(num => num>0 && Number.isInteger(num)).map(num => num**2);
    return newArr;
    
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);