<?php
//測試抓取遠端IP
if(!empty($_SERVER["HTTP_CLIENT_IP"]))
    	{
    		$cip = $_SERVER["HTTP_CLIENT_IP"];
    	}
    	else if(!empty($_SERVER["HTTP_X_FORWARDED_FOR"]))
    	{
    		$cip = $_SERVER["HTTP_X_FORWARDED_FOR"];
    	}
    	else if(!empty($_SERVER["REMOTE_ADDR"]))
    	{
    		$cip = $_SERVER["REMOTE_ADDR"];
    	}
    	else
    	{
    		$cip = '';
    	}
echo $cip;