const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
inputs.sort((a,b) => a-b);
let sum = inputs.reduce((cur, el) => cur + el, 0);





console.log(sum / 5);
console.log(inputs[2]);