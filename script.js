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
function abrirNav(){
    document.getElementById("menuOculto").style.width="300px";
    document.getElementById("principal").style.marginLeft="300px";
};
function fecharNav(){
    document.getElementById("menuOculto").style.width="0";
    document.getElementById("principal").style.marginLeft="0";
};