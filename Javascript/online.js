/*We've defined a function countOnline which accepts one argument,
allUsers. Use a for...in statement inside this function to loop 
through the allUsers object and return the number of users whose
online property is set to true*/

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  
  function countOnline(allUsers) {
    let no_users=0
    for (let user in allUsers){
      if(allUsers[user].online===true){
        no_users++;
      }
    }
    return no_users;
  }
  
  console.log(countOnline(users));