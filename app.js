import Koa from 'koa'
import views from 'koa-views'
import Router from 'koa-router'
import serve from 'koa-static'
import path from 'path'
import axios from 'axios'

const app = new Koa();

const router = new Router();

const viewpath = path.join(__dirname, 'dist');

// Must be used before any router is used
app.use(views(viewpath));


router.get('/', async (ctx, next) => {
    await ctx.render('index')
});

router.get('/todo', async (ctx, next) => {
    ctx.data = await axios.get('local.backend.todolab.io/todo')
});


app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(serve(path.resolve(__dirname, 'dist')));

app.listen(3000);

