// create an http server
const http = require("http"); // include http module

// creating a server using an http
const server1 = http.createServer((req, res) => {
  res.write("<h1>Creating http server</h1>");
  res.end("Hello World");
  console.log("PORT: 3000");

  //  res.writeHead(200, { "Content-Type": "text/plain" });
});

// server listening
server1.listen(3000, () => {
  console.log("Server 1 is listening on port 3000");
});

// Server 2
const server2 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Server 2!\n");
  console.log("PORT: 3001");
});

server2.listen(3001, () => {
  console.log("Server 2 is listening on port 3001");
});

// interview question
// Can we create two servers in same file?
// Yes, it is possible to create and run two HTTP servers within the same Node.js file. Each server must listen on a different port to avoid port conflicts.
