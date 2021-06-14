var http = require('http')

http.createServer(function(req,res) {

    res.end("welcome")

}).listen(3000);