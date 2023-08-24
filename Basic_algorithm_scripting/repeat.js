/*Repeat a given string str (first argument) for num times 
(second argument). Return an empty string if num is not a 
positive number. For the purpose of this challenge, do not use 
the built-in .repeat() method.*/

function repeatStringNumTimes(str, num) {
    if (num<=0){
      return '';
    }
    let modded_str='';
    for (let i=0;i<num;i++){
      modded_str+=str;
    }
    return modded_str;
  
  }
  
  repeatStringNumTimes("abc", 3);