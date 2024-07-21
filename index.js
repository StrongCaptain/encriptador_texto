function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let caricatura = document.getElementById("caricatura");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
        .replace(/c/gi, "cr")
        .replace(/m/gi, "trat")
        .replace(/s/gi, "-m")
        .replace(/g/gi, "mrk")

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        caricatura.src = "./imagenes/encriptado.jpg";
    }else{
        caricatura.src = "./imagenes/Muñeco.png";
        swal("Vaya", "Debes ingresar un texto", "success");
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        tituloMensaje.textContent = "Ningún mensaje fue encontrado"
    }
}

function desencriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let caricatura = document.getElementById("caricatura");
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")
        .replace(/cr/gi, "c")
        .replace(/trat/gi, "m")
        .replace(/-m/gi, "s")
        .replace(/mkr/gi, "g")

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        caricatura.src = "./imagenes/desencriptado.jpg";
    } else {
        caricatura.src = "./imagenes/Muñeco.png";
        swal("Vaya", "Debes ingresar un texto", "success");
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        tituloMensaje.textContent = "Ningún mensaje fue encontrado"
    }
}