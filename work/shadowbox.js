$(document).ready(function() {
$(".background").click(function(){
    $(".shadowbox1").slideUp("linear");
    $(".background").fadeOut("fast");
  });

  $(".close-it").click(function(){
    $(".shadowbox1").slideUp("linear");
    $(".background").fadeOut("fast");
  });


  //errrr

  $(".button1").click(function(){
    $(".shadowbox1").slideDown("linear");
  });
  $(".button1").click(function(){
    $(".background").fadeIn("fast");
  });