const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCss = require('optimize-css-assets-webpack-plugin')
const uglifyjs = require('uglifyjs-webpack-plugin')

module.exports={
    entry:'./src/index.js',
    mode:'production',
    // output:{
    //     filename:'main.js',
    //     path:'D:\\chenj_projects\\webpackTest\\dist'
    // },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap:true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident:'postcss',
                            sourceMap:true,
                            plugins:loader=>{
                                require('autoprefixer')()
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap:true
                        }
                    }]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit:10000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename:'[id].[hash].css'
        })
    ],
    optimization: {
        minimizer: [
            new optimizeCss({}),
            new uglifyjs({
                cache:true,
                parallel:true,
                sourceMap:true
            })
        ]
    }
}
