const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);


inputs.shift();
inputs.sort((a, b) => a-b);

for (i of inputs) {
  console.log(i);
}