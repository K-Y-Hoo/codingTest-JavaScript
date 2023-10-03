var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
arr = input[1].trim().split(' ');
var count = 0;

for (n of arr) {
  if (n == input[2].trim().split(' ')) {
    count++;
  }
}

console.log(count);