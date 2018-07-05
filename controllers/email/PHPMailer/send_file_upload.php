<?php
/**
 * PHPMailer simple file upload and send example
 */
header("Access-Control-Allow-Origin: *");

date_default_timezone_set('Etc/UTC');

$subject = $_POST['subject']; 
$body = "This is an Email From : ".$_POST['email']."\nContent : ".$_POST['message']; 
$msg = '';
if (array_key_exists('userfile', $_FILES)) {
    // First handle the upload
    // Don't trust provided filename - same goes for MIME types
    // See http://php.net/manual/en/features.file-upload.php#114004 for more thorough upload validation
    $uploaddir = '../../uploads/';
    $uploadfile = $uploaddir . basename($_FILES['userfile']['name']);
    //$uploadfile = tempnam(sys_get_temp_dir(), 'upload');
    if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
        // Upload handled successfully
        // Now create a message
        // This should be somewhere in your include_path
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

        $mail->addAddress('btobglobalservices@gmail.com');

        $mail->Subject = $subject;

        $mail->Body = $body;
        // Attach the uploaded file
        $mail->addAttachment($uploadfile, $_FILES['userfile']['name']);
        if (!$mail->send()) {
            $msg .= "Mailer Error: " . $mail->ErrorInfo;
        } else {
            ?>
                <script>
                    window.location = "http://localhost/maher-project/#/search";
                    alert('Successfully Sent ! Thank you..');
                </script>
            <?php

        }
    } else {
        $msg .= 'Failed to move file to ' . $uploadfile;
    }
}
?>
