var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
str = input[0].trim();
result = str.charCodeAt(0);
console.log(result);