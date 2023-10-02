var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let numbers = input[i].split(' ');

  console.log(Number(numbers[0]) + Number(numbers[1]));
}