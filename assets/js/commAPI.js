axios.defaults.baseURL = 'http://api-breakingnews-web.itheima.net'

// 添加全局的请求拦截器
axios.interceptors.request.use(function(config) {
    console.log('----------ajax请求前', config);

    console.log(config.url);
    const token = localStorage.getItem('token') || ''
    if (config.url.startsWith('/my')) {
        config.headers.Authorization = token
    }
    return config

}, function(error) {
    return Promise.reject(error)
})

// 添加全局响应拦截器
axios.interceptors.response.use(function(response) {
    console.log('---------接受响应前', response);
    const { message, status } = response.data
    if (message == '身份认证失败！' && status == 1) {
        localStorage.removeItem('token')
        localStorage.href = './login.html'
    }

    return response.data
}, function(error) {
    return Promise.reject(error)
})