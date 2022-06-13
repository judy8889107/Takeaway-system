<?php


$response = array("CaptchaMatch"=>false, "islogin"=> false, "isSupervisor"=> false);
// 判斷session是否已啟動
if (!isset($_SESSION)) {
    session_start();
}
// 先檢查驗證碼是否正確
if ((!empty($_SESSION['check_word'])) || (!empty($_POST['inputCaptcha']))) {  //判斷此兩個變數是否為空
    if ($_SESSION['check_word'] != $_POST['inputCaptcha']){
        $response["CaptchaMatch"] = false;
    }
        
        
    else { // 若驗證碼正確則檢查帳號密碼
        $response["CaptchaMatch"] = true;
        //建立連結
        $link = require_once("./inc/LoginDB.inc");

        $userName = isset($_POST["userName"]) ? $_POST["userName"] : "";
        $password = isset($_POST["password"]) ? $_POST["password"] : "";
        $sql = "SELECT userName, phoneNumber, email, nickName FROM userdb";
        $result = mysqli_query($link, $sql);
        $field_count = $result->field_count;
        $userNameMatch = false;
        $passwordMatch = false;


        // 核對使用者帳號
        while ($row = mysqli_fetch_row($result)) {
            for ($i = 0; $i < $field_count-1; $i++) {
                if (strcmp($row[$i], $userName) == 0) {
                    $userNameMatch = true;
                    break;
                }
            }
        }
        // 若存在此帳號，則檢查密碼
        if ($userNameMatch) {
            $sql = "SELECT password FROM userdb";
            $result = mysqli_query($link, $sql);
            while ($row = mysqli_fetch_row($result))
                if (strcmp($row[0], $password) == 0) {
                    $passwordMatch = true;
                    break;
                }
        }


        // 帳號密碼皆符合
        if ($userNameMatch && $passwordMatch) {
            $response["islogin"] = true;
            $_SESSION['userName'] = $userName;
            $_SESSION['islogin'] = 1;
            //匹配管理者
            if($userName == "team12"){
                $_SESSION['isSupervisor'] = 1;
                $response["isSupervisor"] = true;
            } 
        }
        
        // 關閉資料庫連結
        mysqli_close($link);
    }
}
// 傳送資料到前台
$response = json_encode($response); // (將陣列轉為json檔案)
print $response;
