# Buit-In-Modules

Modules that node.js ships with
<br> Also refered to as core modoules 
<br> Import the module before you can use it

* [Path](#path)
* [Events](#events)
* [Streams](#stream)
* [Fs](#fs-file-system)
* [Http](#http)

## Callbacks
* `Synchronous Callbacks`: A callback which is executed immediately is called as Synchronous callback

* `Asynchronous Callbacks`:
A callback that is often used to continue or resume code execution after an asynchronous operation has completed <br>
Callbacks are used to delay the execution of a function until a particular time or event has occurred <br>
In Node.js have an asynchronous nature to prevent blocking of execution <br>
Ex: reading data from a file, fetching data from a database or handling a network request

### Path

- The path module provides utilities for working with file and directory paths 

- basename, extname, format, isAbsolute, join, parse, resolve


### Events

- The events module allows us to work with events in Node.js
- An event is an action or an occurrence that has happened in our application that we can respond to
- Using the events module, we can dispatch our own custom events and respond to those custom events in a non-blocking manner

### Streams

- A stream is a sequence of data that is being moved from one point to another over time
- Ex: watching a video on YouTube
- The data arrives in chunks and you watch in chunks while the rest of the data arrives over time
- Ex: transferring file contents from fileA to fileB
- The contents arrive in chunks and you transfer in chunks while the remaining contents arrive over time
- Prevents unnecessary data downloads and memory usage

### FS (File System)

- The file system module allows you to work with the file system of your computer.


### HTTP
- Hypertext Transfer Protocol
- A protocol that defines a format for clients and servers to speak to each other
- The client sends an HTTP request and the server responds with an HTTP response


## `Types of Streams`
`Readable streams` from which data can be read
- Ex: Reading from a file as readable stream

`Writable streams` to which we can write data
- Ex: Writing to a file as writable stream

`Duplex streams` that are both Readable and Writable
- Ex: Sockets as a duplex stream


`Transform streams` that can modify or transform the data as it is written and read
- Ex: File compression where you can write compressed data and read de-compressed data to and from a file as a transform stream

<hr>

### `HTTP and Node`
- We can create a web server using Node.js
- Node.js has access to operating system functionality like networking
- Node has an event loop to run tasks asynchronously and is perfect for creating web servers that can simultaneously handle large volumes of requests
- The node server we create should still respect the HTTP format
- The HTTP module allows creation of web servers that can transfer data over HTTP