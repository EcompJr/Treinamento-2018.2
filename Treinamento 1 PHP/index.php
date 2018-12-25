<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="formulario.css">
    <title></title>
  </head>
  <body>
    <div class="formulario">
      <h2>FORMULÁRIO</h2><br>
      <div class="container">

        <form action="welcome.php" method="post">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email" name="email">
            <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" name="password">
          </div>
          <button type="" id="btn" class="btn btn-primary">Submit</button>
          <div class="" id="printScreen">
              <button type="" id="prints" name="prints on the screen"></button>
              <p id="tela">
              </p>
          </div>
        </form>

    <?php
    if (isset($_GET['log'])) {
      echo "<script>alert('login falho');</script>";
    }

     ?>

  </body>
</html>
