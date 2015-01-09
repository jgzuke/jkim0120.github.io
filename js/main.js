// Load fade-in Welcome
$(document).ready(function() {
    $('.fadeIn').css({opacity: 0});
    $('.fadeUp').css({marginTop: 50, opacity: 0});
});

$(window).load(function() {
    $('.fadeIn').delay(700).animate({opacity: 1}, 1200, function(){
       $('.fadeUp').animate({marginTop: 0, opacity: 1}, 900);
    });
});

