const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input.shift());
const distanceArr = input
  .shift()
  .split(" ")
  .map((v) => BigInt(v));
const amountArr = input
  .shift()
  .split(" ")
  .map((v) => BigInt(v));

let curAmount = amountArr[0];
let answer = 0n;

for (let i = 0; i < N - 1; i++) {
  answer += curAmount * distanceArr[i];
  if (curAmount > amountArr[i + 1]) {
    curAmount = amountArr[i + 1];
  }
}

console.log(String(answer));
