# Buit-In-Modules

Modules that node.js ships with
<br> Also refered to as core modoules 
<br> Import the module before you can use it

* [Path](#path)
* [Events](#events)
* [Streams](#stream)
* fs
* http

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