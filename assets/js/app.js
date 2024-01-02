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




