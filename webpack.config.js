const path =require('path')

module.exports={
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'slider.js'
    },
    devServer:{
        static: path.join(__dirname, 'dist')
    },
    
        module:{
            rules:[
                {
                    test: /\.s[ac]ss$/i,
                    use:['style-loader', 'css-loader', 'sass-loader']
                },
                {

                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options:{
                            presets:[
                                '@babel/preset-env'
                            ]
                        }
                    }
                }
            ]
        },
       


}