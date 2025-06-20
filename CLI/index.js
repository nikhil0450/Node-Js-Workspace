// #!/usr/bin/env node

// const pokemonFiveMoves = async (pokemonName) => {
//   const response = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//   );
//   const pokemon = await response.json();
//   const moves = pokemon.moves.map(({ move }) => move.name);
//   console.log(moves.slice(0, 5));
// };

// pokemonFiveMoves("charmander");
// pokemonFiveMoves("pikachu");

// const os = require("node:os");

// console.log(os.cpus().length);

// no-cluster.js

const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 6000000000; i++) {}
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow Page");
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
