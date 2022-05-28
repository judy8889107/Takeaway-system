<?php
session_start();
$inputCode = isset($_POST["inputCode"])? $_POST["inputCode"]: "";
$validCode = isset($_POST["validCode"])? $_POST["validCode"]: "";

if(strcmp($inputCode,$validCode) == 0){
    $_SESSION['islogin'] = 1;
    print "true";
}
else print "false";



?>