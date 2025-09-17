// create an http server
const http = require("http"); // include http module

// creating a server using an http
const serverOne = http.createServer((req, res) => {
  res.write("<h1>Creating http server</h1>");
  console.log("PORT: 3000");

  // res.end("Hello World");
  //  res.writeHead(200, { "Content-Type": "text/plain" });
});

// server listening
serverOne.listen(3000, () => {
  console.log("Server 1 is listening on port 3000");
});

// Server 2
const serverTwo = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Server 2!\n");
  console.log("PORT: 3001");
});

serverTwo.listen(3001, () => {
  console.log("Server 2 is listening on port 3001");
});

// Server 3
const serverThree = http.createServer((req, res) => {
  res.end("Hello from Server 3!");
  console.log("PORT: 3002");

  // res.writeHead(200, { "Content-Type": "text/plain" });
});

serverThree.listen(3002, () => {
  console.log("Server 3 is listening on port 3002");
});

// Server 4
const serverFour = http.createServer((req, res) => {
  res.end("Server 4 is running perfectly!");
  console.log("PORT: 3003");
});

serverFour.listen(3003, () => {
  console.log("Server 4 is listening on port 3003");
});

// Server 5
const serverFive = http.createServer((req, res) => {
  res.end("Server 5 is running perfectly!");
  console.log("PORT: 3004");
});

serverFive.listen(3004, () => {
  console.log("Server 5 is listening on port 3004");
});

// interview question
// Can we create two || multiple servers in same file?
// Yes, it is possible to create and run two || multiple HTTP servers within the same Node.js file. Each server must listen on a different port to avoid port conflicts.
