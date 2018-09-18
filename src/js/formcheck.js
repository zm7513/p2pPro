
$(document).ready(function () {
    // -----------------------------------------------------------注册表单验证------------------------------------------------------------
    $('#regForm')
        .bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    message: '用户名验证失败',
                    validators: {
                        notEmpty: {
                            message: '用户名不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 12,
                            message: '用户名长度必须在6~12为之间'
                        },
                    }
                },
                password: {
                    message: '密码验证失败',
                    validators: {
                        notEmpty: {
                            message: '密码不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 18,
                            message: '密码长度必须在6~18为之间'
                        },
                    }
                },
            }
        })
        .on('success.form.bv', function (e) {
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            //发送ajax请求
            var data = $form.serialize();
            // console.log(data)
            var regUrl = './api/userAdd.php'
            $.post(regUrl, data, function (result) {
                if (result.isSuccess) {
                    alert(result.msg);
                    location.href = './login.php'
                } else {
                    alert(result.msg);
                }


            }, 'json');
        });
    // ---------------------------------------------------------登录表单验证------------------------------------------------------------
    $('#loginForm')
        .bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    message: '用户名验证失败',
                    validators: {
                        notEmpty: {
                            message: '用户名不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 12,
                            message: '用户名长度必须在6~12为之间'
                        },
                    }
                },
                password: {
                    message: '密码验证失败',
                    validators: {
                        notEmpty: {
                            message: '密码不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 18,
                            message: '密码长度必须在6~18为之间'
                        },
                    }
                },
            }
        })
        .on('success.form.bv', function (e) {
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            //发送ajax请求
            var data = $form.serialize();
            // console.log(data)
            var regUrl = './api/userCheck.php'
            $.post(regUrl, data, function (result) {
                if (result.isSuccess) {
                    //成功
                    //设置蒙层的标题
                    $("#msgShowTitle").text("登录成功")
                    //设置蒙层内容
                    $("#msgShowContent").html(`<span class='glyphicon glyphicon-ok'></span> ${result.msg}, 等待<span id='num'>6</span>秒后跳转到个人中心`);
                    //定时器修改等待的数字
                    let num = 6;
                    var timesId = setInterval(() => {
                        num--;
                        $("#num").text(num);
                        if (num == 0) {
                            clearInterval(timesId);
                            location.href = './personal.php'
                        }
                    }, 1000)
                } else {
                    //失败
                    //设置蒙层的标题
                    $("#msgShowTitle").text("失败")
                    //设置蒙层内容
                    $("#msgShowContent").html("<span class='glyphicon glyphicon-remove'></span>" + result.msg);
                }
                //3. 显示蒙层
                $('#msgShowModal').modal('show');
            }, 'json');
        });


});