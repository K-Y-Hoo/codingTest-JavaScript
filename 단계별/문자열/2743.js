var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const str = input[0].trim();
console.log(str.length);