const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "myFolder");
const filePath = path.join(folderPath, "file.txt");
const filePathTwo = path.join(folderPath, "fileTwo.txt");

// Create folder if it doesn't exist
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// writeFileSync inside the folder
fs.writeFileSync(filePath, "This is a sample file");

// writeFile inside the folder
fs.writeFile(filePathTwo, "This is another sample file", "utf8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully.");
});

// Read file
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

fs.readFile("fileTwo.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
