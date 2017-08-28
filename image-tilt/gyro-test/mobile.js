var elem = document.getElementById("view3d");

window.addEventListener("deviceorientation", function(e) {
  // remember to use vendor-prefixed transform property
  elem.style.transform =
    "rotateZ(" + ( e.alpha - 180 ) + "deg) " +
    "rotateX(" + ( e.beta + "deg) "
});