// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  var footer = $('#footer')
  var letterBox = $('.input__input');

  //when text is entered in input box, the corresponding image appears
  letterBox.on('keyup', function() {
    var letter = letterBox.val();
    footer.append(letter);
    letterBox.val("");
    letterBox.attr("placeholder", "");

  });




//reset button clears images/html from footer
  var resetBtn = $('#resetBtn');
  resetBtn.on('click', function() {
    footer.text('');
    letterBox.attr("placeholder", "Type Letter Here");
  });

//play button plays through array index in footer
  var playBtn = $('#playBtn');
  playBtn.on('click', function() {
    //for loop with time delay?
  });

});




//make an object with all the images and corresponding letter/number value

//dom onkeydown display image in main focus box, add image to footer

//dom on click reset button, clear footer

//full alphabet view?
