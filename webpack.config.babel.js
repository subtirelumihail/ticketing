import webpack from 'webpack'
import path from 'path'
import autoprefixer from 'autoprefixer'

// Plugins
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OfflinePlugin from 'offline-plugin'

const cssLoader = [
  'style-loader',
  'css-loader?sourceMap&modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
  'postcss-loader',
  'sass-loader' + '?sourceMap&outputStyle=expanded&sourceMap=true&sourceMapContents=true'
].join('!')

const NODE_ENV = JSON.stringify(process.env.NODE_ENV)

var options = {
  // cache: true,
  debug: true,
  target: 'async-node',
  devtool: 'eval-source-map',
  entry: [
    './src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle[hash].js'
  },
  resolve: {
    root: [path.resolve('./src/js/'), path.resolve('./src/')],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: path.resolve('./src/js'), loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.s?css$/, loader: cssLoader },
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=1048576' }, // inline base64 URLs for <=1MB images, direct URLs for the rest
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=image/svg+xml' }
    ]
  },
  postcss: () => {
    return [autoprefixer]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: NODE_ENV
      }
    })
  ]

}

if (process.env.NODE_ENV === 'production') {
  options.plugins.unshift(new OfflinePlugin({
    updateStrategy: 'all'
  }))
}

module.exports = options

