<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
    //DECLARANDO VARIAVEL COM $
    //=== checa a instancia da variavel
      $start = "Hello World!";
      //printa algo na tela
      echo $start;
      echo "<h1>Treinamento 1 - php</h1></br>";
      include "formulario.html";
      if (isset($_GET['log'])) {
        echo "<script>alert('cadastro falho');</script>";
      }
/*
      for ($key = 0; $key <= 30; $key++) {

        if($key % 3 == 0 && $key % 5 == 0){
          echo "Fizz</br>";
        }else if($key % 5 == 0){
          echo "Buzz</br>";
        }else if($key % 3 == 0 ){
          echo "FizzBuzz</br>";
        }else{
          echo $key;
        }
*/
        // foreach ($variable as $key => $value) {}
        // $_POST[''] $_GET[''] $_SESSION[''] -  VARIAVEIS SUPERGlOBAIS

      //inclui um arquivo html na tela
      //include "janela.html";
     ?>

  </body>
</html>
