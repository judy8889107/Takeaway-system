<?php
    // 啟動session
    session_start();
    if (isset($_SESSION['islogin'])) {
    // 若已經登入
    echo "你好! ".$_SESSION['userName'].' ,歡迎來到個人中心!<br>';
    echo "F5重新整理即可登出";
    session_destroy(); /* 清除session */
    } else {
    // 若沒有登入
    echo "您還沒有登入,請<a href='./SubPage/Login.html'>登入</a>";
    echo "或是<a href='./SubPage/Register.html'>新用戶註冊</a>";
    }
?>