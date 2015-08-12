$(document).on('ready', function() {

//global variables
  var letterBox = $('.input__input');
  var imgBox = $('.img img');
  var letterArray = [];

//DONE - when text is entered in input box, the corresponding image appears in imgBox
  letterBox.on('keyup', function() {
    var letterInput = letterBox.val().slice(-1);
    var src = alphabet[letterInput];
    imgBox.attr('src', 'images/'+src);
    letterArray.push('images/'+src);
  });

// DONE - reset button clears images
  var resetBtn = $('#resetBtn');
  resetBtn.on('click', function() {
    letterBox.val("");
    letterBox.attr("placeholder", "Type Letter Here");
    letterArray = [];
    imgBox.attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Asl_alphabet_gallaudet_ann.svg/600px-Asl_alphabet_gallaudet_ann.svg.png");
  });

// play button plays through array index in header and pause button becomes available
  var playBtn = $('#playBtn');
  playBtn.on('click', function() {
    for (var i = 0; i < letterArray.length; i++) {
        console.log(letterArray[i]);
        setTimeout(imgBox.attr('src', letterArray[i]), 5000);
    }
  });



//change play button to pause function




});

















//make an object with all the images and corresponding letter/number value

//dom onkeydown display image in main focus box, add image to footer

//dom on click reset button, clear footer

//full alphabet view?
