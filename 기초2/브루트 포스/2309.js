const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((acc, cur) => {
  return acc + cur;
}, 0);

let flag = null;

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (sum - input[i] - input[j] === 100) {
      flag = input.filter((v) => v !== input[i] && v !== input[j]);
      break;
    }
  }
  if (flag) {
    break;
  }
}

console.log(flag.sort((a, b) => a - b).join("\n"));
