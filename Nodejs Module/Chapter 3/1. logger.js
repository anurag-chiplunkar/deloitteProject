var url = 'some url here'


function log(message) {
    // Send an HTTP request
    console.log(message);
};


module.exports.log = log;
// module.exports = log;
// module.exports.endPoint = url;
console.log(module)