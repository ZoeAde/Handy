$(document).on('ready', function() {

//global variables
  var letterBox = $('.input__input');
  var imgBox = $('.img img');
  var pauseBtn = $('#pauseBtn');
  var playBtn = $('#playBtn');
  var textOnBtn = $('#textOn');
  var textOffBtn = $('#textOff');
  var index = 0;
  var timer;
  var imageLetter = $('#imageLetter');
  var text = "on";
  var letter;
  // var alphabet = alphabetOn;

pauseBtn.hide();
textOffBtn.hide();
imageLetter.html(" ");
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

//DONE - when text is entered in input box, the corresponding image appears in imgBox
letterBox.on('keyup', function() {
  var letterInput = letterBox.val().slice(-1);
  var src = alphabet[letterInput];
  imgBox.attr('src', src);
  if (text === "on") {
    imageLetter.html(letterInput);
  }
  else if (text === "off") {
    imageLetter.html(" ");
  }
});

// DONE - reset button clears images
  var resetBtn = $('#resetBtn');
  resetBtn.on('click', function() {
    pauseBtn.hide();
    playBtn.show();
    index = 0;
    letterBox.val("");
    letterBox.attr("placeholder", "Type Word Here");
    imgBox.attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Asl_alphabet_gallaudet_ann.svg/600px-Asl_alphabet_gallaudet_ann.svg.png");
    clearInterval(setInterval(function() {playWords();}, 1200));
  });

// play button plays through array index in header and pause button becomes available
playBtn.on('click', function() {
  playBtn.hide();
  pauseBtn.show();
  setTimer();
});

//pause btn stops setInterval on given index
pauseBtn.on('click', function() {
  pauseBtn.hide();
  playBtn.show();
  setTimer();
});

//plays through letters in input field by changing main image src to given letters img src
function playWords() {
  var wordArray = letterBox.val();
  letter = wordArray[index];
  imgBox.attr("src", alphabet[letter]);
  if (text === "on") {
    imageLetter.html(letter);
  }
  else if (text === "off") {
    imageLetter.html(" ");
  }

  index++;
  console.log("index:" + index);
  if (index >= wordArray.length) {
    index=0;
  }

}

function setTimer() {
  if (timer) {
    clearInterval(timer);
    timer=null;
  }
  else {
    timer = setInterval(function() {playWords();}, 1200);
  }
}

//on click, turn letter images off
textOnBtn.on('click', function() {
  textOnBtn.hide();
  textOffBtn.show();
  text = "off";
});

//on click, turn letter images on
textOffBtn.on('click', function() {
  textOffBtn.hide();
  textOnBtn.show();
  text = "on";
});


});
