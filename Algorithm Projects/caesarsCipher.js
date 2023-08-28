function rot13(str) {
    let string="";
    //use ASCII an table for reference
    for (let letter of str){
      let asciiNum=letter.charCodeAt();//get ascii code for letter
      if(asciiNum>=65 && asciiNum<=77){//upto midpoint
        string+=String.fromCharCode(asciiNum+13);//move 13 steps right n add letter to string
      }else if (asciiNum>=78 && asciiNum<=90){//from midpoint
        string+=String.fromCharCode(asciiNum-13);//move 13 steps left n add letter to string
      }else{
        string+=letter;
      }
      
    }
    return string;
  }
  
  rot13("SERR PBQR PNZC");