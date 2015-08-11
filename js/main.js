$(document).on('ready', function() {
  console.log('sanity check!');
  var header = $('#header');
  var letterBox = $('.input__input');
  var imgBox = $('.img img');
  var letterArray = [];

//when text is entered in input box, the corresponding image appears in imgBox and the type box empties
  letterBox.on('keyup', function() {
    var letterInput = letterBox.val();
    var src = alphabet[letterInput];
    imgBox.attr('src', 'images/'+src);
    letterArray.push('images/'+src);
    $('#header div').append("<img class='header' src=images/"+src+">");

    letterBox.val("");
    letterBox.attr("placeholder", "");
  });

//when header images pass one line, begin replacing images at index 0 but dont replace items in array;




//reset button clears images/html from footer
  var resetBtn = $('#resetBtn');
  resetBtn.on('click', function() {
    header.text('');
    letterBox.attr("placeholder", "Type Letter Here");
    imgBox.attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Asl_alphabet_gallaudet_ann.svg/600px-Asl_alphabet_gallaudet_ann.svg.png");
  });

// play button plays through array index in header and pause button becomes available
  // var playBtn = $('#playBtn');
  // playBtn.on('click', function() {
  //   console.log(letterArray);
  //   for (var i = 0; i < letterArray.length; i++) {
  //       console.log(letterArray[i]);
  //       setTimeout(imgBox.attr('src', letterArray[i]), 10000);
  //     }
    // });
    // });
//change play button to pause function




});

















//make an object with all the images and corresponding letter/number value

//dom onkeydown display image in main focus box, add image to footer

//dom on click reset button, clear footer

//full alphabet view?
