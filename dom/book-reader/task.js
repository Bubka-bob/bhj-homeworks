const buttons = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

buttons.forEach(button => {
	button.addEventListener('click', e => {
		e.preventDefault();
		buttons.forEach(btn => btn.classList.remove('font-size_active'));
		button.classList.add('font-size_active');
		book.className = 'book';
		if (button.dataset.size === 'small') {
			book.classList.add('book_fs-small');
		} else if (button.dataset.size === 'big') {
			book.classList.add('book_fs-big');
		}
	});
});