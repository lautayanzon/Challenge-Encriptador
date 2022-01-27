// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

var letraA = "ai";
var letraE = "enter";
var letraI = "imes";
var letraO = "ober";
var letraU = "ufat";

function encriptar(texto) {

    var textoEncriptado = "";

    for (var i = 0; i < texto.length; i++) {


        if (texto.substring(i, i + 1) == "a") {

            textoEncriptado = textoEncriptado + letraA;

        } else if (texto.substring(i, i + 1) == "e") {

            textoEncriptado = textoEncriptado + letraE;

        } else if (texto.substring(i, i + 1) == "i") {

            textoEncriptado = textoEncriptado + letraI;

        } else if (texto.substring(i, i + 1) == "o") {

            textoEncriptado = textoEncriptado + letraO;

        } else if (texto.substring(i, i + 1) == "u") {

            textoEncriptado = textoEncriptado + letraU;

        } else {
            textoEncriptado = textoEncriptado + texto.substring(i, i + 1);
        }

    }

    return textoEncriptado;
}

function desencriptar(texto) {

    var textoDesencriptado = "";

    for (var i = 0; i < texto.length; i++) {


        if (texto.substring(i, i + letraA.length) == letraA) {

            textoDesencriptado = textoDesencriptado + "a";
            i = (i + letraA.length) - 1;


        } else if (texto.substring(i, i + letraE.length) == letraE) {

            textoDesencriptado = textoDesencriptado + "e";
            i = (i + letraE.length) - 1;


        } else if (texto.substring(i, i + letraI.length) == letraI) {

            textoDesencriptado = textoDesencriptado + "i";
            i = (i + letraI.length) - 1;

        } else if (texto.substring(i, i + letraO.length) == letraO) {

            textoDesencriptado = textoDesencriptado + "o";
            i = (i + letraO.length) - 1;

        } else if (texto.substring(i, i + letraU.length) == letraU) {

            textoDesencriptado = textoDesencriptado + "u";
            i = (i + letraU.length) - 1;

        } else {
            textoDesencriptado = textoDesencriptado + texto.substring(i, i + 1);
        }

    }

    return textoDesencriptado;
}



