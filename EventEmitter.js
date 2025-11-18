const EventEmitter = require("events");

// Create an emitter object
const emitter = new EventEmitter();

// 1. Listen for an event
emitter.on("greet", () => {
  console.log("Hello Abdul Moeez!");
});

// 2. Emit the event
emitter.emit("greet");

// 3. Using once()
emitter.once("start", () => {
  console.log("This will run only once!");
});

emitter.emit("start");
emitter.emit("start"); // ignored

// 4. Remove event listeners
const greet = () => console.log("Hi");

emitter.on("greet", greet);
emitter.off("greet", greet); // remove listener

// 5. Advanced Use: Create your own class with Evemts
const EventEmitter = require("events");

class Chat extends EventEmitter {
  sendMessage(msg) {
    console.log("Sending:", msg);
    this.emit("message", msg);
  }
}

const chat = new Chat();

chat.on("message", (msg) => {
  console.log("New Message:", msg);
  console.log("Abdul Moeez");
});

chat.sendMessage("Hello Moizy!");
