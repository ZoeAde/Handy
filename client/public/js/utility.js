  var text = "off";
  var letter;
  var index = 0;
  var timer;
  var quiz = "off";
  var random;
  var incorrect;
  var alphabetCopy = alphabetArray.slice(0);
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
  var speed;
  var play = "off";

//fade in title, intro, and text input box
function introFadeIn() {
  $('.img').hide();
  $('#introWords').hide();
  $('#introTitle').hide();
  $('.input__input').hide();
  $('#introTitle').delay(800).fadeIn(1500);
  $('#introWords').delay(2000).fadeIn(1200);
  $('.input__input').delay(2000).fadeIn(1200);
}

//return to original values on reset
function startValues() {
  text = "off";
  quiz = "off";
  menu = "open";
  play = "off";
  index = 0;
  incorrect = 0;
}

//reset screen to original format
function reset() {
  $('#incorrect').hide();
  change(pauseBtn, playBtn);
  change(textOnBtn, textOffBtn);
  change(quizOn, quizOff);
  imageLetter.html("");
  letterBox.val("");
  letterBox.attr("placeholder", "Type Word Here");
  alphabetCopy = alphabetArray.slice(0);
  $('#slow').css('color', '#FFCF31');
  clearInterval(timer);
  startValues();
  returnIntro();
}

//return to home screen
function returnIntro() {
  $('.img').hide();
  $('.intro').show();
}

//return to image screen
function returnImg() {
  $('.img').show();
  $('.intro').hide();
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

//when the menu is closed, text and speed will collaspse
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("active");
  if (menu === "open") {
    showLetter(imageLetter, "");
    toggleSpeed();
    menu = "closed";
  }
  else {
    menu = "open";
  }
});

//speed subnav collapse
function toggleSpeed() {
  $('#toggleDemo').removeClass("collapse in").addClass("collapse");
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
  imgBox.attr("src", "../" + alphabet[letter]);
  showLetter(imageLetter, letter);
  index++;
  if (index >= wordArray.length) {
    index=0;
  }
}

//starts letter recognition game
function quizGame() {
  if (alphabetCopy.length < 1) {
    $('#incorrect').html("All done! You answered incorrectly " + incorrect + " times.");
    $('#incorrect').fadeIn(400);
    $('#incorrect').delay(5000).fadeOut(400, function() {
      reset();
    });
  }
  else {
  quiz = "on";
  quizLetter = "";
  random = Math.floor(Math.random() * alphabetCopy.length);
  quizLetter = Object.keys(alphabetCopy[random]).toString();
  imgBox.attr('src', "../" + alphabet[quizLetter]);
  returnImg();
  }
}
