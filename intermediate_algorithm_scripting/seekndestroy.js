/*You will be provided with an initial array (the first argument 
in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same 
value as these arguments.You have to use the arguments object.*/

function destroyer(arr) {
    //get arguments
    const args=Array.from(arguments).slice(1);
  
    //use filter to create new array without values to remove
    return arr.filter(item => !args.includes(item));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);