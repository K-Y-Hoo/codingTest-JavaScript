var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().split(' ');
var A = parseInt(input[0]);
var B = parseInt(input[1]);
var C = parseInt(input[2]);
console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);