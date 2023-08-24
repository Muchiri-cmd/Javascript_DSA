//Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
    const binaryArr=str.split(' ');
    const translatedArr=binaryArr.map(binary => String.fromCharCode(parseInt(binary,2)));
   const sentence=translatedArr.join('');
 
 
   return sentence;
 }
 
 let result=binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
 console.log(result);