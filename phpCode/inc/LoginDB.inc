<?php

//登入資料庫
$host = 'localhost';  //host
$dbuser ='team12';  //帳號
$dbpassword = 'team12'; //密碼
$dbname = 'takeaway-system'; //資料庫名稱
$link = mysqli_connect($host,$dbuser,$dbpassword,$dbname);

if(!$link) echo '<script type="text/javascript">alert("連接資料庫失敗")</script>';
else echo '<script type="text/javascript">alert("連接資料庫成功")</script>';

//送出UTF8編碼的MySQL指令
mysqli_query($link, 'SET NAMES utf8'); 

?>