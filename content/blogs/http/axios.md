---
path: '/http/axios'
title: 'Axios'
date: '2019-07-21'
modifyDate: '2019-07-21'
---

### axios

**vue 设置代理**
_配置 host_

```bash
localhost                   www.exaple.com
```

```js
proxy: {
   '/apis': {    //将www.exaple.com印射为/apis
      target: 'https://www.exaple.com',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/apis': ''   //需要rewrite的,
      }
    }
  }
```
