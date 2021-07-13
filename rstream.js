const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on("request", (req, res) => {
    const rstream = fs.createReadStream("Data.txt");
    rstream.on("data", (chunkdata) => {
        res.write(chunkdata);
    })
    rstream.on("end", () => {
        res.end();
    })
    rstream.on("error", (err) => {
        res.write(err);
        res.end();
    })
});
server.listen(8000,(error)=>{
    console.log("Server is Running")
})