function smallestCommons(arr) {
    //find max and min values in the array
    const max=Math.max(...arr);
    const min=Math.min(...arr);
  
    //helper function to calculate GCD
    function gcd(a,b){
      return b===0 ? a : gcd(b,a % b);
    }
  
    //helper function to calculate LCM
    function lcm(a,b){
      return (a*b)/gcd(a,b);
    }
    //initialize LCM with maximum value
    let lcmValue=max;
    //loop through range of numbers to find LCM
    for  (let i=max-1;i>=min;i--){
      lcmValue=lcm(lcmValue,i);
    }
    return lcmValue;
  }
  
  smallestCommons([1,5]);