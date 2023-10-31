const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

let zeroStack = [];
let oneStack = [];
let sum = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") {
    sum += input[i];
    if (input[i + 1] === "1" || input[i + 1] === undefined) {
      zeroStack.push(sum);
      sum = "";
    }
  }
  if (input[i] === "1") {
    sum += input[i];
    if (input[i + 1] === "0" || input[i + 1] === undefined) {
      oneStack.push(sum);
      sum = "";
    }
  }
}

console.log(Math.min(zeroStack.length, oneStack.length));
