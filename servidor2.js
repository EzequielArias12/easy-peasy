const { defaultCoreCipherList } = require("constants");
const http = require("http");
//console.log(http)
http.createServer(function(req,res){
    res.writeHead(200,{"content-Type":"text/plain;charset=utf-8"})
    switch(req,url){
        case "/":
        res.end("Bienvenido a nuestro sitio web")
        break;

        case"/productos":
        break;

        case "/contacto":
            res.end("Dejanos tu mensaje")
        break;
        default: 
        res.end("Esta pagina no esta disponible")
        break;
    }
    res.end("mi primer servidor de nodeJS")

}).listen(3030,"local host",()=>console.log("servidor funcionando en el puerto 3030"));