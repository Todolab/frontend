const Koa = require('koa');
const views = require('koa-views');
const Router = require('koa-router');
const serve = require('koa-static');
import path from 'path'

const app = new Koa();

const router = new Router();

const viewpath = path.join(__dirname, 'dist');

// Must be used before any router is used
app.use(views(viewpath));


router.get('/', async (ctx, next) => {
    
    await ctx.render('index')
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(serve(path.resolve(__dirname, 'dist')));

app.listen(3000);

