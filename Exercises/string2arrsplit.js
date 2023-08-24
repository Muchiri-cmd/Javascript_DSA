function splitify(str) {
    return str.split(/[^A-Za-z]/).filter(Boolean);
  }
  
  splitify("Hello World,I-am code");