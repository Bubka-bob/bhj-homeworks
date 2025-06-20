document.addEventListener('DOMContentLoaded', function() {
	const reveals = document.querySelectorAll('.reveal');
	window.addEventListener('scroll', checkReveals);

	function checkReveals() {
		reveals.forEach(reveal => {
			let bounding = reveal.getBoundingClientRect();
			if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
				reveal.classList.add('reveal_active');
			} else {
				reveal.classList.remove('reveal_active');
			}
		});
	}
});