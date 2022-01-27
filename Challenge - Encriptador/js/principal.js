

var botonEncriptar = document.querySelector("#boton-encriptar");
var botonDesencriptar = document.querySelector("#boton-desencriptar");

botonEncriptar.addEventListener("click", function (evento) {

    evento.preventDefault();

    var form = document.querySelector("#form-encriptar");

    var formEncriptado = document.querySelector("#form-encriptado");

    formEncriptado.mensajeEncriptado.value = encriptar(form.mensaje.value);

})

botonDesencriptar.addEventListener("click", function (evento) {

    evento.preventDefault();

    var form = document.querySelector("#form-encriptar");

    var formEncriptado = document.querySelector("#form-encriptado");

    console.log(form.mensaje.value);

    formEncriptado.mensajeEncriptado.value = desencriptar(form.mensaje.value);

})

