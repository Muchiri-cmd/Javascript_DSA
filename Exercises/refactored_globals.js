/*Rewrite the code so the global array bookList is not 
changed inside either function. The add function should add the 
given bookName to the end of the array passed to it and return a 
new array (list). The remove function should remove the given 
bookName from the array passed to it.*/

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList,bookName) {
  let newArr=[...bookList,bookName];
  return newArr;
}

function remove(bookList,bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    let newArr=[...bookList.slice(0,book_index),...bookList.slice(book_index+1,)];
    return newArr;
    }
}