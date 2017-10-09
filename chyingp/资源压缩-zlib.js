// //简单的压缩例子

// var fs = require('fs')
// var zlib = require('zlib')

// var gzip = zlib.createGzip();

// var inFile = fs.createReadStream('./fileForCompress.txt');
// var outFile = fs.createWriteStream('./fileForCompress.txt.gz')

// inFile.pipe(gzip).pipe(outFile)



// //简单的解压缩例子

// var fs = require('fs')
// var zlib = require('zlib')

// var gunzip = zlib.createGunzip()

// var inFile = fs.createReadStream('./FileForCompress.txt.gz')
// var outFile = fs.createWriteStream('./FileForCompress.txt.bak')

// inFile.pipe(gunzip).pipe(outFile)



// //服务端gzip压缩

// var http = require('http')
// var zlib = require('zlib')
// var fs = require('fs')
// var filepath = './fileForGzip.html'

// var server = http.createServer(function(req, res){
//   var acceptEncoding = req.headers['accept-encoding']
//   var gzip

//   if(acceptEncoding.indexOf('gzip')!=-1){

//     gzip = zlib.createGzip()

//     res.writeHead(200, {
//       'Content-Encodig': 'gzip'
//     })
//     fs.createReadStream(filepath).pipe(gzip).pipe(res)
//   }
// })
// server.listen('3000')



//服务端字符串gzip压缩

var http = require('http')
var zlib = require('zlib')

var responseText = 'hello world';

var server = http.createServer(function(req, res){
  var acceptEncoding = req.headers['accept-encoding']
  if(acceptEncoding.indexOf('gzip')!=1){
    res.writeHead(200, {
      'cotent-encoding': 'gzip'
    })
    res.end(responseText)
  }
})

server.listen('3000')