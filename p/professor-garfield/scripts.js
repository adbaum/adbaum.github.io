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