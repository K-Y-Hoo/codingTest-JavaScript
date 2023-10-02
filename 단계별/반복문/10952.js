var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let i = 0;
numbers = input[0].split(' ');
while (numbers[0] != 0 && numbers[1] != 0) {
  console.log(Number(numbers[0]) + Number(numbers[1]));
  i++;
  numbers = input[i].split(' ');

}