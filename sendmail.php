<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language/');
$mail->IsHTML(true);


$mail->setFrom('tudorsidana@gmail.com', 'De la cine');
$mail->addAddress('aaw1713tudor@gmail.com');
$mail->Subject = 'Salut ';


$body = '<h1>Super scrisore<br>';

if(trim(!empty($_POST['first']))){
    $body.='<p><strong>First Name:<strong>' .$_POST['first'].'<p>';}

    if(trim(!empty($_POST['last']))){
        $body.='<p><strong>Last Name:<strong>' .$_POST['last'].'<p>';}

        if(trim(!empty($_POST['email']))){
            $body.='<p><strong>Email:<strong>' .$_POST['email'].'<p>';}

            if(trim(!empty($_POST['phone']))){
                $body.='<p><strong>Phone:<strong>' .$_POST['phone'].'<p>';}

                if(trim(!empty($_POST['message']))){
                    $body.='<p><strong>Message:<strong>' .$_POST['message'].'<p>';
}

$mail->Body = $body;

if(!$mail->send()){
    $message = 'greseala la trimitere';
}else{
    $message = 'email sa trimis cu succes';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
