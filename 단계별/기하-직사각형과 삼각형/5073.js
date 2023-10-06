const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
inputs.pop();
const answer = [];

for (let input of inputs) {
  let temp = input.split(" ").map(Number);
  temp.sort((a, b) => a - b);
  if (temp[2] >= temp[0] + temp[1]) {
    answer.push('Invalid');
    continue;
  } 
  const set = new Set(temp);
  if (set.size === 1) {
    answer.push("Equilateral");
  } else if (set.size === 2) {
    answer.push("Isosceles");
  } else {
    answer.push("Scalene");
  }
}

console.log(answer.join("\n"));