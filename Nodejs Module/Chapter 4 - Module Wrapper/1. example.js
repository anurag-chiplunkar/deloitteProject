var url = 'some url here';

function log(message) {
    // Send an HTTP request
    console.log(message);
};

console.log(__filename);
console.log(__dirname);

module.exports = log;

// function wrapper
// node will always wrap our functions into this structure.
// (function (exports, require, module, __filename, __dirname) {
//     var x =;
// });

// all this variables are local and not global
// __filename = givens entire path with filename.
// __dirname = gives entire path without filename, only till dir name.
// require = tells the require modules exported in this module.
// exports = tell modules exported from this module. Exports is the reference to the modules.
// module = module is the module exports written at the bottom.
