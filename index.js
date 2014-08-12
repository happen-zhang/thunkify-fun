
var fs = require('fs');

var thunkify = require('./thunkify');

var read = thunkify(fs.readFile);

read('README.md', 'utf8')(function(err, str){
    console.log(str);
});

// var hello = function(name, cb) {
//     cb('hello ' + name);
// }

// var myHello = thunkify(hello);

// myHello('happen')(function(name) {
//     console.log(name);
// });
