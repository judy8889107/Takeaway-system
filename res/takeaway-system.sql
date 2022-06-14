-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-06-14 17:23:14
-- 伺服器版本： 10.4.24-MariaDB
-- PHP 版本： 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `takeaway-system`
--

-- --------------------------------------------------------

--
-- 資料表結構 `fooditem`
--

CREATE TABLE `fooditem` (
  `id` int(11) NOT NULL COMMENT '主鍵',
  `name` varchar(20) NOT NULL COMMENT '獨一值',
  `category` varchar(20) NOT NULL,
  `rating` decimal(10,1) NOT NULL COMMENT '整數部分10位數，小數部分1位數',
  `price` int(11) NOT NULL,
  `img` mediumtext NOT NULL COMMENT '放img連結',
  `quantity` int(11) NOT NULL,
  `cal` int(11) NOT NULL COMMENT '熱量'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `fooditem`
--

INSERT INTO `fooditem` (`id`, `name`, `category`, `rating`, `price`, `img`, `quantity`, `cal`) VALUES
(0, '花茶(熱)', 'Tea', '4.6', 120, '../images/tea/flower tea.jfif', 1, 4),
(1, '韃靼牛排佐咖哩奶油', 'Appetizer', '4.3', 120, '../images/Appetizer/Vegetarische-steak.jfif', 1, 761),
(2, '扇貝蘋果雞汁', 'Appetizer', '4.9', 100, '../images/Appetizer/Scallop with Apple and Chicken Gravy Recipe.jfif', 1, 636),
(3, '綠豆沙鱈魚捲', 'Appetizer', '4.5', 140, '../images/Appetizer/Cod roll.jfif', 1, 537),
(4, '山羊奶酪佐煙燻鮭魚', 'Appetizer', '5.0', 180, '../images/Appetizer/Asparagus.jfif', 1, 614),
(5, '柑橘醬海螯蝦', 'Appetizer', '3.9', 110, '../images/Appetizer/Langoustines met citrussaus.jfif', 1, 732),
(6, '肋眼牛燒紅蘿蔔', 'Appetizer', '4.9', 190, '../images/Appetizer/Rib Eye.jfif', 1, 524),
(7, '奶油素食番茄湯', 'Soup', '3.9', 60, '../images/Soup/Vegan Tomato Soup.jfif', 1, 267),
(8, '生薑南瓜奶油濃湯', 'Soup', '4.9', 120, '../images/Soup/Squash Cream with Ginger _ Cravings Journal.jfif', 1, 388),
(9, '雞肉奶油蘑菇野米濃湯', 'Soup', '4.5', 160, '../images/Soup/Creamy Mushroom Chicken and Wild Rice Soup.jfif', 1, 432),
(10, '金槍魚佐芒果沙拉', 'Salad', '5.0', 150, '../images/Salad/Ahi Tuna Poke Salad with Mango _ foodiecrush_com.jfif', 1, 362),
(11, '烤香菇蓮子蔬食沙拉', 'Salad', '4.9', 200, '../images/Salad/Baked potato bowl with avocado, mushroom, and chickpea.jfif', 1, 289),
(12, '芒果酪梨蝦仁沙拉', 'Salad', '4.8', 200, '../images/Salad/Seadfood.jfif', 1, 357),
(13, '烤脆蘆筍芒果番茄沙拉', 'Salad', '5.0', 190, '../images/Salad/Roasted Crispy Asparagus with Mango Tomato Salad.jfif', 1, 267),
(14, '蒜香三色蝦', 'Entree', '4.6', 230, '../images/Entree/Timbales tricolor.jfif', 1, 414),
(15, '戰斧豬佐蘋果泥', 'Entree', '4.0', 180, '../images/Entree/Paleta.jfif', 1, 462),
(16, '嫩煎羊肋排', 'Entree', '4.2', 230, '../images/Entree/sheep.jfif', 1, 403),
(17, '培根紐約客', 'Entree', '4.2', 260, '../images/Entree/steak.png', 1, 412),
(18, '焗烤牛肉丸', 'Main-course', '4.1', 300, '../images/Main/Slow-baked meatballs.png', 1, 894),
(19, '焗烤臘腸義大利麵', 'Main-course', '3.9', 350, '../images/Main/Half Baked Harvest.jfif', 1, 994),
(20, '奶油雞肉蝴蝶義大利麵', 'Main-course', '5.0', 380, '../images/Main/Creamy Parmesan.png', 1, 987),
(21, '焗烤紅醬牛肉千層麵', 'Main-course', '5.0', 410, '../images/Main/Simple Skillet Pesto Cheese.jfif', 1, 1011),
(22, '橘醬雞肉義大利麵', 'Main-course', '4.6', 360, '../images/Main/Lighter Creamy Cajun.jfif', 1, 732),
(23, '焗烤南瓜奶酪疏食義大利麵', 'Main-course', '5.0', 320, '../images/Main/Butternut Squash.jfif', 1, 767),
(24, '紅燒排骨義大利麵', 'Main-course', '4.8', 360, '../images/Main/Slow Cooker.jfif', 1, 853),
(25, '芒果蛋糕', 'Dessert', '5.0', 120, 'http://localhost/Takeaway-system/images/dessert/Passion Fruit.jfif', 1, 432),
(26, '覆盆子芒果慕斯', 'Dessert', '5.0', 180, 'http://localhost/Takeaway-system/images/dessert/La Bomba.jfif', 1, 341),
(27, '綜合莓果鬆餅', 'Dessert', '3.6', 180, 'http://localhost/Takeaway-system/images/dessert/strawbarry.jfif', 1, 451),
(28, '桑葚奶酪', 'Dessert', '4.0', 110, 'http://localhost/Takeaway-system/images/dessert/Michelin-starred.jfif', 1, 272),
(29, '綠茶慕斯', 'Dessert', '4.8', 170, 'http://localhost/Takeaway-system/images/dessert/green tea.jfif', 1, 387),
(30, '熱情水果茶(冰)', 'Tea', '4.6', 120, 'http://localhost/Takeaway-system/images/tea/fruit tea.jfif', 1, 328),
(31, '夢幻柳橙', 'Tea', '4.8', 160, 'http://localhost/Takeaway-system/images/tea/dream.jfif', 1, 181),
(32, '抹茶巧克力拿鐵', 'Tea', '4.7', 130, 'http://localhost/Takeaway-system/images/tea/matcha.jfif', 1, 355),
(33, '芒果奶昔', 'Tea', '4.9', 170, 'http://localhost/Takeaway-system/images/tea/mango.jfif', 1, 346),
(34, '荔枝百香果', 'Tea', '4.8', 180, 'http://localhost/Takeaway-system/images/tea/passion fruit.jfif', 1, 182),
(35, '草莓奶昔', 'Tea', '4.7', 170, 'http://localhost/Takeaway-system/images/tea/strawbarry.jfif', 1, 281),
(36, '水果茶(熱)', 'Tea', '4.6', 120, 'http://localhost/Takeaway-system/images/tea/hot fruit tea.jfif', 1, 331);

-- --------------------------------------------------------

--
-- 資料表結構 `userdb`
--

CREATE TABLE `userdb` (
  `nickName` varchar(20) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `birthday` date NOT NULL,
  `phoneNumber` text NOT NULL COMMENT '獨一鍵',
  `email` varchar(50) NOT NULL COMMENT '獨一鍵',
  `address` varchar(100) NOT NULL COMMENT '同一地址有家人，所以不為獨一'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `userdb`
--

INSERT INTO `userdb` (`nickName`, `userName`, `password`, `gender`, `birthday`, `phoneNumber`, `email`, `address`) VALUES
('勞贖老吉', '1234', '11111111', 'male', '2022-06-08', '0971773996', 'judy8889107@gmail.com', '臺中市西屯區大容西街63號13樓之一'),
('王老吉', '12345', '11111111', 'female', '2022-05-11', '0971773829', 'dbpteam12@gmail.com', '臺中市西屯區大容西街63號13樓之一'),
('team12', 'team12', 'team1212', 'male', '2022-05-12', '0971111123', 'judy8889107@yahoo.com.tw', '彰化縣北斗鎮中寮三路157巷11號');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `fooditem`
--
ALTER TABLE `fooditem`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- 資料表索引 `userdb`
--
ALTER TABLE `userdb`
  ADD PRIMARY KEY (`userName`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phoneNumber` (`phoneNumber`) USING HASH;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
