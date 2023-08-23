
function steamrollArray(arr) {
  let result=[];

  
  function flattenArr(item) {
    if (!Array.isArray(item)){
      result.push(item);
    }else {
      for(let i=0;i<item.length;i++){//traverses elements even nested
        flattenArr(item[i]);//recursively
      }
    }
  }

  
  flattenArr(arr);
  return result;
}

let result=steamrollArray([1, [2], [3, [[4]]]]);
//console.log(result);