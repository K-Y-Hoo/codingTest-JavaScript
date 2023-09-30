var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
var a = input[0];
var b = input[1];

var rs1 = a * b[2];
var rs2 = a * b[1];
var rs3 = a * b[0];
var rs4 = a * b;
console.log(rs1);
console.log(rs2);
console.log(rs3);
console.log(rs4);