<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "Error! Esta archivo no muestra contenido, por favor regrese al formulario.";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email))
{
    echo "Los campos nombre y correo son obligatorios";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Correo incorrecto";
    exit;
}

$email_from = $visitor_email;//<== update the email address
$email_subject = "Nuevo mensaje formulario de contacto gruponovanet.com.ve";
$email_body = "$name ha enviado un mensaje: \n".
    					"$message\n".

$to = "info@gruponovanet.com.ve";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: ../thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>
