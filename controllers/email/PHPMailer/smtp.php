<?php

header("Access-Control-Allow-Origin: *");

date_default_timezone_set('Etc/UTC');

$subject = $_POST['subject']; 
$body = "This is an Email From : ".$_POST['email']."\nContent : ".$_POST['message']; 

require 'PHPMailerAutoload.php';


$mail = new PHPMailer;

$mail->isSMTP();

$mail->SMTPDebug = 2;

$mail->Host = "smtp.gmail.com";

$mail->Port = 25;

$mail->SMTPAuth = true;

$mail->Username = "btobglobalservices@gmail.com";

$mail->Password = "BtoBGlobalservices55963603";

$mail->setFrom('btobglobalservices@gmail.com');

$mail->addReplyTo('btobglobalservices@gmail.com');

$mail->addAddress('mohamedfiras.barrek@esprit.tn');

$mail->Subject = $subject;

$mail->Body = $body;

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
     ?>
    <script>
            alert('Successfully Sent ! Thank you..');
    </script>
    <?php
    header('Location: ../../');
	exit;
}
?>