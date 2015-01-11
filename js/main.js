// On page load-up
var navbar = [c0, c1, c2, c3, c4, c5, c6];
var navlinks = [l0, l1, l2, l3, l4, l5, l6];
var navpage = [p0, p1, p2, p3, p4, p5, p6];

$(document).ready(function() {
    // Welcome init
    $('.fadeIn').css({opacity: 0});
    $('.fadeUp').css({marginTop: 50, opacity: 0});

    // Navbar init
    for(var i = 0; i < 7; i++) {
    	navbar[i] = document.getElementById("c" + i.toString());
    	navlinks[i] = document.getElementById("l" + i.toString());
    	navpage[i] = document.getElementById("p" + i.toString());
    }

    var scrolled = Math.floor($(window).scrollTop() / 139);
    if(scrolled < 0) scrolled = 0; //anchor
    var circleSize = [];
    var fontSize = [];

    for(var i = 0; i < 7; i++) {
    	circleSize.push(circleResize(scrolled, i));
    	fontSize.push(fontResize(scrolled, i));
    	$(navbar[i]).stop().animate({width: circleSize[i], 
    		height: circleSize[i], opacity: (circleSize[i] - 8)/100}, 25);
    	$(navlinks[i]).stop().animate({width: circleSize[i], height: circleSize[i]}, 25);
    	$(navpage[i]).stop().animate({height: circleSize[i], 
    		 fontSize: fontSize[i] + "%", opacity: (circleSize[i] + 25)/100}, 25);
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

function fontResize(anchor, position) {
	return 150*Math.pow(Math.E,(-Math.pow(position - anchor, 2))/12) + 95;
}

$(window).scroll(function () { 
    var scrolled = Math.floor($(window).scrollTop() / 250);
    if(scrolled < 0) scrolled = 0; //anchor
    var circleSize = [];
    var fontSize = [];

    for(var i = 0; i < 7; i++) {
    	circleSize.push(circleResize(scrolled, i));
    	fontSize.push(fontResize(scrolled, i));
    	$(navbar[i]).stop().animate({width: circleSize[i], 
    		height: circleSize[i], opacity: (circleSize[i] - 8)/100}, 25);
    	$(navlinks[i]).stop().animate({width: circleSize[i], height: circleSize[i]}, 25);
    	$(navpage[i]).stop().animate({height: circleSize[i], 
    		 fontSize: fontSize[i] + "%", opacity: (circleSize[i] + 25)/100}, 25);
    }
});