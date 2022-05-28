<?php
    // 啟動session
    session_start();
    if (isset($_SESSION['islogin'])) {
    // 若已經登入
    echo "你好! ".$_SESSION['userName'].' ,歡迎來到個人中心!<br>';
    echo "登出";
    } else {
    // 若沒有登入
    echo "您還沒有登入,請<a href='./SubPage/Login.html'>登入</a>";
    }
?>