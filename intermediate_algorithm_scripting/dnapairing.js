/* The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, 
find the base pair character. Return the results as a 2d array*/

function pairElement(str) {
    const basePairs={
      A:"T",
      T:"A",
      C:"G",
      G:"C"
    };
    return str.split("").map(char=> [char,basePairs[char]]);
  }
  
  let res=pairElement("GCG");
  console.log(res);