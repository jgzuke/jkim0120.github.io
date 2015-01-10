// On page load-up
var navbar = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9];

$(document).ready(function() {
    // Welcome init
    $('.fadeIn').css({opacity: 0});
    $('.fadeUp').css({marginTop: 50, opacity: 0});

    // Navbar init
    for(var i = 0; i < 10; i++) {
    	navbar[i] = document.getElementById("c" + i.toString());
    }

    var scrolled = Math.floor($(window).scrollTop() / 139);
    if(scrolled < 0) scrolled = 0; //anchor
    var circleSize = [];

    for(var i = 0; i < 10; i++) {
    	circleSize.push(circleResize(scrolled, i));
    	$(navbar[i]).stop().animate({width: circleSize[i], 
    		height: circleSize[i], opacity: (circleSize[i] - 8)/100}, 25);
    }
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

$(window).scroll(function () { 
    var scrolled = Math.floor($(window).scrollTop() / 139);
    if(scrolled < 0) scrolled = 0; //anchor
    var circleSize = [];

    for(var i = 0; i < 10; i++) {
    	circleSize.push(circleResize(scrolled, i));
    	$(navbar[i]).stop().animate({width: circleSize[i], 
    		height: circleSize[i], opacity: (circleSize[i] - 8)/100}, 25);
    }

    /*if(navbar[0].getAttribute("width") < 75 && navbar[0].getAttribute("height") < 75) {
    	$(navbar[0]).stop().animate({opacity: 0}, 50);
    }*/
});