const EventEmitter = require("events");

// Create an emitter object
const emitter = new EventEmitter();

// 1. Listen for an event
emitter.on("greet", () => {
  console.log("Hello Abdul Moeez!");
});

// 2. Emit the event
emitter.emit("greet");
