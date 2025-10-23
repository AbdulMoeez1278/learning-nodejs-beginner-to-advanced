// importing http module
const http = require("http"); // "HTTP is stateless” means Node.js and Express both forget users between requests — but Express provides tools (cookie-parser, express-session) to make remembering users much easier.

const server = http.createServer((req, res) => {
  // You manually handle routes, headers, and cookies here
  if (req.url === "/login") {
    res.setHeader("Set-Cookie", "user=Moeez");
    res.end("Cookie set!");
  } else if (req.url === "/dashboard") {
    const cookies = req.headers.cookie;
    res.end(`Your cookies: ${cookies}`);
  }
});

server.listen(5000);
