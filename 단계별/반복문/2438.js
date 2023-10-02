var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
var n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let answer = '';
  for (let j = 1; j <= i; j++) {
    answer += '*';
  }
  console.log(answer);
}