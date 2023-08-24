//Regex matches Eleanor or Franklin D. Roosevelt

let myString = "Eleanor Roosevelt";
let myRegex = /^(Franklin|Eleanor)(\s\w+(\s\w\.\s\w+)?|\sD\.)?\sRoosevelt$/; // Change this line
let result = myRegex.test(myString);