/*
Create by rabbi on 2022/7/4 
*/


const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js','./src/App.js'],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
        ],
    },
};