var elem = document.getElementById("view3d");

window.addEventListener("deviceorientation", function(e) {
  // remember to use vendor-prefixed transform property
  var z = e.alpha;
  var x = e.beta;
  var y = e.gamma;

  if (x >  120) { x =  120};
  if (x <  30) { x = 30};

  document.getElementById("z").innerHTML = z;
  document.getElementById("x").innerHTML = x;
  document.getElementById("y").innerHTML = y;

  elem.style.transform =
    /*"rotateZ(" + ( z - 180 ) + "deg) " +*/
    "rotateX(" + ( x + 90 ) + "deg) ";
    /*"rotateY(" + ( -y ) + "deg)";*/
});