<?php
$senha = $_POST['password'] ;
/* PARA O FORMULARIO
  echo $_POST['name'] ."</br>";
  echo $_POST['surname'] ."</br>";
  echo $_POST['email']."</br>";
  echo strlen($_POST['password']);
  if(strlen($_POST['password']) < 4){
    echo "</br>Insira uma senha com no minimo 3 caracteres.</br>";
    header("Location: index.php?log=0");
  }else{
    echo "</br>Cadastro efetuado</br>";
  }
  echo "<a href = index.php></br>voltar</a>";
  */
  //PARA O LOGIN
  if($senha != 'marilima' ){
    //echo "</br>Senha invalida!</br>";
    header("Location: index.php?log=0");
  }else{
    /*
    echo $_POST['email']."</br>";
    echo $senha."</br>";
    */
    echo "</br>Login efetuado</br>";
  }
  echo "<a href='index.php'></br>voltar</a>";
 ?>
