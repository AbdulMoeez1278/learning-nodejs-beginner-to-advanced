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

console.log(
  "\nNote: The asynchronous read does not block the execution of subsequent code."
);

console.log("Asynchronous in Node.js");

// Blocking code example
console.log("Start of blocking code");
const dataFile = fs.readFileSync("file.txt", "utf8"); // Blocks here
console.log("Blocking operation completed");

// Non-blocking code example
console.log("Start of non-blocking code");
fs.readFile("myfile.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Non-blocking operation completed");
  }
});
console.log("This runs before the file is read");
