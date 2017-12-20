const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: [
      './src/js/app.js',
      './src/css/app.css'
    ],
    output: {
      path: `${__dirname}/src/bundle`,
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.tag$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: [
            {
              loader: 'riot-tag-loader',
              options: {
                debug: true
              }
            }
          ]
        },
        {
          test: /\.js|\.tag$/,
          enforce: 'post',
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: `es2015-riot`
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader?sourceMap',
            'css-loader?modules&importLoaders=1&localIdentName=[local]--[hash:base64:5]',
            'postcss-loader',
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.tag', '.css']
    },
    plugins: [
      new webpack.ProvidePlugin({
        riot: 'riot'
      }),
      new ExtractTextPlugin('./src/bundle/bundle.css')
    ],
    devtool: 'source-map'
  }
];