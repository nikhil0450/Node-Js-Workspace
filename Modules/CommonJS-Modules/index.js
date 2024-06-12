// require('./add')
// require('./iife.js')
// require("./batman")
// require("./superman")

//--------------------------------------------
// const superHero = require("./super-hero.js")
// console.log(superHero.getName())

// superHero.setName("Superman")
// console.log(superHero.getName())

// const Superman = require("./super-hero.js")
// console.log(superHero.getName());

//---------------------------------------------
// const SuperHero = require("./super-hero");
// const superman = new SuperHero("Superman")
// console.log(superman.getName());

// const batman = new SuperHero("Batman")
// console.log(batman.getName());
// batman.setName("Bruce Wayne")
// console.log(batman.getName());

const math = require("./math.js")
// const add = require("./math.js")
// const subtract = require("./math.js")

const {add, subtract} = math

// console.log(math.add(4,5))
console.log(add(4,5));
console.log(subtract(4,5));

console.log("Hello World");

