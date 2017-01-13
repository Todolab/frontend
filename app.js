/**
 * Created by stevenjlho on 05/01/2017.
 */

const Koa = require('koa');
const app = new Koa();

import router from 'router.js'

// response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });



app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
