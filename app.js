function encriptar() {
    var texto = document.querySelector(".ingreso-texto").value;
    var textoCifrado = texto
      .replace(/a/gi, "ai")
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    document.querySelector(".texto-encriptado").value = textoCifrado;
  }
  
  function desencriptar() {
    var texto = document.querySelector(".texto-encriptado").value;
    var textoDesencriptado = texto
      .replace(/ai/gi, "a")
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    document.querySelector(".texto-encriptado").value = textoDesencriptado;
  }
  
  document.querySelector("#btn-encriptar").addEventListener("click", encriptar);
  document.querySelector("#btn-desencriptar").addEventListener("click", desencriptar);