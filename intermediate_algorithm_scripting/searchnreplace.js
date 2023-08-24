/* Perform a search and replace on the sentence 
using the arguments provided and return the new sentence.*/

function myReplace(str, before, after) {
  //check if first letter of "before" is uppercase
  if (before[0]===before[0].toUpperCase()){
    //capitalize first letter of after
    after=after[0].toUpperCase()+after.slice(1);
  }else{
    after=after[0].toLowerCase()+after.slice(1);
  }

  //use regular expressions to match "before" with word boundaries
 var regex=new RegExp("\\b"+before+"\\b","gi");//matches before word
 return str.replace(regex,after);
}
let res=myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(res);