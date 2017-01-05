/**
 * Created by stevenjlho on 05/01/2017.
 */

const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
