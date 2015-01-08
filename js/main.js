// For mobile
function changeMobile() {
	var width = window.innerWidth;
	if (window.innerWidth < 768) {
		document.getElementById('jump').className = "grid_12";
		document.getElementById('greeting').className = "grid_12";
	}
	else {
		document.getElementById('jump').className = "grid_6";
		document.getElementById('greeting').className = "grid_6";
	}
}

window.onresize = changeMobile;
window.onresize = changeMobile;