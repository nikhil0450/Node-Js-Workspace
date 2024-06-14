const fs = require("node:fs/promises");

console.log("First");

// Promise fs
fs.readFile("./file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fs.writeFile("./greet.txt", " Hello there, how are you?", { flag: "a" }).catch(
  (err) => console.log(err)
);

console.log("Second");

// async await
async function readFile() {
  try {
    const data = await fs.readFile("./file.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
readFile();

async function writeFile() {
  try {
    const data = await fs.writeFile("./greet.txt", "Hello");
    console.log("File written");
  } catch (error) {
    console.log(error);
  }
}
writeFile();

console.log("Third");
