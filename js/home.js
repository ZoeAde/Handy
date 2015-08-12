$(document).on('ready', function() {

  var title = $('#words');
  var h = $(".h");
  var a = $(".a");
  var n = $(".n");
  var d = $(".d");
  var y = $(".y");




//title words slide down window
  // title.hide(0).delay(1000).show('slow');
title.hide();
title.slideDown(3000);

//title words transition in and out as emoji images appear
//$('#words').css( "visibility", "hidden" );
function flipImages() {
  h.toggle()



}








scroll();
function scroll() {
    $(".boxtext").css("bottom", "-300px");
    $(".boxtext").animate({bottom:"600px"}, 50000, scroll);
}




//on click, title disappears and main interactive page appears


});

