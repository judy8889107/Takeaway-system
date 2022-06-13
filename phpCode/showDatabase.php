<?php

//登入
$link = require_once("./inc/LoginDB.inc");
// echo '<script type="text/javascript">alert("連接資料庫成功")</script>';

$dataformName = isset($_POST["dataformName"]) ? $_POST["dataformName"] : "";

//選取不同的表
switch($dataformName){
    case "show_userdb":
        $sql = "SELECT * FROM userdb";
        break;
    case "show_fooditem":
        $sql = "SELECT * FROM fooditem";
        break;
}
$label = array();
$arr = array();
$result = mysqli_query($link, $sql);
$fieldInfo = mysqli_fetch_fields($result);

foreach($fieldInfo as $val){
    array_push($label, ucfirst($val->name));
}
//將label放入
array_push($arr,$label);
while ($row = mysqli_fetch_row($result)) {
    $tmp = array();
   for($i=0;$i<count($label);$i++){
       $tmp[$label[$i]] = $row[$i];
   }
   array_push($arr,$tmp);
}
//回傳json檔
$json_arr = json_encode($arr);
print $json_arr;











?>