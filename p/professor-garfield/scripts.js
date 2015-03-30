var p = document.getElementsByClassName('.profile-image');

$(document).ready(function() {

	p.onclick = function() {
	 $(this).onhover.call(p);
};
});