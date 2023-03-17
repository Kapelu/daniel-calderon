//$ ********** Menu ********** $//
;((d) => {
	const $btnMenu = d.querySelector('.menu-btn')
	const $Menu = d.querySelector('.menu')

	$btnMenu.addEventListener('click', (e) => {
		$btnMenu.firstElementChild.classList.toggle('none')
		$btnMenu.lastElementChild.classList.toggle('none')
		$Menu.classList.toggle('is-active')
	})
	d.addEventListener('click', (e) => {
		if (!e.target.matches('.menu a')) return false

		$btnMenu.firstElementChild.classList.remove('none')
		$btnMenu.lastElementChild.classList.add('none')
		$Menu.classList.remove('is-active')
	})
})(document)
