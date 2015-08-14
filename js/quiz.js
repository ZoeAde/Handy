var quizOn = $('#quizOn');
var quizOff = $('#quizOff');
var newAlphabet = alphabet;
var keys = Object.keys(newAlphabet);

function quiz() {
    text = "off";
    var random = Math.floor(Math.random() * newAlphabet.length);
    var randomLetter = keys[random];
    var src = newAlphabet[randomLetter];
    imgBox.attr('src', src);
}

function quizAnswer() {
  if (newAlphabet.length > 0) {
    if (letterBox.val(randomLetter)) {
        delete newAlphabet.randomLetter;
        quiz();
      }
  }
  else {
    alert("Congrats on completing the lightning round! You really know your stuff.");
    quiz = "off";
    //reset function
  }
}


quizOn.on("click", function() {
  quizAnswer();
})
