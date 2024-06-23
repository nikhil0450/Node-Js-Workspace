// common-greet.cjs
async function greetCommonJS(name) {
  const { greet } = await import("greet-with-uppercase");
  greet(name);
}

module.exports = { greetCommonJS };
