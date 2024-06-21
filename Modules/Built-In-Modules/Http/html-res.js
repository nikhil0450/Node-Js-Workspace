const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  // const html = fs.readFileSync("./index.html", "utf-8");
  res.writeHead(200);
  fs.createReadStream(__dirname + "/index.html", "utf-8").pipe(res);
  // res.end(html);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
