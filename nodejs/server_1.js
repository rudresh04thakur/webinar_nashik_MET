var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    var html = `<body>
                    <div>
                        Hi this is demo <h1>HTML PAGE</h1>
                    </div>
                </body>
    `
    res.end(html)
}).listen(3000,'127.0.0.1');
console.log("Server started on localhost:3000");



