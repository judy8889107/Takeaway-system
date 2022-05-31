<?php

require_once '../res/Botman/vendor/autoload.php'; //BotMan Library依賴

//引入ReplyClass底下所有php
foreach (glob("../res/Botman/ReplyClass/*.php") as $filename) {
  require $filename;
}

use BotMan\BotMan\BotMan;
use BotMan\BotMan\BotManFactory;
use BotMan\BotMan\Drivers\DriverManager;


$config = [
    'web' => [
    	'matchingData' => [
            'driver' => 'web',
        ],
    ]
];

// Load the driver(s) you want to use
//載入使用的driver的class
DriverManager::loadDriver(\BotMan\Drivers\Web\WebDriver::class);

//建立一個BotMan物件，就可以使用BotMan Library提供的函數
$botman = BotManFactory::create($config);


//支持正則表達

//一般正常聊天匹配 
/* 	

.：任意匹配字元
*：0到多次 
?!：不包含整個字串
emoji使用：將emoji轉換成dex即可顯示

*/

//test
//引用外部的(class@functionName)
$botman->hears('.*說?講?笑話.*', 'General@RandomJoke'); //機器人聽到:講笑話, 說笑話, 笑話
$botman->hears('(.*熱量.*)', 'CalorieDB@FindDB'); //機器人聽到含 熱量 關鍵字字串
$botman->hears('.*(迷因|meme).*', 'General@Meme'); //機器人聽到含 迷因,meme 關鍵字字串
$botman->hears('.*(你好|哈瞜|Hello|Hi).*', 'General@Hello'); //機器人打招呼
$botman->hears('.*你.*(?=名字|性別|歲|年齡|誰|是|生日).*', 'General@RobotInfo'); //詢問機器人的資訊
$botman->hears('(大*前天|昨天|今天|明天|大*後天).*(是|日期|星期).*(?!天氣)', 'General@Date'); //查詢日期











// Start listening
$botman->listen();





