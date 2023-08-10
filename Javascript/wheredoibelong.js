/*Return the lowest index at which a value (second argument)
should be inserted into an array (first argument) once it has 
been sorted. The returned value should be a number*/

function getIndexToIns(arr, num) {
    //sort the array
    const sortedArr=arr.slice().sort((a,b) => a -b )
  
    //Get belonging index
    let index=0;
    while (index < sortedArr.length && num >sortedArr [index]){
      index++;
    }
  
    return index;
  }
  
  getIndexToIns([40, 60], 50);