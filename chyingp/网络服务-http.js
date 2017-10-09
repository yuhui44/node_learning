var http = require('http')

var server = http.createServer( (serverReq, serverRes) => {
  serverRes.end('您访问的地址是：' + serverReq.url)
})

server.listen(3000)

var client = http.get('http://127.0.0.1:3000', clientRes => {
  clientRes.pipe(process.stdout)
})