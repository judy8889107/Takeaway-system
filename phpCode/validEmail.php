<?php

$email = isset($_POST["email"])? $_POST["email"]: "";

 // 隨機生成6位亂數
 $validCode = "";
 for($i=0;$i<6;$i++){
     $validCode = $validCode.strval(rand(0,9));
 }
 // 生成郵件訊息
 date_default_timezone_set('Asia/Taipei');
 $message = sprintf("親愛的用戶您好，您已在%s時，申請新帳號。\n%s 為您的驗證碼。\n若此非您本人的操作，請忽略這封郵件。",
 date("Y/m/d H:i:s"),$validCode);
 
 // 寄送驗證碼給使用者，讓使用者可以重設密碼
 // 帳號/密碼: dbpteam12@gmail.com/dbpteam12dbpteam12
 $to      = $email;
 $subject = '忘記密碼通知';
 $headers = 'From: dbpteam12@gmail.com' . "\r\n" .
     'Reply-To: dbpteam12@gmail.com' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();

 // 送出郵件功能
//  mail($to, $subject, $message, $headers);

 // 回傳驗證碼至前台
 print $validCode;


?>