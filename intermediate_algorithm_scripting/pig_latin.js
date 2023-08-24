/*Translate the provided string to Pig Latin. Input strings are 
guaranteed to be English words in all lowercase.*/


function translatePigLatin(str) {
  let word=str;
  let vowels=["a","e","i","o","u"];

  if (vowels.includes(str[0])){
    word+="way";
  }else {
    let indexFirstVowel=-1;
    for (let i=0;i<str.length;i++){
      if (vowels.includes(str[i])){
        indexFirstVowel=i;
        break;
      }
    }
    if (indexFirstVowel!==-1){
      const consonantCluster=str.slice(0,indexFirstVowel);
      const restOfWord=str.slice(indexFirstVowel);
      word=restOfWord+consonantCluster+"ay";
    }else{
      word+="ay";
    }
  }

  return word;
}

translatePigLatin("consonant");