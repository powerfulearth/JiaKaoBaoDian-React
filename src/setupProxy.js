const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/found/top', { 
    target: 'http://v.juhe.cn/toutiao/index?type=top&key=7086785c65ebd92243fb26586e53ce38',
    changeOrigin: true,
    pathRewrite:{
      '/found/top':''
    }
  }))
  app.use(proxy('/found/tiyu', { 
    target: 'http://v.juhe.cn/toutiao/index?type=tiyu&key=7086785c65ebd92243fb26586e53ce38',
    changeOrigin: true,
    pathRewrite:{
      '/found/tiyu':''
    }
  }))
  app.use(proxy('/found/yule', { 
    target: 'http://v.juhe.cn/toutiao/index?type=yule&key=7086785c65ebd92243fb26586e53ce38',
    changeOrigin: true,
    pathRewrite:{
      '/found/yule':''
    }
  }))
  app.use(proxy('/found/junshi', { 
    target: 'http://v.juhe.cn/toutiao/index?type=junshi&key=7086785c65ebd92243fb26586e53ce38',
    changeOrigin: true,
    pathRewrite:{
      '/found/junshi':''
    }
  }))
  app.use(proxy('/found/keji', { 
    target: 'http://v.juhe.cn/toutiao/index?type=keji&key=7086785c65ebd92243fb26586e53ce38',
    changeOrigin: true,
    pathRewrite:{
      '/found/keji':''
    }
  }))
  app.use(proxy('/found/caijing', { 
    target: 'http://v.juhe.cn/toutiao/index?type=caijing&key=7086785c65ebd92243fb26586e53ce38',
    changeOrigin: true,
    pathRewrite:{
      '/found/caijing':''
    }
  }))
  app.use(proxy('/found/shishang', { 
    target: 'http://v.juhe.cn/toutiao/index?type=shishang&key=7086785c65ebd92243fb26586e53ce38',
    changeOrigin: true,
    pathRewrite:{
      '/found/shishang':''
    }
  }))
  app.use(proxy('/found/guoji', { 
    target: 'http://v.juhe.cn/toutiao/index?type=guoji&key=7086785c65ebd92243fb26586e53ce38',
    changeOrigin: true,
    pathRewrite:{
      '/found/guoji':''
    }
  }))
  
}