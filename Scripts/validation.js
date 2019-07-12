$(document).ready(function () {
    var resultUsername = true;
    var resultPass = true;
    $('#txt_username').blur(function () {
        var warning_username = $('<p class="warningUsername">* Bạn phải nhập tài khoản</p>');
        var username = this.value;
        if (!username) {
            if (resultUsername) {
                $(this).addClass('border-red');
                $(this).after(warning_username);
                resultUsername = false;
            }
        }
    });
    $('#txt_username').keypress(function () {
        $(this).removeClass('border-red');
        $('.warningUsername').remove();
        resultUsername = true;
    });
    $('#txt_pass').blur(function () {
        var pass = this.value;
        if (!pass) {
            if(resultPass) {
                var warningPass = $('<p class="warningPass">* Bạn phải nhập mật khẩu</p>');
                $(this).addClass('border-red');
                $(this).after(warningPass);
                resultPass = false;
            }
        }
    });
    $('#txt_pass').keypress(function () {
        $(this).removeClass('border-red');
        $('.warningPass').remove();
        resultPass = true;
    });   
    //$("button").click(function () {
    //    var warning = $('<p class="warning">* Bạn chưa nhập đủ thông tin</p>');
    //    $('#support').after(warning);
    //});
});
