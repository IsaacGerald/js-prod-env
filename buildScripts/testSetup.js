//This file isn't transpiled so you must use commonJS and ES6

//Register Babel to transpile before our tests run
require('@babel/register')();

//Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};