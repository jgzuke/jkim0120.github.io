// For mobile
function changeMobile() {
	var width = window.innerWidth;
	if (window.innerWidth < 768) {
		document.getElementById('jump').className = "grid_12";
		document.getElementById('greeting').className = "grid_12";
		document.getElementById('greeting2').className = "fadeIn grid_12";
	}
	else {
		document.getElementById('jump').className = "grid_6";
		document.getElementById('greeting').className = "grid_6";
		document.getElementById('greeting2').className = "fadeIn grid_6";
	}
}
changeMobile();
window.onresize = changeMobile;
window.onresize = changeMobile;

// Load fade-in Welcome
$(document).ready(function() {
    $('.fadeIn').css({marginTop: 50, opacity: 0});
});

$(window).load(function() {
    $('.fadeIn').each(function(i) {
       $(this).delay((i + 1) * 750).animate({marginTop: 0, opacity: 1}, 1250);
    });
});