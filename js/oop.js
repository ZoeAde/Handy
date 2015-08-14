//CLASS:
//make alphabet class
//class has play/pause status
//class has letter on/off status
//class has letter
//class has img


//METHODS:
//show image when key is entered method
//play word method (plays back letters in input)
//play alphabet method (plays through entire alphabet continuously)
//pause method (stops play method at current index)
//reset method
//quiz method that shows alphabet without letters and requires input to match (change letter status to off), checks answers once letter is in input


//QUESTIONS:
//how does setInterval respond to play/pause status?
//does each letter need to be a new instance of alphabet class?




































$(document).on('ready', function() {

//global variables
  var letterBox = $('.input__input');
  var imgBox = $('.img img');
  var letterArray = [];

var Letters = function(letter, src) {
  this.letter = letter;
  this.src = src;
  this.status = 'off';
};
//reset button clears images
Letters.prototype.reset = function() {
  letterBox.val("");
  letterBox.attr("placeholder", "Type Word Here");
  letterArray = [];
  imgBox.attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Asl_alphabet_gallaudet_ann.svg/600px-Asl_alphabet_gallaudet_ann.svg.png");
};

var resetBtn = $('#resetBtn');
resetBtn.on('click', function() {
  reset();
});
//



//when text is entered in input box, the corresponding image appears in imgBox
Letters.prototype.callImage = function() {
  var key = letterBox.val().slice(-1);
  imgBox.attr('src', src);
}

letterBox.on('keyup', function() {
  callImage();
});
//


//play button start
Letters.prototype.play = function() {
  if (this.status === 'off') {
    this.status = 'on';
    playBtn.text('Pause');
    i=0;
    $('img').attr("src", alphabetArray[i].img);
    console.log($('img').attr("src"));
    i++;
    if (i = alphabetArray.length) {
     i = 0;
    }
  }
};

var playBtn = $('#playBtn');
playBtn.on('click', function() {
    setTimeout(play(), 2000);
  });



});







