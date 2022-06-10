<?php

//登入
$link = require_once("./inc/LoginDB.inc");
// echo '<script type="text/javascript">alert("連接資料庫成功")</script>';

$dataformName = isset($_POST["dataformName"]) ? $_POST["dataformName"] : "";
$sql;

//選取不同的表
switch($dataformName){
    case "show_userdb":
        $sql = "SELECT * FROM userdb";
        break;
    case "show_fooditem":
        $sql = "SELECT * FROM fooditem";
        break;
}

$result = mysqli_query($link, $sql);


print $sql;






?>