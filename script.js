$(document).ready(function () {
    $('.hamburger').click(function (e) {
        e.preventDefault();
        var x = $('.navbar');
        if (x.hasClass('responsive') == false) {
            x.addClass("responsive");
            $('.hamburger').html('&#10799;');
        } else {
            x.removeClass("responsive");
            $('.hamburger').html('&#9776;');
        }
    });
});