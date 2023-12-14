const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input[0].split(" ").map(Number);
const answer = [];
const stack = [];

for (let i = 0; i < n; i++) {
  const standard = arr[i];
  while (stack.length && arr[stack[stack.length - 1]] < standard) {
    stack.pop();
  }

  if (stack.length === 0) {
    answer.push(0);
  } else {
    answer.push(stack[stack.length - 1] + 1);
  }
  stack.push(i);
  console.log(stack);
}

console.log(answer.join(" "));
