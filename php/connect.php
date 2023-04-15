<?php
$host = "localhost";
$banco = "tcc";
$usuario = "root";
$senha = "root";

/* $host = "bdmakeendsmeet.mysql.dbaas.com.br";
$banco = "bdmakeendsmeet";
$usuario = "bdmakeendsmeet";
$senha = "Makeendsmeet@0"; */

$conn = mysqli_connect($host, $usuario, $senha, $banco);

if (!$conn) {
    die("Falha na Conexão: " . mysqli_connect_error());
}

?>