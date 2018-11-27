var mudouA = 0;
var mudouB = 0;

function mudarImagem(minato) {
    document.getElementById("minato").src = minato;
}

function naruto() {
    if (mudouA == 0) {
        document.getElementById("primeira").src = "assents/img/naruto.jpg";
    }
}
function kakashi() {
    if (mudouA == 0) {
        document.getElementById("primeira").src = "assents/img/kakashi.jpg";
    }
}
function hokage() {
    if (mudouA == 0) {
        document.getElementById("primeira").src = "assents/img/Hokage.png";
        mudouA = 1;
    }
}

function naruto2() {
    if (mudouB == 0) {
        document.getElementById("primeira2").src = "assents/img/naruto.jpg";
    }
}
function kakashi2() {
    if (mudouB == 0) {
        document.getElementById("primeira2").src = "assents/img/kakashi.jpg";
    }
}
function hokage2() {
    if (mudouB == 0) {
        document.getElementById("primeira2").src = "assents/img/Hokage.png";
        mudouB = 1;
    }
}