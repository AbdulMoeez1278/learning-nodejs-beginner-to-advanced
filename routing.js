const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });

//   const url = req.url;

// 1. if/else condition base routing
//   if (url === "/") {
//     res.write("<h1>Welcome to home page</h1>");
//     res.end();
//     console.log("Home Page");
//   } else if (url === "/about") {
//     res.write("<h1>Welcome to about page</h1>");
//     res.end();
//     console.log("About Page");
//   } else if (url === "/contact") {
//     res.write("<h1>Welcome to contact page</h1>");
//     res.end();
//     console.log("Contact Page");
//   } else {
//     res.write("<h1>404: Page not found</h1>");
//     res.end();
//     console.log("404: Page not found");
//   }
// });

// 2. Custom router function
// function router(req, res) {
//   if (req.url === "/") return "<h1>Home</h1>";
//   if (req.url === "/about") return "<h1>About</h1>";
//   if (req.url === "/contact") return "<h1>Contact</h1>";
//   return "<h1>404 Not Found</h1>";
// }

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(router(req, res));
// });

// 3. Using switch-case routing
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  switch (req.url) {
    case "/":
      res.end("<h1>Home Page</h1>");
      console.log("Home Page");
      break;
    case "/about":
      res.end("<h1>About Page</h1>");
      console.log("About Page");
      break;
    case "/contact":
      res.end("<h1>Contact Page</h1>");
      console.log("Contact Page");
      break;
    default:
      res.writeHead(404);
      res.end("<h1>404: Not Found</h1>");
      console.log("404: Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server 1 is listening on http://localhost:3000");
});
