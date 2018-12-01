$(document).ready(function(){
    $("#btnSubmit").click(function(){
        $("#espaco").append("<h3>Pedido:</h3>")
        $("#espaco").append("<p>" + "Seu nome: " + $("#inputClientName").val() + "</p>" );
        $("#espaco").append("<p>" + "Seu endereço: " + $("#inputClientAddress").val() + "</p>")
        $("#espaco").append("<p>" + "Seu sabor de pizza: " + $("input[name=sabor]:checked", "#form1").val() + "</p>")
    });
});