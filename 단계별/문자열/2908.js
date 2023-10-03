var fs = require('fs');
const [a, b] = fs.readFileSync('dev/stdin').toString().trim().split(' ');
const newA = Number(a.split("").reverse().join(""));
const newB = Number(b.split("").reverse().join(""));

console.log(newA > newB ? newA : newB);