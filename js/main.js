$(document).on('ready', function() {
  console.log('sanity check!');
  var header = $('#header');
  var letterBox = $('.input__input');
  var imgBox = $('.img img');
  var letterArray = [];
  var tempImage;

//when text is entered in input box, the corresponding image appears in imgBox and the type box empties
  letterBox.on('keyup', function() {
    var letterInput = letterBox.val();
    var src = alphabet[letterInput];
    tempImage = imgBox.attr('src', 'images/'+src);
    letterArray.push(tempImage);
    $('#header div').append("<img class='header' src=images/"+src+">");
    console.log(letterArray);

    letterBox.val("");
    letterBox.attr("placeholder", "");
  });

//reset button clears images/html from footer
  var resetBtn = $('#resetBtn');
  resetBtn.on('click', function() {
    header.text('');
    letterBox.attr("placeholder", "Type Letter Here");
    imgBox.attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Asl_alphabet_gallaudet_ann.svg/600px-Asl_alphabet_gallaudet_ann.svg.png");
  });

//play button plays through array index in header and pause button becomes available
  var playBtn = $('#playBtn');
  playBtn.on('click', function() {
    setTimeout(function() {
      for (var i = 0; i < letterArray.length; i++) {
        letterArray[i];
      };

    }, 5000);
//change play button to pause function
  });

});


















//make an object with all the images and corresponding letter/number value

//dom onkeydown display image in main focus box, add image to footer

//dom on click reset button, clear footer

//full alphabet view?
