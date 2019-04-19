module.exports = {
    lintOnSave: true,
    publicPath:'./',
    devServer: {
        proxy: {
            '/methods': {
                target: 'http://localhost:3000',   //代理接口
                changeOrigin: true,
            }
        }
    }
}
