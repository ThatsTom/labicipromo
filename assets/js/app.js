const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground');

let prevColor = "blue";
let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}


const spans = document.querySelectorAll('span.size');

spans.forEach(function(span) {
  span.addEventListener('click', function() {
    const valor = this.textContent;
    let whatsappLink = `https://api.whatsapp.com/send/?phone=5511954909997&text=Olá! Gostaria de mais informações sobre MORSA CYCLUS PRO PARA SUSPENSÃO E SHOCK. Tamanho selecionado: ${valor} &app_absent=0`;

    document.getElementById('whatsappLink').href = whatsappLink;
  });
});

document.querySelector('.fab.fa-whatsapp').addEventListener('click', function (event) {
  const activeSize = document.querySelector('span.size.active');
  if (!activeSize) {
    event.preventDefault();
    alert('Por favor, selecione um tamanho antes de enviar uma mensagem pelo WhatsApp.');
  }
});



document.querySelector('.buy').addEventListener('click', function (event) {
  const activeSize = document.querySelector('span.size.active');
  const activeColor = document.querySelector('span.color.active');

  if (activeSize && activeColor) {
    const sizeText = activeSize.textContent.trim();
    const colorValue = activeColor.getAttribute('color');
    let url = '';

    switch (sizeText) {
      case '100mm':
        url = "https://www.labici.com.br/morsa-cyclus-pro-para-suspensao-e-shock-100mm-720306";
        break;
      case '1 litro':
        url = "https://www.labici.com.br/selante-caffelatex-effetto-mariposa-1-litro-sem-amonia-e-com-microparticulas-de-rapida-acao";
        break;
      case '10 litros':
        url = "https://www.labici.com.br/selante-caffelatex-effetto-mariposa-10-litros-sem-amonia-e-com-microparticulas-de-rapida-acao";
        break;
      default:
        break;
    }

    if (url) {
      this.href = url;
    }
  } else {
    event.preventDefault();
    alert('Por favor, selecione um tamanho e uma cor antes de ir para a página de compra.');
  }
});

const colores = document.querySelectorAll('span.color');

colors.forEach(function (color) {
  color.addEventListener('click', function () {
    colors.forEach(function (c) {
      c.classList.remove('active');
    });

    this.classList.add('active');

    const corSelecionada = this.getAttribute('color');
    let quantityText = '';

    switch (corSelecionada) {
      case 'blue':
        quantityText = '250ml';
        break;
      case 'red':
        quantityText = '1 litro';
        break;
      case 'black':
        quantityText = '10 litros';
        break;
      default:
        quantityText = '250ml';
        break;
    }

    document.getElementById('quantity').textContent = quantityText;
  });
});




function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 1.6}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);


window.onload = function() {
  let startDate = new Date("2023-12-29T" + getCurrentTime());
  let endDate = new Date("2024-01-02T18:00:01");
  let display = document.querySelector('#timer');

  startTimer(startDate, endDate, display);
};

function startTimer(startDate, endDate, display) {
  setInterval(function() {
    let now = new Date();
    let timeDifference = endDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      clearInterval(interval);
      display.textContent = 'Tempo expirado';
    } else {
      let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      if (days > 0) {
        display.textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
      } else {
        display.textContent = hours + "h " + minutes + "m " + seconds + "s";
      }
    }
  }, 1000);
}

function getCurrentTime() {
  let now = new Date();
  let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
  return hours + ":" + minutes + ":" + seconds;
}

