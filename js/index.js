let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
let navMenu = document.querySelector('#navMenu');
const notification = document.querySelector('.notification');
const buttonText = document.querySelector(".submit__text");
const buttonLoader = document.querySelector(".submit__loader");

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        /* navbar.style.top = "-100px"; */
        navbar.classList.toggle('up');
    } else {
        /* navbar.style.top = "0"; */
        navbar.classList.toggle('down');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


navMenu.addEventListener('click', () => {
    let menu = document.querySelector('#navOptions');
    menu.classList.toggle('open');
    navMenu.classList.toggle('open');
});

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const serviceID = 'default_service';
  const templateID = 'template_421809h';
  
  try {
    buttonText.classList.toggle("hidde");
    buttonLoader.classList.toggle("show");
    await emailjs.sendForm(serviceID, templateID, this);
    notification.classList.add('show');
  } catch (err) {
    alert(JSON.stringify(err));
  } finally {
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2000);
    buttonText.classList.toggle("hidde");
    buttonLoader.classList.toggle("show");
    this.reset();
  }
});