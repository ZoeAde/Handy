$(document).on('ready', function() {

//global variables
  var letterBox = $('.input__input');
  var imgBox = $('.img img');
  var pauseBtn = $('#pauseBtn');
  var index = 0;

pauseBtn.hide();

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
  });

//interval function to determine speed of slideshow
var slideSpeed = function(action, speed) {
  setInterval(function() {action();}, speed);
};

// play button plays through array index in header and pause button becomes available
  var playBtn = $('#playBtn');
  playBtn.on('click', function() {
    playBtn.hide();
    pauseBtn.show();
    slideSpeed(playWords, 1200);
  });

  pauseBtn.on('click', function() {
    clearInterval(slideSpeed());
    pauseBtn.hide();
    playBtn.show();
    // imgBox.attr("src", alphabetArray[currentIndex].img);
  });

function playWords() {
  var wordArray = letterBox.val();
  var letter = wordArray[index];
  imgBox.attr("src", alphabet[letter]);
  index++;
  if (index >= wordArray.length) {
    index=0;
  }
}

//play alphabet through
// function playAlphabet() {
//   imgBox.attr("src", alphabetArray[index].img);
//   index++;
//   if (index >= alphabetArray.length) {
//     index=0;
//   }
//   currentIndex = index;
//   console.log(currentIndex);
// }
});



//make an object with all the images and corresponding letter/number value

//dom onkeydown display image in main focus box, add image to footer

//dom on click reset button, clear footer

//full alphabet view?
