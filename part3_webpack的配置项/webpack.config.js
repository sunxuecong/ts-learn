//引入一个包
const path  = require('path')
const  HTMLwebpackPlugin = require('html-webpack-plugin')
const  { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports  = {

    //指定入口文件
    entry:'./src/index.ts',

    //指定打包文件所在的目录
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname,'dist'),
        //打包后文件的名字
        filename: "bundle.js",
        environment: {
            arrowFunction: false // 在打包的时候不使用箭头函数，因为要兼容  ie11的时候，他本是是不支持箭头函数的 。
        }
    },

    //指定webpack打包时要使用的模块（loader）
    module: {
        //指定要加载的规则
        rules:[
            {
                //指定的是规则生效的文件
                test:/\.ts$/, //以ts结尾的文件。
                //要使用的loader
                use:[
                    {
                       //指定加载器
                        loader: "babel-loader",
                        //设置babel
                        options: {
                            //设置预定义的环境
                            presets:[

                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets:{
                                            "chrome":"58",
                                            "ie":"11"
                                        },
                                        //指定core-js的版本
                                        //corejs作用：假如在ts中写了promise函数，而ie10并不支持promise，此时core-js作为一个补丁。
                                        //从而让ie10支持promise
                                        "corejs":"3",
                                        //使用core-js的方式" usage表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                        //如此一来，使用ts编译的文件会被babel再次的处理，使得代码可以在大部分浏览器中使用，可以在配置选项的targets
                        // 中指定要兼容的浏览器版本。
                    },
                    'ts-loader'],
                //指定要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    //配置webpack的插件
    plugins: [
        new HTMLwebpackPlugin({
            //title: "这是一个自定义的title",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),//用来清除dist文件
    ],

    //设置引用的模块
    resolve: {
        extensions: ['.ts','.js'], //告诉浏览器 以ts和以js结尾的文件都可以作为模块使用
    }
}
