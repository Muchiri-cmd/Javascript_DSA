/* Return true if the string in the first element of the array contains all 
of the letters of the string in the second element of the array.*/

function mutation(arr) {
    const list1=arr[0].toLowerCase();
    const list2=arr[1].toLowerCase();
  
    for( let i=0;i<list2.length;i++){//check if list 2 has list1 elems
      if (list1.indexOf(list2[i])===-1){
        return false;
      }
    }
    return true;
  }
  
  mutation(["hello", "hey"]);