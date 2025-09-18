// import modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// intializing a port
const PORT = 8000;

// create a server
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "file.txt");

  // Read the HTML file asynchronously
  fs.readFile(filePath, (error, data) => {
    if (error) {
      // Handle errors if the file cannot be read
      res.end("Error loading index.html");
      console.error("Error reading index.html:", error);
      return;
    }

    // Send the content of the HTML file as the response body
    res.end(data);
  });

  console.log(`PORT: ${PORT}`);
});

// server listening on the specified port
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
