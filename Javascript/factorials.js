function factorialize(num) {
    if (num<0){
      return -1;//returns error for negative numbers
    }else if(num===0){//base case
      return 1; //base case (factorial of 0=1)
    }else{
      return num*factorialize(num-1);
    }
  }
  
  factorialize(5);