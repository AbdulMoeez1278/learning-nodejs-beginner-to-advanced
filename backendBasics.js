const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  //   console.log({
  //     id: 1,
  //     name: "Abdul Moeez",
  //     city: "Lahore",
  //     designation: {
  //       role1: "Junior Frontend Developer",
  //       role2: "Junior Node.js Developer",
  //     },
  //   });
  res.end("Hello World");
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

// // Load the file system module
// const fs = require("fs");

// // Read file asynchronously
// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file: " + err);
//     return;
//   }
//   console.log("File content: " + data);
// });

// console.log("Reading file... (This runs first!)");

// Callbacks
// const fs = require("fs");

// fs.readFile("mainText2.txt", "utf8", (err, data) => {
//   if (err) return console.error(err);
//   console.log(data);
// });

// Promises
// const fs = require("fs").promises;
// fs.readFile("mainText2.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Async / Await
const fs = require("fs");
async function readFile() {
  try {
    const data = await fs.readFile("mainText2", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
