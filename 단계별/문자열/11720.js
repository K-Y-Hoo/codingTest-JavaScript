var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const n = Number(input[0].trim());
let str = input[1].trim();

let sum = 0;
for (let i = 0; i < str.length; i++) {
  sum += Number(str[i]);
}

console.log(sum);