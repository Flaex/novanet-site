<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "Error, es necesario enviar el mensaje de contacto";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email))
{
    echo "Los campos nombre y apaellido son requeridos";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Ingrese uan dirección de email válida";
    exit;
}

$email_from = 'contact-form@gruponovanet.com.ve';//<== update the email address
$email_subject = "Mensaje gruponovanet.com.ve";
$email_body = "Has recibido un mensaje de $name.\n"
    "Mensaje: \n $message.";

$to = "fpolania@gmail.com";//<== update the email address
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
