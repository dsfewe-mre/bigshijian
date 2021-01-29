$(function() {
    const { layer } = layui

    function getUserInfo() {
        var token = localStorage.getItem('token') || ''
        axios({
            url: '/my/userinfo',
            heades: { 'Authorization': token }
        }).then(res => {
            console.log(res);
            if (res.status !== 0) {
                return layer.msg('获取信息失败')
            }
            const { data } = res
            const name = data.nickname || data.username
            $('.nickname').text(`欢迎 ${name}`).show()
            if (data.user_pic) {
                $('.avater').prop('src', data.user_pic).show()
                $('.text-avater').hide()
            } else {
                $('.text-avater').text(data.username[0]).show()
                $('.avater').hide()
            }

        })
    }
    getUserInfo()


    $('#logout').click(function() {
        localStorage.removeItem('token')
        location.href = './login.html'

    })












})