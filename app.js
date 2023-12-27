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

// Obtém todos os elementos <span> com a classe "size"
var spans = document.querySelectorAll('span.size');

// Adiciona um evento de clique a cada elemento <span>
spans.forEach(function(span) {
  span.addEventListener('click', function() {
    // Obtém o valor dentro do elemento <span> clicado
    var valor = this.textContent;
    
    // Obtém o link do WhatsApp
    let whatsappLink = `https://api.whatsapp.com/send/?phone=5511954909997&text=Olá! Gostaria de mais informações sobre SELANTE CAFFÉLATEX EFFETTO MARIPOSA. Tamanho selecionado: ${valor} &app_absent=0`;
    
    // Atualiza o href do link do WhatsApp
    document.getElementById('whatsappLink').href = whatsappLink;
  });
});


// Obtém todos os elementos <span> com a classe "color"
var colores = document.querySelectorAll('span.color');

// Adiciona um evento de clique a cada elemento <span>
colors.forEach(function(color) {
  color.addEventListener('click', function() {
    // Remove a classe "active" de todos os elementos <span>
    colores.forEach(function(c) {
      c.classList.remove('active');
    });
    
    // Adiciona a classe "active" ao elemento <span> clicado
    this.classList.add('active');
    
    // Obtém a cor selecionada
    var corSelecionada = this.getAttribute('color');
    
    // Atualiza a quantidade com base na cor selecionada
    var quantityText = '';
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
    
    // Atualiza o texto da quantidade
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




/*contador*/
// Defina a data de modificação do arquivo manualmente (substitua com a data e hora corretas)
var fileModifiedDate = new Date('2023-12-31T00:00:00');

function startTimer(duration, display) {
    var start = fileModifiedDate.getTime(),
        diff,
        hours,
        minutes,
        seconds;

    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);

        if (diff < 0) {
            clearInterval(intervalId);
            return;
        }

        hours = (diff / 9550) | 0;
        minutes = ((diff % 3600) / 60) | 0;
        seconds = (diff % 60) | 0;

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;
    }

    timer();
    var intervalId = setInterval(timer, 1000);
}

window.onload = function () {
    var duration = 48 * 60 * 60;
    var display = document.querySelector('#timer');
    

    startTimer(duration, display);
};




document.querySelector('.buy').addEventListener('click', function (event) {
  const activeSize = document.querySelector('span.size.active');
  if (activeSize) {
    const sizeText = activeSize.textContent.trim();
    let url = '';
    switch (sizeText) {
      case '250 ml':
        url = "https://www.labici.com.br/selante-caffelatex-effetto-mariposa-250ml-sem-amonia-e-com-microparticulas-de-rapida-acao";
        break;
      case '1 litro':
        url = "https://www.labici.com.br/selante-caffelatex-effetto-mariposa-1-litro-sem-amonia-e-com-microparticulas-de-rapida-acao";
        break;
      case '10 litros':
        url = "https://www.labici.com.br/selante-caffelatex-effetto-mariposa-10-litros-sem-amonia-e-com-microparticulas-de-rapida-acao";
        break;
      default:
        // Handle default case or show an error message
        break;
    }
    if (url) {
      this.href = url;
    }
  } else {
    event.preventDefault();
    alert('Por favor, selecione um tamanho antes de ir para a página de compra.');
  }
});
