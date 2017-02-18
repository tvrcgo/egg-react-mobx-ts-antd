const webpack = require('webpack')
const assetsPlugin = require('assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { join } = require('path')
const root = process.cwd()
const front = join(root, 'front')
const pkg = require(join(root, 'package.json'))

const entry = name => {
  return join(front, 'view', name, 'index')
}

module.exports = {
  entry: {
    index: [ entry('index') ],
  },
  output: {
    path: 'app/public',
    publicPath: 'app/public',
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.json', '.jsx' ],
    modules: [
      'node_modules',
      front
    ]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract([ 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:8]', 'postcss-loader' ])
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract([ 'css-loader', `less-loader?{modifyVars:${JSON.stringify(pkg.config.antd.theme)}}` ])
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: [
          require('postcss-nested')
        ]
      }
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../run/lib_manifest.json'),
      context: root,
    }),
    new assetsPlugin({
      fullPath: false,
      path: join(root, 'run'),
      filename: 'app_assets.json',
    }),
  ],
}
