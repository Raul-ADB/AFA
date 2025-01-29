let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll hacia abajo
        navbar.style.top = "-100px";  // Esconde la navbar
    } else {
        // Scroll hacia arriba
        navbar.style.top = "0";  // Muestra la navbar
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evitar que se pase al valor negativo
});