$(document).ready(function(){
  mainHeight = window.innerHeight - $(".navbar").height();
  $("#landing").css("min-height", mainHeight);
  $("#intro").css("height", window.innerHeight);
  $("#set").css("height", window.innerHeight);
  $("#reactions").css("height", window.innerHeight);
  $("#project").css("height", window.innerHeight);
  $("#tips").css("height", window.innerHeight);
  $("#involve").css("height", window.innerHeight);
  $("#download").css("height", window.innerHeight/2);
  $(window).resize(function() {
    mainHeight = window.innerHeight - $(".navbar").height();
    $("#landing").css("min-height", mainHeight);
    $("#intro").css("height", window.innerHeight);
    $("#set").css("height", window.innerHeight);
    $("#reactions").css("height", window.innerHeight);
    $("#project").css("height", window.innerHeight);
    $("#tips").css("height", window.innerHeight);
    $("#involve").css("height", window.innerHeight);
    $("#download").css("height", window.innerHeight/2);
  });
})
