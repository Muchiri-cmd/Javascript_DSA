const currencyUnit={
    "PENNY":1,
    "NICKEL":5,
    "DIME":10,
    "QUARTER":25,
    "ONE":100,
    "FIVE":500,
    "TEN":1000,
    "TWENTY":2000,
    "ONE HUNDRED":10000
  }
  function checkCashRegister(price, cash, cid) {
    let changeSum=cash*100-price*100;//get change to return 
    let changeSumCheck=changeSum;//copy
    let change=[];
    let status='';
  
    let cidSum=0;//all money in register drawer
    let filteredCid=cid.filter(elem=>elem[1]!==0).reverse();//cash in drawer minus denominations absent.Largest to smallest
  
    //calculate if money is enough to give change
    //go through all money in cash register starting from 100 bills
    filteredCid.forEach(elem=>{
      //console.log(elem);//currency denomination and how many at cash register
      let curr=elem[0];//currency
      //console.log(curr);
      let currSum=elem[1]*100;//value of that currency *100(whole numbers)valu
      //console.log(currSum)
      cidSum+=currSum;//sum of money in drawer
      
      
      let amount=0;//amount of change given
      while(changeSum>=currencyUnit[curr]&&currSum>0){//how many of that denomination in register
        amount+=currencyUnit[curr];
        changeSum-=currencyUnit[curr];//reduce ChangeSum after giving out
        currSum-=currencyUnit[curr]//taking from register
      }
      if (amount!==0){
        change.push([curr,amount/100]);//only the denominations to return 
      }
  
    });
    if (changeSum>0){
      status="INSUFFICIENT_FUNDS";
      change=[];
    }else if(changeSum==0 && changeSumCheck==cidSum){//if (changeSum==money in register)
      status="CLOSED";
      change=cid;
    }else{
      status="OPEN";
    }
    return {'status':status,'change':change};
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
