const fs = require("fs");

console.log("A");

setTimeout(() => {
  console.log("B - Timeout");
}, 0);

fs.readFile("file.txt", () => {
  console.log("C - File Read");
});

Promise.resolve().then(() => {
  console.log("D - Promise");
});

console.log("E");

// Complete VISUAL Diagram of Execution Flow
// ───────────────────────────────────────────────
//  JS MAIN THREAD
// ───────────────────────────────────────────────
// A  → printed
// setTimeout → moved to LIBUV Timers
// fs.readFile → moved to THREAD POOL
// Promise → added to MICROTASK QUEUE
// E  → printed
// ───────────────────────────────────────────────
//  MICROTASK QUEUE (runs now)
// ───────────────────────────────────────────────
// D - Promise
// ───────────────────────────────────────────────
//  EVENT LOOP STARTS
// ───────────────────────────────────────────────
// TIMERS PHASE:
//    B - Timeout
// POLL PHASE:
//    C - File Read
// ───────────────────────────────────────────────
//  END
// ───────────────────────────────────────────────
