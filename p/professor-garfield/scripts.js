$(document).ready(function() {
    var p = document.getElementsByTagName('.profile-image')[0];
	p.onclick = function() {
	 // Trigger the `onhover` event on the paragraph
	 p.onhover.call(p);
};
});