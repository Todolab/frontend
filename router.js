/**
 * Created by stevenjlho on 13/01/2017.
 */


import Router from 'koa-router'
let router = new Router()

import index from 'routers/index'


router.use('/', index.routes());


export default router
