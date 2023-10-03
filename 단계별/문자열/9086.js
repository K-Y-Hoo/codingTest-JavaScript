var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const t = Number(input[0].trim());

for (let i = 1; i <= t; i++) {
  let str = input[i].trim();
  console.log(str[0] + str[str.length-1]);
}