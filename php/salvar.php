<?php

$conn = mysqli_connect($host, $usuario, $senha, $banco);

$nome = $_POST["nome"];
$email = $_POST["email"];
$senha = $_POST["senha"];
$datanasc = $_POST["datanasc"];
$sexo = $_POST["sexo"];

$conn ->query("INSERT INTO cadastro(id_usuario, nome, email, senha, datanasc, sexo) VALUES ( NULL, '$nome', '$email', '$senha', '$datanasc', '$sexo')");











?>