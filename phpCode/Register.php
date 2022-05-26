<!-- 用戶註冊 -->
<?php

//建立連結
require_once("loginDB.inc");

//取得表單資料
$nickName = $_POST["nickName"];
$userName = $_POST["userName"];
$password = $_POST["password"];
$gender = $_POST["gender"];
$phoneNumber = $_POST["phoneNumber"];
$email = $_POST["email"];



//測試
print "姓名: ".$nickName."<br/>";
print "帳號: ".$userName."<br/>";
print "密碼: ".$password."<br/>";
print "性別: ".$gender."<br/>";
print "聯絡號碼: ".$phoneNumber."<br/>";
print "Email: ".$email."<br/>";





?>