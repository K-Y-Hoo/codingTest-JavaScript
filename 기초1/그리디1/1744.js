const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = input.shift();
let answer = 0;

const posi = input.filter((n) => n > 0).sort((a, b) => b - a);
const nege = input.filter((n) => n <= 0).sort((a, b) => a - b);
//console.log(posi, nege);

for (let i = 0; i < posi.length; i += 2) {
  if (i === posi.length - 1) {
    answer += posi[i];
  } else if (posi[i] * posi[i + 1] > posi[i] + posi[i + 1]) {
    answer += posi[i] * posi[i + 1];
  } else {
    answer += posi[i] + posi[i + 1];
  }
}

for (let i = 0; i < nege.length; i += 2) {
  if (i === nege.length - 1) {
    answer += nege[i];
  } else {
    answer += nege[i] * nege[i + 1];
  }
}

console.log(answer);
