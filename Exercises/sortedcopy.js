const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let newArr=[];
  newArr=newArr.concat(arr);
  newArr.sort(function(a,b){
    return a - b;
  });
  return newArr;
}

nonMutatingSort(globalArray);