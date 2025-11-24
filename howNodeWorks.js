const http = require("http");
const fs = require("fs");

// Create a server
const server = http.createServer((req, res) => {
  // Reading a file (I/O operation)
  fs.readFile("mainText2.txt", (err, data) => {
    if (err) {
      // If there's an error, this callback might be deferred to pending callback phase. (To be executed for the next iteration!)
      console.error("Error reading file:", err);
      res.statusCode = 500;
      res.end("Server Error");
      return;
    }

    res.statusCode = 200;
    res.end(data);
  });
});

// If there's an error with TCP connection
server.on("error", (err) => {
  // This callback will likely be processed in the pending callbacks phase
  console.error("Server error:", err);
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// test123.txt file does not exist
const readFileCallback = (err, data) => {
  console.log(`readFileCallback ${data}`);
};

const f = "test123.txt";
fs.readFile(f, readFileCallback);
setImmediate(() => console.log("setImmediate called!"));

// Node.js Architecture
console.log("Start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");
