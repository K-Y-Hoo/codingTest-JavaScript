const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const heights = input.map((el) => parseInt(el));

const stack = [];
let answer = 0;

for (let i = 0; i < n; i++) {
  while (stack.length) {
    if (stack[stack.length - 1] <= heights[i]) {
      stack.pop();
    } else {
      break;
    }
  }
  answer += stack.length;
  stack.push(heights[i]);
}

console.log(answer);
