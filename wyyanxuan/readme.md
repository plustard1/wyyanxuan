# React Hooks 仿网易严选移动开发

- Day1
    路由 tabbar 
    rem适配
    lib-flexible  postcss-pxtorem
    在根目录下建立postcss.config.js文件
    数据流移动开发
    react hooks + redux + koa
    主界面组件开发 使用最新Swiper7做轮播图 better-scroll 组件
    页面引入Scroll
    scroll > div 

- Day2
    首页长列表业务
    1. 后端从 ctx.request.query {limit=20, page=1}
        mockjs Mock.mock 20
    2. 页面可以用redux() 或 useState MVVM
    3. 列表图片的性能优化
        react-lazyload
        包装img placeholder

    分类页面开发 
        传值
        使用Usecontext 实现父子组件 兄弟组件传值 MVVM

- Day3 
    个人界面组件开发
    数据通过koa得到 

- Day7
    购物车功能:
    加入购物车 全选 与 单选逻辑
    购物车商品的数据管理
    商品总价格浮点数精度问题

    加入购物车，把商品的价格，数量等数据放入redux进行数据管理，最后存储在localstorage中