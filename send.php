<?php

$to = "sadikurrahman5295@gmail.com";

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$sub = "codersadikur.com";
$message = $_REQUEST['message'];


$msg = "Name : ".$name."\n";
$msg .= "Email : ".$email."\n";
$msg .= "Message :".$message."\n";   
   
$mail = mail($to,$sub,$msg);
header('location:index.php');

?>