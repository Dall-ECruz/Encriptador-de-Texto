function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./img/animaciones/encriptex-thx.gif";
    } else {
      muñeco.src = "./img/animaciones/muneco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes ingresar un texto para encriptar',
        footer: '<a href="">Instrucciones de uso</a>'
      }
      )
    }
  }
  
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/animaciones/encriptex-thx.gif";
      } else {
        muñeco.src = "./img/animaciones/muneco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes ingresar un texto para desencriptar',
          footer: '<a href="">Instrucciones de uso</a>'
        }
        )
      }
}
function copiarTexto() {
  var textarea = document.getElementById("texto");
  var texto = textarea.value;

  navigator.clipboard.writeText(texto)
    .then(function() {
      alert("¡Texto copiado!");
    })
    .catch(function(err) {
      console.error("Error al copiar el texto: ", err);
    });
}

function limpiarTexto() {
  var textarea = document.getElementById("texto");
  textarea.value = "";
}

document.addEventListener('DOMContentLoaded', function() {
  const btnModoOscuro = document.getElementById('modo-oscuro-btn');
  const themeStyle = document.getElementById('theme-style');

  btnModoOscuro.addEventListener('click', function() {
    themeStyle.href = (themeStyle.href.includes('style.css')) ? 'style-dark.css' : 'style.css';
  });
});
