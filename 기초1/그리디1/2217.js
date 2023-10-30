const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const ropes = input.map((v) => parseInt(v.trim()));
ropes.sort((a, b) => a - b);

const answer = [];

for (let i = 0; i < ropes.length; i++) {
  answer.push(ropes[i] * (n - i));
}

console.log(Math.max(...answer));
