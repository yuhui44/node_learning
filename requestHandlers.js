var exec = require("child_process").exec;

function start(response, postData){
  console.log("Request handler 'start' was called.");
  // var content = "empty";

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="sumit" value="Submit text" />'+
    '</form>'+
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

function upload(response, postData){
  console.log("Request handler 'upload' was called.");
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("You've sent"+ postData);
  response.end();
  // return "Hello Upload";
}

exports.start = start;
exports.upload = upload;