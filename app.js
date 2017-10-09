import Koa from 'koa'
import views from 'koa-views'
import Router from 'koa-router'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import path from 'path'
import axios from 'axios'

const app = new Koa();

const router = new Router();

const viewpath = path.join(__dirname, 'dist');

// Must be used before any router is used
app.use(views(viewpath));
app.use(bodyParser());


router.get('/', async (ctx, next) => {
    await ctx.render('index')
});

router.get('/todo', async (ctx, next) => {
    const data = await axios.get('http://local.backend.todolab.io/todo')
    ctx.body =  data.data
});

router.post('/todo', async (ctx, next) => {
    const data = await axios.post('http://local.backend.todolab.io/todo', ctx.request.body)
    ctx.body =  data.data
});


app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(serve(path.resolve(__dirname, 'dist')));

app.listen(3000);

