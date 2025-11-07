const express = require("express");
const session = require("express-session");

const app = express();

// Middleware to handle sessions
app.use(
  session({
    secret: "MoizySecretKey", // used to sign the session ID cookie
    resave: false, // don't save session if not modified
    saveUninitialized: true, // save new sessions even if empty
    cookie: { maxAge: 60000 }, // session expires in 1 minute
  })
);

// Simple GET route
app.get("/", (req, res) => {
  console.log({ id: 1, name: "Abdul Moeez", city: "Lahore" });
  res.send({ id: 1, name: "Abdul Moeez", city: "Lahore" });
});

// Route to set session data
app.get("/login", (req, res) => {
  req.session.user = "Abdul Moeez";
  console.log("Session created and user logged in!");
  res.send("Session created and user logged in!");
});

// Route to access session data
app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    console.log(`Welcome back, ${req.session.user}!`);
    res.send(`Welcome back, ${req.session.user}!`);
  } else {
    console.log("Please log in first!");
    res.send("Please log in first!");
  }
});

// Route to destroy session
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    console.log("Logged out and session destroyed!");
    res.send("Logged out and session destroyed!");
  });
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});

// Optional: Store Sessions in MongoDB
// const MongoStore = require("connect-mongo");

// app.use(
//   session({
//     secret: "MoizySecretKey",
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({
//       mongoUrl: "your-mongodb-connection-url",
//       ttl: 14 * 24 * 60 * 60, // 14 days
//     }),
//   })
// );

// console.log("QWERTY", "POVERTY", "LIBERTY", "THIRTY", "AZERTY", "DIRTY", "FLIRTY", "TWIRTY")
