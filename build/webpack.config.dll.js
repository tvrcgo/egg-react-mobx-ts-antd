const webpack = require('webpack')
const { join } = require('path')
const AssetsPlugin = require('assets-webpack-plugin')
const root = process.cwd()

module.exports = {
  entry: {
    lib: [
      'react',
      'react-dom',
      'react-router',
      'mobx',
      'mobx-react'
    ],
  },
  output: {
    path: join(root, 'app/public'),
    filename: 'bundle/[name].[hash:8].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.DllPlugin({
      path: join(root, 'run/[name]_manifest.json'),
      name: '[name]_[hash]',
      context: root,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      minimize: true,
      output: {
        comments: false,
      },
    }),
    new AssetsPlugin({
      fullPath: false,
      path: join(root, 'run'),
      filename: 'lib_assets.json',
    }),
  ],
}
