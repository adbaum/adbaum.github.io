$(document).ready(function() {
    $('.hover').bind('touchstart', function(e) {
        e;
        $(this).toggleClass('hover_effect');
    });
});