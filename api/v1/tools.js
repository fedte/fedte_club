var eventproxy = require('eventproxy');
var http = require('http');
var https = require('https');
var accesstoken = function (req, res, next) {
  var ep = new eventproxy();
  ep.fail(next);

  res.send({
    success: true,
    loginname: req.user.loginname,
    avatar_url: req.user.avatar_url,
    id: req.user.id
  });
};
exports.accesstoken = accesstoken;

var getImageBase64 = function(req, res, next) {
  var url = req.query.url;
  var protocol = http;

  if(url.indexOf("https://") === 0){
	 protocol = https;
  }
  protocol.get(url,function(response){
      var chunks = []; //用于保存网络请求不断加载传输的缓冲数据
      var size = 0;　　 //保存缓冲数据的总长度
      response.on('data',function(chunk){
        chunks.push(chunk);　 　
        size += chunk.length;　
      });
      response.on('end',function(err){
        
        var data = Buffer.concat(chunks, size);
    	// console.log(Buffer.isBuffer(data));
        var base64Img = data.toString('base64');
    	// console.log(base64Img);
          res.send({
            success: true,
            data:"data:image/png;base64," + base64Img
          });
      });
    });
}

exports.getImageBase64 = getImageBase64;