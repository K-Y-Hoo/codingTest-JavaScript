var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [line1, arrstr] = input;

arr = arrstr.split(' ').map(n => Number(n));

console.log(Math.min(...arr), Math.max(...arr));