const babylon = require('babylon');
const traverse = require('babel-traverse').default;

module.exports = code => {
    const ast = babylon.parse(code, {
        sourceType: 'module',
        plugins: [
            'asyncFunctions',
            'classConstructorCall',
            'jsx',
            'flow',
            'trailingFunctionCommas',
            'doExpressions',
            'objectRestSpread',
            'decorators',
            'classProperties',
            'exportExtensions',
            'exponentiationOperator',
            'asyncGenerators',
            'functionBind',
            'functionSent'
        ],
    });

    let result = [];

    traverse(ast, {
        Program(path) {
            result = Object.keys(path.scope.globals);
        }
    });

    return result;
}