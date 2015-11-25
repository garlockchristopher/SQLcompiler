window.getAst = function(input) {
    var Parser = require('flora-sql-parser').Parser;
    var parser = new Parser();
    var ast = parser.parse(input);
    return ast;
};