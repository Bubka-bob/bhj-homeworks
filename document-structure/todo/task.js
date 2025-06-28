      const tooltips = document.querySelectorAll('.has-tooltip');

      tooltips.forEach(function(tooltipLink) {
      	tooltipLink.addEventListener('click', function(e) {
      		e.preventDefault(); // Отменяет переход по ссылке

      		// Убедимся, что ранее открытая подсказка скрылась
      		const oldTooltip = document.querySelector('.tooltip');
      		if (oldTooltip) {
      			oldTooltip.parentNode.removeChild(oldTooltip);
      		}


      		let tooltip = document.createElement('div');
      		tooltip.classList.add('tooltip');
      		tooltip.textContent = tooltipLink.title; // Показываем содержимое атрибута title
      		document.body.appendChild(tooltip);

      		// Определяем позицию подсказки относительно родительского контейнера
      		let linkRect = tooltipLink.getBoundingClientRect();
      		tooltip.style.left = `${linkRect.left + window.scrollX}px`;
      		tooltip.style.top = `${linkRect.bottom + window.scrollY}px`;

      		tooltip.classList.add('tooltip_active');

      	});
      });