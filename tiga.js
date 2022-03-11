const checkEmail = (email) => {
  const regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  const regex = new RegExp(/@/);
  if (email != null) {
    if (email.match(regexEmail)) {
      return "Valid";
    } else {
      if (regex.test(email)) {
        return "Invalid";
      } else {
        return "Error: format email salah";
      }
    }
  } else {
    return "Error: Email tidak boleh kosong";
  }
};

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkEmail());
