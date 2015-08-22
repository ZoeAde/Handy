  var text = "off";
  var letter;
  var index = 0;
  var timer;
  var quiz = "off";
  var random;
  var incorrect;
  var alphabetCopy = alphabetArray.slice(0);
  var speed = 1900;

//on and off for overlapping css buttons
function change(hide, show) {
  hide.hide();
  show.show();
}

//show or hide letter text above letter image
function showLetter(target, letter) {
  if (text === "on") {
    target.html(letter);
  }
  else if (text === "off") {
    target.html(" ");
  }
}

function startValues() {
  text = "off";
  quiz = "off";
  index = 0;
  incorrect = 0;
  speed = 1900;
}
