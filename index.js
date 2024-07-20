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
        alert("Debes ingresar algún texto");
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        tituloMensaje.textContent = "Ningún mensaje fue encontrado"
    }
}