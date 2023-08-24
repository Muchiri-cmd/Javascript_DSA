//prints largest number in an array of 4 sub-arrays


function largestOfFour(arr) {
    let largest_number=0;
    for (let i=0;i<arr.length;i++){
      for (let j=0;j<arr[i].length;j++){
        if (arr[i][j]>largest_number){
          largest_number=arr[i][j];
        }
      }
    }
    return largest_number;
  }
  
  let lw=largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  console.log(lw);