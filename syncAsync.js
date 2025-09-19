// Synchronous and Asynchronous Programming in Node.js
const fs = require("fs");

// Synchronous read
console.log("Synchronous read method:");
const data = fs.readFileSync("file.txt");
console.log("Data in the file is - " + data.toString());

console.log("Synchronous in Node.js\n");

// Asynchronous read
console.log("Asynchronous read method:");
fs.readFile("file.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Data in the file is - " + data.toString());
});

console.log("Asynchronous in Node.js");

console.log("Synchronous and Asynchronous Programming in Node.js");
