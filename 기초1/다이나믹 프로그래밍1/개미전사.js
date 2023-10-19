const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const d = new Array(n).fill(0);
const foodsArray = input[0].split(" ").map(Number);

d[0] = foodsArray[0];
d[1] = Math.max(foodsArray[0], foodsArray[1]);

for (let i = 2; i < n; i++) {
  d[i] = Math.max(d[i - 1], d[i - 2] + foodsArray[i]);
}

console.log(d[n - 1]);
