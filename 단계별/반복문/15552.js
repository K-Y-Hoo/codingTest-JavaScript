var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
var t = Number(input[0]);
var total = '';
for (let i = 1; i <= t; i++) {
  number = input[i].split(' ');
  total += Number(number[0]) + Number(number[1]) + "\n";
  
}

console.log(total);