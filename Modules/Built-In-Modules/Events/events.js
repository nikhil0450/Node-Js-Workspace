const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, toppings) => {
  console.log(
    `Order received! Baking a ${size} pizza with ${toppings} as a topping`
  );
});

emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("Serving a complimentary drink!");
  }
});

console.log("Welcome to Pan-Pizza's");
emitter.emit("order-pizza", "large", "Paneer");
