<?php

$isRepeat = "false";
//檢查資料庫有無重複的資料
if (isset($_GET["phoneNumber"])) {
    $phoneNumber = $_GET["phoneNumber"];
    //建立連結
    $link = require_once("./inc/LoginDB.inc");

    $sql = "SELECT phoneNumber FROM userdb";
    $result = mysqli_query($link, $sql);
    while ($row = mysqli_fetch_row($result)) {
        if(strcmp($phoneNumber, $row[0])==0){
            $isRepeat = "true";
            break;
        }
    }
    print $isRepeat;
}
if (isset($_GET["email"])) {
    $email = $_GET["email"];
    //建立連結
    $link = require_once("./inc/LoginDB.inc");

    $sql = "SELECT email FROM userdb";
    $result = mysqli_query($link, $sql);
    while ($row = mysqli_fetch_row($result)) {
        if(strcmp($email, $row[0])==0){
            $isRepeat = "true";
            break;
        }
    }
    print $isRepeat;
}

if(isset($_GET["sendEmail"])){
    $sendEmail = $_GET["sendEmail"];
    $validCode = sprintf("%06d", rand(0,999999)); /* 生成6位驗證碼 */
    // 生成郵件訊息
    date_default_timezone_set('Asia/Taipei');
    $message = sprintf(
        "親愛的用戶您好，您已在%s時，申請變更電子郵件。\n%s 為您的驗證碼。\n若此非您本人的操作，請忽略這封郵件。",
        date("Y/m/d H:i:s"),
        $validCode
    );

    // 寄送驗證碼給使用者，讓使用者可以重設密碼
    // 帳號/密碼: dbpteam12@gmail.com/dbpteam12dbpteam12
    $to      = $sendEmail;
    $subject = '驗證電子郵件';
    $headers = 'From: dbpteam12@gmail.com' . "\r\n" .
        'Reply-To: dbpteam12@gmail.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // 送出郵件功能
    // mail($to, $subject, $message, $headers);

    // // 回傳驗證碼至前台
    print $validCode;
}
