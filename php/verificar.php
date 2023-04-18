<?php

    if(!isset($_SESSION)){
        session_start();
    }

    if(!isset($_SESSION['adm']) && !isset($_SESSION['nor'] )) {

    die("Você não pode acessar esta pagina porque não está logado.<p><a href=\"login.php\">Entrar</a></p>");
    }

?>