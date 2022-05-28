<?php

//建立連結
$link = require_once("./inc/LoginDB.inc");

$userName = isset($_POST["userName"])? $_POST["userName"]: "";
$password = isset($_POST["password"])? $_POST["password"]: "";
$sql = "SELECT userName, phoneNumber, email FROM userdb";
$result = mysqli_query($link, $sql);
$field_count = $result->field_count;
$userNameMatch = false;
$passwordMatch = false;


// 核對使用者帳號
while($row = mysqli_fetch_row($result)){
    for($i=0;$i<$field_count;$i++){
        if(strcmp($row[$i],$userName) == 0){
            $userNameMatch = true;
            break;
        }
    }
}
// 若存在此帳號，則檢查密碼
if($userNameMatch){
    $sql = "SELECT password FROM userdb";
    $result = mysqli_query($link, $sql);
    while($row = mysqli_fetch_row($result)){
        if(strcmp($row[0],$password) == 0){
            $passwordMatch = true;
            break;
        }
    }
}


if($userNameMatch && $passwordMatch) print "true";
else print "false";

// 關閉資料庫連結
mysqli_close($link);
?>