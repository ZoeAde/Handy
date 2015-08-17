// $(document).on('ready', function() {

// //On Click Functions:
// // play button plays through array index in header and pause button becomes available
// playBtn.on('click', function() {
//   change(playBtn, pauseBtn);
//   setTimer(1200);
// });

// //pause btn stops setInterval on given index
// pauseBtn.on('click', function() {
//   change(pauseBtn, playBtn);
//   setTimer(1200);
// });

// resetBtn.on('click', function() {
//   reset();
// });

// textOnBtn.on('click', function() {
//   change(textOnBtn, textOffBtn);
//   text = "off";
// });

// //on click, turn letter images on
// textOffBtn.on('click', function() {
//   change(textOffBtn, textOnBtn);
//   text = "on";
// });

// //on click, turn letter images off
// quizOn.on('click', function() {
//   change(quizOn, quizOff);
//   quiz = "off";
// });

// //on click, turn letter images on
// quizOff.on('click', function() {
//   change(quizOff, quizOn);
//   // change(textOn, textOff);
//   letterBox.val("");
//   letterBox.attr("placeholder", "Enter letter here");
//   quiz = "on";
//   text = "off";
//   imageLetter = "";
//   quizGame();
// });

// letterBox.on('keyup', function() {
//   var letterInput;
//   if (quiz === "on") {
//     letterInput = letterBox.val();
//     if (quizLetter === letterInput) {
//       console.log(true);
//       alphabetCopy.splice(random, 1);
//       letterBox.val("");
//       letterBox.attr("placeholder", "Enter letter here");
//       quizGame();
//     }
//     else {
//       letterBox.val("");
//       letterBox.attr("placeholder", "Try again!");
//     }
//   }
//   else {
//     letterInput = letterBox.val().slice(-1);
//     imgBox.attr('src', alphabet[letterInput]);
//     showLetter(imageLetter, letterInput);
//   }
// });

// });
