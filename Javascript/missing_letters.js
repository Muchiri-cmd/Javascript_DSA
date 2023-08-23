/* Find the missing letter in the passed letter range and return
it.If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
  for (let i=0;i<str.length-1;i++){
    //get ASCII values of char current and next
    let currentCode=str.charCodeAt(i);
    let nextCode=str.charCodeAt(i+1);
  
  if (nextCode-currentCode>1){
    //return missing letter.Convert ASCII to letter
    return String.fromCharCode(currentCode+1);
  }
 }
 return undefined; //if no missing letter

}

fearNotLetter("abce");