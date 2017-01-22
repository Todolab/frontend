/**
 * Created by stevenjlho on 20/01/2017.
 */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const staticsPath = path.join(__dirname, 'public');
const resourcePath = path.join(__dirname, 'resource');

const plugins = [
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   minChunks: Infinity,
  //   filename: 'vendor.bundle.js'
  // }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new webpack.NamedModulesPlugin(),
  new ExtractTextPlugin("bundle.css")
];

if (isProd) {
  plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false
        },
      })
  );
} else {
  plugins.push(
      new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = {
  devtool: isProd ? 'source-map' : 'eval',
  entry: path.resolve(resourcePath, 'client.js'),
  output: {
    path: staticsPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader"
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": [
                ["env", {
                  "targets": {
                    "browsers": ["last 2 versions", "safari >= 7"]
                  },
                  "modules": false
                }],
                "react"
              ],
              "plugins": [
                ["module-resolver", {
                  "root": ["./"]
                }],
                "transform-regenerator"
              ]
            }
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins
};
