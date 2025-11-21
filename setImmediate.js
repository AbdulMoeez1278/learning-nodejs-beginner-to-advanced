const baz = () => console.log("baz");
const foo = () => console.log("foo");
const zoo = () => console.log("zoo");

const start = () => {
  console.log("start");
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve("bar");
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};

start();

// Output
// start foo bar zoo baz

// The Main Module
const x = 1;
const y = x + 1;

setTimeout(() => console.log("Should run in 1ms"), 1);

for (let i = 0; i < 10000000; i++);
console.log("When this will be printed");
