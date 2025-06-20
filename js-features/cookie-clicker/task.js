const cookieImage = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter");
let totalClicks = 0;
let isLarge = false;
cookieImage.onclick = function() {
	totalClicks++;
	clickCounter.textContent = totalClicks;
	if (isLarge) {
		cookieImage.setAttribute("width", "200");
	} else {
		cookieImage.setAttribute("width", "250");
	}

	isLarge = !isLarge;
};