/**
 * Created by caihong on 2018/3/1.
 */
const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'buldes.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,//让css-loader支持Css Modules。
                    },
                },],
            },
            {
                test: /\.(png|jpq)$/,
                use: 'url?limit = 40000'
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            // 这两行是处理 react 相关的内容
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.jsx$/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '第一个构建项目',    //配合html-webpack-plugin的配置
            filename: 'index.html',
            template: 'index.html',
            injiect: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: '/src',//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        hot:true,
        inline:true,
        progress:true,
        port:9090//端口自定义
    },
    devtool:'eval-source-map',//这样出错以后就会采用source-map的形式直接显示你出错代码的位置。
};