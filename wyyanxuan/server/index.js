// 做json
const fs = require('fs')
const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
const MainData = require('./Data/mainData/mainData.json')
const CateData = require('./Data/cateData/cateData.json')
const UserData = require('./Data/userData/userData.json')
const CartData = require('./Data/cartData/cartData.json')
const DetailData = require('./Data/detailData/detailData.json')
const cors = require('koa2-cors')
const Mock = require('mockjs')
const Random = Mock.Random

app.use(cors({
    origin: function(ctx) { //设置允许来自指定域名请求
        // if (ctx.url === '/test') {
        return '*'; // 允许来自所有域名请求
        // }
        // return 'http://localhost:3000'; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))

router.get('/home/main', async (ctx) => {
    ctx.response.body = {
        success: true,
        data: MainData
    }
})
router.get('/home/cate', async (ctx) => {
    ctx.response.body = {
        success: true,
        data: CateData
    }
})
router.get('/home/list', async (ctx) => {
    let { limit = 20, page = 1 } = ctx.request.query
    // console.log(limit, page);
    let data = Mock.mock({
        'list|20': [{
            'id': '@increment',
            'title': '@ctitle(12, 15)',
            'price': '@float(60, 1000, 0, 1)',
            'imgsrc': Random.image('160x160')
        }]
    })
    ctx.body = {
        success: true,
        data
    }
})
router.get('/detail/:id', async (ctx) => {
    // console.log(ctx.params);
    const { id } = ctx.params;
    if (!id) {
        ctx.response.body = {
            success: false,
            mag: '请求数据'
        }
    }
    // to be continue
    ctx.response.body = {
        success: true,
        data: Mock.mock({
            id,
            title: '@ctitle(5, 10)',
            price: '@float(60, 1000, 0, 2)',
            rate: '@float(60, 100, 0, 1)',
            desc: '@csentence(6, 12)',
            attrValue: '@ctitle(2,6)'
        }), DetailData
    }
})
router.get('/home/cart', async (ctx) => {
    ctx.response.body = {
        success: true,
        data: CartData
    }
})
router.get('/home/user', async (ctx) => {
    ctx.response.body = {
        success: true,
        data: UserData
    }
})

app
    .use(router.routes())
    .use(router.allowedMethods())
// 1. http服务
// 2. 简单的路由模块
// 3. cors
// 4. 返回数据
app.listen(9000, () => {
    console.log('server is running 9000');
})