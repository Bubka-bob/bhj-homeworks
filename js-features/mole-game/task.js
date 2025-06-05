lost = 0,
	dead = 0;
const holes = document.querySelectorAll(".hole"), // контейнер с лунками
	deadCounter = document.getElementById("dead"), // элемент для счета попаданий
	lostCounter = document.getElementById("lost"); // элемент для счета промахов

holes.forEach(hole => {
	hole.onclick = function() {
		if (hole.classList.contains("hole_has-mole")) {
			// Попадание по кроту
			dead++;
			deadCounter.textContent = dead;
			deactivateHole(activeHole);
		} else {
			// Промах
			lost++;
			lostCounter.textContent = lost;
		}

		//             // проверка победы или поражения
		if (dead >= 10) {
			alert("Поздравляю! Вы победили!");
			resetGame();
		} else if (lost >= 5) {
			alert("К сожалению, вы проиграли...");
			resetGame();
		}
	};

	function resetGame() {
		desd = 0;
		lost = 0;
		deadCounter.textContent = '0';
		lostCounter.textContent = '0';
		holes.forEach(hole => hole.classList.remove('hole_has-mole'));
	}
});