/* Modify the function using indexOf() so that it returns true 
if the passed element exists on the array,else false*/
function quickCheck(arr, elem) {
    return arr.indexOf(elem) !==-1;  
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));