$(document).on('ready', function() {
  var $emojis = $('#emojis');
  var $words = $('#words');

$(emojis).hide();
// $(words).hide();
var h = $('.h');

//v3 fade out letter then change before returning


// function changeHE() {
//   $(h).fadeOut(1500);
//   $(h).html("<img src='emojis/hand2.png'>");
//   $(h).fadeIn(1500);
// }

// function changeHL() {
//   $(h).fadeOut(3000);
//   $(h).html("H");
//   $(h).fadeIn(3000);
// }
// setInterval(function() {
//   changeHL();
//   changeHE();
//  }, 1000);



//v2 trying to change each letter separately, but they don't switch back
// function changeH() {
//   if($('#hL').html("H")) {
//     $('#hL').html("<img src='emojis/hand2.png'>");
//   }
//   else if ($('#hL').html("<img src='emojis/hand2.png'>")) {
//     $('#hL').html("H");
//   }
// }

// function changeA() {
//   if($('#aL').html("A")) {
//     $('#aL').html("<img src='emojis/hand1.png'>");
//   }
//   else {
//     $('#aL').html("A");
//   }
// }
// function changeN() {
//   if($('#nL').html("N")) {
//     $('#nL').html("<img src='emojis/hand3.png'>");
//   }
//   else {
//     $('#nL').html("N");
//   }
// }

// function changeD() {
//   if($('#dL').html("D")) {
//     $('#dL').fadeOut(1200);
//     $('#dL').html("<img src='emojis/hand4.png'>");
//     $('#dL').fadeIn(1200);
//   }
//   else {
//     $('#dL').html("D");
//   }
// }
// function changeY() {
//   if($('#yL').html("Y")) {
//     $('#yL').html("<img src='emojis/hand5.png'>");
//   }
//   else {
//     $('#yL').html("Y");
//   }
// }

// setInterval(function() { changeH() }, 400);
// setInterval(function() { changeA() }, 1500);
// setInterval(function() { changeN() }, 800);
// setInterval(function() { changeD() }, 1200);
// setInterval(function() { changeY() }, 1000);



//v1 all images and words change simultaneously
// function fadeInOut() {
//     $(words).delay(800).fadeOut(1200);
//     $(words).delay(1200).fadeIn(1200);
//     $(emojis).delay(1100).fadeIn(2200);
//     $(emojis).delay(5000).fadeOut(2200);

// }

// setInterval(function() { fadeInOut() }, 2000);

});



