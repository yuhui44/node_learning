// //服务端的例子

// var http = require('http')
// var server = http.createServer((req,res) => {
//   console.log(req.headers)
//   res.end('OK')
// })
// server.listen(3000)

// //客户端的例子

// var http = require('http')
// http.get('http://127.0.0.1:3000', res => {
//   console.log(res.statusCode)
// })

//aborted、close 服务端

var http = require('http')

var server = http.createServer((req, res) => {

  console.log('1、收到客户端请求：' + req.url)

  req.on('aborted', ()=> {
    console.log('2、客户端请求aboted')
  })

  req.on('close', () => {
    console.log('3、客户端请求close')
  })

  server.listen(3000, ()=>{
    var client = http.get('http://127.0.0.1:3000/aborted')
    setTimeout(()=>{
      client.abort()
    }, 100)
  })
})