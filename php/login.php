<?php
    
    include "connect.php";

    $conn = mysqli_connect($host, $usuario, $senha, $banco);

    if(isset($_POST['email']) && isset($_POST['senha'])){
        $email = $_POST['email'];
        $senha = $_POST['senha'];

        $get = $conn -> query("SELECT * FROM cadastro WHERE email = '$email' AND senha = '$senha'");
        $num = mysqli_num_rows($get);

        if($num == 1){
            while($percore = mysqli_fetch_array($get)){
                $tipo_usuario = $percore['tipo_usuario'];
                $usuario = $percore['usuario'];

                session_start();

                if($tipo_usuario == 1){
                    $_SESSION['adm'] = $usuario;

                    header("location: listar.php");
                    
                }else{
                    $_SESSION['nor'] = $usuario;

                    header("location: pagInicial.html");
                }

                
            }
        }else{
            echo'O email ou senha digitados estão errados.';

            header("Refresh: 2; url=login.php");
        }

    }
?>
