/**
 * Created by stevenjlho on 20/01/2017.
 */

import webpack from 'webpack'
import path from 'path'
import babel from '@webpack-blocks/babel6'
import extractText from '@webpack-blocks/extract-text2'
import {
  addPlugins,
  customConfig,
  createConfig,
  defineConstants,
  env,
  entryPoint,
  setOutput,
  sourceMaps
} from '@webpack-blocks/webpack2'


const staticsPath = path.join(__dirname, 'public');
const resourcePath = path.join(__dirname, 'resource');


const plugins = [
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   minChunks: Infinity,
  //   filename: 'vendor.bundle.js'
  // }),
  new webpack.NamedModulesPlugin(),
];

export default createConfig([
  setOutput(path.resolve(staticsPath, 'bundle.js')),
  addPlugins(plugins),
  babel({
    'presets': [
      ['env', {
        'targets': {
          'browsers': ['last 2 versions', 'safari >= 7']
        },
        'modules': false
      }],
      'react'
    ],
    'plugins': [
      ['module-resolver', {
        'root': ['./']
      }],
      'transform-regenerator'
    ]
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV
  }),
  env('development', [
    entryPoint(['webpack-hot-middleware/client', path.resolve(resourcePath, 'client.js')]),
    sourceMaps('eval'),
    addPlugins([
      new webpack.HotModuleReplacementPlugin()
    ])
  ]),
  env('production', [
    entryPoint(path.resolve(resourcePath, 'client.js')),
    sourceMaps(),
    extractText('bundle.css'),
    addPlugins([
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
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
    ])
  ]),
  customConfig({
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.css'],
      modules: [
        path.resolve(__dirname, 'node_modules')
      ]
    }
  })
])