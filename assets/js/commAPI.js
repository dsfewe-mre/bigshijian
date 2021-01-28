axios.defaults.baseURL = 'http://api-breakingnews-web.itheima.net'

// 添加全局的请求拦截器
axios.interceptors.request.use(function(config) {
    console.log('----------ajax请求前', config);
    return config

}, function(error) {
    return Promise.reject(error)
})

// 添加全局响应拦截器
axios.interceptors.response.use(function(response) {
    console.log('---------接受响应前', response);
    return response.data
}, function(error) {
    return Promise.reject(error)
})