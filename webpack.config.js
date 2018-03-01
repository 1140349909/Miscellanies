/**
 * Created by caihong on 2018/3/1.
 */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.html',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {test: /\.css$/, use: 'css-loader'},
            {test: /\.ts$/, use: 'ts-loader'},
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
        ]
    }
};