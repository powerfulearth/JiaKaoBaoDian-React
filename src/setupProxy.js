const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/found/top', { 
    target: 'http://v.juhe.cn/toutiao/index?type=top&key=b97433bc76ef632a5aab8afa65692db6',
    changeOrigin: true,
    pathRewrite:{
      '/found/top':''
    }
  }))
  app.use(proxy('/found/tiyu', { 
    target: 'http://v.juhe.cn/toutiao/index?type=tiyu&key=b97433bc76ef632a5aab8afa65692db6',
    changeOrigin: true,
    pathRewrite:{
      '/found/tiyu':''
    }
  }))
  app.use(proxy('/found/yule', { 
    target: 'http://v.juhe.cn/toutiao/index?type=yule&key=b97433bc76ef632a5aab8afa65692db6',
    changeOrigin: true,
    pathRewrite:{
      '/found/yule':''
    }
  }))
  app.use(proxy('/found/junshi', { 
    target: 'http://v.juhe.cn/toutiao/index?type=junshi&key=b97433bc76ef632a5aab8afa65692db6',
    changeOrigin: true,
    pathRewrite:{
      '/found/junshi':''
    }
  }))
  app.use(proxy('/found/keji', { 
    target: 'http://v.juhe.cn/toutiao/index?type=keji&key=b97433bc76ef632a5aab8afa65692db6',
    changeOrigin: true,
    pathRewrite:{
      '/found/keji':''
    }
  }))
  app.use(proxy('/found/caijing', { 
    target: 'http://v.juhe.cn/toutiao/index?type=caijing&key=b97433bc76ef632a5aab8afa65692db6',
    changeOrigin: true,
    pathRewrite:{
      '/found/caijing':''
    }
  }))
  app.use(proxy('/found/shishang', { 
    target: 'http://v.juhe.cn/toutiao/index?type=shishang&key=b97433bc76ef632a5aab8afa65692db6',
    changeOrigin: true,
    pathRewrite:{
      '/found/shishang':''
    }
  }))
  app.use(proxy('/found/guoji', { 
    target: 'http://v.juhe.cn/toutiao/index?type=guoji&key=b97433bc76ef632a5aab8afa65692db6',
    changeOrigin: true,
    pathRewrite:{
      '/found/guoji':''
    }
  }))
  
}