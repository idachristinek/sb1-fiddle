const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const absPath = (relativePath) => path.join(__dirname, relativePath)

const common = {
  context: absPath('/src'),
  entry: ['./App.js', './App.less'],
  output: {
    path: absPath('src/resources/'),
    publicPath: '/resources/static/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.less'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name].[ext]',
          publicPath: 'src/resources/static/',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css?',
    }),
  ],
}

module.exports = common
