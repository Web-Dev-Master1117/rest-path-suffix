const rest       = require('rest'),
      pathSuffix = require('pathsuffix');

// Wrap pathSuffix interceptor
// Add .json to end of url
const client     = rest.wrap(pathSuffix, { suffix: '.json' });

// Calls /products.json
client('/products').then(response => {
    console.log(response);
});
