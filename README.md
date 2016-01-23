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
