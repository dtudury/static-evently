# static-evently

  simple js event-like function stacks

  [![Build Status](https://travis-ci.org/dtudury/static-evently.png)](https://travis-ci.org/dtudury/static-evently)

## Installation

    $ npm install static-evently

## Usage

```js
var d = require('static-evently');

function log(a) {
    console.log("triggered with " + a);
}

d.on("a", log);
d.dispatch("a", [1, 2]); // "triggered with 1,2"

d.on("b", log);
d.off("b", log);
d.dispatch("b", "three"); // no effect

d.once('c', log);
d.dispatch("c", 4); // "triggered with 4"
d.dispatch("c", {a:5, b:6});

d.stopListening();
d.dispatch("a", [1, 2]); // no effect
d.dispatch("b", "three"); // no effect
d.dispatch("c", {a:5, b:6}); // no effect
```