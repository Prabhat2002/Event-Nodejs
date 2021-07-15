const http=require("http");

const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/")
    {
        res.writeHead(200,{"Content-type":"text/html"})
        res.end("<center><h1>Welcome of the Home-Page</h2></center>");
    }
    else if(req.url=="/service")
    {
        res.writeHead(200,{"Content-type":"text/html"})
        res.end("<center><h2>Welcome of the Services-Page</h2></center>");
    }
    else if(req.url=="/about")
    {
        res.writeHead(200,{"Content-type":"text/html"})
        res.end("<center><h2>Welcome of the About-Page</h2></center>");
    }
    else if(req.url=="/contact")
    {
        res.writeHead(200,{"Content-type":"text/html"})
        res.end("<center><h2>Welcome of the Contact-Page</h2></center>");
    }
    else
    {
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<center><h2>Page Not Found<h2></center>");
    }
});
server.listen(8000,(err)=>{
    console.log("Server is running.....at Port-8000}")
})