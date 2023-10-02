var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
var year = parseInt(input[0]);
var result = 0;
if (year % 4 === 0 && year % 100 !== 0 || year % 4 === 0 && year % 400 === 0) {
  result = 1;
} else {
  result = 0;
}

console.log(result);