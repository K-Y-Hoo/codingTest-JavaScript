var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
var n = Number(input[0]);

for (let i = 1; i<= n; i++) {
  numbers = input[i].split(' ');
  console.log(`Case #${i}: ${Number(numbers[0]) + Number(numbers[1])}`);
}