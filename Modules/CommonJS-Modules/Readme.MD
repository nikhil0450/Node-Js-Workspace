# CommonJS Summary
* Each file is treated as a module
* Variables, functions, classes, etc. are not accessible to other files by default
* Explicitly tell the module system which parts of your code should be exported via
module.exports or exports
* To import code into a file, use the `require()` function


# Local Modules Summary
 * In node.js, each file is a module that is isolated by default
* To load a module into another file, we use the require function
* When index.js is executed, the code in the module is also executed
* If the file we are requiring is a javascript file, we can skip specifying the extension
and node.js will infer it on our behalf