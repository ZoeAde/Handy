// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  var header = $('#header');
  var letterBox = $('.input__input');

  //when text is entered in input box, the corresponding image appears
  letterBox.on('keyup', function() {
    var letter = letterBox.val();
    header.append(letter);
    letterBox.val("");
    letterBox.attr("placeholder", "");
  });

//not working
  // letterBox.off('click', function() {
  //   letterBox.attr("placeholder", "Type Letter Here");
  // });

//not working
//button hover color change
// $('.btn').hover(function () {
//   $(this).css("color", "#985CFF");
// });

//reset button clears images/html from footer
  var resetBtn = $('#resetBtn');
  resetBtn.on('click', function() {
    header.text('');
    letterBox.attr("placeholder", "Type Letter Here");
  });

//play button plays through array index in footer
  // var playBtn = $('#playBtn');
  // playBtn.on('click', function() {
  //   //for loop with time delay?
  // });

});




//make an object with all the images and corresponding letter/number value

//dom onkeydown display image in main focus box, add image to footer

//dom on click reset button, clear footer

//full alphabet view?
