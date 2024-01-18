const path = require('path')

module.exports = {
    entry: {
        'user1': path.resolve(__dirname, `./pages/users/index.js`),
        'user2': path.resolve(__dirname, `./pages/users2/index.js`),
    },
    output: {
        filename: (pathData) => {
            return `${pathData.chunk.name}/index.js`
        },
        // 输出到根目录的 lib文件夹下面
        // 最终的路径就是 path + filename => '../lib/button1/index.js', 如此js可以按照源文件路径输出了
        path: path.resolve(__dirname, './lib'),
        library: 'MyComponent',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx'],
    },
    module: {
        rules: [
          { 
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: false, // 禁止css modules
                }
              },
            //   'sass-loader'
            ]
          },
          { 
            test: /\.(jpg|jpeg|png|gif)$/, 
            use: ['url-loader'] 
          }
        ]
    },
}
