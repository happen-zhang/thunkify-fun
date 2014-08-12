
# thunkify #

包装异步函数，使用非回调的方式来处理数据，但依然不能保证工作流的正确执行。

## Demo ##

```
var fs = require('fs');

var thunkify = require('./thunkify');

var read = thunkify(fs.readFile);

read('README.md', 'utf8')(function(err, str){
    console.log(str);
});
```

## 其它 ##

* [node-thunkify-wrap](https://github.com/node-modules/node-thunkify-wrap)

* [node-thunkify](https://github.com/visionmedia/node-thunkify)
