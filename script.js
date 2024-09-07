function showCar(carId) {
    // Esconde todas as imagens
    var carImages = document.getElementsByClassName('car-image');
    for (var i = 0; i < carImages.length; i++) {
        carImages[i].style.display = 'none';
    }

    // Exibe a imagem do carro selecionado
    var selectedCar = document.getElementById(carId);
    selectedCar.style.display = 'block';
}