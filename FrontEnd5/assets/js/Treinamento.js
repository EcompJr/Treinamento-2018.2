var a = 1;
function troca(foto) {
    document.getElementById("foto").src = foto;
}

function acende(foto) {
    if (a == 1) {
        document.getElementById("foto2").src = foto;
    }
}

function desliga(foto) {
    if (a == 1) {

        document.getElementById("foto2").src = foto;
    }
}

function quebra(foto, foto2) {
    document.getElementById("foto2").src = foto;
    document.getElementById("foto").src = foto2;
    a = 0;
}

function changecolor(e, id){
    if(id == 1){ 
        e.style.color = 'blue';
        document.getElementById('c').style.color = 'blue'
    }
    else if(id == 2){
        e.style.color = 'red';
        document.getElementById('c').style.color = 'red';
    }
    else{
        e.style.color = 'black';
    }
}