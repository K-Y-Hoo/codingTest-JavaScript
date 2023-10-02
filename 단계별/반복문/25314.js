var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
var txt = 'long ';
var result = '';
var n = Number(Math.floor(input[0]/4));

for (let i = 1; i <= n; i++) {
  result += txt;
}

console.log(result + 'int');