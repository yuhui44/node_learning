//域名解析lookup

var dns = require('dns')

dns.lookup('www.qq.com', {all: true}, function(err, address, family){
  if(err) throw err
  console.log( JSON.stringify(address))
})

// //域名结息resolve4

// var dns = require('dns')

// dns.resolve4('www.qq.com', function(err, address){
//   if(err) throw err
//   console.log( JSON.stringify(address))
// })