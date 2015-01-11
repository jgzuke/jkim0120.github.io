$(document).ready(function() {
    // Welcome init
    $('.fadeIn').css({opacity: 0});
    $('.fadeUp').css({marginTop: 50, opacity: 0});

    resizeNavButtons();
});

// Welcome animation
$(window).load(function() {
    $('.fadeIn').delay(700).animate({opacity: 1}, 1200, function(){
       $('.fadeUp').animate({marginTop: 0, opacity: 1}, 900);
    });
});

// Navbar animation
function circleResize(anchor, position) {
	return 32*Math.pow(Math.E,(-Math.pow(position - anchor, 2))/12) + 18;
}

function fontResize(anchor, position) {
	return 150*Math.pow(Math.E,(-Math.pow(position - anchor, 2))/12) + 95;
}
function resizeNavButtons()
{
    var scrolled = $(window).scrollTop() / 180;
    for(var i = 0; i < 7; i++)
    {
        var size = circleResize(scrolled, i);
        var myFontSize = fontResize(scrolled, i);
        $('#c'+i.toString()).height(size);
        $('#c'+i.toString()).width(size);
        document.getElementById('c'+i.toString()).style.opacity = (size - 8)/100;
        $('#l'+i.toString()).height(size);
        $('#l'+i.toString()).width(size);
        $('#p'+i.toString()).height(size);
        document.getElementById('p'+i.toString()).style.fontSize = myFontSize + '%';
    }
}

$(window).scroll(function () { 
    resizeNavButtons();
});