// we can use ES6 modules in Node.js and Express.js by using the .mjs extension or setting "type": "module" in package.json

// Note: If you prefer using .js extension, add "type": "module" in your package.json file.
// {
//   "name": "your-project-name",
//   "version": "1.0.0",
//   "type": "module",
//   ...
// }
// This will allow you to use ES6 module syntax in .js files as well.

import express from "express";
import data from "./data.js";

const app = express();
const port = 3000;

// setup middleware to parse JSON request
app.use(express.json());

// get route
app.get("/", (req, res) => {
  res.send(data);
  console.log("Data sent to client...");
});

// log imported data to console
console.log(data);

// server listen
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
