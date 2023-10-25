const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const arr = input[0].split(" ").map(Number);

arr.sort((a, b) => a - b);
//console.log(arr);

let total = 0;
let sum = 0;
const sumArr = [];
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  total += sum;
  sumArr.push(sum);
}
//console.log(sumArr);
console.log(total);
