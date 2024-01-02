let ano = "2024";
let dia = "02";
let mes = "01";
let diaFinal = "04";
let contador = 0; 

let titulosFundo = [
    "MORSA",
    "DESTAQUE FINALIZADO",
];

let srcImgs = [
    "assets/img/uparImagensAqui/SPK-6553 (1).png",
    "assets/img/uparImagensAqui/SPK-6553 (1).png",
    "assets/img/uparImagensAqui/SPK-6553 (1).png",
    "assets/img/uparImagensAqui/SPK-6553 (1).png"
];

let titulosPrincipais = [
    "MORSA CYCLUS",
    "DESTAQUE FINALIZADO",
    "Título Principal 3"
];

let descontoDestaque = [
    "Poucas Unidades",
    "AGUARDE",
    "teste"
];

let cores = [
    "blue",
    "red",
    "black",
    "orange",
    "purple",
    "green"
];

let primary = [
    "0136af",
    "ff4081",
    "111",
    "fc4a1a",
    "7400D5",
    "11998e"
];

let descricoes = [
    "MORSA CYCLUS PRO PARA SUSPENSÃO E SHOCK 100mm - 720306 Morsa forjada e usinada, sem folga na parte do torno, o que possibilita a movimentação dos mordentes sem desalinha-los. Adequada para manutenção de suspensões dianteira e traseira. Peso: 13kg.",
    "DESTAQUE FINALIZADO",
    "Descrição do Produto 3"
];

let variacoesProdutos = [
    "10MM",

]

let urlsProdutos = [
    "https://www.labici.com.br/morsa-cyclus-pro-para-suspensao-e-shock-100mm-720306",
    "https://www.labici.com.br/selante-caffelatex-effetto-mariposa-1-litro-sem-amonia-e-com-microparticulas-de-rapida-acao",
    "https://www.labici.com.br/selante-caffelatex-effetto-mariposa-10-litros-sem-amonia-e-com-microparticulas-de-rapida-acao"
];



let corpo = document.getElementById('container');


corpo.innerHTML = corpo.innerHTML + ` <div class="container">

    <div class="card">
        <div class="shoeBackground">

            <div class="gradients">
            
            <div class="gradient second active" color="${cores[contador - contador]}"></div>

            </div>

            <a href="https://www.labici.com.br/" target="_blank">
                <h1 class="titulo">${titulosFundo[contador]}</h1>
            </a>
            <img src="assets/img/labiciLogo.png" alt="" class="logo">
            <a href="#" id="whatsappLink" class="share" target="_blank"><i class="fab fa-whatsapp fa-2x"></i></a>
            <div class="teste">
            ${criarImagens(srcImgs, cores)} 


            </div>
        </div>
        <div class="info">
            <div class="shoeName">
                <div>
                    <h1 class="big">${titulosPrincipais[contador]}</h1>
                    <span class="new">${descontoDestaque[contador]}</span>
                </div>
                <h3 class="small">Promoção valida somente por:</h3>
                <h3 id="timer" class="contador"></h3>
            </div>
            <div class="description">
                <h3 class="title">Informação do Produto</h3>
                <p class="text">${descricoes[contador]}</p>
            </div>

            
            <div class="size-container">
                <h3 class="title">Tamanhos disponiveis</h3>
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

    </div>

</div>`;


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
        spans += `<span style="${spanStyles}" class="color size" primary="#${primary[i]}" color="#${cores[i]}"><h4 style="${textoSpanStyles}" class="textoSpan">${variacoesProdutos[i]}</h4></span>`;
    }

    return spans;
};

function criarImagens(srcImgs, cores) {
    let imagens = '';
    for (let i = 0; i < srcImgs.length; i++) {
        imagens += `<img src="${srcImgs[i]}" alt="" class="shoe show" color="#${cores[i]}">`;
    }
    return imagens;
}


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


const colorSpans = document.querySelectorAll('span.color.size');
const gradientDiv = document.querySelector('div.gradient.second.active');
colorSpans.forEach(span => {
    span.addEventListener('click', function () {
        const colorValue = span.getAttribute('color').replace('#', '');
        gradientDiv.setAttribute('color', colorValue);
    });
});



window.onload = function () {
    let startDate = new Date(`${ano}-${mes}-${dia}T${getCurrentTime()}`);
    let endDate = new Date(`${ano}-${mes}-${diaFinal}T00:00:01`);
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
            diaFinal = parseInt(diaFinal) + 2; 
            contador+1; 


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