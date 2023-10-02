var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
var n = parseInt(input[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}