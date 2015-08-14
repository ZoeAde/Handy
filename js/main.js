$(document).on('ready', function() {

//global variables
  var letterBox = $('.input__input');
  var imgBox = $('.img img');
  var pauseBtn = $('#pauseBtn');
  var playBtn = $('#playBtn');
  var textOnBtn = $('#textOn');
  var textOffBtn = $('#textOff');
  var imageLetter = $('#imageLetter');
  var resetBtn = $('#resetBtn');

reset();

//reset screen to original format
function reset() {
  change(pauseBtn, playBtn);
  change(textOnBtn, textOffBtn);
  change(quizOn, quizOff);
  var index = 0;
  var text = "off";
  var quiz = "off";
  imageLetter.html(" ");
  letterBox.val("");
  letterBox.attr("placeholder", "Type Word Here");
  imgBox.attr('src', "images/play.png");
  clearInterval(timer);
}

//sets speed of image slideshow
function setTimer(speed) {
  if (timer) {
    clearInterval(timer);
    timer=null;
  }
  else {
    timer = setInterval(function() {playWords();}, speed);
  }
}

//plays through letters in input field by changing main image src to given letters img src
function playWords() {
  var wordArray = letterBox.val();
  letter = wordArray[index];
  imgBox.attr("src", alphabet[letter]);
  showLetter(imageLetter, letter);
  index++;
  if (index >= wordArray.length) {
    index=0;
  }
}

// change button border color on hover
$('button').mouseover(function() {
  $(this).css("border-color", "white");
});

$('button').mouseleave(function() {
  $(this).css("border-color", "#FFCF31");
});

//change input border color on hover
$('input').mouseover(function() {
  $(this).css("border-color","#FFCF31");
});

$('input').mouseleave(function() {
  $(this).css("border-color","white");
});

//On Click Functions:

//on click, turn letter images off
// play button plays through array index in header and pause button becomes available
playBtn.on('click', function() {
  change(playBtn, pauseBtn);
  setTimer(1200);
});

//pause btn stops setInterval on given index
pauseBtn.on('click', function() {
  change(pauseBtn, playBtn);
  setTimer(1200);
});

resetBtn.on('click', function() {
  reset();
  clearInterval(setInterval(function() {playWords();}, 1200));
});

textOnBtn.on('click', function() {
  change(textOnBtn, textOffBtn);
  text = "off";
});

//on click, turn letter images on
textOffBtn.on('click', function() {
  change(textOffBtn, textOnBtn);
  text = "on";
});

//on click, turn letter images off
quizOn.on('click', function() {
  change(quizOn, quizOff);
  quiz = "off";
});

//on click, turn letter images on
quizOff.on('click', function() {
  change(quizOff, quizOn);
  quiz = "on";
});

letterBox.on('keyup', function() {
  var letterInput = letterBox.val().slice(-1);
  imgBox.attr('src', alphabet[letterInput]);
  showLetter(ImageLetter, letterInput);
});

// $("#speedSlider").slider({
//   min: 1000,
//   max: 5000,
//   scale: 'logarithmic',
//   step: 100
// });

});
