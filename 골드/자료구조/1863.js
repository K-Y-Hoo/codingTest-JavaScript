const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());

const arr = [];
let stack = [];
for (let i = 0; i < n; i++) {
  const [x, y] = input[i].trim().split(" ").map(Number);
  arr[i] = y;
}

let answer = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] === 0) {
    answer += stack.length;
    stack = [];
  } else if (stack.length) {
    if (stack[stack.length - 1] < arr[i]) stack.push(arr[i]);
    else {
      while (stack.length && stack[stack.length - 1] > arr[i]) {
        stack.pop();
        answer++;
      }
      if (stack.length && stack[stack.length - 1] < arr[i]) stack.push(arr[i]);
      if (!stack.length) stack.push(arr[i]);
    }
  } else {
    stack.push(arr[i]);
  }
}
answer += stack.length;
console.log(answer);
