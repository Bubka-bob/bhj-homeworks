 const rotators = document.querySelectorAll('.rotator');
 rotators.forEach((rotator) => {
 	let index = 0;
 	const texts = rotator.children;

 	function changeText() {
 		texts[index].classList.remove('rotator__case_active');
 		index = (index + 1) % texts.length;
 		texts[index].classList.add('rotator__case_active');
 	}
 	setInterval(changeText, 1000);
 });