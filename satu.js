const changeWord = function(selectedText, changeText, text) {
    if(selectedText === 'mencintai'){
     text = `Andini sangat ${changeText} kamu selamanya`;
     return text;
    };
    if(selectedText === 'bromo'){
     text = `Gunung ${changeText} tak akan mampu menggambarkan besarnya cintaku padamu`;
     return text;
    };
  }
  
  const kalimat1 = "Andini sangat mencintai kamu selamanya";
  const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
  
  console.log(changeWord('mencintai', "membenci", kalimat1));
  console.log(changeWord('bromo', "semeru", kalimat2));