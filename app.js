var http = require('http')
var ejs = require('ejs')
var fs = require('fs')
var template = fs.readFileSync('data/template.ejs', 'utf-8')

var server = http.createServer(function(req, res){
    console.log('request was made ' + req.url)
    res.end(ejs.render(template))

})

server.listen(8080, '127.0.0.1')
console.log('now listening to port 8080')
