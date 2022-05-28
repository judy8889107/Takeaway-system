<?php
// 寄送驗證碼給使用者，讓使用者可以重設密碼

//建立連結
$link = require_once("./inc/LoginDB.inc");

$userName = isset($_POST["userName"])? $_POST["userName"]: "";
$sql = "SELECT userName, phoneNumber, email FROM userdb";
$result = mysqli_query($link, $sql);
$field_count = $result->field_count;
$userEmail = false;

// 核對帳號並得到使用者email
while($row = mysqli_fetch_row($result)){
    for($i=0;$i<$field_count;$i++){
        if(strcmp($row[$i],$userName) == 0){
            $userEmail = $row[$field_count-1];
            break;
        }
    }
}

if($userEmail){
    // 隨機生成6位亂數
    $validCode = "";
    for($i=0;$i<6;$i++){
        $validCode = $validCode.strval(rand(0,9));
    }
    // 生成郵件訊息
    date_default_timezone_set('Asia/Taipei');
    $message = sprintf("親愛的用戶您好，您已在%s時，申請忘記密碼。\n%s 為您的驗證碼。\n若此非您本人的操作，請忽略這封郵件。",
    date("Y/m/d H:i:s"),$validCode);
    
    // 寄送驗證碼給使用者，讓使用者可以重設密碼
    // 帳號/密碼: dbpteam12@gmail.com/dbpteam12dbpteam12
    $to      = $userEmail;
    $subject = '忘記密碼通知';
    $headers = 'From: dbpteam12@gmail.com' . "\r\n" .
        'Reply-To: dbpteam12@gmail.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // 送出郵件功能
    mail($to, $subject, $message, $headers);

    // 回傳驗證碼至前台
    print $validCode;

}else print $userEmail;


?>