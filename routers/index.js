/**
 * Created by stevenjlho on 13/01/2017.
 */

import Router from 'koa-router'
let router = new Router()

router.get('/', function (ctx, next) {
  ctx.body = 'Hello World!';
});


export default router
