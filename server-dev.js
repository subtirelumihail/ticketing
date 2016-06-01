import webpack from 'webpack'
import chalk from 'chalk'
import WebpackDevServer from 'webpack-dev-server'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'

// Load custom librarys
import Logger, {log, buildValidLogger, buildInvalidLogger} from './logger'
import cli from './cli'

// Load configs
import webpackConfig from './webpack.config.babel'
import config from './config'

var {port, hostname, portWeb} = config


// Configure webpack server
webpackConfig.output.publicPath = '/'

webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin())
webpackConfig.plugins.unshift(new Logger())
webpackConfig.plugins.unshift(
  new ProgressBarPlugin({
    format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
    summary: false,
    customSummary: buildValidLogger
  })
)

// to target both electron and web bla bla
var argv = require('minimist')(process.argv.slice(2))
if (argv.target === 'web') {
  webpackConfig.target = 'web'
  port = portWeb
  webpackConfig.plugins.unshift(new webpack.NormalModuleReplacementPlugin(/^child_process$/, 'node-noop'))
} else {
  webpackConfig.target = 'electron'
}

webpackConfig.entry.unshift('webpack/hot/dev-server')
webpackConfig.entry.unshift('webpack-dev-server/client?http://' + hostname + ':' + port)

// Init the cli
cli.init(port)

// Start webpack server
new WebpackDevServer(webpack(webpackConfig), {
  contentBase: webpackConfig.output.path,
  historyApiFallback: true,
  progress: false,
  hot: true,
  inline: true,
  quiet: false,
  noInfo: true,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    children: false
  }
}).listen(port, hostname, (err) => {
  if (err) {
    log(chalk.red(err))
    buildInvalidLogger()
  }
})
