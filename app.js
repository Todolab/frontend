/**
 * Created by stevenjlho on 05/01/2017.
 */

const Koa = require('koa');
const app = new Koa();

import router from 'router.js'

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
