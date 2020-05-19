<?php
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $assunto = $_POST['assunto'];
  $mensagemEnviar = $_POST['mensagem'];
 
  $meuEmail = "contato@ajudamais.org";
  $mensagem = "Nome: ".$nome."\n";
  $mensagem.= "Email: ".$email."\n";
  $mensagem.= "Mensagem: ".$mensagemEnviar;
  $cabecalho = "From: ".$email."\r\n";
  $enviarEmail= mail("$meuEmail","$assunto","$mensagem","$cabecalho");
 
  $mensagem = "Olá ".$nome." a equipe ajudamais.org recebeu o seu email, em breve entramos em contato com você!\n";
  $cabecalho = "From: ".$meuEmail."\r\n";
  $assunto = "Equipe AjudaMais.org";
  $enviarEmail= mail("$email","$assunto","$mensagem","$cabecalho");
 
?>
