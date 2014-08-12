
var fs = require('fs');

function thunkify(fn) {
    return function() {

        var args = [].slice.apply(arguments);
        var results;
        var cb;

        function callback() {
            if (results && cb) {
                cb.apply(this, results);
            }
        }

        // 这个参数就是给fs.readFile的
        args.push(function() {
            // 得到结果
            results = arguments;
            callback.apply(this);
        });

        fn.apply(this, args);

        return function(fn) {
            cb = fn;
        }
    }
}

module.exports = thunkify;
