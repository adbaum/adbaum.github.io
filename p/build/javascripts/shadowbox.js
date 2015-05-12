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


setTimeout(function(){ 
  $( ".beginning" ).slideDown();
  }, 0600);


$('#middle').click(
       function(){ $(this).removeClass('shake') }
)
$('#end').click(
       function(){ $(this).removeClass('shake2') }
)

$('#glow').click(
       function(){ $(this).removeClass('shake') }
)


$( "#beginning, #bh" ).click(function() {
  $( ".beginning" ).slideToggle( "fast" );
  });
$( "#middle, #mh" ).click(function() {
  $( ".middle" ).slideToggle( "fast" );
  });
$( "#end, #eh" ).click(function() {
  $( ".end" ).slideToggle( "fast" );
  });


/*hover effect*/
$(document).ready(function() {
    $('.hover').bind('touchstart', function(e) {
        e;
        $(this).addClass('hover_effect');
    });
    $('.hover').bind('touchstart', function(f) {
        f;
        $(this).removeClass('hover_effect');
    });
});


  });


$(document).ready(function() {
  $('.linkdetails').hide();

  $('.link').click(function() {
    $('.linkdetails').hide();
    $('.linkdetails[data-link=' + $(this).data('link') + ']').fadeIn({
        width: '200px'
    }, 300);
  });
});

/*gallery-space
$(document).ready(function() {
  $(".brainstorm-button1").click(function(){
    $("#gs").addClass("brainstorm1");
  $(".brainstorm-button2, .brainstorm-button3, .brainstorm-button4, .brainstorm-button5, .brainstorm-button6").click(function(){
    $("#gs").removeClass("brainstorm1");
  
  $(".brainstorm-button2").click(function(){
    $("#gs").addClass("brainstorm2");
  $(".brainstorm-button1, .brainstorm-button3, .brainstorm-button4, .brainstorm-button5, .brainstorm-button6").click(function(){
    $("#gs").removeClass("brainstorm2");

  $(".brainstorm-button3").click(function(){
    $("#gs").addClass("brainstorm3");
  $(".brainstorm-button1, .brainstorm-button2, .brainstorm-button4, .brainstorm-button5, .brainstorm-button6").click(function(){
    $("#gs").removeClass("brainstorm3");

  });*/
;
