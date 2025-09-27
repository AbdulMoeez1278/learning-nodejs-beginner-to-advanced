const path = require("path");

// path.join(): Joins all given path segments together, normalizing the resulting path.
const fullPath = path.join(__dirname, "/fileSystemCRUD", "mainText.txt");
console.log("Full Path is:", fullPath);

// path.dirname(): Returns the directory name of a path.
const dirName = path.dirname(
  "/GitHub/learning-nodejs-beginner-to-advanced/fileSystemCRUD/mainText.txt"
);
console.log("Directory name is:", dirName);

// path.basename(): Returns the last portion of a path.
const fileName = path.basename(
  "/learning-nodejs-beginner-to-advanced/fileSystemCRUD/mainText.txt"
);
console.log("File name is:", fileName);

// path.extname(): Returns the extension of a path.
const extension = path.extname(
  "/GitHub/learning-nodejs-beginner-to-advanced/fileSystemCRUD/mainText.txt"
);
console.log("Extension name is:", extension);

// path.resolve(): Resolves a sequence of paths or path segments into an absolute path
const absolutePath = path.resolve("fileSystemCRUD", "textMain.txt");
console.log("Absolute Path is:", absolutePath);

// Global Constants...
// 1. directory name
console.log("Directory name is:", __dirname);

// 2. file name
console.log("File name is:", __filename);

// 3. relationship
const filePath = path.join(__dirname, "mainText.txt");
console.log(filePath);

// print both the directory and filename
console.log(__dirname, __filename);
