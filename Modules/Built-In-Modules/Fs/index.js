const fs = require("node:fs");

console.log("First");

const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContent);

console.log("Second");

const fileContentAsync = fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("Third");

fs.writeFileSync("./greet.txt", "Hello World!");

fs.writeFile("./greet.txt", " Hello Nikhil", { flag: "a" }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File Written");
  }
});

// {flag: "a"} is used if we want to continue to add the data by merging with the existing one. it is used to append the content instead of overwriting.
// without {flag:"a"} the content will be overwritten if exists.

// error resulting readFile method
const errorReadFile = fs.readFile("./abcd.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
