
// let variavel temporaria, ocupa menos espaço que var
// document.querySelector
// changeColor resetColor
function mudarImagem(foto) {
  document.getElementById("novaFoto").src = foto;
}

function acendeLampada() {
  if()
  document.getElementById("lampada").src = "acessa.jpg";
  else
    document.getElementById("lampada2").src = "acessa.jpg";
}

function apagaLampada() {
  document.getElementById("lampada").src = "apagada.jpg";
  document.getElementById("lampada2").src = "apagada.jpg";
}

function quebraLampada() {
  document.getElementById("lampada").src = "quebrada.jpg";
  document.getElementById("lampada2").src = "quebrada.jpg";
}
