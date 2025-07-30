function mostrarPaso2() {
  document.getElementById("paso1").style.display = "none";
  const paso2 = document.getElementById("paso2");
  paso2.style.display = "block";

  const texto = "hola Ana quiero dedicarte unas palabras para ti.. hacer click en el botón de abajo para verlas";
  const typedText = document.getElementById("typed-text");
  typedText.textContent = "";
  let i = 0;

  const escribir = setInterval(() => {
    if (i < texto.length) {
      typedText.textContent += texto.charAt(i);
      i++;
    } else {
      clearInterval(escribir);
    }
  }, 50);
}

function mostrarPaso3() {
  document.getElementById("paso2").style.display = "none";
  document.getElementById("paso3").style.display = "block";
}

function mostrarPaso4() {
  document.getElementById("paso3").style.display = "none";
  document.getElementById("paso4").style.display = "block";
  iniciarCorazones();
}

function iniciarCorazones() {
  const contenedor = document.getElementById("corazones");
  setInterval(() => {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (Math.random() * 20 + 10) + "px";
    corazon.textContent = "❤️";
    contenedor.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 5000);
  }, 300);
}
function mostrarPaso2() {
  document.getElementById('paso1').classList.add('oculto');
  document.getElementById('paso2').classList.remove('oculto');
  escribirTexto();
}

function mostrarPaso3() {
  document.getElementById('paso2').classList.add('oculto');
  document.getElementById('paso3').classList.remove('oculto');
}

function mostrarPaso4() {
  document.getElementById('paso3').classList.add('oculto');
  document.getElementById('paso4').classList.remove('oculto');
}

function escribirTexto() {
  const texto = "A veces las palabras se quedan cortas, pero aún así quiero intentarlo...";
  let i = 0;
  const velocidad = 40;
  const destino = document.getElementById("typed-text");
  destino.textContent = "";

  const escribir = () => {
    if (i < texto.length) {
      destino.textContent += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  };

  escribir();
}
