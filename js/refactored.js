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
  var incorrect;
  var speedBtns = $('.speed');
  var speed = 1900;
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
  imageLetter.html("");
  letterBox.val("");
  letterBox.attr("placeholder", "Type Word Here");
  imgBox.attr('src', "images/play.png");
  alphabetCopy = alphabetArray.slice(0);
  incorrect = 0;
  $('#slow').css('background-color', '#FFCF31')
  clearInterval(timer);
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
  setTimer(speed);
  console.log(speed);
});

//pause btn stops setInterval on given index
pauseBtn.on('click', function() {
  change(pauseBtn, playBtn);
  setTimer(speed);
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
  clearInterval(timer);
  change(pauseBtn, playBtn);
  change(textOnBtn,textOffBtn);

  letterBox.val("");
  letterBox.attr("placeholder", "Enter letter here");
  quiz = "on";
  text = "off";
  imageLetter.html("");
  quizGame();
});

letterBox.on('keyup', function() {
  var letterInput;
  if (quiz === "on") {
    letterInput = letterBox.val();
    if (quizLetter === letterInput) {
      alphabetCopy.splice(random, 1);
      letterBox.val("");
      letterBox.attr("placeholder", "Enter letter here");
      quizGame();
    }
    else {
      incorrect ++;
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

$('#slow').on('click', function() {
  speedBtns.css('background-color', 'transparent');
  $(this).css('background-color', '#FFCF31');
  speed = 1900;
})

$('#medium').on('click', function() {
  speedBtns.css('background-color', 'transparent');
  $(this).css('background-color', '#FFCF31');
  speed = 1200;
})

$('#fast').on('click', function() {
  speedBtns.css('background-color', 'transparent');
  $(this).css('background-color', '#FFCF31');
  speed = 800;
})

});
