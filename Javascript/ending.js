/*Check if a string (first argument, str)
ends with the given target string (second argument, target).*/

function confirmEnding(str, target) {
    let substring=str.slice(-target.length);//counts from end of str
    if (substring===target){
      return true
    }
    return false;
  }
  
  confirmEnding("Bastian", "n");
  
  
  //substring(startindex,endindex)creates substr upto endindex-1
  //substr(startIndex,length)new str from start w defined length(handles -ve)
  //slice(startIndex,endIndex)-same as substring(handles -ve)
  
  //slice vs substr(-ve)=actual pos to start extra vs no of chars to exlude from end