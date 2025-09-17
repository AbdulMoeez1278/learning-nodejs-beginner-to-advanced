// First Method
// const prompt = require("prompt-sync")(); // Note the extra parentheses to call the function

// const name = prompt("Please enter your name: ");
// const email = prompt("Please enter your email: ");
// const message = prompt("Please enter your message: ");

// console.log(`Hello, ${name}!`);
// console.log(`Email:  ${email}`);
// console.log(`Message: ${message}`);

// Second Method
const readline = require("readline");

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// Main async function
const main = async () => {
  // Get user input using await
  const name = await askQuestion("What is your name? ");
  const email = await askQuestion("Please enter your email: ");
  const message = await askQuestion("Please enter your message: ");

  // Print the result
  console.log(`Hello, ${name}!`);
  console.log(`Email:  ${email}`);
  console.log(`Message: ${message}`);

  // Close the readline interface
  rl.close();
};

// Call the main async function
main();

// Second Method in short
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Please enter your name: ", (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });
