let proxyObj = {}

proxyObj['/'] = {
    //websocket
    ws: false,
    //目标地址
    target: 'http://120.77.60.161:8083',
    //发送请求头host会被设置target
    changeOrigin: true,
    //不重写请求地址
    pathRewrite: {
        '^/': "/"
    }
}

proxyObj['/ws'] = {
    ws: true,
    target: 'ws://120.77.60.161:8083'
}

module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj
    }
}