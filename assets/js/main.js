$(document).ready(function(){
  mainHeight = window.innerHeight - $(".navbar").height();
  $("#landing").css("min-height", mainHeight);
  $("#intro").css("min-height", window.innerHeight);
  $("#set").css("min-height", window.innerHeight);
  $("#reactions").css("min-height", window.innerHeight);
  $("#project").css("min-height", window.innerHeight);
  $("#tips").css("min-height", window.innerHeight);
  $("#get_involved").css("min-height", window.innerHeight);
  $("#download").css("min-height", window.innerHeight/2);
//  $(".sticker").css("height", $(".sticker").width());
  $(window).resize(function() {
    mainHeight = window.innerHeight - $(".navbar").height();
    $("#landing").css("min-height", mainHeight);
    $("#intro").css("min-height", window.innerHeight);
    $("#set").css("min-height", window.innerHeight);
    $("#reactions").css("min-height", window.innerHeight);
    $("#project").css("min-height", window.innerHeight);
    $("#tips").css("min-height", window.innerHeight);
    $("#get_involved").css("min-height", window.innerHeight);
    $("#download").css("min-height", window.innerHeight/2);
  });
})
