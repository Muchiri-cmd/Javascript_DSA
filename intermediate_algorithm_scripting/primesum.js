/*Rewrite sumPrimes so it returns 
the sum of all prime numbers that are less than or equal to num.*/

function isPrime(number){
  let counter=2;
  while (counter<number){
    if(number%counter===0){
      return false;
    }
    counter++;
  }
  return true;
}

let sum=0;
function sumPrimes(num) {
  let counter=2;
  while(counter<=num){
    if (isPrime(counter)){
      sum+=counter;
      //console.log(counter)
    }
    counter++;
  }
  return sum;
}

console.log(sumPrimes(977));