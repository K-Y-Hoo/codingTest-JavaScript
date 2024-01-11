const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [n, m] = info;
let answer = 0;

for (let i = 1; i < input.length; i++) {
  let left = -Infinity;
  let right = -Infinity;
  let tempMin = 0;

  for (let j = i; j >= 0; j--) {
    left = Math.max(left, input[j]);
  }
  for (let j = i; j < input.length; j++) {
    right = Math.max(right, input[j]);
  }
  tempMin = Math.min(left, right);
  answer += tempMin - input[i];
}

console.log(answer);
