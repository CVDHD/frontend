module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
        {
            test: /\.sass$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                loader: 'sass-loader',
                options: {
                    indentedSyntax: true,
                    sassOptions: {
                    indentedSyntax: true
                    }
                }
                }
            ]
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
       }
    ]
  }
}