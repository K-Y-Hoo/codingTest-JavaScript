const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
let n = parseInt(input);
let count = 0;
const coins = [5, 2];

if (n === 1 || n === 3) {
  console.log(-1);
  return;
}

while (n > 0) {
  if (n % 2 === 1 || n % 5 === 0) {
    n = n - 5;
    count++;
  } else if (n % 2 === 0) {
    n = n - 2;
    count++;
  }
}
console.log(count);
