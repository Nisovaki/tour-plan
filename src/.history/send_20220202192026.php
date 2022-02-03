<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$nameModal = $_POST['nameModal'];
$phoneModal = $_POST['phoneModal'];
$emailModal = $_POST['messageModal'];

$subscribeBtn = $_POST['subscribeBtn'];
$footerBtn = $_POST['footerBtn'];
$modalBtn = $_POST['modalBtn'];

if (isset($modalBtn)) {
$title = "New Booking";
$body = "
<b>Name:</b> $nameModal<br>
<b>Phone:</b> $phoneModal<br>
<b>E-mail:</b> $emailModal<br>
<b>Message:</b><br>$message
";
} else if (isset($footerBtn)) {
$title = "New Appeal";
$body = "
<b>Name:</b> $nameFooter<br>
<b>Phone:</b> $phoneFooter<br>
<b>Message:</b><br>$message
";
}else {
$title = "New Subscriber";
$body = "
<b>E-mail:</b> $emailSub<br>
";
};
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'oksy1695161@gmail.com'; // Логин на почте
    $mail->Password   = 'oks160595'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('oksy1695161@gmail.com', 'Оксана Щербакова'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('oksy169516@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title; 
$mail->Body = $body; 

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
// header('location: index.html');
header('location: thankyou.html');