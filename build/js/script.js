document.addEventListener('DOMContentLoaded', () => {

    const closeBtn = document.getElementById('close-mobile-btn')
    const hamburger = document.getElementById('hamburger')
    const menu = document.getElementById('mobile-menu')
    const overlay = document.getElementById('overlay')

    const closeSearch = document.getElementById('close-search-btn')
    const searchBtn = document.getElementById('search-btn')
    const searchInput = document.getElementById('search-input')

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active_mobile-menu')
        overlay.classList.toggle('active_mobile-menu')
    })

    closeBtn.addEventListener('click', () => {
        menu.classList.toggle('active_mobile-menu')
        overlay.classList.toggle('active_mobile-menu')
    })




    searchBtn.addEventListener('click', () => {
        searchInput.classList.toggle('active_search')
    })

    closeSearch.addEventListener('click', () => {
        searchInput.classList.toggle('active_search')
    })

})