var querystring = require("querystring");
var fs = require('fs');
var formidable = require('formidable');

function start(response){
  console.log("Request handler 'start' was called.");
  // var content = "empty";

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'
    // '<form action="/upload" method="post">'+
    // '<textarea name="text" rows="20" cols="60"></textarea>'+
    // '<input type="sumit" value="Submit text" />'+
    // '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();
  // exec("ls -lah",function(error, stdout, stderr){
  //   // content = stdout;
  //   response.writeHead(200,{"Content-Type":"text/plain"});
  //   response.write(stdout);
  //   response.end();
  // })
  // return content;
}

function upload(response, request){
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files){
    console.log("parsing done");
    fs.renameSync(files.upload.path,"/tmp/test.png");
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  })
  // response.writeHead(200,{"Content-Type":"text/plain"});
  // response.write("You've sent"+ querystring.parse(postData).text);
  // response.end();
  // return "Hello Upload";
}

function show(response){
  console.log("Request handler 'show' was called.");
  fs.readFile("/tmp/test.png","binary",function(error, file){
    if(error){
      response.writeHead(500,{"Content-Type":"text/plain"});
      response.write(error +"\n");
      response.end();
    }else{
      response.writeHead(200,{"Content-Type":"image/png"});
      response.write(file,"binary");
      response.end();
    }
  })
}

exports.start = start;
exports.upload = upload;
exports.show = show;