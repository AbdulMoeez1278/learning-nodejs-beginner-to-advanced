// core modules - built-in modules that are part of the Node.js binary distribution and do not require separate installation.

// fs module - file system module
const fs = require("fs");

//os  modules - operating system module
const os = require("os");

// forcefully add the global objects
const { log, warn } = require("console");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// http module - handle the req, res from the server
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Http module handling the server");
});

console.log(server);

// os module
console.log(os);
console.log(os.platform()); // platform() function
console.log(os.hostname()); // hostname() function
console.log(os.cpus()); // cpus() function
console.log(os.freemem()); // freemem() function
console.log(os.totalmem()); //totalmem() function

const buffer = Buffer.from("Moeez", "utf8");
console.log(buffer.toString());

// global objects

// console.log() - global object
console.log("Hello World");

// process.cwd() - global objbect
console.log(process.cwd());

// process.id - global object
console.log(process.pid); // changed everytime when you run it again and again

// forcefully adding the global objects in nodejs
log("Abdul Moeez"); // log() method
warn(process.pid); // warn() method
log(process.cwd());
