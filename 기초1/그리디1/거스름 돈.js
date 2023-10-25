const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString();
let n = parseInt(input);
let count = 0;

array = [500, 100, 50, 10];

for (coin of array) {
  count += Math.floor(n / coin);
  n %= coin;
}

console.log(n, count);
