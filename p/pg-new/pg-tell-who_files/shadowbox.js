//close 'em

$(document).ready(function() {
$(".sb-background").click(function(){
    $(".shadowbox1").slideUp("linear");
    $(".sb-background").fadeOut("fast");
  });

$(".sb-background").click(function(){
    $(".shadowbox2").slideUp("linear");
    $(".sb-background").fadeOut("fast");
  });

$(".sb-background").click(function(){
    $(".shadowbox3").slideUp("linear");
    $(".sb-background").fadeOut("fast");
  });

$(".sb-background").click(function(){
    $(".shadowbox4").slideUp("linear");
    $(".sb-background").fadeOut("fast");
  });

$(".sb-background").click(function(){
    $(".shadowbox5").slideUp("linear");
    $(".sb-background").fadeOut("fast");
  });

$(".sb-background").click(function(){
    $(".shadowbox6").slideUp("linear");
    $(".sb-background").fadeOut("fast");
  });

  //open 'em

 /*
  Get this to work later ...

  $(".open"+ (parseInt(this.className.slice(-1)) + 1).click(function(){
    $(".shadowbox"+ (parseInt(this.className.slice(-1)) + 1).slideDown("linear");
  });
  $(".open"+ (parseInt(this.className.slice(-1)) + 1).click(function(){
    $(".sb-background").fadeIn("fast");
  });*/

  $(".open1").click(function(){
    $(".shadowbox1").slideDown("linear");
  });
  $(".open1").click(function(){
    $(".sb-background").fadeIn("fast");
  });

    $(".open2").click(function(){
    $(".shadowbox2").slideDown("linear");
  });
  $(".open2").click(function(){
    $(".sb-background").fadeIn("fast");
  });

  $(".open3").click(function(){
    $(".shadowbox3").slideDown("linear");
  });
  $(".open3").click(function(){
    $(".sb-background").fadeIn("fast");
  });

  $(".open4").click(function(){
    $(".shadowbox4").slideDown("linear");
  });
  $(".open4").click(function(){
    $(".sb-background").fadeIn("fast");
  });

  $(".open5").click(function(){
    $(".shadowbox5").slideDown("linear");
  });
  $(".open5").click(function(){
    $(".sb-background").fadeIn("fast");
  });

  $(".open6").click(function(){
    $(".shadowbox6").slideDown("linear");
  });
  $(".open6").click(function(){
    $(".sb-background").fadeIn("fast");
  });


//back and forth

  $(".sb-next1").click(function(){
    $(".shadowbox1").slideUp("linear");
      setTimeout(function() {
      $(".shadowbox2").slideDown("linear");
  }, 0500);
  });

  $(".sb-next2").click(function(){
    $(".shadowbox2").slideUp("linear");
      setTimeout(function() {
      $(".shadowbox3").slideDown("linear");
  }, 0500);
  });
  $(".sb-back1").click(function(){
    $(".shadowbox2").slideUp("linear");
      setTimeout(function() {
      $(".shadowbox1").slideDown("linear");
  }, 0500);
  });

  $(".sb-next3").click(function(){
    $(".shadowbox3").slideUp("linear");
      setTimeout(function() {
      $(".shadowbox4").slideDown("linear");
  }, 0500);
  });
  $(".sb-back2").click(function(){
    $(".shadowbox3").slideUp("linear");
      setTimeout(function() {
      $(".shadowbox2").slideDown("linear");
  }, 0500);
  });

  $(".sb-next4").click(function(){
    $(".shadowbox4").slideUp("linear");
      setTimeout(function() {
      $(".shadowbox5").slideDown("linear");
  }, 0500);
  });
  $(".sb-back3").click(function(){
    $(".shadowbox4").slideUp("linear");
      setTimeout(function() {
      $(".shadowbox3").slideDown("linear");
  }, 0500);
  });

  $(".sb-next5").click(function(){
    $(".shadowbox5").slideUp("linear");
      setTimeout(function() {
      $(".shadowbox6").slideDown("linear");
  }, 0500);
  });
  $(".sb-back4").click(function(){
    $(".shadowbox5").slideUp("linear");
      setTimeout(function() {
      $(".shadowbox4").slideDown("linear");
  }, 0500);
  });

  $(".sb-back5").click(function(){
    $(".shadowbox6").slideUp("linear");
      setTimeout(function() {
      $(".shadowbox5").slideDown("linear");
  }, 0500);
  });


/*dropdown menu*/
$( "#f, #fh" ).click(function() {
  $( ".fiction-examples" ).slideToggle( "fast" );
  });
$( "#nf, #nfh" ).click(function() {
  $( ".non-fiction-examples" ).slideToggle( "fast" );
  });


  });


