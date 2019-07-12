module.exports={
    entry:'./src/index.js',
    mode:'development',
    output:{
        filename:'main.js',
        path:'D:\\chenj_projects\\webpackTest\\dist'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader',
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
            }
        ]
    }
}
