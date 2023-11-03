const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, l] = input.shift().trim().split(" ").map(Number);
let arr = input[0].trim().split(" ").map(Number);
arr.sort((a, b) => a - b);
let start = arr.shift();
let end = start + (l - 1);
let count = 1;
while (arr.length) {
  if (arr[0] <= end) {
    arr.shift();
  } else if (arr[0] > end) {
    start = arr[0];
    end = start + (l - 1);
    arr.shift();
    count++;
  }
}
console.log(count);
