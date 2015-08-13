$(document).on('ready', function() {

//global variables
  var letterBox = $('.input__input');
  var imgBox = $('.img img');

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
    letterBox.val("");
    letterBox.attr("placeholder", "Type Word Here");
    letterArray = [];
    imgBox.attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Asl_alphabet_gallaudet_ann.svg/600px-Asl_alphabet_gallaudet_ann.svg.png");
  });

// play button plays through array index in header and pause button becomes available
  var playBtn = $('#playBtn');
  playBtn.on('click', function() {
  //pause btn appears in place of play btn
    if (playBtn.text() === 'Play') {
      // playBtn.text('Pause');
      // unhide pause button
      // hide play button
      setInterval(function() {playSlides();}, 1500);
    }
    else {
      playBtn.text('Play');

    }

  });


//play back images to imgBox
  //   for (var i = 0; i < letterArray.length; i++) {
  //   console.log(letterArray[i]);
  //   setInverval(imgBox.attr('src', letterArray[i]), 5000);
  //   }
  // });

//test1
// function playSlideshow() {
//   i = 0;
//   $('img').attr("src", alphabetArray[i].img);
//   console.log($('img').attr("src"));
//   i++;
//   if (i = alphabetArray.length) {
//     i = 0;
//   }
// }


//test2
var index = 0;
function playSlides() {
  imgBox.attr("src", alphabetArray[index].img);
  index++;

  if (pauseBtn.click()){
       // debugger;
    }

  if (index >= alphabetArray.length) {
    index=0;
  }
}




});



//make an object with all the images and corresponding letter/number value

//dom onkeydown display image in main focus box, add image to footer

//dom on click reset button, clear footer

//full alphabet view?
