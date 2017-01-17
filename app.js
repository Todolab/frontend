/**
 * Created by stevenjlho on 05/01/2017.
 */

import path from 'path'
import Koa from 'koa'
const app = new Koa();

import react from 'koa-react-view'

import router from 'router.js'

const viewpath = path.join(__dirname, 'views');
const assetspath = path.join(__dirname, 'public');

react(app, {
  views: viewpath
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);

