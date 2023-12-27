function preloadImages(imageUrls) {
    const images = [];
    for (let i = 0; i < imageUrls.length; i++) {
      images[i] = new Image();
      images[i].src = imageUrls[i];
    }
  }
  
  // Lista de URLs das imagens que você deseja pré-carregar
  const imageUrls = [
    'img/uparImagensAqui/250-ml.png',
    'img/uparImagensAqui/1litro.png',
    'img/uparImagensAqui/10-litros.png'
  ];
  
  // Chama a função para pré-carregar as imagens
  preloadImages(imageUrls);
  