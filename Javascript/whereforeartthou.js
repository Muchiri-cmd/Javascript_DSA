/*Make a function that looks through an array of objects (first argument)
and returns an array of all objects that have matching name and value
pairs (second argument). Each name and value pair of the source object has 
to be present in the object from the collection if it is to be included
in the returned array.*/
function whatIsInAName(collection, source) {
  
    //filter collection based on if object matches source property n value
    var result=collection.filter(function(obj){
      for(var key in source){
        //check if object property matches source's property
        if(!obj.hasOwnProperty(key) || obj[key] !==source[key]){
          return false;
        }
      }
      return true;
    })
    return result;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });