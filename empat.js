const isValidPassword = (email) =>{
  if (email != null){
      if(email.search(/[0-9]/) > -1){
          if(email.search(/[A-Z]/) > -1){
              if (email.length > 8){
                  return true;
              }else{
                  return false;
              } 
          }else {
              return false;
          }
      }else{
          return false;
      }
  }else{
      return false;
  }
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());