<?php

//註冊按鈕

//連接資料庫
$host = 'localhost';  //host
$dbuser ='root';  //帳號
$dbpassword = 'judy890912'; //密碼
$dbname = 'takeaway-system'; //資料庫名稱
$link = mysqli_connect($host,$dbuser,$dbpassword,$dbname);

if(!$link) echo '連接錯誤';
else echo '連接成功';

$nickName = $_POST["nickName"];
$userName = $_POST["userName"];
$password = $_POST["password"];
$gender = $_POST["gender"];
$phoneNumber = $_POST["phoneNumber"];
$email = $_POST["email"];


print "姓名: ".$nickName."<br/>";
print "帳號: ".$userName."<br/>";
print "密碼: ".$password."<br/>";
print "性別: ".$gender."<br/>";
print "聯絡號碼: ".$phoneNumber."<br/>";
print "Email: ".$email."<br/>";





?>