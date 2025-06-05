let timer = document.getElementById("timer");
const intervalId = setInterval(() => {
	timer.textContent--;
	if (timer.textContent < 0) {
		clearInterval(intervalId);
		alert("Вы победили в конкурсе!");
	}

}, 1000);