# Rest.js path suffix
Rest.js interceptor to add a suffix to the request path

## Installation
Install Rest.js first if you haven't already.
```
npm install --save rest
```

Install path suffix interceptor
```
npm install --save rest-pathsuffix
```

Please note that this module is written in es2015 (es6). So you will need a transpiler like [Babel](babeljs.io) to use it.

## How to use
```
const rest       = require('rest'),
      pathSuffix = require('pathsuffix');

// Wrap pathSuffix interceptor
// Add .json to end of url
const client     = rest.wrap(pathSuffix, { suffix: '.json' });

// Calls /products.json
client('/products').then(response => {
    console.log(response);
});
```
