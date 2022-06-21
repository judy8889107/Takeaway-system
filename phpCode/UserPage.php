<?php
// 得到user相關資料
if (!isset($_SESSION)) {
    session_start();
}
$userName = isset($_SESSION['userName']) ? $_SESSION['userName'] : "";
$attr = array("nickName", "userName", "password", "gender", "birthday", "phoneNumber", "email", "address");
$response = array();
if($userName!=""){
    //建立連結
    $link = require_once("../phpCode/inc/LoginDB.inc");
    $sql = "SELECT * FROM userdb WHERE userName='$userName'";
    $result = mysqli_query($link, $sql);

    $row = mysqli_fetch_row($result);

    for($i=0;$i<count($attr);$i++){
        $response[$attr[$i]] = $row[$i];
    }
    //回傳結果給前台
    $response = json_encode($response); // (將陣列轉為json檔案)
    print($response);
}
