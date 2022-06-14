<?php

//登入資料庫
$host = 'localhost';  //host
$dbuser ='root';  //帳號
$dbpassword = 'judy890912'; //密碼
$dbname = 'takeaway-system'; //資料庫名稱
$link = mysqli_connect($host,$dbuser,$dbpassword,$dbname);

// if(!$link) echo '<script type="text/javascript">alert("連接資料庫失敗")</script>';
// else echo '<script type="text/javascript">alert("連接資料庫成功")</script>';

//送出UTF8編碼的MySQL指令
mysqli_query($link, 'SET NAMES utf8'); 

return $link;

?>