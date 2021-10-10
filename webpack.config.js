module.exports = {
  entry: './App.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
};