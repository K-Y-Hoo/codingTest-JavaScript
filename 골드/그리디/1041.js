const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
input = input[0].split(" ").map(Number);

let minAF = Math.min(input[0], input[5]);
let minBE = Math.min(input[1], input[4]);
let minCD = Math.min(input[2], input[3]);

let sq1 = Math.min(minAF, Math.min(minBE, minCD));
let sq2 = Math.min(minAF + minBE, Math.min(minAF + minCD, minBE + minCD));
let sq3 = minAF + minBE + minCD;

if (n === 1) {
  let tempArr = new Array(...input);
  tempArr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < tempArr.length - 1; i++) {
    sum += tempArr[i];
  }
  console.log(sum);
  return;
}

let sq3Count = 4;
let sq2Count = 4 * (2 * n - 3);
let sq1Count = 5 * n ** 2 - sq3Count * 3 - sq2Count * 2;

console.log(sq3 * sq3Count + sq2 * sq2Count + sq1 * sq1Count);
