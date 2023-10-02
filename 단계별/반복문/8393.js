var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split(' ');

var n = Number(input[0]);
var total = 0;
for (let i = 1; i <= n; i++) {
  total += i;
}
console.log(total);