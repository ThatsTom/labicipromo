let ano = "2024";
let dia = "15";
let mes = "01";
let diaFinal = "20";
let contador = 0;

let titulosFundo = [
    "RIDEREVER",
    "DESTAQUE FINALIZADO",
];

let srcImgs = [
    "assets/img/uparImagensAqui/1.png",
    "assets/img/uparImagensAqui/2.png",
    "assets/img/uparImagensAqui/SPK-6553 (1).png",
];
let titulosPrincipais = [
    "LINHA RIDEREVER",
    "DESTAQUE FINALIZADO",
    "Título Principal 3"
];

let descontoDestaque = [
    "NOVO",
    "AGUARDE",
    "teste"
];

let validaPor = [
    "Promoção valida somente por:",
    "Proximo destaque em:"
];

let cores = [
    "green",
    "orange",
    "black",
    "orange",
    "purple",
    "green"
];

let primary = [
    "11998e",
    "fc4a1a",
    "111",
    "fc4a1a",
    "7400D5",
    "11998e"
];

let armazemDasCores = {
    red: "ff4081",
    black: "111",
    orange: "fc4a1a",
    purple: "7400D5",
    green: "11998e"
};

let descricoes = [
    "Uma das melhores e mais econômicas soluções do mercado para montagem de uma bike para triatlo com sistema de freio hidráulico, podendo ainda ser instalado com os botões Di2 (SW-R9150 ou SW-RS801).<br>- Frenagem equilibrada e extremamente responsiva.<br>- Manete ergonômico com o lever em fibra de carbono.<br>- Super leve e compacto (direito 305g esquerdo 308g)<br>- Pinças em alumínio com pastilhas de freio semi-metálica.",
    "AGUARDE NOVO DESTAQUE",
    "Descrição do Produto 3"
];

let variacoesProdutos = [
    "MANETE DE FREIO",

]

let urlsProdutos = [
    "https://www.labici.com.br/manete-de-freio-tt-carbon-riderever-pincas",
    "https://www.labici.com.br/produto/cera-lubrificante-effetto-mariposa-flowerpower-wax-para-corrente-de-bicicleta-500ml.html",
    "https://www.labici.com.br/selante-caffelatex-effetto-mariposa-10-litros-sem-amonia-e-com-microparticulas-de-rapida-acao"
];



let corpo = document.getElementById('container');





corpo.innerHTML = corpo.innerHTML + ` <div class="container">

    <div class="card">

        <a href="${urlsProdutos[contador]}"target="_blank">
                <div class="shoeBackground">
                    <a href="https://www.labici.com.br/" target="_blank">
                        <div class="gradients">
                        <div class="gradient second active" color="${cores[contador]}"></div>

                        </div>

                        
                            <h1 class="titulo">${titulosFundo[contador]}</h1>
                        
                        <img src="assets/img/labiciLogo.png" alt="" class="logo">
                        <a href="#" id="whatsappLink" class="share" target="_blank"><i class="fab fa-whatsapp fa-2x"></i></a>
                        <div class="teste">
                             ${criarImagens(srcImgs, cores)} 
                        </div>

                </div>
        </a>

                <div class="info">
                    <div class="shoeName">
                        <div>
                            <h1 class="big">${titulosPrincipais[contador]}</h1>
                            <span class="new">${descontoDestaque[contador]}</span>
                        </div>
                        <h3 class="small">${validaPor[contador]}</h3>
                        <h3 id="timer" class="contador"></h3>
                    </div>
                    <div class="description">
                        <h3 class="title">Informação do Produto</h3>
                        <p class="text">${descricoes[contador]}</p>
                    </div>

                    
                    <div class="size-container">
                        <h3 class="title">Produtos disponível</h3>
                        <div class="sizes">
                        
                        ${criarSpans(variacoesProdutos, cores, primary)}
                            

                        </div>
                    </div>
                    <div class="buy-price">
                        <a href="${urlsProdutos[contador]}" class="buy" target="_blank"><i
                                class="fas fa-shopping-cart" data="urlSite"></i>Ir ate a pagina</a>
                    </div>
                    <div class="observacao"><h3 class="texto-obs">Caso queira ser atendido diretamente por um colaborador selecione o <b><u>TAMANHO</u></b>
                        e clique no icone do <b><u>WHATSAPP</u></b> no topo da pagina</h3></div>
                </div>
            </a>
    </div>

</div>`;

