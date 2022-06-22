<?php
//儲存使用者修改的資料

$nickName = isset($_GET["nickName"]) ? $_GET["nickName"] : "";
$userName = isset($_GET["userName"]) ? $_GET["userName"] : ""; /* 索引值 */
$password = isset($_GET["password"]) ? $_GET["password"] : "";
$gender = isset($_GET["gender"]) ? $_GET["gender"] : "";
$birthday = isset($_GET["birthday"]) ? $_GET["birthday"] : "";
$phoneNumber = isset($_GET["phoneNumber"]) ? $_GET["phoneNumber"] : "";
$email = isset($_GET["email"]) ? $_GET["email"] : "";
$address = isset($_GET["address"]) ? $_GET["address"] : "";

//建立連結
$link = require_once("../phpCode/inc/LoginDB.inc");

$sql = "UPDATE userdb SET 
nickName = '$nickName' WHERE userName = '$userName'";

$sql = sprintf(
    'UPDATE userdb SET 
    nickName = "%s", password = "%s", gender = "%s", birthday = "%s", 
    phoneNumber = "%s", email = "%s", address = "%s" WHERE userName = "%s"',
    $nickName, $password, $gender, $birthday, $phoneNumber, $email, $address, $userName);

// 執行修改
$result = $link->query($sql);

if (!$result) {
    die($link->error);
    print "modify error";
} else {
    print $result;
}

// print $nickName;
// print $userName;
// print $password;
// print $gender;
// print $birthday;
// print $phoneNumber;
// print $email;
// print $address;
