<?php

// 啟動session
if (!isset($_SESSION)) {
    session_start();
}
$_SESSION['islogin'] = 0;

?>