const buffer = new Buffer.from("Nikhil");

console.log(buffer.write("Code"));

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());

// Buffers contd.
// Ex: streaming a video online
// If your internet connection is fast enough, the speed of the stream will be fast enough to instantly fill up the buffer and send it out for processing
// That will repeat till the stream is finished
// If your connection is slow, after processing the first chunk of data that arrived, the video player will display a loading spinner which indicates it is waiting for more data to arrive Once the buffer is filled up and the data is processed, the video player shows the video While the video is playing, more data will continue to arrive and wait in the buffer
// Binary data, character sets and encoding < => Buffers?
