function sumAll(arr) {
    arr.sort((a,b)=>a -b);
    let sum=0;
    let last=arr[arr.length-1];
    let first=arr[0];
    
    for (let j=first;j<=last;j++){
        sum+=j;
    }
    console.log(sum);
    return sum;
  }
  
  sumAll([1, 4]);