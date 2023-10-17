const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const t = input.shift();
//const dp = new Array(Math.max(...input)).fill(0);
const arr = [0, 1, 2, 4];
const answer = [];
for (let i = 0; i < t; i++) {
  let num = input[i];
  for (let j = 4; j <= num; j++) {
    arr[j] = arr[j - 1] + arr[j - 2] + arr[j - 3];
  }
  answer.push(arr[num]);
}

console.log(answer.join("\n"));
