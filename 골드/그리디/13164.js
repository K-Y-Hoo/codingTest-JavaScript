const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
input = input.shift().split(" ").map(Number);
const diff = [];
let answer = 0;

for (let i = 0; i < n - 1; i++) {
  diff.push(input[i + 1] - input[i]);
}

diff.sort((a, b) => a - b);

for (let i = 0; i < diff.length - (k - 1); i++) {
  answer += diff[i];
}

console.log(answer);
