var emailCheck = false;
var allValid = 1; /* 確認所有欄位是否合法 */
//當docment ready(DOM樹建立起來)
$(document).ready(function () {
    var validCode;
    var txtPath = location.href.replace(/SubPage.*/,"res/txt/");
    //動態新增&&判斷select option
    //讀取檔案
    $.get("../res/txt/county.txt", function (data) {
        data = data.split(/[(\r\n)\r\n]+/); //分行為array
        $("#countySelect").append('<option value="" disabled selected>縣市</option>');
        for (var i = 0; i < data.length; i++) {
            $("#countySelect").append('<option value=' + data[i] + '>' + data[i] + '</option>');

        };
        // UI刷新  
        $('#countySelect').selectpicker('refresh');
        $('#countySelect').selectpicker('render');
    });
    //判斷下拉選單值變化(countySelect)
    $("#countySelect").change(function () {
        var countySelect = $(this).children('option:selected').attr("value");
        var encodeURL = encodeURI(txtPath + "township/" + countySelect + ".txt"); /* 使用localhost網址 */
        $.get(encodeURL, function (data) {
            data = data.split(/[(\r\n)\r\n]+/); //分行為array
            $("#townshipSelect").empty(); /* 先清空欄位再新增 */
            $("#townshipSelect").append('<option value="" disabled selected>鄉鎮[市]區</option>');
            for (var i = 0; i < data.length; i++) {
                $("#townshipSelect").append('<option value=' + data[i] + '>' + data[i] + '</option>');

            };
            // UI刷新  
            $('#townshipSelect').selectpicker('refresh');
            $('#townshipSelect').selectpicker('render');
        });
    });
    //判斷下拉選單值變化(townshipSelect)
    $("#townshipSelect").change(function () {
        var countySelect = $("#countySelect").children('option:selected').attr("value");
        var streetSelect = $(this).children('option:selected').attr("value");
        var encodeURL = encodeURI(txtPath  + countySelect + "/" + streetSelect + ".txt"); /* 使用localhost網址 */
        $.get(encodeURL, function (data) {
            data = data.split(/[(\r\n)\r\n]+/); //分行為array
            $("#streetSelect").empty(); /* 先清空欄位再新增 */
            $("#streetSelect").append('<option value="" disabled selected>路(街)名或鄉里名稱</option>');
            for (var i = 0; i < data.length; i++) {
                $("#streetSelect").append('<option value=' + data[i] + '>' + data[i] + '</option>');

            };
            // UI刷新  
            $('#streetSelect').selectpicker('refresh');
            $('#streetSelect').selectpicker('render');
        });
    });

    function nickNamecheck(nickName) {
        if (nickName.length < 4) {
            document.getElementById("nickNameHint").innerHTML = "長度過短";
            return 1; /* 有錯誤標記為1 */
        }

        else {
            document.getElementById("nickNameHint").innerHTML = "";
            return 0;
        }
    }

    function userNamecheck(userName) {
        if (userName.length < 4) {
            document.getElementById("userNameHint").innerHTML = "帳號長度過短";
            return 1;
        }
        else {
            document.getElementById("userNameHint").innerHTML = "";
            return 0;
        }
    }

    function passwordcheck(password) {
        if (password.length < 8) {
            document.getElementById("passwordHint").innerHTML = "長度至少要為8";
            return 1;
        }

        else {
            document.getElementById("passwordHint").innerHTML = "";
            return 0;
        }
    }

    function checkpasswordcheck(password, checkpassword) {
        if (checkpassword != password) {
            document.getElementById("checkpasswordHint").innerHTML = "輸入密碼不一致，請重新輸入";
            return 1;
        }

        else {
            document.getElementById("checkpasswordHint").innerHTML = "";
            return 0;
        }
    }

    function phoneNumbercheck(phoneNumber) {
        if (!phoneNumber.match("^09[0-9]{8}")) {
            document.getElementById("phoneNumberHint").innerHTML = "錯誤的格式";
            return 1;
        }

        else {
            document.getElementById("phoneNumberHint").innerHTML = "";
            return 0;
        }
    }

    function emailcheck(email) {
        var validReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (!email.match(validReg)) {
            document.getElementById("emailHint").innerHTML = "錯誤的格式";
            $("#validEmail").prop("disabled", true);
            return 1;
        }
        else {
            document.getElementById("emailHint").innerHTML = "";
            $("#validEmail").prop("disabled", false);
            return 0;
        }

    }

    function RESTaddresscheck(RESTaddress) {
        var validReg = /[\u4E00-\u9FA5\d]+$/;
        if (!RESTaddress.match(validReg)) {
            document.getElementById("RESTaddressHint").innerHTML = "錯誤的地址格式";
            return 1;
        }
        else {
            document.getElementById("RESTaddressHint").innerHTML = "";
            return 0;
        }
    }
    /* 一開始所有欄位皆設為不正確 */
    $nickName = $userName = $password = $checkpassword = $phoneNumber = $email = $RESTaddress = 1; 
    //動態判斷input
    // 判斷所有欄位
    $('input[name!=inputCode]').bind("input propertychange", function (e) {
        var element = e.target.name;
        switch (element) {
            case "nickName":
                $nickName = nickNamecheck($("input[name='nickName']").val());
                break;
            case "userName":
                $userName = userNamecheck($("input[name='userName']").val());
                break;
            case "password":
                $password = passwordcheck($("input[name='password']").val());
                break;
            case "checkpassword":
                $checkpassword = checkpasswordcheck($("input[name='password']").val(), $("input[name='checkpassword']").val());
                break;
            case "phoneNumber":
                $phoneNumber = phoneNumbercheck($("input[name='phoneNumber']").val());
                break;
            case "email":
                $email = emailcheck($("input[name='email']").val());
                break;
            case "RESTaddress":
                $RESTaddress = RESTaddresscheck($("input[name='RESTaddress']").val());
                break;

        }
        allValid = ($nickName + $userName + $password + $checkpassword + $phoneNumber + $email + $RESTaddress);





    });

    // 先進行電子信箱認證
    $("#validEmail").click(function () {

        $email = $("input[name='email']").val();
        $.ajax({
            type: "POST",
            url: "../phpCode/validEmail.php",
            dataType: "text",
            data: { email: $email }, /* 傳送email給後台 */
            success: function (data) {
                validCode = data;
                // alert(validCode); /* 測試驗證碼 */
            }
        });
        $("#inputCode").toggle(); /* 顯示隱藏的input */
        $("#inputCodeSubmit").toggle(); /* 顯示隱藏的button */

        $t = 30; /* 30秒才能傳送一次驗證碼 */
        $("#validEmail").prop("disabled", true);
        $("#validEmail").attr("value", "重新傳送(" + String($t) + ")");

        var interval = setInterval(function () {
            $t -= 1;
            if ($t == 0) {
                $("#validEmail").prop("disabled", false);
                $("#validEmail").attr("value", "重新傳送");
                clearInterval(interval);
            } else {
                $str = "重新傳送(" + String($t) + ")";
                $("#validEmail").attr("value", $str);
            }
        }, 1000);



    });
    
    $("#inputCodeSubmit").click(function () {
        $inputCode = $("#inputCode").val();
        if (validCode == $inputCode) {
            alert("驗證碼正確");
            if(allValid == 0) $("#submit").prop("disabled",null); /* 解鎖送出按鈕 */
        }
        else {
            alert("驗證碼錯誤，請重新嘗試");
        }
    });

    // 當按下送出，ajax將表單資料傳到後台(Register.php)
    //  Register.php print資料到前台
    $("#register").submit(function (e) {
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            dataType: "text", //接收json資料
            data: form.serialize(), // serializes the form's elements.
            success: function (data) {

                // 接收表單資料(判斷帳號, 手機號碼, 電子郵件有無重複)
                // {'userNameRep'='true/false', 'phoneNumberRep':'', 'emailRep'=''};
                // 前台做處理
                var registerComplete = false;
                var arr = ["帳號", "聯絡電話", "電子郵件"];
                var index = 0;
                var response = "";
                for (var k in data) {
                    data[k] = data[k] == "true" ? true : false; /* 字串轉boolean */
                    if (data[k]) {
                        if (response != "") response += ", ";
                        response += arr[index];
                    }
                    index++;
                }
                if (!data.userNameRep && !data.phoneNumberRep && !data.emailRep)
                    registerComplete = true;

                // 對用戶返回註冊結果
                if (registerComplete) {
                    $("#formDiv").hide(); /* 註冊成功則表單隱藏 */
                    alert("註冊成功!即將跳轉到首頁");
                    $(location).prop("href", "HomePage.html"); /* 註冊成功跳轉首頁 */
                }
                // 顯示重複的input有哪些
                else {
                    response += "重複，請重新輸入";
                    alert(response);
                }

            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    })



})