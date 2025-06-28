// Получаем контейнер корзины
const cartProducts = document.querySelector('.cart__products');

// Функция для изменения количества товара
function changeQuantity(event) {
	const control = event.target;
	const quantityValue = control.closest('.product__quantity-controls').querySelector('.product__quantity-value');
	let currentQuantity = parseInt(quantityValue.textContent);

	if (control.classList.contains('product__quantity-control_dec')) {
		if (currentQuantity > 1) {
			currentQuantity--;
		}
	} else if (control.classList.contains('product__quantity-control_inc')) {
		currentQuantity++;
	}

	quantityValue.textContent = currentQuantity;
}

// Функция для добавления товара в корзину
function addToCart(event) {
	const product = event.target.closest('.product');
	const productId = product.dataset.id;
	const productImage = product.querySelector('.product__image').src;
	const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);

	// Проверяем, есть ли уже такой товар в корзине
	let existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

	if (existingProduct) {
		// Если товар уже есть, обновляем количество
		const countElement = existingProduct.querySelector('.cart__product-count');
		countElement.textContent = parseInt(countElement.textContent) + productQuantity;
	} else {
		// Если товара нет, создаем новый элемент
		const cartProduct = document.createElement('div');
		cartProduct.classList.add('cart__product');
		cartProduct.dataset.id = productId;
		cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productQuantity}</div>
            `;
		cartProducts.appendChild(cartProduct);
	}
}

// Добавляем обработчики событий
document.querySelectorAll('.product__quantity-control').forEach(control => {
	control.addEventListener('click', changeQuantity);
});

document.querySelectorAll('.product__add').forEach(addButton => {
	addButton.addEventListener('click', addToCart);
});