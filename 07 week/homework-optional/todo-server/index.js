const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

app.use(cors());
app.use(bodyParser());

router.get('/todos', async ctx => {
  ctx.body = db.get('todos')
});

router.get('/todos/:id', async ctx => {
  ctx.body = db.get('todos').find({ id: ctx.params.id });
});

router.post('/todos', async ctx => {
  const todo = await db.get('todos')
    .push(ctx.request.body)
    .last()
    .assign({ id: Date.now().toString(), checked: false })
    .write()

  ctx.body = todo;
});

router.delete('/todos/:id', async ctx => {
  const todos = await db.get('todos')
    .remove({ id: ctx.params.id })
    .write()
  ctx.body = todos[0];
})

router.put('/todos/:id', async ctx => {
  const todo = await db.get('todos')
    .find({ id: ctx.params.id })
    .assign({ ...ctx.request.body })
    .write()
  ctx.body = todo;
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server start on http://localhost:3000')
});