function getSplitName(personName) {
  if (typeof personName != "string") {
    console.log("ERROR: This type of characters is string not a number");
    return;
  }

  const names = personName.split(" "); // [fname, mname, lname]

  let person = {
    fullName: null,
    midleName: null,
    lastName: null,
  };
  if (typeof personName != "string") {
    return "ERROR: This type of characters is string not a number";
  }
  if (names.length > 3) {
    return "ERROR: This function is only 3 characters";

    if (names.length == 3) {
      person.fullName = names[0];
      person.midleName = names[1];
      person.lastName = names[2];
    } else if (names.length == 2) {
      person.fullName = names[0];
      person.lastName = names[1];
    } else {
      person.fullName = names[0];
    }
  } else {
    return person;
  }
} 


console.log(getSplitName("Priskila Siwi Aryni"));
console.log(getSplitName("Priskila Siwi"));
console.log(getSplitName("Priskila"));
console.log(getSplitName("Priskila Siwi Aryni hehe"));
console.log(getSplitName(0));
