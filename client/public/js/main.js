$(document).on('ready', function() {

var speedSlider = $('#speedSlide').slider();
introFadeIn();
reset();

$('.input').on("keyup", function() {
  $('.intro').hide();
  $('.img').show();
});


// change button border color on hover
$('a').mouseover(function() {
  $(this).css("background-color", "#404040");
});

$('a').mouseleave(function() {
  $(this).css("background-color", "#252525");
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
  play = "on";
  change(playBtn, pauseBtn);
  speed = $('#speedSlide').slider('getValue');
  console.log("speed" + speed);
  setTimer(speed);
});

//pause btn stops setInterval on given index
pauseBtn.on('click', function() {
  play = "off"
  change(pauseBtn, playBtn);
  setTimer(speed);
});

//reset window
resetBtn.on('click', function() {
  reset();
  returnIntro();
});

//remove text letters from screen
textOnBtn.on('click', function() {
  change(textOnBtn, textOffBtn);
  text = "off";
});

//show text letters on screen
textOffBtn.on('click', function() {
  console.log(quiz);
  toggleSpeed();
  if (quiz === "off") {
    change(textOffBtn, textOnBtn);
    text = "on";
  }
});

//turn quiz off
quizOn.on('click', function() {
  change(quizOn, quizOff);
  quiz = "off";
  reset();
});

//turn quiz on, hide letters, stop slideshow
quizOff.on('click', function() {
  $('.errors').html(incorrect);
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

//when user types in letter, if they are playing the game it will test if right and move on, otherwise it will show the corresponding image
letterBox.on('keyup', function() {
  var letterInput;
  if (quiz === "on") {
    letterInput = letterBox.val().toLowerCase();
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
      $('.errors').html(incorrect);
    }
  }
  else {
    letterInput = letterBox.val().slice(-1).toLowerCase();
    imgBox.attr('src', "../" + alphabet[letterInput]);
    if (menu === "open") {
      showLetter(imageLetter, letterInput);
    }
  }
});


});

