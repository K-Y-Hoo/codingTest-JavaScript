const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [str, target] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
  if (stack.length >= target.length) {
    if (stack.slice(-target.length, stack.length).join("") === target) {
      stack.splice(-target.length, stack.length);
    }
  }
}

console.log(stack.length ? stack.join("") : "FRULA");
