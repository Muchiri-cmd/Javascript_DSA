let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    const requiredNames=["Alan","Jeff","Sarah","Ryan"];
    return requiredNames.every(name => userObj.hasOwnProperty(name));
  }
  
  console.log(isEveryoneHere(users));