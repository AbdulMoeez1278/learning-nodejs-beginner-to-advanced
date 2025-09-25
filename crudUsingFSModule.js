// CRUD with file sysytem
const fs = require("fs");
const path = require("path");

// creating a path in the directory
const dirPath = path.join(__dirname, "fileSystemCRUD");
const filePath = `${dirPath}/mainText.txt`;

// write file
fs.writeFileSync(filePath, "This is a simple text file");
fs.writeFileSync("textMain.txt", "This is a simple text file");
fs.writeFileSync(`${dirPath}/textMain.txt`, "This is a simple text main file");

// read file
fs.readFile(filePath, "utf8", (err, data) => {
  if (!err) {
    console.log(data);
  }
});

// // simple method to read the file
// const data = fs.readFileSync(
//   "./fileSystemCRUD/textMain.txt",
//   //   "./fileSystemCRUD/mainText.txt",
//   "utf-8",
//   (err, data) => {
//     if (!err) {
//       //   throw err;
//       console.log("File content asynchronous:", data);
//     }
//   }
// );
// console.log("Data inside file:", data);

// update file
fs.appendFile(filePath, " and file name is mainText.txt", (err) => {
  if (!err) {
    console.log("file is updated");
  }
});

// rename file
fs.rename(filePath, `${dirPath}/mainText2.txt`, (err) => {
  if (!err) {
    console.log("file name is updated");
  }
});

// delete file
fs.unlinkSync(`${dirPath}/mainText2.txt`);
