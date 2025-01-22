let fondos = [];
fondos[0] = './img/in1.jpg';
fondos[1] = './img/in2.jpg';
fondos[2] = './img/in3.jpg';
fondos[3] = './img/in4.jpg';
fondos[4] = './img/in5.jpg';
fondos[5] = './img/in6.jpg';

window.addEventListener("load", () => {
  let fondo = Math.floor(Math.random() * fondos.length);
  console.log(fondo);
  document.body.style.backgroundImage = `url(${fondos[fondo]})`;
});