  var text = "off";
  var letter;
  var index = 0;
  var timer;
  var quiz = "off";
  var random;
  var incorrect;
  var alphabetCopy = alphabetArray.slice(0);
  var speed = 1900;
  var menu = "open";
  var letterBox = $('.input__input');
  var imgBox = $('.img img');
  var pauseBtn = $('#pauseBtn');
  var playBtn = $('#playBtn');
  var textOnBtn = $('#textOn');
  var textOffBtn = $('#textOff');
  var imageLetter = $('#imageLetter');
  var resetBtn = $('#resetBtn');
  var quizOn = $('#quizOn');
  var quizOff = $('#quizOff');
  var speedBtns = $('a');

//return to original values on reset
function startValues() {
  text = "off";
  quiz = "off";
  menu = "open";
  index = 0;
  incorrect = 0;
  speed = 1900;
}

//on and off for overlapping css buttons
function change(hide, show) {
  hide.hide();
  show.show();
}

//show or hide letter text above letter image
function showLetter(target, letter) {
  if (text === "on") {
    target.html(letter.toUpperCase());
  }
  else if (text === "off") {
    target.html(" ");
  }
}

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("active");
  if (menu === "open") {
    showLetter(imageLetter, "");
    menu = "closed";
  }
  else {
    menu = "open";
  }
});

//reset screen to original format
function reset() {
  change(pauseBtn, playBtn);
  change(textOnBtn, textOffBtn);
  change(quizOn, quizOff);
  imageLetter.html("");
  letterBox.val("");
  letterBox.attr("placeholder", "Type Word Here");
  imgBox.attr('src', "images/play.png");
  alphabetCopy = alphabetArray.slice(0);
  $('#slow').css('color', '#FFCF31');
  clearInterval(timer);
  startValues();
}

//sets speed of image slideshow
function setTimer(speed) {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  else {
    timer = setInterval(function() {playWords();}, speed);
  }
}

//plays through letters in input field by changing main image src to given letters img src
function playWords() {
  var word = letterBox.val();
  var wordArray = word.replace(/ /g,'');
  letter = wordArray[index];
  imgBox.attr("src", alphabet[letter]);
  showLetter(imageLetter, letter);
  index++;
  if (index >= wordArray.length) {
    index=0;
  }
}

//starts letter recognition game
function quizGame() {
  if (alphabetCopy.length < 1) {
    alert("You've finished the quiz! You had " + incorrect + " incorrect answers.");
    reset();
  }
  else {
  quiz = "on";
  quizLetter = "";
  random = Math.floor(Math.random() * alphabetCopy.length);
  quizLetter = Object.keys(alphabetCopy[random]).toString();
  console.log(quizLetter);
  imgBox.attr('src', alphabet[quizLetter]);
  }
}
