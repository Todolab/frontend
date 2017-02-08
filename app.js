/**
 * Created by stevenjlho on 05/01/2017.
 */

import path from 'path'
import Koa from 'koa'
const app = new Koa();

import react from 'koa-react-view'
import middleware from 'koa-webpack';
import webpack from 'webpack'
import webpackConfig from 'webpack.config.js'
const compiler = webpack(webpackConfig);

import router from 'router.js'

const viewpath = path.join(__dirname, 'resource', 'views');
const assetspath = path.join(__dirname, 'public');

app.use(middleware({
  compiler: compiler,
  dev: {
    // publicPath is required, whereas all other options are optional

    noInfo: false,
    // display no info to console (only warnings and errors)

    quiet: false,
    // display nothing to the console

    // lazy: true,
    // switch into lazy mode
    // that means no watching, but recompilation on every request

    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    // watch options (only lazy: false)

    publicPath: "/",
    // public path to bind the middleware to
    // use the same as in webpack


    stats: "normal",
    // Standard output

    reporter: null,
    // Provide a custom reporter to change the way how logs are shown.

    serverSideRender: false,
    // Turn off the server-side rendering mode. See Server-Side Rendering part for more info.
  },
  hot: {
    heartbeat: 2000
  }
}))

react(app, {
  views: viewpath
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);

