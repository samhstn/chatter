var http = require('http');
var fs = require('fs');
var port = 8000;
var server = http.createServer(handler).listen(port);

console.log('server is running on http://localhost:' + port);

function handler(req, res){
    var url = req.url;
    if(url === '/'){
        var index = fs.readFileSync(__dirname + '/public/index.html');
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(index);
    }
    else if(url.indexOf('.')>-1){
        var file = fs.readFileSync(__dirname + '/public' + url);
        var ext = url.split('.')[1];
        res.writeHead(200, {'Content-type': 'text/' + ext});
        res.end(file);
    }
}

module.exports = {
    handler: handler
};
