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
  var alphabetCopy = alphabetArray.slice(0);
  var quizOn = $('#quizOn');
  var quizOff = $('#quizOff');
  var quiz = "off";
  var random;
console.log(alphabetCopy.length);

reset();

//reset screen to original format
function reset() {
  change(pauseBtn, playBtn);
  change(textOnBtn, textOffBtn);
  change(quizOn, quizOff);
  index = 0;
  text = "off";
  quiz = "off";
  imageLetter.html(" ");
  letterBox.val("");
  letterBox.attr("placeholder", "Type Word Here");
  imgBox.attr('src', "images/play.png");
  alphabetCopy = alphabetArray.splice(0);
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

function quizGame() {
  quiz = "on"
  quizLetter = "";
  random = Math.floor(Math.random() * alphabetCopy.length);
  console.log(random);
  quizLetter = Object.keys(alphabetCopy[random]);
  console.log(quizLetter);
  imgBox.attr('src', alphabet[quizLetter]);
  // if (alphabetCopy.length < 1) {
  //   var alphabetCopy = alphabetArray;
  // }
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
  letterBox.val("");
  letterBox.attr("placeholder", "Enter letter here");
  quiz = "on";
  quizGame();
});

letterBox.on('keyup', function() {
  var letterInput;
  console.log(quiz);

  if (quiz === "on") {
    letterInput = [letterBox.val()];
    console.log(letterInput);
    console.log(quizLetter);
    if (quizLetter === letterInput) {
      console.log(true);
      alphabetCopy.splice(random, 1);
      letterBox.val("");
      letterBox.attr("placeholder", "Enter letter here");
      quizGame();
    }
    else {
      letterBox.val("");
      letterBox.attr("placeholder", "Try again!");
    }
  }
  else {
    letterInput = letterBox.val().slice(-1);
    imgBox.attr('src', alphabet[letterInput]);
    showLetter(imageLetter, letterInput);
  }
});

});
