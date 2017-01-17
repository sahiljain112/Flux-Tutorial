module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist',
    publicPath: '/',
    fileName: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
