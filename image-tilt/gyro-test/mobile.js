var elem = document.getElementById("view3d");

window.addEventListener("deviceorientation", function(e) {
  // remember to use vendor-prefixed transform property
  var z = e.alpha;
  var x = e.beta;
  var y = e.gamma;


  if (x >  60) { x =  60};
  if (x < -60) { x = -60};

  elem.style.transform =
    "rotateZ(" + ( z - 180 ) + "deg) " +
    "rotateX(" + ( x + 90 ) + "deg) " +
    "rotateY(" + ( -y ) + "deg)";
});