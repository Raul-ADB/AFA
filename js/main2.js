const navbar = document.querySelector('#nav');
let prevState = window.pageYOffset;
window.addEventListener('scroll', () => {
  let currentState = window.pageYOffset;
  if (prevState > currentState) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-40rem';
  }
});