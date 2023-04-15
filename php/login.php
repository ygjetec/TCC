<?php
session_start();

include "connect.php";

$conn = mysqli_connect($host, $usuario, $senha, $banco);

$logar = $sql->query("SELECT * FROM usuario WHERE email='$email' AND senha='$senha'");
while ($linha = mysqli_fetch_array($logar)) {
    $email = $email['email'];
    $senha = $senha['senha'];
}

$contagem = mysqli_num_rows($logar);

if ($contagem == 1 and $tipo == 1) {
    $_SESSION['email_session'] = $login;
    $_SESSION['senha_session'] = $senha;

    header("location: pagInicial.html");

} elseif ($contagem == 1 and $tipo == 2) {
    // usuario super(trocar)
    $_SESSION['login_session'] = $login;
    $_SESSION['senha_session'] = $senha;

    header("location: listar.php");

} else {

    unset($_SESSION['login_session']);
    unset($_SESSION['senha_session']);

    // criar pag erro de login
}

?>