document.addEventListener('DOMContentLoaded', () => {

    const closeBtn = document.getElementById('close-mobile-btn')
    const hamburger = document.getElementById('hamburger')
    const menu = document.getElementById('mobile-menu')
    const overlay = document.getElementById('overlay')

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active_mobile-menu')
        overlay.classList.toggle('active_mobile-menu')
    })

    closeBtn.addEventListener('click', () => {
        menu.classList.toggle('active_mobile-menu')
        overlay.classList.toggle('active_mobile-menu')
    })


})