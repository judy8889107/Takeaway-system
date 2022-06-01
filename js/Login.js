$(document).ready(function () {
    $("#login").submit(function (e) {
        var form = $(this);
        var url = "../phpCode/Login.php";

 
        $.ajax({
            type: "POST",
            url: url,
            dataType: "text", //接收text資料
            data: form.serialize(), // serializes the form's elements.
            success: function (data) { // data == '

                if(data=="falseCaptcha"){
                    alert("驗證碼錯誤，請重新嘗試");
                    $("#imgcode").attr("src", "../phpCode/generateCaptcha.php");
                    $("input[name='password']").val(""); 
                    $("input[name='inputCaptcha']").val(""); /* input清空 */
                }
                else{
                    data = data=="true"? true:false;
                    if(data){
                        alert("登入成功，即將跳轉到首頁...");
                        $(location).prop("href", "HomePage.html"); /* 登入成功跳轉首頁 */
                    }else{
                        alert("帳號/密碼有誤，請重新嘗試");
                        $("#imgcode").attr("src", "../phpCode/generateCaptcha.php");
                        $("input[name!='submit']").val(""); /* input清空 */
                    }
                }


            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.


    })

});

function refresh_code() {
    $("#imgcode").attr("src", "../phpCode/generateCaptcha.php");
}