function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();

	var element = document.getElementById("bg");
	element.classList.add("tickle-hand");
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;

    var element = document.getElementById("bg");
	element.classList.remove("tickle-hand");
}