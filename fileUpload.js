// file upload using an API
const express = require("express"); // include express module
const multer = require("multer"); // include multer  module

// initialize an express as app || import the app in express
const app = express();

// initilaized the port
const port = 5000;

// set storage
// multer function for file upload - middleware
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // cb - callback function
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      // cb - callback function
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

// use the uplaod function as an middleware in post route
app.post("/uploads", upload, (req, res) => {
  console.log("File Uploaded");
  res.send("File Uploaded");
});

// listening the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

// interview question
// can we upload files without multer function - YES but we have to use file system of nodejs and write some extra code
// multer is an easy way to upload files
