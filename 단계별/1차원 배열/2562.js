var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(Number(input[i].trim()));
}
console.log(Math.max(...arr));
console.log(arr.indexOf(Math.max(...arr))+1);