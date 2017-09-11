# lesx-undeclared-vars

获取一段js代码中未声明的变量。

## usage

```javascript
const getUndeclaredVars = require('lesx-undeclared-vars');

getUndeclaredVars(`Toast.show('test');<Test test={a}/>`);

// ["Toast", "Test", "a"]
```