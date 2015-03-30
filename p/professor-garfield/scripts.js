var p = document.getElementsByClassName('.profile-image');

$(document).ready(function() {

	$(this).onclick = function() {
	 $(this).onhover.call(p);
};
});