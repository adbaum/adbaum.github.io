$(document).ready(function(){
// Sorry about bad spacing. Also...this is jquery if you didn't notice allready.
                  $(".mm").hover(function(){
                  //On Hover - Works on ios
                      $("p").hide();
                  }, function(){
                      //Hover Off - Hover off doesn't seem to work on iOS
                      $("p").show();
                  })

});