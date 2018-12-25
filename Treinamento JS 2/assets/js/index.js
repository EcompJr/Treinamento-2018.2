$(document).ready(function(){
  $("#btn").click(function(){
    name = $("#name").val();
    surname = $("#surname").val();
    email = $("#email").val();
    password = $("#password").val();
    alert("Cadastro efetuado");
  });



  $("#prints").click(function(){
    $("#tela").append("<p>"+name+"</p>");
    $("#tela").append("<p>"+surname+"</p>");
    $("#tela").append("<p>"+email+"</p>");
  });
});
