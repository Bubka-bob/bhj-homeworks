document.addEventListener('DOMContentLoaded', () => {
	document.body.addEventListener('click', (event) => {
		const target = event.target;
		const dropdown = target.closest('.dropdown');

		if (!dropdown) return;

		const valueElement = dropdown.querySelector('.dropdown__value');
		const listElement = dropdown.querySelector('.dropdown__list');


		if (target.classList.contains('dropdown__value')) {
			listElement.classList.toggle('dropdown__list_active');
		} else if (target.classList.contains('dropdown__link')) {
			valueElement.textContent = target.textContent;
			listElement.classList.remove('dropdown__list_active');
			event.preventDefault();
		}
	});
});