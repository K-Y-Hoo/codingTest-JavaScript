const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
input = input[0].trim().split(" ").map(Number);
input.sort((a, b) => a - b);
let target = 1;
//console.log(input);
for (let i = 0; i < input.length; i++) {
  if (target < input[i]) {
    break;
  }
  target += input[i];
}

console.log(target);
