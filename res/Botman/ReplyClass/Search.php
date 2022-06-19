<?php

// 查詢熱量資料庫
class Search{
	
	//查找資料庫
	public function Fooditem($bot, $str) {

        //連接資料庫
        $host = 'localhost';  //host
        $dbuser ='root';  //帳號
        $dbpassword = ''; //密碼
        $dbname = 'takeaway-system'; //資料庫名稱
        $link = mysqli_connect($host,$dbuser,$dbpassword,$dbname);

        //$link = require_once("../phpCode/inc/LoginDB.inc");

        if(!$link) $bot->reply("熱量資料庫連接錯誤");
        else {
            
            $str = str_replace(['的','熱量','//s*/'],"",$str); //將"的","熱量",空格去掉
            $sql = "SELECT cal FROM fooditem where name = '$str' ;";
        
            mysqli_query($link, 'SET NAMES utf8');  //送出UTF8編碼的MySQL指令
            $result = mysqli_query($link, $sql) or die(mysqli_error($link));
            $row = mysqli_fetch_row($result);
            $bot->reply($row[0]);
            
            mysqli_close($link);
            
           
        }
    }
	

}

?>