var buf1 = new Buffer(10);
var buf2 = new Buffer([10,20]);
var buf3 = new Buffer("abc","utf-8");

buf = new Buffer(256);
len = buf.write("abc哈哈");

console.log("写入字节数："+ len);
console.log(buf.toString());
console.log(buf.toJSON());