const fs = require('fs');

// Proper code
// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });


// Error simulation
fs.readdir('$', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
