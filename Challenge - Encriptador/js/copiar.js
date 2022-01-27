

var botonCopiar = document.querySelector("#boton-copiar");


botonCopiar.addEventListener("click", function (evento) {

    evento.preventDefault();

    var copyText = document.querySelector(".output-mensaje");
    copyText.select();
    document.execCommand("copy");

});
