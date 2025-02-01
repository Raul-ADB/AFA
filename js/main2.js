let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
let navMenu = document.querySelector('#navMenu');

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


navMenu.addEventListener('click', () => {
    let menu = document.querySelector('#navOptions');
    menu.classList.toggle('open');
    navMenu.classList.toggle('open');
});