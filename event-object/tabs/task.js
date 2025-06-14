function switchTab(tabNavItem, tabsContainer) {
	const activeTabs = tabsContainer.querySelectorAll('.tab_active');
	activeTabs.forEach(tab => tab.classList.remove('tab_active'));
	tabNavItem.classList.add('tab_active');
	const navIndex = [...tabsContainer.querySelectorAll('.tab')].findIndex(item => item === tabNavItem);
	const contentItems = tabsContainer.querySelectorAll('.tab__content');
	contentItems.forEach(content => content.classList.remove('tab__content_active'));
	contentItems[navIndex].classList.add('tab__content_active');
}
document.querySelectorAll('.tab').forEach(tab => {
	tab.addEventListener('click', function(event) {
		const parentContainer = this.closest('.tabs');
		switchTab(this, parentContainer);
	});
});