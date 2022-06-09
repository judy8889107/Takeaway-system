<?php

//後台讀取item
$link = require_once("../phpCode/inc/LoginDB.inc");
// if($link) echo '<script type="text/javascript">alert("連接資料庫成功")</script>';

$sql = "SELECT id, name, category, rating, price, quantity, img, cal FROM fooditem";
$result = mysqli_query($link, $sql);
$label = array("id", "name", "category", "rating", "price", "quantity", "img", "cal");
$arr = array();


while ($row = mysqli_fetch_row($result)) {
    $tmp = array();
   for($i=0;$i<8;$i++){
       $tmp[$label[$i]] = $row[$i];
   }
   array_push($arr,$tmp);
}

$json_arr = json_encode($arr);
print $json_arr;


