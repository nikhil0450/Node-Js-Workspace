# greet-with-uppercase

A simple Node.js package to convert text to uppercase.

## Installation

To install this package, use the following command:

```bash
npm install greet-with-uppercase 
```

## Usage
### `ES Module`
* To use greet-with-uppercase in an ES module project, you can import and use the greet function as follows:

```
import { greet } from 'greet-with-uppercase';

greet('Tony Stark');
```


### `CommonJS Module`
* To use greet-with-uppercase in a CommonJS module project, you need to dynamically import the greet function:

```
async function greetCommonJS(name) {
  const { greet } = await import('greet-with-uppercase');
  greet(name);
}

greetCommonJS('Tony Stark');

<!-- OR -->

(async () => {
  const greet = require("../npm/index.cjs");
  await greet("Bruce Wayne");
})();