const http = require("http");
//console.log(http)
http.createServer(function(req,res){
    res.writeHead(200,{"content-Type":"text/plain;charset=utf-8"})
    res.end("mi primer servidor de nodeJS")

}).listen(3030,"local host",()=>console.log("servidor funcionando en el puerto 3030"))