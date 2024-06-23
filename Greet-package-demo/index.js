// index.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Import and use the CommonJS module
const { greetCommonJS } = require("./common-greet.cjs");

// Import and use the ES module
import { greetESModule } from "./es-greet.mjs";

async function main() {
  await greetCommonJS("Nikhil"); // Call CommonJS greet function
  greetESModule("Nikhil Kulkarni"); // Call ES Module greet function
}

main();
