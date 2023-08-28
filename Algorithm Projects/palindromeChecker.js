function palindrome(str) {
    let cleanedString=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();//remove all non alnums
    let reversedString=cleanedString.split('').reverse().join('')
    
    return reversedString === cleanedString;//palindrome true or false 
  }
  
  palindrome("A man, a plan, a canal. Panama");