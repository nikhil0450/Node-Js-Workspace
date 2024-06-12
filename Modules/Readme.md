# Modules
### A module is an encapsulated and reusable chunk of code that has its own context
### In Node.js, each file is treated as a separate module

## Types of Modules
1. `Local modules` - Modules that we create in our application
2. `Built-in modules` - Modules that Node.js ships with out of the box
3. `Third party modules` - Modules written by other developers that we can use in
our application

## Module Scope Summary

* Each loaded module in Node.js is wrapped with an IIFE that provides private scoping of code 
* IIFE allows you to repeat variable or function names without any conflicts