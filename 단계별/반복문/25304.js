var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
var total = Number(input[0]);
var result = 0;
for (let i = 2; i <= Number(input[1]) + 1; i++) {
  result += input[i].split(' ')[0] * input[i].split(' ')[1]
}

console.log(total === result ? 'Yes' : 'No');