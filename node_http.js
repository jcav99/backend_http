const http = require('http');
//This allows the code to use built in node.js methods and practices.
const server = http.createServer((req,res)=> {
    if(req.url === "/") {
        res.write("Hello world ");
        res.write("This is our first server");
        res.end();
    }
    if(req.url === "/api/courses"){
        res.write(JSON.stringify([1, 2, 3]));
        res.write("This is a list of offerings ");
        res.write(" at BTHS");
        res.end()
    }
});
server.listen(3000);
console.log("Listening on port 3000");

//The server does respond to my requests, and it changes the data shown in the browser based on the url that we enter.