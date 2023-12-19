const openbtn = document.querySelector('.open-btn')
const close = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

openbtn.addEventListener('click', () => {
    nav.forEach(ma => ma.classList.add('visible'))
})

close.addEventListener('click', () => {
    nav.forEach(ma => ma.classList.remove('visible'))
})