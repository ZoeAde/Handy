$(document).on('ready', function() {

// imageLetter.html(" ");
// change(pauseBtn, playBtn);
// change(textOffBtn, textOnBtn);

//on and off for overlapping css buttons
// function change(hide, show) {
//   hide.hide();
//   show.show();
// }

//show or hide letter text above letter image
// function showLetter(letter) {
//   if (text === "on") {
//     imageLetter.html(letter);
//   }
//   else if (text === "off") {
//     imageLetter.html(" ");
//   }
// }

//sets speed of image slideshow
// function setTimer(speed) {
//   if (timer) {
//     clearInterval(timer);
//     timer=null;
//   }
//   else {
//     timer = setInterval(function() {playWords();}, speed);
//   }
// }

//play slideshow through images of word letters
// function playWords() {
//   letter = letterBox.val()[index];
//   imgBox.attr("src", alphabet[letter]);
//   showLetter();
//   index++;
//   if (index >= letterBox.val().length) {
//     index=0;
//   }
// }

//ON CLICK FUNCTIONS:

// play button plays through array index in header and pause button becomes available
// playBtn.on('click', function() {
//   change(playBtn, pauseBtn);
//   setTimer();
// });

//pause btn stops setInterval on given index
// pauseBtn.on('click', function() {
//   change(pauseBtn, playBtn);
//   setTimer();
// });

//reset button clears images and letter text
// resetBtn.on('click', function() {
//   change(pauseBtn, playBtn);
//   index = 0;
//   letterBox.val("");
//   letterBox.attr("placeholder", "Type Word Here");
//   imgBox.attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Asl_alphabet_gallaudet_ann.svg/600px-Asl_alphabet_gallaudet_ann.svg.png");
//   clearInterval(setInterval(function() {playWords();}, 1200));
//   });

//on click, turn letter images off
// textOnBtn.on('click', function() {
//   change(textOnBtn, textOffBtn);
//   text = "off";
// });

// //on click, turn letter images on
// textOffBtn.on('click', function() {
//   change(textOffBtn, textOnBtn);
//   text = "on";
// });

// //when text is entered in input box, the corresponding image appears in imgBox
// letterBox.on('keyup', function() {
//   var letterInput = letterBox.val().slice(-1);
//   imgBox.attr('src', alphabet[letterInput]);
//   showLetter(letterInput);
// });

});
