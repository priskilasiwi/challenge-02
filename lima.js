// function getSplitName(personName) {
//   if (typeof personName != "string") {
//     console.log("ERROR: This type of characters is string not a number");
//     return;
//   }

//   const names = personName.split(" "); // [fname, mname, lname]

//   let person = {
//     fullName: null,
//     midleName: null,
//     lastName: null,
//   };
//   if (typeof personName != "string") {
//     return "ERROR: This type of characters is string not a number";
//   }
//   if (names.length > 3) {
//     return "ERROR: This function is only 3 characters";

//     if (names.length == 3) {
//       person.fullName = names[0];
//       person.midleName = names[1];
//       person.lastName = names[2];
//     } else if (names.length == 2) {
//       person.fullName = names[0];
//       person.lastName = names[1];
//     } else {
//       person.fullName = names[0];
//     }
//   } else {
//     return person;
//   }
// } 


// console.log(getSplitName("Priskila Siwi Aryni"));
// console.log(getSplitName("Priskila Siwi"));
// console.log(getSplitName("Priskila"));
// console.log(getSplitName("Priskila Siwi Aryni hehe"));
// console.log(getSplitName(0));

function getSpillName(personName){
    if(isNaN(personName)){
        const splitName = personName.split(" ");
        let firstName = splitName[0];
        let middleName = splitName[1];
        let lastName = splitName[2];

        if(personName.split(" ").length > 3){
            console.log("Error");
        } else if (personName.split(" ").length === 2){
            return {
                firstName,
                middleName: null,
                lastName: splitName[1]
            }
        } else if (personName.split(" ").length === 1){
            return {
                firstName,
                middleName: null,
                lastName: null
            }
        } else {        
            return {
                firstName,
                middleName,
                lastName
            }
        }
    } else{
        return "ERROR: Inputan harus berupa string";
    }
}


console.log(getSpillName("Priskila Siwi Aryni Sibatubara"));
console.log(getSpillName("Priskila Siwi Aryni"));
console.log(getSpillName("Priskila Siwi"));
console.log(getSpillName("Priskila"));
console.log(getSpillName(0));
