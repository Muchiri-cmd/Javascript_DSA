function sumFibs(num) {
  let sum=0;
  let prev=0;
  let curr=1;

  while(curr<=num){
      //adding to sum 
      if (curr%2!==0){//check if no is odd
        sum+=curr;
      }
     //calculate next fibonacci number
      let next=curr+prev;
      prev=curr;
      curr=next;
  }
  return sum;
}
let result=sumFibs(4);
console.log(result);