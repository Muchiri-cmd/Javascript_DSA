/* Return an array consisting of the largest number from each 
provided sub-array.For simplicity, the provided array will 
contain exactly 4 sub-arrays.*/


function largestOfFour(arr) {
    let largest_nums=[];
    for (let i=0;i<arr.length;i++){
      let maxInSub=arr[i][0];//initialize max in each sub arr as fisrt elem of each
      for (let j=0;j<arr[i].length;j++){
          if (arr[i][j]>maxInSub){
            maxInSub=arr[i][j]//set max for each sub array to largest
            
          }
      }
      largest_nums.push(maxInSub);
    }
    return largest_nums;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);