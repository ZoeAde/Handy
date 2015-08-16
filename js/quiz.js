// var quizOn = $('#quizOn');
// var quizOff = $('#quizOff');
// var newAlphabet = alphabet;
// var keys = Object.keys(newAlphabet);
// var quiz = "off";
// var quizLetter;


// //on click, turn letter images off
// quizOn.on('click', function() {
//   change(quizOn, quizOff);
//   quiz = "off";
// });

// //on click, turn letter images on
// quizOff.on('click', function() {
//   change(quizOff, quizOn);
//   letterBox.val("Enter the letter pictured above");
//   quiz = "on";
//   quizGame();
// });

// function quizAnswer() {
//   if (newAlphabet.length > 0) {
//     if (letterBox.val(randomLetter)) {
//         delete newAlphabet.randomLetter;
//         quiz();
//       }
//   }
//   else {
//     alert("Congrats on completing the lightning round! You really know your stuff.");
//     quiz = "off";
//     reset();
//   }
// }


// function quizGame() {
//   var random = Math.floor(Math.random() * alphabetCopy.length);
//   console.log(random);
//   quizLetter = Object.keys(alphabetCopy[random]);
//   console.log(quizLetter);
//   imgBox.attr('src', alphabet[keys[quizLetter]]);
//   console.log(alphabetCopy);
//   if (alphabetCopy.length < 1) {
//     var alphabetCopy = alphabetArray;
//   }
// }
