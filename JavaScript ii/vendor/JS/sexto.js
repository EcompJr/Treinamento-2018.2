$(document).ready(function(){
    $("p").click(function(){
        alert("Stop");
        $("p").css("color", "red");
    });
    $("#bt").click(function(){
        $("body").append("<h2>Xaaaablau!</h2>");
    });
    $("#btnome").click(function(){
        $("body").append("<input type='text' name='sobrenome' id='snome'></input>");
        $("#btnome").attr('disabled', 'disabled');
    });
    $("#env").click(function(){
        nometexto = $("#nome").val();
        snometexto = $("#snome").val();
        var somaNomes = nometexto.length + snometexto.length;
        if (somaNomes < 10) {
            alert("Nome invalido");            
        } else {
            alert("Ok!");
        }
    });
});