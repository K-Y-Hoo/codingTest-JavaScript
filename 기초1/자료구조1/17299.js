const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let n = parseInt(inputs.shift());

let numbersArr = inputs[0].split(" ").map(Number);

let stack = [];
let answer = new Array(n).fill(-1);

let count = {};

numbersArr.forEach((el) => {
  count[el] = (count[el] || 0) + 1;
});

for (let i = 0; i < n; i++) {
  while (stack.length && count[numbersArr[stack[stack.length-1]]] < count[numbersArr[i]]) {
    answer[stack.pop()] = numbersArr[i];
  }
  stack.push(i);
}

console.log(answer.join(" "));