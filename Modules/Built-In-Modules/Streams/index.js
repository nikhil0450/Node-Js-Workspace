const fs = require("node:fs");
const zlib = require("node:zlib");

const gz = zlib.createGzip();

const readableStreams = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 1,
});

const writeableStreams = fs.createWriteStream("./file2.txt");

// readableStreams.on("data", (chunk) => {
//   writeableStreams.write(chunk);
//   console.log(chunk);
// });

// Pipes:

readableStreams.pipe(writeableStreams);

// zlib:

readableStreams.pipe(gz).pipe(fs.WriteStream("./file2.txt.gz"));
