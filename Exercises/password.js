/*regex that matches passwords greater than 5 chars and has 2
consecutive digits*/

let passWord = "astronaut";
let pwRegex = /^(?=.*\d{2})(?=.*.{6,})/;
let result = pwRegex.test(passWord);