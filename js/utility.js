  var text = "off";
  var quiz = "off";
  var letter;
  var index = 0;
  var timer;


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
