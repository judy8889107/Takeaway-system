<?php
//測試抓取遠端IP
if (!empty($_SERVER["HTTP_CLIENT_IP"])) {
    $cip = $_SERVER["HTTP_CLIENT_IP"];
} else if (!empty($_SERVER["HTTP_X_FORWARDED_FOR"])) {
    $cip = $_SERVER["HTTP_X_FORWARDED_FOR"];
} else if (!empty($_SERVER["REMOTE_ADDR"])) {
    $cip = $_SERVER["REMOTE_ADDR"];
} else {
    $cip = '';
}
if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')
    $url = "https://";
else
    $url = "http://";
// Append the host(domain name, ip) to the URL.   
$url .= $_SERVER['HTTP_HOST'];

// Append the requested resource location to the URL   
// $url .= $_SERVER['REQUEST_URI'];

echo $url;
