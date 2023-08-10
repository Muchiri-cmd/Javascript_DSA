function titleCase(str) {
    const sentence=str.toLowerCase().split(' ');
    for (let i=0;i<sentence.length;i++){
      let word=sentence[i];
      sentence[i]=word[0].toUpperCase()+word.slice(1).toLowerCase();
    }
    return sentence.join(" ");
  }
  
  titleCase("I'm a little tea pot");