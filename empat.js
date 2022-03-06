const checkEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email(validRegex)) {
          return "VALID";
        } else {
          return "INVALID";
        }
      
  };

  console.log(checkEmail('apranata@binar.co.id'));
  console.log(checkEmail('apranata@binar.com'));
  console.log(checkEmail('apranata@binar'));