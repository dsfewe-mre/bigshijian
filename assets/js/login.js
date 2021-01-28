$(function() {

    const { form } = layui
    $('.link a').click(function() {
        $('.layui-form').toggle()
    })
    form.verify({
        pass: [
            /^[\w]{6,12}$/,
            '密码必须6到12位'
        ],
        samePass: function(value) {
            if (value !== $('#pass').val()) {
                return '2次密码输入不一致'
            }
        }
    })

    $('.reg-form').submit(function(e) {
        e.preventDefault()
        axios.post('/api/reguser', $(this).serialize())
            .then(function(res) {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg('注册失败');
                }
                layer.msg('注册成功');
                $('.login-form a').click()
            })
    })

    $('.login-form').submit(function(e) {
        e.preventDefault()
        axios.post('/api/login', $(this).serialize())
            .then(res => {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg('登录失败');
                }
                localStorage.setItem('token', res.token)
                layer.msg('登录成功')
                location.href = './index.html'
            })
    })






})