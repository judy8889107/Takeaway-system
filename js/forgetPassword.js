function retransmit($t) {
    $t -= 1;
    if ($t <= 0) {
        $("#submit").prop("disabled", false);
        $("#submit").attr("value", "重新傳送");
        clearInterval(interval);
    } else {
        $str = "重新傳送(" + String($t) + ")";
        $("#submit").attr("value", $str);
    }

}
$(document).ready(function () {
    var validCode;
    $("#forgetPasswordFrom").submit(function (e) {
        var form = $(this);
        var url = form.attr('action');
        

        // 提交表單
        $.ajax({
            type: "POST",
            url: url,
            dataType: "text", //接收text資料
            data: form.serialize(), // serializes the form's elements.
            success: function (data) {
                data = data == "false" ? false : data; /* 判斷後台是回傳false(找不到用戶資料)或驗證碼 */
                if (!data){
                    alert("找不到此電子郵件所註冊的帳號，請重新輸入");
                } 
                else {
                    validCode = data;
                    // alert(validCode); /* 測試用顯示驗證碼 */
                    $t = 30; /* 30秒才能傳送一次驗證碼 */
                    $("#submit").prop("disabled", true);
                    $("#submit").attr("value", "重新傳送(" + String($t) + ")");
                    var interval = setInterval(function () {
                        $t -= 1;
                        if ($t <= 0) {
                            $("#submit").prop("disabled", false);
                            $("#submit").attr("value", "重新傳送");
                            clearInterval(interval);
                        } else {
                            $str = "重新傳送(" + String($t) + ")";
                            $("#submit").attr("value", $str);
                        }
                    
                    }, 1000);
                    $("#inputCodeSubmit").prop("disabled", false); /* 啟用確認鍵 */
                    $("#validCode").val(validCode); /* 傳送隱藏資料 */
                }

            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    })

    $("#inputCodeSubmit").click(function () {
        $inputCode = $("input[name='inputCode']").val();
        // 若輸入一致則加載後台php，且跳回首頁
        if (validCode == $inputCode) {
            alert("輸入成功，即將跳轉至首頁");
            $("body").load("../phpCode/verifyValidCode.php"); /* 加載後台session */
            $(location).prop("href", "HomePage.html"); /* 登入成功跳轉首頁 */
        }
        else alert("驗證碼不一致，請重新嘗試!!");
    });

})