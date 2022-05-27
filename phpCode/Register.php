
<?php

//建立連結
// $link = require_once("./inc/LoginDB.inc");


//取得表單資料
$nickName = isset($_POST["nickName"])? $_POST["nickName"]: "";
$userName = isset($_POST["userName"])? $_POST["userName"]: "";
$password = isset($_POST["password"])? $_POST["password"]: "";
$gender = isset($_POST["gender"])? $_POST["gender"]: "";
$birthday = isset($_POST["birthday"])? $_POST["birthday"]: "";
$phoneNumber = isset($_POST["phoneNumber"])? $_POST["phoneNumber"]: "";
$email = isset($_POST["email"])? $_POST["email"]: "";

// if($link) print "ok";

// //insert前確認資料有無重複
// $Rep = array("帳號"=>false, "手機號碼"=>false, "電子郵件"=>false);
// // $userNameRep = false;
// // $phoneNumberRep = false;
// // $emailRep = false;
// $isRep = false;
// $sql = "SELECT userName, phoneNumber, email FROM userdb";
// $result = mysqli_query($link, $sql);
// while($row = mysqli_fetch_row($result)){
//     if($row[0] == $userName) $Rep['帳號'] = true;
//     if($row[1] == $phoneNumber) $Rep['手機號碼'] = true;
//     if($row[2] == $email) $Rep['電子郵件'] = true;
//     if($Rep['帳號'] || $Rep['手機號碼'] || $Rep['電子郵件']){
//         $isRep = true;
//         // 有可能帳號一樣，手機號碼也跟別人相同，但是不同列，所以不能break
//     }
// }


// //插入資料
// if(!$isRep){
//     $sql = "INSERT INTO userdb (nickName, userName, password, gender, birthday, phoneNumber, email) 
//     VALUES ('$nickName', '$userName', '$password', '$gender', '$birthday', '$phoneNumber', '$email')";
//     mysqli_query($link,$sql);
// }


// print 3;

// 測試用輸出
// echo $nickName."<br>";
// echo $userName."<br>";
// echo $password."<br>";
// echo $gender."<br>";
// echo $birthday."<br>";
// echo $phoneNumber."<br>";
// echo $email."<br>";

// 關閉資料庫連結
// mysqli_close($link);

?>


 
