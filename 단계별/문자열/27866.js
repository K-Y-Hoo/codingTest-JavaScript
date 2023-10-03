var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const str = input[0].trim();
const n = Number(input[1]);
console.log(str[n-1]);