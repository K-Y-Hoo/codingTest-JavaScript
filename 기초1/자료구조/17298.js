const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let n = inputs.shift();
let numbersArr = inputs[0].split(" ").map(Number);
let stack = [];

for (let i = 0; i < n; i++) {
  while (stack.length && numbersArr[stack[stack.length-1]] < numbersArr[i]) {
    numbersArr[stack.pop()] = numbersArr[i];
    //console.log(numbersArr);
  }
  stack.push(i);
}

while (stack.length) {
  numbersArr[stack.pop()] = -1;
}

console.log(numbersArr.join(" "));