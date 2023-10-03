var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [line1, line2] = input;
const x = Number(line1.split(' ')[1]);

const answer = line2.split(' ').filter((ele) => ele < x);
let result = answer.map(n => Number(n));
console.log(result.join(' '));