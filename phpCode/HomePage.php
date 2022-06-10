<?php
// 啟動session
session_start();
$response = array("islogin" => false);
$attr = array("nickName", "userName", "password", "gender", "birthday", "phoneNumber", "email", "address");



if (isset($_SESSION['islogin'])) { // 若已經登入
    $response["islogin"] = true;
    $userName = $_SESSION['userName'];
    // 使用userName查找資料庫
    //建立連結
    $link = require_once("../phpCode/inc/LoginDB.inc");
    $sql = "SELECT * FROM userdb WHERE userName='$userName'";
    $result = mysqli_query($link, $sql);

    $row = mysqli_fetch_row($result);

    for($i=0;$i<count($attr)-1;$i++){
        $response[$attr[$i]] = $row[$i];
    }
    session_destroy(); /* 清除session */
}
//回傳結果給前台
$response = json_encode($response); // (將陣列轉為json檔案)
print($response);
