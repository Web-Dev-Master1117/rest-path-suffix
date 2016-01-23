# rest-path-suffix
Rest.js interceptor to add a suffix to the request path
##How to use
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
