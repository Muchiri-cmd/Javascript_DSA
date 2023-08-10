function findLongestWordLength(str) {
    const words=str.split(' ')//split words not chars!!!
    let lw_length=0;//length of longest word
    
    for(let i=0;i<words.length;i++){
      if(words[i].length>lw_length){
        lw_length=words[i].length
      }
    }
    return lw_length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");