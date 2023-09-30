var fs = require('fs');
var inputs = fs.readFileSync('dev.stdin').toString().trim().split(' ');
var sum = 0;
inputs.forEach(input => sum += parseInt(input));
console.log(sum);
