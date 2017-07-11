var Koa = require('koa');
var views = require('koa-views');
var Router = require('koa-router');
import path from 'path'

var app = new Koa();

var router = new Router();

var viewpath = path.join(__dirname, 'views');

// Must be used before any router is used
app.use(views(viewpath, {
    map: {
        html: 'lodash'
    }
}));


router.get('/', async (ctx, next) => {
    ctx.state = {
        title: 'Todolab'
    };
    await ctx.render('index')
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);

