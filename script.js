//$ ********** Menu ********** $//
((d)=>{
    const $btnMenu = d.querySelector('.menu-btn')
    const $Menu = d.querySelector('.menu')

    $btnMenu.addEventListener('click', e=>{
        $btnMenu.firstElementChild.classList.toggle('none')
        $btnMenu.lastElementChild.classList.toggle('none')
        $Menu.classList.toggle('is-active')
    })
})(document)