let shoeBackground = document.querySelector('.shoeBackground');

shoeBackground.style.minHeight = '450px';

document.querySelector('.buy').addEventListener('click', function (event) {
    const activeSize = document.querySelector('span.size.active');
    const activeColor = document.querySelector('span.color.active');
    if (activeSize && activeColor) {
        const sizeText = activeSize.textContent.trim();
        let url = '';

        switch (sizeText) {
            case variacoesProdutos[0]:
                url = urlsProdutos[0];
                break;
            case variacoesProdutos[1]:
                url = urlsProdutos[1];
                break;
            case variacoesProdutos[2]:
                url = urlsProdutos[2];
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


function criarSpans(variacoesProdutos, cores, primary) {
    let spans = '';
    let numItens = variacoesProdutos.length;

    let spanStyles = numItens >= 4
        ? 'width: 20%; height: 30px;'
        : '';
    let textoSpanStyles = numItens >= 4
        ? 'font-size: 0.6rem;'
        : '';

    for (let i = 0; i < numItens; i++) {
        spans += `<span style="${spanStyles}" class="color size" primary="#${primary[i]}" color="#${cores[i]}" id="${i}"><h4 style="${textoSpanStyles}" class="textoSpan">${variacoesProdutos[i]}</h4></span>`;
    }

    return spans;
};

function criarImagens(srcImgs, cores) {
    let imagens = '';
    for (let i = 0; i < srcImgs.length; i++) {
        imagens += `<img id="img${i}" src="${srcImgs[i]}" alt="" class="shoe show" color="#${cores[i]}" style="display: none;">`;
    }
    return imagens;
}






const colorSpans = document.querySelectorAll('span.color.size');
const shoeImages = document.querySelectorAll('.shoe.show');

colorSpans.forEach((span, index) => {
  span.addEventListener('click', function() {
    // Oculta todas as imagens
    shoeImages.forEach(image => {
      image.style.display = 'none';
    });
    // Mostra apenas a imagem correspondente ao span clicado
    document.getElementById(`img${index}`).style.display = 'block';
  });
});




window.onload = function () {
    let startDate = new Date(`${ano}-${mes}-${dia}T${getCurrentTime()}`);
    let endDate = new Date(`${ano}-${mes}-${diaFinal}T10:00:01`);
    let display = document.querySelector('#timer');

    startTimer(startDate, endDate, display);
    contador++;
};

function startTimer(startDate, endDate, display) {
    let interval = setInterval(function () {
        let now = new Date();
        let timeDifference = endDate.getTime() - now.getTime();

        if (timeDifference <= 0) {
            clearInterval(interval);
            dia = parseInt(dia) + 2;
            diaFinal = parseInt(diaFinal) + 3;
            contador + 1;


            document.querySelector('.titulo').textContent = titulosFundo[contador];
            document.querySelector('.titulo').textContent = titulosFundo[contador];
            document.querySelector('.big').textContent = titulosPrincipais[contador];
            document.querySelector('.new').textContent = descontoDestaque[contador];
            document.querySelector('.text').textContent = descricoes[contador];
            document.querySelector('.buy').href = urlsProdutos[contador];



            startDate.setDate(startDate.getDate() + 2);
            endDate.setDate(endDate.getDate() + 2);
            startTimer(startDate, endDate, display);
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


// app.js abaixo

const spans = document.querySelectorAll('span.size');



spans.forEach(function (span) {
    span.addEventListener('click', function () {
        const valor = this.textContent;
        const produtoSelecionado = document.querySelector('.big').textContent;
        let whatsappLink = `https://api.whatsapp.com/send/?phone=5511954909997&text=Olá! Gostaria de mais informações sobre ${produtoSelecionado}. Selecionei: ${valor} &app_absent=0`;

        document.getElementById('whatsappLink').href = whatsappLink;

        // Mostra apenas a primeira imagem
        document.querySelectorAll('.shoe.show').forEach(image => {
            image.style.display = 'none';
        });
        document.querySelector('.shoe.show').style.display = 'block';
    });
});


document.querySelector('.fab.fa-whatsapp').addEventListener('click', function (event) {
    const activeSize = document.querySelector('span.size.active');
    if (!activeSize) {
        event.preventDefault();
        alert('Por favor, selecione um tamanho antes de enviar uma mensagem pelo WhatsApp.');
    }
});

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




