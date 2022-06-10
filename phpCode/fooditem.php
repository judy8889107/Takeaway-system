<?php

//後台讀取item
$link = require_once("../phpCode/inc/LoginDB.inc");
// if($link) echo '<script type="text/javascript">alert("連接資料庫成功")</script>';

$sql = "SELECT * FROM fooditem";
$result = mysqli_query($link, $sql);
$label = array();
$arr = array();

//取得attribute
$fieldInfo = mysqli_fetch_fields($result);
foreach($fieldInfo as $val){
    array_push($label,$val->name);
}

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


