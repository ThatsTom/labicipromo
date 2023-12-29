function preloadImages(imageUrls) {
    const images = [];
    for (let i = 0; i < imageUrls.length; i++) {
      images[i] = new Image();
      images[i].src = imageUrls[i];
    }
  }
  
  const imageUrls = [
    'assets\img/uparImagensAqui/SPK-6553 (1).png',
  ];
  
  // Chama a função para pré-carregar as imagens
  preloadImages(imageUrls);
  